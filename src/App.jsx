import { useState } from 'react';
import './App.css';

function App() {
  const [movieName, setMovieName] = useState("");

  const handleMovieChange = (e) =>{
    const movieSearchName = e.target.value;
    setMovieName(movieSearchName);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
  }

  return (
    <>
      <div className='search-movie'>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={movieName} id="" onChange={handleMovieChange} placeholder='Search Movie...' />
          <button>Search</button>
        </form>
      </div>
    </>
  )
}

export default App
