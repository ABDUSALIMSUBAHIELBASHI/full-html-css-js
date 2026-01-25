import React from 'react';  
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import User from './Components/User';

function App() {
  return (
    <div className="container">
      {/* Task 2: Navbar */}
      <Navbar 
        logoText="MyBrand 2026" 
        menu1="Home" 
        menu2="About" 
        menu3="Contact" 
      />

      <section>
        <h2 style={{marginTop: '40px'}}>Our Products</h2>
        <div className="grid">
          <Card 
            title="Modern React Course" 
            description="Learn React with the new Compiler." 
            buttonText="Enroll Now" 
          />
          <Card 
            title="Vite Guide" 
            description="Master the fastest build tool." 
            buttonText="Read More" 
          />
        </div>
      </section>

      <section>
        <h2 style={{marginTop: '40px'}}>User Team</h2>
        <div className="grid">
          <User name="Ahmad" email="ahmad@example.com" role="Admin" />
          <User name="Sara" email="sara@example.com" role="Developer" />
          <User name="Omar" email="omar@example.com" role="Designer" />
        </div>
      </section>
    </div>
  );
}

export default App;