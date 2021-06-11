import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./components/Coin/Coin";
import Search from "./components/Search/Search";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => alert("Hata!"));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <Search handleChange={handleChange} />
      <div class="container">
        <div class="row">
          {filteredCoins.map((coin) => {
            return (
              <div  style={{display:'flex', justifyContent:'center'}}  class="col-sm col-md-12 col-lg-6">
                <Coin
                  key={coin.id}
                  name={coin.name}
                  image={coin.image}
                  symbol={coin.symbol}
                  marketcap={coin.market_cap}
                  price={coin.current_price}
                  priceChange={coin.price_change_percentage_24h}
                  volume={coin.total_volume}
                  low_24h={coin.low_24h}
                  high_24h={coin.high_24h}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
