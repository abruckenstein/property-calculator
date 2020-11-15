import React, { Component } from 'react';
import './App.css';

class App extends Component
{

  constructor(props)
  {
    super(props);
    this.setState = this.setState.bind(this)
    this.state = {
      homeValue: "",
      downPayment: "",
      interestRate: "",
      loanAmount: "",
      loanTerm: "",
    }
  }

  createInputs = (inputNames) =>
  {
    let items = [];
    inputNames.forEach(element =>
    {
      items.push(<label>{element}</label>)
      items.push(<input className="item"></input>)
    });

    return items;
  }

  handleChange = (e) =>
  {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value }, this.performCalculations);
  }

  performCalculations = () =>{
    let numberOfPayments = this.state.loanTerm * 12;
    let monthlyInterest = 1 + this.state.interestRate/1200 //12 * 100 to convert to monthly decimal

    let monthlyPayment = this.state.loanAmount*Math.pow(monthlyInterest,numberOfPayments) * (1-monthlyInterest)/(1-Math.pow(monthlyInterest,numberOfPayments))
    
    if (!Number.isNaN(monthlyPayment))
    {
      this.setState({ monthlyPayment: Math.round(monthlyPayment*100)/100})
    }
  }

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <div className="container" >
            <div className="column left">
              <h2>Loan Amount</h2>
              <input name="loanAmount" value={this.state.loanAmount} onChange={this.handleChange}></input>

              <h2>Loan Term</h2>
              <input name="loanTerm" value={this.state.loanTerm} onChange={this.handleChange}></input>

              <h2>Interest Rate</h2>
              <input name="interestRate" value={this.state.interestRate} onChange={this.handleChange}></input>
            </div>
            <div className="column">
              <h2>Home Value</h2>
              <input name="homeValue" value={this.state.homeValue} onChange={this.handleChange}></input>

              <h2>Down Payment</h2>
              <input name="downPayment" value={this.state.downPayment} onChange={this.handleChange}></input>

              <h2>Start Date</h2>
              <input></input>
            </div>
            <div className="column">
              <h2>Property Tax</h2>
              <input value={this.state.loanTerm}></input>

              <h2>Home Insurance</h2>
              <input value={this.state.loanTerm}></input>

              <h2>HOA</h2>
              <input value={this.state.loanTerm}></input>
            </div>

          </div>

          <div className="container">
            <div className="column left">
              <h2>Monthly Payment</h2>
              <textbox>{this.state.monthlyPayment}</textbox>

              <h2>Loan Term</h2>
              <textbox></textbox>

              <h2>Interest Rate</h2>
              <textbox></textbox>
            </div>
            <div className="column">
              <h2>Home Value</h2>
              <textbox></textbox>

              <h2>Down Payment</h2>
              <textbox></textbox>

              <h2>Start Date</h2>
              <textbox></textbox>
            </div>
            <div className="column">
              <h2>Property Tax</h2>
              <textbox></textbox>

              <h2>Home Insurance</h2>
              <textbox></textbox>

              <h2>HOA</h2>
              <textbox></textbox>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
