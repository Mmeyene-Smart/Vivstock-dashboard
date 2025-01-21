import { useEffect } from 'react';

function ActivityChart() {
  useEffect(() => {
    const container = document.getElementById('tradingview-widget-container');
    if (!container) return;

    // Check if widget is already initialized
    if (container.querySelector('script')) return;

    // Create and load TradingView widget script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js';
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      {
        "symbols": [
          [
            "Apple",
            "AAPL|1D"
          ],
          [
            "NASDAQ:TSLA|1D"
          ],
          [
            "NASDAQ:NVDA|1D"
          ],
          [
            "NASDAQ:META|1D"
          ],
          [
            "NASDAQ:AVGO|1D"
          ]
        ],
        "chartOnly": false,
        "width": "100%",
        "height": "100%",
        "locale": "en",
        "colorTheme": "dark",
        "autosize": true,
        "showVolume": false,
        "showMA": false,
        "hideDateRanges": false,
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

    container.appendChild(script);

    // Cleanup function
    return () => {
      const scriptElement = container.querySelector('script');
      if (scriptElement) {
        scriptElement.remove();
      }
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <div className="bg-transparent rounded-lg p-6 mb-8">
      <div className="w-[1200px] h-[300px] relative left-[-30px] top-[30px]">
        <div id="tradingview-widget-container" className='w-full h-full'>
          <div className="tradingview-widget-container__widget w-full"></div>
          {/* <div className="tradingview-widget-copyright">
            <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
              <span className="blue-text">Track all markets on TradingView</span>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ActivityChart;