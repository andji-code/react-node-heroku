import * as Axios from "axios";

//to get json arr of hotDogs 
const dal ={

    getHotDogs:()=>{
        return Axios.get('/api/getHotDogs');
    },

    addHotDog:()=>{
        return Axios.post('/api/addHotDog',  {
            "id": -1,
            "name": "HOT_DOG_-1",
            "img":"hotDogAnon.jpg",
            "ingredients": [
              {
                  "name":"ahahhah",
                  "mass":"999"
              }
            ],
            "mass": 999,
            "cost": 999
          }
        );
    },

    deleteHotDog:()=>{
        return Axios.delete('/api/deleteHotDog');
    }

}


export default dal;
