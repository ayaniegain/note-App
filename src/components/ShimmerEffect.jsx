import React from 'react'

function ShimmerEffect() {
  return (
    <>
    <div className="border border-blue-300 shadow rounded-md p-4 max-w-[600px] w-full mx-auto">
  <div className="animate-pulse flex space-x-4">
    <div className="flex-1 space-y-6 py-1">
      <div className="h-2 bg-slate-400 rounded"></div>
      <div className="space-y-3">
        <div className="h-2 bg-slate-400 rounded"></div>
        <div className="grid grid-cols-3 gap-4">
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
          <div className="h-2 bg-slate-400 rounded col-span-1"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default ShimmerEffect