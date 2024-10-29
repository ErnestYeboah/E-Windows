import { useContext, useState } from "react";
import { WindowsContext } from "../../context.jsx/context";

export default function useFetchApi(url, options = {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState({});
  const { cityName } = useContext(WindowsContext);
  async function fetchData() {
    try {
      if (cityName) {
        setLoading(true);
        const response = await fetch(url, { ...options });

        if (!response.ok) {
          throw new Error("Invalid search");
        }

        const data = await response.json();

        if (data) {
          setLoading(false);
          setData(data);
        }
      }
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  }

  return [loading, error, data, fetchData];
}
