import React, { Component } from "react"
import { evaluate } from "mathjs"
import "./calc.css"

let inicialstate = {
   number: "",
   expression: 0
}


export default class calc extends Component {


    constructor (props) {

    super(props)

        this.state = {...inicialstate} 

    }

    zerar () {
        
        inicialstate = {
            number: "",
            expression: 0
        }

        this.setState({...inicialstate})

    }

    digito (event) {

        let nd = inicialstate.number + event.target.innerHTML

        inicialstate.number = nd
        inicialstate.expression = nd

        try {
            if (event.target.innerHTML === "="){
    
                let string = nd.replace("=", "")
                inicialstate.expression = evaluate(string)
                inicialstate.number = inicialstate.expression
                
            }
            this.setState({...inicialstate})

        }
        catch {
            alert("Invalid expression!")
           
        }

    }


    render() {
    return (<div>
        <h1>Calculadora</h1>
        <div className="calc">
        <div className="display">{this.state.expression}</div>
        <button lable="AC"onClick={ e => this.zerar(e)  }>{"AC"}</button >
        <button lable="/" onClick={ e => this.digito(e) }>{"/"}</button >
        <button lable="7" onClick={ e => this.digito(e) }>{"7"}</button >
        <button lable="8" onClick={ e => this.digito(e) }>{"8"}</button >
        <button lable="9" onClick={ e => this.digito(e) }>{"9"}</button >
        <button lable="*" onClick={ e => this.digito(e) }>{"*"}</button >
        <button lable="4" onClick={ e => this.digito(e) }>{"4"}</button >
        <button lable="5" onClick={ e => this.digito(e) }>{"5"}</button >
        <button lable="6" onClick={ e => this.digito(e) }>{"6"}</button >
        <button lable="-" onClick={ e => this.digito(e) }>{"-"}</button >
        <button lable="1" onClick={ e => this.digito(e) }>{"1"}</button >
        <button lable="2" onClick={ e => this.digito(e) }>{"2"}</button >
        <button lable="3" onClick={ e => this.digito(e) }>{"3"}</button >
        <button lable="+" onClick={ e => this.digito(e) }>{"+"}</button >
        <button lable="0" onClick={ e => this.digito(e) }>{"0"}</button >
        <button lable="." onClick={ e => this.digito(e) }>{"."}</button >
        <button lable="=" onClick={ e => this.digito(e) }>{"="}</button>
    </div>
    </div>)
    }

}