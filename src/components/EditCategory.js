import react, { useEffect, useState } from 'react';
import { createCategory, getCategory } from '../api/categoryapi';

const EditCategory = ({id, onEdit}) =>{
    const [name, SetName] = useState('');
    const [description, SetDescription] = useState('')


    useEffect(()=> {
        const fetchCategory = async () => {
            try{
                const response = await getCategory(id);
                SetName(response.data.name);
                SetDescription(response.data.description);
            } catch(error){
                console.error('Error fetching Category', error)
            }
        }
        fetchCategory();
    },[id])

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            await createCategory(id, {name, description});
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

export default EditCategory