import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)
  const [error,setError]=useState({})

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    setError(validate(user));
  }
  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  const validate = (user) => {
    const errors = {};
    var useName=user.name;
    var useEmail=user.email;
    var useNumber=user.number
    const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{0,9}?$/
    var letters = /^[A-Za-z]+$/;
        if (!useName) {
          errors.name = "name is required"
         
        }
        else if (!useName.match(letters)) {
          errors.name = "Alphabets only"
           
        }
      

    
    if (!useEmail) {
      errors.email = "email is required"
    }
    else if (!regex.test(useEmail)) {
      errors.email = "Enter the valid email"
    }
    if (!useNumber) {
      errors.number = "Numbers are Required"
    }
    else if (!phoneRegExp.test(useNumber) ) {
      errors.number = "Invalid Number"
    }
    else if(useNumber > 10){
      errors.number="Enter only 10 number"
      
    }
    return errors;
  }

  return (
    <div className='mt-4'>  
    <div className='flex flex-col '>
       <form  onSubmit={event => {
           event.preventDefault()

           props.updateUser(user.id, user)
               }}>
           <label for='name'>Name</label><br/>
           <input type='text' placeholder="Enter your UserName" name="name" value={user.name} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black  w-72 md:w-96 lg:w-96 xl:w-96' /><br/>
           {<div> {error.name} </div>}
           <label for='username'>Email</label><br/>
           <input type='email' placeholder="Enter your email" name="email" value={user.email} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' /> <br/>              
           {<div> {error.email} </div>}
           <label for='number'>Number</label><br />
          <input type='text' placeholder="Enter your number" name="number" value={user.number} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' /><br />
          {<div> {error.number} </div>}
           <button className=' p-3 rounded-lg bg-blue-600 text-white font-bold mt-4 '>Update User</button>
             <button onClick={() => props.setEditing(false)} className=' p-3 rounded-lg bg-blue-600 text-white font-bold mt-4 ml-4' >  Cancel</button>
       </form>         
    </div>
   
</div>
  )
}

export default EditUserForm;
