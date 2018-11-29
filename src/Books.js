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
            'edit_title': '',
            'edit_author': '',
            'edit_copies': 1,
            'edit_index': undefined,
            'showEditModal': false
        }
        this.handleNewBook = this.handleNewBook.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.canSubmit = this.canSubmit.bind(this);

        this.toggleEdit = this.toggleEdit.bind(this);
        this.handleEditModalClose = this.handleEditModalClose.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.canUpdate = this.canUpdate.bind(this);
    }

    get_default_books() {
        return []
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

    canSubmit() {
        return this.state.title.length > 0 && this.state.author.length > 0 && this.state.copies > 0
    }

    canUpdate() {
        return this.state.edit_title.length > 0 && this.state.edit_author.length > 0 && this.state.edit_copies > 0
    }

    handleNewBook(event) {
        event.preventDefault()
        let newBook = {
            'title': this.state.title,
            'author': this.state.author,
            'copies': this.state.copies
        }

        if (this.canSubmit()) {
            this.setState(prevState => ({
                'books': [...prevState.books, newBook]
            }))
            this.setState({'title': '', 'author': '', 'copies': 1})
        }
    }

    handleEdit(event) {
        event.preventDefault();
        let edit_index, books;

        edit_index = this.state.edit_index;
        books = this.state.books;
        books[edit_index]['title'] = this.state.edit_title;
        books[edit_index]['author'] = this.state.edit_author;
        books[edit_index]['copies'] = parseInt(this.state.edit_copies);

        console.log(books);
        this.setState({'books': books});
        this.setState({'edit_index': undefined});
        this.setState({'showEditModal': false});
        this.setState({'edit_title': ''});
        this.setState({'edit_author': ''});
        this.setState({'edit_copies': 1});

    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    toggleEdit(event) {
        event.preventDefault();
        let book, index;
        index = event.target.getAttribute('index');

        this.setState({'showEditModal': !this.state.showEditModal});
        book = this.state.books[index]

        this.setState({'edit_index': index})
        this.setState({'edit_title': book['title']});
        this.setState({'edit_author': book['author']});
        this.setState({'edit_copies': book['copies']});
    }

    handleEditModalClose(event) {
        event.preventDefault();
        this.setState({'showEditModal': false})

        // reset edit values in state
        this.setState({'edit_index': undefined})
        this.setState({'edit_title': ''});
        this.setState({'edit_author': ''});
        this.setState({'edit_copies': ''});
    }

    render() {
        let books = []
        this.state.books.forEach(function(book, index) {
            books.push(<Book
                key={index}
                title={book.title}
                author={book.author}
                copies={book.copies}
                toggleEdit={this.toggleEdit}
                index={index} />)
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
             handleInputChange={this.handleInputChange}
             canSubmit={this.canUpdate}
             title={this.state.edit_title}
             author={this.state.edit_author}
             copies={this.state.edit_copies} />
            :
            <p></p>
            }
        </div>
        );
    }
};

export default Books;