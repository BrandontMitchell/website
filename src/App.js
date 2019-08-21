import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
    return (
        <div>
            <NavBar/>
        </div>
    );
}

export default App;


// #00205b	(0,32,91)
// #7c7e7f	(124,126,127)
// #adc7dc	(173,199,220)
// #e0e2e6	(224,226,230)
// #9fddf9	(159,221,249)
