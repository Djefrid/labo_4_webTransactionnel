"use client";

import Header from "../../reactCode/Header";
import Footer from '../../reactCode/Footer';
import Blog from '../../reactCode/Blog';


export default function page({params}) {
    return (
       
        <main>
            <Header /> 
            <Blog id={params.id}/>
            
            <Footer/>
        </main>
    )
}