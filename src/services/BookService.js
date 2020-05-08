import Axios from "axios";

class BookService {
    findBooks() {
        return Axios.get('/books');
    }

    findBooksByTitle(title) {
        return Axios.get(`/books?title=${title}`);
    }

    findbooksById(id) {
        return Axios.get(`/books/${id}`);
    }

    save(book) {
        return Axios.post('/books', book);
    }

    edit(book) {
        return Axios.put(`/books/${book.id}`, book);
    }

    delete(id) {
        return Axios.delete(`/books/${id}`);
    }
}

export const bookService = new BookService();