import { WorkFlowItem } from "@/app/components/WorkflowItem/WorkflowItem"
import './cartrecovery.scss';
import Draggable, {DraggableCore} from 'react-draggable';

export const CartRecovery = () => {
    return (
        <div className="flex flex-row justify-between mt-8 w-full gap-x-16 h-100 overflow-y-auto overflow-x-hidden">
                <div className='workflow-items flex flex-col gap-y-4'>
                    <WorkFlowItem type='EMAIL'/>
                    <WorkFlowItem type='SMS'/>
                    <WorkFlowItem type='PUSH'/>
                    <WorkFlowItem type='CONDITION'/>
                </div>
                <div className='workflow-playground border border-gray-200 w-full rounded-md'>
                <Draggable>
                    <div>
                        <WorkFlowItem type="EMAIL"/>
                    </div>
                </Draggable>
                </div>
            </div>
    )
}