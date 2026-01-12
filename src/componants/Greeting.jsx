import { useState } from "preact/hooks";
import "../styles/greeting.css";

export default function Greeting({messages}){
    const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

    const [greeting, setGreeting] = useState(messages[0]);

    return (
        <div>
            <h3>{greeting}! Thankyou for visiting!</h3>
            <button class="tag" onClick={() => setGreeting(randomMessage())}>
                Generate New Greeting
            </button>
        </div>
    );
}