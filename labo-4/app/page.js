// page d'accueil
"use client"

import Header from "./components/Header";
import SubHeader from "./components/SubHeader";
import BlogList from "./components/BlogList";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <main className="body">
      <Header/>
      <SubHeader/>
      <BlogList/>
      <Footer/>
    </main>
  );
}
// json-server --watch db.json
