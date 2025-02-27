import Image from 'next/image'
import logo from '../../../assets/logo.svg'
import Ranking from './Ranking'
import Stats from './Stats'
import InviteLinkInput from './InviteLinkInput'

interface InvitePageProps {
  params: Promise<{
    subscribeID: string
  }>
}

const InvitePage = async (props: InvitePageProps) => {
  const { subscribeID } = await props.params;

  const inviteLink = `http://localhost:3333/invites/${subscribeID}`;

  return (
    <div className="min-h-dvh flex items-center justify-between gap-16 flex-col md:flex-row">
      <div className="flex flex-col gap-10 w-full max-w-[550px]">
        <Image src={logo} alt="devstage logo" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="font-heading text-4xl font-semibold leading-none">
            Inscrição Confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading text-gray-200 text-xl leading-none font-semibold">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />

          <Stats subscriberId={subscribeID} />
        </div>
      </div>

      <Ranking />
    </div>
  )
}

export default InvitePage
