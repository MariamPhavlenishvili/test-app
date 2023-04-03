import { BehaviorSubject } from 'rxjs';

interface IConsent {
    mouseTracking?: boolean;
    fingerprintTracking?: boolean;
}

declare enum SiteName {
    MyAuto = "myauto",
    MyHome = "myhome"
}

type AppVersion = `${number}.${number}.${number}`;

interface ICategory {
    mainCategory?: string;
    subCategory?: string | null;
    subSubCategory?: string | null;
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
declare const dataHubService: DataHubService;

export { DataHubService, SiteName, dataHubService };
