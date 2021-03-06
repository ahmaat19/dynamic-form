import { useState } from 'react'

const App = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '' },
  ])

  const handleInputChange = (e, index) => {
    const { name, value } = e.target
    const list = [...inputFields]
    list[index][name] = value
    setInputFields(list)
  }

  const handleRemoveClick = (index) => {
    const list = [...inputFields]
    list.splice(index, 1)
    setInputFields(list)
  }

  const handleAddClick = () => {
    setInputFields([...inputFields, { firstName: '', lastName: '' }])
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputFields)
  }

  return (
    <div className='bg-info vh-100 d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-center text-secondary'>
          Dynamic Form With Controlled Components
        </h1>
        {inputFields.map((field, index) => (
          <div className='row my-3' key={index}>
            <div className='col-5'>
              <input
                className='form-control'
                autoFocus
                name='firstName'
                placeholder='Enter First Name'
                value={field.firstName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className='col-5'>
              <input
                className='form-control'
                name='lastName'
                placeholder='Enter Last Name'
                value={field.lastName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className='col-2'>
              <div className='btn-group'>
                {inputFields.length !== 1 && (
                  <button
                    type='button'
                    className='btn btn-danger '
                    onClick={() => handleRemoveClick(index)}
                  >
                    Remove
                  </button>
                )}
                {inputFields.length - 1 === index && (
                  <button
                    type='button'
                    className='btn mx-1 btn-primary '
                    onClick={handleAddClick}
                  >
                    Add
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <div className='col-12'>
          <button
            className='btn btn-success d-block form-control'
            type='submit'
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default App
