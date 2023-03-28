export interface IConsent {
  mouseTracking?: boolean;
  fingerprintTracking?: boolean;
}

export interface ICategory {
  mainCategory?: string;
  subcategory?: string[];
}

export enum SiteName {
  MyAuto = "myauto",
  MyHome = "myhome",
}

export type AppVersion = `${number}.${number}.${number}`;
export interface ICategory {
  mainCategory: string;
  subcategory: string[];
}

declare class DataHubService {
  readonly appVersion: AppVersion;
  readonly $consent: BehaviorSubject<IConsent | null>;
  readonly $siteName: BehaviorSubject<SiteName | null>;
  readonly $searchQuery: BehaviorSubject<string | null>;
  readonly $category: BehaviorSubject<ICategory | null>;
  setConsent(options: IConsent): null | IConsent;
  getConsent(): null | IConsent;
  clearConsent(): boolean;
  setSiteName(siteName: SiteName): boolean;
  getSiteName(): null | SiteName;
  clearSiteName(): boolean;
  setSearchQuery(searchQuery: string): null | string;
  getSearchQuery(): null | string;
  clearSearchQuery(): boolean;
  setCategory(category: null | ICategory): null | ICategory;
  getCategory(): null | ICategory;
  clearCategory(): boolean;
}

declare global {
  interface Window {
    _dataHub: {
      dataHubService: IDataHubService;
    };
  }
}
