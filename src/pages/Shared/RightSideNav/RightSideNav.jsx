import { FaGoogle ,  FaFacebook, FaTwitter, FaInstagram  } from 'react-icons/fa';
import { IoLogoGithub } from "react-icons/io5";

import qZone1 from "../../../assets/class.png"
import qZone2 from "../../../assets/swimming.png"
import qZone3 from "../../../assets/playground.png"




const RightSideNav = () => {
    return (
        <div>
            <div className='p-4 space-y-3 mb-6' >
                <h2 className='text-3xl text-center font-bold ' >Login With</h2>
                <button className="btn w-full btn-outline">
                    <FaGoogle> </FaGoogle>
               
            Google
  
            </button>
                <button className="btn w-full btn-outline">
                <IoLogoGithub />
               
            Github
  
            </button>
            </div>

             {/* Find section */}


            <div className='p-4  mb-6' >
                <h2 className='text-3xl text-center font-bold mb-4 ' >Find Us </h2>
              
                <a className='p-3 flex text-lg items-center rounded-t-lg border font-bold ' href="  "> <FaFacebook className='mr-3' />Facebook </a>
                <a className='p-3 flex text-lg items-center border-x font-bold ' href="  "> <FaTwitter className='mr-2' />Twiter </a>
                <a className='p-3 flex text-lg items-center border rounded-b-lg font-bold ' href="  "> <FaInstagram className='mr-2' />Instragram </a>
            </div>

            {/*Q-Zone */}


            <div className='p-4 space-y-3 mb-6' >
                <h2 className='text-3xl text-center font-bold ' >Q-Zone</h2>
                 <img src={qZone1} alt="" />
                 <img src={qZone2} alt="" />
                 <img src={qZone3} alt="" />

                 
            </div>
        </div>
    );
};

export default RightSideNav;