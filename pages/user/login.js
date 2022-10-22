import { useState } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
import styles from "./styles.module.css";

function login() {
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://kevork.herokuapp.com/user/login",
      data: {
        username,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
       

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
      });
  };
  return (
    <div className={styles.login_container}>
      
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1> 
                          {login ? <div><h1 className={styles.success}>mr.{username} congrats you have succcesfully logged in</h1></div>: <div><h1></h1></div>}
						<input
							type="username"
							name="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							className={styles.input}
						/>
						<input
							 type="password"
							 name="password"
							 value={password}
							 onChange={(e) => setPassword(e.target.value)}
							 placeholder="Password"
							required
							className={styles.input}
						/>
						
						<button type="submit" className={styles.green_btn}>
							Sing In
						</button>
					</form>
				</div>
				
                 
			</div>
      
		</div>
  )
}

export default login