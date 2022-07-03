import React from "react";


//include images into your bundle
import Logo4Geeks from "../../img/Logo4geeks.png";
import logoXS from "../../img/logoXS.jpg";

//create your first component
const Home = () => {
  return (
    <div className="text-center bg-black ">
      <h1 className="text-center mt-1 bg-dark text-white py-2">TODO LIST</h1>
      <div className=" d-flex justify-content-between py-2 px-2">
        <h3 className="d-flex text-white col-4 bg-dark d-flex justify-content-center align-items-center rounded-3 border border-white"> 4Geeks Academy / Xavier Silva</h3>  
        <p>
          <img src={Logo4Geeks} className=" col-10 rounded-1 position-relative mt-2" />
        </p>
      </div>
    </div>
  );
};

export default Home;
