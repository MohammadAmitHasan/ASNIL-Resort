import { useEffect } from "react";

const Test = () => {
    // const test = async () => {
    //     const response = await fetch(`http://localhost:3272/step1`, {
    //         headers: {
    //             "craftsmen-api-key": "UGxlYXNlRG9uJ3RDaGFuZ2VUaGlzVmFsdWU=",
    //             "email": "bhamithasan@gmail.com"
    //         },
    //     })
    //     const data = await response.json()
    //     console.log(data)
    // }
    // test()


    const submit = async () => {
        fetch(`http://localhost:3272/step1`, {
            method: 'POST',
            headers: {
                "craftsmen-api-key": "UGxlYXNlRG9uJ3RDaGFuZ2VUaGlzVmFsdWU = ",
                "email": "bhamithasan@gmail"
            },
            body: { "depth": 814 / 2 },
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }
    submit()


    return <div></div>;
};
export default Test;