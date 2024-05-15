import React from "react";
import Nav from "../../components/nav/Nav";
import Banner from "../../components/banner/Banner";
import Row from "./Row"; // Assuming Row component is in components/row
import requests from "../../Requests";

// Functional component for the Home Screen layout
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Navigation bar component */}
      <Nav />
      {/* Banner component displaying featured content */}
      <Banner />
      {/* Rows for different categories of content, with the first row styled differently for larger display */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default HomeScreen;
