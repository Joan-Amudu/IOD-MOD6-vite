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
    // input state values always need to be strings - empty initially
    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');
    const [image, setImage] = useState('');
    
    return (
    <div className="LoginForm componentBox">
        <h3>Add Cat Form</h3>
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
        <button>Submit</button> 
    </div>
    )
    }
 
export default AddCatForm