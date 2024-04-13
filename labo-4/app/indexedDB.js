'use client'

import { Publication, Commentaire } from '../db.json';

const DB_NAME = 'Blog_database';
const DB_VERSION = 1;
let db;

export const openDB = () => {
    return new Promise((resolve, reject) => {
        const request = window.indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => {
            reject('Erreur lors de l\'ouverture de la base de données');
        };

        request.onsuccess = () => {
            db = request.result;
            resolve('Base de données ouverte avec succès');
        };

        request.onupgradeneeded = (event) => {
            const db = event.target.result;

            const publicationStore = db.createObjectStore('publication', { keyPath: 'id', autoIncrement: true });
            publicationStore.createIndex('Titre', 'Titre', { unique: false });
            publicationStore.createIndex('Auteur', 'Auteur', { unique: false });
            publicationStore.createIndex('DateP', 'DateP', { unique: false });
            publicationStore.createIndex('Contenu', 'Contenu', { unique: false });
            publicationStore.createIndex('Image', 'Image', { unique: false });

            const commentaireStore = db.createObjectStore('commentaire', { keyPath: 'id', autoIncrement: true });
            commentaireStore.createIndex('Publicationid', 'Publicationid', { unique: false });
            commentaireStore.createIndex('DateC', 'DateC', { unique: false });
            commentaireStore.createIndex('Contenu', 'Contenu', { unique: false });
        };

        
    });
};

export const addPublicationIndexedDB = (publicationData) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['publication'], 'readwrite');
        const objectStore = transaction.objectStore('publication');
        const request = objectStore.add(publicationData);

        request.onerror = () => {
            reject('Erreur lors de l\'ajout de la publication');
        };

        request.onsuccess = () => {
            resolve('Publication ajoutée avec succès');
        };
    });
};

export const getAllPublications = () => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['publication'], 'readonly');
        const objectStore = transaction.objectStore('publication');
        const request = objectStore.getAll();

        request.onerror = () => {
            reject('Erreur lors de la récupération des publication');
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};

export const getPublicationById = (id) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['publication'], 'readonly');
        const objectStore = transaction.objectStore('publication');
        const request = objectStore.get(id);

        request.onerror = () => {
            reject('Erreur lors de la sélection des publications');
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
}

export const initPubIndexedDB = () => {
    openDB().then(async () => {
        const publications = await getAllPublications();
        const publicationJson = Publication;
        if (publications.length === 0) {
            for (const publicationData of Publication) 
                await addPublicationIndexedDB(publicationData);
            console.log('Données chargées avec succès dans l\'IndexedDB (Publication)');
        } else {
            console.log('Il existe déjà dans donnes dans l\'IndexedDB (Publication)');
            // ajoute de toutes les dernieres publications de db.json dans l'IndexedDB
            const lastPublicationCount = Math.min(publicationJson.length - publications.length, publicationJson.length);
            const lastCommnent = publicationJson.slice(-lastPublicationCount);
            for(const item of lastCommnent)
                await addPublicationIndexedDB(item);
        }
    }).catch(error => {
        console.error('Erreur lors de l\'initialisation de l\'IndexedDB (Publication) :', error);
    });
};

export const addCommentaireIndexedDB = (commentaireData) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['commentaire'], 'readwrite');
        const objectStore = transaction.objectStore('commentaire');
        const request = objectStore.add(commentaireData);

        request.onerror = () => {
            reject('Erreur lors de l\'ajout du commentaire');
        };

        request.onsuccess = () => {
            resolve('Commentaire ajouté avec succès');
        };
    });
};

export const getAllCommentaires = () => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['commentaire'], 'readonly');
        const objectStore = transaction.objectStore('commentaire');
        const request = objectStore.getAll();

        request.onerror = () => {
            reject('Erreur lors de la récupération des commentaires');
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};

export const getCommentaireById = (Publicationid) => {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['commentaire'], 'readonly');
        const objectStore = transaction.objectStore('commentaire');
        const index = objectStore.index('Publicationid');
        const request = index.getAll(Publicationid);

        request.onerror = () => {
            reject('Erreur lors de la sélection des commentaires');
        };

        request.onsuccess = () => {
            resolve(request.result);
        };
    });
};

export const initCommentIndexedDB = () => {
    openDB().then(async () => {
        const commentaires = await getAllCommentaires();
        const CommentaireJson = Commentaire;
        if (commentaires.length === 0) {
            for (const commentaireData of Commentaire) 
                await addCommentaireIndexedDB(commentaireData);
            console.log('Données chargées avec succès dans l\'IndexedDB (Commentaires)');
        } else {
            console.log('Il existe déjà dans donnes dans l\'IndexedDB (Commentaires)');
            // ajout de toutes les dernieres commentaires de db.json dans l'IndexedDB
            const lastCommentCount = Math.min(CommentaireJson.length - commentaires.length, CommentaireJson.length);
            const lastCommnent = CommentaireJson.slice(-lastCommentCount);
            for(const item of lastCommnent)
                await addCommentaireIndexedDB(item);
        }
    }).catch(error => {
        console.error('Erreur lors de l\'initialisation de l\'IndexedDB (Commentaires) :', error);
    });
};
