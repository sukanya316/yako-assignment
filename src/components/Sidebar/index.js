import { useState,useRef } from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import './index.css'

const Sidebar=()=>{
    const [sidebarOpen,setSidebarOpen]=useState(false)
    const windowWidth=useRef(window.innerWidth)
    console.log(sidebarOpen,windowWidth.current)
    return(
        <div className='display-column sidebar-container'>
         <div className='sidebar-logo-contianer'> 
            <img  className='sidebar-logo'  src="https://i.imgur.com/StHGiof.png" alt="sidebar-img"/>
            <AiOutlineMenu className='sidebar-menu' onClick={()=>setSidebarOpen(!sidebarOpen)}/>
         </div>
         {
        (windowWidth.current<=580 && sidebarOpen) ?
          <div className={`sidebar-userdata-container `}>
            <ul className='display-column sidebar-ul-container' >
            <li  className='display-row sidebar-item'> <img src="https://i.imgur.com/YKKQZ3h.png" alt="home" className='sidebar-icon'/><span >Dashboard</span></li>
            <li className='display-row projects-element'><img  src="https://i.imgur.com/8dNx0MF.png" alt="project-icon" className='sidebar-icon'/> Projects</li>
            <li  className='display-row sidebar-item'><img src="https://i.imgur.com/nPR1hbb.png" alt="dashboard-icon" className='sidebar-icon'/> Team</li>
            <li  className='display-row sidebar-item'><img src="https://i.imgur.com/cHKZkK8.png" alt="user" className='sidebar-icon'/> Clients</li>
            <li  className='display-row sidebar-item'><img src="https://i.imgur.com/UoWvqfN.png" alt="settings-icon" className='sidebar-icon'/> Settings</li>
            <li className='sidebar-item new-project-element'>+ New Project</li>
            </ul>
            <div className='display-row justify-space-between profile-container' >
                <div className='display-row profile-details-container'>
                    <img src="https://i.imgur.com/7oI2oBi.png" alt="footer-img" className='profile-icon'/>
                    <div className='name-position-container'>
                    <h4 >Varun Kabul</h4>
                    <p style={{color:'#909090',marginTop:'-15px'}}>Senior</p>
                    </div>
                </div>
                <img src="https://i.imgur.com/s7RAmg8.png" alt="logout" className='logout-icon'/>
            </div>
            </div>
            : null
         }

        <div className={`sidebar-userdata-container `} id="display-on-large">
            <ul className='display-column sidebar-ul-container' >
            <li  className='display-row sidebar-item'> <img src="https://i.imgur.com/YKKQZ3h.png" alt="home" className='sidebar-icon'/><span >Dashboard</span></li>
            <li className='display-row projects-element'><img  src="https://i.imgur.com/8dNx0MF.png" alt="project-icon" className='sidebar-icon'/> Projects</li>
            <li  className='display-row sidebar-item'><img src="https://i.imgur.com/nPR1hbb.png" alt="dashboard-icon" className='sidebar-icon'/> Team</li>
            <li  className='display-row sidebar-item'><img src="https://i.imgur.com/cHKZkK8.png" alt="user" className='sidebar-icon'/> Clients</li>
            <li  className='display-row sidebar-item'><img src="https://i.imgur.com/UoWvqfN.png" alt="settings-icon" className='sidebar-icon'/> Settings</li>
            <li className='sidebar-item new-project-element'>+ New Project</li>
            </ul>
            <div className='display-row justify-space-between profile-container' >
                <div className='display-row profile-details-container'>
                    <img src="https://i.imgur.com/7oI2oBi.png" alt="footer-img" className='profile-icon'/>
                    <div className='name-position-container'>
                    <h4 >Varun Kabul</h4>
                    <p style={{color:'#909090',marginTop:'-15px'}}>Senior</p>
                    </div>
                </div>
                <img src="https://i.imgur.com/s7RAmg8.png" alt="logout" className='logout-icon'/>
            </div>
            </div>
        
        </div>
    )
}

export default Sidebar