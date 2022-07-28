import styles from './itemform.module.scss';
import useForm from '../../shared/useform/useform';
import Button from "../../shared/uibuttons";
import {useHistory} from "react-router-dom";

function ItemForm(props) {

  const history = useHistory();

  const submit = () => {
    alert("SUBMIT");
    history.push("/");
  } 


    const initialState = {
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

    return(
      <div>
        <form onSubmit={handleSubmit}>
        <div className={styles.form}>
           <div className={styles.form_row}>
           <div>
            <label htmlFor="type">Liikuntalaji:</label>
            <select name="type" onChange={handleChange} value={values.type}>
            <option>Kävely</option>
             <option>Juoksu</option>
             <option>Tanssi</option>
             <option>Pyöräily</option>
             
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
         <Button primary type="submit">LISÄÄ</Button>
          </div>
        </div>
        </div>
        </form>

      </div>  
    );
}

export default ItemForm;