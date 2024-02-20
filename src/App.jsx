import { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://www.jma.go.jp/bosai/forecast/data/forecast/130000.json'
        );
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(
          'Error fetching weather data:',
          error
          );
        }
      };
      
      fetchData();
    }, []);
    if(!weatherData) {
      return <div>loading...</div>;
    }
    console.log(weatherData);
  return (
    <main>
      {/* <select>
        <option value="tokyo">東京</option>
        <option value="osaka">大阪</option>
        <option value="sapporo">札幌</option>
      </select> */}
      <div className='weather'>
        <p>
          今日
        </p>
        <p>
          名前：
          {weatherData[0].timeSeries[0].areas[0].area.name}
        </p>
        <p>
          風速：
          {weatherData[0].timeSeries[0].areas[0].waves[0]}
          m/s
        </p>
        <p>
          天気情報：
          {
            weatherData[0].timeSeries[0].areas[0]
              .weathers[0]
          }
        </p>
        <p>
          明日
        </p>
        <p>
          名前：
          {weatherData[0].timeSeries[0].areas[0].area.name}
        </p>
        <p>
          風速：
          {weatherData[0].timeSeries[0].areas[0].waves[1]}
          m/s
        </p>
        <p>
          天気情報：
          {
            weatherData[0].timeSeries[0].areas[0]
              .weathers[1]
          }
        </p>
        <p>
          明後日
        </p>
        <p>
          名前：
          {weatherData[0].timeSeries[0].areas[0].area.name}
        </p>
        <p>
          風速：
          {weatherData[0].timeSeries[0].areas[0].waves[2]}
          m/s
        </p>
        <p>
          天気情報：
          {
            weatherData[0].timeSeries[0].areas[0]
              .weathers[2]
          }
        </p>
        
      </div>
    </main>
  );
};

export default App;
