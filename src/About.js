import { Link } from 'react-router-dom';

const About = () => {
  return ( 
    <div className="About">
      <div>
        <h2>About Me</h2>
        <p>Dr. Steers was trained at University of PA to be a molecular biologist in 1963, graduating with a PhD...</p>
        <button><Link to="/about/Biography">Biography Page</Link></button>
      </div>
      <div>
        <h2>Appearances</h2>
        <ul>
          <li>Over 13 televised appearances, including educational and radio programs.</li>
          <li>Multiple interviews.</li>
          <li>An Appearance on the Today Show.</li>
        </ul>
        <button><Link to="/about/Appearances">Appearances Page</Link></button>
      </div>
      <h2>Contact Info</h2>
      <p>Send me a message collaborations, feedback, etc.</p>
      <button><Link to="/about/Contact">Contact Me</Link></button>
    </div>
   );
}
 
export default About;