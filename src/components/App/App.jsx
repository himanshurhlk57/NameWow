import React, { useState, useCallback } from 'react';
import name from '@rstacruz/startup-name-generator';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import Header from './../Header/Header';
import './App.css';

const appFun = () => {
    console.log('app.jsx has been called');
    console.log('app.jsx has been executing');
}

const App = () => {
    const [suggestedNames, setSuggestedNames] = useState([]);
    const handleInputChange = useCallback((inputText) => {
        appFun();
        setSuggestedNames(inputText ? name(inputText) : []);
    }, [setSuggestedNames]);
    const headerExpanded = !suggestedNames.length;

    return (
        <div>
            <Header
                headerExpanded={headerExpanded}
                headTitle="Name It!"
            />
            <SearchBox onInputChage={handleInputChange} />
            <ResultsContainer suggestedNames={suggestedNames} />
        </div>
    );
};

export default App;
