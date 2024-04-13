export default async function() {
    //S'affiche lorsque la navigation prend du temps
    //S'applique aussi aux sous-dossiers
    return (
        <div className="container"> 
            <div className="loader"></div> 
        </div>       
    );
  }