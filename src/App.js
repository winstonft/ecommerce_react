// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ClickTracker from './components/ClickTracker/ClickTracker';

function App() {
  return (
    <div className='App'>
        <NavBar />
        <ItemListContainer name="Winston"/>
        <ClickTracker />
    </div>
  );
}

export default App;
