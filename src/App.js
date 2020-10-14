import React, {useState} from 'react';
import './App.css';
import 'tachyons'
import CardList from './component/CardList'
import {Filter} from './component/Filter'

const movies = [
  {
    id:1,
    name: 'Romeo Doi Mourir',
    Genre: 'Action',
    picUrl:'https://fr.web.img4.acsta.net/medias/04/99/79/049979_af.jpg',
    Review: '5'
  }, 
  {
    id:2,
    name: 'Emarit yaakobien',
    Genre: 'Comedy',
    picUrl:'https://resizing.flixster.com/9SCW7cuivfQ5Diqpxo3P7P1UuCo=/206x305/v1.bTsxMDI2MDUxNDtqOzE4NTY4OzEyMDA7MjYxOzM2MA',
    Review: '3'
  }, 
  {
    id:3,
    name: 'Frozen',
    Genre: 'Cartoon',
    picUrl:'data:image/jpeg;base64,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',
    Review: '1'
  }, 
  {
    id:4,
    name: 'Making Off',
    Genre: 'Drama',
    picUrl:'https://m.media-amazon.com/images/M/MV5BMjA0NTEyMzY2NV5BMl5BanBnXkFtZTcwNTA1MjU3MQ@@._V1_.jpg',
    Review: '4'
  }, 
  {
    id:5,
    name: 'Avenger',
    Genre: 'Action',
    picUrl:'data:image/jpeg;base64,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',
    Review: '3'
  }, 
  {
    id:6,
    name: 'Game of throne',
    Genre: 'Tari5',
    picUrl:'https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY1200_CR126,0,630,1200_AL_.jpg',
    Review: '2'
  }, 
  {
    id:7,
    name: 'the other',
    Genre: 'Mystery',
    picUrl:'https://lh3.googleusercontent.com/proxy/ZdJr_Q13OzM-Xw2SbF7369jRR0d2NIYzyRNEJfPVfvbxURbQ3QOeVQdPxzrOUL8G1Csa6YnCRrdpe08NPOPPzKhbmV7OQeI',
    Review: '1'
  } 

];


function App() {

  const [moviesList, setmoviesList] = useState(movies)
// add
const addMovie = (newMovie) => {
  setmoviesList([...moviesList, newMovie])
}

  return (
    <div className='tc'>
    <h1>Movie List</h1>
    <Filter addMovie={addMovie}/>
    <CardList movies = {movies}/>

    </div>
    );
}

export default App;
