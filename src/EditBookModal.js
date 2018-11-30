import React from 'react';
import { Row, Form, FormGroup, Button, Modal, FormControl, ControlLabel } from 'react-bootstrap';

class EditBookModal extends React.Component {
    constructor(props) {
        super(props);
    }

    isBookInfoValid() {
        return this.props.isBookInfoValid(this.props.book)
    }

    render() {
        const { show, handleOnClose, handleOnSubmit, handleInputChange, book, isBookInfoValid } = this.props;
        if (!show) {
            return null;
        }
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Edit Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleOnSubmit}>
                            <FormGroup>
                                <div className="col-xs-12">
                                    <ControlLabel htmlFor="title" className="col-xs-3 text-right">Title</ControlLabel>
                                    <div className="col-xs-3">
                                        <FormControl type="text" name="title" value={book.title} onChange={(e) => handleInputChange(this.props.book, e)} />
                                    </div>
                                </div>

                                <div className="col-xs-12">
                                    <ControlLabel htmlFor="author" className="col-xs-3 text-right">Author</ControlLabel>
                                    <div className="col-xs-3">
                                        <FormControl type="text" name="author" value={book.author} onChange={(e) => handleInputChange(this.props.book, e)} />
                                    </div>
                                </div>

                                <div className="col-xs-12">
                                    <ControlLabel htmlFor="num_of_copies" className="col-xs-3 text-right">Number of copies</ControlLabel>
                                    <div className="col-xs-3">
                                        <FormControl type="text" name="copies" value={book.copies} onChange={(e) => handleInputChange(this.props.book, e)} />
                                    </div>
                                </div>

                                <Button onClick={handleOnClose}>Close</Button>
                                {this.isBookInfoValid() ?
                                    <Button bsStyle="primary" type="submit">Update Book</Button>
                                    :
                                    <Button bsStyle="primary" type="submit" disabled>Update Book</Button>
                                }
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    {/* <Modal.Footer>
                        <Button bsStyle="primary">Update Book</Button>
                    </Modal.Footer> */}
                </Modal.Dialog>
            </div>

        )
    }

}

export default EditBookModal;