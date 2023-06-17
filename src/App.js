import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TableContent from "./components/TableContent";

//create my url varibles use const for base and use let for endpoint so as to make end point mutable
const baseUrl = "https://jsonplaceholder.typicode.com/";
let endpoitUrl= "users"
function App() {

//create an instance of expected data in a variable to pass into state  
  const ExpectedData = {
    "id": null,
    "name": null,
    "username": null,
    "email": null,
    "address": {
      "street": null,
      "suite": null,
      "city": null,
      "zipcode": null,
      "geo": {
        "lat": null,
        "lng": null
      }
    },
    "phone": null,
    "website": null,
    "company": {
      "name": null,
      "catchPhrase": null,
      "bs": null
    }
  }
  //create use state for page title
  const [pageTitle] = useState("Fake Users");
  //create use state for users and pass in the skeleton of expected variables
  const [users, setUsers] = useState([ ExpectedData ]);
  //set loading state
   const [loading, setLoading] = useState(true);

//creat fetch api url
const getUsers= async()=>{
setLoading(true)
  try{
    const response = await fetch(baseUrl + endpoitUrl);
    const data = await response.json()

    setUsers(data)
    setLoading(false)
  }catch(error){
    setLoading(false)
  }
}

//use effect hook to call the api
useEffect(() => {
  getUsers()
}, [])

//finally, send all the stats to the main component
  return (
    <div>
      <Header pageTitle ={pageTitle}/>
      <TableContent users={users} loading={loading} />
    </div>
  );
}

export default App;
