const { createApp, ref } = Vue;

const Chat = {
  name: "Chat",

  setup() {
    let message = ref('Hello Vue!');
    let phone = ("+268 7629 2565");
    let addres = ("Upper Forest Hills, Piggs Peak");
    let email = ("dlaminilwaziciniso@gmail.com");

    return {
      message,
      phone,
      addres,
      email
    };
  },
};

createApp(Chat).mount("#app");