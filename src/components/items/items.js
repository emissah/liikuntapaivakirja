import Item from "../item";
import styles from './items.module.scss';
import Button from "../../shared/uibuttons";

function Items(props) {
    return(
   <div className={styles.items}>
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Button >LISÄÄ UUSI RIVI</Button>
   </div>
    );
}

export default Items;