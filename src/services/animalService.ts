import axiosClient from '@/tools/axios_client';

class AnimalService {
  public getAnimals({ page, limit }: any) {
    return axiosClient.get('/v2/animals', {
      params: {
        page,
        limit,
      },
    });
  }
}

export default new AnimalService();
