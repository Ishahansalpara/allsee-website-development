import { ThemeProvider} from "styled-components";
import "./App.css";
import { lightTheme, darkTheme } from "./utils/themes";
import {BrowserRouter as Router,Routes,Route } from "react-router";
import NavbarLayout  from "./layouts/NavbarLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import MainCategory from "./pages/MainCategory";
import SubCategory from "./pages/SubCategory";
import React, { useState } from "react";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
    <Router>
      <Routes>
          <Route element={<NavbarLayout isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />}>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/categories" element={<Categories/>} />
          <Route path="/categories/:mainCategory" element={<MainCategory />} />
          <Route path="/categories/:mainCategory/:subCategory" element={<SubCategory />} />
        </Route>
      </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
