import IconButton from '@/components/IconButton'
import { InputRoot, InputIcon, InputField } from '@/components/Input'
import { Link, Copy } from 'lucide-react'
import React from 'react'

const InviteLinkInput = () => {
  return (
    <InputRoot>
      <InputIcon>
        <Link className="size-5" />
      </InputIcon>
      <InputField
        readOnly
        defaultValue="http://localhost:3000/invite/123021i3jsadiajs213"
      />
      <IconButton className="-mr-2">
        <Copy className="size-5" />
      </IconButton>
    </InputRoot>
  )
}

export default InviteLinkInput
