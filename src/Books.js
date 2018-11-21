import React from 'react';
import Book from "./Book";
import NewBookForm from './NewBookForm';

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
        }
        this.handleNewBook = this.handleNewBook.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.canSubmit = this.canSubmit.bind(this);
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

    handleInputChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    render() {
        let books = []
        this.state.books.forEach(function(book, index) {
            books.push(<Book key={index} title={book.title} author={book.author} count={book.count} />)
        })
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
            {books}
        </div>
        );
    }
};

export default Books;