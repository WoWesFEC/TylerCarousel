import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Item extends React.Component {
  
  constructor(props){
    super(props)

    this.state = {
      rating : props.rating
    }
  }

  render(){
    return (
      <div className='tsingleItem'>
        <img id="t"src={this.props.image}></img>
        <span id="titemName"><b>{this.props.name}</b></span>
        <span id="trating">
          
        <StarRatingComponent 
          name="rate" 
          editing={false}
          renderStarIcon={() => <span id="icon"><FontAwesomeIcon icon="gavel" /></span>}
          starCount={5}
          // starColor={"#0471AF"}
          starColor={'red'}
          emptyStarColor={"#c4c8bd"}
          value={this.state.rating}
        />
        
        </span>
        <span id="tsmallSave">SAVE 46% thru 01/31/2020</span>
      </div>
    )
  }
}

export default Item;
//{name, image, category, rating}