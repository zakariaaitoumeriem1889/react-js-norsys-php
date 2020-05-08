import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";
import BookSearch from "./BookSearch";
import Book from "./Book";
import {Link} from "react-router-dom";

const Body = ({books, onSearch}) => {

    const searchBook = (bookTitle) => {
        onSearch(bookTitle);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <BookSearch onSearch={searchBook} />
                </Col>
            </Row>
            <Row>
                <Link to="/books/new">
                    <Button variant="outline-dark">New Book</Button>
                </Link>
            </Row>
            <Row>
                {
                    books.map((book) =>
                        <Col key={book.id}>
                            <Book book={book} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default Body;