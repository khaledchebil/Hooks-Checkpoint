import React, {useState}  from 'react';
import Card from './Card'


const CardList =({movies}) => {
    const [search, setSearch] = useState('')
    const [input, setInput] = useState('')
    
const handelChange=(e) => {
    e.preventDefault();
    setInput(e.target.value)
}

if(input.length >0) {
movies = movies.filter((movie)=> {
return movie.name.toLowerCase().includes(input.toLowerCase())
})
}

const handelRate =(e) => {
    e.preventDefault();
    setSearch(e.target.value)
}

if(search.length>0) {
movies = movies.filter((y) => {
    return y.Review.match(search)
})
}

    return(
     
       <div >
             <input className='pa2 ba ' 
            type='text' 
            placeholder='search By Rate' 
            onChange={handelRate} 
            value ={search}
            />
        <br />
         <input className='pa2 ba ' 
            type='text' 
            placeholder='search Movie By name' 
            onChange={handelChange}
            value ={input}
            />
            <br />
            
       {
           
           movies.map((film,i) => {
       return  <Card key={i} {...film} /> })
       }
        </div>
    );

}

export default CardList