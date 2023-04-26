import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, DetailFood, SearchResult, Category, About, Blog } from "./pages";
import { Container } from "@mui/material";
import { useEffect } from "react";
import { BlackScreen, Navbar } from "./components";
import { Footer, Sidebar, Settings } from "./layout";
import { useGlobalContext } from "./context/ContextAPI";

function App() {
  const { toogleMenu, dark }: any = useGlobalContext();

  useEffect(() => {
    localStorage.setItem("theme", dark);
  }, [dark]);
  return (
    <div className={dark ? "dark" : "light"}>
      <div className=" bg-white/80 dark:bg-black/90">
        <Navbar />
        <Container sx={{ position: "relative" }}>
          <Settings />

          {toogleMenu && (
            <>
              <Sidebar />
              <BlackScreen />
            </>
          )}
          <Routes>
            <Route index path="/" element={<Homepage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/recipe/:id" element={<DetailFood />} />
            <Route path="/search/:text" element={<SearchResult />} />
          </Routes>
          <Footer />
        </Container>
      </div>
    </div>
  );
}

export default App;