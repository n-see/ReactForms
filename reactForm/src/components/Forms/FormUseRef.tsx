import { FormEvent, useRef } from "react";

const FormUseRef = () => {
    //create useRef
    const nameRef = useRef<HTMLInputElement>(null);

    const ageRef = useRef<HTMLInputElement>(null);

    const person = {
        name: '',
        age: 0
    }

    //Create a helper function to handle our submit
    const handleClick = (e: FormEvent) => {
        e.preventDefault();
        console.log("Submitted with our handleClick Function")
        if (nameRef.current != null) 
            person.name = nameRef.current.value
        if (ageRef.current != null) 
            person.age = parseInt(ageRef.current.value)

        console.log(person)
    };
    return (
        <>
            <h1 className="text-center">Form Using UseRef</h1>
            <form onSubmit={handleClick}>
                <div className="mb-3 myContainer">
                    <label htmlFor="" className="form-label">
                        Name
                    </label>
                    <input ref={nameRef} id="name" type="text" className="form-control" />
                    <label htmlFor="" className="form-label">
                        Age
                    </label>
                    <input ref={ageRef} id="age" type="number" className="form-control" />
                    <button className="mt-3 btn btn-primary" type="submit">
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default FormUseRef;
