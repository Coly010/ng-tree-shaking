import {InjectionToken} from "@angular/core";

export * from './api/api';

export const BASE_PATH = new InjectionToken<string>('basePath')
