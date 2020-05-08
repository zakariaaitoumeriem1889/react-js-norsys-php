import React from "react";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import { bookService } from "../services/BookService";

const Book = ({book}) => {
    const isbn = book.isbn;
    const id = book.id;

    const deletePhoto = async () => {
        try {
            await bookService.delete(id);
            alert('Deleted');
            window.location.reload();
        } catch (error) {
            console.log(error);
            alert('Delete');
        }
    };

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
                <Link to={`/books/${id}`}>
                    <Button variant="info">Detail</Button>
                </Link>&nbsp;
                <Link to={`/books/edit/${id}`} book={book[id]}>
                    <Button variant="primary">Edit</Button>
                </Link>&nbsp;
                <Button onClick={deletePhoto} variant="danger">Delete</Button>
            </Card.Footer>
        </Card>
    );
}

export default Book;