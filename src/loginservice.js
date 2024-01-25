import axios from "axios";

// const GRE_URL = "http://192.168.0.168:7175";
 
 const GRE_URL = "http://172.25.60.10:7175";


class LoginService  {
  static login(user) {
    return axios.post(`${GRE_URL  }/login`, user);
  }
}

export default new LoginService(); 
