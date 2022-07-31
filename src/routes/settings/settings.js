import styles from "./settings.module.scss";
import Button from"../../shared/uibuttons";

function Settings(props) {
    const handleTypeSubmit = (event) => {
        event.preventDefault();
        const newtype = event.target.elements.type.value;
        props.onTypeSubmit(newtype);
        event.target.elements.type.value = "";
    }
    return(
    <div className={styles.settings}>
        <h1>Settings</h1>
        <h2>Kulutyypit</h2>
        <div className={styles.settings_types}>
        {props.types.map((type) => <div key={type}>{type}</div> )}
        <form onSubmit={handleTypeSubmit}>
          <div className={styles.typeform}>
            <input type="text" name="type" />
            <Button className={styles.settings_button} type="submit" primary>Lisää kulutyyppi</Button>
            </div>  
        </form>
        </div>
        </div>

    );
}

export default Settings;