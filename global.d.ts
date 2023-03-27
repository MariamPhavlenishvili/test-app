export type AppVersion = `${number}.${number}.${number}`;
export interface IDataHub {
  readonly appVersion: AppVersion;
  setConsent(options: IConsent): boolean;
}

export interface IConsent {
  mouseTracking?: Boolean;
  fingerprintTracking?: Boolean;
}

declare global {
  interface Window {
    _dataHub: {
      dataHubService: IDataHub;
    };
  }
}
