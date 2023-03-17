import { ImLinkedin, ImGithub, ImInstagram } from 'react-icons/im'
import Link from 'next/link'
import logopokemon from '../public/img/logopokemon.svg'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-6">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-right py-4 sm:py-0">
          <Image src={logopokemon} alt="logo" />
        </div>
        <div className="w-96 order-3 flex justify-end">
          <div className="flex gap-6">
            <Link href="/" legacyBehavior>
              <a>
                <ImLinkedin color="#fff" size={26} />
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a>
                <ImGithub color="#fff" size={26} />
              </a>
            </Link>
            <Link href="/" legacyBehavior>
              <a>
                <ImInstagram color="#fff" size={26} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
