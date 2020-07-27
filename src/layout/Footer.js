import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')({
    borderRadius: 10,
    background: '#afffff',
    gridArea: 'footer',
    padding: 5,
    textAlign: 'center'
});

const Footer = () => {
    return (
        <Wrapper>Footer</Wrapper>
    );
}

export default Footer;