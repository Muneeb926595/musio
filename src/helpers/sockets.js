import io from "socket.io-client";

const PROD_ENDPOINT = "https://food-book.co";
const LOCAL_ENDPOINT = "http://localhost:3000";
const STAGING_ENDPOINT = "https://staging.food-book.co";
export const socket = io(PROD_ENDPOINT);
