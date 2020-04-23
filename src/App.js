import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {bookService} from "./services/BookService";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Col, Container, Row} from "react-bootstrap";
import Header from "./components/Header";
import Body from "./components/Body";
import BookDetailsView from "./views/BookDetailsView";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [books, setBooks] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const findBooks = () => {
      bookService.findBooks()
          .then(function (response) {
            setBooks(response.data);
          });
    };

    const findByTitle = () => {
      bookService.findBooksByTitle(searchValue)
          .then(function (response) {
            setBooks(response.data);
          });
    };

    const searchBook = () => {
      if (searchValue.length === 0) {
        findBooks();
      } else {
        findByTitle(searchBook);
      }
    };

    searchBook();
  }, [searchValue]);

  return (
      <Router>
        <Container fluid>
          <Row>
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <Container>
                <Switch>
                  <Route path="/books/:id">
                    <BookDetailsView />
                  </Route>
                  <Route path="/">
                    <Body books={books} onSearch={(bookName) => setSearchValue(bookName)} />
                  </Route>
                </Switch>
              </Container>
            </Col>
          </Row>
        </Container>
      </Router>
  );
}

export default App;
