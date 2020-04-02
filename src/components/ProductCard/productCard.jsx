import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShare, faHeart } from "@fortawesome/free-solid-svg-icons";
import Image from "../common/Image";
import "./productCard.scss";
class ProductCard extends Component {
  render() {
    return (
      <div>
        <section class="product">
          <div class="product__photo">
            <div class="photo-container">
              <div class="photo-main">
                <div class="controls">
                  <FontAwesomeIcon icon={faShare} alt="share" />
                  <FontAwesomeIcon icon={faHeart} alt="favorite_border" />
                </div>
                <Image
                  src="images/green-apple-with-slice.png"
                  alt="green apple slice"
                />
              </div>
              <div class="photo-album">
                <ul>
                  <li>
                    <Image src="images/green-apple2.png" alt="green apple" />
                  </li>
                  <li>
                    <Image src="images/half-apple.png" alt="half apple" />
                  </li>
                  <li>
                    <Image
                      src="images/green-apple2 (1).png"
                      alt="green apple"
                    />
                  </li>
                  <li>
                    <Image src="images/apple-top.png" alt="apple top" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="product__info">
            <div class="title">
              <h1>Delicious Apples</h1>
              <span>COD: 45999</span>
            </div>
            <div class="price">
              &#x20b9 <span>7.93</span>
            </div>
            <div class="variant">
              <h3>SELECT A COLOR</h3>
              <ul>
                <li>
                  <Image src="images/green-apple2.png" alt="green apple" />
                </li>
                <li>
                  <Image src="images/yellow-apple.png" alt="yellow apple" />
                </li>
                <li>
                  <Image src="images/orange-apple.png" alt="orange apple" />
                </li>
                <li>
                  <Image src="images/red-apple.png" alt="red apple" />
                </li>
              </ul>
            </div>
            <div class="weight">
              <h3>Select Quantity in kg</h3>
              <ul>
                <li class="bg">.01</li>
                <li class="bg">.5</li>
                <li class="bg">1</li>
                <li class="bg">2</li>
                <li class="bg">5</li>
              </ul>
            </div>
            <div class="description">
              <h3>BENEFITS</h3>
              <ul>
                <li>Apples are nutricious</li>
                <li>Apples may be good for weight loss</li>
                <li>Apples may be good for bone health</li>
                <li>They're linked to a lowest risk of diabetes</li>
              </ul>
            </div>
            <button class="buy--btn">ADD TO CART</button>
          </div>
        </section>
      </div>
    );
  }
}
export default ProductCard;
