import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'

function LoginPage({toggleAuth}) {

    const history = useHistory();

    const [state, setState] = useState({
        name: "",
    })

    function handleSubmit(e) {
        setState(state.name);
        console.log(`
        Sending login-details to server...
        Username = ${state.name}
        `)
        e.preventDefault();
    }

    function handleClick() {
        toggleAuth(true)
        setState(state.name);
        console.log(`${state.name}, je bent ingelogd!`)
        history.push("/blog")
    }

    function handleChange(e) {
        const value = e.target.value;
        setState({...state, [e.target.name]: value});
    }


    return (
        <div>
            <h1>Login Page</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username_input">Gebruikersnaam:</label>
                <input
                    type="text"
                    id="username_input"
                    name="name"
                    value={state.name}
                    onChange={handleChange}
                />

                <button type="submit" onClick={handleClick}>
                Log in
                </button>
            </form>
            
        </div>
    );
};

export default LoginPage;