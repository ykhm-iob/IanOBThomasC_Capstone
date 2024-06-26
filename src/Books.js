import useFetch from "./useFetch";
import BookList from "./BookList";

const Books = () => {
  
  // const url = 'http://localhost:8000/books/';
  const url = 'https://us-east-1.aws.data.mongodb-api.com/app/data-xpont/endpoint/book';

  const { data: book, error, isPending } = useFetch(url);

  console.log(book);
  console.log(error);
  console.log(isPending);


  return ( 
    <div className="flex text-center flex-col">
      <h2 className="text-titleColor text-3xl font-medium lg:text-5xl m-5 pb-5">Books From Ed Steers Jr.</h2>
      <div className="">
        <BookList books={book} />
      </div>
    </div>
   );
}
 
export default Books;