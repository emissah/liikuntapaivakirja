import img from "../../assets/images/frontpage_img.jpg";
import styles from './frontpage_img.module.scss';

function Image(props) {
    return(
    <div className={styles.img}>
    <img src={img}></img>
    </div>
    );

}

export default Image;