let baseUrl;
let socketUrl;

if (import.meta.env.VITE_NODE_ENV === "production") {
  baseUrl = "add";
  socketUrl = "add";
} else {
  baseUrl = "http://192.168.0.106:8001";
  socketUrl = "ws://192.168.0.106:8001";
}

export { baseUrl, socketUrl };
