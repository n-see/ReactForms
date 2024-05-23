import { useRef, useState } from 'react'

const UseStaveVsUseRef = () => {
    //useState
    const [count, setCount] = useState(0);

    //useRef
    const countRef = useRef(0)

    //Create a helper function to handleIncrement

    const handleIncrement = () => {
      setCount(prevCount => prevCount + 1)
      countRef.current++
      console.log('from useState ',count)
      console.log(countRef.current )
    }

  return (
    <>
    <h1 className='text-center'>UseState vs UseRef</h1>
    <button onClick={handleIncrement} className='btn btn-primary'>Increment</button>
    <div>
      <span>Counter from UseState: {count}</span>
    </div>
    <div>
      <span>From UseRef: {countRef.current}</span>
    </div>
    </>
  )
}

export default UseStaveVsUseRef