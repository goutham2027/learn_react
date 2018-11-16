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
    }

    get_default_books() {
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

    handleNewBook(event) {
        event.preventDefault()
        let newBook = {
            'title': this.state.title,
            'author': this.state.author,
            'count': this.state.copies
        }
        this.setState(prevState => ({
            'books': [...prevState.books, newBook]
        }))
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
        <div>
            <NewBookForm handleOnSubmit={this.handleNewBook}
            title={this.state.title}
            author={this.state.author}
            copies={this.state.copies}
            handleInputChange={this.handleInputChange} />
            <h2> All Books </h2>
            {books}
        </div>
        );
    }
};

export default Books;