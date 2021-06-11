import React from "react";
import "./Coin.css";

const Coin = ({
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  marketcap,
  low_24h,
  high_24h,
}) => {
  return (
    <div className="card w-75 mb-4">
      <div className="row g-0">
        <div className="d-flex justify-content-center col-md-4">
          <img className="coin-image" src={image} alt="crypto" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <div className="title-row">
              <h3 className="card-title">{name}</h3>
              <h5 className="coin-symbol">{symbol}</h5>
            </div>
            <hr />
            <p className="card-text">
              <div className="second-row">
                <h5 className="coin-price">${price}</h5>
                {priceChange < 0 ? (
                  <h4 className="coin-percent red">
                    {priceChange.toFixed(2)}%
                  </h4>
                ) : (
                  <h4 className="coin-percent green">
                    {priceChange.toFixed(2)}%
                  </h4>
                )}
              </div>
              <p className="row-statistic">
                <span className="text-muted">Mkt Cap: </span>
                <span>${marketcap.toLocaleString()}</span>
              </p>
              <p className="row-statistic">
                <span className="text-muted">Volume: </span>
                <span>${volume.toLocaleString()}</span>
              </p>
              <div className="h24-row">
                <p>
                  <span className="text-muted">24H Low </span>
                  <span>{low_24h}</span>
                </p>
                <p>
                  <span className="text-muted">24H High </span>
                  <span>{high_24h}</span>
                </p>
              </div>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
