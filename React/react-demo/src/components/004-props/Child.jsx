// The Prop title will be passed in from the Parent component
// We have to specify the prop in the arrow function 
const Child = ({string}) => {

    let locTitle;

    let functionToPullData = () => {
        locTitle = "new thing";
    }

    // Pass title in as a LOCAL VARIABLE
    return ( 
        <div>
            {/* When adding paramaters to HTML, we first need to break out of HTML with {} */}
            {/* The text within the {} is the paramater / prop we're passing in much like `The text os ${title}` */}
            {/* <h2> The local text is {locTitle}</h2> */}
            <h2> The prop text is {string}</h2>
        </div>
     );
}
 
export default Child;