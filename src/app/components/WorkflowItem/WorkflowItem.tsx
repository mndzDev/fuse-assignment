 import Bellv2Icon from '../Icons/Bellv2';
import ConditionIcon from '../Icons/Condition';
import DraggableIcon from '../Icons/Draggable';
import EmailIcon from '../Icons/Email';
import SMSIcon from '../Icons/Sms';
import './workflowitem.scss';

interface WorkflowItemProps {
    type: 'EMAIL' | 'SMS' | 'PUSH' | 'CONDITION';
    editable?: boolean;
    draggable?: boolean;
}

export const WorkFlowItem = ({type}: WorkflowItemProps) => {
  
    const getIcon = () => {
        switch(type){
            case 'EMAIL':
                return <EmailIcon />;
            case 'SMS':
                return <SMSIcon />;
            case 'PUSH':
                return <Bellv2Icon color='#7F56D9' />;
            case 'CONDITION':
                return <ConditionIcon />;
            default:
                return '';
        }
    }

    const getLabel = () =>{
        switch(type){
            case 'EMAIL':
                return 'Email';
            case 'SMS':
                return 'SMS';
            case 'PUSH':
                return 'Push Notification';
            case 'CONDITION':
                return 'Condition';
            default:
                return '';
        }
    }

    return (
        <div className="workflow-item flex border border-gray-200 rounded-md bg-base-white">
            <div>
                {getIcon()}
            </div>
            
            <span className='text-gray-700 font-semibold text-base grow'>
                {
                    getLabel()
                }
            </span>
            <div>
                <DraggableIcon/>
            </div>
        </div>
    )
}