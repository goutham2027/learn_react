import React from 'react';
import { Row, Form, FormGroup, Button, Modal, FormControl, ControlLabel } from 'react-bootstrap';

class EditBookModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // const { handleOnSubmit, handleInputChange, canSubmit, author, title, copies } = this.props
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="static-modal">
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Edit Book</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Form goes here</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.handleOnClose}>Close</Button>
                        <Button bsStyle="primary">Update Book</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
            // <Form onSubmit={handleOnSubmit}>
            //     <FormGroup>
            //         <div className="col-xs-12">
            //             <ControlLabel htmlFor="title" className="col-xs-3 text-right">Title</ControlLabel>
            //             <div className="col-xs-3">
            //                 <FormControl type="text" name="title" value={title} onChange={handleInputChange} />
            //             </div>
            //         </div>

            //         <div className="col-xs-12">
            //             <ControlLabel htmlFor="author" className="col-xs-3 text-right">Author</ControlLabel>
            //             <div className="col-xs-3">
            //                 <FormControl type="text" name="author" value={author} onChange={handleInputChange} />
            //             </div>
            //         </div>

            //         <div className="col-xs-12">
            //             <ControlLabel htmlFor="num_of_copies" className="col-xs-3 text-right">Number of copies</ControlLabel>
            //             <div className="col-xs-3">
            //                 <FormControl type="text" name="copies" value={copies} onChange={handleInputChange} />
            //             </div>
            //         </div>

            //         {canSubmit() ?
            //             <Button bsStyle="primary" type="submit">Update Book</Button>
            //             :
            //             <Button bsStyle="primary" type="submit" disabled>Update Book</Button>
            //         }
            //     </FormGroup>
            // </Form>

        )
    }

}

export default EditBookModal;