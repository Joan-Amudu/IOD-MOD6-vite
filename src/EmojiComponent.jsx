import { useState } from "react";
/*
Create an Emoji component, in its own file, which initially
renders a happy emoji.
• Add a ‘Change Mood’ button in the component to switch\
between 2 emojis when clicked.
*/

function Emoji() {
    const [mood, setMood] = useState ('😀');


    return (
        <div className="MoodChanger componentBox">
          <h2>Emoji Component</h2>
            Current Mood: {mood}
            {/* Change the mood state by calling setMood when a button is clicked */}
            <button
                onClick={() => setMood('😞')}>
                Take a Break
            </button>
            <button
                onClick={() => setMood('😋')}>
                Skip Lunch
            </button>
        </div>
    )

}


export default Emoji;