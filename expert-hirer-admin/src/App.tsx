import { Outlet } from "react-router-dom";
import { Navbar } from "./navigation/components/navbar/Navbar";

import "./App.scss";
function App() {
  return (
    <div className="app">
      <section className="app-headerSection">
        <header>Top Bar</header>
      </section>
      <main className="app-main">
        <section className="app-mainSection">
          <div className="app-leftSection">
            <Navbar />
          </div>
          <div className="app-rightSection">
            <Outlet />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
