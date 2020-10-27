import React from 'react';
import './css/MyFile.css';

export function MyFile(){
    return(
        <div classname>
            <div className ="tag-small5">Current File stored</div>
            <div className ="info-small2">Myresume.txt</div>
            <div className ="tag-small5">Insert File</div>
            <div className ="info-small2">upload file</div>
            <div className ="submitFile-button">Submit</div>
        </div>
    );
}