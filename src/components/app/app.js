import styles from './app.module.scss';
import Items from "../items";

function App() {
  return (
    <div className={styles.app}>
      <h1>
      Liikuntapäiväkirja
      </h1>
      <Items />
    </div>
  )
  }
export default App;
