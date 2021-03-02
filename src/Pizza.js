import React from 'react';
import image from './assets/pizza_img.jpg'

export default function Pizza() {
  
  return (
    <div className="pizza-container">
    
      <div className='pizza'>
        <img className='home-mini-image'
        src={image}
        alt='Cheese pizza with spinach'
        /> 
        <h4>Lg Pepperoni Pizza</h4>
        <p> $14.99</p>
      </div>
      <div className='pizza'>
        <img className='home-mini-image'
        src={image}
        alt='Cheese pizza with spinach'
        /> 
        <h4>Lg Pepperoni Pizza</h4>
        <p> $14.99</p>
      </div>
      <div className='pizza'>
        <img className='home-mini-image'
        src={image}
        alt='Cheese pizza with spinach'
        /> 
        <h4>Lg Pepperoni Pizza</h4>
        <p> $14.99</p>
      </div>
     

    </div>
  
  )
}