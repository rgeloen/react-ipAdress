import React from 'react';
import ReactDOM from 'react-dom';
import './partials/App.css';
import IPAddressContainer from "./partials/scripts/IPAddressContainer";


const destination = document.querySelector("#container");

ReactDOM.render(
    <div>
        <IPAddressContainer/>
    </div>,
    destination
);
