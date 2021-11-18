import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';
import NCCNITS from './containers/NccNits';
import AlumniScreen from './containers/Alumni';
import QuoteScreen from './containers/Quotes';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    exact
                    path={'/'}
                    element={<HomeScreen />}
                    key='route-homescreen'
                />
                <Route
                    exact
                    path={'/nccnits'}
                    element={<NCCNITS />}
                    key='route-nccnits-screen'
                />
                <Route
                    exact
                    path={'/alumniscreen'}
                    element={<AlumniScreen />}
                    key='route-alumniscreen'
                />
                <Route
                    exact
                    path={'/quotescreen'}
                    element={<QuoteScreen />}
                    key='route-alumniscreen-quotescreen'
                />
            </Routes>
        </BrowserRouter >
    );
}

export default App;
