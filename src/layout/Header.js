import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')(({ background }) => ({
    borderRadius: 10,
    background,
    color: '#ffffff',
    display: 'flex',
    gridArea: 'header',
    padding: 5,
    textAlign: 'center'
}));

const Text = styled('p')({
    flex: 1
});

const Header = ({ bgColor, onChangeTheme, selectedThemeId }) => {
    return (
        <Wrapper background={bgColor}>
            <Text>Header</Text>
            <select onChange={onChangeTheme} defaultValue={selectedThemeId}>
                <option value={1}>Blue</option>
                <option value={2}>Red</option>
                <option value={3}>Green</option>
            </select>
        </Wrapper>
    );
}

export default Header;