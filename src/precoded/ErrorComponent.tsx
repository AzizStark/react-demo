const ErrorComponent = () => {
    throw new Error("Hi")
    return <h3> Rendered Without Error! </h3>;
}

export default ErrorComponent;