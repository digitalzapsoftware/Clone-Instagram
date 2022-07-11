import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat} from 'react-icons/bs'
import {FiSend} from 'react-icons/fi'
import {BsBookmark} from 'react-icons/bs'

export function Post () {
    return(
        <>
            <header>

                <div className='infos-post'>

                    <img src='https://github.com/maykbrito.png' alt='image' />

                    <p>maykbrito</p>

                </div>

                <div class="FiMore">
                    <FiMoreHorizontal />
                </div>

            </header> 

            <div className='img-post'>

                <img src='https://github.com/maykbrito.png' alt='img-post' />

            </div>

            <div className='footer-post'>

                <section className='engagements-post'>

                    <div className='icons-1'>

                        <div className='icon'>
                            <IoMdHeartEmpty size={23} />
                        </div>

                        <div className='icon'>
                            <BsChat size={20} />
                        </div>

                        <div className='icon'>
                            <FiSend size={20} />
                        </div>

                    </div>

                    <div className='icon'>
                        <BsBookmark size={20} />
                    </div>

                </section>

            </div>

        </>
    )
}