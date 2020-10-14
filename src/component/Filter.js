import React, {useState} from 'react';
import Modal from 'react-modal'


export const Filter =({addMovie}) => {

        const [modalIsOpen, setmodalIsOpen] = useState(false)
        const [Name, setName] = useState('')
        const [Genre, setGenre] = useState('')
        const [Image, setImage] = useState('')
        const [Rate, setRate] = useState('')
    
        
        const submitMovie =(e)=> {
            e.preventDefault();
            let newMovie={
                name: Name,
                Genre: Genre,
                picUrl: Image,
                Review: Rate,
              };
            addMovie(newMovie);
            setmodalIsOpen(false);
        }
   

    return (
        <div className='pa2 ma2 bg-light-blue dib'>

            <button onClick={()=> setmodalIsOpen(true)}>Add +</button>
            
            <Modal isOpen={modalIsOpen} onRequestClose={()=> setmodalIsOpen(false)}>

                <form >
                <label>Enter the information of the Movie: </label>
                <input type='text' placeholder='enter Movie Name'  onChange={(e)=>setName(e.target.value)}/>
                <input type='text' placeholder='enter Movie Genre'  onChange={(e)=>setGenre(e.target.value)}/>
                <input type='text' placeholder='enter Movie Image' onChange={(e)=>setImage(e.target.value)} />
                <input type='text' placeholder='enter Movie Rate' onChange={(e)=>setRate(e.target.value)} />
   
                <button type='submit' onClick={submitMovie}>Add</button>
                </form> 
              <button onClick={()=>setmodalIsOpen(false)}>close</button>
   
            </Modal>

        
        </div>
    );
    }


