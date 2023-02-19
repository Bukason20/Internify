import { Link, useParams } from "react-router-dom"
import {FaRoad} from "react-icons/fa"
import {BsTelephoneFill, BsFillPersonFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
import {GiTeacher} from "react-icons/gi"
import{useEffect, useState} from 'react'

function InternProfile({interns}) {

    const { id } = useParams();
    const [currentIntern, setCurrentIntern] = useState({})
    const [currentRank, setCurrentRank] = useState()



    useEffect(() => {
        interns.filter((intern, index)=> {
            if(intern.id === Number(id)){
                setCurrentIntern(intern)
                setCurrentRank(index)
            }
        })
    },[])


    console.log(currentIntern)
    return (
        <div className = "profile-wrapper">
            <Link to ="/" id = "home">Back</Link> 
            <h1>Intern Profile</h1>
            <div className = "currentIntern container flex">
                <div className="currentIntern-id">
                    <img src={currentIntern.img} alt="" id = "profile-img"/>
                    <div>
                        <p>Name: {currentIntern.name}</p>
                        <p>Total Score: {currentIntern.totalScore}</p>
                    </div>
                    
                </div>

                <BsFillPersonFill size = "20" />
            </div>

            <div className="currnetIntern-no container flex">
                <div>
                    <h4>Telephone:</h4>
                    <p>{currentIntern.phone}</p>
                </div>
                <BsTelephoneFill size = "20"/>
                
            </div>

            <div className="currnetIntern-email container flex">
                <div>
                    <h4>Email:</h4>
                    <p>{currentIntern.email}</p>
                </div>
                <AiFillMail size = "20"/>
            </div>

            <div className="currnetIntern-track container flex">
                <div>
                    <h4>Track:</h4>
                    <p>{currentIntern.track}</p>
                </div>
                <FaRoad size = "20"/>
                
            </div>

            <div className="currnetIntern-group container flex">
                <div>
                    <h4>Mentorship Group:</h4>
                    <p>{currentIntern.group}</p>
                </div>
                <GiTeacher size = "25" />
            </div>
            

        </div>
    )
}

export default InternProfile
