import React from "react";
import { useState } from "react";
import { Tooltip, Grow } from "@mui/material";
import { watchlist } from "../data/data";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
  const labels = watchlist.map((subArray) => subArray["name"]);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(0, 128, 128, 0.8)", // Teal
          "rgba(128, 0, 64,  0.8)", // Raspberry
          "rgba(0, 102, 204,  0.8)", // Royal Blue
          "rgba(153, 51, 102,  0.8)", // Plum Rose
          "rgba(0, 153, 76,  0.8)", // Emerald Green
          "rgba(204, 85, 0,  0.8)", // Burnt Orange
          "rgba(102, 0, 204,  0.8)", // Vivid Violet
        ],
        borderColor: [
          "rgba(0, 128, 128, 1)", // Teal
          "rgba(128, 0, 64, 1)", // Raspberry
          "rgba(0, 102, 204, 1)", // Royal Blue
          "rgba(153, 51, 102, 1)", // Plum Rose
          "rgba(0, 153, 76, 1)", // Emerald Green
          "rgba(204, 85, 0, 1)", // Burnt Orange
          "rgba(102, 0, 204, 1)", // Vivid Violet
        ],
        borderWidth: 1,
      },
    ],
  };

  //   export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  //   datasets: [
  //     {
  //       label: '# of Votes',
  //       data: [12, 19, 3, 5, 2, 3],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)',
  //       ],
  //       borderColor: [
  //         'rgba(255, 99, 132, 1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)',
  //       ],
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts">{watchlist.length}</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>

      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

//watch list component

const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListHover uid={stock.name} />}
    </li>
  );
};

//watchlist hover effect
const WatchListHover = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const handleClickEvent = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
  generalContext.openSellWindow(uid); 
};


  return (
    <span className="actions">
      <span>
        <Tooltip
          title={"Buy (B)"}
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
          onClick={handleClickEvent}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title={"Sell (S)"}
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
          onClick={handleSellClick}
        >
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title={"Analytics (A)"}
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="action">
            <EqualizerOutlinedIcon />
          </button>
        </Tooltip>

        <Tooltip
          title={"More (M)"}
          placement="top"
          arrow
          slots={{
            transition: Grow,
          }}
        >
          <button className="action">
            <MoreVertOutlinedIcon />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
