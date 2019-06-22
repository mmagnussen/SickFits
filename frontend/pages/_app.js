import App, { Container } from 'next/app';
import Page from '../components/Page';

class MyApp extends App {
    render() {
        const { Component } = this.props;


        //Use the Page.js component to include content for every page
        return (
            <Container>
                <Page>
                    <Component />
                </Page>
            </Container>
        );
    }
}

export default MyApp;