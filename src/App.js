import { useState } from 'react'

const App = () => {
  const [inputFields, setInputFields] = useState([
    { firstName: '', lastName: '' },
  ])

  const handleAddField = () => {
    setInputFields([...inputFields, { firstName: '', lastName: '' }])
  }

  const handleRemoveField = (index) => {
    const allOldInputFields = [...inputFields]
    allOldInputFields.splice(index, 1)
    setInputFields(allOldInputFields)
  }

  const handleInputChange = (e, index) => {
    const { name, value } = e.target

    const allOldInputFields = [...inputFields]
    allOldInputFields[index][name] = value

    setInputFields(allOldInputFields)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(inputFields)
  }

  return (
    <div class='d-flex justify-content-center align-items-center vh-100 bg-dark'>
      <form onSubmit={(e) => handleSubmit(e)}>
        {inputFields.map((inputField, index) => (
          <div key={index} className='row m-2'>
            <div className='col'>
              <input
                autoFocus
                type='text'
                className='form-control m-1 border border-success shadow-none '
                placeholder='First Name'
                name='firstName'
                value={inputField.firstName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className='col'>
              <input
                type='text'
                className='form-control m-1 border border-success shadow-none '
                placeholder='Last Name'
                name='lastName'
                value={inputField.lastName}
                onChange={(e) => handleInputChange(e, index)}
              />
            </div>
            <div className='col'>
              <div className='btn-group'>
                {inputFields.length > 1 && (
                  <button
                    onClick={() => handleRemoveField(index)}
                    type='button'
                    className='btn btn-danger  mx-1'
                  >
                    REMOVE
                  </button>
                )}

                {inputFields.length - 1 === index && (
                  <button
                    onClick={() => handleAddField()}
                    type='button'
                    className='btn btn-primary  mx-1'
                  >
                    ADD
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
        <button type='submit' className='btn btn-success m-4'>
          SUBMIT
        </button>
        <div className='modal-footer text-light '></div>
      </form>
    </div>
  )
}

export default App
