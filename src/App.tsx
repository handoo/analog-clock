import React from "react";
import classnames from "classnames";

import Clock from "./components/clock";
import styles from "./App.module.scss";

function App() {
    return (
        <React.Fragment>
            <div className={classnames(styles.container)}>
                <div className={classnames(styles.inner)}>
                    <Clock secondHand />
                </div>
            </div>
            <div className={classnames(styles.container)}>
                <div className={classnames(styles.inner)}>
                    <Clock />
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
