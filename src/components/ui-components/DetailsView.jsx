import React, { useState, useEffect } from 'react';
// css
import { css } from 'emotion';
// data
import content from '../../content/content'
// components
import TextInput from './TextInput'
import RadioInput from './RadioInput'
import FormButton from './FormButton'
import Checkbox from './CheckboxInput'
import Checkout from '../checkout/Checkout'


const DetailsView = props => {
  
  const [project, setProject] = useState([])
  const [checkout, setCheckout] = useState(false)
  const [formData, setFormData] = useState({fradrag: true, paymentOption: "Monthly", amount: 350})
  const [validForm, setValidForm] = useState(false)
  
  useEffect(() => {
    getProject()
  }, [])

  useEffect(() => {
    console.log(formData)
  }, [formData])

  useEffect(() => {
    validateForm()
  }, [formData])

  const getProject = () => {
    const projectId = window.location.href.split("details/")[1];

    content.forEach(content => {
      let projects = content.projects;
      if (projects && projects.length > 0) {
        projects.forEach(project => {
          if (project.id.toString() === projectId.toString()) {
            setProject(project);
          }
        })
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
              <FormButton handleSubmit={() => validForm && setCheckout(true)} label="Støt nu - Fortsæt til betaling"/>
            </div>
          </>
      }
      {checkout && <>
        <Checkout formData={formData}/>
      </>
      }

      </div>
    )
}

const container = () => css`
  padding: 1rem;
  font-size: 0.8rem;
  
  .top {
    display: flex;

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
    color: grey;
    margin-top: 1rem;
    padding: 1rem;
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
  

`

export default DetailsView;