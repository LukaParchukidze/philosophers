import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Chronology = () => {
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
            setPhilosophers(
              value.sort(
                (a, b) =>
                  0 +
                  (a.birthYear.split(" ")[1] === "AD"
                    ? parseInt(a.birthYear.split(" ")[0])
                    : -parseInt(a.birthYear.split(" ")[0])) -
                  (0 +
                    (b.birthYear.split(" ")[1] === "AD"
                      ? parseInt(b.birthYear.split(" ")[0])
                      : -parseInt(b.birthYear.split(" ")[0])))
              )
            );
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
  });

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
      <section style={{ width: "1080px" }}>
        <table className="highlight responsive-table centered">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Birth Year</th>
              <th>Death Year</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {philosophers.map((philosopher, index) => (
              <tr key={philosopher.id}>
                <td>{index + 1}</td>
                <td>{philosopher.name}</td>
                <td>{philosopher.birthYear}</td>
                <td>{philosopher.deathYear}</td>
                <td>
                  <Link to={`/philosophers/${philosopher.id}`}>
                    See Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  }
};

export default Chronology;
