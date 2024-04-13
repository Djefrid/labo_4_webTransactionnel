'use client';

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Importer depuis next/navigation au lieu de next/router

export default function Error() {
    const router = useRouter();

    useEffect(() => {
        const reloadPage = () => {
            router.reload(); // Recharger la page
        };

        reloadPage(); // Recharge la page automatiquement
    }, [router]); // Ajoutez router comme dépendance pour useEffect

    return (
        <div className="container"> {/* Utilisation de la classe CSS */}
            <img src={"/images/error.png"} alt="Error" className="error-image" /> {/* Utilisation de la classe CSS */}
            <div className="error-message">Une erreur s'est produite</div> {/* Utilisation de la classe CSS */}
            <div className="error-description">Nous sommes désolés, quelque chose s'est mal passé.</div> {/* Utilisation de la classe CSS */}
            <button className="reload-button" onClick={() => router.reload()}>Recharger la page</button> {/* Utilisation de la classe CSS */}
        </div>
    );
}
