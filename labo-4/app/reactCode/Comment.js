"use client"
function Comment({ contenu }) {
    return (
        <div className="col-12 col-sm-4 col-lg-12 ContenuCommentaire" id="testEnEscalier">
            {contenu}
        </div>
    );
}

export default Comment;