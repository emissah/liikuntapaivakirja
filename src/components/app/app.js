import styles from './app.module.scss';
import Items from "../items";
import Image from "../frontpage_img";
import Header from "../header";
import Content from "../content";
import Menu from "../menu";
import { ButtonAppContainer } from '../../shared/uibuttons';

function App() {
  return (
    <ButtonAppContainer>
    <div className={styles.app}>
      <Header />
      <Image />
      <Content>
        <Items />
        </Content>  
      <Menu />
    </div>
    </ButtonAppContainer>
  )
  }

  
export default App;
