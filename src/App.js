import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
    <Nav />
    <Banner/>
    <Row
      isLargeRow
      title="NETFLIX ORIGINALS"
      featchURL={requests.fetchNetflixOriginals}
    />
      <Row title="Tranding Now" featchURL={requests.fetchTrending}/>
      <Row title="Top Rated" featchURL={requests.fetchTopRated}/>
      <Row title="Action Movies" featchURL={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" featchURL={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" featchURL={requests.fetchHorrorMovies}/>
      <Row title="Romance Movies" featchURL={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" featchURL={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
