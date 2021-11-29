import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';
import NCCNITS from './containers/NccNits';
import AlumniScreen from './containers/Alumni';
import AboutNCC from './containers/AboutNcc';

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
                    path={'/aboutncc'}
                    element={<AboutNCC />}
                    key='route-aboutncc-screen'
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
            </Routes>
        </BrowserRouter >
    );
}

export default App;
