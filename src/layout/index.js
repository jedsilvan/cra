import React from 'react';
import styled from '@emotion/styled';
import facepaint from 'facepaint';

import Header from './Header';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';

const mq = facepaint([
  '@media(max-width: 768px)',
  '@media(min-width: 767px)'
])

const Wrapper = styled('div')(() => mq({
    display: 'grid',
    gridGap: 5,
    gridTemplateColumns: ['0.3fr 1fr', '1fr'],
    gridTemplateRows: ['0.2fr 2fr 0.2fr', '0.2fr 0.1fr 2fr 0.2fr'],
    gridTemplateAreas: [`
        'header header'
        'sidebar content'
        'sidebar footer'
    `,
    `
        'header'
        'sidebar'
        'content'
        'footer'
    `],
    height: '100vh'
}));

const Root = () => {
    return (
        <Wrapper>
            <Header />
            <Sidebar />
            <Content />
            <Footer />
        </Wrapper>
    );
}

export default Root;