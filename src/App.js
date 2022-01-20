import {useState} from 'react';
import { myContext } from './mycontex';
import MyList from './MyList';
import MyTimer from './Timer';

const App=()=> {
    const [list, setlist] = useState(['']);


    return(
        <>
        <myContext.Provider value={
            {
                list,
                setlist
            }
        }>
            <MyTimer />
            <MyList />
        </myContext.Provider>
        </>
    )
}

export default App