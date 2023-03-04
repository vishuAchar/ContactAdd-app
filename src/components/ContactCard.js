import React from 'react'
import user from '../images/user.png';


function ContactCard(props) {
    const {id,name,email} = props.contact;

  return (
    <div>
        <div className="col border border-success rounded p-2 m-2 d-flex justify-content-center">
                    <img src={user} alt={'user'}/>
                <div className="col  mb-sm-0">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{email}</p>
                      
                </div>
                <i className="fa-solid fa-trash" style={{color:'red', marginTop:'10px', cursor:'pointer'}} ></i>
                

            </div>
      
    </div>
  )
}

export default ContactCard
