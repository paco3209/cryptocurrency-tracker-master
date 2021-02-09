import React from "react";
import NumberFormat from 'react-number-format';

const CoinData = ({ data }) => {
  const renderData = () => {
    if (data) {
      return (
        <div className="bg-white mt-3 p-2 rounded border row">
          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Captitalización de Mercado</span>
              <span><NumberFormat value={data.market_cap} displayType={'text'} thousandSeparator={true} prefix={'$ '} /> </span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Cantidad Total
              </span>
              <span><NumberFormat value={data.total_supply} displayType={'text'} thousandSeparator={true}/></span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Volumen Últimas 24hs</span>
              <span><NumberFormat value={data.total_volume}displayType={'text'} thousandSeparator={true} prefix={'$ '} /></span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Máximo Últimas 24hs</span>
              <span><NumberFormat value={data.high_24h} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></span>
            </div>
          </div>

          <div className="col-sm">
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">
                Acciones en Circulación
              </span>
              <span><NumberFormat value={data.circulating_supply} displayType={'text'} thousandSeparator={true}/></span>
            </div>
            <hr />
            <div className="d-flex flex-column">
              <span className="text-muted coin-data-category">Mínimo Últimas 24hs</span>
              <span><NumberFormat value={data.low_24h} displayType={'text'} thousandSeparator={true} prefix={'$ '} /></span>
            </div>
          </div>
        </div>
      );
    }
  };

  return <div>{renderData()}</div>;
};

export default CoinData;
