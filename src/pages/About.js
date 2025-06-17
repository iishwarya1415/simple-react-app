import React from 'react';
import './About.css';
import CommentCard from '../components/CommentCard';

function About() {
  return (
    <div className="about-page">
      <h2>About</h2>
      <p>This is a basic React app built using functional components and React Router.</p>

      <CommentCard
        name="Claire"
        time="3 hours ago"
        content="Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis."
        likes={132}
        dislikes={15}
        profileImg="https://i.pravatar.cc/150?img=32"
      />
    </div>
  );
}

export default About;
