import React, { Component } from "react";
import "./Segment.css";

class Segment extends Component {
	handleClick = () => {
		this.props.selectSegment(this.props.segment);
	}
	render() {

		let symbol = this.props.segment.priceCurrency

		if(this.props.segment.priceCurrency === 'EUR') {
			symbol = '€'
		}
		
		const title = `${this.props.segment.name}`

		const price = `${this.props.segment.price}${symbol} /month`

		const style = {
			backgroundImage: `url('${this.props.segment.imageUrl}')`
		};
		return(
			<div className="Segment" onClick={this.handleClick}>
				<div className="Segment-picture" style={style}></div>
				<div className="Segment-title">
					{title}
				</div>
				<div className="Segment-price">
					{price} 
				</div>
			</div>

		);
	}
}
export default Segment;