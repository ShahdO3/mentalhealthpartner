'use client';

import React from 'react'
import Link from 'next/link'
import { link } from 'fs';
import { usePathname } from 'next/navigation';
// import classNames from 'classnames';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

const NavBar = () => {

  const currentPathN = usePathname();

  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'}
    
  ]

  return (
    <div className="navbar bg-base-300 shadow-md shadow-stone-900 rounded-4xl p-2 mb-10">
    <div className="navbar-start pl-3">
      {/* <ul
        tabIndex={0}
        className="z-1">

          {links.map(link =>
            <Link 
            key={link.href}
            className={classNames({
              'opacity-100 font-extrabold ': link.href == currentPathN,
              'opacity-70 font-medium': link.href != currentPathN,
              'hover:opacity-100 transition-colors p-2 text-base': true,
            })}
            href={link.href}>{link.label}</Link>
          )}
        </ul> */}
      </div>
      <div className="navbar-center ">
        SoulSpark
        {/* <button className='btn btn-ghost'>
            <Image src={'/bugged-out-high-resolution-logo-transparent.png'} alt='Bugged Out Logo' width={120} height={50} />
        </button> */}
      </div>
      <div className="navbar-end">
      {/* <div className="avatar pr-2">
        <div className="w-7 rounded-full ">
          <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
        </div>
      </div> */}
      <ThemeSwitcher/>
  </div>
</div>
  )
}

export default NavBar