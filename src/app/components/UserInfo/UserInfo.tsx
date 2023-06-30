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
        return avatarSize == 'md' ? '24px' : '32px';
    }
    
    const getInitials = () => {
        const initials = `${personalInfo?.firstName.substring(0,1)}${personalInfo?.lastName.substring(0,1)}`;
        return initials;
    }
    
    
    return (<div>
        <div className='avatar flex items-center justify-center bg-gray-200 text-gray-600 text-sm font-semibold' style={{width: getSize(), height: getSize()}}>
            {
                avatar ? <img src={avatar} alt="User Avatar" /> : <div>{personalInfo && getInitials()}</div>
            }

        </div>{
            personalInfo && (<div className='info'>
            <p>{personalInfo?.firstName} {personalInfo?.lastName}</p>
            <p>{personalInfo?.email}</p>
        </div>)
        }
        
    </div>)
    

}   
