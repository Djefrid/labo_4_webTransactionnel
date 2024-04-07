import Link from "next/link";
import Image from "next/image";
function Footer() {
    return (
        <div className="container-fluid footer">
            <div className="row">
                <footer>
                    <Link href="https://www.facebook.com/" target="_blank"><Image className="img" src="/images/facebook-logo.png" alt="Facebook" width={70} height={40} priority/></Link>
                    <Link href="https://twitter.com/" target="_blank"><Image className="img" src="/images/twitter-logo.png" alt="Twitter" width={70} height={40} priority/></Link>
                    <Link href="https://www.linkedin.com/" target="_blank"><Image className="img" src="/images/linkedin-logo.png" alt="LinkedIn" width={70} height={40} priority/></Link>
                    <div id="expertise-text">Centre d'Expertise et de Perfectionnement en informatique</div>
                    <div id="expertise-text">2022</div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;