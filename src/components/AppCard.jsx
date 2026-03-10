export function AppCard(){
  return(

    <div className="col-lg-2 col-md-4 col-6 mt-5 gx-5 " key={index}>
      
      <img src={fumetto.thumb} className='d-flex align-self-stretch h-75 w-100' />
      <h1 className='cardTitle text-wrap'>{fumetto.title}   </h1>
      <p className="comicPrice">{fumetto.price}</p>
      <p className="comicType">{fummetto.type}</p>
    </div>
  )
}