import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      rating : props.rating,
      id: this.props.itemId
    }
    this.clickItem = this.clickItem.bind(this);
    this.generateRandomDeal = this.generateRandomDeal.bind(this);
    this.generateRandomDate = this.generateRandomDate.bind(this);
  }

  clickItem(){
    let event = new CustomEvent('jordanAwesome', {
      detail: this.state.id
    })
    // console.log(this.state.id)
    window.dispatchEvent(event)
  }

  generateRandomDeal(){
    let min = Math.ceil(6);
    let max = Math.floor(99);
    let deal = Math.floor(Math.random() * (max - min)) + min;
    return deal;
  }
  
  generateRandomDate(){
    const min = Math.ceil(1);
    const dayMax = Math.floor(28);
    const monthMax = Math.floor(12);
    let month = Math.floor(Math.random() * (monthMax - min)) + min;
    let day = Math.floor(Math.random() * (dayMax - min)) + min;
    let randomDate = month + '/' + day + '/';
    return randomDate;
  }

  render(){
    
    return (
      <div className='tsingleItem' onClick={this.clickItem} >
        <img id="t"src={this.props.image}></img>
        <span id="titemName"><b>{this.props.name}</b></span>
        <span id="trating">
          
        <StarRatingComponent 
          name="rate" 
          editing={false}
          renderStarIcon={() => <span id="icon"><FontAwesomeIcon icon="gavel" /></span>}
          starCount={5}
          starColor={'#0471AF'}
          emptyStarColor={"#c4c8bd"}
          value={this.state.rating}
        />
        
        </span>
  <span id="tsmallSave">SAVE {this.generateRandomDeal()}% thru {this.generateRandomDate()}2020</span>
      </div>
    )
  }
}

export default Item;