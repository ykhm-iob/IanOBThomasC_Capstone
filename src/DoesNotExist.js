import { Link } from "react-router-dom";

const DoesNotExist = () => {
  return ( 
    <div className="DoesNotExist">
      <h2>Sorry!</h2>
      <p>The page you are looking for cannot be found.</p>
      <Link to="/">Return To the Home Page?</Link>
    </div>
   );
}
 
export default DoesNotExist;