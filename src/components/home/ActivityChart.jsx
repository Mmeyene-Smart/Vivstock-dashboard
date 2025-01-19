// import { AreaChart, Area, ResponsiveContainer, CartesianGrid } from 'recharts';


// const data = [
//   { time: '04:00', value: 50 },
//   { time: '05:00', value: 150 },
//   { time: '06:00', value: 80 },
//   { time: '07:00', value: 200 },
//   { time: '08:00', value: 120 },
//   { time: '09:00', value: 250 },
//   { time: '10:00', value: 180 },
//   { time: '11:00', value: 300 },
//   { time: '12:00', value: 220 },
//   { time: '13:00', value: 280 },
//   { time: '14:00', value: 200 },
//   { time: '15:00', value: 350 },
//   { time: '16:00', value: 280 },
//   { time: '17:00', value: 400 }
// ];

// function ActivityChart() {
//   return (
//     <div className="bg-transparent  w-130% rounded-lg p-6 mb-8">
//       <div className="w-full h-[300px] relative">
//         <div className="absolute inset-0 z-0">
//           <div className="w-full h-full bg-[#7F3DFF] opacity-10 blur-2xl transform translate-y-4"></div>
//         </div>
//         <ResponsiveContainer  width="110%" height="90%" className="res-chart relative left-[-5%] ">
//           <AreaChart 
//             data={data} 
//             margin={{ top: 0, right: 0, bottom: 9, left: 0 }}
//           >
//             <defs>
//               <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
//                 <stop offset="0%" stopColor="#7F3DFF" stopOpacity={0.4}/>
//                 <stop offset="100%" stopColor="#7F3DFF" stopOpacity={0.1}/>
//               </linearGradient>
//             </defs>
//             <CartesianGrid 
//               strokeDasharray="3 3" 
//               vertical={false} 
//               stroke="#7F3DFF"
//               opacity={0.1}
//             />
//             <Area
//               type="natural"
//               dataKey="value"
//               stroke="#fff"
//               strokeWidth={2}
//               fill="url(#colorGradient)"
//               animationDuration={2000}
//               animationEasing="ease-in-out"
//               baseLine={0}
//             />
//           </AreaChart>
//         </ResponsiveContainer>
//       </div>
//     </div>
//   );
// }

// export default ActivityChart;

// TradingViewWidget.jsx


// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
  const container = useRef();

  useEffect(
    () => {
      const script = document.createElement("script");
      script.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "symbols": [
            [
              "NASDAQ:TSLA|1D"
            ]
          ],
          "chartOnly": false,
          "width": "100%",
          "height": "180%",
          "locale": "en",
          "colorTheme": "dark",
          "autosize": true,
          "showVolume": false,
          "showMA": false,
          "hideDateRanges": true,
          "hideMarketStatus": false,
          "hideSymbolLogo": false,
          "scalePosition": "no",
          "scaleMode": "Normal",
          "fontFamily": "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "fontSize": "10",
          "noTimeScale": true,
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "chartType": "line",
          "maLineColor": "#2962FF",
          "maLineWidth": 1,
          "maLength": 9,
          "headerFontSize": "small",
          "backgroundColor": "rgba(19, 23, 34, 0)",
          "lineWidth": 3,
          "lineType": 2,
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "lineColor": "rgba(255, 255, 255, 1)",
          "topColor": "rgba(179, 157, 219, 0.18)",
          "bottomColor": "rgba(103, 58, 183, 0.33)",
          "color": "rgba(79, 0, 121, 1)",
          "upColor": "#22ab94",
          "downColor": "#f7525f"
        }`;
      container.current.appendChild(script);
    },
    []
  );

  return (
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a>
        </div>
    </div>
  );
}

export default memo(TradingViewWidget);