export as namespace diveMalta;

export interface DiveMalta {
  name: string;
  length: number;
  extras?: string[];
}

export interface DiveMaltaItem {
  uid: string,
}

export type InfiniteMenuShape = {
  defaultOpen?: boolean;
}

export type WierdShape = {
  value?: any;
}

export type DMRoute = {
  path: string;
  
}

export type DMMenuItem = {
  value: any;
}

export interface DiveMaltaTrack {
name: string;
length: number;
extras?: string[];
}

export function dmFunction(payload: string): string;
