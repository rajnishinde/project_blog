import React, { Component } from 'react'
import { blog } from './UserFunction'
import '../App.css'

class Blog extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      descr: '',
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()

    const newBlog = {
      title:this.state.title,
      descr:this.state.descr
    }

     blog(newBlog).then(res => {
      this.props.history.push(`/`)
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate onSubmit={this.onSubmit}>
              <h1 className="h3 mb-3 font-weight-normal">Add Blog</h1>
              <div className="form-group">
                <label htmlFor="name" className="name_tag" >Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  placeholder="Enter Title"
                  value={this.state.title}
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="name_tag">Description</label>
                <input
                  type="text"
                  className="form-control"
                  name="descr"
                  placeholder="Enter Description"
                  value={this.state.descr}
                  onChange={this.onChange}
                />
              </div>


              <button
                type="submit"
                className="btn btn-lg btn-primary btn-block"
              >
                Add Blog
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Blog