import Link from 'next/link';
import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import KhalifaIcon from '../../public/images/profile/KhalifaIcon.png'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <Link href="/"
        className='w-16 h-16 bg-light dark:bg-dark text-dark dark:text-light flex items-center justify-center
        rounded-full text-sm font-bold border border-solid border-dark dark:border-light' 
        >        
        <Image src={KhalifaIcon} alt={"Khalifa MBA Icon"} className='w-full h-auto'/>
        100000010
        </Link>
    </div>
  )
}

export default Logo;