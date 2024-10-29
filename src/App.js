import logo from './logo.svg';
import './App.css';
import CategoryList from './components/CategoryList'
import AddCategory from './components/AddCategory';
import { useState } from 'react';
import EditCategory from './components/EditCategory';

function App() {
  const [editId, setEditId] = useState(null);
  
  const handleEdit = (id) => {
    setEditId(id)
  }
  return (
    <div className="App">
      <h1>Crud App</h1>
      <AddCategory />
      <CategoryList onEdit={handleEdit} />
      {editId && <EditCategory id={editId} onEdit={() => setEditId(null)} />}
    </div>
  );
}

export default App;
