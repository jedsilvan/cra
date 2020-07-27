import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')({
    borderRadius: 10,
    background: '#cfffff',
    gridArea: 'content',
    padding: 5,
    textAlign: 'center'
});

const Content = () => {
    return (
        <Wrapper>Content</Wrapper>
    );
}

export default Content;