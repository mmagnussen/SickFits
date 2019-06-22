import Link from 'next/link'; //import linking capability from Next.js

//Next.js will import React for us
// This probably doesn't need to be a full-blown React component, but could be a stateless functional component
// Next.js linking allows navigation while allowing data to be cached, and not refreshed from the server/DB
//Next.js will wrap entire in an App component (you can design a custom wrapper component: good for persistent state throughout pages, and navigation throughout pages)

const Home = props => (
    <div>
        <p>Hey!</p>
    </div>
);
export default Home;