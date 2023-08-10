import { useState } from "react";

/*
Create a new AddCatForm component that renders a form
with controlled components to capture name, latinName
and image details for a new Big Cat (extending Exercises
2 and 4)
• Submitting the form should update the parent BigCats
component and re-render the list
• Add a Delete link next to each cat allowing it to be removed
from the list.
*/

function AddCatForm() {   
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');

    const handleAddCat = (newCat) => {
        //newCat.id = currentCats.length + 1; // not reliable, especially when deleting
        newCat.id = currentCats.reduce((maxId, cat) => Math.max(maxId, cat.id), 0) + 1; // more reliable
        setCurrentCats([...currentCats, newCat]);
    }

    return (
        <div className="CatForm">
        
            <h2>Add Cat Form</h2>
            <div className="formRow">
                <label>Name:    
                    <input type="text" value={name} name="Name"
                    onChange={(e) => setName(e.target.value)} />
                </label>
            </div>
            <div className="formRow">
                <label>Latin Name:
                    <input type="text" value={latinName} name="latinName"
                    onChange={(e) => setLatinName(e.target.value)} />
                </label>
            </div>
            <div className="formRow">
                <label>Image:
                    <input type="text" value={image} name="image"
                    onChange={(e) => setImage(e.target.value)} />
                </label>
            </div>
            <div>
                <button onClick={handleAddCat}>Submit</button> 
                
            </div>         
        </div>   
        
    )
}
 
export default AddCatForm