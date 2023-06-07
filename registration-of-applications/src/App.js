import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar/NavBar';
import { Container } from "react-bootstrap";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Statement from "./Components/Statement/Statement";
import StatementAdd from "./Components/StatementAdd/StatementAdd";
import StatementEdit from "./Components/StatementEdit/StatementEdit";
import Map from "./Components/Map/Map";

function App() {
  return (
    <Container fluid className="main__content">
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route src='/' element={<Statement/>}/>
                <Route src='/statement' element={<Statement/>}/>
                <Route src='/statement/add' element={<StatementAdd />}/>
                <Route src='/statement/edit' element={<StatementEdit/>}/>
                <Route src='/map' element={<Map/>} />
            </Routes>
        </BrowserRouter>
    </Container>
  );
}

export default App;
