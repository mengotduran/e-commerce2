import Link from "next/link";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { ImWhatsapp } from "react-icons/im";
import { IoSearch } from "react-icons/io5";
import React, { useState, useEffect } from "react";
import { Dropdown } from "@nextui-org/react";

export const Header = () => {
  const [lang, setLang] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isShown, setIsShown] = useState(false);

  const toggleLanguage = () => {
    setLang(!lang);
  };

  const handleSidebar = (status) => {
    // if (status) {
    //   setIsSidebarOpen(true);
    // } else {
    //   setIsSidebarOpen(false);
    // }
    setIsSidebarOpen(!isSidebarOpen)
  };

  const hamburgerClick = () =>{
    setIsSidebarOpen(false)
    setIsActive(true)
  }

  const handleClick = (event) => {
    setIsShown((current) => !current);
    setOpenLang(!openLang);
  };

  return (
    <>
      <header className="main-header">
        <div className="main-div">
          <div className="first-header">
            <div className="FH-icons">
              <Link href="#" className="icon-links">
                <BsFacebook />
              </Link>
              <Link href="#" className="icon-links">
                <SlSocialInstagram />
              </Link>
              <Link href="#" className="icon-links">
                <ImWhatsapp />
              </Link>
            </div>
            <div className="search_lang-div">
              <div className="search_div">
                <input id="gsearch" name="gsearch" className="input" />
                <IoSearch className="search" />
              </div>
              <div className="lang_div">
                <button
                  onClick={toggleLanguage}
                  className={lang ? "toggleL" : "toggleN"}
                >
                  EN
                </button>
                <button
                  onClick={toggleLanguage}
                  className={lang ? "toggleN" : "toggleL"}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
          <div className="second-header">
            <div className="logo">
              <Link href="/">
                <Image src="/logo.jpg" width={50} height={50} />
              </Link>
            </div>

            <div className="last-SH">
              <div className="navbar-container">
                <div className="nav_links">
                  <Link href="/" className="nav_link_text">
                    Home
                  </Link>
                  <div className="drop_down_div">
                    <Dropdown>
                      <Dropdown.Button
                        css={{
                          borderRadius: 0, // radii.xs
                          background: "white", // colors.pink800
                          color: "grey",
                          height: "$12",
                          margin: "0px",
                          "&:hover": {
                            background: "#eef075",
                          },
                          "&:active": {
                            background: "$pink200",
                          },
                        }}
                      >
                        REGARDS
                      </Dropdown.Button>
                      <Dropdown.Menu aria-label="Static Actions">
                        <Dropdown.Item
                          key="new"
                          css={{
                            height: "60px",
                          }}
                        >
                          <Link href="/Regards/presentation">
                            PRESENTATION OF HOLISTIC HOSPITAL
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="copy">
                          <Link href="/Regards/medicine">
                            HOLISTIC MEDICINE
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="edit">
                          <Link href="/Regards/specialist">SPECIALIST</Link>
                        </Dropdown.Item>
                        <Dropdown.Item key="agency">
                          <Link href="/Regards/therapy">OUR AGENCIES</Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                      <Dropdown.Button
                        css={{
                          borderRadius: 0, // radii.xs
                          background: "white", // colors.pink800
                          color: "grey",
                          height: "$12",
                          "&:hover": {
                            background: "#eef075",
                          },
                          "&:active": {
                            background: "$pink200",
                          },
                        }}
                      >
                        OUR THERAPIES
                      </Dropdown.Button>
                      <Dropdown.Menu
                        aria-label="Static Actions"
                        css={{
                          display: "grid",
                          textTransform: "uppercase",
                          fontSize: "10px",
                        }}
                      >
                        <Dropdown.Item
                          key="new"
                          css={{
                            height: "60px",
                          }}
                        >
                          GENERAL ACUPUNCTURE, AURICULAR And CRANIAL
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="copy"
                          css={{
                            height: "80px",
                          }}
                        >
                          LASER THERAPY, TERAHETZ AND INFRARED
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="edit"
                          css={{
                            height: "50px",
                          }}
                        >
                          THERAPIES BY VENTOS
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="editt"
                          css={{
                            height: "40px",
                          }}
                        >
                          REFLEXOLOGY PLANTER
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="edits"
                          css={{
                            height: "40px",
                          }}
                        >
                          MASSAGE THERAPUTIC
                        </Dropdown.Item>
                        <Dropdown.Item
                          key="edite"
                          css={{
                            height: "40px",
                          }}
                        >
                          MEDICINE ANTI-AGING
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                  <Link href="#" className="nav_link_text">
                    PATHOLOGY
                  </Link>
                  <Link href="#" className="nav_link_text">
                    GALERY
                  </Link>
                  <Link href="#" className="nav_link_text">
                    NEWS
                  </Link>
                  <Link href="#" className="nav_link_text">
                    CONTACT
                  </Link>
                </div>
              </div>

              <div className="hamburger_container">
                <div
                  className={`${
                    isActive ? "hamburger" : "hamburger menu-active"
                  }`}
                  onClick={() => {
                    if (isActive) {
                      setIsActive(!isActive);
                      handleSidebar(true);
                    } else {
                      setIsActive(!isActive);
                      handleSidebar(false);
                    }
                  }}
                >
                  <span className="hamburger-line hamburger-line-top"></span>
                  <span className="hamburger-line hamburger-line-middle"></span>
                  <span className="hamburger-line hamburger-line-bottom"></span>
                </div>
              </div>
              <button className="shop_btn">shop</button>
            </div>
          </div>
        </div>
      </header>

      <aside
        className={`${isSidebarOpen ? "sidebar sidebar-open" : "sidebar"}`}
      >
        <div>
          <div className="res_nav_links">
            <Link href="/" className="nav_link_text" onClick={hamburgerClick}>
              Home
            </Link>
            <div className="drop_down_div">
              <Dropdown>
                <Dropdown.Button
                  css={{
                    borderRadius: 0, // radii.xs
                    background: "white", // colors.pink800
                    color: "grey",
                    height: "40px",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    "&:hover": {
                      background: "#eef075",
                    },
                    "&:active": {
                      background: "$pink200",
                    },
                  }}
                >
                  REGARDS
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item
                    key="new"
                    css={{
                      height: "60px",
                    }}
                  >
                    <Link href="/Regards/presentation" onClick={hamburgerClick}>
                      PRESENTATION OF HoLISTIC HOSPITAL
                    </Link>
                  </Dropdown.Item>
                  <Dropdown.Item key="copy"><Link href="/Regards/medicine" onClick={hamburgerClick}>HOLISTIC MEDICINE</Link></Dropdown.Item>
                  <Dropdown.Item key="edit"><Link href="/Regards/specialist" onClick={hamburgerClick}>SPECIALIST</Link></Dropdown.Item>
                  <Dropdown.Item key="agency"><Link href="/Regards/therapy" onClick={hamburgerClick}>OUR AGENCIES</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown>
                <Dropdown.Button
                  css={{
                    borderRadius: 0, // radii.xs
                    background: "white", // colors.pink800
                    color: "grey",
                    height: "40px",
                    fontSize: "1rem",
                    textTransform: "uppercase",
                    "&:hover": {
                      background: "#eef075",
                    },
                    "&:active": {
                      background: "$pink200",
                    },
                  }}
                >
                  OUR THERAPY
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Static Actions">
                  <Dropdown.Item
                    key="new"
                    css={{
                      height: "80px",
                      textTransform: "uppercase",
                    }}
                  >
                    PRESENTATION OF HOLISTIC HOSPITAL
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="copy"
                    css={{
                      height: "80px",
                    }}
                  >
                    LASER THERAPY, TERAHETZ AND INFRARED
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="edit"
                    css={{
                      height: "50px",
                    }}
                  >
                    THERAPIES BY VENTOS
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="editt"
                    css={{
                      height: "40px",
                    }}
                  >
                    REFLEXOLOGY PLANTER
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="edits"
                    css={{
                      height: "40px",
                    }}
                  >
                    MASSAGE THERAPUTIC
                  </Dropdown.Item>
                  <Dropdown.Item
                    key="edite"
                    css={{
                      height: "40px",
                    }}
                  >
                    MEDICINE ANTI-AGING
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <Link href="#" className="nav_link_text">
              PATHALOGY
            </Link>
            <Link href="#" className="nav_link_text">
              GALERY
            </Link>
            <Link href="#" className="nav_link_text">
              NEWS
            </Link>
            <Link href="#" className="nav_link_text">
              contact
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
};
