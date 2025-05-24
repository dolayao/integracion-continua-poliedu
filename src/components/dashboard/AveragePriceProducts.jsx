

const AveragePriceProducts = (props) => {
    const data = props;
  
    const sum = data.dataProducts.reduce((accumulator, item) => accumulator + item.price, 0);
    const average = Math.round((sum / data.dataProducts.length)*100)/100;

  

  return (
    <div className='averagePrice'>
      <p className='text'>📊{average}</p>
    </div>
  )
}

export default AveragePriceProducts
