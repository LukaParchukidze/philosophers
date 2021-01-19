import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Philosopher = () => {
  const [philosopher, setPhilosopher] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  let { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    fetch(
      `https://cors-anywhere.herokuapp.com/https://philosophersapi.com/api/philosophers/${id}`
    )
      .then((value) => value.json())
      .then(
        (value) => {
          if (isMounted) {
            setPhilosopher(value);
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
      <section
        style={{
          margin: "48px",
          textAlign: "justify",
        }}
      >
        <h1>{philosopher.name}</h1>
        <p className="flow-text">
          <b>Life Period:</b> {philosopher.life}
        </p>
        <p className="flow-text">
          <b>Birth Location:</b> {philosopher.birthLocation.name}
        </p>
        <p className="flow-text">
          <b>School:</b> {philosopher.school}
        </p>
        <p className="flow-text">
          <b>Interests:</b> {philosopher.interests}
        </p>
        <h2>Works:</h2>
        <ul>
          {philosopher.works.map((value) => (
            <li className="flow-text">
              <b>Title:</b> {value.title}
            </li>
          ))}
        </ul>
        <h2>Ideas:</h2>
        <ul>
          {philosopher.keyIdeas.map((value) => (
            <li className="flow-text">
              <b>•</b>&nbsp; {value.text}
            </li>
          ))}
        </ul>
        <h2>Quotes:</h2>
        {philosopher.quotes.map((value) => (
          <blockquote className="flow-text" style={{ borderColor: "#607d8b" }}>
            <i>{value.quote}</i>
          </blockquote>
        ))}
      </section>
    );
  }
};

export default Philosopher;
