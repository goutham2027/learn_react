import React from 'react';
import ReactDOM from 'react-dom';
import Books from './Books';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-xs-12">
                <h1 className="text-center text-primary"> Welcome to Beautiful Library </h1>
                <Books />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));