# MyDrive Demo app
This is a demo app demonstrating a file upload application that is connected to an external authentication service. 

## Installing
`npm install`

## Development
`npm run dev`, then open a browser in and navigate to http://localhost:3000/.


## Design
[See design docs in figma](https://www.figma.com/file/3w6T8aQ37fvaeWQttp8a0g/MyDrive?t=nZvdoFYl06b6ctVF-6)

## Structure
- public: public file directory  
- src  
-- client: client side functions  
-- components: client side components   
-- pages: pages & next.js documents  
--- pages/api: api routes (1 file = 1 route)  
-- services: server side functions  
-- styles: client side styles  
- uploads: upload directory  
 
## About
Tech used
- next.js
- react
- redux
- lowdb local json db
- typescript

