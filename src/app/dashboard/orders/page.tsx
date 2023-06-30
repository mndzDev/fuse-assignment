import { Table } from '@/app/components/Table/Table';
import { Input } from '../../components/Input/Input';
import './styles.scss';
import { TableHeader } from '@/app/components/Table/TableHeader/TableHeader';
import ArrowDownIcon from '@/app/components/Icons/ArrowDown';
import { TableRow } from '@/app/components/Table/TableRow/TableRow';
import { Badge } from '@/app/components/Badge/Badge';
import { ActionButton } from '@/app/components/ActionButton/ActionButton';
import { UserInfo } from '@/app/components/UserInfo/UserInfo';


export default function Orders(){

  const tableheaderConstructor = [
    {
      checkbox: true,
      label: 'Invoice',
      icon: <ArrowDownIcon />
    },
    {
      checkbox: false,
      label: 'Date'
    },
    {
      checkbox: false,
      label: 'Status'
    },
    {
      checkbox: false,
      label: 'Customer'
    },
    {
      checkbox: false,
      label: 'Purchase'
    },
    {
      checkbox: false,
      label: ''
    },
  ]
  
  const tableHeader = <TableHeader cols={tableheaderConstructor}/>

  const tableBody = <TableRow>
    <td className='text-gray-900 font-medium'>
    INV-3066
    </td>
    <td className='text-gray-600 font-regular'>
    Jan 6, 2022
    </td>
    <td>
      <Badge type='Paid'/>
    </td>
    <td>
      <UserInfo avatarSize='sm' personalInfo={{firstName: 'Jose', lastName: 'Ruiz', email: 'email@mail.com'}}/>
    </td>
    <td className='text-gray-600 font-regular'>
      Monthly
    </td>
    <td>
      <div className='flex gap-x-3'>
      <ActionButton type='link' label='Archive'/>
      <ActionButton type='link' label='Download' color='#6941C6'/>
      </div>
    </td>
  </TableRow>

    return (
        <div className='orders-container w-full flex flex-col'>
          <div className='inputs flex'>
            <Input label='Search for order' type='search' width='360px' placeholder='Search'/>
            <Input label='Status' type='status_select'/>
            <Input label='Category' type='select'/>
            <Input label='Customer' type='select'/>
          </div>
          <div className='table-container'>
                <Table header={tableHeader} body={tableBody}/>
          </div>
        </div>
    )
}