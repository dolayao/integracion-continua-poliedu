
const TotalProducts = (props) => {
  
  const data = props;
  const TotalProductos = data.dataProducts.length;
  

  return (
    <div className='totalProducts'>
      <p className='text'>🛒{TotalProductos}</p>
    </div>
  )
}

export default TotalProducts
