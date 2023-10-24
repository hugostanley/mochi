import { forwardRef } from "react";
import { Form } from "react-router-dom";
import { FormContext, useFormContext } from "@/utils";
import { useEffect, useState } from "react";

const FormProvider = forwardRef(({ errors, className, children, ...props }, ref) => {
    const [fieldErrors, setFieldErrors] = useState(errors)

    useEffect(() => {
        setFieldErrors(errors)
    }, [errors])

    return (
        <FormContext.Provider value={{ fieldErrors, setFieldErrors }}>
            <div ref={ref} {...props} className={`flex flex-col gap-6 border border-gray-100 shadow-lg rounded-2xl w-[27rem] h-fit px-10 py-10 bg-white ${className}`} >{children}</div>
        </FormContext.Provider>
    )
})

const FormEl = forwardRef(({ className, children, ...props }, ref) => (
    <Form ref={ref} {...props} className={`flex flex-col gap-5 ${className}`}>
        {children}
    </Form>
))

FormProvider.Form = FormEl

const FormInput = forwardRef(({ className, ...props }, ref) => (
    <input ref={ref} className={`rounded-xl px-4 py-3 shadow-sm border border-gray-100${className}`} {...props} />
))

FormProvider.Input = FormInput

const FormLabel = forwardRef(({ className, ...props }, ref) => (
    <label ref={ref} className={`text-sm font-medium ${className}`} {...props} />
))

FormProvider.Label = FormLabel

const FormField = forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={`flex flex-col gap-2 ${className}`} {...props} />
))

FormProvider.Field = FormField

const FormHeader = forwardRef(({ className, ...props }, ref) => (
    <div className="w-full flex items-center justify-center">
        <h2 ref={ref} className={`font-bold text-4xl ${className}`} {...props} />
    </div>
))

FormProvider.Header = FormHeader

const FormErrorMessage = forwardRef(({forInput, className, ...props }, ref) => {
    const { fieldErrors } = useFormContext(FormContext)

    return (
        <span ref={ref} className={`text-red-400 text-xs font-bold ${className || ""}`} {...props}>{fieldErrors && fieldErrors[forInput]}</span>
    )
})

FormProvider.ErrorMessage = FormErrorMessage

export { FormProvider }

