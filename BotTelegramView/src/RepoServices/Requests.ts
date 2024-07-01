import axios from 'axios';
import { addInterceptors } from 'RepoServices/interceptors';

const request = axios.create({ withCredentials: true });

addInterceptors(request);

export default request;
