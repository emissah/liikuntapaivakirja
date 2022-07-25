import styles from "./item.module.scss";
import { MdNavigateNext} from "react-icons/md";
import { type } from "@testing-library/user-event/dist/type";

function Item(props) {
    //<div className={styles.item_timespan}>{period}</div>
    //<div className={styles.item_timespan}>min/kk</div>
    //<div className={styles.item_average}>{average_km}/kk, {average_min}/kk</div>
    //<div className={styles.item_timespan}>km/kk</div> ---> Näitä käytetään ehkä myöhemmin
    const locale = "fi-FI";
    const date = new Date(props.data.date).toLocaleDateString(locale);
    const numberFormat = new Intl.NumberFormat(locale, {style: "currency", currency: "EUR"});
    const amount = numberFormat.format(props.data.amount);
    
    let average_km;
    let average_min;

    let period;
    if(props.data.periodStart && props.data.periodEnd) {
        const periodStart = new Date(props.data.periodStart);
        const periodEnd = new Date(props.data.periodEnd);
        period = periodStart.toLocaleDateString(locale) + " - " + periodEnd.toLocaleDateString(locale);
        const days = (periodEnd - periodStart) / (1000*60*60*24);
        average_km = props.data.kilometres/days*30;
        average_min = props.data.minutes/days*30;
        
    }
    return(
    <div className={styles.item}>   
    <div className={styles.item_data}>
    
        <div className={styles.item_type}>{props.data.type}</div>
        <div className={styles.item_date}>{date}</div>
        <div className={styles.item_kilometres}>{props.data.kilometres} km</div>
        <div className={styles.item_minutes}>{props.data.minutes} min</div>
        
    </div>
    <div className={styles.item_edit}>
        <MdNavigateNext/>
    </div>
    </div> 
    );
}

export default Item;