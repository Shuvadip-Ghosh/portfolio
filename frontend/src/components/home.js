import React from "react";
import Typed from "typed.js";
import py from "../images/python.png";
import js from "../images/js.png";
import re from "../images/react.png";
import dev from "../images/dev.png";

export default function Home() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [
                "I am a passionate Web Developer",
                "I am a passionate Python Enthusiast",
                'I build in multiple languages so <a class="hi" href ="/contact">let\'s chat.</a>^2000',
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            loopCount: Infinity,
            smartBackspace: true,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);

    return (
        <section className="home">
            <div className="leftSection">
                <h1>
                    Hi, My name is <br />
                    Shuvadip Ghosh
                </h1>
                <br />
                <span id="element" ref={el} />
            </div>
            <div className="rightSection">
                <img alt="svg" src={dev} className="dev" />

                <img alt="svg" src={py} className="PY" />

                <img alt="svg" src={js} className="JS" />

                <img alt="svg" src={re} className="RE" />
            </div>
        </section>
    );
}
