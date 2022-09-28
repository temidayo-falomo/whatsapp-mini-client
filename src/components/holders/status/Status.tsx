import React, { useContext } from "react";
import { StyledStatus } from "./Status.styled";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AppContext } from "../../../helper/Context";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

function Status() {
  const { allStatus, statusByUser, setDisplayStatus } = useContext(AppContext);
  const [currNo, setCurrNo] = useState("");
  return (
    <StyledStatus>
      <div className="carousel">
        <Slide>
          {statusByUser.map((data: any) => {
            return (
              <div className="each-slide-effect">
                <div
                  style={{ backgroundColor: data.statusColor }}
                  className="tall"
                >
                  <div className="top row center btw">
                    <div className="row gap-1">
                      <div
                        className="avatar"
                        style={{ backgroundImage: `url(${data.userAvt})` }}
                      ></div>
                      <div className="col gap-5">
                        <h4>{data.userName}</h4>
                        <span>Today at {data.realTime}</span>
                      </div>
                    </div>

                    <MdOutlineCancel
                      style={{ fontSize: "2rem" }}
                      className="pointer"
                      onClick={() => setDisplayStatus(false)}
                    />
                  </div>

                  <div className="tiny-rects row gap-1">
                    {statusByUser.map((data: any) => {
                      return <div className="tiny-rect"></div>;
                    })}
                  </div>
                  <span className="status-text">{data.statusText}</span>
                  <div className="footer"></div>
                </div>
              </div>
            );
          })}
        </Slide>
      </div>
    </StyledStatus>
  );
}

export default Status;
