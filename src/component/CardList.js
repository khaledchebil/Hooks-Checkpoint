import React, {useState}  from 'react';
import Card from './Card'


const CardList =({moviesList}) => {
    const [search, setSearch] = useState('')
    const [input, setInput] = useState('')
    
const handelChange=(e) => {
    e.preventDefault();
    setInput(e.target.value)
}

if(input.length >0) {
    moviesList = moviesList.filter((movie)=> {
return movie.name.toLowerCase().includes(input.toLowerCase())
})
}

const handelRate =(e) => {
    e.preventDefault();
    setSearch(e.target.value)
}

if(search.length>0) {
    moviesList = moviesList.filter((y) => {
    return y.Review.match(search)
})
}

    return(
     
       <div >
             <input className='pa2 ba bw1 ma1 br4' 
            type='text' 
            placeholder='search By Rate' 
            onChange={handelRate} 
            value ={search}
            />
        <br />
         <input className='pa2 ba bw1 ma1 br4' 
            type='text' 
            placeholder='search Movie By name' 
            onChange={handelChange}
            value ={input}
            />
            <br />
            
       {
           
           moviesList.map((film,i) => {
       return  <Card key={i} {...film} /> })
       }
        </div>
    );

}

export default CardList