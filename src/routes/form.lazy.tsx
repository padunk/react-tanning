import { useState } from 'react'

import { useForm } from '@tanstack/react-form'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/form')({
  component: Form,
})

function Form() {
  const [fullName, setFullName] = useState('')
  const form = useForm({
    defaultValues: {
      fullName: '',
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      setFullName(value.fullName)
    },
  })

  return (
    <div className='mt-6'>
      <p>Your Full Name: {fullName}</p>
      <form
        className='mt-6'
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          form.handleSubmit()
        }}
      >
        <div>
          <form.Field
            name='fullName'
            children={(field) => (
              <div className='flex gap-x-6'>
                <label htmlFor='user-name'>Full Name:</label>
                <input
                  id='user-name'
                  className='px-4 py-2'
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                />
              </div>
            )}
          />
        </div>
        <button type='submit' className='mt-6'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form
