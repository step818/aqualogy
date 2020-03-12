import React, { Component } from 'react';

class Horoscope extends Component {
    state = {
      todos: []
    }
    componentDidMount() {
      fetch('https://json.astrologyapi.com/v1/sun_sign_prediction/daily/:leo')
      .then(res => res.json())
      .then((data) => {
        this.setState({ todos: data })
        console.log(this.state.todos)
      })
      .catch(console.log)
    }
render() {
    return (
      <div>
        <h1>My Todos</h1>
        {this.state.todos.map((todo) => (
          <div>
              <h5 className="card-title">{todo.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { todo.completed &&
                <span>
                Completed
                </span>
              }
              { !todo.completed &&
                <span>
                  Pending
                </span>
              }              
              </h6>
          </div>
        ))}
      </div>

    );
  }
};

export default Horoscope;