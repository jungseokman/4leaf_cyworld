import axios from "axios";
import React, { useState, useEffect } from "react";
import { withRouter } from "next/router";

const Detail = ({ router: { query } }) => {
  const [content, setContent] = useState([]);

  const sendData = async (req, res, next) => {
    const response = await axios.post(
      "http://localhost4000/api/cyworld/content",
      {
        id: query.id,
      }
    );
    console(response.data);
  };
  return (
    <>
      <div></div>
    </>
  );
};

export default withRouter(Detail);
