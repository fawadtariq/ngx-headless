import { Injectable, Optional, Inject } from '@angular/core';

export interface FormkitControlClasses {
  wrapper?: string;
  label?: string;
  input?: string;
  error?: string;
  help?: string;
}

export interface FormkitConfig {
  global?: {
    classes?: FormkitControlClasses;
  };
  controls?: {
    [controlType: string]: {
      classes?: FormkitControlClasses;
    };
  };
  validation?: {
    messages?: {
      [ruleName: string]: string | ((context: any) => string);
    };
  };
}

export const FORMKIT_CONFIG = 'FORMKIT_CONFIG';

@Injectable({
  providedIn: 'root'
})
export class FormkitConfigService {
  private config: FormkitConfig;

  constructor(@Optional() @Inject(FORMKIT_CONFIG) config: FormkitConfig | null) {
    this.config = config || {};
  }

  getGlobalClasses(): FormkitControlClasses {
    return this.config.global?.classes || {};
  }

  getControlClasses(controlType: string): FormkitControlClasses {
    return this.config.controls?.[controlType]?.classes || {};
  }

  getValidationMessage(ruleName: string, context?: any): string | null {
    const message = this.config.validation?.messages?.[ruleName];
    if (typeof message === 'function') {
      return message(context);
    }
    return message || null;
  }

  mergeClasses(globalClasses: FormkitControlClasses, controlClasses: FormkitControlClasses, componentClasses: FormkitControlClasses): FormkitControlClasses {
    return {
      ...globalClasses,
      ...controlClasses,
      ...componentClasses
    };
  }
}

export function provideFormkitConfig(config: FormkitConfig) {
  return {
    provide: FORMKIT_CONFIG,
    useValue: config
  };
}
