import Header from './header.jsx';
import Text from './text.jsx';
import Image from './image';
import Tags from './tags';

// Creating my functional component to contain my other components

const article = () => {

    return(
        // my function cant return MULTIPLE components, but can return a/multiple DIV(s) element containing components
        <div>
            <Header/>
            <Text/>
            <Image/>
            <Tags/>
        </div>
    );

};

export default article;