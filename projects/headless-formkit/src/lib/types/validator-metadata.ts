export interface ValidatorMetadata {
  name: string;
  defaultMessage: string;
  hasArgs?: boolean;
}

export const VALIDATOR_METADATA: Record<string, ValidatorMetadata> = {
  required: { name: 'required', defaultMessage: 'This field is required.' },
  email: { name: 'email', defaultMessage: 'Invalid email format.' },
  minlength: { name: 'minlength', defaultMessage: 'Too short.' },
  maxlength: { name: 'maxlength', defaultMessage: 'Too long.' },
  min: { name: 'min', defaultMessage: 'Value is too small.' },
  max: { name: 'max', defaultMessage: 'Value is too large.' },
  pattern: { name: 'pattern', defaultMessage: 'Invalid format.' },
  alpha: { name: 'alpha', defaultMessage: 'Only alphabetical characters allowed.' },
  alphanumeric: { name: 'alphanumeric', defaultMessage: 'Only letters and numbers allowed.' },
  number: { name: 'number', defaultMessage: 'Must be a valid number.' },
  url: { name: 'url', defaultMessage: 'Must be a valid URL.' },
  accepted: { name: 'accepted', defaultMessage: 'This field must be accepted.' },
  confirm: { name: 'confirm', defaultMessage: 'Confirmation does not match.' },
  contains_alpha: { name: 'contains_alpha', defaultMessage: 'Must contain alphabetical characters.' },
  contains_alphanumeric: { name: 'contains_alphanumeric', defaultMessage: 'Must contain letters and numbers.' },
  contains_lowercase: { name: 'contains_lowercase', defaultMessage: 'Must contain lowercase characters.' },
  contains_uppercase: { name: 'contains_uppercase', defaultMessage: 'Must contain uppercase characters.' },
  contains_numeric: { name: 'contains_numeric', defaultMessage: 'Must contain numeric characters.' },
  contains_symbol: { name: 'contains_symbol', defaultMessage: 'Must contain symbol characters.' },
  lowercase: { name: 'lowercase', defaultMessage: 'Must be lowercase.' },
  uppercase: { name: 'uppercase', defaultMessage: 'Must be uppercase.' },
  starts_with: { name: 'starts_with', defaultMessage: 'Must start with specified value.' },
  ends_with: { name: 'ends_with', defaultMessage: 'Must end with specified value.' },
  is: { name: 'is', defaultMessage: 'Must match specified value.' },
  not: { name: 'not', defaultMessage: 'Must not match specified value.' },
  between: { name: 'between', defaultMessage: 'Value must be between specified range.' },
  alpha_spaces: { name: 'alpha_spaces', defaultMessage: 'Only alphabetical characters and spaces allowed.' },
  length: { name: 'length', defaultMessage: 'Invalid length.' }
};
