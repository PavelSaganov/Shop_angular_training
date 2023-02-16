import { Injectable } from '@angular/core';
import { ConfigModel } from '../models/configModel';

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {

  private configModel: ConfigModel = new ConfigModel(undefined, undefined, undefined);

  constructor() { }

  setConfig(model: Partial<ConfigModel>): void {
    this.configModel = { ...this.configModel, ...model };
  }

  setConfigProperty(key: keyof ConfigModel, value: any): void
  {
    let property = this.configModel[key];
    if (property != (undefined || null)
        && typeof value == typeof property)
    {
      property = value;
    }
    else
    {
      throw Error("Can't find property");
    }
  }

  getConfig(): ConfigModel {
    return this.configModel;
  }

}