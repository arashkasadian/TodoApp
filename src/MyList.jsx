import MyLap from './MyLap';
import './index.css';
import { myContext } from './mycontex';
import {useContext} from 'react';


const MyList=()=>{
    const contex = useContext(myContext);
    return(
        <>
            <div className="laplist">
             
                   {contex.list.map((c)=>(
                    <MyLap key={Math.random()}>{c}</MyLap>
                    ))}
            
            </div>
        </>
    )

}

export default MyList