import Item from "../../components/item";
import Image from "../../components/frontpage_img/frontpage_img";
import styles from './items.module.scss';
import {FloatingButton, ButtonContainer} from "../../shared/uibuttons";

function Items(props) {
    const items = props.data.map((item) => <Item key={item.id} data={item} />);
    return(
    <ButtonContainer>
   <div className={styles.items}>
       <Image />
       {items} 
       <FloatingButton primary>+</FloatingButton>
   </div>
   </ButtonContainer>
    );
}

export default Items;