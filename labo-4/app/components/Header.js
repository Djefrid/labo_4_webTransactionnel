import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'; 

export default function Header() {
    const router = useRouter();

    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div className="container-fluid">
                <div className="d-flex justify-content-center align-items-center">
                    <Image className="logo" src="/images/cepi Logo.png" alt="logo" width={99} height={98} priority/>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav nav-fill">
                        <li className="nav-item px-5"> 
                            <button className="nav-link text-center" id="home" aria-current="page" onClick={() => router.push("/")}>Acceuil</button>
                        </li>
                        <li className="nav-item px-5"> 
                            <button className="nav-link text-center" onClick={() => router.push("/FormPublication")} >Ajout publication</button>
                        </li>
                        <li className="nav-item px-5"> 
                            <Link className="nav-link text-center" href="#" tabIndex="-1" aria-disabled="true">Autre</Link>
                        </li>
                    </ul>
                </div>
                <div className="d-none d-lg-flex justify-content-center align-items-center">
                    <Image src="/images/profil.jpg" alt="profil" width={99} height={98} priority/>
                </div>
            </div>
        </nav>
    );
}


