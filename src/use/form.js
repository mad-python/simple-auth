import { reactive } from "vue";
import { useInputField } from "./inputField";

export function useForm(initForm = {}) {
  const form = reactive({});

  for (const [key, value] of Object.entries(initForm)) {
    form[key] = useInputField(value);
  }

  console.log("Form: ", form);

  return form;
}
