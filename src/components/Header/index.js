import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {FiHeart} from 'react-icons/fi'

import './style.css'

export function Header() {
    return (
        <header className='header'>

        <div className='container'>

            <img className='logo' src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png' alt='logo' />

            <div className='input-fake'>
                <AiOutlineSearch color='#8e8e8e'/>
                <input placeholder='Pesquisar'/>
            </div>

            <div className='icons'>

                <div><AiFillHome size={24} /></div>

                <div><RiMessengerLine size={24} /></div>

                <div><BsPlusSquare size={24}/></div>

                <div><MdOutlineExplore size={24} /></div>
                
                <div><FiHeart size={24} /></div>

                <img className="img-user" src="https://github.com/evanilsonpg.png" />

            </div>

        </div>

        </header>
    )
}