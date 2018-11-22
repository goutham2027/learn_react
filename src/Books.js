import React from 'react';
import Book from "./Book";
import NewBookForm from './NewBookForm';
import EditBookModal from './EditBookModal';

class Books extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // 'books': this.get_all_books(),
            'books': this.get_default_books(),
            // 'newBook': {
            //     'title': '',
            //     'author': ''
            // }
            'title': '',
            'author': '',
            'copies': 1,
            'showEditModal': false
        }
        this.handleNewBook = this.handleNewBook.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.canSubmit = this.canSubmit.bind(this);
        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEditModalClose = this.handleEditModalClose.bind(this);
    }

    get_default_books() {
        return []
        return [
            {
                'title': 'Who will cry when you Die',
                'author': 'Robin Sharma',
                'count' : 5
            },
            {
                'title': 'Loosing my Virginity',
                'author': 'Richard Branson',
                'count' : 5
            }
        ]
    }

    canSubmit() {
        return this.state.title.length > 0 && this.state.author.length > 0 && this.state.copies > 0
    }

    handleNewBook(event) {
        event.preventDefault()
        let newBook = {
            'title': this.state.title,
            'author': this.state.author,
            'count': this.state.copies
        }

        if (this.canSubmit()) {
            this.setState(prevState => ({
                'books': [...prevState.books, newBook]
            }))
            this.setState({'title': '', 'author': '', 'count': 1})
        }
    }

    handleEdit(event) {
        event.preventDefault();
        // get event details and load modal
        // onSave of the modal update the book details
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    toggleEdit(event) {
        event.preventDefault();
        this.setState({'showEditModal': !this.state.showEditModal});
    }

    handleEditModalClose(event) {
        event.preventDefault();
        this.setState({'showEditModal': false})
    }

    render() {
        let books = []
        this.state.books.forEach(function(book, index) {
            books.push(<Book
                key={index}
                title={book.title}
                author={book.author}
                count={book.count}
                toggleEdit={this.toggleEdit} />)
        }, this)
        return (
        <div className="col-xs-12">
            <NewBookForm handleOnSubmit={this.handleNewBook}
            title={this.state.title}
            author={this.state.author}
            copies={this.state.copies}
            handleInputChange={this.handleInputChange}
            canSubmit={this.canSubmit} />
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
                        <th>Avaialable Count</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {books}
                </tbody>
            </table>
            <EditBookModal
             show={this.state.showEditModal}
             handleOnClose={this.handleEditModalClose}/>
        </div>
        );
    }
};

export default Books;