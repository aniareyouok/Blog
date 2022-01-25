import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

function LoginPage({toggleAuth}) {

    const history = useHistory();

    const [state, setState] = useState({
        name: "",
        toggleAuth: false,
    })

    function handleClick() {
        toggleAuth(true)
        console.log(`${state.name}, je bent ingelogd!`)
        history.push("/blog")
    }

    function handleChange(e) {
            setState(e.target.value);
    }


    return (
        <div>
            <h1>Login Page</h1>

            <label htmlFor="username_input">Gebruikersnaam:</label>
            <input
                    type="text"
                    id="username_input"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
            />

            <button type="button" onClick={handleClick}>
            Log in
            </button>
            
        </div>
    );
};

export default LoginPage;