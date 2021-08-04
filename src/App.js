import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import image1 from './Ronaldo 1.jpg';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      fullName: "Ronaldo Luís Nazário de Lima",
      bio: "Ronaldo Luis Nazario de Lima, dit Ronaldo, est un footballeur brésilien né le 22 septembre 1976 à Rio de Janeiro. Il reçoit un ballon de football au Noël de ses 4 ans, et dès lors se découvre une passion pour ce sport, qu’il apprend à maîtriser dans la rue. Il acquiert ses capacités techniques grâce au futsal, sport qu’il pratique dès ses 10 ans. Il est recruté dans un club de première division brésilienne dès 1992, alors qu’il est encore mineur. Deux ans plus tard, Ronaldo commence sa carrière en Europe, au PSV Eindhoven, club néerlandais où il reste pour deux saisons. Ses résultats au poste d’avant-centre sont très convaincants. Le footballeur part ensuite pour le FC Barcelone en 1996, puis entre autres à l’Inter de Milan, au Real Madrid et au Milan AC, où il rencontre un succès de plus en plus important. Il est rapidement considéré comme l’un des meilleurs joueurs de l’histoire. Il prend sa retraite en 2011, vainqueur de deux Coupes du monde et de deux ballons d’or.",
      profession: "Footballeur international",
      imgSrc: image1,
      shows: false,
      input: 0,
    
       
    }
  }
  style1= {backgroundColor: "blueviolet", border: "6px solid black", marginLeft: "540px", marginRight: "540px"};
  style2= {backgroundColor: "turquoise", border: "6px solid black",marginLeft: "420px", marginRight: "420px"};
  style3= {backgroundColor: "turquoise", border: "6px solid black", marginLeft: "60px", marginRight: "60px"};
  style4= {backgroundColor: "turquoise", border: "6px solid black", marginLeft: "460px", marginRight: "460px", marginBottom: "40px"};
  style5= {border: "6px solid maroon", padding: "8px", marginBottom: "30px", width: "300", height: "240px"};
  style6={border: "4px solid black", fontSize: "25px", marginBottom: "40px"};
  componentDidMount () {
     setInterval(()=>{this.setState({input: this.state.input + 1})}, 1000)
  }
  
  
  
  
  
  
  
  render() {
  const showprofile= () => {this.setState({shows: !this.state.shows})}
    return (
      <div className="App">
        {this.state.shows && 
        <div>
          <h1 style={this.style1}>Nom Complet</h1>
        <h1 style={this.style2}>{this.state.fullName}</h1>
        <h1 style={this.style1}>Biographie</h1>
        <h2 style={this.style3}>{this.state.bio}</h2>
        <h1 style={this.style1}>Profession</h1>
        <h1 style={this.style4}>{this.state.profession}</h1>
        <img style={this.style5} src={this.state.imgSrc}/>
        <h1>{this.state.input}</h1>
        </div>
  }
  
        <button className="button3 button4" style={this.style6} onClick={showprofile}>click</button>
      

      
        
      </div>
    )
  }
}

export default App







