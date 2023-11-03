import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Contact from '../Contact';
import Map from '../Map';
import News from '../News';
import About from '../About';
import Products from '../Products';

export default function PropsData(prop) {
  return (
    <Routes>
      <Route index path="/" element={<Home products={prop.data.products} news={prop.data.news} handleSetClickedPId={prop.handleSetClickedPId} />} />
      <Route index path="/about" element={<About aboutData={prop.data.aboutData} awards={prop.data.awards} />} />
      <Route index path="/map" element={<Map map={prop.data.map} />} />
      <Route index path="/news" element={<News news={prop.data.news} />} />
      <Route index path="/products" element={<Products products={prop.data.products} clickedProductId={prop.clickedProductId} handleSetClickedPId={prop.handleSetClickedPId} />} />
      <Route index path="/contact/*" element={<Contact />} />
    </Routes>
  )
}
