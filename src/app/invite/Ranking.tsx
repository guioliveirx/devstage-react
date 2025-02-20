import React from 'react'
import MedalGold from '../../assets/medal-gold.svg'
import MedalCooper from '../../assets/medal-cooper.svg'
import MedalSilver from '../../assets/medal-silver.svg'
import Image from 'next/image'

const Ranking = () => {
  return (
    <div className="w-full max-w-[440px] space-y-5">
        <h2 className="text-gray-200 text-xl font-heading font-semibold leading-none">
          Ranking de Indicações
        </h2>

        <div className="space-y-4">
          <div className="rounded-xl bg-gray-600 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              1° | André Souza
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              1030
            </span>

            <Image className="absolute top-0 right-8" src={MedalGold} alt="" />
          </div>

          <div className="rounded-xl bg-gray-600 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              2° | Melissa Loures
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              980
            </span>

            <Image
              className="absolute top-0 right-8"
              src={MedalSilver}
              alt=""
            />
          </div>

          <div className="rounded-xl bg-gray-600 border border-gray-600 p-6 flex flex-col justify-center gap-3 relative">
            <span className="text-sm text-gray-300 leading-none">
              3° | Rodrigo Gonçalves
            </span>

            <span className="font-heading text-2xl font-semibold text-gray-200 leading-none">
              870
            </span>

            <Image
              className="absolute top-0 right-8"
              src={MedalCooper}
              alt=""
            />
          </div>
        </div>
      </div>
  )
}

export default Ranking
