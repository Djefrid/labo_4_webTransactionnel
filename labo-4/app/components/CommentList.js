"use client"
import { useState,useEffect } from "react";
import Comment from "./Comment";
import { getCommentaireById } from "../indexedDB";

export default function CommentList({id }) {
    const [commentaires, setCommentaires] = useState([]);

    const fetchComment = async () => {
        fetch(`http://localhost:3000/Commentaire?Publicationid=${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des commentaires');
            }
            return response.json();
        })
        .then(commentaires => {
            setCommentaires(commentaires);
        })
        .catch(err => {
            console.log('Erreur lors du chargement des commentaires :', err) 
            // Charger les commentaires depuis IndexedDB en cas d'erreur
            getCommentaireById(id).then(data => {
                setCommentaires(data);
            });
        }
            
        );
    }

    useEffect(() => {
        fetchComment();
        const interval = setInterval(() => {fetchComment();}, 1000);

        return () => {
            clearInterval(interval);
            setCommentaires([]);
        };
    }, [id]);

    return (
        <div id="commentaireAjouteAutomatiquement">
            {commentaires.map(commentaire => (
                <Comment key={commentaire.id} contenu={commentaire.Contenu} />
            ))}
        </div>
    );
}

