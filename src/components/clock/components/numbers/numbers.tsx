import React from "react";
import classnames from "classnames";

import styles from "./numbers.module.scss";

function Numbers() {
    return (
        <div className={classnames(styles.container)}>
            <ul className={classnames(styles.list)}>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>1</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>2</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>3</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>4</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>5</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>6</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>7</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>8</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>9</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>10</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>11</span>
                </li>
                <li className={classnames(styles.item)}>
                    <span className={classnames(styles.number)}>12</span>
                </li>
            </ul>
        </div>
    );
}

export default Numbers;
