import React, { Component } from "react";
import "./teamPage.scss"

class TeamPage extends Component {
	constructor(props) {
	  super(props);
	
	}
	render() {
	  return (
		<div>
			<section>
   <img src="#" alt="Background" />
  <h3>Meet the team</h3>

  <div class="team-list">
    <article>
      <div>
        <h5>Aman</h5>
        <p>CEO  Co-Founder</p>
        <a href="#">View bio</a>
      </div>
    </article>

    <article>
      <div>
        <h5>Kaushik</h5>
        <p>CEO Co-Founder</p>
        <a href="#">View bio</a>
      </div>
    </article>

    <article >
      <div>
        <h5>Aniket</h5>
        <p>CTO</p>
        <a href="#">View bio</a>
      </div>
    </article>
    <article >
      <div>
        <h5>Shubham</h5>
        <p>Developer</p>
        <a href="#">View bio</a>
      </div>
    </article>
  </div>
</section>

		</div>
      
  );
}
}

export default TeamPage;