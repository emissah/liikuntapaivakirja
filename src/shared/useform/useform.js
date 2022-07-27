import  { useState} from "react-router-dom";
import useform from ".";
const useForms = (callback, initialState={}, resetOnSubmit=true) => {

    // esitellään useState hook johon käyttäjän lomakkeelle 
    // syöttämä tieto tallennetaan
   const [values, setValues] = useState(initialState);

   // Submit-käsittelijä, joka estää oletustoiminnan
   // kutsuen määriteltyä callback-funktiota
   const handleSubmit = (event) => {
     if (event) {
        event.preventDefault();
     }
    
     callback();
     if (resetOnSubmit) resetValues();

   }

   // Syötekäsittelijä, joka tallentaa kentän tiedot
   // sen nimellä state-muuttujaan
   const handleChange = (event) => {
    event.persist();
    // Tallennetaan kenttään syötetty arvo välimuuttujaan
    let value = event.target.value;
    // Tallennetaan uusi arvo state-muuttujaan
    setValues(values => ({...values, [event.target.name]: value}));
   }
    // Funktio joka palauttaa lomakkeen tiedot alkutilanteeseen
     const resetValues = () {
        setValues(initialState);
     }  

     // Palauttaa luonnin yhteydessä sekä käsitelijät että 
     // state-muuttujan
    return {
        handleSubmit,
        handleChange,
        resetValues,
        setValues,
        values
    };
}
  

export default useForms;