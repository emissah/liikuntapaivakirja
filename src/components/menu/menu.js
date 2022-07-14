import { Link } from "react-router-dom";
import styles from './menu.module.scss';
import {MdFormatListBulleted} from "react-icons/md";
import {MdTimeline} from "react-icons/md"
import {MdSettingsApplications} from "react-icons/md"

function Menu() {
return (
    <div className={styles.menu}>
    <div><Link to="/"><MdFormatListBulleted /></Link></div>
    <div><Link to="/stats"><MdTimeline /></Link></div>
    <div><Link to="/settings"><MdSettingsApplications /></Link></div>
    </div>
);
}

export default Menu;