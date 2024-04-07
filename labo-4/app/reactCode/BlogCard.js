import Image from "next/image";
import Link from "next/link";

function BlogCard(props) {
    return (
        <div className="col-10 col-lg-3 bloc">
            <Link className="carteblog" href={`/blogDetails/${props.id}`}>
                <div className="row">
                    <div className="card rounded-4 border border-3 border-secondary hover-zoom mx-auto">
                        <Image className="card-img-top image" src={`/${props.image}`} alt="Card image cap" width={300} height={300} priority/>
                        <div className="fs-4 p-3 mb-2 text-white card-title carteblog">{props.Titre}</div>
                        <div className="card-body">
                            <p className="card-text contenue">{props.Contenu}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default BlogCard;
