import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const instance = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
});

type Van = {
  id: string;
  name: string;
  description: string;
};

const getVan = async (id: string) => {
  const response = await instance.get(`/api/vans/${id}`);
  return response.data;
};

type Vans = {
  imageUrl: string | undefined;
  id: string;
  name: string;
  description: string;
  price: string;
};

const Van = () => {
  // get id from url
  const { id } = useParams<Vans>(); // { id: string } is the type of the object that useParams returns
  const [van, setVan] = useState<Vans>({
    id: '',
    name: '',
    description: '',
    imageUrl: '',
    price: '',
  });

  useEffect(() => {
    instance
      .get(`api/vans/${id}`)
      .then((response) => {
        setVan(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{van.name}</h1>
      <p>{van.description}</p>
      <p>${van.price}</p>
    </div>
  );
};

export default Van;
