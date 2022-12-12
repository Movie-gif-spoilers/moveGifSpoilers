import './App.css';
import react from 'react';
import Header from './components/Header.js';
import DisplayGifs from './components/DisplayGifs.js';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer.js';

function App() {
  return (
    <div className="App">
     <Header />
     <main>
      <SearchBar />
      <DisplayGifs />
     </main>
      <Footer />
    </div>
  );
}

export default App;
