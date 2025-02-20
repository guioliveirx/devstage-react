import Button from '@/components/Button'
import { InputRoot, InputIcon, InputField } from '@/components/Input'
import { User, Mail, ArrowRight } from 'lucide-react'
import React from 'react'

const Subscription = () => {
  return (
    <form className="bg-gray-700 border border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <InputRoot>
          <InputIcon>
            <User />
          </InputIcon>
          <InputField type="text" placeholder="Nome completo" />
        </InputRoot>

        <InputRoot>
          <InputIcon>
            <Mail />
          </InputIcon>
          <InputField type="email" placeholder="E-mail" />
        </InputRoot>
      </div>

      <Button type="submit">
        Confirmar
        <ArrowRight />
      </Button>
    </form>
  )
}

export default Subscription
