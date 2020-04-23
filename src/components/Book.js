import React, {useEffect, useState} from "react";
import {Button, Card} from "react-bootstrap";
import {bookService} from "../services/BookService";

const Book = ({book}) => {
    const [books, setBooks] = useState([]);

    return (
        <Card border="info" bg="dark" text="light" style={{width: '340px', height: 'auto', marginTop: '20px', marginBottom: '20px'}}>
            <Card.Header>{book.title}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0" style={{fontSize: "12pt"}}>
                    <p>
                        {book.summary}
                    </p>
                </blockquote>
            </Card.Body>
            <Card.Footer>
                <button type="button" className="btn btn-outline-info">Detail</button>
            </Card.Footer>
        </Card>
    );
}

export default Book;