/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import "react-modal-video/css/modal-video.css";
import LayoutCampaign from "../components/layout/LayoutCampaign";
import images from "../public/assets/imgs/template/thanku.svg";
// import images from "../public/assets/imgs/template/thanks.png";
import Image from "next/image";

function CampaignSuccess() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <LayoutCampaign currentPage={"thank-you"}>
        <section className="section-box">
          <div className="banner-hero bg-about-3">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-center">
                  <h1 className="text-display-2 color-gray-900">Thank You!</h1>

                  <p style={{ fontSize: "1rem" }}>
                    {" "}
                    Thank you for your response. Our team will contact you soon.
                  </p>
                  <br />
                  <Image
                    src={images}
                    alt="Images"
                    layout="fixed"
                    width={300}
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </LayoutCampaign>
    </>
  );
}

export default ThankYou;
