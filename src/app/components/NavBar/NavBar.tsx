import { ActionButton } from "../ActionButton/ActionButton";
import { NavButton } from "../NavButton/NavButton";
import './navbar.scss';
import SvgComponent from "../Icons/Zap";
import SettingsIcon from "../Icons/Settings";
import BellIcon from "../Icons/Bell";
import { UserInfo } from "../UserInfo/UserInfo";

interface NavBarProps {
    onClickHandler(page: string): void;
    currentPage: string;
}

export const NavBar = ({onClickHandler, currentPage}: NavBarProps) => {
    const avatarImg = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80';
    const navlinks = [
        {
            label: 'Home',
            link: '',
            isActive: currentPage == 'Home',
        },
        {
            label: 'Dashboard',
            link: '',
            isActive: currentPage == 'Dashboard',
        },
        {
            label: 'Projects',
            link: '',
            isActive: currentPage == 'Projects',
        },
        {
            label: 'Workflow',
            link: '',
            isActive: currentPage == 'Workflow',
        },
        {
            label: 'Reporting',
            link: '',
            isActive: currentPage == 'Reporting',
        }, 
        {
            label: 'Users',
            link: '',
            isActive: currentPage == 'Users',
        }
    ]

    const handlePageSelection = (page: string) => {
        console.log(page);
        onClickHandler(page);
     
    }

    return (
        <nav className="flex items-center bg-base-white border-b border-gray-200 justify-between px-20">
            <div>
                 {navlinks.map((item, index) => (
                <NavButton key={index} label={item.label} active={item.isActive} onClickHandler={()=>handlePageSelection(item.label)}/>
            ))}
            </div>
           <div className="flex items-center gap-x-4">
                <ActionButton label='Upgrade now' type="full" icon={ <SvgComponent color="#344054"/>}/>
            <div className="flex">
                <ActionButton type="simple" icon={<SettingsIcon color="#667085"/>}/>
                <ActionButton type="simple" icon={<BellIcon color="#667085"/>}/>
            </div>
           
           <UserInfo avatar={avatarImg} avatarSize="md"/>
           </div>
           
        </nav>
    )
}