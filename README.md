# Working With NASA Open API -> APOD

- Astronomical Picture Of the Day
- Using node, express and request modules
- Typescript v-2.7.1
- Learning how to use third-party APIs
- This app will use the NASA API APOD to pull pictures requested by the user for a certain day.
- No css styling for right now.  WIll add at later date.
- 2 routes
- > search
- > results

- https://api.nasa.gov/planetary/apod?date=<date goes here>&hd=<true/false>&api_key=<api key goes here>

- date -> YYYY-MM-DD format
- hd -> true/false
- api_key -> Random string of alphanumeric

*** Big hurdles jumped!! ***
- Modules 'express' and 'request' had same identifier -> Application
  ** Fixed by importing all from 'express' and 'request' into their own namespaces.  I also truncated 'express' module request and repsonse to req and res.  The request in 'express' and 'request' modules were clashing.
  
- Created an interface for the data read in from API.  The structure of the incoing data was not that big.  I was not comfortable with using the ':any' data type.
