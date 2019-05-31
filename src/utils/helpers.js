export const getPosition = new Promise((resolve, reject) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position.coords),
      (error) => reject(new Error(error.message))
    );
  } else {
    reject(new Error("Browser does't support geolocation"));
  }
});

