import { ref } from "vue";

export function useInputField(field) {
  const value = ref(field.value);
  console.log("Input value", value);
  return { value };
}
