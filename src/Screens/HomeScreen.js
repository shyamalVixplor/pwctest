import React from "react";

const HomeScreen = () => {
  const [text, setText] = React.useState("");
  const [data, setData] = React.useState([]);
  const [loadingIndicator, setLoadingIndicator] = React.useState(false)
  const [deleteLoadingIndicator, setDeleteLoadingIndicator] = React.useState(false);
  const [deletetedIndex, setDeletedIndex] = React.useState(null)
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const addData = () => {
      setLoadingIndicator(true);
      setTimeout(() => {
            setLoadingIndicator(false);
            setData((data) => [...data, text]);
            setText("");
      }, 2000);
  };

  const deleteData = (i) => {
    setDeleteLoadingIndicator(true);
    setDeletedIndex(i);
    setTimeout(() => {
        setDeleteLoadingIndicator(false);
        const filteredData = data.filter((item, index) => {
            return index !== i;
          });
          setData(filteredData);
    }, 2000);

  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <input
          placeholder="add text"
          name="text"
          value={text}
          onChange={handleChange}
        />
        <button onClick={addData}>{!loadingIndicator? 'Add' :'Loading...'}</button>
      </div>
      <div>
        <ul>
          {data.length
            ? data.map((textData, i) => {
                return (
                  <div>
                    <li key={i}>{textData}</li>
                    <button
                      style={{ color: "white", backgroundColor: "red" }}
                      onClick={() => deleteData(i)}
                    >
                     {
                        deletetedIndex === i && deleteLoadingIndicator ? 'Deleting...':'Delete'
                     }
                    </button>
                  </div>
                );
              })
            : null}
        </ul>
      </div>
    </>
  );
};

export default HomeScreen;
