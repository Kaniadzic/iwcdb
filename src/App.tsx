import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import './styles/Colors.css';
import { Navbar } from './components/Navbar';
import { Library } from './pages/Library';
import { DeckBuilder } from './pages/DeckBuilder';
import { Glossary } from './pages/Glossary';
import { About } from './pages/About';
import { Error } from './pages/Error';

function App() {
  return (
    <div className="App flex column">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/deckbuilder" element={<DeckBuilder />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>   
    </div>
  );
}

export default App;
