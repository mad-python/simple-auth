import { reactive, computed } from "vue";
import { useInputField } from "./inputField";

export function useForm(initForm = {}) {
  const form = reactive({});

  for (const [key, value] of Object.entries(initForm)) {
    // hook for the form field to validate
    form[key] = useInputField(value);
  }

  // checking field `valid` in every inputField
  // And making the form invalid if not every field is valid
  form.valid = computed(() =>
    Object.keys(form)
      .filter((k) => k !== "valid")
      .every((k) => form[k].valid)
  );

  return form;
}
