// src/TradingViewChart.tsx
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export default function TradingViewChart() {
  return (
    <div style={{ height: "100%" }}>
      <AdvancedRealTimeChart
        theme="dark"
        autosize
        symbol="BINANCE:DOGEUSDT"
        interval="240"
        hide_side_toolbar={false}
        allow_symbol_change={true}
        save_image={false}
        details={true}
        hotlist={true}
        calendar={false}
      />
    </div>
  );
}
