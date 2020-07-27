import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')({
    borderRadius: 10,
    background: '#8fffff',
    gridArea: 'header',
    padding: 5,
    textAlign: 'center'
});

const Header = () => {
    return (
        <Wrapper>Header</Wrapper>
    );
}

export default Header;