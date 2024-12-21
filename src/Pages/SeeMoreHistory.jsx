import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SeeMore() {
  const navigate = useNavigate()
  return (
    <div className='Container'>
      <div>
      <button className="backButton" onClick={() => navigate(-1)}>
        Back
        </button> 
        <h1>
          Our History
        </h1>
        <p>
        'CAt ADOPTION' starts the journy on 1st january,2024. Before starting this journy we use to rescue cats and give them is adoption by using social media or posters.
        Then we decieded to make this work affective by this adoption page. Since then we are working to save this small and valueaable lives
        </p>
      </div>
    </div>
  )
}
