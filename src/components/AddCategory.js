import react, { useState } from 'react';
import { createCategory } from '../api/categoryapi';

const AddCategory = () =>{
    const [name, SetName] = useState('');
    const [description, SetDescription] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await createCategory({name, description});
            SetName('');
            SetDescription('')
        } catch(error){
            console.error('Error creating Category', error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input
             type='text'
             value={name}
             onChange={(e) => SetName(e.target.value)}
             placeholder='Category Name'
            />
            <textarea
             value={description}
             onChange={(e) => SetDescription(e.target.value)}
             placeholder='Category Description'
            />
            <button type='submit'>Add Category</button>
        </form>
    )
}

export default AddCategory