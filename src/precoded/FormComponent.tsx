import { useState } from "react";

export const FormComponent = () => {
    const [inputValue, setInputValue] = useState({ username: '', password: '' });

    const validate = () => {
        if (inputValue.username.length > 1) {
            return true
        }
        return false
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(inputValue);
        }
        else {
            console.log("Form invalid")
        }
    };

    const handleChange = (e) => {
        console.log("ASD", e.target)
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={inputValue.username}
                onChange={handleChange}
                placeholder="Username"
            />
            <input
                type="password"
                name="password"
                value={inputValue.password}
                onChange={handleChange}
                placeholder="Password"
            />
            <button className="btn" type="submit">Submit</button>
        </form>
    );
};
