import styles from './menu.module.scss';
import {MdFormatListBulleted} from "react-icons/md";
import {MdTimeline} from "react-icons/md"
import {MdSettingsApplications} from "react-icons/md"

function Menu() {
return (
    <div className={styles.menu}>
    <div><MdFormatListBulleted /></div>
    <div><MdTimeline /></div>
    <div><MdSettingsApplications /></div>
    </div>
);
}

export default Menu;