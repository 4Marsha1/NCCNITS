import React from "react";
import styles from "./HomeScreenComponent.module.css";
import RecentUpdatesComponent from "./children/recentUpdates";
import StrengthDetailsComponent from "./children/strengthDetails";
import Carousel from "../Carousel/Slider";
import ToTheTopBtn from "../ToTheTop";
import { Link } from "react-router-dom";

const index = ({ recentUpdates, strengthDetails, carouselData }) => {
  const recentUpdatesTabs = recentUpdates.map((recentUpdate) => (
    <RecentUpdatesComponent key={recentUpdate.id} recentUpdate={recentUpdate} />
  ));

  return (
    <div className={styles["home"]}>
      <ToTheTopBtn />
      <div className={styles["carousel"]}>
        <Carousel carouselData={carouselData} />
        <div className={styles["gallery-container"]}>
          <div className={styles["see-more"]}>
            <Link to={"/gallery"} className={styles["see-more-text"]}>
              See More
            </Link>
          </div>
        </div>
      </div>
      <span className={styles["quote"]}>
        "The safety, honour & welfare of your country comes first, always &
        every time. The honour, welfare & comfort of the men you command, comes
        next. Your own ease, comfort & safety comes last, always & every time. "
      </span>
      <div className={styles["hr"]}></div>
      <div className={styles["message"]}>
        <span className={styles["message-text"]}>
          "The NCC Cadets of NIT Silchar are a class apart. Their professional
          approach to various NCC activities has fetched accolades during
          various national level competitions. Their performance has always been
          consistent and commendable. Due to their high IQ level and a technical
          bent of mind, they tend to stand out in the crowd and execute the task
          with a finesse. In addition they possess a good sense of humor, which
          binds the team together and keeps everyone amused. I wish them loads
          of good luck and success in all their endeavours."
        </span>
        <br />
        <span className={styles["message-author"]}>
          Message by - 62 Assam Girls BN - Colonel Srinath Sharma
        </span>
      </div>
      <div className={styles["parent-section"]}>
        <span className={styles["title"]}>Recent Updates</span>
        <span className={styles["title-underline"]}></span>
        {recentUpdatesTabs}
      </div>
      <div className={styles["parent-section"]}>
        <span className={styles["title"]}>NCC-NITS in Figures</span>
        <span className={styles["title-underline"]}></span>
        <StrengthDetailsComponent
          title={"NCC-NITS in Figures"}
          strengthDetails={strengthDetails}
        />
      </div>
    </div>
  );
};

export default index;
