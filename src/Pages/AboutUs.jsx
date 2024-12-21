import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate()

  const members = [
    { name: "Bob", age: 21, role: "Cat Rescue Specialist" },
    { name: "Alice", age: 29, role: "Veterinarian" },
    { name: "Charlie", age: 35, role: "Cat Behavior Expert" },
    { name: "Dana", age: 40, role: "Foster Care Coordinator" },
    { name: "Eva", age: 26, role: "Adoption Officer" },
  ];

  const handleHistory = () => {
    navigate('/History');
  };
  const handleMission = () => {
    navigate('/Mission');
  };
  return (
    <div>
    <h1>About Us</h1>
    <h2>Our Mission</h2>
    <div className='Container'>
     
        <p>
          Welcome to our page for cat adoption. We believe this world is just not for humans, but also for animals.
          Every animal deserves a home and love. So our mission is to give all hopeless animals a home.
          We specialize in rescuing cats and try to give them to better hands.
          <button type='button' onClick={handleMission}>See more</button>
        </p>
      </div>

      <h2>Our History</h2>
      <div className='Container'>
        <p>
          'Cat Adoption' started the journey on 1st January, 2024. Before starting this journey, we used to rescue cats and give them up for adoption using social media or posters.
          Then we decided to make this work more effective by creating this adoption page. Since then, we have been working to save these small and valuable lives.
          <button type='button' onClick={handleHistory}>See more</button>
        </p>
      </div>
     <h2>Our Team</h2>
     <div className='Container'>
     <section className="mt-5 team-row">
         
         {members.map((member, index) => (
            <div key={index} className="team-member">
              <div className="team-info">
                <img src="https://tse1.mm.bing.net/th?id=OIP.JwEJgEC-hx43MR-2OJa_IQHaHw&pid=Api&P=0&h=220" alt="" />
                <h3 className="h5 mb-1">{member.name}</h3>
                <p className="mb-0">Age: {member.age}</p>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
              </section>
            </div>
       
       </div>
  )   
}
