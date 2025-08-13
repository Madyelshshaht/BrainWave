import React from 'react'
import { companyLogos } from '../../constants'

const CompanyLogos = ({ className }) => {
    return (
        <div className={className}>
            <h5 className='tagline mb-6 text-center text-[#FFFFFF]/50'>
                Helping people create beautiful content at
            </h5>
            <ul className='hidden lg:flex justify-center gap-2 flex-wrap'>
                {companyLogos.map((logo, idx) => (
                    <li key={idx} className='flex items-center justify-center   h-[8.5rem]'>
                        <img src={logo} alt="logo" width={134} height={28} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CompanyLogos