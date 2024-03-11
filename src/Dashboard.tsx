import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stocks, setStocks] = useState([]);
  const { getToken } = useKindeAuth();

  useEffect(() => {
    // get stock data
    const fetchData = async () => {
      const accessToken = await getToken();
      const res = await fetch("http://example.com/api/stocks", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const data = await res.json();
      setStocks(data);
    };

    fetchData();
  }, [getToken]);

  return (
    <>
      <h1 className="text-5xl font-bold mb-3">Dashboard</h1>
      <p className="text-2xl">This is a private page with secret data.</p>
    </>
  );
}
