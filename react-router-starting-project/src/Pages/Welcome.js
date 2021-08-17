import React from 'react'
import { NavLink, Route } from 'react-router-dom'

function Welcome() {
    return (
        <div>
            <h2>Welcome</h2>
            <ul>
                <li>
                    <NavLink to='/welcome/new-user'>newUser</NavLink>
                </li>
            </ul>
            <Route path="/welcome/new-user"><h2>Welcome New user</h2></Route>
        </div>
    )
}

export default Welcome
