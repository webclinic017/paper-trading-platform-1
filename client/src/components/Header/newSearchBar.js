import classes from './NewSearchBar.module.css';
import React, { useState, useEffect } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

function NewSearchBar ({stockListURL}) {

    const [stockList, setStockList] = useState([]);
    useEffect(() => {
      const fetchStocks = async () => {
          const stocksFromServer = await axios.get(stockListURL)
          console.log("[DEBUG]: stocks received from db:", stocksFromServer.data)
          setStockList(stocksFromServer.data)
      }
      fetchStocks()
    }, []) 

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = stockList.filter((value) => {
        return value.company_name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };


    return (

        <div className={classes.container}>

            <input
                className={classes.searchInput}
                type="search"
                placeholder= "Search stocks..."
                value={wordEntered}
                onChange={handleFilter}
            />
        
        {/* <button type="submit" className={classes.searchBtn}>
            <AiOutlineSearch/>
        </button> */}

            {filteredData.length != 0 && (
                    <div className={classes.dataResult}>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                            <Link to={`/stock/${value.symbol}`} className={classes.stockLink}>
                            <div> {value.company_name} </div>
                            </Link>
                        );
                    })}
                    </div>
                )}

        </div>

    );
}

export default NewSearchBar;