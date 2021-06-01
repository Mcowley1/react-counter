import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    function incrementHandler() {
        setCount(count + 1);
    }

    function decrementHandler() {
        setCount(count - 1);
    }

    return (
        <div>
            <p>
                The count import: {count}
            </p>
            <button onClick={incrementHandler}> Increment </button>
            <button onClick={decrementHandler}> Decrement </button>
        </div>

    );
};

export default Counter;