
export default function AppCard(thumb,title,price,type){
  return(

    <div className="col-lg-2 col-md-4 col-6 mt-5 gx-5 ">
      <img src={thumb} className='d-flex align-self-stretch h-75 w-100' />
      <h1 className='cardTitle text-wrap'>{title}   </h1>
      <p className="comicPrice">{price}</p>
      <p className="comicType">{type}</p>
    </div>
  )
}