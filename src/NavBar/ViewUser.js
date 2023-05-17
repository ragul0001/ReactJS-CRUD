import UserTable from './UserTable';
import React, { Fragment, useState } from 'react'
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';


export default function ViewUser() {
  const usersData = [
    { id: 1, name: 'Ragul', email: 'raguljking@gmail.com', profession: 'SoftwareEngineer', number: '8807667074' },
    { id: 2, name: 'Craig', email: 'takekar2@gmail.com', profession: 'Advocate', number: '000-0000-000' },
    { id: 3, name: 'Ben', email: 'Benjking@gmail.com', profession: 'Doctor', number: '000-0000-000' },
  ]

  const initialFormState = { id: null, name: '', email: '', profession: '', number: '',image:'' }
  // Setting state
  const [users, setUsers] = useState(usersData)
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [editing, setEditing] = useState(false)
  const [selectImg, setSelectImg] = useState()
  // Table validations
  const [set, setTable] = useState(usersData)


  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;

    const duplicate = users.find(
      (duplicateLayer) => ((duplicateLayer.name === user.name) ||
        (duplicateLayer.email === user.email) ||
        (duplicateLayer.number === user.number))
    )
    if (duplicate) {
      alert("Already existed the record in the table")
    }
    else
      setUsers([...users, user])
    return

  }


  // Image
  const addImage = (selectImage) => {
    var img = URL.createObjectURL(selectImage)
    setSelectImg(img)
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
    setCurrentUser({ id: user.id, name: user.name, email: user.email, profession: user.profession, number: user.number })
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
                addImage={addImage}
              />
            </div>
          ) : (

            <div>
              <h2 className='text-2xl font-bold text-amber-500'>Add users</h2>
              <AddUserForm addUser={addUser} addImage={addImage} />
            </div>

          )}
        </div>
        <div className=''>
          <h1 className='text-2xl font-bold text-amber-500'>View users</h1>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
          <h4 className='text-2xl font-bold text-amber-500 '>Display Image</h4>
          <img src={selectImg} className='' />
        </div>
      </div>
    </div>
  );
}


