import { FaStar } from "react-icons/fa";
// import App1IMG from "../assets/img/app1.webp";
export default function Card({ app, handleshowModal, setCurrentApp }) {
  let ratingArray = Array.from(Array(app.rating));
  const handleModalOpen = (app) => {
    setCurrentApp(app);
    handleshowModal();
  };
  return (
    <a
      className="col-3 a-none mb-3"
      onClick={() => {
        handleModalOpen(app);
      }}
    >
      <div className="card pointer" style={{ maxWidth: "540px" }}>
        <img src={app.img} className="card-img-top" alt="..." />
        <div className="card-body p-4">
          <h5 className="card-title text-black">{app.name}</h5>
          <p className="card-text text-secondary">{app.description}</p>
          <strong href="#" className="view right-4 text-success">
            {app.price}$
          </strong>
          <span className="rating">
            {!!ratingArray &&
              ratingArray.length > 0 &&
              ratingArray.map((_, index) => (
                <FaStar className="text-warning" key={index}></FaStar>
              ))}
          </span>
        </div>
      </div>
    </a>
  );
}
