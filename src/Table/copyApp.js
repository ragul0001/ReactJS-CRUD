import UserTable from './UserTable';
import React, { Fragment, useState } from 'react'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
const  App =() => {
  const usersData = [
		{ id: 1, name: 'Ragul', email: 'raguljking@gmail.com' ,number:'8807667074' },
		{ id: 2, name: 'Craig', email: 'takekar2@gmail.com' ,number:'000-0000-000' },
		{ id: 3, name: 'Ben', email: 'Benjking@gmail.com' ,number:'000-0000-000' },
	]

	const initialFormState = { id: null, name: '', email: '',number:'' }
	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
// Table validations
  const [set,setTable]=useState(usersData)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1;
		
    
    // var fix=0;
    // for(var i=0;i<setTable.length;i++){
    //    if((users.name===user.name)||(users.email===user.email)||(users.number===user.number)){
    //        console.log("Already exists the table")
    //    }
    //    else{
    //       console.log("Adding new items")
    //    }
    // }
    //  if(fix==0){
    //       setUsers([...users,user])
    //  }
    //  else{
    //       alert("Already existed the record in the table")
    //  }
    const duplicate =users.find(
        (duplicateLayer)=>((duplicateLayer.name === user.name)||
        (duplicateLayer.email === user.email)||
        (duplicateLayer.number === user.number))
    )
    if(duplicate){
      alert("Already existed the record in the table")
    }
   else
   setUsers([ ...users, user ])
   return

	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)
		setCurrentUser({ id: user.id, name: user.name, email: user.email ,number:user.number})
	}

  return (
    <div className="container mx-auto max-w-5xl  ">
          <h1 className='mt-5 text-4xl '>Details  </h1>
         <div className='flex justify-around mt-9 flex-wrap '>
                <div>
                {editing ? (
                    <div>
                      <h2>Edit user</h2>
                      <EditUserForm
                        editing={editing}
                        setEditing={setEditing}
                        currentUser={currentUser}
                        updateUser={updateUser}
                      />
                    </div>
                  ) : (
                  
                    <div>
                      <h2 className='text-2xl font-bold text-amber-500'>Add users</h2>
                      <AddUserForm addUser={addUser} />
                      
                    </div>
                   
                  )}
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-amber-500'>View users</h1>
                    <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
                </div>
                
         </div>
    </div>
  );
}

export default App;
