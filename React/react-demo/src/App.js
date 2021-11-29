import './css/App.css';
import MyFirstComp from './components/myFirstComp';
import Article from './components/003-Parent-child/article';

// When placing a react component in you must use UpperCamelCase
function App() {
  return (
    // html Elements are always lower case
    <div> 
      {/* Placing My component INTO this div */}
      <MyFirstComp/>
      <Article/>
    </div>
  );
}

export default App;
