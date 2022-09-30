import logo from './logo.svg';
import './App.css';
import Column from './Column'
import 'bootstrap/dist/css/bootstrap.min.css';
import jonesy from './static/Jonesy.png';
import betsyhigh5 from './static/bestyhigh5.png';


function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={jonesy} className="App-logo" alt="jonesy"/>
                <img src={betsyhigh5} className="App-logo" alt="betsyhigh5"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>hello</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <Column></Column>
        </div>
    );
}

export default App;
