import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          'https://657e1dcb3e3f5b18946387a8.mockapi.io/contacts/' + id
        );
        setPizza(data);
      } catch (error) {
        alert('Помилка');
        navigate('/');
      }
    }
    fetchPizza();
  }, [id, navigate]);

  if (!pizza) {
    return <>Завантаження...</>;
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="Pizza" />
      <h2>{pizza.title} </h2>
      <h2>{id} </h2>
      <h4>{pizza.price} ₴</h4>
    </div>
  );
};

export default FullPizza;
