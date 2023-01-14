export const Cart = ()=>{
    return (
        <div className="container my-3">
            <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            Таны сагс
            </div>
            <div>
                <div className="flex items-center justify-between border border-gray-600 rounded-md mt-3 pl-2">
                    <input type='checkbox'/>
                    <img className="w-12 h-12" src="" alt="" />
                    <div className="w-[65vw]" >
                        <div>
                        <div>title</div>
                        <div> more detail</div>
                        </div>
                        <div className="flex justify-between">
                            <div>date and etc</div>
                            <div className="flex">
                            <div>Price</div>
                            <div>quantity</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}