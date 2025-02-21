import React from 'react'
import LG_Sinarmas_Logo_Vector from '../assets/icons/LG_Sinarmas_Logo_Vector.svg';


const Footer: React.FC = () => {
    return (
        <footer id='footer' className='px-[28px] md:px-[3vw] py-[8vh]'>
            <div className='flex flex-col gap-5'>
                <img src={LG_Sinarmas_Logo_Vector} alt='LG Sinarmas' className='w-50 md:w-[18vw]' />
                <hr />
                <div>
                    <p>
                        Sinar Mas Land Plaza, Tower II, 3rd Floor, Jl. M.H. Thamrin No.51, Jakarta 10350, Indonesia
                    </p>
                    <p>
                        Copyright © PT. LG Sinarmas Technology Solutions. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer