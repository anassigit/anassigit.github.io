import React from 'react'

const Footer: React.FC = () => {
    return (
        <footer id='footer' className='px-[31px] md:px-[62px]'>
            <p>&copy; {new Date().getFullYear()} Test Footer</p>
        </footer>
    )
}

export default Footer