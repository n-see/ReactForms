import { FormEvent, useState } from "react";

const FormUseState = () => {

// need a useState to handle our form. UseState needs to handle a object. person object that will have name, age
const [person, setPerson] = useState({
  name: '',
  age: 0
})

//create a helper function to handle our on submit from our form, 
const handleSubmit= (e:FormEvent) => {
  e.preventDefault()
  console.log(person);
}

  return (
    <>
      <h1 className="text-center">Form Using UseState</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 myContainer">
          <label htmlFor="" className="form-label">Name</label>
          <input onChange={(e) => setPerson({...person, name:e.target.value})} id="name" type="text" className="form-control" />
          <label  htmlFor="" className="form-label">Age</label>
          <input onChange={(e) => setPerson({...person, age:parseInt(e.target.value)})} id="age" type="number" className="form-control" />
          <button className="mt-3 btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default FormUseState;
