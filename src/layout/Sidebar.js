import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')({
    borderRadius: 10,
    background: '#6de8ff',
    gridArea: 'sidebar',
    padding: 5,
    textAlign: 'center'
});

const Sidebar = () => {
    return (
        <Wrapper>Sidebar</Wrapper>
    );
}

export default Sidebar;