import { useState } from "react";
import axios from "axios";

import {Link} from "next"
import styles from "./users/styles.module.css";
function login() {
    const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");
    const [tokenkey, setTokenkey] = useState("");
    const [dtusername ,setDtusername] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

    const handleSubmit = async (e) => {
		e.preventDefault();
		
			const url = "https://kevork.herokuapp.com/api/user/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("token", res.data.token);
			setTokenkey(res.data.token)
            setDtusername(res.data.username)
	
	};
    
console.log(error);
  return (
    <div className={styles.login_container}>
      
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Login to Your Account</h1> 
                          {tokenkey ? <div><h1 className={styles.success}>mr.{dtusername} congrats you have succcesfully logged in</h1></div>: <div><h1></h1></div>}
						<input
							type="text"
							placeholder="Email"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
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