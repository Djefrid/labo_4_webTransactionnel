
import Image from "next/image";
import AddComment from "./AddComment";
import BlogDetails from "./BlogDetails";
import CommentList from "./CommentList";

export default function Blog( {id}) {
    return (
        <div className="container-fluid">
            <BlogDetails id = {id} />
            <div className="container-fluid">
                <h1 id="titre"> commentaire</h1>
            </div>
            <AddComment articleId={id} />
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 col-lg-1">
                        <Image src="/images/MicrosoftTeams-image.png" alt="image" width={99} height={50} priority />
                    </div>
                    <div className="col">
                        <div className="row" id="commentaireAjouteAutomatiquement">
                        <CommentList id = {id} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}





