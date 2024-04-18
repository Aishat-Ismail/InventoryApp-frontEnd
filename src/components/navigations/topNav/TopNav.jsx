import './TopNav.css'
import Search from '../../../assets/Search.png'
import  Notification from '../../../assets/Notification.png'
import Avatar from '../../../assets/Avatar.png'

const TopNav =()=>{

    return(

        <>
        <div className='Top'>
        <div className='topDiv'>
            <div id='divOne'>
                <input type="text" placeholder='Search product, supplier, orders'/>

            </div>
            <div id='divTwo'>
                <img src={Notification} alt="bell" id='bell' />
                <img src= {Avatar} alt="avatar" id='avatar'/>

            </div>
        
        </div>

        </div>
       
        </>
    )
}
export default TopNav 