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
    // я думаю, что тут много лишнего.
    // если есть метод установки, то он должен либо установить значение
    // либо бросить исключение, а в вашем случае он может просто ничего не сделать
    // и пользователь не будет понимать, почему
    let property = this.configModel[key];
    if (property != (undefined || null)
        && typeof value == typeof property)
    {
      property = value;
    }
  }

  getConfig(): ConfigModel {
    return this.configModel;
  }

}
