import React, { Component } from "react";
import { Link } from "react-router-dom";

class TestimonialCarousel extends Component {
  render() {
    return (
      <>
        <div id="testimonials" className="offer-slider parallax parallax-2">
          <div className="slider-items slider-width-col6">
            <div className="item">
              <div className="avatar">
                <img src="images/member1.png" alt="Image" />
              </div>
              <div className="testimonials">
                Very fast responding! I highly recommend this service!
              </div>
              <div className="clients_author">
                {" "}
                Smith John <span>Happy Customer</span>{" "}
              </div>
            </div>
            <div className="item">
              <div className="avatar">
                <img src="images/member2.png" alt="Image" />
              </div>
              <div className="testimonials">
                The support has served me immediately and solved my problems
                when I need help. Are to be congratulated.
              </div>
              <div className="clients_author">
                {" "}
                Karla Anderson <span>Happy Customer</span>{" "}
              </div>
            </div>
            <div className="item">
              <div className="avatar">
                <img src="images/member3.png" alt="Image" />
              </div>
              <div className="testimonials">
                The support and response has been amazing, helping me with
                several issues I came across and got them solved almost the same
                day. A pleasure to order!
              </div>
              <div className="clients_author">
                {" "}
                Stephen Smith <span>Happy Customer</span>{" "}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TestimonialCarousel;
