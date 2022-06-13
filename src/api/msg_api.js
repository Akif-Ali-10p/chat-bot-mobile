// API call for messages
import axios from "axios";

const baseUrl = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
    console.log("working");
    var url = baseUrl + "/users/1";
    try {
      var response = await axios.get(url);
    } catch (error) {
      // handle error
      alert(error.message);
    }
    return response;
  };
 
  export async function postData (){
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };
