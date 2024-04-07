"use client"
import { useState} from "react";

export default function CommentForm({ articleId }) {
    const [commentContent, setCommentContent] = useState('');

    async function handleCommentChange(e) {
        setCommentContent(e.target.value);
    }

    async function handleSubmit(e) {
        
        e.preventDefault();
        await sendComment(e);
    }

    async function sendComment() {
        //'use server'
        const commentData = {
            Publicationid: articleId,
            DateC: new Date().toISOString().slice(0, 10),
            Contenu: commentContent
        };

        fetch('http://localhost:3000/Commentaire', {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Commentaire envoyé avec succès:', data);
            setCommentContent('');
        })
        .catch(error => console.error('Erreur lors de l\'envoi du commentaire:', error));
    }
    
    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <textarea
                        value={commentContent}
                        onChange={handleCommentChange}
                        placeholder="Ajouter un commentaire..."
                        className="form-control mb-2"
                        id="commentairSaisie"
                        rows="5"
                        cols="33"
                        required
                    ></textarea>
                </div>
                <div className="row">
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary" id="envoyerCommentaire">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}


/* function AddComment({ articleId }) {
    const [commentContent, setCommentContent] = useState('');

    const handleCommentChange = (e) => {
        setCommentContent(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendComment();
    };

    const sendComment = () => {
        const commentData = {
            Publicationid: articleId,
            DateC: new Date().toISOString().slice(0, 10),
            Contenu: commentContent
        };

        fetch('http://localhost:3000/Commentaire', {
            method: 'POST',
            body: JSON.stringify(commentData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Commentaire envoyé avec succès:', data);
            setCommentContent('');
        })
        .catch(error => console.error('Erreur lors de l\'envoi du commentaire:', error));
    };

    return (
        <div className="container-fluid">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <textarea
                        value={commentContent}
                        onChange={handleCommentChange}
                        placeholder="Ajouter un commentaire..."
                        className="form-control mb-2"
                        id="commentairSaisie"
                        rows="5"
                        cols="33"
                        required
                    ></textarea>
                </div>
                <div className="row">
                    <div className="text-end">
                        <button type="submit" className="btn btn-primary " id="envoyerCommentaire">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AddComment; */

