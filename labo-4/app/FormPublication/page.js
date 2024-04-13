"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AjoutPublication from "../components/AjoutPublication";

export default function home() {
    return (
        <main className="body">
            <Header/>
            <AjoutPublication/>
            <Footer/>
        </main>
    );
}