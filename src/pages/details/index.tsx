import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import IHeroProps from "../../interfaces/IHeroProps";
import api from "../../services/api";
import "./styles.css";

interface IDetailsProps {
  id: string;
}

const Details: React.FC = () => {
  const params = useParams<IDetailsProps>();
  const [hero, setHero] = useState<IHeroProps | null>(null);
  console.log(params);
  const loadData = async () => {
    try {
      const { data: response } = await api.get("/all.json");
      console.log(response);
      const findHero = response.find(
        (h: IHeroProps) => h.id.toString() === params.id
      );
      setHero(findHero);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);
  return (
    <div className="container">
	 <div className='ajuste'>
      <div className="container-details">
        {/* nomes */}
        <div className="container-name">
          <h1 className="hero-name">{hero?.name}</h1>
          <p className="hero-pname">
            <strong>Full Name: </strong>
            {hero?.biography.fullName}
          </p>
        </div>

        <div className="container-image">
          <img src={hero?.images.lg} alt={hero?.name} className="img" />
        </div>
        <div className="container-trunfo">
          <p className="para-trunfo">
            <strong>Intelligence: </strong>
            {hero?.powerstats.intelligence}
          </p>
          <p className="para-trunfo">
            <strong>Combat: </strong>
            {hero?.powerstats.combat}
          </p>
          <p className="para-trunfo">
            <strong>Durability: </strong>
            {hero?.powerstats.durability}
          </p>
          <p className="para-trunfo">
            <strong>Power: </strong>
            {hero?.powerstats.power}
          </p>
          <p className="para-trunfo">
            <strong>Speed: </strong>
            {hero?.powerstats.speed}
          </p>
          <p className="para-trunfo">
            <strong>Strength: </strong>
            {hero?.powerstats.strength}
          </p>
        </div>
      </div>
	  
      <div className="divisao"></div>
      <div className="container-info">
        <p>
          <strong>Gender: </strong>
          {hero?.appearance.gender}
        </p>
        <p>
          <strong>Race: </strong>
          {hero?.appearance.race}
        </p>
        <p>
          <strong>Height: </strong>
          {hero?.appearance.height[1]}
        </p>
        <p>
          <strong>Weight: </strong>
          {hero?.appearance.weight[1]}
        </p>
        <p>
          <strong>Occupation: </strong>
          {hero?.work.occupation}
        </p>
        <p>
          <strong>Affiliations: </strong>
          {hero?.connections.groupAffiliation}
        </p>
        <p>
          <strong>Relatives: </strong>
          {hero?.connections.relatives}
        </p>
      </div>
	  </div>
    </div>
  );
};

export default Details;
