import styles from "./App.module.css";
import Content from "./Content";

function App() {
  return (
    <>
      <div id={styles.header}>
        <div id={styles.menuBar}>
          <div className={styles.menuItem}>
            <a href="">Menu Item 1</a>
          </div>
          <div className={styles.menuItem}>
            <a href="">Menu Item 2</a>
          </div>
          <div className={styles.menuItem}>
            <a href="">Menu Item 3</a>
          </div>
          <div className={styles.menuItem}>
            <a href="">Menu Item 4</a>
          </div>
          <div className={styles.menuItem}>
            <a href="">Menu Item 5</a>
          </div>
        </div>
        <div className={styles.searchBar}>
          <label for="asin">Asin:</label>
          <input
            className={styles.searchBarItem}
            id="asin"
            name="asin"
            placeholder="AH91919292929"
          />
          <label for="item">Item#:</label>
          <input
            className={styles.searchBarItem}
            id="itemNumber"
            name="itemNumber"
            placeholder="CK2920"
          />
          <label for="upc">UPC:</label>
          <input
            className={styles.searchBarItem}
            id="upc"
            name="upc"
            placeholder="929292929292929"
          />
        </div>
      </div>
      <div id={styles.main}>
        <Content></Content>
      </div>
      <div id={styles.footer}>Footer</div>
    </>
  );
}

export default App;
