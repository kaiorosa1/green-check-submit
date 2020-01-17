import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation /> 
      <Logo /> 
      {/* <SignIn />  */}
      {/* <Register />  */}
      {/* <Profile />  */}
      {/* <SubmitionComponent />  */}
      <h1>Green Check Submit</h1>
    </div>
  );
}

export default App;
