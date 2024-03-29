import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './components/header';
import { Contents } from './components/content';
import { Create } from './components/create';
import { Read } from './components/read';
//import { Footer } from './components/footer';



class App extends Component {

  //allows html in JAVASCRIPT
  render() {

    //return html 
    return (
      <Router>

        <div className="App">

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>
          <br />
          <Switch>
            <Route path='/' component={Contents} exact />
            <Route path='/create' component={Create} exact />
            <Route path='/read' component={Read} exact />
          </Switch>


        </div>

      </Router>
    );
  }
}

export default App;
