import React, { useState, useEffect } from 'react'

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser)
  const [error, setError] = useState({})
  const [selectImage, setSelectImage] = useState(null)

  const options = [
    { value: "farmer", label: "Farmer" },
    { value: "doctor", label: "Doctor" },
    { value: "software engineer", label: "Software Engineer" },
    { value: "advocate", label: "Advocate" },
  ];

  const onSelectfile = (event) => {

    // const selectedFile = event.target.files;
    // console.log(selectedFile);
    // const setSelectFileArray = Array.from(selectedFile)
    // const showImage = setSelectFileArray.map((file) => {
    //   return ;
    // });
    if (event.target.files && event.target.files[0]) {
      var img = event.target.files[0];
      //const { name } = event.target.files[0];
      setSelectImage(img);
      console.log(" setSelectImg ", img)
    }

  }


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
    var useName = user.name;
    var useEmail = user.email;
    var useNumber = user.number
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
    else if (!phoneRegExp.test(useNumber)) {
      errors.number = "Invalid Number"
    }
    else if (useNumber > 10) {
      errors.number = "Enter only 10 number"

    }
    return errors;
  }

  return (
    <div className='mt-4'>
      <div className='flex flex-col '>
        <form onSubmit={event => {
          event.preventDefault()

          props.updateUser(user.id, user)
          props.addImage(selectImage);
        }}>
          <label for='name'>Name</label><br />
          <input type='text' placeholder="Enter your UserName" name="name" value={user.name} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black  w-72 md:w-96 lg:w-96 xl:w-96' /><br />
          {<div> {error.name} </div>}
          <label for='username'>Email</label><br />
          <input type='email' placeholder="Enter your email" name="email" value={user.email} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' /> <br />
          {<div> {error.email} </div>}

          <label for="default" class="block mt-2  text-gray-900 ">Professions</label>
          {/* <select id="default" class="mb-6 bg-gray-50 border mt-2 border-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>Choose a Field</option>
            <option value="US">Farmer</option>
            <option value="CA">Doctor</option>
            <option value="FR">Advocate</option>
            <option value="DE">Software Engineer </option>
          </select> */}
          <div className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96'>
            <Dropdown
              options={options}
              label="select Profession"
              value={user.profession}
              onChange={handleInputChange}
              name="profession"
            />
          </div>

          <br />
          <label for='number'>Number</label><br />
          <input type='text' placeholder="Enter your number" name="number" value={user.number} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' /><br />
          {<div> {error.number} </div>}
          <div className='mt-5'>
            <input accept="image/*" type="file" onChange={onSelectfile} classNameName='' name="image" />
          </div>

          <button className=' p-3 rounded-lg bg-blue-600 text-white font-bold mt-4 '>Update User</button>
          <button onClick={() => props.setEditing(false)} className=' p-3 rounded-lg bg-blue-600 text-white font-bold mt-4 ml-4' >  Cancel</button>
        </form>
      </div>

    </div>
  )
}
const Dropdown = ({ label, name, value, options, onChange }) => {
  return (
    <label>
      <select name={name} value={value} onChange={onChange}>
        {options.map((user) => (
          <option value={user.value}>{user.label}</option>
        ))}

      </select>
    </label>
  );
}
export default EditUserForm;
