import { useContext } from "react";
import { myContext } from "./mycontex";

const MyList=()=> {

 const {list,setlist} = useContext(myContext);

    const remove=(id)=>{
        setlist(list.filter(t => t.id !== id))
    }

    const setdone=(id)=>{
        const index=list.findIndex(t=>t.id===id);
        let newList=[...list];
        newList[index].done=!newList[index].done;
        setlist(newList);
    }

    if (list.length) {
        
        return(
            <>
                {

                list.map(t=>(

                    <div  key={Math.random()} className={`${ t.done ? "ToDo-DeActive" : "ToDo"}`}>
                        <p className={`${ t.done ? "JobTitle-DeActive" : "JobTitle"}`} onClick={()=>setdone(t.id)}>{t.title}</p>
                        <i className="fa fa-trash" onClick={()=>{remove(t.id)}}></i>
                    </div>

                    ))
                    
                }
            </>
        )
    }else{
        return(
            <>
                <h3 className="NoJob">not any recently job</h3>
            </>
        )
    }
}

export default MyList