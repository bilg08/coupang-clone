import Rating from './Rating'
export const MoreProduct = ({text,products})=>{
    return (
        <div>
            <div>{text}</div>
            <div className='flex overflow-x-scroll scrollbar-hide'>{products.map(prod=>{
                return (<div
                    className={"relative border-none text-sm min-w-[75px] h-fit"}>
                    <img
                      alt=""
                      className="w-[80px] h-[80px]"
                      src={prod.image}
                    />
                    <h2
                      className={"truncate underline decoration-[1.5px] max-sm:text-footer decoration-blue-500"}>
                      {prod.name}
                    </h2>
                    <h2 className="font-bold max-sm:text-footer text-red-500">{prod.price} won</h2>
                    {prod.freeshipping && <p className='max-sm:text-footer'>FREE Shipping</p>}
                    <Rating rating={prod.rating}/>
                  </div>)
            })}</div>
        </div>
    )
}