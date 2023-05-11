import Sidebar from "../components/sidebar";
import { Map, Marker, Popup } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { useQuery } from "react-query";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import {
  countries,
  setCountries,
  cases,
  setCases,
} from "../redux/contactReducer";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartsPage = () => {
  const allCountries = useAppSelector(countries);
  const allCases = useAppSelector(cases);
  const dispatch = useAppDispatch();
  const getChartData = async () => {
    const country = await axios.get("https://disease.sh/v3/covid-19/countries");
    const cases = await axios.get(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );

    dispatch(setCountries(country.data));
    dispatch(setCases(cases.data.cases));
    const key = Object.keys(allCases);
    console.log(key);
  };

  useQuery("countries", getChartData);

  const labels = Object.keys(allCases);
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Case Fluctuation",
        data: Object.values(allCases),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
      <Sidebar />
      <div className="w-[60vw] h-[70vh] flex flex-col justify-center gap-4">
        <div className="w-[60vw] h-[35vh]">
          <Map center={[54, -2]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {allCountries.map((country: any, id: any) => (
              <Marker
                position={[country.countryInfo.long, country.countryInfo.lat]}
              >
                <Popup>
                  Name: {country.country} <br />
                  Active: {country.active} <br />
                  Recovered: {country.recovered} <br />
                  Deaths: {country.deaths}
                </Popup>
              </Marker>
            ))}
          </Map>
        </div>
        <div className="w-full h-1/2 p-5 rounded-md">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default ChartsPage;
