import React from 'react'
import { useActionData } from 'react-router-dom'
import { Form } from 'react-router-dom'

export function SignUp() {
    const errors = useActionData()
    return (
        <Form action="/signup" method='post'>
            <input placeholder='username' name="username" />
            <input placeholder='email' name="email" />
            {errors?.email && <span>{errors.email}</span>}
            <input placeholder="password" name="password" />
            <button type="submit">Submit</button>
        </Form>
    )
}
