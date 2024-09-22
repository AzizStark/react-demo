import { useRef } from "react";

export const UncontrolledForm = () => {
    const inputRef = useRef();

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(inputRef.current);
        }}>
            <input type="text" ref={inputRef} />
            <button type="submit">Submit</button>
        </form>
    );
}
