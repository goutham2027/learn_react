import React from 'react';
import { Row, Form, FormGroup, Button, Jumbotron, FormControl, ControlLabel } from 'react-bootstrap';

class NewBookForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {handleOnSubmit, handleInputChange, canSubmit, author, title, copies} = this.props
        return (
            <Jumbotron>
                <Form onSubmit={handleOnSubmit}>
                    <FormGroup>
                        <div className="col-xs-12">
                            <ControlLabel htmlFor="title" className="col-xs-3 text-right">Title</ControlLabel>
                            <div className="col-xs-3">
                                <FormControl type="text" name="title" value={title} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="col-xs-12">
                            <ControlLabel htmlFor="author" className="col-xs-3 text-right">Author</ControlLabel>
                            <div className="col-xs-3">
                                <FormControl type="text" name="author" value={author} onChange={handleInputChange} />
                            </div>
                        </div>

                        <div className="col-xs-12">
                            <ControlLabel htmlFor="num_of_copies" className="col-xs-3 text-right">Number of copies</ControlLabel>
                            <div className="col-xs-3">
                                <FormControl type="text" name="copies" value={copies} onChange={handleInputChange} />
                            </div>
                        </div>

                        {canSubmit() ?
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