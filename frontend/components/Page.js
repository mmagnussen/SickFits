import React, { Component } from 'react';
import Header from '../components/Header';
import Meta from '../components/Meta';

//importing React.Component doesn't really matter too much
class Page extends Component {
    render() {
        return (
            <div>
                <Meta />
                <Header />
                {this.props.children}

            </div>
        )
    }
}

export default Page;