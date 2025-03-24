import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenue } from "../utils/appSlice";
import {
    cros_URL,
    YOUTUBE_SEARCH_API,
    YOUTUBE_SEARCH_VIDEO_API,
} from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";
import { addVideo } from "../utils/videoSlice";
import { Link, useNavigate } from "react-router-dom";


const Head = () => {
    const [serchQuery, setserchQuery] = useState("");
    const [suggestion, setsuggestion] = useState([]);
    const [showsuggestion, setshowsuggestion] = useState(false);

   
    const searchcache = useSelector((store) => store.search);
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const cacheKeys = Object.keys(searchcache);
    const lastKey = cacheKeys[cacheKeys.length - 1];


    useEffect(() => {
        const timer = setTimeout(() => {
            if (!searchcache[serchQuery]) {
                getSearchSeuggestions();
            } else {
                setsuggestion(searchcache[serchQuery]);
            }
        }, 100);

        return () => {
            clearTimeout(timer);
        };
    }, [serchQuery]);
    // Target URL from you want to fetch data m ,ex-github api

    const getSearchSeuggestions = async () => {
        const response = await fetch(
            `${cros_URL}${encodeURIComponent(YOUTUBE_SEARCH_API + serchQuery)}`
        ); //removing cros issue
        const data = await response.json();
        if (data[1] == null) {
            setsuggestion(searchcache[lastKey]);
        } else {
            setsuggestion(data[1]);

            dispatch(
                cacheResult({
                    [serchQuery]: data[1],
                })
            );
        }
    };

    const handleSuggestion = async (s) => {
        try{const responce = await fetch(YOUTUBE_SEARCH_VIDEO_API + s);
        const result = await responce.json();

        dispatch(addVideo(result?.items));
        setserchQuery(s)
    navigate("/")}
        catch(err){
            console.error("ERROR handling suggestion",err)
        }
       
    };

    const toggleMenueHandler = () => {
        dispatch(toggleMenue());
    };

    return (
        <div className=" grid grid-flow-col p-2 mx-2 shadow-md sticky top-0 bg-white">
            <div className="flex col-span-2 cursor-pointer">
                <img
                    onClick={() => toggleMenueHandler()}
                    className="h-7 p-1 hidden  lg:block"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
                    alt="icon"
                />
                <a href="/">
                    {" "}
                    <img
                        className="lg:h-7 h-5 lg:m-1 m-2 lg:ml-4 "
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSajxKRUVWIV0I9w84rXo1O_h1jDGxrucgFZQ&s"
                        alt="logo"
                    />
                </a>
            </div>
            <div className=" flex-col col-span-9">
                
                  <form className="  flex items-center justify-center" onSubmit={(e)=>{e.preventDefault(); setshowsuggestion(false)}}> <input
                        className="my-1 p-2 h-8 lg:h-10 border w-3/4 lg:w-1/2 border-gray-400 rounded-l-full"
                        type="text"
                        value={serchQuery} 
                        onChange={(e) => {setserchQuery(e?.target?.value);setshowsuggestion(true)}}
                        onFocus={() => setshowsuggestion(true)}
                        
                        onBlur={() => setTimeout(() => setshowsuggestion(false), 300)}
                    />
                    <button
                        className=" lg:px-4 px-2 lg:py-2 h-8 lg:h-10 border border-gray-400 bg-slate-100 rounded-r-full "
                        onClick={() => handleSuggestion(serchQuery)}
                    >
                        🔍
                    </button>
                    </form>
                
                {showsuggestion && (
                    <div className="mt-1 absolute ml-6 lg:ml-64 bg-white w-1/3  shadow-lg rounded-lg border border-slate-200">
                        <ul>
                            {suggestion?.map((s) => (
                              <Link to={"/"} key={s}> <li
                                    
                                    className="p-2  shadow-sm hover:bg-gray-100 cursor-default "
                                    onMouseDown={() => {
                                        handleSuggestion(s);
                                        
                                    }}
                                >
                                    {s}
                                </li> </Link>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            <div className="flex col-span-1 justify-center items-center ">
                <img
                    className="lg:h-7 lg:w-7 h-6 w-6"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
                    alt="profile"
                />
            </div>
        </div>
    );
};

export default Head;
