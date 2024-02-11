
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Textform heading="Enter the text to analyse below" />
      </div>
    </>
  );
}

export default App;
