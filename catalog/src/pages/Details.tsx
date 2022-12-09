import React from "react";
import {Link, useParams} from "react-router-dom";

const Details = () => {
    const { productId } = useParams();

    return (
      <div>
          {`Details page, product id: `}
          <strong>{productId}</strong>
          <br/>
          <Link to="/shop">All products</Link>
      </div>
    );
};

export default Details;
