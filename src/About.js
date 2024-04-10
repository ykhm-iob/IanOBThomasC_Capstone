import { Link } from 'react-router-dom';

const About = () => {
  return ( 
    <div className="flex flex-col gap-36 text-center">
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">About Me</h2>
        <p className="text-paragraphColor text-sm lg:text-lg">Dr. Steers was trained at University of PA to be a molecular biologist in 1963,<br /> graduating with a PhD from the University of Pennsylvania. He would go on to 
        <br /> become a biomedical researcher in collobration with a Nobel Prize winner, before retiring 
        <br /> as a history writer. It is here where Dr. Steers would release multiple books, and have 
        <br />multiple guest appearances on radio and TV shows...</p>
        <button className="button"><Link to="/about/Biography">Biography Page</Link></button>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Appearances</h2>
        <p className="text-paragraphColor text-sm lg:text-lg">Dr. Steers has had multiple appearances over the years, including but not limited to:</p>
        <ul>
          <li>Over 13 televised appearances, including educational and radio programs.</li>
          <li>Multiple interviews, including one on The Today Show.</li>
          <li>His book(s) discussed on CNN.</li>
        </ul>
        <button className="button"><Link to="/about/Appearances">Appearances Page</Link></button>
      </div>
      <div>
        <h2 className="text-titleColor text-3xl font-medium lg:text-5xl">Contact Info</h2>
        <p className="text-paragraphColor text-sm lg:text-lg">Send me a message for collaborations, to give feedback on my work, or just to reach out!</p>
        <button className="button mb-4"><Link to="/about/Contact">Contact Me</Link></button>
      </div>
    </div>
   );
}
 
export default About;