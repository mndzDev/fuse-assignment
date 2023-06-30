import { ActionButton } from "../ActionButton/ActionButton";
import { NavButton } from "../NavButton/NavButton";
import './navbar.scss';
import SvgComponent from "../Icons/Zap";
import SettingsIcon from "../Icons/Settings";
import BellIcon from "../Icons/Bell";
import { UserInfo } from "../UserInfo/UserInfo";

export default function NavBar(){
    const avatarImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80';
    const navlinks = [
        {
            label: 'Home',
            link: '',
            isActive: false,
        },
        {
            label: 'Dashboard',
            link: '',
            isActive: true,
        },
        {
            label: 'Projects',
            link: '',
            isActive: false,
        },
        {
            label: 'Workflow',
            link: '',
            isActive: false,
        },
        {
            label: 'Reporting',
            link: '',
            isActive: false,
        }, 
        {
            label: 'Users',
            link: '',
            isActive: false,
        }
    ]

    return (
        <nav className="flex items-center bg-base-white border-b border-gray-200">
            {navlinks.map((item, index) => (
                <NavButton key={index} label={item.label} active={item.isActive}/>
            ))}
           <ActionButton label='Upgrade now' type="full" icon={ <SvgComponent color="#344054"/>}/>
           <ActionButton type="simple" icon={<SettingsIcon color="#667085"/>}/>
           <ActionButton type="simple" icon={<BellIcon color="#667085"/>}/>
           <UserInfo avatar={avatarImg} avatarSize="md"/>
        </nav>
    )
}