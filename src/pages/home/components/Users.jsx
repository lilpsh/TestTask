import React from 'react'
import { useState, useEffect } from 'react'
import SUButton from './small/SUButton'
import ReactTooltip from 'react-tooltip';
import Form from './Form'

import './users.scss'


let formatPhoneNumber = (str) => {
  //Filter only numbers from the input
  let cleaned = str.replace(/\D/g, '');

  //Check if the input is of correct
  let match = cleaned.match(/^(38|)?(\d{3})(\d{3})(\d{2})(\d{2})$/);

  if (match) {
    //Remove the matched extension code
    //Change this to format for any country code.
    let intlCode = (match[1] ? '+38 ' : '')
    return [intlCode, '(', match[2], ') ', match[3], ' ', match[4], ' ', match[5]].join('')
  }

  return null;
}

const Users = () => {

  const [users, setUsers] = useState([])
  const [counter, setCounter] = useState({page:1, showMore:true})
  const [count, setCount] = useState(null)

  useEffect(() => {
    if(window.innerWidth<=600){
      setCount(3);
      return
    }
    if(window.innerWidth<=992){
      setCount(6);
      return
    }
    if(window.innerWidth>992){
      setCount(9);
      
    }
  }, [])

  
  const getUsers = (clearUsers) => {
    // console.log(clearUsers);
    // console.log(counter);
    fetch(`https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${clearUsers ? 1 : counter.page}&count=${count}`)
      .then(function (response) { return response.json(); })
      .then(function (data) {
        // console.log(data);
        if (data.success) {
          if(clearUsers){
            setUsers(data.users);
            setCounter({page:2,showMore:2<data.total_pages});
            return
          }
          setUsers([...users, ...data.users]);
          setCounter({page:counter.page+1,showMore:counter.page+1<data.total_pages});
        }
        else {
          // proccess server errors 
        }
      })
  }

  useEffect(() => {
    if (count) {
      getUsers();
    }
  }, [count])


  return (
    <div className="users">
      <div className="home_users">
        <h1 className="home_users-title">Our cheerful users</h1>
        <h2 className="home_users-subtitle">The best specialists are shown below</h2>
        <ul className="home_users-list">
          {users.map((user) => (
            <li key={user.id} className="home_users-list-li">
              <div className="home_users-list-li-content">
                <img alt={user.name} src={user.photo} className="home_users-list-li-content-photo" />
                <h3 className="home_users-list-li-content-name" data-tip={user.name}>{user.name}</h3>
                <p className="home_users-list-li-content-position">{user.position}</p>
                <p className="home_users-list-li-content-email" data-tip={user.email}>{user.email}</p>
                <ReactTooltip place="bottom" backgroundColor="#232F34" effect="solid" arrowColor="transparent" />
                <p className="home_users-list-li-content-phone">{formatPhoneNumber(user.phone)}</p>
              </div>
            </li>
          ))}
        </ul>
        {
          counter.showMore 
            ?
          <div className="home_users-button">
            <SUButton onClick={()=>{getUsers(false)}} title={"Show more"} />
          </div>
            :
          null
        }
        
      </div>
      {/* <button onClick={()=>{getUsers(true)}} >asdad</button> */}
      <Form  getUsers={()=>{getUsers(true)}} />
    </div>
  )
}

export default Users
