import Item from "../item";
import styles from './items.module.scss';
import {FloatingButton, ButtonContainer} from "../../shared/uibuttons";

function Items(props) {
    return(
    <ButtonContainer>
   <div className={styles.items}>
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <FloatingButton secondary>+</FloatingButton>
   </div>
   </ButtonContainer>
    );
}

export default Items;