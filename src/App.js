import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from './components/HomePage';
import ReactQueryPage from './components/ReactQueryPage';

function App() {
  return (
    <div className="App container max-w-4xl mx-auto">
      <nav className="flex justify-center gap-5 bg-orange-100 p-6">
        <Link to="/" className='p-4 border border-red-500 rounded-lg'>Homepage</Link>
        <Link to="/react-query" className='p-4 border border-red-500 rounded-lg'>REACT Query</Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-query' element={<ReactQueryPage />} />
        </Routes>
    </div>
  );
}

export default App;
