import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')(({ background }) => ({
    borderRadius: 10,
    background,
    color: '#ffffff',
    gridArea: 'content',
    padding: 5,
    textAlign: 'center'
}));

const Content = ({ bgColor }) => {
    return (
        <Wrapper background={bgColor}>Content</Wrapper>
    );
}

export default Content;