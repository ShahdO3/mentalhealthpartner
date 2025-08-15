'use client';

import React from 'react'
import Link from 'next/link'
import { link } from 'fs';
import { usePathname } from 'next/navigation';
// import classNames from 'classnames';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';  
import { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LetterFx } from '@once-ui-system/core';

gsap.registerPlugin(useGSAP, ScrollTrigger);

    

const NavBar = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(boxRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      }
    });
  }, { scope: boxRef });

  const currentPathN = usePathname();

  const links = [
    {label: 'Dashboard', href: '/'},
    {label: 'Issues', href: '/issues'}
    
  ]
  const charSet = ["fhu&d#8d2"];

  return (
    <div ref={boxRef} className="navbar sticky shadow-md shadow-accent rounded-xl p-2 mb-10">
      <div className="navbar-start pl-3">
        <a className='btn btn-ghost rounded-4xl'>SoulSpark</a>
      </div>
      <div className="navbar-center">
      </div>
      <div className="navbar-end">
        <ThemeSwitcher/>
      </div>
    </div>
  )
}

export default NavBar