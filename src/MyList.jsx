import MyLap from './MyLap';
import './index.css';
const MyList=(props)=>{

    return(
        <>
            <div className="laplist">
             
                   {props.children.map((c)=>(
                    <MyLap key={Math.random()}>{c}</MyLap>
                    ))}
            
            </div>
        </>
    )

}

export default MyList