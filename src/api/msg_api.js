// API call for messages
import axios from "axios";

// const baseUrl = 'https://jsonplaceholder.typicode.com';

const baseUrl =  "https://4cdb-117-20-31-76.in.ngrok.io/conversation";

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
 
  export async function postData (props){
    let reply = "We will get back to you shortly.";
    await axios
      .post(baseUrl, {
        user_input : props.text
      })
      .then(function (response) {
        // handle success
        reply = response.data.data;
        return reply;
        // alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        // alert(error.message);
        return reply;
      });
      return reply;
  };
