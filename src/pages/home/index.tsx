import React, { useEffect, useState } from "react";
import api from "../../services/api";
import IHeroProps from "../../interfaces/IHeroProps";
import "./styles.css";

const App: React.FC = () => {
  const [heroes, setHeroes] = useState<IHeroProps[]>([]);

  //   const loadData = () => {
  //     api
  //       .get("/all.json")
  //       .then((data) => {
  //         console.log(data);
  //         setHeroes(data.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };
  const loadData = async () => {
    try {
      const { data: response } = await api.get("/all.json");
      console.log(response);
      setHeroes(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  console.log(heroes);
  return (
    <>
      <div className="hero-sub">
        <h1 className="hero-h">
          Personagens
          <img src="risco.png" alt="sublinhado" />
        </h1>
      </div>

      <div className="App">
        {heroes.map((hero) => {
          return (
            <>
              <a className="hero" href={`/hero/${hero.id}`}>
                <div className="hero-container">
                  <img
                    className="hero-img"
                    src={hero.images.lg}
                    alt={hero.name}
                  />
                  <p>{hero.name}</p>
                </div>
              </a>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
