import './css/App.css';
import MyFirstComp from './components/myFirstComp';
import Article from './components/003-Parent-child/article';
import Parent from './components/004-props/Parent';

// When placing a react component in you must use UpperCamelCase
function App() {
  return (
    // html Elements are always lower case
    <div> 
      {/* Placing My component INTO this div */}
      {/* <MyFirstComp/>
      <Article/> */}
      <Parent/>
    </div>
  );
}

export default App;
