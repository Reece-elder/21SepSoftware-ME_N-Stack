// MAKE SURE YOUR FILE IS .jsx
// JSX is JavaScript Extension - Makes adding HTML and CSS a lot easier 

// Using Simple React Snippets - type in sfc (Stateless Function Component)

const myFirstComp = () => {

    // What will your functional component render/ return
    return(
        // Here you put your HTML
        // Components can only ever return ONE THING
        // If using multiple elementa YOU MUST SURROUND WITH <DIV>
        <div>
            <h2> Hello, im a modular component!</h2>
            <h3> Some new text</h3>
        </div>

    );

};

// Export our component
export default myFirstComp;

