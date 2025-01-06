import React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Loading from "./components/Loading"; 
import { loadMedia } from "./utils/loadMedia";

const mediaUrls = [
  // Add the URLs of all your media files here
  "/path/to/image1.jpg",
  "/path/to/image2.jpg",
  "/path/to/video1.mp4",
  // Add more media URLs as needed
];

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all media files
    loadMedia(mediaUrls)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load media:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      {loading && <Loading />}
      <div className="">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
