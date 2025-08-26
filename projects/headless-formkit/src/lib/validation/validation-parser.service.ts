import { Injectable } from '@angular/core';
import { ValidatorFn, Validators } from '@angular/forms';

export interface ParsedValidationRule {
  name: string;
  args: any[];
  hints: {
    debounce?: number;
    empty?: boolean;
    force?: boolean;
    optional?: boolean;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ValidationParserService {
  
  parseValidationString(validationString: string): ParsedValidationRule[] {
    if (!validationString || validationString.trim() === '') {
      return [];
    }

    const rules = validationString.split('|');
    return rules.map(rule => this.parseRule(rule.trim())).filter(Boolean) as ParsedValidationRule[];
  }

  private parseRule(rule: string): ParsedValidationRule | null {
    if (!rule) return null;

    const hints = {
      debounce: undefined as number | undefined,
      empty: false,
      force: false,
      optional: false
    };

    let cleanRule = rule;

    const debounceMatch = cleanRule.match(/^\((\d+)\)/);
    if (debounceMatch) {
      hints.debounce = parseInt(debounceMatch[1], 10);
      cleanRule = cleanRule.replace(/^\(\d+\)/, '');
    }

    while (cleanRule.match(/^[+*?]/)) {
      const hint = cleanRule[0];
      if (hint === '+') hints.empty = true;
      if (hint === '*') hints.force = true;
      if (hint === '?') hints.optional = true;
      cleanRule = cleanRule.substring(1);
    }

    const [name, ...argParts] = cleanRule.split(':');
    const args = argParts.length > 0 ? argParts.join(':').split(',').map(arg => arg.trim()) : [];

    return {
      name: name.trim(),
      args,
      hints
    };
  }

  convertToAngularValidators(rules: ParsedValidationRule[]): ValidatorFn[] {
    const validators: ValidatorFn[] = [];

    for (const rule of rules) {
      const validator = this.getAngularValidator(rule);
      if (validator) {
        validators.push(validator);
      }
    }

    return validators;
  }

  private getAngularValidator(rule: ParsedValidationRule): ValidatorFn | null {
    const { name, args } = rule;
    // console.log(`Converting validation rule: ${name} with args:`, args);
    switch (name) {
      case 'required':
        return Validators.required;
      
      case 'email':
        return Validators.email;
      
      case 'min':
        const minValue = args[0] ? parseFloat(args[0]) : 0;
        return Validators.min(minValue);
      
      case 'max':
        const maxValue = args[0] ? parseFloat(args[0]) : 100;
        return Validators.max(maxValue);
      
      case 'minlength':
      case 'length':
        if (args.length === 1) {
          return Validators.minLength(parseInt(args[0], 10));
        } else if (args.length === 2) {
          const minLen = parseInt(args[0], 10);
          const maxLen = parseInt(args[1], 10);
          return Validators.compose([
            Validators.minLength(minLen),
            Validators.maxLength(maxLen)
          ]);
        }
        return null;
      
      case 'maxlength':
        return Validators.maxLength(parseInt(args[0], 10));
      
      case 'pattern':
      case 'matches':
        if (args[0]) {
          if (args[0].startsWith('/') && args[0].endsWith('/')) {
            const pattern = args[0].slice(1, -1);
            return Validators.pattern(pattern);
          }
          return Validators.pattern(args[0]);
        }
        return null;
      
      case 'between':
        if (args.length === 2) {
          const min = parseFloat(args[0]);
          const max = parseFloat(args[1]);
          return Validators.compose([
            Validators.min(min),
            Validators.max(max)
          ]);
        }
        return null;
      
      case 'alpha':
        return this.createCustomValidator('alpha', (value: string) => {
          const charset = args[0] === 'latin' ? /^[a-zA-Z]+$/ : /^[a-zA-ZÀ-ÿ]+$/;
          return charset.test(value);
        });
      
      case 'alphanumeric':
        return this.createCustomValidator('alphanumeric', (value: string) => {
          const charset = args[0] === 'latin' ? /^[a-zA-Z0-9]+$/ : /^[a-zA-Z0-9À-ÿ]+$/;
          return charset.test(value);
        });
      
      case 'alpha_spaces':
        return this.createCustomValidator('alpha_spaces', (value: string) => {
          const charset = args[0] === 'latin' ? /^[a-zA-Z\s]+$/ : /^[a-zA-ZÀ-ÿ\s]+$/;
          return charset.test(value);
        });
      
      case 'integer':
      case 'number':
        return this.createCustomValidator('number', (value: string) => {
          return !isNaN(Number(value)) && isFinite(Number(value));
        });
      
      case 'url':
        return this.createCustomValidator('url', (value: string) => {
          try {
            new URL(value);
            return true;
          } catch {
            return false;
          }
        });
      
      case 'accepted':
        return this.createCustomValidator('accepted', (value: any) => {
          return value === true || value === 'yes' || value === 'on' || value === '1' || value === 1;
        });
      
      case 'confirm':
        return this.createCustomValidator('confirm', () => true);
      
      case 'contains_alpha':
        return this.createCustomValidator('contains_alpha', (value: string) => {
          const charset = args[0] === 'latin' ? /[a-zA-Z]/ : /[a-zA-ZÀ-ÿ]/;
          return charset.test(value);
        });
      
      case 'contains_alphanumeric':
        return this.createCustomValidator('contains_alphanumeric', (value: string) => {
          const charset = args[0] === 'latin' ? /[a-zA-Z0-9]/ : /[a-zA-Z0-9À-ÿ]/;
          return charset.test(value);
        });
      
      case 'contains_lowercase':
        return this.createCustomValidator('contains_lowercase', (value: string) => {
          const charset = args[0] === 'latin' ? /[a-z]/ : /[a-zà-ÿ]/;
          return charset.test(value);
        });
      
      case 'contains_uppercase':
        return this.createCustomValidator('contains_uppercase', (value: string) => {
          const charset = args[0] === 'latin' ? /[A-Z]/ : /[A-ZÀ-ß]/;
          return charset.test(value);
        });
      
      case 'contains_numeric':
        return this.createCustomValidator('contains_numeric', (value: string) => {
          return /[0-9]/.test(value);
        });
      
      case 'contains_symbol':
        return this.createCustomValidator('contains_symbol', (value: string) => {
          return /[^a-zA-Z0-9\s]/.test(value);
        });
      
      case 'lowercase':
        return this.createCustomValidator('lowercase', (value: string) => {
          return value === value.toLowerCase();
        });
      
      case 'uppercase':
        return this.createCustomValidator('uppercase', (value: string) => {
          return value === value.toUpperCase();
        });
      
      case 'starts_with':
        return this.createCustomValidator('starts_with', (value: string) => {
          return args.some(prefix => value.startsWith(prefix));
        });
      
      case 'ends_with':
        return this.createCustomValidator('ends_with', (value: string) => {
          return args.some(suffix => value.endsWith(suffix));
        });
      
      case 'is':
        return this.createCustomValidator('is', (value: string) => {
          return args.includes(value);
        });
      
      case 'not':
        return this.createCustomValidator('not', (value: string) => {
          return !args.includes(value);
        });
      
      default:
        console.warn(`Unknown validation rule: ${name}`);
        return null;
    }
  }

  private createCustomValidator(ruleName: string, validatorFn: (value: any) => boolean): ValidatorFn {
    return (control) => {
      if (!control.value && control.value !== 0) {
        return null; // Don't validate empty values unless it's a required field
      }
      
      const isValid = validatorFn(control.value);
      return isValid ? null : { [ruleName]: { value: control.value } };
    };
  }
}
