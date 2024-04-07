"use client";
import Header from "../reactCode/Header";
import Footer from "../reactCode/Footer";
import AjoutPublication from "../reactCode/AjoutPublication";

export default function home() {
    return (
        <main className="body">
            <Header/>
            <AjoutPublication/>
            <Footer/>
        </main>
    );
}