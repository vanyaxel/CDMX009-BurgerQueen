import React from 'react';
import { Fragment } from 'react';
import Navbar from '../layout/Navbar';
import { useOrder } from '../orders/Orders';
import './admon.css';

function AllOrders() {
    const orders = useOrder();
    console.log('esto arroja el hook', orders);
    return (
        <Fragment>
            <Navbar />
            <div className='admon-bkg'>
                <div className='container'>
                {/*                 <Navbar />
 */}                        <h1 className='title-admin white-text'>Ordenes Totales</h1>

                <div>
                    <div class="input-field col s12">
                        <select>
                            <option value="" disabled selected>Filtrar ordenes:</option>
                            <option value="1">Mesero</option>
                            <option value="2">Fecha</option>
                        </select>
                    </div>
                </div>
                <div className='table-elements'>
                <div className='table-container'>
                    <table className='table-elements'>
                        <thead>
                            <tr className='header-table'>
                                <th className='title-table'>Fecha y hora</th>
                                <th className='title-table'>No. de orden</th>
                                <th className='title-table'>Mesero</th>
                                <th className='title-table'>Total</th>
                                <th className='title-table'>Orden</th>
                            </tr>
                        </thead>
                        {orders.map((order) =>

                            <tbody key={order.id}>
                                <tr>
                                    <td className='title-table'>{order.date}</td>
                                    <td className='title-table'>{order.id}</td>
                                    <td className='title-table'>Bren Carranco</td>
                                    <td className='title-table'>${order.total}.00</td>
                                    <td className='title-table'>
                                        <button className='btn-details-orders'>Detalles</button>
                                    </td>
                                </tr>
                            </tbody>
                        )}
                    </table>
                </div>
                </div>
                </div>
            </div>
        </Fragment>
    );
}


export default AllOrders;