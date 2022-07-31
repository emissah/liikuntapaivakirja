import styles from './additem.module.scss';
import ItemForm from '../../components/itemform/itemform';

function AddItem(props) {
   return (
    <div className={styles.additem}>
        <h2>Uuden merkinnän lisääminen</h2>
        <p className={styles.p_note}>Jos valitset liikuntalajin, jota ei voi mitata kilometreissä, valitse 0. </p>
        <ItemForm onItemSubmit={props.onItemSubmit} types={props.types} />
    </div>
   );
}

export default AddItem; 