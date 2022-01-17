import {useState} from 'react';
import MyTimer from './Timer';

const App=()=> {
    const [list, setlist] = useState(['0.0.5','55.0..5']);


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