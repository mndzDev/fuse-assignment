"use client";
import { Table } from '@/app/components/Table/Table';
import { Input } from '../../components/Input/Input';
import './styles.scss';
import { TableHeader } from '@/app/components/Table/TableHeader/TableHeader';
import ArrowDownIcon from '@/app/components/Icons/ArrowDown';
import { TableRow } from '@/app/components/Table/TableRow/TableRow';
import { Badge } from '@/app/components/Badge/Badge';
import { ActionButton } from '@/app/components/ActionButton/ActionButton';
import { UserInfo } from '@/app/components/UserInfo/UserInfo';
import { MOCK_DATA } from '../../../../MOCK_DATA';
import { useEffect, useState } from 'react';
import { Pagination } from '@/app/components/Pagination/Pagination';


export default function Orders(){

  const [tablePages, setTablePages] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(0);


  const splitArray = (array: any, size: number) => {
    let result = [];
    for (let i = 0; i < array.length; i += size) {
      let chunk = array.slice(i, i + size);
      result.push(chunk);
    }
    return result;
  };

  const dataPagination = () => {
    const chunks = splitArray(MOCK_DATA, 7);
    return chunks;
  }


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


  const tableBody = <>{tablePages && tablePages.length > 0 && tablePages[currentPage].map((item: any, index: number) => <TableRow key={index}>
  <td className='text-gray-900 font-medium'>
  INV-{item.invoice}
  </td>
  <td className='text-gray-600 font-regular'>
    {item.date}
  </td>
  <td>
    <Badge type={item.status as "Paid" | "Refunded" | "Cancelled"}/>
  </td>
  <td>
    <UserInfo avatarSize='md' avatar={item.avatar} personalInfo={{firstName: item.first_name, lastName: item.last_name, email: item.email}}/>
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
</TableRow>)}</>;


const handlePageChange = (selectedPage: any) => {
  setCurrentPage(selectedPage.selected);
};
  
  useEffect(() => {
    setTablePages(dataPagination());
  }, []);


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
                <div className='w-full mt-5'>
 <Pagination currentPage={currentPage} numberOfPages={tablePages.length} handlePageChange={handlePageChange}/>
                </div>
               
          </div>
        </div>
    )
}