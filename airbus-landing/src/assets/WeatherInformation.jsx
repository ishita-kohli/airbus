import React from 'react';

const WeatherInformation = ({ weatherData, plan }) => {
  return (
    <>
      <main>
        <div className="container">
          <h1>Weather Information</h1>
          <h5><b>Location:</b> {weatherData.resolvedAddress}</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Current Weather Conditions</th>
                <th>Max Temperature (in °C)</th>
                <th>Min Temperature (in °C)</th>
                <th>Precipitation Probability</th>
                <th>Humidity</th>
                <th>Weather Alerts</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.days.map((weatherDataItem, index) => (
                <tr key={index}>
                  <td>{weatherDataItem.datetime}</td>
                  <td>{weatherDataItem.conditions}</td>
                  <td>{weatherDataItem.tempmax}</td>
                  <td>{weatherDataItem.tempmin}</td>
                  <td>{weatherDataItem.precipprob}</td>
                  <td>{weatherDataItem.humidity}</td>
                  <td>{weatherDataItem.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="container">
          <h1>Planned Itinerary</h1>
          <code>
            <h6>
              **This is a tentative itinerary, so please be flexible, it may have
              some mistakes.
            </h6>
          </code>
          <div id="markdown-content">{plan}</div>
        </div>

        <div className="md-4 pd container">
          <h5>
            For Flight Booking:
            <a style={{ textDecoration: 'none' }} href="https://www.booking.com" target="_blank">
              <button type="button" className="btn btn-light">
                Click Here
              </button>
            </a>
          </h5>
        </div>
      </main>

      <div className="floating-container">
        <div className="floating-button">
          <i className="fa-solid fa-share-from-square"></i>
        </div>
        <div className="element-container">
          <a className="float-element" href="https://www.facebook.com/sharer/sharer.php?u=https%3A//sanjeev02.pythonanywhere.com/" target="_blank">
            <span>
              <i className="fa-brands fa-facebook"></i>
            </span>
          </a>
          <a className="float-element" href="https://api.whatsapp.com/send?text=Check%20out%20this%20page:%20https://sanjeev02.pythonanywhere.com" target="_blank">
            <span>
              <i className="fa-brands fa-whatsapp"></i>
            </span>
          </a>
          <a className="float-element" href="https://twitter.com/intent/tweet?text=Check%20out%20this%20page:%20https://sanjeev02.pythonanywhere.com" target="_blank">
            <span>
              <i className="fa-brands fa-x-twitter"></i>
            </span>
          </a>
          <a className="float-element" href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A//sanjeev02.pythonanywhere.com" target="_blank">
            <span>
              <i className="fa-brands fa-linkedin"></i>
            </span>
          </a>
          <a className="float-element" href="https://t.me/share?url=https%3A%2F%2Fsanjeev02.pythonanywhere.com%2F&text=Check%20this%20out" target="_blank">
            <span>
              <i className="fa-brands fa-telegram"></i>
            </span>
          </a>
          <button id="download" className="float-element">
            <span>
              <i className="fa-solid fa-download"></i>
            </span>
          </button>
        </div>
      </div>

      <footer className="jumbotron text-center text-white fixed-bottom" style={{ backgroundColor: '#030303' }}>
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(255, 255, 255, 0)' }}>
          <p>&copy; {new Date().getFullYear()} Copyright</p>
          
        </div>
      </footer>
    </>
  );
};

export default WeatherInformation;
