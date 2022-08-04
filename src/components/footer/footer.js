import styles from './footer.module.scss';
// Miten tuon saisi näkyviin paremmin, nyt se pitää scrollata esiin

function Footer(props) {
return (
  <div className={styles.footer}>
    Kuva: <a href="https://unsplash.com/">Unsplash</a>
   
  </div>
)};

export default Footer; 