import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook , FaInstagram,FaLinkedin,FaGithub} from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

const Navigation = () => {
    const[toggle, setToggle]=useState(false)
    console.log(toggle)
  return (
    <div>
    <div className='mx-4 md:mx-10 lg:mx-20 px-2 md:px-4 lg:px-6 py-3 bg-blue-900 flex flex-row justify-between items-start'>
        <div className=' flex flex-col justify-between  md:flex-row gap-4 md:gap-16'>
        <div className=''>
          <h1>Binaya Limbu</h1>
        </div>
        <div className={` ${toggle?'flex flex-col justify-start items-center gap-4':'md:flex hidden  md:flex-row md:items-center   md:gap-6'}`}>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
            <Link to='/'>Home</Link>
        </div>
        </div>
        <div className='md:flex hidden md:flex-row md:justify-between md:items-center md:gap-6 '>
            <div>
            <a href="https://www.facebook.com/binayakdm"><FaFacebook /></a>
            </div>
            <div>
            <FaInstagram />
            </div>
            <div>
            <FaLinkedin />
            </div>
            <div>
                <a href="https://github.com/binayakedem"><FaGithub/></a>
            </div>

        </div>
        <div className='md:hidden'>
        <IoMenu  onClick={()=>setToggle(!toggle)}/>
        </div>
    </div>
    </div>
  )
}

export default Navigation