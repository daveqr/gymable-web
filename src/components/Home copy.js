import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Home(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  return (
    <div>
      <h1>Home for {name}</h1>
    </div>
  );
}

export default Home;
