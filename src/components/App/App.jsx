import React from 'react';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

const appFun = (e) => {
    console.log('app.jsx has been called');
    console.log('app.jsx has been executing');
}

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            headerText: 'Name It!',
            headerExpanded: true,
            suggestedNames: [],
        };
    }

    handleInputChange = (inputText) => {
        appFun();
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headerText}
                />
                <SearchBox onInputChage={this.handleInputChange} />
                <ResultsContainer suggestedNames={this.state.suggestedNames} />
            </div>
        );
    }
}

export default App;
