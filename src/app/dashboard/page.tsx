import { ActionButton } from "../components/ActionButton/ActionButton";
import { Breadcrumbs } from "../components/Breadcrumbs/Breadcrumbs";
import { Header } from "../components/Header/Header";
import DownloadIcon from "../components/Icons/Download";
import NavBar from "../components/NavBar/NavBar";
import { Tab } from "../components/Tab/Tab";
import  './styles.scss';

export default function Dashboard(){
    const tabs = [
        {
            label: 'Overview',
            active: false
        },
        {
            label: 'Notifications',
            active: false
        },
        {
            label: 'Analytics',
            active: false
        },
        {
            label: 'Saved reports',
            active: false
        },
        {
            label: 'Orders',
            active: true
        },
        {
            label: 'User reports',
            active: false
        },
        {
            label: 'Manage notifications',
            active: false
        },
    ]

    const pages = [
        {
            link: '',
            name: 'Dashboard',
            current: false
        },
        {
            link: '',
            name: 'Orders',
            current: true
        },
    ]
   
    const downloadButton = 
        <ActionButton label="Download all" type="full" icon={<DownloadIcon/>  }/>
    

    return (
        <>
            <NavBar/>
            <Header title="Orders" breadcrumbPages={pages} button={downloadButton}/>
            <div className="divider w-full border-b border-gray-200"></div>
            {/* <div className="flex flex-col tabs">
                { tabs.map((tab, i) => (
                    <Tab key={i} label={tab.label} active={tab.active}/>
                )) }
            </div>
            <Breadcrumbs pages={pages}/> */}
        </>
    )
}