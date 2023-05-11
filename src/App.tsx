import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/home";
import ChartsPage from "./containers/charts";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/charts" element={<ChartsPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </Provider>
    </div>
  );
}

export default App;
