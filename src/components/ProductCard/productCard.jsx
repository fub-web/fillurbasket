import React, { Component } from "react";
import "./productCard.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class ProductCard extends Component {
	constructor(props) {
	  super(props);
	
	}
	render() {
	  return (
		<div>
		   <section class="product">
			<div class="product__photo">
				<div class="photo-container">
					<div class="photo-main">
						<div class="controls">
							<FontAwesomeIcon icon="fa-share-alt " alt="share" />
							<FontAwesomeIcon icon="fas fa-heart" alt="favorite_border" />
						</div>
						<img src="./images/green-apple-with-slice.png" alt="green apple slice" />									
					</div>
					<div class="photo-album">
						<ul>
							
							<li><img src="images/green-apple2.png" alt="green apple" /></li>
							<li><img src="images/half-apple.png" alt="half apple" /></li>
							<li><img src="images/green-apple2 (1).png" alt="green apple" /></li>
							<li><img src="images/apple-top.png" alt="apple top" /></li>
							
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
						<li><img src="images/green-apple2.png" alt="green apple" /></li>
						<li><img src="images/yellow-apple.png" alt="yellow apple" /></li>
						<li><img src="images/orange-apple.png" alt="orange apple" /></li>
						<li><img src="images/red-apple.png" alt="red apple" /></li>
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
