import React, { Component } from "react";
import "../common.scss";
import $ from "jquery";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // this.headerTabsNavigation();
  }

  //   headerTabsNavigation = () => {
  //     const tabsNewAnim = $("#navbarSupportedContent");
  //     const selectorNewAnim = $("#navbarSupportedContent").find("li").length;
  //     const activeItemNewAnim = tabsNewAnim.find(".active");
  //     const activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  //     const activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  //     const itemPosNewAnimTop = activeItemNewAnim.position();
  //     const itemPosNewAnimLeft = activeItemNewAnim.position();
  //     $(".hori-selector").css({
  //       top: itemPosNewAnimTop.top + "px",
  //       left: itemPosNewAnimLeft.left + "px",
  //       height: activeWidthNewAnimHeight + "px",
  //       width: activeWidthNewAnimWidth + "px"
  //     });
  //     $("#navbarSupportedContent").on("click", "li", function(e) {
  //       $("#navbarSupportedContent ul li").removeClass("active");
  //       $(this).addClass("active");
  //       const activeWidthNewAnimHeight = $(this).innerHeight();
  //       const activeWidthNewAnimWidth = $(this).innerWidth();
  //       const itemPosNewAnimTop = $(this).position();
  //       const itemPosNewAnimLeft = $(this).position();
  //       $(".hori-selector").css({
  //         top: itemPosNewAnimTop.top + "px",
  //         left: itemPosNewAnimLeft.left + "px",
  //         height: activeWidthNewAnimHeight + "px",
  //         width: activeWidthNewAnimWidth + "px"
  //       });
  //     });
  //   };

  render() {
    console.log("header called");
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-mainbg">
          <a className="navbar-brand navbar-logo" href="#">
            <img className="nav-logo" src="../images/fub1.png" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars text-white"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <div className="hori-selector">
                <div className="left"></div>
                <div className="right"></div>
              </div>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-home"></i>HOME
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-address-card"></i>ABOUT US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-cart-plus"></i>CATEGORIES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-handshake"></i>PATNER WITH US
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-user"></i>CAREERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">
                  <i className="fas fa-comments"></i>FEEDBACK
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    ); //jsx =-==html
  }
}

export default Header;
