import React from "react";
import { useSelector } from "react-redux";

const Menuitems = () => {
  const toggleMenue = useSelector(store=>store.app.isMenuOpen)
  if (!toggleMenue) return null;
  return (
    <div className="w-[200px] border m-2 pl-4">
      <div className="p-3 ">
        <ul>
          <li>Home</li>
          <li>Wath later</li>
          <li>Liked videos</li>
        </ul>
      </div>
      <div className="p-3 ">
        <h4 className="text-lg font-bold">You</h4>
        <ul>
          <li>History</li>
          <li>Playlist</li>
          <li>Your videos</li>
        </ul>
      </div>
      <div className="p-3 ">
        <h4 className="text-lg font-bold">Subscriptions</h4>
        <ul>
          <li>Akshay</li>
          <li>CodeWithHarry</li>
          <li>Gamiming</li>
        </ul>
      </div>
    </div>
  );
};

export default Menuitems;
