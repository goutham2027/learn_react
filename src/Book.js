import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            borrowed_count: 0
        }

        this.handleBorrow = this.handleBorrow.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }

    handleBorrow(event) {
        // increment borrowed_count
        // borrowed_count <= count
        if (this.state.borrowed_count < this.props.copies) {
            this.setState((state) => {
                return { borrowed_count: this.state.borrowed_count + 1 }
            })
        };
    }

    canBorrow() {
        // Can borrow only if a book is available.
        return this.state.borrowed_count < this.props.copies;
    }

    canReturn() {
        // Can return only if a book is borrowed
        return this.state.borrowed_count > 0
    }

    handleReturn(event) {
        // decrement borrowed_count
        // borrowed_count <= count
        if(this.state.borrowed_count >= 0 && this.state.borrowed_count <= 10) {
            this.setState({borrowed_count: this.state.borrowed_count - 1})
        }
    }

    render() {
        const {title, author, isbn, index} = this.props;
        return (
            <tr>
                <td>{title}</td>
                <td>{author}</td>
                <td>{this.props.copies - this.state.borrowed_count}</td>
                <td>{this.canBorrow() ? (
                    <button className="btn-primary" onClick={this.handleBorrow} isbn={isbn}> Borrow</button>
                )
                    :
                    <p></p>
                }
                    {this.canReturn() ? (
                        <button className="btn-primary" onClick={this.handleReturn} isbn={isbn}> Return </button>
                    )
                        :
                        <p></p>
                    }
                    <button className="btn-primary" index={index} onClick={this.props.toggleEdit}>Edit</button>
                    <p></p>
                    <button className="btn-primary" index={index} onClick={this.props.handleDelete}>Delete</button>
                </td>
            </tr>
        );
    }
};

export default Book;