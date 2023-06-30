import './userinfo.scss';

interface UserInfoProps {
    personalInfo?: {
        firstName: string;
        lastName: string;
        email: string;
    },
    avatar?: string;
    avatarSize?: 'sm' | 'md';
}                                                                                 

export const UserInfo = ({personalInfo, avatar, avatarSize}: UserInfoProps) => {

    const getSize = () => {
        return avatarSize == 'md' ? '32px' : '24px';
    }
    
    const getInitials = () => {
        const initials = `${personalInfo?.firstName.substring(0,1)}${personalInfo?.lastName.substring(0,1)}`;
        return initials;
    }
    
    
    return (<div className='flex gap-x-3 items-center'>
        <div className='avatar flex flex-row items-center justify-center bg-gray-200 text-gray-600 text-sm font-semibold' style={{width: getSize(), height: getSize()}}>
            {
                avatar ? <img src={avatar} alt="User Avatar" /> : <div>{personalInfo && getInitials()}</div>
            }

        </div>{
            personalInfo && (<div className='info flex flex-col'>
            <span className='text-sm text-gray-900 font-regural'>{personalInfo?.firstName} {personalInfo?.lastName}</span>
            <span className='text-sm text-gray-600 font-regural'>{personalInfo?.email}</span>
        </div>)
        }
        
    </div>)
    

}   
