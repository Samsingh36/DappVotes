import { globalActions } from '@/store/globalSlices'
import { RootState } from '@/utils/types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Banner = () => {
  const dispatch = useDispatch()
  const { setCreateModal } = globalActions
  

  
  return (
    <main className="mx-auto text-center space-y-8">
      <h1 className="text-[45px] font-[600px] text-center leading-none">Vote Without Rigging</h1>
      <p className="text-[16px] font-[500px] text-center">
      <span className="text-white">Ensuring Integrity in Every Vote: Blockchain Innovation</span> 

      </p>

      <button
        className="text-black h-[45px] w-[148px] rounded-full transition-all duration-300
        border border-gray-400 bg-white hover:bg-opacity-20 hover:text-white"
        onClick={() => dispatch(setCreateModal('scale-100'))}
      >
        Create Poll
      </button>
    </main>
  )
}

export default Banner
