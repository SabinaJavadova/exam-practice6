import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../constant";
import Grid from "@mui/material/Grid2";
import axios from "axios";
import style from "./index.module.scss";

const Dress = () => {
  const [dress, setDress] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("name"); 

  const getDress = async () => {
    try {
      const res = await axios.get(`${BASE_URL}`);
      setDress(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };


  const sortedClothes = (dressList) => {
    const clonedDressList = [...dressList]; 
    if (sortBy === "asc") {
      return clonedDressList.sort((a, b) => a.price - b.price);
    } else if (sortBy === "desc") {
      return clonedDressList.sort((a, b) => b.price - a.price);
    }
    return clonedDressList; 
  };

  useEffect(() => {
    getDress();
  }, []);


  const filteredDress = dress.filter((d) => {
    return d.name.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

 
  const filteredSorted = sortedClothes(filteredDress);

  return (
    <div className={style["container"]}>
      <div className={style["cont"]}>
       
        <div className="input">
          <input
            type="text"
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dresses..."
          />
        </div>

      
        <div className="sorted">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="asc">Asc (Low to High)</option>
            <option value="desc">Desc (High to Low)</option>
          </select>
        </div>

        
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Grid container spacing={2}>
            {filteredSorted.length > 0 ? (
              filteredSorted.map((dressItem) => (
                <Grid
                  size={{ xs: 12, md: 6, lg: 4 }}
                  key={dressItem._id}
                  className={style["card"]}
                >
                  {dressItem.img && (
                    <div className={style["image"]}>
                      <img src={dressItem.img} alt={dressItem.name} />
                    </div>
                  )}
                  <h2>{dressItem.name}</h2>
                  <h3>{dressItem.description}</h3>
                  <p>${dressItem.price}</p>
                </Grid>
              ))
            ) : (
              <p>No dresses found</p>
            )}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Dress;
