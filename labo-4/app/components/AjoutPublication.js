import { sendPublication } from './sendPublication';
import { useRouter } from 'next/router';

export default function AjoutPublication() {
    const router = useRouter();
    async function handleSubmit(formData) {
        if (window.confirm("Voulez-vous vraiment envoyer cette publication ?")) {
            await sendPublication(formData);
            router.push('/');
        }
    }

    return (
        <div id="container-fluid">
            <div className="row justify-content-center align-items-center mt-5 mb-5 ">
                <div className="col-12 col-lg-5 border border-3 border-secondary  hover-zoom mx-auto" id="formulairePublication">
                    <div className="col-12 col-lg mb-4 text-center h2">
                        Ajouter publication
                    </div>
                    <div className=" col-12 col-lg-12">
                        <form id="publicationForm" action={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="titre" className="form-label">Titre :</label>
                                <input type="text" className="form-control" id="titre" name="titre" placeholder="Titre" />
                            </div>
                            <div className="mb-3 ">
                                <label htmlFor="imagePath">Image :</label>
                                <input type="file" className="form-control" id="imagePath" name="imagePath" accept="image/*" placeholder='choisir une seulle image' required />
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