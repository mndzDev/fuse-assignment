import { ActionButton } from "../components/ActionButton/ActionButton";
import { Header } from "../components/Header/Header";
import DownloadIcon from "../components/Icons/Download";
import { Tab } from "../components/Tab/Tab";
import Orders from "./orders/page";
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

            <Header title="Orders" breadcrumbPages={pages} button={downloadButton}/>
            <div className="divider w-full border-b border-gray-200"></div>
            <div className="flex flex-row justify-between mt-8 w-full gap-x-16 h-100 overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col tabs" style={{width: '167px'}}>
                { tabs.map((tab, i) => (
                    <Tab key={i} label={tab.label} active={tab.active}/>
                )) } </div>
               
                        <Orders/>
            </div>
           
           
        </>
    )
}