import React, { useState } from 'react'
import "./calculator.css"

const Calculator = () => {

    const [calVal, setCalVal] = useState("");

    const handleCalBtnClick = (e) => {
        const btnText = e.target.innerHTML;
        let str = calVal;
        if (btnText === "=") {
            try {
            str = eval(calVal);
            setCalVal(str);
            } catch {
                setCalVal("");
            }
        } else if(btnText === "AC") {
            str = "";
            setCalVal(str);
        } else if(btnText === "DEL") {
            str = String(str).substring(0, str.length - 1);
            setCalVal(str);
        } else {
            console.log(str, btnText);
            str = str + btnText;
            console.log(str);
            setCalVal(str);
        }
    }

    return (
        <div className='container'>
            <div className='calculator'>
                <div style={{ display: "flex" }}>
                    <input type='text' name='cal-input' placeholder='0' value={calVal} />
                </div>
                <div className='keys'>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>AC</button>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>DEL</button>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>.</button>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>/</button>
                </div>
                <div className='keys'>
                    <button onClick={(e) => handleCalBtnClick(e)}>7</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>8</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>9</button>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>*</button>
                </div>
                <div className='keys'>
                    <button onClick={(e) => handleCalBtnClick(e)}>4</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>5</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>6</button>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>-</button>
                </div>
                <div className='keys'>
                    <button onClick={(e) => handleCalBtnClick(e)}>1</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>2</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>3</button>
                    <button className='opertaor' onClick={(e) => handleCalBtnClick(e)}>+</button>
                </div>
                <div className='keys'>
                    <button onClick={(e) => handleCalBtnClick(e)}>00</button>
                    <button onClick={(e) => handleCalBtnClick(e)}>0</button>
                    <button className='equalBtn' onClick={(e) => handleCalBtnClick(e)}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator