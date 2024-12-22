import axios from "axios";

const fetchData = async (SERVICE_URL: string, originalUrl: string) => {
  const url = `${SERVICE_URL}${originalUrl}`;
  const response = await axios.get(url);
  return response.data.data;
};

export default fetchData;
