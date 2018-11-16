import React from 'react';
import ReactDOM from 'react-dom';
import Books from './Books';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1> Welcome to BeautifulCode Library </h1>
                <Books />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));