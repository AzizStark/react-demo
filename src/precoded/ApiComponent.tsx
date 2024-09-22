// const fetchDataMock = () =>
//     new Promise((resolve) => {
//         setTimeout(() => resolve('Hello from the API!'), 2000);
//     });

const fetchData = () =>
    fetch("https://catfact.ninja/fact").then((res) =>
        res.text()
    )

const resource = {
    data: null,
    promise: fetchData().then((data) => {
        console.log(data)
        resource.data = data;
    }),
};

const ApiComponent = () => {
    if (resource.data === null) {
        throw resource.promise;
    }
    return <div>Data: {resource.data}</div>;
}

export default ApiComponent;
