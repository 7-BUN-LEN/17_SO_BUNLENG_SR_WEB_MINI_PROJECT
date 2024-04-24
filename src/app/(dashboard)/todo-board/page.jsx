import React from 'react'
import SidebarComponent from '@/components/SidebarComponent'
import NavbarComponent from '@/components/NavbarComponent'
import ListBoardComponentHeader from '@/components/ListBoardComponentHeader'
import TodoCardComponent from '@/components/TodoCardComponent'

const TodoBoard = () => {
  return (
    <main className='grid grid-cols-12'>
          <div className='col-span-3 p-2'>
          <SidebarComponent></SidebarComponent>
          </div>
          <div className='col-span-9 p-2'>
            <NavbarComponent></NavbarComponent>
          <div className='mt-10'>
              <div  >
                <ListBoardComponentHeader></ListBoardComponentHeader>
              </div>
              <div className='grid grid-cols-12 py-3 gap-5'>
                  <div className='col-span-3'>
                    <p className='border-b-2 border-yellow-400 uppercase text-lg font-bold p-5'>Todo</p>
                     
                  </div>
                  <div className='col-span-3 border-b-2 border-blue-400 uppercase text-lg font-bold p-5'>
                    <p>Working on</p>
                  </div>
                  <div className='col-span-3 border-b-2 border-orange-400 uppercase text-lg font-bold p-5'>
                    <p>Checking</p>
                  </div>
                  <div className='col-span-3 uppercase border-b-2 border-green-400 text-lg font-bold p-5'>
                    <p>Completed</p>
                  </div>
              </div>
          </div>
        <div>
      </div>
          </div>
</main>
  )
}

export default TodoBoard