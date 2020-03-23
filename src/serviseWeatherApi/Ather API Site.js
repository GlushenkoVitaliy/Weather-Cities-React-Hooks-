//API Storm Glass - 4db5bb58-4814-11ea-94ae-0242ac130002-4db5bc70-4814-11ea-94ae-0242ac130002

fetch(`https://api.stormglass.io/v1/weather/point?lat=${lat}&lng=${lng}`, {
  headers: {
    'Authorization': 'example-api-key'
  }
}).then((response) => response.json()).then((jsonData) => {
  // Do something with response data.
});
