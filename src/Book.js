import React from 'react';

class Book extends React.Component {
    constructor(props) {
        super(props);
        const count = props.count
        this.state = {
            count: count,
            borrowed_count: 0
        }

        this.handleBorrow = this.handleBorrow.bind(this);
        this.handleReturn = this.handleReturn.bind(this);
    }

    handleBorrow(event) {
        // increment borrowed_count
        // borrowed_count <= count
        if (this.state.borrowed_count < this.state.count) {
            this.setState((state) => {
                return { borrowed_count: this.state.borrowed_count + 1 }
            })
        };
    }

    canBorrow() {
        // Can borrow only if a book is available.
        return this.state.borrowed_count < this.state.count;
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
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.author}</td>
                <td>{this.state.count - this.state.borrowed_count}</td>
                <td>{this.canBorrow() ? (
                    <button className="btn-primary" onClick={this.handleBorrow} isbn={this.props.isbn}> Borrow</button>
                )
                    :
                    <p></p>
                }
                    {this.canReturn() ? (
                        <button className="btn-primary" onClick={this.handleReturn} isbn={this.props.isbn}> Return </button>
                    )
                        :
                        <p></p>
                    }
                    <button className="btn-primary" onClick={this.props.toggleEdit}>Edit</button>
                </td>
            </tr>
        );
    }
};

export default Book;