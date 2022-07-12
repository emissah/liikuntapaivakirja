import styles from './app.module.scss';
import Items from "../items";
import Image from "../frontpage_img";
import Header from "../header";
import Content from "../content";
import Menu from "../menu";


function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Image />
      <Content>
        <Items />
        </Content>  
      <Menu />
    </div>
  )
  }
export default App;
