
import { FaCartShopping } from "react-icons/fa6";



export default function Navbar(){
    return (
      <header className="container d-flex align-items-center justify-content-between py-2 bg-secondary">
      <img className='logo-sm' src="#" alt="" />

      <button className='btn btn-login'>
          <div className='d-flex align-items-center justify-content-center'>
              <FaCartShopping className='me-2' size={25}/>
          </div>

      </button>
    </header>
    );
  }

    
