import { FormProvider } from '@/components'
import React from 'react'
import { useActionData } from 'react-router-dom'
import { Form } from 'react-router-dom'

export function SignUp() {
    const errors = useActionData()
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <FormProvider method="post" action="/signup">
                <FormProvider.Header>Sign Up</FormProvider.Header>
                <FormProvider.Form>
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
                </FormProvider.Form>
            </FormProvider>
        </div>
    )
}
