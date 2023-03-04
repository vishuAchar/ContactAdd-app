
import React from 'react'

class AddContact extends React.Component{
  state = {
    name: '',
    email:'',
  }

  add=(e)=>{
    e.preventDefault();
    if (this.state.name==='' || this.state.email===''){
      alert('All the fields mandatory')
      return;
    }
  this.props.addContactHandler(this.state);
  this.setState({name:'',email:""});

  }


  render(){
  return (
    <div className="p-3 mb-2 bg-body-secondary">
      <h3 >Add Contact</h3>
      <form onSubmit={this.add}>
          <div className="form-floating col-sm-6 mb-1">
          <input type="text" className="form-control"  value={this.state.name} onChange={(e)=>this.setState({name: e.target.value})}/> 
          <label htmlFor="floatingPassword">Name</label>
          </div>
          <div className="form-floating col-sm-6 mb-1">
          <input type="email" className="form-control" id="floatingInput" value={this.state.email} onChange={(e)=>this.setState({email: e.target.value})} />
          <label htmlFor="floatingInput">Email address</label>
          </div>
          <button className="btn btn-outline-primary" type="submit">Add</button>
         
      </form>

      
    </div>
  )
}}

export default AddContact
