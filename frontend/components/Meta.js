//contains what would normally be in the head tags of an html file

import Head from 'next/head';

//a lot of stateless components are being used, because higher-order components will end up controlling state

/*
Below:
-viewport allows responsive design
-utf character encoding
-fav icon that lives in static directory
-css stylesheet (in progress styling)
-title that shows up in tab
*/

const Meta = () => (
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <title>Sick Fits!</title>
    </Head>
)

export default Meta;