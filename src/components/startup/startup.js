import styles from "./startup.module.scss";
import { Button } from "../../shared/uibuttons";
import firebase from "firebase/app";
import { useAuth } from "reactfire"; 
import img from "../../assets/images/startup-img.jpg";

function Startup(props) {

    const auth = useAuth();

    const signIn = async () => {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    }

    return(
        
        <div className={styles.startup}>
        
        <img src={img}></img>

        <h1>Liikuntapäiväkirja</h1>
        <div>Tervetuloa käyttämään liikuntapäiväkirjaa, johon voit kirjata omat liikuntasuoritteesi.
        Sinun tulee kirjautua sisään Google-tunnuksillasi, jotta voit käyttää sovellusta.
        </div>
        <Button primary onClick={signIn}>Kirjaudu sisään</Button>
        </div>

    );
}

export default Startup;