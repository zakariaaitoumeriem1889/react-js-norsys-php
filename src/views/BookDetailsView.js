import React, {useEffect, useState} from "react";
import {Card, Table} from "react-bootstrap";
import {bookService} from "../services/BookService";

const BookDetailsView = (props) => {

    const book = {
        id: null,
        isbn: '',
        summary: '',
        title: '',
        publisher: '',
        publicationDate: null,
        numberOfPages: null,
        language: '',
        author: ''
    };

    const [currentBook, setCurrentBook] = useState(book);

    const getBook = id => {
        bookService.findbooksById(id)
                   .then(response => {
                       setCurrentBook(response.data);
                       console.log(response.data);
                   })
                   .catch(e => {
                       alert(e);
                       console.log(e);
                   });
    };

    useEffect(() => {
        getBook(props.match.params.id);
      }, [props.match.params.id]);

    return (
        <div className="container">
            <Card style={{margin: '20px'}}>
                <Card.Header>
                    <h3>{currentBook.title}</h3>
                </Card.Header>
                <Card.Body>
                    <p>{currentBook.summary}</p>
                    <p>
                        Publié par: <strong>{currentBook.publisher}</strong><br/>
                        Le: <strong>{currentBook.publicationDate}</strong>
                    </p>
                    <p>
                        Auteur: <strong>{currentBook.author.name}</strong>
                    </p>
                </Card.Body>
                <Card.Footer>
                    <Table>
                        <tr>
                            <td>
                                ISBN: {currentBook.isbn}
                            </td>
                            <td>
                                {currentBook.numberOfPages} pages
                            </td>
                            <td>
                                {currentBook.language}
                            </td>
                        </tr>
                    </Table>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default BookDetailsView;