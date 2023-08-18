import logo from './logo.svg';
import SortingVisuailzer from './SortingVisualizer/SortingVisualizer'; 
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <div className='Header'>
        <Header className = "title"/>
      </div>
      <SortingVisuailzer></SortingVisuailzer>
    </div>
  );
}

export default App;
