import './style.css'
import {FiMoreHorizontal} from 'react-icons/fi'

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
        </>
    )
}