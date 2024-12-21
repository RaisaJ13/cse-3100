import React from 'react'
import './seeMore.css'
import { useNavigate } from 'react-router-dom'

export default function SeeMoreMission() {
  const navigate = useNavigate()
  return (
    <div className='Container'>
      <div>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back
        </button> 
        <h1>
          Our Mission
        </h1>
        <p>
        Welcome to our page for cat adoption. We believe this world is just not for human, but also for animals.
        Every animals deserve a home and love. So our mission is to give all hopeless animals a home. 
        We speccial works for cat. We rescue cats and try to give them in better hand.
        Your house will always be blessed with love, laughter, and friendship if you have a cat.
        </p>
      </div>
    </div>
  )
}
