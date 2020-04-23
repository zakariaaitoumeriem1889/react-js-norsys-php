import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import BookSearch from "./BookSearch";
import Book from "./Book";

const Body = ({books, onSearch}) => {
    const searchBook = (bookTitle) => {
        onSearch(bookTitle)
    }

    return (
        <Container>
            <Row>
                <Col>
                    <BookSearch onSearch={searchBook} />
                </Col>
            </Row>
            <Row>
                {
                    books.map((book) =>
                        <Col key={book.isbn}>
                            <Book book={book} />
                        </Col>
                    )
                }
            </Row>
        </Container>
    )
}

export default Body;