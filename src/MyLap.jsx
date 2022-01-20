import { useContext } from "react"
import { myContext } from "./mycontex";

const MyLap=(props)=>{
    const context=useContext(myContext);
    const deleteList=(e)=>{
        context.setlist(context.list.filter(t => t !== e.target.innerHTML))
    }
    return(
        <p onClick={deleteList}>
            {props.children}
        </p>
    )

}

export default MyLap