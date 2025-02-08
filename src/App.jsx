import { Route, Routes } from "react-router-dom";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader/Loader";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"))
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"))
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage.jsx"))
const MoviePage = lazy(() => import("./pages/MoviesPage/MoviesPage.jsx"))



const App = () => {
    return <main>
        <Navigation />

        <Suspense fallback={<Loader />}>
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