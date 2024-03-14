// *Uncontrolled Component --> Access input value using ref.
// A component that does not have a state or props. It does not have a parent component. It does not have a parent ref. It does not have a parent context. It does not have a parent event handler. It does not have a parent lifecycle method. It does not have a parent class component. It does not have a parent functional component.

import React, { useRef } from 'react';

function UncontrolledComponent() {
    // *Ref to hold the input element
    const inputRef = useRef(null);

    // *Handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // *Access input value using ref  //  
        const inputValue = inputRef.current.value;

        // *Validate the input value  //
        if (inputValue.trim() === '') {
            alert('Please enter your name.');
            return; // Stop form submission
        }

        // Process the form data
        console.log("Submitted value:", inputValue);

        // Clear the input field
        inputRef.current.value = '';
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                {/* Input field without controlled state */}
                <input
                    type="text"
                    ref={inputRef}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default UncontrolledComponent;
