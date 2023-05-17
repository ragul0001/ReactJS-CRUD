import React, { useState } from 'react'


const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', email: '', profession: '', number: '',image:'' }
  const [user, setUser] = useState(initialFormState)
  const [error, setError] = useState({});
  const [selectImage, setSelectImage] = useState(null)

  //Dropdown value to set some objects
  const options = [
    { value: "farmer", label: "Farmer" },
    { value: "doctor", label: "Doctor" },
    { value: "software engineer", label: "Software Engineer" },
    { value: "advocate", label: "Advocate" },

  ];


  // Image
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
    // checkName(user);
    // checkEmail(user);

  }
  // const checkName =(user)=>{
  //    var useName=user.name;
  //    var letters = /^[A-Za-z]+$/;
  //    if (useName.match(letters)) {
  //     setError({ ...error, name: "" });
  //     return true;
  // }
  // else {
  //     setError({ ...error, name: "Please enter Alphabets only" });
  //     return false;
  // }
  // }
  //   const checkEmail =(user)=>{
  //     var useEmail=user.email;
  //     const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
  //        if (!useEmail) {
  //         setError({ ...error, email: "" });
  //         return true;
  //         }
  //         else if (!regex.test(useEmail)) {
  //           setError({ ...error, email: "Invalid Mail" });
  //           return false;
  //         }
  //  }



  const validate = (user) => {
    const errors = {};
    var useName = user.name;
    var useEmail = user.email;
    var useNumber = user.number
    var useProfession = user.profession;
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
      errors.number = "enter only 10 numbers"
    }
    if (!useProfession) {
      errors.profession = "Requires a valid"
    }

    return errors;
  }


  return (
    <div className='mt-4'>
      <div className='flex flex-col'>
        <form onSubmit={event => {
          event.preventDefault()
          if (!user.name || !user.email || !user.profession || !user.number) return

          if (!error.name && !error.email && !error.profession && !error.number) {
            props.addUser(user);
            props.addImage(selectImage);
          }

          else
            return
          setUser(initialFormState)
          // handleInputChange(event);
        }}  >
          <label for='name'>Name</label><br />
          <input type='text' placeholder="Enter your UserName" name="name" value={user.name} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black  w-72 md:w-96 lg:w-96 xl:w-96' /><br />
          {<div className='text-sm text-red-500 text-center'> {error.name} </div>}
          <label for='email'>Email</label><br />
          <input type='email' placeholder="Enter your email" name="email" value={user.email} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' /><br />
          {<div className='text-sm text-red-500 text-center'> {error.email} </div>}

          <label for="default" class="block mt-2  text-gray-900 ">Professions</label>
          {/* <select id="default"  class="mb-6 bg-gray-50 border mt-2 border-black  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected  value={user.profession}  onChange={handleInputChange}>Choose a Field</option>
            <option value="Fr">Farmer</option>
            <option value="Dr">Doctor</option>
            <option value="At">Advocate</option>
            <option value="Er">Software Engineer </option>
          </select> */}
          {/* <select value={user} onChange={handleInputChange} className='p-2 mt-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' >
                                  {options.map((option) => (
                        <option value={options.user} >{option.label}</option>
                      ))}

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
          <input type='text' placeholder="Enter your number" name="number" value={user.number} onChange={handleInputChange} className='p-2 mt-3 mb-3 rounded-lg border border-black w-72 md:w-96 lg:w-96 xl:w-96' /><br />
          {<div className='text-sm text-red-500 text-center'> {error.number} </div>}

          {/* <div>

            {showModal ? (
              <>
                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div
                    className="fixed inset-0 w-full h-full bg-black opacity-40"
                    onClick={() => setShowModal(false)}
                  ></div>
                  <div className="flex items-center min-h-screen px-4 py-8">
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                      <div className="mt-3 sm:flex">
                        <div className="mt-2 text-center sm:ml-4 sm:text-left">
                          <h4 className="text-lg font-medium text-gray-800">
                            Upload a Image
                          </h4>
                       
                                  {selectImage &&
                                    selectImage.map((image) => {
                                      return (
                                        <div className='relative mt-10' >
                                          <img src={image} className='' />
                                          <button className=" absolute top-0 right-0 text-whit bg-white" onClick={() => setSelectImage(selectImage.filter((e) => e !== image))} >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                              <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                          </button>


                                        </div>
                                      )
                                    })
                                  }

                                </div>
                          </div>
                          <div className="items-center gap-2 mt-3 sm:flex">
                            <button
                              className="w-full mt-2 p-2.5 flex-1 text-white bg-blue-600 rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2"  >
                              Upload
                            </button>
                            <button
                              className="w-full mt-2 p-2.5 flex-1 text-gray-800 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                              onClick={() =>
                                setShowModal(false)
                              }
                            >
                              close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </div> */}
          <div className='mt-5'>
            <input accept="image/*" type="file" onChange={onSelectfile} classNameName='' name="image" />
          </div>
          <button className=' p-3 rounded-lg bg-blue-600 text-white font-bold mt-4'>Add New User</button>
          {/* <button className="px-6 py-3 text-white bg-blue-600 rounded-lg font-bold mx-4" type="button" onClick={() => setShowModal(true)}>
            Upload Image </button> */}
        </form >
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
export default AddUserForm