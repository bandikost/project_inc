import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import state from './redux/state';
import { addPost } from './redux/state';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = () => {
	ReactDOM.render (
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>, document.getElementById('root'));
    
};
