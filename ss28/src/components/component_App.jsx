import React, { Component } from 'react';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: 'light',
            language: 'english'
        };
    }

    render() {
        const { theme, language } = this.state;

        return (
            <div className={`app ${theme}`}>
                <h1>Bài 9</h1>
                <h1>App Component</h1>
                <p>Theme: {theme}</p>
                <p>Language: {language}</p>
            </div>
        );
    }
}
