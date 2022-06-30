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
    let responsePacket = {reply:"We will get back to you shortly.", id:-1};
    await axios
      .post(baseUrl, {
          id: props.id ?? -1,
          text: props.text
      })
      .then(function (response) {
        // handle success
        responsePacket.reply = response.data.reply;
        responsePacket.id = response.data.id;
        return responsePacket;
        // alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        // alert(error.message);
        return responsePacket;
      });
      return responsePacket;
  };
