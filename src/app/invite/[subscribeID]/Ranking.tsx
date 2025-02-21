import React from 'react'
import MedalGold from '../../../assets/medal-gold.svg'
import MedalCooper from '../../../assets/medal-cooper.svg'
import MedalSilver from '../../../assets/medal-silver.svg'
import Image from 'next/image'
import { getRanking } from '@/http/api'

const Ranking = async () => {
  const { ranking } = await getRanking()

  return (
    <div className="w-full max-w-[440px] space-y-5">
      <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
        Ranking de Indicações
      </h2>

      <div className="space-y-4">
        {ranking.map(({id, name, score}, index) => (
          <div key={id} className="rounded-xl bg-gray-600 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              {index + 1}° | {name}
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              {score}
            </span>

            {index === 0 && <Image className="absolute top-0 right-8" src={MedalGold} alt="Medalha de Ouro" />}
            {index === 1 && <Image className="absolute top-0 right-8" src={MedalSilver} alt="Medalha de Prata" />}
            {index === 2 && <Image className="absolute top-0 right-8" src={MedalCooper} alt="Medalha de Cobre" />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Ranking
