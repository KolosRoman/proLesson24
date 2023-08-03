import React from 'react';
import {createRoot} from 'react-dom/client';
import './styles.scss';
import {Counter} from './Counter.jsx'
import {Result} from './ResultWin.jsx'



class App extends React.Component {
    constructor() {
        super()

    }


    render() {
        return (
            <main>
                <h1 className='title'>Хто переможе?</h1>
                <h2 className='sub-title'>Обирай свого смайла</h2>
                <div className='smile-block'>
                    <Counter smileName={'1'}/>
                    <Counter smileName={'2'}/>
                    <Counter smileName={'3'}/>
                    <Counter smileName={'4'}/>
                    <Counter smileName={'5'}/>
                </div>
                <Result />
                
            </main>
        )
    }
}

const root = createRoot(document.getElementById('app'));


root.render(<App />)