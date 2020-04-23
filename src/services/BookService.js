import Axios from "axios";

class BookService {
    findBooks() {
        return Axios.get('/books');
    }

    findBooksByTitle(title) {
        return Axios.get(`/books?title=${title}`);
    }

    findbooksByIsbn(id) {
        return Axios.get(`/books/${id}`);
    }
}

export const bookService = new BookService();