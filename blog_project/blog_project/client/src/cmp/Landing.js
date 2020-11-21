import React, { Component } from 'react'
import {getBlog} from './UserFunction'
import jwt_decode from 'jwt-decode'

class Landing extends Component {
    constructor() {
    super()
    this.state = {
      id: '',
      title: '',
      descr: '',
      items: [],
      first_name: '',
    }
  }
  componentDidMount () {
        this.getAll()
        const token = localStorage.usertoken
    const decoded = jwt_decode(token)
    this.setState({
      first_name: decoded.identity.first_name
       })
    }

   getAll = () => {
        getBlog().then(data => {
            this.setState({
                term: '',
                items: [...data]
            },
                () => {
                    console.log(this.state.term)
                })
        })
    }

  render() {
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          <div className="col-sm-8 mx-auto">
            <h1 className="text-center">Welcome -   {this.state.first_name}</h1>
          </div>
           <table className="table">
                    <tbody>
                        {this.state.items.map((item, index) => (
                            <a href='#' key={index} className="list-group-item active">
                                <h4 className="list-group-item-heading" >{item[0]} </h4>
                                <p className="list-group-item-text">{item[1]} </p>
                            </a>
                        ))}
                    </tbody>
                </table>
        </div>
      </div>
    )
  }
}

export default Landing