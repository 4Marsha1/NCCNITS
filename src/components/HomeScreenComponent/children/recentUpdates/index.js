import React from "react";
import styles from "./styles.module.css";

const index = ({ recentUpdate }) => {
  return (
    <>
      <div className={styles["updates-content"]}>
        <span className={styles["heading"]}>{recentUpdate.heading}</span>
        <div className={styles["content"]}>
          <img
            className={styles["updates-img"]}
            src={recentUpdate.img}
            alt="iamge"
          />
          <div className={styles["updates-text"]}>
            {recentUpdate.content
              .split("Diwali Donation Drive")
              .map((text, index) => (
                <>
                  {index != 0 && <b>Diwali Donation Drive</b>} {text}
                </>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
