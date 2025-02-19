import { Mail } from 'lucide-react'
import React, { type ComponentProps } from 'react'

interface InputProps extends ComponentProps<'input'> {
  error?: boolean
}

const Input = ({ error = false, ...props }: InputProps) => {
  return (
    <div
      data-error={error}
      className="data-[error=true]:border-danger group flex items-center gap-2 bg-gray-800 border border-gray-600 w-full h-12 px-4 rounded-xl focus-within:border-gray-100"
    >
      <span className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger">
        <Mail />
      </span>

      <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
    </div>
  )
}

interface InputRootProps extends ComponentProps<'div'> {
  error?: boolean
}

export const InputRoot = ({ error = false, ...props }: InputRootProps) => {
  return (
    <div
      data-error={error}
      className="data-[error=true]:border-danger group flex items-center gap-2 bg-gray-800 border border-gray-600 w-full h-12 px-4 rounded-xl focus-within:border-gray-100"
      {...props}
    />
  )
}

interface InputIconProps extends ComponentProps<'span'> {}

export const InputIcon = (props: InputIconProps) => {
  return (
    <span
      className="text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger"
      {...props}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

export const InputField = (props: InputFieldProps) => {
  return <input className="flex-1 outline-0 placeholder-gray-400" {...props} />
}
