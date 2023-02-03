export * from './unused.service';
import { UnusedService } from './unused.service';
export * from './used.service';
import { UsedService } from './used.service';

export const APIS = [UnusedService, UsedService];
