import React from 'react';
import ReactDOM from 'react-dom';

class Project extends React.Component {

    state= {
        count: 0
    }

    ClickCount = () => {
       this.setState({count: this.state.count+ 10});
    }

    render() {
        return (
            <div>
                <button onClick={this.ClickCount}>
                    Click this button
                </button>
                <p>
                    {this.state.count}
                </p>
            </div>
        )
    }
}

export default Project;