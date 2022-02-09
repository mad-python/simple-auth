<template>
  <div class="wrapper">
    <form class="auth-form" @submit.prevent="submit">
      <h1>Simple auth form</h1>

      <div
        :class="[
          'form-input',
          { error: !form.email.valid && form.email.dirty },
        ]"
      >
        <input
          type="email"
          id="auth-form-email"
          placeholder="email"
          v-model="form.email.value"
          @blur="form.email.blur"
        />
        <small v-if="form.email.dirty && form.email.errors.required">
          Email field is required
        </small>
      </div>

      <div
        :class="[
          'form-input',
          { error: !form.password.valid && form.password.dirty },
        ]"
      >
        <input
          type="password"
          id="auth-form-password"
          placeholder="password"
          v-model="form.password.value"
          @blur="form.password.blur"
        />
        <small v-if="form.password.dirty && form.password.errors.required">
          Password field is required
        </small>
        <small v-if="form.password.dirty && form.password.errors.minLength">
          Password length is too short (min - 8)
        </small>
      </div>

      <button class="btn primary" type="submit" :disabled="!form.valid">
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { useForm } from "@/use/form";
import { required, minLength } from "@/validators";

export default {
  setup() {
    const form = useForm({
      email: {
        value: "",
        validators: { required },
      },
      password: {
        value: "",
        validators: { required, minLength: minLength(8) },
      },
    });

    // Main submit function
    const submit = () => {
      console.log("Submit function", form);
      console.log("Email:", form.email.value);
      console.log("Password:", form.password.value);
    };

    return {
      form,
      submit,
    };
  },
};
</script>
<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
}
.auth-form {
  width: 30%;
}
.form-input {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
}
.form-input.error input {
  border-color: red;
}
input {
  font: 15px/24px "Muli", sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding-top: 7px;
  border-bottom: 2px solid #ccc;
}
input:focus {
  outline: none;
  border-color: green;
}
button {
  margin-top: 20px;
  width: 120px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #fff;
  background: #91c9ff;
  outline: none;
  transition: 0.5s ease-in-out;
  /* box-shadow: 0px 0px 12px -2px #91c9ff; */
}

button:hover {
  box-shadow: 0px 0px 12px -5px #000;
}
button:disabled {
  opacity: 0.6;
  color: #666;
  background: #e8e8e8;
  cursor: not-allowed;
  box-shadow: none;
}
</style>
