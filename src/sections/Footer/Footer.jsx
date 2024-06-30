import styles from './FooterSytles.module.css';

function Footer() {
  return (
    <section id="footer" className={styles.container}>
      <p>
        &copy; 2024 Chu Arib. <br />
        All rights reserved.
      </p>
    </section>
  );
}

export default Footer;