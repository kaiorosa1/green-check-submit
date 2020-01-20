import React from 'react';
import './Form.css';

const Form = () =>{
    return (
        <div>
            <div className="form center pa4 br5 shadow-5">
                <input className="f4 pa2 w-70 center" type="text" />
                <button className="w-30 grow f4 link ph3 pv2 dib white bg-dark-blue" >Send</button>
            </div>
        </div>
    );
}

export default Form;