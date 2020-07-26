import React from 'react'
import Link from 'next/link'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json());

const Index = () => {
    const { data, error } = useSWR('/api/get-promo', fetcher)

    return (
        <div>
            <p className='mt-12 text-center'>
                This establishment always seeks to better serve its customers.
                <br/>Therefore, we are always open to listen to your opinion.
            </p>
            <div className='text-center my-12'>
                <Link href='/survey'>
                    <a className='bg-blue-400
                        px-12
                        py-4
                        font-bold
                        rounded-lg
                        shadow-lg
                        hover:shadow'
                    >Give opinion or suggestion</a>
                </Link>
            </div>
            { !data && <p>Carregando...</p>}
            { !error && data && data.showCoupon &&
            <p className='my-12 text-center'>
                {data.message}
            </p>
            }
        </div>        
    )
}

export default Index;