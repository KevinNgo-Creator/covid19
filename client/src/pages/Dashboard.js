import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../utils/API";

function Dashboard(props) {
  const [favorites, setFavorites] = useState({})

  
  useEffect(() => {
    API.getFavorites()
      .then(res => setFavorites(res.data))
      .catch(err => console.log(err));
  }, [])

  return (
      
    
    );
  }


export default Dashboard;
