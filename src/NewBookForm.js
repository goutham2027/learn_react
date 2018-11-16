import React from 'react';

class NewBookForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: '', author: '', copies: 1};

        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleOnSubmit(event) {
        event.preventDefault();
        console.log(this.state)
    }

    handleInputChange(event) {
        const target = event.target;
        this.setState({[target.name]: target.value});
    }

    render() {
        const {handleOnSubmit, handleInputChange, author, title, copies} = this.props
        return (
            // <form onSubmit={this.handleOnSubmit}>
            <form onSubmit={handleOnSubmit}>
                <div>
                    <label htmlFor="title">Title
                        <input type="text" name="title" value={title} onChange={handleInputChange}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="author">Author
                        <input type="text" name="author" value={author} onChange={handleInputChange}/>
                    </label>
                </div>

                <div>
                    <label htmlFor="num_of_copies">Number of copies
                        <input type="text" name="copies" value={copies} onChange={handleInputChange}/>
                    </label>
                </div>

                <button type="Submit">Add Book</button>
            </form>
        )
    }

}

export default NewBookForm;