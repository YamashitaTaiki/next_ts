import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from "react";
import GraphqlFruit from './graphqlFruit';
import Top from './top'

// function sampleRouterConfig() {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route index path='/' element={<Home></Home>} />
//                 <Route path='/home' element={<Home></Home>} />
//                 <Route path='/about' element={<About></About>} />
//                 <Route path='/contact' element={<Contact></Contact>} />
//                 <Route path='/graphql/fruit' element={<GraphqlFruit></GraphqlFruit>} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Contact() {
    return <h2>Contact</h2>;
}
//export default sampleRouterConfig;
