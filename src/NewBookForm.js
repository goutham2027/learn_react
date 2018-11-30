import React from 'react';
import { Row, Form, FormGroup, Button, Jumbotron, FormControl, ControlLabel } from 'react-bootstrap';

class NewBookForm extends React.Component {
    constructor(props) {
        super(props);
    }

    isBookInfoValid() {
        return this.props.isBookInfoValid(this.props.book);
    }

    render() {
        const {handleOnSubmit, handleInputChange} = this.props
        return (
            <Jumbotron>
                <Form onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <div className="col-xs-12">
                            <ControlLabel htmlFor="title" className="col-xs-3 text-right">Title</ControlLabel>
                            <div className="col-xs-3">
                                <FormControl type="text" name="title" value={this.props.book.title} onChange={(e) => handleInputChange(this.props.book, e)} />
                            </div>
                        </div>

                        <div className="col-xs-12">
                            <ControlLabel htmlFor="author" className="col-xs-3 text-right">Author</ControlLabel>
                            <div className="col-xs-3">
                                <FormControl type="text" name="author" value={this.props.book.author} onChange={(e) => handleInputChange(this.props.book, e)} />
                            </div>
                        </div>

                        <div className="col-xs-12">
                            <ControlLabel htmlFor="num_of_copies" className="col-xs-3 text-right">Number of copies</ControlLabel>
                            <div className="col-xs-3">
                                <FormControl type="text" name="copies" value={this.props.book.copies} onChange={(e) => handleInputChange(this.props.book, e)} />
                            </div>
                        </div>

                        {this.isBookInfoValid() ?
                            <Button bsStyle="primary" type="submit">Add Book</Button>
                            :
                            <Button bsStyle="primary" type="submit" disabled>Add Book</Button>
                        }
                </FormGroup>
                </Form>
            </Jumbotron>

        )
    }

}

export default NewBookForm;