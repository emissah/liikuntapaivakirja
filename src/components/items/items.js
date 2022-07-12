import Item from "../item";
import styles from './items.module.scss';

function Items(props) {
    return(
   <div className={styles.items}>
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
   </div>
    );
}

export default Items;