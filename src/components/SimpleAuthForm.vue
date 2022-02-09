<template>
  <div class="wrapper">
    <form class="auth-form" @submit.prevent="submit">
      <h1>Simple auth form</h1>

      <div class="form-input">
        <input type="email" id="auth-form-email" placeholder="email" />
      </div>

      <div class="form-input">
        <input type="password" id="auth-form-password" placeholder="password" />
      </div>

      <button class="btn primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    const form = {};

    // Main submit function
    const submit = () => {
      console.log("Submit function");
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
input {
  font: 15px/24px "Muli", sans-serif;
  color: #333;
  width: 100%;
  box-sizing: border-box;
  letter-spacing: 1px;
  border: 0;
  padding-top: 7px;
  border-bottom: 1px solid #ccc;
}
input:focus {
  outline: none;
}
button {
  margin-top: 20px;
  width: 120px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #666;
  outline: none;
  transition: 0.5s ease-in-out;
  box-shadow: 0px 0px 12px -2px #ccc;
}

button:hover {
  background: #91c9ff;
  color: #fff;
  box-shadow: 0px 0px 12px -2px #91c9ff;
}
</style>
