import { SyntheticEvent } from "react";

export const EventHandlingComponent = () => {
    const handleClick = (e: SyntheticEvent) => {
        console.log('Button clicked!', e.target);
    };

    return <><button onClick={handleClick} style={{ margin: "2rem" }}>Click me</button>
        <button onDoubleClick={handleClick}>Click me</button></>;
}
