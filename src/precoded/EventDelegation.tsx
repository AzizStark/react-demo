import { useState } from 'react';

const EventDelegation = () => {
    const [items, setItems] = useState([1, 2, 3]);

    const handleClick = (event) => {
        event.preventDefault()
        console.log(`You clicked on item ${event.target.innerHTML}`);
    };

    return (
        <div>
            {/* Event Delegation */}
            <div onClick={handleClick}>
                <ul onClick={handleClick}>
                    {items.map((item) => (
                        <li className='pointer' key={item} data-id={item}>
                            Item {item}
                        </li>
                    ))}
                </ul></div>
            <button onClick={() => setItems([...items, items.length + 1])}>
                Add Item
            </button>
        </div>
    );
};

export default EventDelegation;
