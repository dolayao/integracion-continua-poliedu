import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';

const TotalIncome = (props) => {
  const [totalIngresos, setTotalIngresos] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const data = props;

  useEffect(() => {
    const obtenerPrecioProducto = async (productId) => {
      try {
        const response = await axios.get(`${data.data.API}/products/${productId}`);
        const producto = response.data;
        return producto.price;
      } catch (error) {
        alert(`Error al obtener el precio del producto ${productId}: ${error.message}`);
        return 0;
      }
    };

    const calcularTotalIngresos = async () => {
      try {
        const response = await axios.get(`${data.data.API}/carts`);
        const carritos = response.data;
        let totalIngresos = 0;
        for (const carrito of carritos) {
          let subtotal = 0;
          for (const producto of carrito.products) {
            const precio = await obtenerPrecioProducto(producto.productId);
            subtotal += precio * producto.quantity;
          }
          totalIngresos += subtotal;
        }
        setTotalIngresos(totalIngresos.toFixed(2));
        setIsLoading(false); // Set loading state to false once the data is loaded
      } catch (error) {
        alert(`Error al calcular el total de ingresos: ${error.message}`);
      }
    };

    calcularTotalIngresos();
  }, []);

  const LoadingDots = () => {
    const [dots, setDots] = useState('.');

    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prevDots) => (prevDots === '.' ? '..' : '.'));
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }, []);

    return <span>{dots}</span>;
  };

  return (
    <div className="totalIncome">
      {isLoading ? (
        <div className="loadingAnimation">
          <h1>💸Cargando<LoadingDots /></h1>
        </div>
      ) : (
        <p className='text'>💸{totalIngresos}</p>
      )}
    </div>
  );
};

export default TotalIncome;
