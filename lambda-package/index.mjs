// index.mjs
import fetch from "node-fetch";

export const handler = async (event) => {
  const res = await fetch("https://example.com");
  const data = await res.text();

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};
