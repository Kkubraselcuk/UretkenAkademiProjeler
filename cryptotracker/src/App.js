import React, { useState, useEffect } from "react";
import { Table} from 'react-bootstrap';

import './App.css';

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const fetchCoins = async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await res.json();
      setCoins(data);
    } catch (e) {
      alert("Api error");
    }
  };

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <>
        <h1>CRYPTO TRACKER</h1>
      <div className="tableContainer">
        <input
          type="text"
          id="search-input"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
        />

        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>Coin Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Change</th>
            </tr>
          </thead>

          <tbody className="overflow-scroll">
            {
              coins.filter((filtercoin) => {
                if (search === "") {
                  return filtercoin;
                } else if (filtercoin.name.toLowerCase().includes(search.toLowerCase())) {
                  return filtercoin;
                }
              }).map((coin) => (
                <>
                  <tr>
                    <td className="coinName"><img src={coin.image} alt={coin.name} width="15" />{coin.name}</td>
                    <td>{coin.symbol}</td>
                    <td>${coin.current_price}</td>
                    <td style={{ color: coin.price_change_percentage_24h.toFixed(2) < 0 ? "#ff0374" : "#06a847" }}>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                  </tr>
                </>
              ))
            }

          </tbody>
        </Table></div>
    </>
  );
};