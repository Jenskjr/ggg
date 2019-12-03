import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// css
import { css } from 'emotion';
// data
import content from '../../content/content'
// components
import TextInput from '../ui-components/TextInput'
import RadioInput from '../ui-components/RadioInput'
import FormButton from '../ui-components/FormButton'
import Checkbox from '../ui-components/CheckboxInput'
import Checkout from '../checkout/Checkout'
import InfoBox from '../ui-components/InfoBox'
import ScrollView from './../ui-components/ScrollView'


const DetailsView = props => {
  const [thisContent, setThisContent] = useState([])
  const [project, setProject] = useState([])
  const [checkout, setCheckout] = useState(false)
  const [formData, setFormData] = useState({fradrag: true, paymentOption: "Monthly", amount: 350})
  const [validForm, setValidForm] = useState(false)
  const [infoOpen, setInfoOpen] = useState(false)
  
  useEffect(() => {
    splitUrl()
  }, [])

  useEffect(() => {
    validateForm()
  }, [formData])

  const splitUrl = () => {
    const array = window.location.href.split("/");
    const projectId = array[array.length - 1];
    const organizationId = array[array.length - 2]
    
    getProject(projectId);
    getContent(organizationId);
  }

  const getProject = projectId => {
    content.forEach(content => {
      let projects = content.projects;
      if (projects && projects.length) {
        projects.forEach(project => {
          if (project.id.toString() === projectId.toString()) {
            setProject(project);
          }
        })
      }
    })
  }

  const getContent = contentId => {
    content.forEach(content => {
      if (contentId.toString() === content.id.toString()) {
          setThisContent(content)
      }
  })
  }

  const handleFormChange = e => {
    if (e.target.name === "fradrag") {
      setFormData({...formData, [e.target.name]: !formData.fradrag})  
    }
    else if (e.target.name === "stoetFast") {
      setFormData({...formData, paymentOption: e.target.value}) 
    }
    else {
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    
  }

  const validateForm = () => {
    if (formData.name && formData.email && formData.telefon) 
      setValidForm(true)
  }

  return (
        <div className={container()}>
        {!checkout &&
          <>
            <div>
              <Link to={`/`}>
                <div className="organization"><img src={`/media/logos/${thisContent.logo}`} alt="" /><h4>{thisContent.title}</h4></div>
              </Link>
            </div>
            <div>
              <Link to={`/detailed-list/${thisContent.organizationId}`}>
                <div className="organization"><img src={`/media/images/${project.image}`} alt="" /><h4>{project.title}</h4></div>
              </Link>
            </div>
            <div className="top">
              <div className="left">
                  <h4>{`${project.organization} ${project.title}`}</h4>
                  {project.description}
              </div>
              <div className="right"><img src={`/media/logos/supporters/${project.logo}`} alt=""/></div>
            </div>
            <div className="bottom">
              <div className="one">
                <div>Slider</div>
                <div>
                  <TextInput 
                    name="amount" 
                    placeholder={formData.amount}
                    handleChange={handleFormChange}
                    value={formData.amount}
                    />
                  <div>Indtast valgfrit beløb</div>
                </div>
              </div>  
              <RadioInput 
                name="stoetFast" 
                title="støt fast" 
                value="Monthly"
                checked={formData.paymentOption === "Monthly"}
                onChange={handleFormChange}
                />
              <RadioInput 
                name="stoetFast" 
                title="støt én gang"
                value="Once" 
                checked={formData.paymentOption === "Once"}
                onChange={handleFormChange}
                />
              <TextInput 
                name="name"
                placeholder="Dit navn" 
                handleChange={handleFormChange}
                value={formData.name}
              />
              <TextInput 
                name="email"
                placeholder="Din e-mail (benyttes til kvittering)" 
                handleChange={handleFormChange}
                value={formData.email}
              />
              <TextInput
                name="telefon" 
                placeholder="Dit telefonnr" 
                handleChange={handleFormChange}
                value={formData.telefon}
              />
              <Checkbox 
                name="fradrag"
                value={formData.fradrag}
                checked={formData.fradrag}
                onClick={handleFormChange}
                />
              <FormButton handleSubmit={() => {validForm && setCheckout(true); setInfoOpen(true)}} label="Støt nu - Fortsæt til betaling"/>
            </div>
            {!validForm && 
              <InfoBox 
                open={infoOpen} 
                setOpen={setInfoOpen} 
                type="error"
                title="Husk at udfylde alle felter i formularen"
                content="Det ser ud som om nogle af felterne mangler at blive udfyldt."  
              >
              </InfoBox>
            }
          </>
      }
      {checkout && <>
        <Checkout formData={formData}/>
      </>
      }

      </div>
      
    )
}

const mapStateToProps = state => {
  return {
      lang: state.lang
  };
};

const container = () => css`
  font-size: 0.8rem;
  
  .organization {
    background-color: white;
    display: flex;
    margin: 1rem 0 1rem 0;
    padding: 0.5rem 0.75rem;
    border: 1px solid lightgrey;
    height: 2rem;
    align-items: center;

    img {
        max-height: 100%;
        padding-right: 1rem;
    }
  }

  .top {
    display: flex;
    // border: 1px solid grey;
    padding: 0.75rem;
    background-color: white;

    .left {
      max-width: 66%;
    }

    .right {
      margin-left: 1rem;
      width: 33%;
      img {
        width: 100%;
      }
    }
  }

  .bottom {
    background-color: white;
    
    .box {
      
    }
    color: grey;
    margin-top: 1rem;
    padding: 1rem;
    margin: 0.75rem;
    background-color: #fef3f4;
  
    .one {
      display: flex;
      align-items: center;

      div:first-child {
        width: 80%;
      }
    }

    input {
      margin: 0.75rem 0 0.75rem 0;
    }
  }

  input[type=radio], input[type=checkbox] {
    margin-right: 0.5rem;
  }

  label {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
  }
  

`

export default connect(mapStateToProps)(DetailsView);