import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile.jpeg';


class App extends Component {
    state={displayBio:false};
    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     this.toggleBioDisplay=this.toggleBioDisplay.bind(this);
    // }

    toggleBioDisplay=()=>{
        this.setState({displayBio:!this.state.displayBio})
    }
    render() {
        return (
            <div>
                <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Sai.</p>
                   <p> I'm a Software Engineer. I'm always looking forward to work on exciting projects.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Sweden and code every day</p>
                            <p>My favorite language is Javascript and ReactJS is awesome</p>
                            <p>Besides coding, I listen to music</p>
                            <button onClick= {this.toggleBioDisplay}>Show less</button>
                        </div>
                    ) : (
                    <div>
                      <button  onClick = {this.toggleBioDisplay}>Read more</button>
                    </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;
