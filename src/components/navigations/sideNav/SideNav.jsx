import Links from "../../link/Link"
import './sideNav.css'
import home from '../../../assets/home.png'
import Inventory from '../../../assets/Inventory.png'
import Report from '../../../assets/Report.png'
import Suppliers from '../../../assets/Suppliers.png'
import Order from '../../../assets/Order.png'
import Manage from '../../../assets/Manage.png'
import Settings from '../../../assets/Settings.png'
import LogOut from '../../../assets/LogOut.png'
import Top from '../../../assets/Top.png'



const SideNav = () => {

    const path = [
        { to: '/', label: 'Dashboard', icon: <img src={home} alt="dash" id="iconss" /> },
        { to: '/inventory', label: 'Inventory', icon: <img src={Inventory} alt="invent" id="iconss" /> },
        { to: '/reports', label: 'Reports', icon: <img src={Report} alt="report"id="iconss"  /> },
        { to: '/suppliers', label: 'Suppliers', icon: <img src={Suppliers} alt="supply" id="iconss"/> },
        { to: '/manage', label: 'Manage Orders', icon: <img src={Manage} alt="manage"id="iconss" /> },
        { to: '/orders', label: 'Orders', icon: <img src={Order} alt="order" id="iconss" /> },
        { to: '/settings', label: 'Settings', icon: <img src={Settings} alt="set" id="iconss"/> },
        { to: '/logOut', label: 'LogOut', icon: <img src={LogOut} alt="log" id="iconss" /> },

    ]


    return (

        <>
            <div id="links">
                <div id="kanban">
                    <img src= {Top} alt="top"  id="topLogo"/>
                </div>
                <div id="top-links">
                    <Links to={'/' } label={'Dashboard'} icon={ <img src={home} alt="dash" id="iconss"/>} id='size'></Links>
                    <Links to={'/inventory' } label={'Inventory'} icon={<img src={Inventory} alt="invent" id="iconss" />}></Links>
                    <Links to={'/reports' } label={'Reports'} icon={<img src={Report} alt="report" id="iconss"/>} id='size'></Links>
                    <Links to={'/suppliers' } label={'Suppliers'} icon={<img src={Suppliers} alt="supply" id="iconss"/>}></Links>
                    <Links to={'/manage' } label={'Manage Orders'} icon={<img src={Manage} alt="manage"id="iconss" />}></Links>
                    <Links to={'/orders' } label={'Orders'} icon={<img src={Order} alt="order" id="iconss" /> }></Links>

                </div>
                <div id="bot-links">
                    <Links to={'/settings' } label={'Settings'} icon={ <img src={Settings} alt="set" id="iconss"/>}></Links>
                    <Links to={'/logOut' } label={'LogOut'} icon={<img src={LogOut} alt="log" id="iconss" />}></Links>

                </div>


            </div>
        </>

    )
}
export default SideNav