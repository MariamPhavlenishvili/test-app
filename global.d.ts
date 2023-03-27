export interface IConsent {
  mouseTracking?: boolean;
  fingerprintTracking?: boolean;
}

export enum SiteName {
  MyAuto = "myauto",
  MyHome = "myhome",
}

export type AppVersion = `${number}.${number}.${number}`;

export interface IDataHubService {
  readonly appVersion: AppVersion;
  readonly $consent: BehaviorSubject<IConsent | null>;
  readonly $siteName: BehaviorSubject<SiteName | null>;
  readonly $searchQuery: BehaviorSubject<string | null>;
  readonly $categories: BehaviorSubject<string[] | null>;
  setConsent(options: IConsent): null | IConsent;
  getConsent(): null | IConsent;
  clearConsent(): boolean;
  setSiteName(siteName: SiteName): boolean;
  getSiteName(): null | SiteName;
  clearSiteName(): boolean;
  setSearchQuery(searchQuery: string): boolean;
  getSearchQuery(): null | string;
  clearSearchQuery(): null | string;
  setCategory(category: null | string[]): boolean;
  getCategory(): null | string[];
  clearCategory(): null | string[];
}

declare global {
  interface Window {
    _dataHub: {
      dataHubService: IDataHubService;
    };
  }
}
