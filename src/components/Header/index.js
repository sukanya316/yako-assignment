import {IoNotificationsOutline,IoSettingsOutline} from 'react-icons/io5'

import './index.css'

const Header=()=>{

    return(
        <div className='header-container'>
            <IoNotificationsOutline className='notification-icon'/>
            <IoSettingsOutline className='settings-icon'/>
            <img src="https://i.imgur.com/7oI2oBi.png" alt="header-logo" className='header-logo'/>
        </div>
    )
}
export default Header