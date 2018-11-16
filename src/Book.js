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
            <div>
                <h3> Title: {this.props.title} </h3>
                <h3> Author: {this.props.author} </h3>
                <p>{this.state.count - this.state.borrowed_count}</p>
                {this.canBorrow() ? (
                    <button onClick={this.handleBorrow} isbn={this.props.isbn}> Borrow</button>
                )
                    :
                    <p></p>
                }

                {this.canReturn() ? (
                    <button onClick={this.handleReturn} isbn={this.props.isbn}> Return </button>
                )
                :
                        <p></p>
                }
                <hr />
            </div>
        );
    }
};

export default Book;