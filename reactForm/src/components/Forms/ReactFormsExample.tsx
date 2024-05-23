import { FieldValues, useForm } from "react-hook-form"



const ReactFormsExample = () => {

    const {register, handleSubmit} = useForm()
    console.log(register)

    const onHelpSubmit =(data:FieldValues) => {
        console.log(data);
    }
    
    return (
        <>
            <h1 className="text-center">Form Using React Hook Forms</h1>
            <form onSubmit={handleSubmit(onHelpSubmit)}>
                <div className="mb-3 myContainer">
                    <label htmlFor="" className="form-label">Name</label>
                    <input {...register('name')} id="name" type="text" className="form-control" />
                    <label htmlFor="" className="form-label">Age</label>
                    <input {...register('age')} id="age" type="number" className="form-control" />
                    <button className="mt-3 btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default ReactFormsExample