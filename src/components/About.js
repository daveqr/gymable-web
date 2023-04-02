import React from 'react';
import AboutSub from './AboutSub';


function About(props) {
  const message="This is my submessage"
  
  return (
    <div>
      <h1>About</h1>
      <AboutSub message={message} />
    </div>
  );
}

export default About;
