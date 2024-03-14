// *Controlled Component --> Example of input field controlled by React state*
import React, { useState } from 'react';

const ControlledComponent = () => {
    // *State to hold the input value
    const [inputValue, setInputValue] = useState('');

    // *Handler for input change
    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    // *Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Process the form data
        console.log("Submitted value:", inputValue);

        // Reset the input value
        setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                {/* Input field controlled by state */}
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledComponent;
