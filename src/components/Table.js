import React, { useState, useEffect } from 'react';

import './Table.css';

const Table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then((response) => {
            setData(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <table className="table">
            <thead>
                <tr><th className="table-header">Name</th></tr>
                <tr><th className="table-header">Population</th></tr>
                <tr><th className="table-header">Region</th></tr>
                <tr><th className="table-header">Timezones</th></tr>
            </thead>
            <tbody>
                {data.map((row, idx) => {
                    return (
                        <tr key={idx}>
                        <td className="cell">{row.name}</td>
                        <td className="cell">{row.population}</td>
                        <td className="cell">{row.region}</td>
                        <td className="cell">{row.timezones}</td>
                        </tr>);
                })}
            </tbody>
        </table>
    )
}

export default Table;