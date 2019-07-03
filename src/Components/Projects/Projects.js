import React from 'react';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projectOpen: "Cassandra"
        };
    };

    chooseProject() {
        this.setState({
            projectOpen: "Cassandra"
        }
        );
    };

    render() {
        return (
            <div>
<div class="oneThirdCol" >
    <div class="projectLogoContainer"><img src="https://gdurl.com/yLkZ" className="projectLogoCassandra" alt="logo" /></div>
    <h2 class="projectLogoTitle">Cassandra</h2>
    <p class="projectSubHead">Providing Education to Everyone</p>
</div>
    <div class="oneThirdCol">
        <div class="projectLogoContainer"><img src="https://gdurl.com/yLkZ" className="projectLogoCassie" alt="logo" /></div>
        <h2 class="projectLogoTitle">Cassie</h2>
        <p class="projectSubHead">Improving Education for Everyone</p>
    </div>
    <div class="oneThirdCol">
        <div class="projectLogoContainer"><img src="https://gdurl.com/yLkZ" className="projectLogoPlutus" alt="logo" /></div>
        <h2 class="projectLogoTitle">Plutus</h2>
        <p class="projectSubHead">Supporting Charities for Everyone</p>
    </div>
    { this.state.projectOpen === "Cassandra" ? <p class="projectInfo">
    Cassandra is a platform that directly addresses the economic barriers to education by providing tertiary and vocational educations completely free to anyone with internet access. 
    </p> : null }
    </div>)}};

