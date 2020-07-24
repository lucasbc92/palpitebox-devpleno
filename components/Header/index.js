import React from 'react'
import Link from 'next/link'
import styles from './styles.module.css'

const Header = () => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className='container mx-auto'>
                    <img className='mx-auto' src="/logo_palpitebox.png" alt="PalpiteBox"/>
                </div>
            </div>
            <div className='bg-gray-300 p-4 shadow-md text-center'>
                <Link href='/about'>
                    <a className='px-2 hover:underline'>About</a>
                </Link>
                <Link href='/contact'>
                    <a className='px-2 hover:underline'>Contact</a>
                </Link>
                <Link href='/survey'>
                    <a className='px-2 hover:underline'>Survey</a>
                </Link>
            </div>
        </>
    )
}

export default Header