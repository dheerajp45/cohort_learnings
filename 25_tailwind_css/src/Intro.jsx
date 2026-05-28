function Intro(){
    return <div>
  <h1 className="text-5xl text-red-500">
  Hello
  </h1>
  <br />
  {/* <div style={{
    display:"flex",
    justifyContent:"space-around"
  }}> */}
  {/* <div className='flex justify-around'> */}
   <div className=' grid
    sm:grid-cols-8 
     grid-cols-1 ' >
    <div className='bg-red-500 col-span-3'>
        first div
    </div>
    <div className='bg-yellow-400 col-span-3'>
        second div
    </div> 
    <div className='bg-green-600 col-span-2'>
        third div
    </div>
  </div>
{/* <div className='sm:bg-blue-300 bg-red-300'>
hi
</div> */}
</div>
}

export {Intro}