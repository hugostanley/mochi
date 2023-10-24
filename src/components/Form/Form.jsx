import { forwardRef } from "react";
import { Form } from "react-router-dom";

const FormProvider = forwardRef(({ className, children, ...props }, ref) => (
    <div ref={ref} {...props} className={`flex flex-col gap-6 border border-gray-100 shadow-lg rounded-2xl w-[25rem] h-fit px-3 py-10 bg-white ${className}`} >{children}</div>
))

const FormEl = forwardRef(({ className, children, ...props }, ref) => (
    <Form ref={ref} {...props} className={`${className}`}>
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
    <div ref={ref} className={`flex flex-col gap-2 p-4 ${className}`} {...props} />
))

FormProvider.Field = FormField

const FormHeader = forwardRef(({ className, ...props }, ref) => (
    <div className="w-full flex items-center justify-center">
        <h2 ref={ref} className={`font-bold text-4xl ${className}`} {...props} />
    </div>
))

FormProvider.Header = FormHeader

export { FormProvider }

