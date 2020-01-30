import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
//config
import { getBaseUrl } from "../../config";
// actions
import { setSearch } from "../../actions/actions.js";
// css
import { css } from "emotion";
// components
import TextInput from "../ui-components/TextInput";
import RadioInput from "../ui-components/RadioInput";
import Slider from "../ui-components/Slider";
import FormButton from "../ui-components/FormButton";
import Checkbox from "../ui-components/CheckboxInput";
import Checkout from "../checkout/Checkout";
import InfoBox from "../ui-components/InfoBox";
import { ChevronLeftIcon } from "mdi-react";

const DetailsView = props => {
  const [thisContent, setThisContent] = useState({ project: {} });
  const [project, setProject] = useState([]);
  const [checkout, setCheckout] = useState(false);
  const [formData, setFormData] = useState({
    fradrag: true,
    paymentOption: "Monthly",
    amount: 350
  });
  const [validForm, setValidForm] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const baseUrl = getBaseUrl();

  useEffect(() => {
    props.resetSearchString();
    props.setSearch(false);
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

    getContent(organizationId, projectId);
  };

  const getContent = async (organizationId, projectId) => {
    const reqUrl = `${baseUrl}/project/${organizationId}/${projectId}`;

    try {
      let { data } = await axios.get(reqUrl);

      setThisContent(data);
    } catch (error) {
      console.log(error);
    }
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
                <ChevronLeftIcon />
                <img src={`./media/logos/${thisContent.logo}`} alt="" />
                <h4>{thisContent.title}</h4>
              </div>
            </Link>
          </div>
          <div>
            <Link to={`/detailed-list/${thisContent.organizationId}`}>
              <div className="overview">
                <ChevronLeftIcon />
                <img
                  src={`./media/images/${thisContent.project.image}`}
                  alt=""
                />
                <h4>{thisContent.project.title}</h4>
              </div>
            </Link>
          </div>
          <div className="container">
            <div className="top">
              <div className="left">
                <h4>{`${thisContent.project.organization} ${thisContent.project.title}`}</h4>
                {thisContent.project.description}
              </div>
              <div className="right">
                <h4>Støttet af:</h4>
                <img
                  src={`./media/logos/supporters/${thisContent.project.logo}`}
                  alt=""
                />
                <p>Fordbler beløbet</p>
              </div>
            </div>

            <div className="dev-goals">
              {thisContent.project.devGoals &&
                thisContent.project.devGoals.map((goal, index) => (
                  <img
                    key={index}
                    src={`./media/logos/dev-goals/${goal}.gif`}
                    alt=""
                  />
                ))}
            </div>
            <div className="bottom">
              <div className="amount input">
                <Slider
                  name="amount"
                  value={formData.amount}
                  onChange={handleFormChange}
                  min="0"
                  max="500"
                />
                <div className="amount-textinput">
                  <TextInput
                    name="amount"
                    value={formData.amount}
                    handleChange={handleFormChange}
                  />
                  <div>Indtast valgfrit beløb</div>
                </div>
              </div>
              <div className="input">
                <RadioInput
                  name="stoetFast"
                  title="Støt fast"
                  value="Monthly"
                  checked={formData.paymentOption === "Monthly"}
                  onChange={handleFormChange}
                />
                <RadioInput
                  name="stoetFast"
                  title="Støt én gang"
                  value="Once"
                  checked={formData.paymentOption === "Once"}
                  onChange={handleFormChange}
                />
              </div>
              <div className="input">
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
              </div>
              <div className="input">
                <Checkbox
                  name="fradrag"
                  value={formData.fradrag}
                  checked={formData.fradrag}
                  onChange={handleFormChange}
                />
              </div>
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

    svg {
      padding-right: 1rem;
    }
  }

  .container {
    background-color: white;
    border-top: 1px solid lightgrey;
    border-bottom: 1px solid lightgrey;

    .top {
      display: flex;
      padding: 0.75rem;
      background-color: white;

      .left {
        max-width: 66%;
        line-height: 1.2rem;
      }

      .right {
        margin-left: 1rem;
        width: 33%;
        img {
          width: 100%;
        }
      }
    }

    .dev-goals {
      margin: 0.5rem 1rem 1.5rem 1rem;
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
          width: 50%;
        }

        .amount-textinput {
          margin-left: auto;
          padding-left: 1rem;

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

  label {
    margin-right: 1rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  h4 {
    padding: 0.5rem 0 0.8rem 0;
    margin: 0;
    font-weight: normal;
    font-size: 1rem;
  }

  .input {
    margin-bottom: 1.5rem;
  }
`;

export default connect(mapStateToProps, mapDispatchToProps)(DetailsView);
