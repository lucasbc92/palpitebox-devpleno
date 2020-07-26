import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Survey = () => {
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Whatsapp, setWhatsapp] = useState('');

    const [success, setSuccess] = useState(false);
    const [result, setResult] = useState({});


    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
    }

    const handleWhatsapp = (event) => {
        setWhatsapp(event.target.value)
    }

    const save = async () => {
        const form = {
            Name,
            Email,
            Whatsapp
        }
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json();
            setSuccess(true);
            setResult(data);
        } catch (err) {

        }
    }

    return (
        <div className='pt-6'>
            <h1 className='text-center font-bold my-4 text-xl'>Opinions and Suggestions</h1>
            <p className='text-center mb-6'>
                This establishment always seeks to better serve its customers.
                <br/>Therefore, we are always open to listen to your opinion.
            </p>
            {!success && 
            <div className="w-1/5 mx-auto">
                <label className='font-bold'>Your name:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={handleName} placeholder='Name'/>
                <label className='font-bold'>Email:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={handleEmail} placeholder='Email'/>
                <label className='font-bold'>WhatsApp:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded' onChange={handleWhatsapp} placeholder='Whatsapp'/>
                <button className='bg-blue-400
                    px-12
                    py-4
                    my-6
                    font-bold
                    rounded-lg
                    shadow-lg
                    hover:shadow'
                onClick={save}>Salvar</button>
            </div>
            }
            { success &&
            <div class="w-1/2 mx-auto my-12 bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3 text-center" role="alert">
                <p class="mb-6 font-bold">Thank you for contributing with your opinion or suggestion!</p>
                { result.showCoupon &&
                <>
                    <p class="border border-gray-500 p-4">
                        Your coupon: <br/> 
                        <span className='font-bold text-2xl'>{result.Coupon}</span>
                    </p>
                    <p class="border border-gray-500 p-4">
                        <span className='font-bold'>{result.Promo}</span>
                        <br/><br/>
                        <span className='italic'>Take a picture of this screen and show it to the waiter.</span>
                    </p>
                </>
                }
                
            </div>
            }   
        </div>
    )
}

export default Survey