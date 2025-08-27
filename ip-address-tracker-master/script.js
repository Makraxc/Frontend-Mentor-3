let lat = 34.08057;
let lng = -118.07285;
let map, marker;
document.addEventListener("DOMContentLoaded", () => {
  //init map
  map = L.map("map").setView([lat, lng], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  
  const customIcon = L.icon({
    iconUrl: "images/icon-location.svg", // path to your icon image
    iconSize: [32, 40], // size of the icon [width, height]
    iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
    popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
  });
marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);
});
// Helper function to update text content
function textContent(target, content) {
  document.querySelector(target).textContent = content;
}
const fetchingAPI = async (ip) => {
  //add error handling
  try {
    const response = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_wRN03qIVg9QUCd38vpDCilN5AMS8F&domain=${ip}`
    );
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    // u just need to use await once on response to convert it to an object, then it's no longer a promise(no more await)

    const IP = await response.json();
    const ipAddress = IP.ip;
    const region = IP.location.region;
    const city = IP.location.city;
    const postalCode = IP.location.postalCode;
    const timezone = IP.location.timezone;
    const isp = IP.isp;
    const longitude = IP.location.lng;
    const latitude = IP.location.lat;

    lat = latitude;
    lng = longitude;
    // Update map view and marker
    if (map && marker && lat && lng) {
      map.setView([lat, lng], 13);
      marker.setLatLng([lat, lng]);
    }
    textContent(".ipPlaceholder", ipAddress);
    textContent(".district", region);
    textContent(".city", city);
    textContent(".postalCode", postalCode);
    textContent(".timezoneOffset", timezone);
    textContent(".ispPlaceholder", isp);
    if (!isp) {
      textContent(".ispPlaceholder", "ISP information not available");
    }
  } catch (error) {
    console.error(error);
    textContent(".ipPlaceholder", "Error fetching data");
  }
};

document.querySelector(".searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const ip = document.querySelector(".searchBox").value;
  fetchingAPI(ip);
});

// Marker is just an optional indicator

// response.status show http status code(error) like 200 404 or 401. response.statusText is its short discription

// ok is a property of response object returned by fetch. it means the request was successful or failed otherwise

