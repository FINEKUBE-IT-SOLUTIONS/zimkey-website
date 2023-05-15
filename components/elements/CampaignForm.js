import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Router from "next/router";
import Spinner from "react-bootstrap/Spinner";

function CampaignForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    propertyType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleValueChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDropdownChange = (value) => {
    setValues({ ...values, propertyType: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("values::-", values);

    try {
      if (
        values.name == "" ||
        values.phone == "" ||
        values.apartmentType == ""
      ) {
        //   document.getElementById("validationMessage").style.display = "block";
      } else {
        setIsSubmitting(true);

        //   document.getElementById("validationMessage").style.display = "none";

        const rawResponse = await fetch("/api/submit-campaign", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });
        const content = await rawResponse.json();

        setIsSubmitting(false);

        Router.push("/campaign-success");
      }
    } catch (error) {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="compaign-form" className="compaignFormContainer p-4">
      <h4
        style={{ textAlign: "center", paddingBottom: "2rem", color: "white" }}
      >
        Get A Free Quote
      </h4>
      <div className="col-md-12">
        <form
          className="mb-5"
          method="post"
          id="contactForm"
          name="contactForm"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="compaignInput form-control"
                name="name"
                id="name"
                placeholder="Your name"
                onChange={handleValueChange("name")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="compaignInput form-control"
                name="phone"
                id="phone"
                placeholder="Phone"
                maxLength={10}
                pattern="\d*"
                onChange={handleValueChange("phone")}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
              {/* <div
                className="dropdown"
                onChange={handleValueChange("apartmentType")}
              >
                <button
                  className="campaignDropdown compaignInput btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {values?.apartmentType
                    ? values?.apartmentType
                    : "Property Type"}
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ width: "100%" }}
                >
                  <a
                    className="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Apartment")}
                  >
                    Apartment
                  </a>
                  <a
                    className="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Villa")}
                  >
                    Villa
                  </a>
                  <a
                    className="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Office")}
                  >
                    Property
                  </a>
                  <a
                    className="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Other")}
                  >
                    Other
                  </a>
                </div>
              </div> */}

              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  className="campaignDropdown compaignInput"
                >
                  {values?.propertyType
                    ? values?.propertyType
                    : "Property Type"}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ width: "100%" }}>
                  <Dropdown.Item
                    className="campaignDropdownItem"
                    onClick={() => handleDropdownChange("Apartment")}
                  >
                    Apartment
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="campaignDropdownItem"
                    onClick={() => handleDropdownChange("Villa")}
                  >
                    Villa
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="campaignDropdownItem"
                    onClick={() => handleDropdownChange("Office")}
                  >
                    Office
                  </Dropdown.Item>
                  <Dropdown.Item
                    className="campaignDropdownItem"
                    onClick={() => handleDropdownChange("Other")}
                  >
                    Other
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </DropdownButton> */}

              {/* <input
                type="text"
                className="compaignInput form-control"
                name="subject"
                id="subject"
                placeholder="Subject"
              /> */}
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-12 form-group">
              <textarea
                className="compaignInput form-control"
                name="message"
                id="message"
                cols={30}
                rows={7}
                placeholder="Write your message"
                defaultValue={""}
              />
            </div>
          </div> */}
          <div className="row">
            <div className="col-12 text-center">
              {isSubmitting ? (
                <Spinner animation="border" />
              ) : (
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btnCampaign btnCampaign-primary rounded-0 py-2 px-4"
                  style={{ backgroundColor: "#333333" }}
                />
              )}
              <span className="submitting" />
            </div>
          </div>
        </form>
        <div id="form-message-warning mt-4" />
        <div id="form-message-success">Your message was sent, thank you!</div>
      </div>
    </div>
  );
}

export default CampaignForm;
