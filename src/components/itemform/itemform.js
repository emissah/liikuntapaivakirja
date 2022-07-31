import styles from './itemform.module.scss';
import useForm from '../../shared/useform/useform';
import Button from "../../shared/uibuttons";
import {useHistory} from "react-router-dom";
import {v4 as uuidv4} from "uuid";
// Miksi Kävely-vaihtoehto ei näy? Tai siis eka alkio typelist-taulukosta. Vasta sitten kun muutan sen, se näkyy.

function ItemForm(props) {

  const history = useHistory();

  const submit = () => {
    let storedvalues = Object.assign({}, values);
    storedvalues.kilometres = parseFloat(storedvalues.kilometres);
    storedvalues.hours = parseFloat(storedvalues.hours);
    storedvalues.minutes = parseFloat(storedvalues.minutes);
    storedvalues.id = storedvalues.id ? storedvalues.id : uuidv4();
    props.onItemSubmit(storedvalues);
    history.push("/");
  } 


    const initialState = props.data ? props.data :  {
      type: "",
      kilometres: 0,
      hours: 0,
      minutes: 0,
      date: ""
    };
    
    const {values, handleChange, handleSubmit} = useForm(submit, initialState, false);


    const handleCancel = (event) => {
      event.preventDefault();
      history.goBack();
    }

    const handleDelete = (event) => {
      event.preventDefault();
      props.onItemDelete(values.id);
      history.push("/");
    }

    return(
      <div>
        <form onSubmit={handleSubmit}>
        <div className={styles.form}>
           <div className={styles.form_row}>
           <div>
            <label htmlFor="type">Liikuntalaji:</label>
            <select name="type" onChange={handleChange} value={values.type}>
            {props.types.map((type) => <option key={type} value={type}>{type}</option> )} 
            </select>
           </div>
           </div>

           <div className={styles.form_row}>
           <div>
            <label htmlFor="date">Päivämäärä:</label>
            <input type="date" name="date" onChange={handleChange} value={values.date}/>   
           </div>
           <div>
            <label htmlFor="kilometres">Kilometrit:</label>
            <input type="number" name="kilometres" onChange={handleChange} value={values.kilometres} />   
           </div>
           <div>
            <label htmlFor="hours">Tunnit:</label>
            <input type="number" name="hours" onChange={handleChange} value={values.hours} />
            </div>
            <div>
            <label htmlFor="minutes">Minuutit:</label>
            <input type="number" name="minutes" onChange={handleChange} value={values.minutes} />
            </div>
           </div>
           
        <div className={styles.form_row}>
        <div>
         <Button onClick={handleCancel}>PERUUTA</Button>
          </div>
          <div>
         <Button primary type="submit">{ props.data ? "TALLENNA" : "LISÄÄ" }</Button>
          </div>
        </div>

        { props.onItemDelete ? 
        <div className={styles.form_row}>
        <div>
         <Button onClick={handleDelete}>POISTA</Button>
          </div>
          </div>
        : "" }
        </div>
        </form>
      </div>  
    );
}

export default ItemForm;