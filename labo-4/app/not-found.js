import Image from 'next/image'

export default function() {
    return (
      <div className="container"> {/* Utilisation de la classe CSS */}
            <Image src={"/images/not-found.png"} alt="Not Found" className="not-found-image"  width={100} height={95} priority/> {/* Utilisation de la classe CSS */}
            <div className="not-found-message">Page non trouvée</div> {/* Utilisation de la classe CSS */}
            <div className="not-found-description">Désolé, la page que vous recherchez est introuvable.</div> {/* Utilisation de la classe CSS */}
      </div>
    );
  }
  