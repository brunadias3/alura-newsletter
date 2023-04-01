import React from 'react'

export default function Article({ title, text, tags, image, alt }) {
    return (
        <div className='p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl sm:shadow-xl flex flex-col items-center gap-2'>
            <h1 className=' mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold'>{title}</h1>
            <div className='flex flex-col gap-1'>
                {
                    text.map((content, index) => <span key={index} className='text-alura-200 dark:text-gray-400'>{content}</span>)
                }
            </div>
            {image && <img className='sm:p-4 ' src={image} />}
            {image && alt && <span className='sr-only'>{alt}</span>}
        </div>
    )
}