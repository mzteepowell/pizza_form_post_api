import React from 'react'
import { useHistory } from 'react-router-dom'
import Pizza from './Pizza';
import image from './assets/pizza_img.jpg'

export default function Home() {
  const history = useHistory()

  const routeToShop = () => {
    // console.log(history);
    history.push('/pizza')
  }

  return (
    <div className='home-wrapper'>
     <div>
     <img
        className='home-image'
        src={image} alt='Baked pizza with spinach, cheese, green olives, and red and orange bell peppers'
        />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
        >
        Order now!
      </button>
      </div>
      <div className="container">
      <Pizza />  
      <Pizza />  
      </div> 
    </div>
  )
}
