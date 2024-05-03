import logo from './logo.svg';
import './App.css';
import Home from "./views/Home";
import About from "./views/About";
import {Route, Routes} from "react-router-dom";
import NavBar from "./views/NavBar";
import Profile from "./views/Profile";
import Info from "./views/Info";
import AboutUs from "./views/AboutUs";
import HistorySample from "./views/HistorySample";

function App() {
    return (
        <div className="app-container">
            <NavBar/>
            <hr/>
            <Routes>
                <Route path="*" element={<Home/>}></Route>
                {/* Route 하나에 여러 개 path 설정 > path={['/about', '/info']} 더 이상 사용 불가 */}
                {/* 서브라우터 사용 */}
                <Route path="about" >
                    <Route index element={<About/>}></Route>
                    <Route path="about-us" element={<AboutUs/>}></Route>
                </Route>
                {/* Route URL 쿼리 > useSearchParams Hooks 을 사용해서 가져옴*/}
                <Route path="info" element={<Info/>}></Route>
                {/* Route Parameter > useParams Hook 을 사용해서 가져와야함. */}
                <Route path="profile/:username" element={<Profile/>}></Route>
                <Route path="history" element={<HistorySample/>}></Route>

            </Routes>
        </div>
    );
}

export default App;
