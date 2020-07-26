import React from 'react'
import Link from 'next/link'

const Survey = () => {
    const save = async () => {
        const form = {
            Name: 'aaa',
            Email: 'bbb',
            Whatsapp: 'ccc'
        }
        try {
            const response = await fetch('/api/save', {
                method: 'POST',
                body: JSON.stringify(form)
            })
            const data = await response.json();
            console.log(data);
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
            <div className="w-1/5 mx-auto">
                <label className='font-bold'>Your name:</label>
                <input type="text" className='p-4 block shadow bg-blue-100 my-2 rounded'/>
                <button className='bg-blue-400               px-12
                    py-4
                    font-bold
                    rounded-lg
                    shadow-lg
                    hover:shadow'
                onClick={save}>Salvar</button>
            </div>    
        </div>
    )
}

export default Survey