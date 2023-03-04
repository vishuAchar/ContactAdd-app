import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";
import React,{useState,useEffect} from 'react';
import {uuid} from 'uuidv4';



function App() {
  const LOCAL_STORAGE_KEY = 'contacts';

  const [contacts,setContacts] = useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts, {id:uuid(),...contact}]);
  };
  
  useEffect(()=>{
    const retContacts = JSON.parse(localStorage.getItem('contacts'));
    setContacts(retContacts);
   },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);

  

  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
