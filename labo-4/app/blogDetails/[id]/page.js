"use client";

import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Blog from '../../components/Blog';


export default function page({params}) {
    return (
       
        <main className="body">
            <Header /> 
            <Blog id={params.id}/>
            
            <Footer/>
        </main>
    )
}