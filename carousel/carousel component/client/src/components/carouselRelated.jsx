import React from 'react';
import Item from './Item.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CarouselRelated({classIncrement, handleLeft, handleRight, selection}){
  return (
    <div>
      <div className= 'tcontainer'>
      <h2 className="talign-center th2">Related Items</h2>

        <button className={'tleftButton' + (classIncrement === 0 ? ' thide' : '')} onClick={handleLeft}><FontAwesomeIcon icon="angle-left" /></button>

        <button className={"trightButton" + (classIncrement + 2 > selection.length /2 ? ' thide' : '')} onClick={handleRight}><FontAwesomeIcon icon="angle-right" /></button>

        <div className={'tniceRowRelated' + ` transformLeft${classIncrement}`}>

          {selection.map((item) => 
          <div key={item.id} ><Item name={item.name} image={item.image} itemId={item.id} category={item.category} rating={item.rating} /></div>
          )}

        </div>

      </div>

    </div>
  )
}
export default CarouselRelated;