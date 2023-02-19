import { Link, useParams } from "react-router-dom"
import {FaLessThan} from "react-icons/fa"
import InternList from "./InternList";
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
            <p id="home"><Link to ="/">Home</Link> </p>
            <h1>Student Profile</h1>
            <div className="currnetIntern-info">
                <img src={currentIntern.img} alt="" id = "profile-img"/>
                <div className="currnetIntern-name">
                    <p>Name: {currentIntern.name}</p>
                    <p>Total Score: {currentIntern.totalScore}</p>
                </div>
            </div>

            <div className="currnetIntern-no container">
                <h4>Telephone:</h4>
                <p>08033099645</p>
            </div>

            <div className="currnetIntern-email container">
                <h4>Email:</h4>
                <p>{currentIntern.email}</p>
            </div>

            <div className="currnetIntern-track container">
                <h4>Track:</h4>
                <p>{currentIntern.track}</p>
            </div>

            <div className="currnetIntern-group container">
                <h4>Mentorship Group:</h4>
                <p>{currentIntern.group}</p>
            </div>
            

        </div>
    )
}

export default InternProfile
