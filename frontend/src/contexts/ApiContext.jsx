import axios from "axios";
import { createContext, useContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

const ApiContext = createContext();

export default function ApiProvider({ children }) {
  const [data, setData] = useState();
  const [dataApi, setDataApi] = useState();
  const [dataNoAlcohol, setDataNoAlcohol] = useState(); // Nouvel état pour stocker dataNoAlcohol
  const [alertAge, setAlertAge] = useState(true);
  const [valueMobile, setValueMobile] = useState(true);

  const drinkIncludesNonAlcoholic = (drink) => {
    return Object.values(drink).some((e) => e && e.includes("Non alcoholic"));
  };
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

        setDataApi(allData);
        setDataNoAlcohol(
          allData.filter((drink) => drinkIncludesNonAlcoholic(drink))
        );
      } catch (error) {
        console.error(error);
      }
    };

    fetchAllData();
  }, []);

  useEffect(() => {
    if (alertAge) {
      setData(dataApi);
    } else {
      setData(dataNoAlcohol);
    }
  }, [alertAge, dataApi, dataNoAlcohol]);

  const value = useMemo(
    () => ({
      data,
      setData,
      alertAge,
      setAlertAge,
      dataNoAlcohol,
      dataApi,
      valueMobile,
      setValueMobile,
    }),
    [data, dataNoAlcohol, alertAge, valueMobile]
  );

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
}

ApiProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(ApiContext);
