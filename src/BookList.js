import { Link } from 'react-router-dom';

const BookList = (props) => {
const books = props.books

  return ( 
    <div className="">
      <div className="grid grid-cols-3
    grid-flow-row">
        {books.map((books) => (
          <div className="" key={books.isbn}> {/* books.id === books.isbn */}
            <Link to={`/books/${books.isbn}`}>
            <img className="rounded-2xl min-w-20 w-2/6 mx-auto md:max-w-56 m-4 lg:max-w-64" src={ books.cover_img } alt="Book Cover" /> 
            </Link>
          </div>
        ))}
      </div>
    </div>
   );
}
 
export default BookList;