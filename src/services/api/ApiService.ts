import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { IBaseService } from '@/types/core.types';
import { ApiServiceData, ApiServiceQueryParams } from '@/types/utility.types';
import AsyncHandler from '@/utils/decorators/AsyncHandler';

/**
 * Service class for making HTTP requests using Axios.
 * @implements IBaseService<AxiosError>
 */
class ApiService implements IBaseService<AxiosError> {
  private axiosInstance;

  /**
   * Creates an instance of ApiService.
   * @param {string} baseURL - Base URL for API requests.
   */
  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL:
        baseURL ||
        process.env.REACT_APP_API_BASE_URL ||
        'https://api.example.com',
      timeout: 20000,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      withCredentials: true
    });

    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      (response) => response,
      (error) => {
        this.handleError(error);
        return Promise.reject(error);
      }
    );
  }

  /**
   * Handles Axios errors and throws custom error messages.
   * @param {AxiosError} error - The Axios error object.
   * @throws {Error} Throws an error message based on the error type.
   */
  handleError(error: AxiosError) {
    let errorMessage = 'An error occurred. Please try again.';
    if (error.response) {
      // Handle specific status codes
      if (error.response.status === 401) {
        errorMessage = 'Unauthorized access. Please log in again.';
      } else if (error.response.status === 403) {
        errorMessage = 'Forbidden access.';
      } else if (error.response.status >= 500) {
        errorMessage = 'Server error. Please try again later.';
      }
    } else if (error.request) {
      errorMessage = 'No response received from the server.';
    } else {
      errorMessage = error.message;
    }
    throw new Error(errorMessage);
  }

  /**
   * Performs a GET request.
   * @async
   * @param {string} url - The URL for the GET request.
   * @param {ApiServiceQueryParams} [params={}] - Optional query parameters.
   * @param {AxiosRequestConfig} [config={}] - Optional Axios request configuration.
   */
  @AsyncHandler
  async get(
    url: string,
    params: ApiServiceQueryParams = {},
    config: AxiosRequestConfig = {}
  ) {
    const response = await this.axiosInstance.get(url, { params, ...config });
    return response.data;
  }

  // Similarly, document other methods like post, put, patch, and delete

  /**
   * Performs a POST request.
   * @async
   * @param {string} url - The URL for the POST request.
   * @param {T} [data={}] - The data to send with the POST request.
   * @param {AxiosRequestConfig} [config={}] - Optional Axios request configuration.
   * @template T - The type of data expected in the response.
   */
  @AsyncHandler
  async post<T extends ApiServiceData>(
    url: string,
    data: T = {} as T,
    config: AxiosRequestConfig = {}
  ) {
    const response = await this.axiosInstance.post(url, data, config);
    return response.data;
  }
}

export default new ApiService('https://api.production.com');
