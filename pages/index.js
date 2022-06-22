import React from "react";
import HeadComponent from "../components/Head";

// Constants
const TWITTER_HANDLE = "dev_kaleab";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
    return ( <
        div className = "App" >
        <
        HeadComponent / >
        <
        div className = "container" >
        <
        header className = "header-container" >
        <
        p className = "header" > 😳POKEMON Store😈 < /p>{" "} <
        p className = "sub-text" > { " " }
        This is a place where you can buy Pokemon 's{" "} < /
        p > { " " } <
        /header>{" "} <
        main >
        <
        img src = "https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif"
        alt = "emoji" /
        >
        <
        /main>{" "} <
        div className = "footer-container" >
        <
        img alt = "Twitter Logo"
        className = "twitter-logo"
        src = "twitter-logo.svg" /
        >
        <
        a className = "footer-text"
        href = { TWITTER_LINK }
        target = "_blank"
        rel = "noreferrer" > { " " } { `built by @${TWITTER_HANDLE}` } { " " } <
        /a>{" "} < /
        div > { " " } <
        /div>{" "} < /
        div >
    );
};

export default App;