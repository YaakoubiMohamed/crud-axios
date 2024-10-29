import React, { useEffect, useState } from "react";

import {getCategories, deleteCategory} from '../api/categoryapi';

const CategoryList = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchCategories();
    })

    const fetchCategories = async () =>{
        try{
            const response = await getCategories();
            setCategories(response.data)
        } catch(error){
            console.error('error fetching categories', error)
        }
    }

    const handleDelete = async (id) => {
        try{
            await deleteCategory(id)
            fetchCategories()
        } catch(error){
            console.error('error Deleting categories', error)
        }
    }

    return(
        <div>
            <h2>Category List</h2>
            <ul>
                {categories.map((category) =>(
                    <li key={category.id}>
                        {category.name}
                        <button onClick={() => handleDelete(category.id)}>Delete</button>
                    </li>
                ))}
                
            </ul>
        </div>
    )
}


export default CategoryList