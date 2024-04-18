import { NavLink } from 'react-router-dom'
import './Link.css'
const Links = ({label, to, icon})=>{

    return(
        <>
        <NavLink id="link" to ={to}>
            <span>{icon}</span>
            <span id='red'>{label}</span>

        </NavLink>
        </>
    )
}
export default Links