/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
const FooterV1 = () => {
  return (
    <>
      <footer className="footer mt-50">
        <div className="container">
          {/* <div className="row">
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Contact</h4>
              <div className="mt-20 text-body-text color-gray-600 mb-20">
                4517 Washington Ave. Manchester, Kentucky 39495
              </div>
              <div className="mt-20 text-body-text color-gray-600">
                (239) 555-0108
              </div>
              <div className="text-body-text color-gray-600">
                contact@agon.com
              </div>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">About Us</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/#">
                    <a>Mission &amp; Vision</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Our Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-career">
                    <a>Careers</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Press &amp; Media</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Advertising</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Testimonials</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Discover</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/blog-2">
                    <a>Our Blog</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-pricing-1">
                    <a>Plans &amp; Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Knowledge Base</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Cookie Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Office Center</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog-1">
                    <a>News &amp; Events</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-20 mb-30">
              <h4 className="text-heading-5">Support</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/page-faqs-1">
                    <a>FAQs</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Editor Help</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Community</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Live Chatting</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-contact">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Support Center</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 width-16">
              <h4 className="text-heading-5">Useful links</h4>
              <ul className="menu-footer mt-20">
                <li>
                  <Link href="/#">
                    <a>Request an offer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>How it works</a>
                  </Link>
                </li>
                <li>
                  <Link href="/page-pricing-2">
                    <a>Pricing</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Reviews</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#">
                    <a>Stories</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="footer-bottom mt-20">
            <div className="row">
              <div className="col-md-6">
                <span className="color-gray-400 text-body-lead">
                  © Zimkey 2022
                </span>
                <Link href="/privacy-policy">
                  <a className="text-body-text color-gray-400 ml-50">
                    Privacy policy
                  </a>
                </Link>
                {/* <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">Cookies</a>
                </Link> */}
                <Link href="/page-terms">
                  <a className="text-body-text color-gray-400 ml-50">
                    Terms of service
                  </a>
                </Link>
              </div>
              <div className="col-md-6 text-center text-lg-end text-md-end">
                <div className="footer-social">
                  <a href="https://www.facebook.com/zimkey.in" target="_blank" rel="noopener noreferrer">
                    <i className="icon-socials icon-facebook"></i>
                  </a>
                  {/* <a href="https://twitter.com" target="_blank">
                    <a className="icon-socials icon-twitter"></a>
                  </a> */}
                  <a href="https://www.instagram.com/zimkey_home_services/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-socials icon-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/zimkey-home-services-2a5b15251/" target="_blank" rel="noopener noreferrer">
                    <i className="icon-socials icon-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterV1;
