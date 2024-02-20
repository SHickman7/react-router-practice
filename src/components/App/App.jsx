import axios from 'axios';
import './App.css';
import StudentForm from '../StudentForm/StudentForm.jsx';
import StudentList from '../StudentList/StudentList.jsx';
import About from '../About/About.jsx'


import { HashRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                <h1 className="App-title">GitHub Student List</h1>
                </header>
                <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/allStudents">All Students</Link>
                </li>
                <br></br>
            </nav>
            <Route path="/" exact>
                <StudentForm />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/allStudents">
                <p>Student list:</p>
                <StudentList />
            </Route>
            </div>
        </Router>
    );
}

export default App;
