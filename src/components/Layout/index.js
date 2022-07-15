import './style.css'

import { Story } from '../Story'
import { Post } from '../Post'
import{ Suggestion } from '../Suggestion'


export function Layout() {
    return(
        <>

            <div className='MainGrid'>

              <div className='first-column' style={{gridArea: 'firstColumn'}}>

                <div className='box' style={{margin: '30px 0'}}>

                   < Story />

                </div>

                <div className='box'>

                    < Post />

                </div> 

                </div>

              
             <div className='suggestionBox' style={{gridArea: 'secondColumn'}}>

                < Suggestion />

             </div>

            </div>

        </>
    )
}