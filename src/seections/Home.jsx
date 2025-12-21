import styles from "./Home.module.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className={styles.home}>
      <h1>Soundous BEN</h1>
      <h2>Junior React Developer</h2>
      <p>
        I am a third-year IT student passionate about web development.
      </p>
      <Link to="/projects" className={styles.btn}>
        View My Work
      </Link>
    </section>
  );
}

export default Home;
