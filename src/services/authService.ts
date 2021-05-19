import { CLIENT_ID, CLIENT_SECRET } from '@/constants/api_url';
import axiosClient from '@/tools/axios_client';
import { LoginInput } from '@/common/interface';

class AuthService {
  public login(data: LoginInput) {
    return axiosClient.post('/v2/oauth2/token', {
      grant_type: 'client_credentials',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });
  }
  public logout() {
    localStorage.removeItem('access-token');
  }
}

export default new AuthService();
