import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
  let [apiData, setApiData] = useState({});
  let [character, setCharacter] = useState("");
  let [quote, setQuote] = useState("");

  useEffect(async () => {
    const response = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes"
    );
    setApiData(response.data[0]);
    setCharacter(response.data[0].character);
    setQuote(response.data[0].quote);
  }, []);


  const handleSubmit = () => {
    console.log(character + ' ' + quote);
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="card m-3">
          <form className="m-3">
            <div className="mb-3">
              <label className="form-label">Character</label>
              <input
                className="form-control"
                value={character}
                onChange={(e) => setCharacter(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Quote</label>
              <input
                className="form-control"
                value={quote}
                onChange={(e) => setQuote(e.target.value)}
              />
            </div>
            <div>
              <img src={apiData.image}></img>
            </div>
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
