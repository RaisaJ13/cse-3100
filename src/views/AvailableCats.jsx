import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './AvailableCats.css'



const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Persian' },
  { name: 'Mittens', age: '2', breed: 'Siamese' },
  { name: 'Shadow', age: '1', breed: 'Maine Coon' },
  { name: 'Pumpkin', age: '3', breed: 'Persian' },
  { name: 'Luna', age: '4', breed: 'Siamese' },
  { name: 'Simba', age: '2', breed: 'Maine Coon' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('All');
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
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

  const filteredCats = cats.filter((cat) => {
    return (
      (selectedBreed === 'All' || cat.breed === selectedBreed) &&
      cat.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handlePage = () => {
    navigate('/Contact-us');
  };

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>
      <div className="filter-bar d-flex justify-content-between align-items-center mb-4">
        <div>
          <label htmlFor="breed-select" className="d-flex align-items-center me-2">
            Select Breed:
          </label>
          <select
            id="breed-select"
            value={selectedBreed}
            onChange={(e) => setSelectedBreed(e.target.value)}
            className="form-select form-select-sm"
            style={{ width: '150px', display: 'inline-block' }}
          >
            <option value="All">All</option>
            <option value="Persian">Persian</option>
            <option value="Siamese">Siamese</option>
            <option value="Maine Coon">Maine Coon</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control form-control-sm"
            style={{ width: '200px', display: 'inline-block' }}
          />
        </div>
      </div>

      <div className="mt-4 row cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                
               
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p>Breed: {cat.breed}</p>
              </div>
              <button className="btn btn-primary mt-2" onClick={handlePage}>
                Adopt {cat.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
