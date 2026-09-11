import logo from '../assets/logo-text.png'

export const Nav = () => {
    
    return (
        <div className="lg:w-7xl container mx-auto flex justify-between p-4 ">
            <img className='h-10 w-35' src={logo} alt="logo" />
            <ul className='flex justify-between gap-4'>
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='flex justify-between gap-4 text-center'>
                <button className=" border-none">Sign in</button>
                <button className="btn btn-active btn-secondary rounded-[50px]">Sign up</button>
            </div>
        </div>
    )
}