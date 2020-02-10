import React from 'react';
import Item from './Item.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CarouselVisited({classIncrementViewed, handleLeftViewed, handleRightViewed, selectionViewed}){
  return (
    <div>
      <div className= 'tcontainer'>
      <h2 className="talign-center th2">{selectionViewed.length === 0 ? '' :'Previously Viewed'}</h2>

        <button className={'tleftButtonViewed' + (classIncrementViewed === 0 ? ' thide' : '')} onClick={handleLeftViewed}><FontAwesomeIcon icon="angle-left" /></button>

        <button className={"trightButtonViewed" + (classIncrementViewed + 2 > selectionViewed.length /2 ? ' thide' : '')} onClick={handleRightViewed}><FontAwesomeIcon icon="angle-right" /></button>

        <div className={'tniceRowViewed' + ` transformLeft${classIncrementViewed}`}>

          {selectionViewed.map((item) => 
          <div key={item.id} ><Item name={item.name} image={item.image} itemId={item.id} category={item.category} rating={item.rating} /></div>
          )}

        </div>

      </div>

    </div>
  )
}
export default CarouselVisited;