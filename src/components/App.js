import React from 'react';
import Form from './Form.js';
import Result from './Result.js';
import Visual from './Visual.js';
import './App.css';

class App extends React.Component {

  //stany poczatkowe do zmiany
  state =  {
    value: '',
    date:'',
    description:'',
    icon:'',
    city:'',
    sunrise:'',
    sunset:'',
    temp: '',
    pressure:'',
    wind:'',
    err: false,
  }

  handleInputChange = (e) => {
     this.setState({
       value: e.target.value
     })
   }

//   handleCitySubmit = e => {
//     //powstrzymaj odswiezanie strony//
//     e.preventDefault();
//     const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=dc35d37db384d42daf570cc6c707a5e8`
//     console.log("potwierdzony formularz")
// //albo odrzucony - catch albo spelniony -then

//     fetch(API)
//       .then(response =>{
//         if(response.ok){
//           return response
//         }
//         throw Error('Error occurced')
//       })
//       .then(response => response.json())
//       .then(data => {
//         const time = new Date().toLocaleString();

//         //uzywam funkcji zwracjaacej obiekt
//         this.setState(prevState => ({
//           err:false,
//           date: time,
//           city: this.state.value,
//           sunrise: data.sys.sunrise,
//           sunset: data.sys.sunset,
//           temp: data.main.temp,
//           pressure: data.main.pressure,
//           wind:data.wind.speed,
         
//       }))
//     })
//       .catch(err => err => {
//         this.setState({
//           err:true,
//           city: this.state.value
//         })
//       })
    

//   }

componentDidUpdate(prevProps, prevState){

  if(this.state.value.length === 0) return 

  //aby uchronic sie przed petla nieskonczona nalezy onchange zmieniac stan
  if(prevState.value !== this.state.value){
  //zamiast zminiac stan =>uzywam ajax fetch
  //   this.setState({
  //     value: this.state.value
  //   })
  // }
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&units=metric&appid=dc35d37db384d42daf570cc6c707a5e8`;
  fetch(API)
    .then(response =>{
      if(response.ok){
        console.log("response ok")
        return response
      }
      throw Error('Error occurced')
    })
    .then(response => response.json())

    .then(data => {
    const time = new Date().toLocaleString();
    //uzywam funkcji zwracjaacej obiekt
      this.setState(prevState => ({
        err:false,
        date: time,
        description:data.weather[0].description,
        city: this.state.value,
        sunrise: data.sys.sunrise,
        sunset: data.sys.sunset,
        temp: data.main.temp,
        pressure: data.main.pressure,
        wind:data.wind.speed,
        icon:data.weather[0].icon,
      }))

    })

    .catch(err => {
      this.setState(prevState => ({
        err:true,
        city: prevState.value,
      }))
    })
  }
}



  render() {
    return (
      <div className="App"> Check the weather
      <Form value = {this.state.value} change={this.handleInputChange} />
      <Result weather={this.state}/>
      <Visual weather={this.state}/>
      </div>
    );
  }

}
//version with submit button 
/* submit={this.handleCitySubmit} */



export default App;
