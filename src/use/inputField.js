import { ref, reactive, watch } from "vue";

export function useInputField(field) {
  const value = ref(field.value);

  const valid = ref(true);
  const dirty = ref(false);
  const errors = reactive({});

  const recreateField = (val) => {
    valid.value = true;
    Object.keys(field.validators ?? {}).map((name) => {
      // running validator to check input field
      const invalid = !field.validators[name](val);
      errors[name] = invalid;
      if (invalid) {
        // if validation fails the field should be invalid
        valid.value = false;
      }
    });
  };

  // Need to recreate every time the field has changed
  watch(value, recreateField);

  // Init form fields validation
  recreateField(field.value);

  return {
    value,
    valid,
    errors,
    dirty,
    blur: () => (dirty.value = true),
  };
}
