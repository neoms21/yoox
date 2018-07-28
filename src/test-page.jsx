import React from "react";
import styles from "./App.scss";
import Button from "./components/button/button";

const TestPage = () => {
  return (
    <div className={styles.app}>
      <div className={styles.header}>Test page for buttons</div>

      <div style={{ display: "flex" }}>
        <Button
          text="Button CTA"
          arrowPosition="left"
          actions={[
            { text: "a", icon: "Minus" },
            { text: "b", icon: "Plus" },
            { text: "c", icon: "Search" }
          ]}
        />

        <Button
          text="Second Button CTA"
          arrowPosition="right"
          width="500px"
          actions={[
            { text: "a", icon: "Minus" },
            { text: "b", icon: "Plus" },
            { text: "c", icon: "Search" }
          ]}
        />
      </div>
    </div>
  );
};

export default TestPage;
