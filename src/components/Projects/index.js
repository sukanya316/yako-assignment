import { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import {GoKebabHorizontal,GoDotFill} from 'react-icons/go'
import {RiArrowLeftSLine,RiArrowRightSLine} from 'react-icons/ri'
import './index.css'

const projectsList=[
    {
        id:0,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:1,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:2,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:3,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:4,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:5,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:6,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:7,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:8,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:9,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:10,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:11,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:12,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:13,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:14,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:15,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:16,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:17,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:18,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:19,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:20,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:21,
        imgUrl:'https://i.imgur.com/2XwHHag.png',
        title:'Glenmark',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:22,
        imgUrl:'https://i.imgur.com/OL3hvix.png',
        title:'Abbott',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    },
    {
        id:23,
        imgUrl:'https://i.imgur.com/tp2Qme8.png',
        title:'Patanjali',
        description:'Glenmark Pharmaceuticals climbs to #2 position for the respiratory segment in the Indian Pharmaceutical Market...',
        createAt:'12/10/2023',
        users:[
            "https://i.imgur.com/XGVPN71.png",
            "https://i.imgur.com/rOQeBRe.png",
            "https://i.imgur.com/fX2FNp3.png",
            "https://i.imgur.com/hHqm2Gb.png"
        ]
    }

]
const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }
const Projects=()=>{
    const [activePage,setActivePage]=useState(1)
    const [apiStatus,setApiStatus]=useState(apiStatusConstants.initial)
    const [filteredProjects,setFilteredProjects]=useState(projectsList.slice(0,10))
    console.log(projectsList)

    const getFilteredProjects=(currentPage)=>{
        console.log('fun',currentPage)
        setApiStatus(apiStatusConstants.inProgress)
        if(currentPage<=1){
            setFilteredProjects(projectsList.slice(0,10))
            setActivePage(1)
        }
        else if(currentPage===2){
            setFilteredProjects(projectsList.slice(10,20))
            setActivePage(2)
        }
        else{
            setFilteredProjects(projectsList.slice(20,projectsList.length))
            setActivePage(3)
        }
         setApiStatus(apiStatusConstants.success)
        
    }

    const renderLoader = () => (
        <div className='loader-container' >
          <ThreeDots color="#0b69ff" height="50" width="50" />
        </div>
      )

      const renderProjectsView=()=>(
        <ul className='project-items-contianer'>
        {
            filteredProjects.map(project=><li key={project.id} className='project-item'>
                    <img src={project.imgUrl} alt={project.title} className='project-img'/>
                    <div className='display-row justify-space-between' >
                        <h4 style={{color:'black'}}>{project.title}</h4>
                        <GoKebabHorizontal className='menu-icon'/>
                    </div>
                    <p style={{margin:'0'}}>{project.description}</p>
                    <div className='display-row justify-space-between'>
                        <p>
                            <GoDotFill style={{fill:'rgba(0, 186, 17, 1)',height:'12px'}}/>
                        {project.createAt}
                        </p>
                        <ul className='display-row user-profiles-container'>
                            {
                                project?.users?.map((user,index)=><li>
                                    <img src={user} alt={index} className='user-profile border-radius' />
                                </li>
                                )
                               
                            }
                             <li>
                                   <p className='user-profile plus-five' >+5</p> 
                            </li>
                        </ul>
                    </div>
            </li>)
        }
       </ul>
      )

    const renderSwitch=()=>{
        switch (apiStatus) {
            case apiStatusConstants.initial:
                return renderProjectsView()
            case apiStatusConstants.inProgress:
               return renderLoader()
            case apiStatusConstants.success:
                return renderProjectsView()
            default:
                return null;
    }
    }

    return(
        <div className='projects-container'>
           <div className='display-row justify-space-between'>
            <h3>Projects</h3>
                <button type='button' className='add-project-btn'> + Add Project</button>
           </div>
           {renderSwitch()}
           <div className='pagination-container'>
                <button type='button' className='pagination-btn ' onClick={()=>getFilteredProjects(activePage-1)}><RiArrowLeftSLine className='arrow-size'/></button>
                <button type='button' className={`pagination-btn ${activePage===1?'active-page':''}`} onClick={()=>getFilteredProjects(1)}>1</button>
                <button type='button' className={`pagination-btn ${activePage===2?'active-page':''}`} onClick={()=>getFilteredProjects(2)}>2</button>
                <button type='button' className={`pagination-btn ${activePage===3?'active-page':''}`} onClick={()=>getFilteredProjects(3)}>3</button>
                <button type='button'className='pagination-btn ' onClick={()=>getFilteredProjects(activePage+1)}><RiArrowRightSLine className='arrow-size'/></button>
           </div>
        </div>
    )
}


export default Projects