import React from 'react'
import SidebarComponent from '@/components/SidebarComponent'
import NavbarComponent from '@/components/NavbarComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import MonthlyStatisticsComponent from '@/components/MonthlyStatisticsComponent'
import Image from 'next/image'

const Todolist = () => {
  return (
    <main className='grid grid-cols-12'>
        <div className='col-span-3 p-2'>
        <SidebarComponent></SidebarComponent>
        </div>
        <div className='col-span-9'>

          <div>
            <NavbarComponent></NavbarComponent>
          </div>
        
          <div className='mt-7 flex'>
              <div className='w-[80%] h-auto p-4'>
                  <ListBoardComponentHeader>
                  </ListBoardComponentHeader>
                  <div className='flex justify-center items-center mt-20'>
                    <Image src={"/assets/icons/welcom.webp"} width={400} height={400}/>
                  </div>
              </div>
              <div className='w-[20%] h-auto'>
                  <div className='p-2'>
                      <MonthlyStatisticsComponent></MonthlyStatisticsComponent>   
                  </div>
              </div>
          </div>
        </div>
</main>
  )
}

export default Todolist