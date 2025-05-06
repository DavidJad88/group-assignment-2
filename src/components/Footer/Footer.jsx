import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className={styles.footer}>
        <p>Copyright © {year}. All rights reserved.</p>
      </footer>
    </>
  )
};

export default Footer;