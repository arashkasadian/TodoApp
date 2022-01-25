import { useContext, useState } from "react"
import { myContext } from "./mycontex";

const MyHead=()=> {

    const [task, settask] = useState("");

    const taskHandle=(e)=>{
        settask(e.target.value);
    }

    const {list,setlist} = useContext(myContext);

    const taskSubmit=(e)=>{
        e.preventDefault();
        setlist([...list , {id:Math.random(),title:task,done:false}]);
        settask("");
    }

    return(
        <>
            <h1 className="Title">ToDay</h1>
            <form className="MyForm" onSubmit={taskSubmit}>
                <input type="text" className="MyInput" onChange={taskHandle} value={task} placeholder="write your next job here"/>
                <button className="AddBtn" type="submit">+</button>
            </form>
        </>
    )
}

export default MyHead