import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setSearch } from "../../actions/actions.js";
// css
import { css } from "emotion";
// data
import content from "../../content/content";
// components
import TextInput from "../ui-components/TextInput";
import RadioInput from "../ui-components/RadioInput";
import FormButton from "../ui-components/FormButton";
import Checkbox from "../ui-components/CheckboxInput";
import Checkout from "../checkout/Checkout";
import InfoBox from "../ui-components/InfoBox";

const DetailsView = props => {
  useEffect(() => {
    props.resetSearchString();
    props.setSearch(false);
  }, []);

  const [thisContent, setThisContent] = useState([]);
  const [project, setProject] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [formData, setFormData] = useState({
    fradrag: true,
    paymentOption: "Monthly",
    amount: 350
  });
  const [validForm, setValidForm] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);

  useEffect(() => {
    splitUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    validateForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const splitUrl = () => {
    const array = window.location.href.split("/");
    const projectId = array[array.length - 1];
    const organizationId = array[array.length - 2];

    getProject(projectId);
    getContent(organizationId);
  };

  const getProject = projectId => {
    content.forEach(content => {
      let projects = content.projects;
      if (projects && projects.length) {
        projects.forEach(project => {
          if (project.id.toString() === projectId.toString()) {
            setProject(project);
          }
        });
      }
    });
  };

  const getContent = contentId => {
    content.forEach(content => {
      if (contentId.toString() === content.id.toString()) {
        setThisContent(content);
      }
    });
  };

  const handleFormChange = e => {
    if (e.target.name === "fradrag") {
      setFormData({ ...formData, [e.target.name]: !formData.fradrag });
    } else if (e.target.name === "stoetFast") {
      setFormData({ ...formData, paymentOption: e.target.value });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const validateForm = () => {
    if (formData.name && formData.email && formData.telefon) setValidForm(true);
  };

  return (
    <div className={container()}>
      {!checkout && (
        <>
          <div>
            <Link to={`/`}>
              <div className="overview">
                <img src={`./media/logos/${thisContent.logo}`} alt="" />
                <h4>{thisContent.title}</h4>
              </div>
            </Link>
          </div>
          <div>
            <Link to={`/detailed-list/${thisContent.organizationId}`}>
              <div className="overview">
                <img src={`./media/images/${project.image}`} alt="" />
                <h4>{project.title}</h4>
              </div>
            </Link>
          </div>
          <div className="container">
            <div className="top">
              <div className="left">
                <h4>{`${project.organization} ${project.title}`}</h4>
                {project.description}
              </div>
              <div className="right">
                <img src={`./media/logos/supporters/${project.logo}`} alt="" />
              </div>
            </div>

            <div className="devGoals">
              {project.devGoals &&
                project.devGoals.map((goal, index) => (
                  <img
                    key={index}
                    src={`./media/logos/dev-goals/${goal}.gif`}
                    alt=""
                  />
                ))}
            </div>
            <div className="bottom">
              <div className="amount">
                <input
                  className="range"
                  name="amount"
                  type="range"
                  min="0"
                  max="500"
                  value={formData.amount}
                  onChange={handleFormChange}
                  //onChange={e => setAmount(e.target.value)}
                  id="range"
                />
                <div>
                  <TextInput
                    name="amount"
                    value={formData.amount}
                    handleChange={handleFormChange}
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
                onChange={handleFormChange}
              />
              <FormButton
                handleSubmit={() => {
                  validForm && setCheckout(true);
                  setInfoOpen(true);
                }}
                label="Støt nu - Fortsæt til betaling"
              />
            </div>
          </div>
          {!validForm && (
            <InfoBox
              open={infoOpen}
              setOpen={setInfoOpen}
              type="error"
              title="Husk at udfylde alle felter i formularen"
              content="Det ser ud som om nogle af felterne mangler at blive udfyldt."
            ></InfoBox>
          )}
        </>
      )}
      {checkout && (
        <>
          <Checkout formData={formData} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    lang: state.lang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    resetSearchString: () => dispatch({ type: "RESETSEARCHSTRING" }),
    setSearch: event => dispatch(setSearch(event))
  };
};

const container = () => css`
  font-size: 0.8rem;

  .overview {
    background-color: white;
    display: flex;
    margin: 1rem 0 1rem 0;
    padding: 0.5rem 0.75rem;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;
    height: 2rem;
    align-items: center;

    img {
      max-height: 100%;
      padding-right: 1rem;
    }
  }

  .container {
    background-color: white;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;

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

    .devGoals {
      margin: 1rem 1rem;
      max-height: 3rem;

      img {
        max-height: 3rem;
      }
    }

    .bottom {
      background-color: white;
      color: grey;

      margin: 1rem;
      padding: 1rem;
      background-color: #fef3f4;

      .amount {
        display: flex;
        align-items: center;

        div:first-child {
          width: 80%;
        }

        div:last-child {
          margin-left: auto;

          input {
            align-items: right;
          }
        }
      }

      input {
        margin: 0.75rem 0 0.75rem 0;
      }
    }
  }

  input[type="radio"],
  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  label {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  #range {
    margin-right: 1rem;
    -webkit-appearance: none !important;
    background: #cecece;
    height: 1px;
    width: 425px;
    -webkit-transform: translate3d(0px, 0px, 0px);
    margin-top: 10px;
    cursor: pointer;
  }

  #range::-webkit-slider-thumb {
    margin-right: 1rem;
    -webkit-appearance: none !important;
    background: #666;
    height: 10px;
    width: 10px;
    cursor: pointer;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
