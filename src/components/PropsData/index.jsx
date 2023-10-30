import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';

import Home from '../Home';

import Contact from '../Contact';
import Map from '../Map';
import News from '../News';

import About from '../About';
import Products from '../Products';
// import ReadProduct from '../Products/ReadProduct';

export default function PropsData() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('./db.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Data alınmadı:', error);
      });
  }, []);
  return (
    <Routes>
      <Route index path="/" element={<Home products={data.products} news={data.news} />} />
      <Route index path="/about" element={<About awards={data.awards} />} />
      <Route index path="/map" element={<Map map={data.map} />} />
      <Route index path="/news/*" element={<News news={data.news} />} />
    <Route index path="/products" element={<Products products={data.products} />} />
      <Route index path="/contact/*" element={<Contact />} />
  </Routes>
  )
}
