import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Contact(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const message = searchParams.get('message');

  return (
    <div>
      <h1>Contact {message}</h1>
    </div>
  );
}

export default Contact;
