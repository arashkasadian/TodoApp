import {useState} from 'react';
import { myContext } from './mycontex';
import MyHead from './MyHead';
import MyList from './MyList';


const App=()=> {
    const [list, setlist] = useState([
        // {
        //     id:1,
        //     title:"job one",
        //     done:false
        // },
        // {
        //     id:2,
        //     title:"job two",
        //     done:true
        // },
        // {
        //     id:3,
        //     title:"job three",
        //     done:false
        // }
    ]);


    return(
        <div className='MyCard'>
        <myContext.Provider value={
            {
                list,
                setlist
            }
        }>
            <MyHead />
            <MyList />
        </myContext.Provider>
        </div>
    )
}

export default App