"use client"
import { useState,useEffect } from "react";
import Comment from "./Comment";

function CommentList({id }) {
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
        .catch(err => console.log(err));
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

export default CommentList; 


/* export default async function CommentList({id }) {
    const [commentaires, setCommentaires] = useState([]);

    await new Promise(resolve => setTimeout(resolve, 1000));

    const res = await fetch(`http://localhost:3000/Commentaire?Publicationid=${id}`);

    const text = await res.text();

    if(!res.ok) {
        throw new Error('Erreur lors du chargement des commentaires');
    }

    setCommentaires(await res.json());

    useEffect(() => {
        return () => {
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
} */