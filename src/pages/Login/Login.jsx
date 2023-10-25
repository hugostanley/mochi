import { FormProvider, Button, Spacer } from '@/components'
import { globals } from '@/utils'
import React from 'react'
import { useActionData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function Login() {
    const errors = useActionData()
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen flex items-center justify-center'>
            <FormProvider errors={errors}>
                <FormProvider.Header>Log in</FormProvider.Header>
                <FormProvider.Form method="post" action="/login">
                    <FormProvider.Field>
                        <FormProvider.Label>Email</FormProvider.Label>
                        <FormProvider.Input type="text" name="email" />
                        <FormProvider.ErrorMessage forInput="email"/>
                    </FormProvider.Field>
                    <FormProvider.Field>
                        <FormProvider.Label>Password</FormProvider.Label>
                        <FormProvider.Input type="password" name="password" />
                    </FormProvider.Field>
                    <Button variant="primary">Log in</Button>
                </FormProvider.Form>
                <Spacer text="or" />
                <Button variant="secondary" onClick={() => navigate(globals.paths.signup)}>Create an account</Button>
            </FormProvider>
        </div>
    )
}
