import React from 'react';
import {NavLink, useHistory} from "react-router-dom";

function TopMenu( {isAuth, toggleAuth}) {

    const history = useHistory();

    function signOut() {
        toggleAuth(false);
        history.push("/")
    }

    return (
        <nav>
            <div className="nav-container">
                <h4>Menu</h4>

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    {/*If the user is loggedIn then show blog link and signOut button, otherwise show LogIn button*/}

                    {isAuth === true ?
                        <>
                            <li>
                                <NavLink to="/blog" exact activeClassName="active-link">Blog</NavLink>
                            </li>

                            <li>
                                <button type="button" onClick={signOut}>
                                    LogOut
                                </button>
                            </li>
                        </>
                        :
                        <li>
                            <NavLink to="/login" exact activeClassName="active-link">Login</NavLink>
                        </li>
                    }
                </ul>
            </div>
        </nav>
    );
}

export default TopMenu;