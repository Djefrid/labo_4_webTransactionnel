// page d'accueil
"use client"

import Header from "./reactCode/Header";
import SubHeader from "./reactCode/SubHeader";
import BlogList from "./reactCode/BlogList";
import Footer from "./reactCode/Footer";

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
