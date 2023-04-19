import React from 'react'

export default function Article({ title, text, tags, image, alt }) {
    return (
        <div className='alura-card'>
            <h1 className=' mb-2 text-xl text-alura-200 dark:text-gray-200 font-bold'>{title}</h1>
            <div className='w-full flex-row justify-end gap-2 pr-5 sm:flex'>
                {
                    tags.map((tag) => 
                        <span 
                            key={tag}
                            className='alura-tag'
                            >
                                {tag}
                        </span>)
                }
            </div>
            <div className='flex flex-col gap-1'>
                {
                    text.map((content, index) => <span key={index} className='text-alura-200 dark:text-gray-400 line-clamp-2 sm:line-clamp-none'>{content}</span>)
                }
            </div>
            {image && <img className='sm:p-4 ' src={image} />}
            {image && alt && <span className='sr-only'>{alt}</span>}
        </div>
    )
}