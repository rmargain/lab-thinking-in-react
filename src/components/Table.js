import React, { Component } from 'react'


const Table = ({data}) => (
    <section>
        <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {
                data.length ?
                data.map((item, index) => (
                    <Content 
                    key={index} 
                    // opcion 1
                    name={item.name}
                    price={item.price}
                    stocked={item.stocked}
                    // Opcion 2
                    //{...item}
                    />))
                : "Loading"
            }
            </tbody>
            
        </table>
    </section>
);

const Content = ({name, price, stocked}) => {
    return (
        <tbody>
        <tr style={{backgroundColor: stocked ? "#fff" : "red"}}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
        </tbody>
    )
}

export default Table