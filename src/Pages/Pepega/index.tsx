import React from "react";
import './style.css';

const Pepega = () => {
    return (
        <div>
            <body className = 'backGround'>
            <h1><a href="#">GriffinBot</a></h1>

            <ul>
            <li className = 'Login'><a href="#">Login</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Features</a></li>
            </ul> 
            <h2>GriffinBot - the all around bot for your twitch channel!</h2>
            <p>GriffinBot is an all around twitch bot that will make you stream legnedery!<br></br>
                The bot offers a bunch of amazing features such as moderating, sound commands, custom commands and more!<br></br>
                Hit the button down below to connect your twitch account now!
            </p>
            <button className = 'twitchButton'>Connect With Twitch</button>
            </body>
        </div>
    );
};

export default Pepega;