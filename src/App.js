import './App.css';
import Title from './components/Title';
import Cake from './assets/berryCake.jpeg';
import Navigation from './components/Navigation';
import Recipe from './components/Recipe';


function App() {
  return (
   <>
    <Title />
    <Navigation />
    <img src={Cake}></img>
    <Recipe />
   </>
  );
}

export default App;
