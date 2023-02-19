import { useState } from "react"

function Header({interns, order, changeList}) {
    

    return (
        <div className = "header">
            <h2>Internify</h2>
            <div className = "search">
                <label >Sort by:</label> 
                <select onChange = {changeList} defaultValue ={order} className = "search-bar">
                    <option value="asc">Highest to Lowest Score</option>
                    <option value="desc">Lowest to Highest Score</option>
                 </select>
            </div>
            
        </div>
    )
}

export default Header
