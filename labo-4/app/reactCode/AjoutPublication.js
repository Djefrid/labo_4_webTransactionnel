import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

function AjoutPublication() {
    const [setListPublication] = useState([]);
    const [cheminFichierImage, setCheminFichierImage] = useState('');

    const router = useRouter();

    useEffect(() => {
        // Chargement de la liste des publications au montage du composant
        ListPublication();
    }, []);

    const ListPublication = () => {
        fetch('http://localhost:3000/Publication')
            .then(response => response.json())
            .then(json => {
                setListPublication(json);
            })
            .catch(err => console.log(err));
    };

    const envoyerDonneesFormulaire = (publication) => {
        // Envoi de la requête POST au serveur
        fetch('http://localhost:3000/Publication', {
            method: 'POST',
            body: JSON.stringify(publication),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                console.log('Publication ajoutée avec succès :', data);
                // Redirection vers la page principale après l'envoi réussi
                router.push('/');
            })
            .catch(error => console.error('Erreur lors de l\'ajout de la publication :', error));
    };

    const confirmerEnvoiPublication = (e) => {
        e.preventDefault();
        // Construction de l'objet à envoyer
        const publication = {
            Image: cheminFichierImage,
            Titre: e.target.titre.value,
            Auteur: e.target.auteur.value,
            DateP: new Date().toISOString().slice(0, 10),
            Contenu: e.target.contenu.value
        };

        // Affichage de la boîte de dialogue de confirmation
        if (window.confirm("Voulez-vous vraiment envoyer cette publication ?")) {
            envoyerDonneesFormulaire(publication);
        }
    };

    const getFilePathImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name; // Récupère le nom du fichier
            const filePath = `images/${fileName}`; // Construit le chemin relatif
            setCheminFichierImage(filePath);
        } else {
            setCheminFichierImage('');
        }
    };

    return (
        <div id="container-fluid">
            <div className="row justify-content-center align-items-center mt-5 mb-5 ">
                <div className="col-12 col-lg-5 border border-3 border-secondary  hover-zoom mx-auto" id="formulairePublication">
                    <div className="col-12 col-lg mb-4 text-center h2">
                        Ajouter publication
                    </div>
                    <div className=" col-12 col-lg-12">
                        <form id="publicationForm" onSubmit={confirmerEnvoiPublication}>
                            <div className="mb-3">
                                <label htmlFor="titre" className="form-label">Titre :</label>
                                <input type="text" className="form-control" id="titre" name="titre" placeholder="Titre" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="imagePath">Image :</label>
                                <input type="file" onChange={getFilePathImage} className="form-control" id="imagePath" name="imagePath" accept="image/*" required />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="auteur" className="form-label">Auteur :</label>
                                <input type="text" className="form-control" id="auteur" name="auteur" placeholder="Auteur" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="contenu" className="form-label">Contenu :</label>
                                <textarea className="form-control" id="contenu" name="contenu" placeholder="Contenu"></textarea>
                            </div>
                            <div className="text-end">
                                <button type="submit" id="envoyerPublication" className="btn btn-primary">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AjoutPublication;
