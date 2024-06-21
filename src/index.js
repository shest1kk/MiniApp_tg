import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes/Routes';

// const images = [
//   './assets/1.jpg',
//   './assets/2.jpg',
//   './asstets/3.jpg',
//   './assets/4.jpg',
//   './assets/5.jpg',
//   './asstets/6.jpg',
//   './assets/7.jpg',
//   './assets/8.jpg',
//   './asstets/9.jpg',
//   './assets/10.jpg',
//   './assets/11.jpg',
//   './asstets/12.jpg',
//   './assets/13.jpg',
//   './assets/14.jpg',
//   './asstets/background-main.jpg',
//   // Добавьте сюда все пути к вашим изображениям
// ];

// images.forEach((image) => {
//   const link = document.createElement('link');
//   link.rel = 'preload';
//   link.as = 'image';
//   link.href = image;
//   document.head.appendChild(link);
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  </React.StrictMode>
);

