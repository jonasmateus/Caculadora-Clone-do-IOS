import React, { Component } from "react"
import { evaluate } from "mathjs"
import "./calc.css"

let inicialState = {
   mathResult: 0,
   caractereExpression: ""
}


export default class calc extends Component {


    constructor (props) {

    super(props)

        this.state = {...inicialState} 

    }

    emptyCalc () {
        
        inicialState = {
            mathResult: 0,
            caractereExpression: ""
        }

        this.setState({...inicialState})

    }

    addDigit (event) {

        inicialState.caractereExpression = inicialState.caractereExpression === 0 ? "" : inicialState.caractereExpression

        let inputExpression = inicialState.caractereExpression + event.target.innerHTML

        inicialState.mathResult = inputExpression
        inicialState.caractereExpression = inputExpression

        try {
            if (event.target.innerHTML === "="){
    
                let filteredExpression = inputExpression.replace("=", "")
                inicialState.caractereExpression = evaluate(filteredExpression)

                inicialState.mathResult = inicialState.caractereExpression
                
            }

            this.setState({...inicialState})

        }
        catch {
            alert("Invalid caractereEspression!")
        }

    }

    render() {
    return (<div>
        <h1>Calculadora</h1>
        <div className="calc">
        <div className="display">{this.state.mathResult}</div>
        <button lable="AC"onClick={ e => this.emptyCalc(e)  }>{"AC"}</button >
        <button lable="/" onClick={ e => this.addDigit(e) }>{"/"}</button >
        <button lable="7" onClick={ e => this.addDigit(e) }>{"7"}</button >
        <button lable="8" onClick={ e => this.addDigit(e) }>{"8"}</button >
        <button lable="9" onClick={ e => this.addDigit(e) }>{"9"}</button >
        <button lable="*" onClick={ e => this.addDigit(e) }>{"*"}</button >
        <button lable="4" onClick={ e => this.addDigit(e) }>{"4"}</button >
        <button lable="5" onClick={ e => this.addDigit(e) }>{"5"}</button >
        <button lable="6" onClick={ e => this.addDigit(e) }>{"6"}</button >
        <button lable="-" onClick={ e => this.addDigit(e) }>{"-"}</button >
        <button lable="1" onClick={ e => this.addDigit(e) }>{"1"}</button >
        <button lable="2" onClick={ e => this.addDigit(e) }>{"2"}</button >
        <button lable="3" onClick={ e => this.addDigit(e) }>{"3"}</button >
        <button lable="+" onClick={ e => this.addDigit(e) }>{"+"}</button >
        <button lable="0" onClick={ e => this.addDigit(e) }>{"0"}</button >
        <button lable="." onClick={ e => this.addDigit(e) }>{"."}</button >
        <button lable="=" onClick={ e => this.addDigit(e) }>{"="}</button>
    </div>
    </div>)
    }

}