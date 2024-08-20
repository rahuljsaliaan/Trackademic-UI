import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { IBaseService, ErrorResponseData } from '@/types/core.types';
import { ApiServiceData, ApiServiceQueryParams } from '@/types/utility.types';
// import AsyncHandler from '@/utils/decorators/AsyncHandler';
import AppConfig from '@/config/AppConfig';

/**
 * Service class for making HTTP requests using Axios.
 * @implements IBaseService<AxiosError>
 */
class ApiService implements IBaseService<AxiosError> {
  private axiosInstance;

  /**
   * Creates an instance of ApiService.
   * @param {string} baseURL - Base URL for API requests.
   * @param {number} baseURL - Axios request timeout.
   */
  constructor(baseURL: string, timeout: number) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout,
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
      } else {
        errorMessage =
          (error.response.data as ErrorResponseData).message || errorMessage;
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
  async get(
    url: string,
    params: ApiServiceQueryParams = {},
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await this.axiosInstance.get(url, {
        params,
        ...config
      });
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  /**
   * Performs a POST request.
   * @async
   * @param {string} url - The URL for the POST request.
   * @param {T} [data={}] - The data to send with the POST request.
   * @param {AxiosRequestConfig} [config={}] - Optional Axios request configuration.
   * @template T - The type of data expected in the response.
   */
  async post<T extends ApiServiceData>(
    url: string,
    data: T = {} as T,
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await this.axiosInstance.post(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  /**
   * Performs a PUT request.
   * @async
   * @param {string} url - The URL for the PUT request.
   * @param {T} [data={}] - The data to send with the PUT request.
   * @param {AxiosRequestConfig} [config={}] - Optional Axios request configuration.
   * @template T - The type of data expected in the response.
   */
  async put<T extends ApiServiceData>(
    url: string,
    data: T = {} as T,
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await this.axiosInstance.put(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  /**
   * Performs a PATCH request.
   * @async
   * @param {string} url - The URL for the PATCH request.
   * @param {T} [data={}] - The data to send with the PATCH request.
   * @param {AxiosRequestConfig} [config={}] - Optional Axios request configuration.
   * @template T - The type of data expected in the response.
   */
  async patch<T extends ApiServiceData>(
    url: string,
    data: T = {} as T,
    config: AxiosRequestConfig = {}
  ) {
    try {
      const response = await this.axiosInstance.patch(url, data, config);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }

  /**
   * Performs a DELETE request.
   * @async
   * @param {string} url - The URL for the DELETE request.
   * @param {AxiosRequestConfig} [config={}] - Optional Axios request configuration.
   */
  async delete(url: string, config: AxiosRequestConfig = {}) {
    try {
      const response = await this.axiosInstance.delete(url, config);
      return response.data;
    } catch (error) {
      this.handleError(error as AxiosError);
    }
  }
}

export default new ApiService(
  AppConfig.Api.BASE_URL,
  AppConfig.Api.REQUEST_TIMEOUT
);
