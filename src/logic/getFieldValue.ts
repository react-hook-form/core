import isCheckBox from '../utils/isCheckBoxInput';
import isFileInput from '../utils/isFileInput';
import isMultipleSelect from '../utils/isMultipleSelect';
import isRadioInput from '../utils/isRadioInput';
import isUndefined from '../utils/isUndefined';
import { Field } from '..';

import getCheckboxValue from './getCheckboxValue';
import getFieldValueAs from './getFieldValueAs';
import getRadioValue from './getRadioValue';

export default function getFieldValue(_f: Field['_f']) {
  const ref = _f.ref;

  if (_f.refs ? _f.refs.every((ref) => ref.disabled) : ref.disabled) {
    return;
  }

  if (isFileInput(ref)) {
    return ref.files;
  }

  if (isRadioInput(ref)) {
    return getRadioValue(_f.refs).value;
  }

  if (isMultipleSelect(ref)) {
    return [...ref.selectedOptions].map(({ value }) => value);
  }

  if (isCheckBox(ref)) {
    return getCheckboxValue(_f.refs).value;
  }

  return getFieldValueAs(isUndefined(ref.value) ? _f.ref.value : ref.value, _f);
}
