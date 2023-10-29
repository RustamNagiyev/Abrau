import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from '../Home';

import Contact from '../Contact';
import Map from '../Map';
import { Route, Routes } from 'react-router-dom';
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
    <Route index path="/" element={<Home />} />
    <Route index path="/about" element={<About />} />
    <Route index path="/contact" element={<Contact />} />
    <Route index path="/map" element={<Map map={data.map} />} />
    <Route index path="/products" element={<Products products={data.products} />} />
    {/* <Route index path="/read-product" element={<ReadProduct />} /> */}
  </Routes>
  )
}
