import logo from './logo.svg';
import './App.css';
import Column from './Column'
import 'bootstrap/dist/css/bootstrap.min.css';
import jonesy from './static/Jonesy.png';
import betsyhigh5 from './static/bestyhigh5.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Sidebar from './Sidebar'


function App() {
    return (
        <div className="App">

            <header className="App-header">
                <Row>
                    <Col>
                        <img src={jonesy} className="App-logo" alt="jonesy"/>
                    </Col>
                    <Col>
                        <img src={betsyhigh5} className="App-logo" alt="betsyhigh5"/>
                    </Col>
                </Row>

            </header>

            <Column></Column>
            <Row>
                <Col></Col>
                <Col>
                    <Sidebar></Sidebar>
                </Col>
                <Col></Col>
            </Row>
        </div>
    );
}

export default App;
