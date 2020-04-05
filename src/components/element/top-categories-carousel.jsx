import React, { Component } from "react";
import { Link } from "react-router-dom";

class TopCategories extends Component {
  render() {
    return (
      <>
        <div id="top-categories" className="product-flexslider hidden-buttons">
          <div class="slider-items slider-width-col4 products-grid">
            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p1.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Fruits</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p2.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Salads</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p3.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Vegetables</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p5.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Juices</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p12.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Meats</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p27.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Lettuce</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p8.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Citrus‎</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p11.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Berries</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p9.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Beans</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p6.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Pomegranates</div>
                </div>
              </Link>{" "}
            </div>

            <div className="item">
              {" "}
              <Link to={" "}>
                <div className="pro-img">
                  <img
                    src="products-images/p7.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                  <div className="pro-info">Leafy Veg</div>
                </div>
              </Link>{" "}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default TopCategories;
