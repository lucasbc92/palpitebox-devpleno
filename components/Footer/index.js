import React from 'react'

const Footer = () => {
    return (
        <div className='bg-gray-700 p-4'>
            <div className='container mx-auto text-center font-bold text-white'>
                Project developed during Fullstack Master Week from
                <a href="https://devpleno.com" className="hover:underline"> Tulio Faria (DevPleno)</a>
                <div className='mt-2'>
                    <img className='inline p-4' src="/logo_semana_fsm.png" alt="Semana Fullstack Master"/>
                    <img className='inline p-4' src="/logo_devpleno.png" alt="DevPleno"/>
                </div>
            </div>            
        </div>
    )
}

export default Footer