import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import Logo from '../components/Logo/Logo';
import ExerciseSelector from '../components/ExerciseSelector/ExerciseSelector';
import Form from '../components/Form/Form';
import './App.css';

function App() {
  return (
    <div className="App">
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

export default App;
