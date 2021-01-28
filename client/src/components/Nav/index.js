import React from 'react';
import { Link } from "react-router-dom";

function Nav(props) {

    return (
        <nav>
            <ul className="flex-row">
                <li className="mx-2" class="intro">
                    <Link to="/about">Homepage</Link>
                </li>
                <li className="mx-2" class="intro">
                    <Link to="/podcast">Podcast</Link>
                </li>
                <li className="mx-2" class="intro">
                    <Link to="/discussion">Discussion</Link>
                </li>
                <li className="mx-2" class="intro">
                    <Link to="/shop">Shop</Link>
                </li>
                <li className="mx-2" class="intro">
                    <Link to="/login">Log in</Link>
                </li>
                <li className="mx-2" class="intro">
                    <Link to="/signup">Sign up</Link>
                </li>
            </ul>
        </nav>

    );
}

export default Nav;