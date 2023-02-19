import { useEffect, useState } from "react"
import {BrowserRouter as  Router, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import InternData from "./components/InternData"
import InternList from "./components/InternList"
import InternProfile from "./components/InternProfile"

function App() {
    let [interns, setInterns] = useState(InternData)
    const [order, setOrder] = useState("asc")

    const changeList = (e) => {
        if(e.target.value === "asc"){
            setOrder("asc")
            let newList = interns.sort((a,b) => {
                return b.totalScore - a.totalScore
            } )

            setInterns(newList)
        }else if(e.target.value === "desc"){
            setOrder("desc")
            let newList = interns.sort((a,b) => {
                return a.totalScore - b.totalScore
            } )
            setInterns(newList) 
        }
    }


    
    return (
        <Router>
            <div className = "app-container">
                <Switch>
                    <Route exact path = "/">
                    <Header interns = {interns} changeList = {changeList} order = {order}/>
                    <InternList interns = {interns}/>
                    </Route>

                    <Route path = "/profile/:id">
                        <InternProfile interns = {interns} />
                    </Route>
                </Switch>
            </div>
        </Router>
        
    )
}

export default App
