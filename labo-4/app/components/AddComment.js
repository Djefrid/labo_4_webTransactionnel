import { sendComment } from './sendComment';

export default function CommentForm({ articleId }) {
    async function handleSubmit(formData) {
        await sendComment(formData, articleId);
    }
    
    return (
        <div className="container-fluid">
            <form className="form-group" action={handleSubmit} >
                <div className="row">
                    <textarea
                        placeholder="Ajouter un commentaire..."
                        className="form-control mb-2"
                        name="commentairSaisie"
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