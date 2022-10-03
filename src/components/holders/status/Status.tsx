import React, { useContext } from "react";
import { StyledStatus } from "./Status.styled";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { AppContext } from "../../../helper/Context";
import { MdOutlineCancel } from "react-icons/md";
import { useState } from "react";

function Status() {
  const { statusByUser, setDisplayStatus, filteredStatuses } =
    useContext(AppContext);

  const [active, setActive] = useState<number>();

  const handleIndex = (param: number) => {
    setActive(param);
  };

  const indicators = (index: any) => (
    <div className="indicators-w">
      <div
        className="indicator tiny-rect"
        onClick={() => handleIndex(index)}
      ></div>
    </div>
  );

  // Todo Statusbyuser.filter.map(filter by "clicked on id")

  return (
    <StyledStatus>
      <div className="carousel">
        <Slide indicators={indicators} scale={1.4} infinite={false}>
          {statusByUser
            ?.filter((val: any) => {
              return val.userId === filteredStatuses;
            })
            ?.map((data: any) => {
              return (
                <div className="each-slide-effect" key={data.id}>
                  <div
                    style={{ backgroundColor: data.statusColor }}
                    className="tall"
                  >
                    <div
                      className="top row btw"
                      style={{ alignItems: "flex-start" }}
                    >
                      <div className="row gap-1">
                        <div
                          className="avatar"
                          style={{ backgroundImage: `url(${data.userAvt})` }}
                        ></div>
                        <div className="col gap-5">
                          <h4 className="cap">{data.userName}</h4>
                          <span>Today at {data.realTime}</span>
                        </div>
                      </div>

                      <MdOutlineCancel
                        style={{ fontSize: "2rem" }}
                        className="pointer"
                        onClick={() => setDisplayStatus(false)}
                      />
                    </div>

                    <span className="status-text">{data.statusText}</span>
                    <div className="footer">
                      <input type="text" placeholder="Type a reply" />
                      <button>Send</button>
                    </div>
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
