import axios from "axios";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const [data, setData] = useState();
  const alphabet = "abcdefghijklmnopqrstvwyz12345679";
  const letter = alphabet.split("");
  const urls = letter.map(
    (e) => `${import.meta.env.VITE_API_BASE_URL}search.php?f=${e}`
  );
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const responses = await Promise.all(urls.map((url) => axios.get(url)));
        const allData = responses
          .map((response) => response.data.drinks)
          .flat();

        setData(allData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, []);

  const value = useMemo(
    () => ({
      data,
      setData,
    }),
    [data]
  );
  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(ApiContext);
