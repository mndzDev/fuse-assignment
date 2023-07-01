import { ActionButton } from '../components/ActionButton/ActionButton';
import { Header } from '../components/Header/Header';
import DownloadIcon from '../components/Icons/Download';
import { CartRecovery } from './cart-recovery/CartRecovery';
import './styles.scss';

export default function Workflow(){

    const pages = [
        {
            link: '',
            name: 'Workflow',
            current: false
        },
        {
            link: '',
            name: 'Cart Recovery Workflow ',
            current: true
        },
    ]

    const downloadButton = 
        <ActionButton label="Download all" type="full" icon={<DownloadIcon/>  }/>
   
    return (
        <>
            <Header title='Cart Recovery Workflow' breadcrumbPages={pages} button={downloadButton}/>
            <div className="divider w-full border-b border-gray-200"></div>
            <CartRecovery/>
        </>
    )   }