import {useState, useEffect} from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Items from "../../routes/items";
import Stats from '../../routes/stats/';
import Settings from '../../routes/settings/';
import AddItem from "../../routes/additem";
import EditItem from "../../routes/edititem";
//import Image from "../frontpage_img";
import Header from "../header";
import Content from "../content";
import Menu from "../menu";
import { ButtonAppContainer } from '../../shared/uibuttons';
import testdata from "../../testdata.js";

function App() {

  const [data, setData] = useState([]);
  const [typelist, setTypelist ] = useState([]);


  useEffect(() => {
   setData(testdata);
   setTypelist(["Kävely", "Juoksu", "Pyöräily", "Tanssi" ]);
  }, []);

  const handleItemSubmit  = (newitem) => {
  let storeddata = data.slice();
  const index = storeddata.findIndex(item => item.id === newitem.id);
  if (index >= 0 ) {
    storeddata[index] = newitem; 
  } else {
    storeddata.push(newitem);
  }
  storeddata.sort( (a,b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return bDate.getTime() - aDate.getTime();
  }

  );
  setData(storeddata);
  }

  const handleItemDelete = (id) => {
    let storeddata = data.slice();
    storeddata = storeddata.filter(item => item.id !== id);
    setData(storeddata);
  } 

  const handleTypeSubmit = (newtype) => {
    let storedtypelist = typelist.slice();
    storedtypelist.push(newtype);
    storedtypelist.sort();
    setTypelist(storedtypelist);
  }


  return (
    <ButtonAppContainer>
    <div className={styles.app}>
    <Router>
      <Header />
      <Content>
        <Route exact path="/">
        <Items data={data}/>
        </Route>
        <Route path="/stats">
          <Stats/>
        </Route>
        <Route path="/settings">
          <Settings types={typelist} onTypeSubmit={handleTypeSubmit}/>
        </Route>
        <Route path="/add">
        <AddItem onItemSubmit={handleItemSubmit} types={typelist}/>
        </Route>
        <Route path="/edit/:id">
        <EditItem onItemSubmit={handleItemSubmit}  data={data} types={typelist} onItemDelete={handleItemDelete} />
        </Route>
        </Content>  
      <Menu />
      </Router>
    </div>
    </ButtonAppContainer>
  )
  }

  
export default App;
