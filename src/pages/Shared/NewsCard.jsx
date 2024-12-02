import { Link } from "react-router-dom";



const NewsCard = ({news}) => {
    const {title,thumbnail_url, details, _id, image_url, }=news;
    return (
        <div className="card bg-base-100 shadow-xl mb-16 border-b-2 ">
  <figure>
    <img
      src={thumbnail_url}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title"> {title} </h2>
    
  {
    details.length > 200 
     ? <p> {details.slice(0,200)} <Link   to={`/news/${_id}`} className="text-blue-500 font-bold" > Read More</Link> </p>
    :
    <p> {details} </p>
  }
   
   
  </div>
</div>
    );
};

export default NewsCard;