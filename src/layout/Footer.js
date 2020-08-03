import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')(({ background }) => ({
    borderRadius: 10,
    background,
    color: '#ffffff',
    gridArea: 'footer',
    padding: 5,
    textAlign: 'center'
}));

const Footer = ({ bgColor }) => {
    return (
        <Wrapper background={bgColor}>Footer</Wrapper>
    );
}

export default Footer;