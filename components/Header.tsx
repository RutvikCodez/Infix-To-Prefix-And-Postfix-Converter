import React from 'react'

const Header = () => {
  return (
    <header className='px-8 py-3 max-md:px-4 bg-black text-white'>
        <nav className='flex justify-between items-center'>
            <h4 className='font-bold text-xl max-md:text-lg'>
                <span>{"< > "}</span>
                Notation Converter
                </h4>
            <button className='bg-white text-black px-8 py-2 rounded max-md:hidden'>Get Started</button>
        </nav>
    </header>
  )
}

export default Header