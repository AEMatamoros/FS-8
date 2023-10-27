import Card from "./Card";
import Modal from "./Modal";
import useModal from "../hooks/useModal";
import useFetch from "../hooks/useFetch";
import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  //Params
  const [searchParams, setSearchParams] = useSearchParams();

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
    // console.log(!!searchParams.get("name").trim());
    setApps((prev) => {
      return { ...prev, loading: true };
    });
    if (!!searchParams.get("name").trim()) {
      setFilteredApps((prev) => {
        return {
          ...prev,
          data: apps.data.filter((app) =>
            app.name
              .toLowerCase()
              .includes(`${searchParams.get("name").toLowerCase()}`)
          ),
        };
      });
    } else {
      setFilteredApps((prev) => {
        return { ...prev, data: apps.data };
      });
    }
    setApps((prev) => {
      return { ...prev, loading: false };
    });
  };

  useEffect(() => {
    if (searchParams.size > 0 && !!searchParams.get("name").trim()) {
      handleFilter();
      // console.log("Called");
    }
  }, []);

  //REF
  const formRef = useRef(null);
  // const handleClearForm = () => {
  //   console.log(formRef.current);
  //   formRef.current.reset();
  //   console.log("Limpiando");
  // };
  // console.log("Renderizando");
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
              onChange={(e) => {
                setSearchParams({
                  name: e.target.value,
                  description: "Default",
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
          {apps.loading ? (
            <h1>Cargando</h1>
          ) : (
            <>
              {!!filteredApps.data &&
                filteredApps.data.length > 0 &&
                filteredApps.data.map((app, index) => (
                  <Card
                    app={app}
                    key={index}
                    handleshowModal={handleshowModal}
                    setCurrentApp={setCurrentApp}
                  >
                    {/* <CardIMG></CardIMG>
                <CardBody></CardBody> */}
                    <Card.CardIMG></Card.CardIMG>
                    <Card.CardBody></Card.CardBody>
                  </Card>
                ))}
            </>
          )}
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
