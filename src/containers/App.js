import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ExerciseSelector from '../components/ExerciseSelector/ExerciseSelector';
import Form from '../components/Form/Form';
import Particles from 'react-particles-js';
import 'tachyons';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Particles className="particles"
      params={{
        "particles": {
            "number": {
                "value": 160,
                "density": {
                    "enable": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "speed": 4,
                    "size_min": 0.3
                }
            },
            "line_linked": {
                "enable": false
            },
            "move": {
                "random": true,
                "speed": 1,
                "direction": "top",
                "out_mode": "out"
            }
        },
        "interactivity": {
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble"
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"
                }
            },
            "modes": {
                "bubble": {
                    "distance": 250,
                    "duration": 2,
                    "size": 0,
                    "opacity": 0
                },
                "repulse": {
                    "distance": 400,
                    "duration": 4
                }
            }
        }
    }} />
        <Navigation /> 
        <Logo /> 
        <ExerciseSelector />
        <Form />
        {/* <SignIn />  */}
        {/* <Register />  */}
        {/* <Profile />  */}
        {/* <SubmitionComponent />  */}
      </div>
    );
  }
  
}

export default App;
