import styles from "./LoginForm.module.css";
const LoginForm = () => {
  return (
    <div className={styles.loginForm}>
      <div className={styles.eMail}>
        <b className={styles.eMail1}>E-Mail</b>
        <div className={styles.eMailChild} />
      </div>
      <div className={styles.password}>
        <b className={styles.eMail1}>Password</b>
        <div className={styles.eMailChild} />
      </div>
      <div className={styles.loginButton}>
        <div className={styles.login}>Login</div>
      </div>
    </div>
  );
};

export default LoginForm;
