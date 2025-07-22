import Image from 'next/image';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaMoon } from 'react-icons/fa'
import logo from '../assets/logo.png';

export default function Home() {
  return (
    <main>
      <section className='bg-brand h-screen'>
        <div id="navBar" className='flex justify-between px-4 py-2'> 
          <Link href="/" >
            <Image src={logo} alt="wakamonophoto" className='w-18 h-auto p-2'/>
          </Link>
          <button className='p-4 bg-amber-200 rounded-4xl'>
            <GiHamburgerMenu/>
          </button>
          <button className='p-4 text-amber-200'>
            <FaMoon/>
          </button>

        </div>
      </section>
    </main>
  );
}
