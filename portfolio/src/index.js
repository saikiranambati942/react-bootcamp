import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css'

ReactDOM.render(
    <App />,
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
