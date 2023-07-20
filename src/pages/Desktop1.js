import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import styles from "./Desktop1.module.css";
const Desktop1 = () => {
  return (
    <div className={styles.desktop1}>
      <Header />
      <LoginForm />
    </div>
  );
};

export default Desktop1;
