import React from 'react';
import Book from "./Book";
import NewBookForm from './NewBookForm';
import EditBookModal from './EditBookModal';

class Books extends React.Component {

    constructor(props) {
        super(props);

        this.Book = function(title='', author='', copies=1) {
            this.title = title;
            this.author = author;
            this.copies = copies;
        }

        this.state = {
            books: this.get_default_books(),
            new_book: new this.Book(),
            edit_book: new this.Book(),
            edit_index: undefined,
            showEditModal: false
        }

        this.handleNewBook = this.handleNewBook.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEditInputChange = this.handleEditInputChange.bind(this);
        this.handleEditModalClose = this.handleEditModalClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);

        this.handleDelete = this.handleDelete.bind(this);
    }

    get_default_books() {
        return [
            {
                'title': 'Who will cry when you Die',
                'author': 'Robin Sharma',
                'copies' : 5
            },
            {
                'title': 'Loosing my Virginity',
                'author': 'Richard Branson',
                'copies' : 5
            }
        ]
    }

    isBookInfoValid(book) {
        return book.title.length > 0 && book.author.length > 0 && book.copies > 0
    }

    handleNewBook(event) {
        event.preventDefault()
        let book;
        book = this.state.new_book;

        if (this.isBookInfoValid(book)) {
            this.setState(prevState => ({
                'books': [...prevState.books, book]
            }))
        }
        this.setState({new_book: new this.Book()})
    }

    handleEdit(event) {
        event.preventDefault();
        let edit_index, edit_book, books, new_book;

        edit_index = this.state.edit_index;
        edit_book = this.state.edit_book;
        books = this.state.books;
        books[edit_index] = edit_book;

        this.setState({books: books});
        this.setState({edit_index: undefined});
        this.setState({showEditModal: false});

        new_book = new this.Book()
        this.setState({edit_book: new_book});
    }

    handleDelete(event) {
        event.preventDefault();
        const target = event.target;
        let delete_index, books;

        delete_index = target.index;
        books = this.state.books;

        books.splice(delete_index, 1);
        this.setState({books: books});
    }

    handleInputChange(book, event) {
        const target = event.target;
        book[target.name] = target.value;

        this.setState({new_book: book});
    }

    handleEditInputChange(book, event) {
        const target = event.target;
        book[target.name] = target.value;

        this.setState({edit_book: book});
    }

    toggleEdit(event) {
        event.preventDefault();
        let book, index, edit_book;

        index = event.target.getAttribute('index');
        book = this.state.books[index]
        edit_book = this.state.edit_book;

        // TODO: Research on how to do deep copy in JS
        edit_book.title = book.title;
        edit_book.author = book.author;
        edit_book.copies = book.copies;

        this.setState({edit_book: edit_book});
        this.setState({'showEditModal': !this.state.showEditModal});
        this.setState({'edit_index': index})
    }

    handleEditModalClose(event) {
        event.preventDefault();
        let book;
        book = new this.Book();

        this.setState({'showEditModal': false})
        this.setState({'edit_index': undefined})
        // reset edit values in state
        this.setState({edit_book: book});
    }

    render() {
        let books = []
        this.state.books.forEach(function(book, index) {
            books.push(<Book
                key={index}
                book={book}
                toggleEdit={this.toggleEdit}
                handleDelete={this.handleDelete}
                index={index} />)
        }, this)
        return (
        <div className="col-xs-12">
            <NewBookForm handleOnSubmit={this.handleNewBook}
            book={this.state.new_book}
            handleInputChange={this.handleInputChange}
            isBookInfoValid={this.isBookInfoValid} />
                {this.state.books.length > 0 ?
                    <h2 className="text-success"> All Books </h2>
                    :
                    <h2 className="text-danger"> No Books present.</h2>
                }
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Avaialable Copies</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {books}
                </tbody>
            </table>
            {this.state.showEditModal ?
            <EditBookModal
             show={this.state.showEditModal}
             handleOnClose={this.handleEditModalClose}
             handleOnSubmit={this.handleEdit}
             handleInputChange={this.handleEditInputChange}
             isBookInfoValid={this.isBookInfoValid}
             book={this.state.edit_book} />
            :
            <p></p>
            }
        </div>
        );
    }
};

export default Books;