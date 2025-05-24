
const TotalOrders = (props) => {
    const data = props;
    const total = data.dataCart.length;
  return (
    <div className='totalOrders'>
      <p className='text'>🚚{total}</p>
    </div>
  )
}

export default TotalOrders
