import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import { ScrollRestoration } from "react-router-dom";


function Home() {
  return (
    <div className="home">
      <Featured />
      {/* <TrustedBy /> */}
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
           <div className="container1">
        <div className="grid1">
          <div className="image1">
            <img
              src="https://img.freepik.com/premium-vector/modern-colleagues-sharing-ideas-and-create-design-in-office_92753-1231.jpg?w=900"
              alt="image"
            ></img>
          </div>
          <div className="text1">
            <h2>Collaborate</h2>
            <p>
              The most important feature we offer is collaboration between companies, designers and developers. Here every individual can interact with each other in a public, private and the most secure way of communication. We offer interaction in many possible ways and forms such as direct messages, reviews, comments, posts, payments, etc.
            </p>
          </div>
        </div>
      </div>
 
      <ScrollRestoration />
    </div>
  );
}

export default Home;







