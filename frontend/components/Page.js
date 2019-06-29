import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';

//importing React.Component doesn't really matter too much
//build styled components where used, and if needed, move them to their own file to be available elsewhere

//develop a theme that will have variables that can be applied anywhere
const theme = {
    red: '#FF0000',
    black: '#393939',
    grey: '#3A3A3A',
    lightgrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
  `;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  
  margin: 0 auto;
  padding: 2rem;
  `;


class Page extends Component {
    render() {
        return (
            <ThemeProvider theme={theme}>
                <StyledPage>
                    <Meta />
                    <Header />

                    <Inner>{this.props.children}</Inner>

                </StyledPage>
            </ThemeProvider>
        )
    }
}

export default Page;