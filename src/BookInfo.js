import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BookInfo = () => {
  const { id } = useParams();
  const { data: book, error, isPending } = useFetch('http://localhost:8000/books/' + id);

  return ( 
    <div className="book-info">
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div>}
      { book && (
        <article>
          <h2>{ book.title }</h2>
          <p>Written By: { book.author }</p>
          <div>{ book.body }</div>
        </article>
      )}
    </div>
   );
}
 
export default BookInfo;