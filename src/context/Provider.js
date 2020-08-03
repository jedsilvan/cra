import React, { Component } from 'react';
import Context from './index';

class Provider extends Component {
    state = {
        themes: [
            { id: 1, name: 'Blue', header: '#63c5da', sidebar: '#1f456e', content: '#48aaad', footer: '#016064' },
            { id: 2, name: 'Red', header: '#ed2939', sidebar: '#90021f', content: '#ea3b52', footer: '#d31a38' },
            { id: 3, name: 'Green', header: '#3cb043', sidebar: '#466d1d', content: '#3ded97', footer: '#234f1e' },
        ],
        selectedThemeId: 1
    };

    render() {
        return (
            <Context.Provider
                value={{
                    themes: this.state.themes,
                    selectedThemeId: this.state.selectedThemeId,
                    onChangeTheme: e => {
                        this.setState({ selectedThemeId: parseInt(e.target.value) });
                    },
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;