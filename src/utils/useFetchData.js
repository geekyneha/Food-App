import { useEffect, useState } from "react";
import { Menu_URL } from "./constant.js";
const useFetchData = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(Menu_URL + resId);
      const json = await data.json();
      setResInfo(json.data);
    };

    fetchData();
  }, [Menu_URL, resId]);

  return resInfo;
};

export default useFetchData;
