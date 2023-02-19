import { useState } from "react"
import {FaUser, FaStar, FaSubway} from "react-icons/fa"
import {BsFillFileSpreadsheetFill} from "react-icons/bs"
import {AiOutlineMail} from "react-icons/ai"
import { Link } from "react-router-dom"



function InternList({interns}) {
    
    return (
        <div>
            <table id = "intern-list">
                <thead>
                    <tr>
                        <th>
                            <div className = "thead">
                                <FaStar />
                                <p>Rank</p> 
                            </div>
                        </th>
                        <th className= "intern-names" >
                            <div className = "thead">
                                <FaUser />
                                <p>Name</p>
                            </div>
                        </th>
                        <th>
                            <div className = "thead">
                                <BsFillFileSpreadsheetFill />
                                <p>Total Score</p> 
                            </div>
                        </th>
                        <th>
                            <div className = "thead">
                                <FaSubway />
                                <p>Track</p>
                            </div>
                        </th>
                        <th>
                            <div className="thead">
                                <AiOutlineMail />
                                <p>Email</p>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {interns.map((intern, index) => (
                        <tr key = {intern.id}  >
                            <td>{index +1}</td>
                            <td>
                                <div className="person">
                                    <img src={intern.img} alt="" id="intern-img" /> 
                                    <p>{intern.name}</p>
                                </div>
                               
                            </td>
                            <td>{intern.totalScore}</td>
                            <td >
                                <div className = {`intern-track ${intern.track === "Frontend" ? "frontend" : ""} ${intern.track === "Web3" ? "web3" : ""} ${intern.track === "Backend" ? "backend" : ""}`}>
                                    {intern.track}
                                </div>
                                
                            </td>
                            <td>{intern.email}</td>
                            <td><Link to = {`/profile/${intern.id}`}>See details</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default InternList

