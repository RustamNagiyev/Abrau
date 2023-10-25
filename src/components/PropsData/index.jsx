import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Home from '../Home';
import About from '../Home/About';
import Contact from '../Contact';
import Map from '../Map';
import { Route, Routes } from 'react-router-dom';

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
  </Routes>
  )
}
