import { Route, Routes } from "react-router-dom";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"))
const MoviePage = lazy(() => import("./pages/MoviesPage"))



const App = () => {
    return <main>
        <Navigation />

        <Suspense fallback={<h1 style={{ textAlign: "center", color: "red" }}>⏳ Завантаження...</h1>}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviePage />} />
                <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
                    <Route path="cast" element={<MovieCast />} />
                    <Route path="reviews" element={<MovieReviews />} />

                </Route>
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </Suspense>
    </main >
}

export default App;