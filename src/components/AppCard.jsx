
export default function AppCard({img,title,price,type,key}){
  return(

    <div className="col-lg-2 col-md-4 col-6 mt-5 gx-5 " key={key}>
      <img src={img} className='d-flex align-self-stretch h-75 w-100' />
      <h1 className='cardTitle text-wrap'>{title}</h1>
      <p className="comicPrice text-light">{price}</p>
      <p className="comicType text-light">{type}</p>

    </div>
  )
}

/* <AppCard img={fumetto.thumb} title={fumetto.title} price={fumetto.price} type={fumetto.type} key={fumetto.id}/> */