import { Link } from "react-router-dom";

const PageList = ({ pages, title }) => {
// const pages = props.pages;
// const title = props.title;

  return (
    <div className="page-list">
      <h2>{ title }</h2>
      {pages.map((page) => (
        <div className="page-preview" key={page.id}>
          <Link to={ `/books/${page.id}` }>
          <h2>{ page.title }</h2>
          <p>Preview: { page.body } </p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default PageList;