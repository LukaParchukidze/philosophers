import { useEffect, useState } from "react";

const Footer = () => {
  const [philosopher, setPhilosopher] = useState("...");
  const [quote, setQuote] = useState("...");
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(
      "https://cors-anywhere.herokuapp.com/https://philosophersapi.com/api/philosophers/random"
    )
      .then((value) => value.json())
      .then(
        (value) => {
          if (isMounted) {
            setPhilosopher(value["name"]);
            setQuote(
              value["quotes"][
                Math.floor(Math.random() * value["quotes"].length)
              ]["quote"]
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
  }, []);

  if (error) {
    return <section> {error.message} </section>;
  }

  return (
    <footer className="page-footer blue-grey darken-3">
      {!isLoaded ? (
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
      ) : (
        <div className="container">
          <div className="row">
            <div>
              <h5 className="white-text">Quote from {philosopher}</h5>
              <p>{quote}</p>
            </div>
          </div>
        </div>
      )}
      <div className="footer-copyright blue-grey darken-4">
        <div className="container">
          © 2021 Luka Parchukidze
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/LukaParchukidze"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
