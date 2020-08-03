import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')(({ background }) => ({
    borderRadius: 10,
    background,
    color: '#ffffff',
    gridArea: 'sidebar',
    padding: 5,
    textAlign: 'center'
}));

const Sidebar = ({ bgColor }) => {
    return (
        <Wrapper background={bgColor}>Sidebar</Wrapper>
    );
}

export default Sidebar;