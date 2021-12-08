import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './containers/HomeScreen';
import NCCNITS from './containers/NccNits';
import AlumniScreen from './containers/Alumni';
import AboutNCC from './containers/AboutNcc';
import FAQS from './containers/FAQs';
import DevTeam from './containers/DevTeam';
import Gallery from './containers/Gallery';

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
                <Route
                    exact
                    path={'/faqs'}
                    element={<FAQS />}
                    key='route-faqs'
                />
                <Route
                    exact
                    path={'/gallery'}
                    element={<Gallery />}
                    key='route-gallery'
                />
                <Route
                    exact
                    path={'/devteam'}
                    element={<DevTeam />}
                    key='route-devteam'
                />
            </Routes>
        </BrowserRouter >
    );
}

export default App;
