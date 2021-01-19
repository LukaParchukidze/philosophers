import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Philosophers = () => {
  const [philosophers, setPhilosophers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(
      "https://cors-anywhere.herokuapp.com/https://philosophersapi.com/api/philosophers"
    )
      .then((value) => value.json())
      .then(
        (value) => {
          if (isMounted) {
            setPhilosophers(value);
            setIsLoaded(true);
          }
        },
        (error) => {
          if (isMounted) {
            setError(error);
            setIsLoaded(true);
          }
        }
      );

    return () => {
      isMounted = false;
    };
  }, []);

  if (error) {
    return <section> {error.message} </section>;
  } else if (!isLoaded) {
    return (
      <section>
        <div className="preloader-wrapper big active">
          <div className="spinner-layer spinner-blue-only">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="gap-patch">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {philosophers.map((philosopher) => (
          <div
            className="card horizontal"
            style={{ width: "256px", margin: "24px" }}
            key={philosopher.id}
          >
            <div className="card-stacked">
              <div className="card-content">
                <p>{philosopher.name}</p>
                <p>{philosopher.life}</p>
              </div>
              <div className="card-action">
                <Link
                  to={`/philosophers/${philosopher.id}`}
                  className="blue-grey-text"
                  style={{ textAlign: "center" }}
                >
                  See Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
};

export default Philosophers;
