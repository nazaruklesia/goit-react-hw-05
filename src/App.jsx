import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import MovieList from "./components/MovieList/MovieList";


const App = () => {
    return <main>
        <Header />
        <SearchBar />
              <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/list" element={<MovieList/>} />
            <Route path="*" element= {<NotFoundPage/>} />

            </Routes>
        
        
    </main>
}

export default App;