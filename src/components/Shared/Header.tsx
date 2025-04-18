import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Social Media Analytics</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Feed</Link>
                    </li>
                    <li>
                        <Link to="/top-users">Top Users</Link>
                    </li>
                    <li>
                        <Link to="/trending-posts">Trending Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;