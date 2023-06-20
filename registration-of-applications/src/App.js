import './App.sass';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import Statement from "./Components/Statement/Statement";
import StatementAdd from "./Components/StatementAdd/StatementAdd";
import StatementEdit from "./Components/StatementEdit/StatementEdit";
import Map from "./Components/Map/Map";

function App() {
    return (
        <Container fluid className="main__content">
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Statement/>}/>
                    <Route path='/statement' element={<Statement/>}>
                        <Route path='edit/:id' element={<StatementEdit/>}/>
                        <Route path='add' element={<StatementAdd/>}/>
                    </Route>
                    <Route path='/map' element={<Map/>}/>
                </Routes>
            </BrowserRouter>
        </Container>
    );
}

export default App;
