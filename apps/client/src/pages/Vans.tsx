import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

/*
Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
*/

// ATTENTION LEARN THIS WELL! This is how you create a new instance of axios
const instance = axios.create({
  baseURL: 'http://localhost:8080',
});

const getVans = async () => {
  const response = await instance.get('/api/vans');
  console.log(response.data);
  return response.data;
};

type Vans = {
  id: number;
  name: string;
  description: string;
};

const Home = () => {
  const [vans, setVans] = useState<Vans[]>([]);

  useEffect(() => {
    getVans().then((vans) => setVans(vans));
  }, []);

  return (
    //map
    <div>
      {vans.map((van) => (
        <Link
          to={`/vans/${van.id}`}
          key={van.id}
        >
          <div>
            <h1>{van.name}</h1>
            <p>{van.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
