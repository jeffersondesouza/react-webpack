import React, { Component } from 'react';

export default class Pesorn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      somatorio: {
        valor: 0,
        count: 0
      },
      details: {
        type: 'person'
      }
    }
  }

  soma = (a, b) => {
    console.log('soma: ', a + b)

    this.setState(prevState => {
      return {
        somatorio: {
          ...prevState.somatorio,
          count: prevState.somatorio.count + 1
        }
      }
    })

    return a + b;
  }

  render() {
    const { name, age } = this.props;
    const { valor, count, id } = this.state.somatorio;
    const { type } = this.state.details;
    return (
      <div>
        This is a Person - {type}
        <div>name: {name} - age: {age}</div>
        <div>id: {id} - valor: {valor} - count: {count}</div>
        <button onClick={() => this.soma(1, 2)}>Click</button>

        <div>
          {JSON.stringify(this.state, null, 2)}
        </div>
      </div>
    );
  }


}
