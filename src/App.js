import {useState} from 'react';
import MyTimer from './Timer';

const App=()=> {
    const [list, setlist] = useState(['']);


    return(
        <div>
            <MyTimer
             list={list}
             setlist={setlist}
             />

        </div>
    )
}

export default App