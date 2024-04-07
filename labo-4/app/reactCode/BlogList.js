"use client";

import { useState,useEffect } from "react";
import BlogCard from './BlogCard';

function BlogList() {

    const [publications, setPublications] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const publicationsPerPage = 6;

    useEffect(() => {
        chargerPublicationsAvecPagination();
    }, []);

    const chargerPublicationsAvecPagination = () => {
        fetch('http://localhost:3000/Publication')
            .then(response => response.json())
            .then(data => {
                setPublications(data);
            })
            .catch(error => console.error("Erreur lors du chargement des publications:", error));
    };

    const trimText = (text, maxLength) => {
        if (text.length > maxLength) {
            return text.substring(0, maxLength) + '...';
        }
        return text;
    };

    const afficherPublicationsSurPage = () => {
        const startIndex = (currentPage - 1) * publicationsPerPage;
        const endIndex = currentPage * publicationsPerPage;
        const publicationsOnPage = publications.slice(startIndex, endIndex);
        return publicationsOnPage.map(publication => (
            <BlogCard 
                key={publication.id} 
                id={publication.id} 
                image={publication.Image} 
                Titre={trimText(publication.Titre, 20)} 
                Contenu={trimText(publication.Contenu, 60)} 
            />
        ));
    };
    
    const afficherPagination = () => {
        const totalPages = Math.ceil(publications.length / publicationsPerPage);
        const buttons = [];
        for (let i = 1; i <= totalPages; i++) {
            buttons.push(
                <button
                    key={i}
                    className="btn btn-pagination mx-1"
                    style={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        backgroundColor: "#00ADB5",
                        color: "#EEEEEE"
                    }}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </button>
            );
        }
        return (
            <div className="pagination-container">
                <button
                    className="btn btn-pagination mx-1"
                    style={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        backgroundColor: "#00ADB5",
                        color: "#EEEEEE"
                    }}
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prevPage => prevPage - 1)}
                >
                    Previous
                </button>
                {buttons}
                <button
                    className="btn btn-pagination mx-1"
                    style={{
                        borderRadius: "20px",
                        fontWeight: "bold",
                        backgroundColor: "#00ADB5",
                        color: "#EEEEEE"
                    }}
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prevPage => prevPage + 1)}
                >
                    Next
                </button>
            </div>
        );
    };

    return (
        <div>
            <div className="row text-center  justify-content-center" id="ContenuPublication">
                {afficherPublicationsSurPage()}
            </div>
            <div id="pagination" className="pagination justify-content-center">
                {afficherPagination()}
            </div>
            
        </div>
    );
}

export default BlogList;