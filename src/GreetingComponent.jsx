function GreetingComponent(props) {   

    return (
        <div className="greet">
            <h4>Hello {props.name ? props.name : 'World'} </h4>
            {props.children}         
        </div>
    )
}

export default GreetingComponent

/*
Create a Greeting component, in its own file, which
renders the text “Hello World”.
• Import it into App.jsx, and pass in a prop called ‘name’
when rendering the Greeting component
• If the name prop exists, make sure the Greeting
component replaces ‘World’ with that name value, i.e.
“Hello John”.
• Include support for a greeting message via children.*/
