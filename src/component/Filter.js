import React, {useState} from 'react';
import Modal from 'react-modal'
import 'tachyons'
import '../App.css';
import { Button } from 'react-bootstrap';

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
        <div className='ma2 pa2'>

            <Button  variant="primary" onClick={()=> setmodalIsOpen(true)}>Add +</Button>
            
            <Modal isOpen={modalIsOpen} onRequestClose={()=> setmodalIsOpen(false)} className='modale shadow-5 br3  pa2 ma2 tc bg-light-blue' >

                <form className='ma2 pa2 '>
                <label>Enter the information of the Movie: </label> <br />
                <input  type='text' placeholder='enter Movie Name'  onChange={(e)=>setName(e.target.value)} className='ma2 pa2'/><br />
                <input type='text' placeholder='enter Movie Genre'  onChange={(e)=>setGenre(e.target.value)} className='ma2 pa2'/><br />
                <input type='text' placeholder='enter Movie Image' onChange={(e)=>setImage(e.target.value)} className='ma2 pa2' /><br />
               
                             
                <input type='text' placeholder='enter Movie Rate' onChange={(e)=>setRate(e.target.value)} className='ma2 pa2' /><br />
   
                <Button  variant="secondary" type='submit' onClick={submitMovie}>Add</Button>
                </form> 
              <Button   variant="secondary" onClick={()=>setmodalIsOpen(false)}>close</Button>
   
            </Modal>

        
        </div>
    );
    }


