import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: '/',
  timeout: 60000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

instance.interceptors.response.use(
  (resp) => resp,
  (error) => {
    return Promise.reject(error);
  }
);

export const http = instance;

export async function uploadImageForVideo(formData: FormData) {
  return http.post('/api/image-to-video', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}

export async function getVideoResult(taskId: string) {
  return http.get(`/api/image-to-video?taskId=${encodeURIComponent(taskId)}`);
}


