import logo from '../assets/logo-text.png'
export const Footer = () => {
    
return (
    <>
       <div className="divider before:bg-gray-100 after:bg-gray-100 mb-4"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-2 mt-20">
            {/* part1 */}
            <div className='grid gap-2 w-100'>
                <img src={logo} alt="logo" />
                <p className='text-gray-500 text-[13px]'>Curated tools, technologies, and resources for developers building
                modern software.</p>
                <ul className='flex gap-2 text-[13px] text-[#475569 font-bold]'>
                    <li><a href="">Github</a></li>
                    <li><a href="">Twitter</a></li>
                    <li><a href="">LinkedIn</a></li>
                </ul>
            </div>
            {/* right side */}
            <div className='grid grid-cols-3'>
                {/* part2 */}
            <div className='grid gap-1'>
                <h4 className='font-bold text-[14px]'>PRODUCT</h4>
                <ul className='text-gray-500 text-[14px]'>
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                </ul>
            </div>
            {/* part3 */}
            <div className='grid gap-1'>
                <h4 className='font-bold text-[14px]'>COMPANY</h4>
                <ul className='text-gray-500 text-[14px]'>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
            </div>
            {/* part4 */}
              <div className='grid gap-1'>
                <h4 className='font-bold text-[14px]'>LEGAL</h4>
                <ul className='text-gray-500 text-[14px] mb-6'>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                </ul>
            </div>
            </div>
          <div className="divider w-7xl before:bg-gray-100 after:bg-gray-100 mb-4"></div>
        </div>
        <div className='max-w-7xl text-gray-500 mx-auto flex justify-between mb-4 mt-3'>
                <p>© 2026 Dev Stack. All rights reserved.</p>
                <ul className='flex gap-2 '>
                    <li>Privacy</li>
                    <li>Terms</li>
                </ul>
            </div>
        </>
    )
}