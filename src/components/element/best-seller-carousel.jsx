import React, { Component } from "react";
import { Link } from "react-router-dom";

class BestSeller extends Component {
  render() {
    return (
      <>
        <div id="best-seller" class="product-flexslider hidden-buttons">
          <div class="slider-items slider-width-col4 products-grid">
            <div className="item">
              <div className="item-inner">
                <div className="item-img">
                  <div className="item-img-info">
                    <Link
                      to={"/product-details"}
                      title="Fresh Organic Mustard Leaves "
                      className="product-image"
                    >
                      <img
                        src="products-images/p27.jpg"
                        alt="Fresh Organic Mustard Leaves "
                      />
                    </Link>
                    <div className="new-label new-top-left">Hot</div>
                    <div className="sale-label sale-top-left">-15%</div>
                    <div className="item-box-hover">
                      <div className="box-inner">
                        <div className="product-detail-bnt">
                          <Link className="button detail-bnt">
                            <span>Quick View</span>
                          </Link>
                        </div>
                        <div className="actions">
                          <span className="add-to-links">
                            <Link
                              href="#"
                              className="link-wishlist"
                              title="Add to Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </Link>{" "}
                            <Link
                              href="#"
                              className="link-compare add_to_compare"
                              title="Add to Compare"
                            >
                              <span>Add to Compare</span>
                            </Link>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <button className="button btn-cart" type="button">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"/product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link href="#">1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link href="#">Add Review</Link>
                          </p>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">&#8377; 125.00</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="item">
              <div className="item-inner">
                <div className="item-img">
                  <div className="item-img-info">
                    <Link
                      to={"/product-details"}
                      title="Fresh Organic Mustard Leaves "
                      className="product-image"
                    >
                      <img
                        src="products-images/p17.jpg"
                        alt="Fresh Organic Mustard Leaves "
                      />
                    </Link>
                    <div className="item-box-hover">
                      <div className="box-inner">
                        <div className="product-detail-bnt">
                          <Link className="button detail-bnt">
                            <span>Quick View</span>
                          </Link>
                        </div>
                        <div className="actions">
                          <span className="add-to-links">
                            <Link
                              href="#"
                              className="link-wishlist"
                              title="Add to Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </Link>{" "}
                            <Link
                              href="#"
                              className="link-compare add_to_compare"
                              title="Add to Compare"
                            >
                              <span>Add to Compare</span>
                            </Link>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <button className="button btn-cart" type="button">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"/product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link href="#">1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link href="#">Add Review</Link>
                          </p>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">&#8377; 125.00</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <div className="item">
              <div className="item-inner">
                <div className="item-img">
                  <div className="item-img-info">
                    <Link
                      to={"/product-details"}
                      title="Fresh Organic Mustard Leaves "
                      className="product-image"
                    >
                      <img
                        src="products-images/p7.jpg"
                        alt="Fresh Organic Mustard Leaves "
                      />
                    </Link>
                    <div className="item-box-hover">
                      <div className="box-inner">
                        <div className="product-detail-bnt">
                          <Link className="button detail-bnt">
                            <span>Quick View</span>
                          </Link>
                        </div>
                        <div className="actions">
                          <span className="add-to-links">
                            <Link
                              href="#"
                              className="link-wishlist"
                              title="Add to Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </Link>{" "}
                            <Link
                              href="#"
                              className="link-compare add_to_compare"
                              title="Add to Compare"
                            >
                              <span>Add to Compare</span>
                            </Link>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <button className="button btn-cart" type="button">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"/product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link href="#">1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link href="#">Add Review</Link>
                          </p>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">&#8377; 125.00</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}

            <div className="item">
              <div className="item-inner">
                <div className="item-img">
                  <div className="item-img-info">
                    <Link
                      to={"/product-details"}
                      title="Fresh Organic Mustard Leaves "
                      className="product-image"
                    >
                      <img
                        src="products-images/p26.jpg"
                        alt="Fresh Organic Mustard Leaves "
                      />
                    </Link>
                    <div className="sale-label sale-top-left">Sale</div>
                    <div className="item-box-hover">
                      <div className="box-inner">
                        <div className="product-detail-bnt">
                          <Link className="button detail-bnt">
                            <span>Quick View</span>
                          </Link>
                        </div>
                        <div className="actions">
                          <span className="add-to-links">
                            <Link
                              href="#"
                              className="link-wishlist"
                              title="Add to Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </Link>{" "}
                            <Link
                              href="#"
                              className="link-compare add_to_compare"
                              title="Add to Compare"
                            >
                              <span>Add to Compare</span>
                            </Link>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <button className="button btn-cart" type="button">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"/product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link href="#">1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link href="#">Add Review</Link>
                          </p>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">&#8377; 125.00</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Item --> */}
            <div className="item">
              <div className="item-inner">
                <div className="item-img">
                  <div className="item-img-info">
                    <Link
                      to={"/product-details"}
                      title="Fresh Organic Mustard Leaves "
                      className="product-image"
                    >
                      <img
                        src="products-images/p5.jpg"
                        alt="Fresh Organic Mustard Leaves "
                      />
                    </Link>
                    <div className="new-label new-top-left">New</div>
                    <div className="item-box-hover">
                      <div className="box-inner">
                        <div className="product-detail-bnt">
                          <Link className="button detail-bnt">
                            <span>Quick View</span>
                          </Link>
                        </div>
                        <div className="actions">
                          <span className="add-to-links">
                            <Link
                              href="#"
                              className="link-wishlist"
                              title="Add to Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </Link>{" "}
                            <Link
                              href="#"
                              className="link-compare add_to_compare"
                              title="Add to Compare"
                            >
                              <span>Add to Compare</span>
                            </Link>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <button className="button btn-cart" type="button">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"/product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link href="#">1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link href="#">Add Review</Link>
                          </p>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">&#8377; 125.00</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}

            {/* <!-- Item --> */}
            <div className="item">
              <div className="item-inner">
                <div className="item-img">
                  <div className="item-img-info">
                    <Link
                      to={"/product-details"}
                      title="Fresh Organic Mustard Leaves "
                      className="product-image"
                    >
                      <img
                        src="products-images/p6.jpg"
                        alt="Fresh Organic Mustard Leaves "
                      />
                    </Link>
                    <div className="new-label new-top-left">New</div>
                    <div className="item-box-hover">
                      <div className="box-inner">
                        <div className="product-detail-bnt">
                          <Link className="button detail-bnt">
                            <span>Quick View</span>
                          </Link>
                        </div>
                        <div className="actions">
                          <span className="add-to-links">
                            <Link
                              href="#"
                              className="link-wishlist"
                              title="Add to Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </Link>{" "}
                            <Link
                              href="#"
                              className="link-compare add_to_compare"
                              title="Add to Compare"
                            >
                              <span>Add to Compare</span>
                            </Link>
                          </span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add_cart">
                    <button className="button btn-cart" type="button">
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"/product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link href="#">1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link href="#">Add Review</Link>
                          </p>
                        </div>
                      </div>
                      <div className="item-price">
                        <div className="price-box">
                          <span className="regular-price">
                            <span className="price">&#8377; 125.00</span>{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- End Item --> */}
          </div>
        </div>
      </>
    );
  }
}

export default BestSeller;
