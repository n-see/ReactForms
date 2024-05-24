import { zodResolver } from "@hookform/resolvers/zod"
import { FieldValues, useForm } from "react-hook-form";
import {z} from "zod";

const schema = z.object({
    name: z.string().min(3, {message: "Name must be at least 3 characters bruh!"}),
    age: z.number({invalid_type_error:"Age field is required"}).min(21, {message:"Must be at least 21 years old"})
})

type FormData = z.infer<typeof schema>

// interface FormData {
//     name: string,
//     age: number
// }


const FormValidationZod = () => {
    const {register, handleSubmit, formState:{errors, isValid}} = useForm<FormData>({resolver:zodResolver(schema)})
    console.log(errors)

    const onHelpSubmit =(data:FieldValues) => {
        console.log(data);

    }
    
    return (
        <>
            <h1 className="text-center">React Forms Validation with Zod</h1>
            <form onSubmit={handleSubmit(onHelpSubmit)}>
                <div className="mb-3 myContainer">
                    <label htmlFor="" className="form-label">Name</label>
                    <input {...register('name')} id="name" type="text" className="form-control" />
                    {errors.name && <p className="text-danger">{errors.name.message}</p>}
                    <label htmlFor="" className="form-label">Age</label>
                    <input {...register('age',{valueAsNumber: true})} id="age" type="number" className="form-control" />
                    {errors.age ? <p className="text-danger">{errors.age.message}</p> : null}

                    <button disabled={!isValid} className="mt-3 btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}

export default FormValidationZod