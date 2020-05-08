import React, {useEffect, useState} from 'react';
import {bookService} from "../services/BookService";
import {useHistory} from 'react-router-dom';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

const EditBookView = (props) => {
    const history = useHistory();
    const initialBook = {
        id: null,
        isbn: '',
        summary: '',
        title: '',
        publisher: '',
        publicationDate: null,
        numberOfPages: null,
        language: '',
        author: ''
    }
    const [currentBook, setCurrentBook] = useState(initialBook);

    const getBook = id => {
        bookService.findbooksById(id)
            .then(response => {
                setCurrentBook(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        getBook(props.match.params.id)
    }, [props.match.params.id]);

    const handleChangeForm = event => {
        const { name, value } = event.target;
        setCurrentBook({...currentBook, [name]: value});
    }

    const handleSubmit = (event) => {
        console.log(JSON.stringify(currentBook));
        bookService.edit(currentBook.id, currentBook)
            .then(response => {
                history.push('/');
            })
            .catch(error => {console.error(error)})
    }

    const updateBook = () => {
        bookService.edit(currentBook.id, currentBook)
            .then(response => {
                console.log(response.data);
                alert('The tutorial was updated successfully');
            })
            .catch(e => {
                console.log(e);
            });
    };

    return (
        <Container style={{margin: "20px"}}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">ISBN</label>
                    <input name="isbn" type="text" className="form-control" value={currentBook.isbn} onChange={handleChangeForm}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Title</label>
                    <input name="title" type="text" className="form-control" value={currentBook.title} onChange={handleChangeForm}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Language</label>
                    <input name="language" type="text" className="form-control"  value={currentBook.language} onChange={handleChangeForm} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Number of pages</label>
                    <input name="numberOfPages" type="text" className="form-control" value={currentBook.numberOfPages} onChange={handleChangeForm} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Publisher</label>
                    <input name="publisher" type="text" className="form-control" value={currentBook.publisher} onChange={handleChangeForm}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Publication date</label>
                    <input name="publicationDate" type="text" className="form-control" value={currentBook.publicationDate} onChange={handleChangeForm}/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Author</label>
                    <input name="author" type="text" className="form-control" value={currentBook.author} onChange={handleChangeForm}/>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Summary</label>
                    <textarea name="summary" className="form-control" id="exampleFormControlTextarea1" rows="3" value={currentBook.summary} onChange={handleChangeForm}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Container>
    );

};

export default EditBookView;
