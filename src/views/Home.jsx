import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';


const featuredCats = [
  { name: 'Whiskers', age: '2' , breed: 'Persian'},
  { name: 'Mittens', age: '2',breed: 'Siamese' },
  { name: 'Shadow', age: '1' ,breed: 'Maine Coon'},
];

export default function Home() {
  const [cats, setCats] = useState([]);
  const navigate = useNavigate()


  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          featuredCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = featuredCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));

        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);
  const handle=()=>{
    navigate('/available-cats')
  }

 

  return (
    <>
     <section className="text-center mt-4">
        <h2>Welcome to Purrfect Adoption</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      <section className="mt-5">
        <h2>Featured cats</h2>
        <div className="cats-container">
        {cats.map((cat, i) => (
        <div key={i} className="cat-card">
      <img
        src={cat.image}
        alt={cat.name}
        className="img-fluid mb-2"
        style={{
          borderRadius: '8px',
          height: '200px',
          objectFit: 'cover',
        }}
      />
      <div className="cat-info">
        <h3 className="h5 mb-1">{cat.name}</h3>
        <p className="mb-0">Age: {cat.age}</p>
        <p>Breed : {cat.breed}</p>
      </div>
    </div>
    
  ))}
  <button type='btn'
  style={{ fontSize: '14px', padding: '8px 12px' }} 
  onClick={handle}>Show More</button>
</div>

      </section>
    </>
  );
}
