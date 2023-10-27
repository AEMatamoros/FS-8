import { useEffect, useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import useFetch from "../hooks/useFetch";

export default function Home() {
  //Modal
  const { showModal, handleshowModal, handleCloseModal } = useModal();
  //Manejar el estado
  // Apps
  const [apps, setApps] = useState({
    data: [],
    err: null,
    loading: false,
  });
  // Apps Filtradas
  const [filteredApps, setFilteredApps] = useState({
    filterValue: "",
    data: [],
  });
  // App Actual
  const [currentApp, setCurrentApp] = useState({
    id: 0,
    img: "https://play-lh.googleusercontent.com/VHuxzkMizO75MHpRnUWPnOh9bo2KccdsBUREDnNArlIBPzdTo_OWwIU_Pj3mFLut0Vzp=w526-h296-rw",
    name: "Default",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus dolor, eos porro soluta sunt eaque!",
    price: 0,
    rating: 5,
  });
  //Fetch Inicial
  useEffect(() => {
    const fetch = useFetch({
      url: "http://localhost:3000/apps",
      method: "GET",
    });
    fetch.then((response) => {
      setApps((prev) => {
        return { ...prev, data: response.data };
      });
      setFilteredApps((prev) => {
        return { ...prev, data: response.data };
      });
    });
  }, []);

  const handleFilter = () => {
    if (!!filteredApps.filterValue.trim()) {
      setFilteredApps((prev) => {
        return {
          ...prev,
          data: apps.data.filter((app) =>
            app.name
              .toLowerCase()
              .includes(`${filteredApps.filterValue.toLowerCase()}`)
          ),
        };
      });
    } else {
      setFilteredApps((prev) => {
        return { ...prev, data: apps.data };
      });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row p-4 ">
          <form className="d-flex col-12 mb-4" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Mario..."
              aria-label="Mario..."
              value={filteredApps.filterValue}
              onChange={(e) => {
                setFilteredApps((prev) => {
                  return { ...prev, filterValue: e.target.value };
                });
              }}
            />
            <button
              className="btn btn-outline-success"
              type="button"
              onClick={handleFilter}
            >
              Buscar
            </button>
          </form>
          {!!filteredApps.data &&
            filteredApps.data.length > 0 &&
            filteredApps.data.map((app, index) => (
              <Card
                app={app}
                key={index}
                handleshowModal={handleshowModal}
                setCurrentApp={setCurrentApp}
              ></Card>
            ))}
        </div>
      </div>
      <Modal
        showModal={showModal}
        handleCloseModal={handleCloseModal}
        currentApp={currentApp}
      ></Modal>
    </>
  );
}
