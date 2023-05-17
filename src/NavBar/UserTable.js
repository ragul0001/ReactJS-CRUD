import React from 'react'
const UserTable = (props) => {
 
  return (
<div class="flex flex-col">
  <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table class="min-w-full text-left text-sm font-light">
          <thead class="border-b font-medium dark:border-neutral-500">
            <tr>
            <th scope="col" class="px-6 py-4">Sl.no</th>
              <th scope="col" class="px-6 py-4">Name</th>
              <th scope="col" class="px-6 py-4">Email</th>
              <th scope="col" class="px-6 py-4">Professions</th>
              <th scope="col" class="px-6 py-4">Number</th>
              <th scope="col" class="px-6 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
                {props.users.length > 0 ? (
                props.users.map((user) => (
                <tr className="border-b dark:border-neutral-500" key={user.id}>
                  <td className="whitespace-nowrap px-6 py-4 ">{user.id}</td>
                    <td className="whitespace-nowrap px-6 py-4 ">{user.name}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.profession}</td>
                    <td className="whitespace-nowrap px-6 py-4">{user.number}</td>
                    <td>
                    <button className="p-2  w-28 rounded-lg bg-green-500 text-white mx-2 font-extrabold"  onClick={() => {props.editRow(user)}}>Edit</button>
                  <button className="p-2  w-28  rounded-lg bg-red-500 text-white font-extrabold"  onClick={() => props.deleteUser(user.id)}>Delete</button>
                    </td>
                </tr>
                ))
            ) : (
                <tr>
                <td colSpan={4}>No users</td> 
                </tr>
            )}
        
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
  )
}

export default UserTable;