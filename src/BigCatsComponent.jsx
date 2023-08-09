import { useState } from "react";

/*
Create a BigCats component, in its own file, which uses
the cats array (below) to display a styled list of cats.
• Include a unique id and fix the warning about keys
• Create a SingleCat component for rendering each
individual cat, and add an image property for each one.
*/

const cats = [
    { id: 1, name: 'Cheetah', latinName: 'Acinonyx jubatus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/TheCheethcat.jpg/320px-TheCheethcat.jpg' },
    { id: 2, name: 'Cougar', latinName: 'Puma concolor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Mountain_Lion_in_Glacier_National_Park.jpg/480px-Mountain_Lion_in_Glacier_National_Park.jpg' },
    { id: 3, name: 'Jaguar', latinName: 'Panthera onca', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Standing_jaguar.jpg/480px-Standing_jaguar.jpg' },
    { id: 4, name: 'Leopard', latinName: 'Panthera pardus', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_leopard_male_%28cropped%29.jpg/480px-African_leopard_male_%28cropped%29.jpg' },
    { id: 5, name: 'Lion', latinName: 'Panthera leo', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/480px-Lion_waiting_in_Namibia.jpg' },
    { id: 6, name: 'Snow leopard', latinName: 'Panthera uncia', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Irbis4.JPG/480px-Irbis4.JPG' },
    { id: 7, name: 'Tiger', latinName: 'Panthera tigris', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/480px-Walking_tiger_female.jpg' },
    { id: 8, name: 'Tigeres', latinName: 'Panthera tigrises', image: './assets/images/tiger.jpg' },
];

function SingleCatComponent({name, latinName, image}) {
    return (
        <li>
            <h3>{name}, <em>({latinName})</em></h3>            
            <img src={image} width="250" height="200" alt={name} />            
        </li>
    )
}

function BigCats() {    
    
    const [currentCats, setCurrentCats] = useState(cats);
    const catItems = cats.map(cat => (
        <SingleCatComponent name={cat.name} latinName={cat.latinName} key={cat.id} image={cat.image}/>
    ))

    const handleReverseCats = () => {
        let newCats = [...currentCats];
        newCats.reverse();
        setCurrentCats(newCats);
        newCats.sort();
    }
   
    const filterCats = () => {
        let filteredCats = [...currentCats];
        filteredCats.filter(cats => cats.latinName = 'Panthera' );

    }
    
    
    return (
        <div className="bigcats">
            <ul>{ catItems }</ul>
            <button onClick={handleReverseCats}>Reverse List</button>
            <button onClick={filterCats}>Filter Cats </button>
        </div>
         
    )
    
   
}
export default BigCats

