import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { PokLoad } from "../components/PokLoad";
import { useParams, Link } from "react-router-dom";
import { GiBodyHeight } from "react-icons/gi";
import { FaWeight } from "react-icons/fa";
import { ImPower } from "react-icons/im";
import "../styles/singlePage.css";
export const SinglePage = () => {
  const { nam } = useParams();
  const [info, setInfo] = useState({});
  const [singleLoad, setSingleLoad] = useState(true);
  useEffect(() => {
    const url = `https://pokeapi.co/api/v2/pokemon/${nam}/`;
    const fetchSingle = async () => {
      setSingleLoad(true);
      const res = await fetch(url);
      const data = await res.json();
      const {
        abilities,
        base_experience,
        height,
        moves,
        name,
        sprites,
        stats,
        types,
        weight,
      } = data;
      let ability = abilities.map((item) => {
        return item.ability.name;
      });
      let move = moves.map((item) => {
        return item.move.name;
      });
      let mainImg = sprites.other.dream_world.front_default;
      let stat = stats.map((item) => {
        const { base_stat, stat } = item;
        return { base: base_stat, category: stat.name };
      });
      let type = types.map((item) => {
        return item.type.name;
      });
      const pokemonInfo = {
        able: ability,
        bex: base_experience,
        h: height,
        movement: move,
        name: name,
        img: mainImg,
        stats: stat,
        types: type,
        w: weight,
      };

      setInfo(pokemonInfo);
     
        setSingleLoad(false);
      
    };
    fetchSingle();
  }, [nam]);

  

  if (singleLoad) {

    return <PokLoad />;
  } 
  else 
  {
    const { able, bex, h, movement, name, img, stats, types, w } = info;
    console.log(able);
    console.log(types);
   let labels = [];
   let chartData = []
  for(let stat of stats){
   labels = [...labels,stat.category]
   chartData = [...chartData,stat.base]
  }
 
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'stats',
        data:chartData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.8)',
          'rgba(54, 162, 235, 0.8)',
          'rgba(255, 206, 86, 0.8)',
          'rgba(75, 192, 192, 0.8)',
          'rgba(153, 102, 255, 0.8)',
          'rgba(255, 159, 64, 0.8)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
    return (
      <div className="single-wrapper">
        <div className="single-img-wrap">
          <div className="single-img">
            <img src={img} alt="" />
          </div>
        </div>
        <button className="name-btn single-btn">{name}</button>
        <div className="h-w-b">
          <div className="s-height">
            <GiBodyHeight />
            <span> Height </span>
            {h}
          </div>
          <div className="s-weight">
            <FaWeight />
            <span> Weight </span>
            {w}
          </div>
          <div className="s-bex">
            <ImPower />
            <span> Base experince </span>
            {bex}
          </div>
        </div>
        <div className="info-wrapper">
          <div className="moves">
            <h1>Moves</h1>
            <div className="moves-box">
              {movement.map((item, index) => {
                return <p key={index}>{item}</p>;
              })}
            </div>
          </div>
          <div className="stats">
            <h1>Statistics</h1>
            <div className="stats-box">
            <Bar data={data} options={options} />
            </div>
          </div>
          <div className="s-types">
          <h1>Types</h1>
          <div className="types-box">
            {
              types.map((item,index)=>{
                return <p key={index}>{item}</p>
              })
            }
          </div>
          </div>
          <div className="s-ability">
          <h1>Abilities</h1>
          <div className="ability-box">
            {
              able.map((item,index)=>{
                return <p key={index}>{item}</p>
              })
            }
          </div>
          </div>
        </div>
      <Link to='/' className='back-btn'>Back</Link>
      </div>

    );
  }
};
