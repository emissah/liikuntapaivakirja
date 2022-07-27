import styles from './itemform.module.scss';

function ItemForm(props) {
    return(
      <div>
        <form>
        <div className={styles.form}>
           <div className={styles.form_row}>
           <div>
            <label htmlFor="type">Liikuntalaji:</label>
            <select name="type">
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
            <input type="date" name="date" />   
           </div>
           <div>
            <label htmlFor="kilometres">Kilometrit:</label>
            <input type="number" name="kilometres" />   
           </div>
           <div>
            <label htmlFor="hours">Tunnit:</label>
            <input type="number" name="hours" />
            </div>
            <div>
            <label htmlFor="minutes">Minuutit:</label>
            <input type="number" name="minutes" />
            </div>
           </div>
        </div>
        
        </form>

      </div>  
    );
}

export default ItemForm;