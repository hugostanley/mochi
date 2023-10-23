import React from 'react'
import { Form } from 'react-router-dom'

export function SignUp() {
    return (
        <Form action="/signup" method='post'>
            <input placeholder='username' name="username" />
            <input placeholder='email' name="email" />
            <input placeholder="password" name="password" />
            <button type="submit">Submit</button>
        </Form>
    )
}
