import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import React from 'react'

const Stats = () => {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 roudend-xl relative">
        <span className="font-heading text-2xl text-gray-200 leading-none">
          942
        </span>
        <p className="text-sm text-gray-300">Acesso ao link</p>

        <MousePointerClick className="size-5 absolute left-3 top-3 text-purple" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 roudend-xl relative">
        <span className="font-heading text-2xl text-gray-200 leading-none">
          875
        </span>
        <p className="text-sm text-gray-300">Inscrições feitas</p>

        <BadgeCheck className="size-5 absolute left-3 top-3 text-purple" />
      </div>

      <div className="bg-gray-700 border border-gray-600 px-4 py-7 flex flex-col items-center justify-center gap-1 roudend-xl relative">
        <span className="font-heading text-2xl text-gray-200 leading-none">
          3°
        </span>
        <p className="text-sm text-gray-300">Posição do ranking</p>

        <Medal className="size-5 absolute left-3 top-3 text-purple" />
      </div>
    </div>
  )
}

export default Stats
