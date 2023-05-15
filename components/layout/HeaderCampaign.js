/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
const HeaderCampaign = ({ handleOpen, headerStyle, activePage }) => {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });
  return (
    <>
      <header
        className={
          scroll
            ? `${headerStyle} header sticky-bar stick `
            : `${headerStyle} header sticky-bar`
        }
        style={{ background: "#FAEDE3" }}
      >
        <div className="container" id="header" style={{ marginTop: "1rem" }}>
          <div className="row d-flex flex-row" style={{ textAlign: "right" }}>
            <div className="d-flex justify-content-end px-4 gap-4">
              {/* <a href="tel:+917733001121" style={{ paddingRight: "8px" }}> */}
              {/* <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 16.2461C20 15.9506 19.9418 15.6581 19.8287 15.3852C19.7156 15.1123 19.5499 14.8643 19.3409 14.6554C19.132 14.4466 18.8839 14.2809 18.611 14.168C18.338 14.055 18.0454 13.9969 17.75 13.9971H6.25C5.95449 13.9969 5.66185 14.055 5.38881 14.1681C5.11577 14.2811 4.86767 14.4468 4.65872 14.6558C4.44976 14.8647 4.28403 15.1128 4.171 15.3859C4.05798 15.6589 3.99987 15.9516 4 16.2471V16.8241C4 17.7171 4.319 18.5801 4.898 19.2591C6.465 21.0931 8.851 21.9991 11.996 21.9991C15.142 21.9991 17.529 21.0941 19.098 19.2601C19.68 18.5807 19.9999 17.7156 20 16.8211V16.2461ZM6.249 15.4971H17.75C18.163 15.4971 18.498 15.8321 18.498 16.2471V16.8221C18.4982 17.3585 18.3066 17.8774 17.958 18.2851C16.701 19.7531 14.734 20.4981 11.995 20.4981C9.257 20.4981 7.291 19.7531 6.038 18.2851C5.69016 17.8778 5.49904 17.3597 5.499 16.8241V16.2461C5.499 15.8331 5.834 15.4971 6.248 15.4971H6.249Z"
                    fill="black"
                  />
                  <path
                    d="M16.997 7.00209C16.9971 5.94905 16.6648 4.92284 16.0474 4.0698C15.4299 3.21676 14.5589 2.58044 13.5585 2.25156C12.5582 1.92269 11.4795 1.91805 10.4763 2.23831C9.47318 2.55858 8.59675 3.18739 7.972 4.03509C7.89954 4.01214 7.82401 4.00034 7.748 4.00009H5.25C5.05109 4.00009 4.86032 4.07911 4.71967 4.21976C4.57902 4.36041 4.5 4.55118 4.5 4.75009V10.2481C4.49974 10.6094 4.57067 10.9672 4.70876 11.3011C4.84684 11.635 5.04936 11.9384 5.30475 12.1939C5.56014 12.4495 5.86338 12.6522 6.19716 12.7906C6.53093 12.9289 6.8887 13.0001 7.25 13.0001H7.5V12.9961H7.51C7.67943 12.9964 7.84613 12.9535 7.9944 12.8715C8.14268 12.7895 8.26764 12.6712 8.35753 12.5276C8.44741 12.3839 8.49925 12.2198 8.50817 12.0506C8.51708 11.8814 8.48278 11.7127 8.40849 11.5605C8.3342 11.4082 8.22237 11.2774 8.08353 11.1803C7.94469 11.0832 7.78342 11.023 7.6149 11.0055C7.44639 10.9879 7.27618 11.0136 7.12032 11.08C6.96446 11.1464 6.82807 11.2514 6.724 11.3851C6.50744 11.2846 6.32418 11.1243 6.19588 10.923C6.06758 10.7217 5.99961 10.4878 6 10.2491V10.0001H6.748C7.128 10.0001 7.481 9.87809 7.768 9.67209C8.34639 10.5891 9.20715 11.2932 10.2206 11.6784C11.234 12.0636 12.3451 12.1089 13.3865 11.8076C14.428 11.5063 15.3433 10.8747 15.9945 10.0079C16.6457 9.14118 16.9975 8.08623 16.997 7.00209ZM6.997 6.89609C6.99554 6.96675 6.99554 7.03743 6.997 7.10809V8.24909C6.997 8.31539 6.97066 8.37898 6.92378 8.42587C6.87689 8.47275 6.81331 8.49909 6.747 8.49909H6V5.50109H6.998V6.89609H6.997ZM8.497 7.09109V6.91309C8.52041 5.99284 8.90542 5.11886 9.56865 4.48047C10.2319 3.84207 11.1199 3.49067 12.0404 3.50237C12.9608 3.51408 13.8397 3.88795 14.4864 4.543C15.1332 5.19805 15.4959 6.08154 15.4959 7.00209C15.4959 7.92264 15.1332 8.80613 14.4864 9.46118C13.8397 10.1162 12.9608 10.4901 12.0404 10.5018C11.1199 10.5135 10.2319 10.1621 9.56865 9.52372C8.90542 8.88532 8.52041 8.01134 8.497 7.09109Z"
                    fill="black"
                  />
                </svg> */}
              {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  width="18"
                  height="18"
                  viewBox="5 5 22 22"
                >
                  <path d="M11.748 5.773S11.418 5 10.914 5c-.496 0-.754.229-.926.387S6.938 7.91 6.938 7.91s-.837.731-.773 2.106c.054 1.375.323 3.332 1.719 6.058 1.386 2.72 4.855 6.876 7.047 8.337 0 0 2.031 1.558 3.921 2.191.549.173 1.647.398 1.903.398.26 0 .719 0 1.246-.385.536-.389 3.543-2.807 3.543-2.807s.736-.665-.119-1.438c-.859-.773-3.467-2.492-4.025-2.944-.559-.459-1.355-.257-1.699.054-.343.313-.956.828-1.031.893-.112.086-.419.365-.763.226-.438-.173-2.234-1.148-3.899-3.426-1.655-2.276-1.837-3.02-2.084-3.824a.56.56 0 0 1 .225-.657c.248-.172 1.161-.933 1.161-.933s.591-.583.344-1.27-1.906-4.716-1.906-4.716z" />
                </svg> */}
              {/* (+91)  */}
              {/* 7733001121
              </a> */}
              {/* <p className="text-right">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0024 7.75C11.2068 7.75 10.4437 8.06607 9.88112 8.62868C9.31851 9.19129 9.00244 9.95435 9.00244 10.75C9.00244 11.5456 9.31851 12.3087 9.88112 12.8713C10.4437 13.4339 11.2068 13.75 12.0024 13.75C12.7981 13.75 13.5612 13.4339 14.1238 12.8713C14.6864 12.3087 15.0024 11.5456 15.0024 10.75C15.0024 9.95435 14.6864 9.19129 14.1238 8.62868C13.5612 8.06607 12.7981 7.75 12.0024 7.75ZM10.2524 10.75C10.2524 10.2859 10.4368 9.84075 10.765 9.51256C11.0932 9.18437 11.5383 9 12.0024 9C12.4666 9 12.9117 9.18437 13.2399 9.51256C13.5681 9.84075 13.7524 10.2859 13.7524 10.75C13.7524 11.2141 13.5681 11.6592 13.2399 11.9874C12.9117 12.3156 12.4666 12.5 12.0024 12.5C11.5383 12.5 11.0932 12.3156 10.765 11.9874C10.4368 11.6592 10.2524 11.2141 10.2524 10.75Z"
                    fill="black"
                  />
                  <path
                    d="M18.5 16L13.456 21.355C13.269 21.5536 13.0434 21.7118 12.793 21.8199C12.5426 21.9281 12.2728 21.9838 12 21.9838C11.7273 21.9838 11.4574 21.9281 11.207 21.8199C10.9566 21.7118 10.731 21.5536 10.544 21.355L5.50001 16H5.51901L5.51051 15.99L5.50001 15.9775C4.20536 14.4463 3.49657 12.5051 3.50001 10.5C3.50001 5.8055 7.30551 2 12 2C16.6945 2 20.5 5.8055 20.5 10.5C20.5035 12.5051 19.7947 14.4463 18.5 15.9775L18.4895 15.99L18.481 16H18.5ZM17.5285 15.1905C18.6426 13.8819 19.253 12.2186 19.25 10.5C19.25 6.496 16.004 3.25 12 3.25C7.99601 3.25 4.75001 6.496 4.75001 10.5C4.75001 12.29 5.39701 13.926 6.47151 15.1905L6.62551 15.372L11.454 20.4975C11.5241 20.572 11.6087 20.6313 11.7026 20.6718C11.7965 20.7124 11.8977 20.7333 12 20.7333C12.1023 20.7333 12.2035 20.7124 12.2974 20.6718C12.3913 20.6313 12.4759 20.572 12.546 20.4975L17.3745 15.372L17.5285 15.1905Z"
                    fill="black"
                  />
                </svg>
                Kochi, India
              </p> */}
            </div>
          </div>
          <div className="main-header">
            <div className="header-left">
              <div className="header-logo">
                <Link href="/">
                  <a className="d-flex">
                    {headerStyle ? (
                      <img alt="Zimkey" src="/assets/brand/zimkey-logo.svg" />
                    ) : (
                      <img alt="Zimkey" src="/assets/brand/zimkey-logo.svg" />
                    )}
                  </a>
                </Link>
              </div>
              <div className="header-nav">
                {/* <nav
                  className="nav-main-menu d-none d-xl-block"
                  style={{ textAlign: "right" }}
                >
                  <ul className="main-menu">
                    <li>
                      <Link href="/">
                        <a style={activePage == 'home' ? {color: '#006D77'} : {}}>Home</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a style={activePage == 'about-us' ? {color: '#006D77'} : {}}>About Us</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us">
                        <a style={activePage == 'contact-us' ? {color: '#006D77'} : {}}>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </nav> */}
                {/* <div
                  className="burger-icon burger-icon-white"
                  onClick={handleOpen}
                >
                  <span className="burger-icon-top" />
                  <span className="burger-icon-mid" />
                  <span className="burger-icon-bottom" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderCampaign;