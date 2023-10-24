import { Button, FormProvider, Spacer } from '@/components'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useActionData } from 'react-router-dom'

export function SignUp() {
    const errors = useActionData()
    const navigate = useNavigate()

    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <FormProvider>
                <FormProvider.Header>Sign Up</FormProvider.Header>
                <FormProvider.Form method="post" action="/signup">
                    <FormProvider.Field>
                        <FormProvider.Label>Username</FormProvider.Label>
                        <FormProvider.Input type="text" name="username" />
                    </FormProvider.Field>
                    <FormProvider.Field>
                        <FormProvider.Label>Email</FormProvider.Label>
                        <FormProvider.Input type="text" name="email" />
                    </FormProvider.Field>
                    <FormProvider.Field>
                        <FormProvider.Label>Password</FormProvider.Label>
                        <FormProvider.Input type="password" name="password" />
                    </FormProvider.Field>
                    <Button variant="primary">Create Account</Button>
                </FormProvider.Form>
                <Spacer text="or" />
                <Button variant="secondary" onClick={() => navigate('/login')}>Log in</Button>
            </FormProvider>
        </div>
    )
}
