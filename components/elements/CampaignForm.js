import React, { useEffect, useState } from "react";

function CampaignForm() {
  const [values, setValues] = useState({
    apartmentType: "",
  });

  const handleValueChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleDropdownChange = (value) => {
    setValues({ ...values, apartmentType: value });
  };

  return (
    <div id="compaign-form" className="compaignFormContainer p-4">
      <div className="col-md-12">
        <form
          className="mb-5"
          method="post"
          id="contactForm"
          name="contactForm"
        >
          <div className="row">
            <div className="col-md-12 form-group">
              <input
                type="text"
                className="compaignInput form-control"
                name="name"
                id="name"
                placeholder="Your name"
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
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 form-group">
              <div
                class="dropdown"
                onChange={handleValueChange("apartmentType")}
              >
                <button
                  class="campaignDropdown compaignInput btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {values?.apartmentType
                    ? values?.apartmentType
                    : "Apartment Type"}
                </button>
                <div
                  class="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  style={{ width: "100%" }}
                >
                  <a
                    class="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Apartment")}
                  >
                    Apartment
                  </a>
                  <a
                    class="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Villa")}
                  >
                    Villa
                  </a>
                  <a
                    class="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Property")}
                  >
                    Property
                  </a>
                  <a
                    class="campaignDropdownItem dropdown-item"
                    onClick={() => handleDropdownChange("Other")}
                  >
                    Other
                  </a>
                </div>
              </div>
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
              <input
                type="submit"
                defaultValue="Send Message"
                className="btnCampaign btnCampaign-primary rounded-0 py-2 px-4"
                style={{ backgroundColor: "#333333" }}
              />
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
