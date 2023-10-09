//Fetch
//GET request:
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

//POST request:
const data = { username: 'example' };

fetch('https://api.example.com/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

//Axios
//GET request:
import axios from 'axios';

axios.get('https://api.example.com/data')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
//POST request:
import axios from 'axios';

const data = { username: 'example' };

axios.post('https://api.example.com/data', data)
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));
