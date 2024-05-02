import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Main from "./features/moviemain";
import Popular from "./features/popular";
import Now from "./features/now";
import Top from "./features/toprated";
import Upcoming from "./features/upcoming";
import Detail from "./features/detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/nowplaying" element={<Now />} />
          <Route path="/toprated" element={<Top />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:title" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
