import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Jokes from './components/Jokes';
import './index.css'
import {Router, Switch, Route} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history=createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
    <Switch>
<Route exact={true} path='/' component={App}/>
<Route path='/jokes' component={Jokes}/>
    </Switch>
    </Router>,
   
    document.getElementById('root')
);

// new Promise( (resolve)=>{

//     setTimeout( () =>{
//         console.log('Hello');
//         resolve()
//     },2000);

// })
// .then(quote => {
//     console.log(' world!');
// })


// new Promise( (resolve,reject)=>{

//     return reject(new Error('Error occurred'));
//     setTimeout( () =>{
//         resolve('Hello world!')
//     },2000);
// })
// .then(quote => {
//     console.log(quote);
// })
// .catch(error=>console.log(error))
