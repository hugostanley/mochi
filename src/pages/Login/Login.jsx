import React from 'react'
import { Form } from 'react-router-dom'

export function Login() {
    return (
        <Form method="post" action="/app">
            <input name='username' placeholder='username'/>
            <input name='email' placeholder='email'/>
            <button type="submit">Submit</button>
        </Form>
    )
}
