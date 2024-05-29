import React, { useState, useEffect } from "react";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cityId, setCityId] = useState("india");
  const [selectedOption, setSelectedOption] = useState(5);
  const [selectedCountryId, setSelectedCountryId] = useState(null);
  const [searchTerm, setSearchTerm] = useState(0);

  const handleSearch = (e) => {
    setSearchTerm(parseInt(e.target.value));
  };
  const handleChange = (event) => {
    setSelectedOption(parseInt(event.target.value, 10));
  };
  const fetchWeather = async (id) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?id=524091&appid=26143d277cebd0cceea96bde3933ffee&q=${id}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWeatherData(data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(cityId);
  }, [cityId]);

  const handleCityChange = (event) => {
    setCityId(event.target.value);
  };

  if (loading) return <div className="text-center">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <div className="2 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Weather Forecast</h2>
      <div className="flex flex-wrap items-center mb-6">
        <div className="mr-6">
          <label
            htmlFor="country"
            className="block text-xl font-bold mb-3 text-gray-800"
          >
            Select Country:
          </label>
          <select
            id="country"
            value={cityId}
            onChange={handleCityChange}
            className="block w-full p-3 border border-gray-400 rounded-md bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600 "
          >
            <option value="afghanistan">Afghanistan</option>
            <option value="albania">Albania</option>
            <option value="algeria">Algeria</option>
            <option value="american samoa">American Samoa</option>
            <option value="andorra">Andorra</option>
            <option value="angola">Angola</option>
            <option value="anguilla">Anguilla</option>
            <option value="antarctica">Antarctica</option>
            <option value="antigua and barbuda">Antigua and Barbuda</option>
            <option value="argentina">Argentina</option>
            <option value="armenia">Armenia</option>
            <option value="aruba">Aruba</option>
            <option value="australia">Australia</option>
            <option value="austria">Austria</option>
            <option value="azerbaijan">Azerbaijan</option>
            <option value="bahamas">Bahamas</option>
            <option value="bahrain">Bahrain</option>
            <option value="bangladesh">Bangladesh</option>
            <option value="barbados">Barbados</option>
            <option value="belarus">Belarus</option>
            <option value="belgium">Belgium</option>
            <option value="belize">Belize</option>
            <option value="benin">Benin</option>
            <option value="bermuda">Bermuda</option>
            <option value="bhutan">Bhutan</option>
            <option value="bolivia">Bolivia</option>
            <option value="bonaire">Bonaire</option>
            <option value="bosnia and herzegovina">
              Bosnia and Herzegovina
            </option>
            <option value="botswana">Botswana</option>
            <option value="bouvet island">Bouvet Island</option>
            <option value="brazil">Brazil</option>
            <option value="british indian ocean territory">
              British Indian Ocean Territory
            </option>
            <option value="brunei">Brunei</option>
            <option value="bulgaria">Bulgaria</option>
            <option value="burkina faso">Burkina Faso</option>
            <option value="burundi">Burundi</option>
            <option value="cabo verde">Cabo Verde</option>
            <option value="cambodia">Cambodia</option>
            <option value="cameroon">Cameroon</option>
            <option value="canada">Canada</option>
            <option value="cayman islands">Cayman Islands</option>
            <option value="central african republic">
              Central African Republic
            </option>
            <option value="chad">Chad</option>
            <option value="chile">Chile</option>
            <option value="china">China</option>
            <option value="christmas island">Christmas Island</option>
            <option value="cocos islands">Cocos Islands</option>
            <option value="colombia">Colombia</option>
            <option value="comoros">Comoros</option>
            <option value="congo (democratic republic of the)">
              Congo (Democratic Republic of the)
            </option>
            <option value="congo (republic of the)">
              Congo (Republic of the)
            </option>
            <option value="cook islands">Cook Islands</option>
            <option value="costa rica">Costa Rica</option>
            <option value="croatia">Croatia</option>
            <option value="cuba">Cuba</option>
            <option value="curaçao">Curaçao</option>
            <option value="cyprus">Cyprus</option>
            <option value="czech republic">Czech Republic</option>
            <option value="denmark">Denmark</option>
            <option value="djibouti">Djibouti</option>
            <option value="dominica">Dominica</option>
            <option value="dominican republic">Dominican Republic</option>
            <option value="ecuador">Ecuador</option>
            <option value="egypt">Egypt</option>
            <option value="el salvador">El Salvador</option>
            <option value="equatorial guinea">Equatorial Guinea</option>
            <option value="eritrea">Eritrea</option>
            <option value="estonia">Estonia</option>
            <option value="ethiopia">Ethiopia</option>
            <option value="falkland islands">Falkland Islands</option>
            <option value="faroe islands">Faroe Islands</option>
            <option value="fiji">Fiji</option>
            <option value="finland">Finland</option>
            <option value="france">France</option>
            <option value="french guiana">French Guiana</option>
            <option value="french polynesia">French Polynesia</option>
            <option value="french southern territories">
              French Southern Territories
            </option>
            <option value="gabon">Gabon</option>
            <option value="gambia">Gambia</option>
            <option value="georgia">Georgia</option>
            <option value="germany">Germany</option>
            <option value="ghana">Ghana</option>
            <option value="gibraltar">Gibraltar</option>
            <option value="greece">Greece</option>
            <option value="greenland">Greenland</option>
            <option value="grenada">Grenada</option>
            <option value="guadeloupe">Guadeloupe</option>
            <option value="guam">Guam</option>
            <option value="guatemala">Guatemala</option>
            <option value="guernsey">Guernsey</option>
            <option value="guinea">Guinea</option>
            <option value="guinea-bissau">Guinea-Bissau</option>
            <option value="guyana">Guyana</option>
            <option value="haiti">Haiti</option>
            <option value="heard island and mcdonald islands">
              Heard Island and McDonald Islands
            </option>
            <option value="vatican city">Vatican City</option>
            <option value="honduras">Honduras</option>
            <option value="hong kong">Hong Kong</option>
            <option value="hungary">Hungary</option>
            <option value="iceland">Iceland</option>
            <option value="india">India</option>
            <option value="indonesia">Indonesia</option>
            <option value="iran">Iran</option>
            <option value="iraq">Iraq</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="city"
            className="block text-xl font-bold mb-3 text-gray-800"
          >
            Select Cities:
          </label>
          <select
            id="city"
            value={selectedOption}
            onChange={handleChange}
            className="block p-3 border border-gray-400 rounded-md bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-gray-800 font-semibold focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
        </div>
      </div>
      <h2>Search for city using ID:</h2>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      {weatherData &&
        weatherData.list.slice(0, selectedOption).map((forecast, index) => (
          <div
            key={index}
            className="mb-6 p-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl shadow-lg "
          >
            <p className="text-lg font-semibold text-white mb-2">
              <strong className="block text-yellow-200">City Id:</strong>{" "}
              {forecast.dt}
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              <strong className="block text-yellow-200">
                Country Lattitutde and Longitude:
              </strong>{" "}
              {weatherData.city.coord.lat}, {weatherData.city.coord.lon}
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              <strong className="block text-yellow-200">Date:</strong>{" "}
              {new Date(forecast.dt_txt).toLocaleDateString()}
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              <strong className="block text-yellow-200">Temperature:</strong>{" "}
              {forecast.main.temp - 273.15}°C
            </p>
            <p className="text-lg font-semibold text-white mb-2">
              <strong className="block text-yellow-200">Humidity:</strong>{" "}
              {forecast.main.humidity}%
            </p>
            <p className="font-semibold">
              <strong className="block font-bold text-yellow-200">
                Weather:
              </strong>{" "}
              <img
                className="w-12 h-12"
                src={`http://openweathermap.org/img/w/${forecast.weather[0].icon}.png`}
                alt={forecast.weather[0].description}
              />
            </p>
            <p className="text-lg font-semibold text-white">
              <strong className="block text-yellow-200">Condition:</strong>{" "}
              {forecast.weather[0].description}
            </p>
          </div>
        ))}
    </div>
  );
};

export default App;
