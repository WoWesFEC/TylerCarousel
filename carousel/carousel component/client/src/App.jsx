import React from 'react';
import axios from 'axios';
import Item from './components/Item.jsx';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      data : []
    }
  }

  componentDidMount(){
    this.fetchAllData()
  }

  fetchAllData(){
    axios.get('http://localhost:3005/wowStuff').then((response) => {
      console.log('this is the response from getting all the stuff --> ', response.data)
      this.setState({
        data : response.data
      })
    })
    .catch((err) => {
      console.log('something went wrong with fetching all data from database', err)
    })
  }

  render(){
    return (
      <div className='container'>

        <span className="leftButton" role="button" onClick={() => {console.log('clicked left!')}}>
          <button className="leftButtonTarget">this is a button</button>
        </span>

        <span className="rightButton" role="button" onClick={() => {console.log('clicked right!')}}>
          <button className="rightButtonTarget"></button>
        </span>

        <div className="niceRow">

          {this.state.data.map((item) => 
          <div key={item.id}><Item name={item.name} image={item.image} category={item.category} rating={item.rating} /></div>
          )}

        </div>
      </div>
    )
  }
}