import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import { addPost } from './redux/state';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';


export let rerenderEntireTree = () => {
	ReactDOM.render (
        <BrowserRouter>
            <App state={state} addPost={addPost} />
        </BrowserRouter>
    )
	

};
