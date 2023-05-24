const entrarLink = document.getElementById("entrar");
const criarConta = document.getElementById("criar-conta");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const lightDark = document.getElementById("light-dark-switch");
const main = document.getElementById("container");
const root = document.querySelector(":root");
const avatarImg = document.getElementById("avatar");
const eye = document.querySelector(".eye");
const modal = document.getElementById("modal");

// Referência inputs login form
const loginform = {
  senha: document.getElementById("password"),
  username: document.getElementById("usuario"),
};

// Referência inputs register form
const register = {
  login: document.getElementById("register-usuario"),
  password: document.getElementById("register-password"),
  confirmPassword: document.getElementById("confirm-password"),
};

//Troca avisualização do formulario register->login
function registerToLogin() {
  loginForm.style.transform = "translateX(0)";
  registerForm.style.transform = "translateX(-100%)";
}
entrarLink.addEventListener("click", registerToLogin);

//Troca avisualização do formulario login->register
function loginToRegister() {
  loginForm.style.transform = "translateX(+100%)";
  registerForm.style.transform = "translateX(0%)";
}
criarConta.addEventListener("click", loginToRegister);

//Altera entre tema claro e escuro
lightDark.addEventListener("click", () => {
  if (main.dataset.theme === "light") {
    root.style.setProperty("--background", "#1e2021");
    root.style.setProperty("--input-area", "#141212");
    root.style.setProperty("--input-background", "#1E2021");
    root.style.setProperty("--input-border", "#d5d5d5");
    root.style.setProperty("--font", "white");
    root.style.setProperty("--sun-bg", "transparent");
    root.style.setProperty("--moon-bg", "white");
    root.style.setProperty("--box-shadow", "0px 1px 4px rgba(0, 0, 0, 0.25)");

    avatarImg.innerHTML =
      ' <img src="./assets/Male User White.svg" alt="avatar" />';

    main.dataset.theme = "dark";
  } else {
    root.style.setProperty("--background", "#ffff");
    root.style.setProperty("--input-area", "#ffff");
    root.style.setProperty("--input-background", "#f8f8f8");
    root.style.setProperty("--input-border", "#d5d5d5");
    root.style.setProperty("--font", "black");
    root.style.setProperty("--sun-bg", "black");
    root.style.setProperty("--moon-bg", "transparent");
    root.style.setProperty(
      "--box-shadow",
      "0px 0.679525px 2.7181px rgba(0, 0, 0, 0.25)"
    );
    avatarImg.innerHTML = ' <img src="./assets/Male User.svg" alt="avatar" />';
    main.dataset.theme = "light";
  }
});

//Altera a visibilidade da senha
eye.addEventListener("click", () => {
  const { password } = loginForm;
  const eyeHidden =
    '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z" fill="currentColor"/>  </svg>';

  const eyeVisible =
    '<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.7071 5.70711C20.0976 5.31658 20.0976 4.68342 19.7071 4.29289C19.3166 3.90237 18.6834 3.90237 18.2929 4.29289L14.032 8.55382C13.4365 8.20193 12.7418 8 12 8C9.79086 8 8 9.79086 8 12C8 12.7418 8.20193 13.4365 8.55382 14.032L4.29289 18.2929C3.90237 18.6834 3.90237 19.3166 4.29289 19.7071C4.68342 20.0976 5.31658 20.0976 5.70711 19.7071L9.96803 15.4462C10.5635 15.7981 11.2582 16 12 16C14.2091 16 16 14.2091 16 12C16 11.2582 15.7981 10.5635 15.4462 9.96803L19.7071 5.70711ZM12.518 10.0677C12.3528 10.0236 12.1792 10 12 10C10.8954 10 10 10.8954 10 12C10 12.1792 10.0236 12.3528 10.0677 12.518L12.518 10.0677ZM11.482 13.9323L13.9323 11.482C13.9764 11.6472 14 11.8208 14 12C14 13.1046 13.1046 14 12 14C11.8208 14 11.6472 13.9764 11.482 13.9323ZM15.7651 4.8207C14.6287 4.32049 13.3675 4 12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C1.92276 13.7326 2.86706 15.0637 4.21194 16.3739L5.62626 14.9596C4.4555 13.8229 3.61144 12.6531 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C12.7719 6 13.5135 6.13385 14.2193 6.36658L15.7651 4.8207ZM12 18C11.2282 18 10.4866 17.8661 9.78083 17.6334L8.23496 19.1793C9.37136 19.6795 10.6326 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C22.0773 10.2674 21.133 8.93627 19.7881 7.62611L18.3738 9.04043C19.5446 10.1771 20.3887 11.3469 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18Z" fill="currentColor"/></svg>';

  if (eye.dataset.visibility === "hidden") {
    password.type = "text";
    eye.innerHTML = eyeVisible;
    eye.dataset.visibility = "visible";
  } else {
    eye.innerHTML = eyeHidden;
    password.type = "password";
    eye.dataset.visibility = "hidden";
  }
});

// Validar senha
const { login } = register;
const { password } = register;
const { confirmPassword } = register;

// Verifica se a senha atende aos requisitos
function validatePassword(password) {
  if (
    password.length < 8 ||
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/[0-9]/) ||
    !password.match(/[^a-zA-Z0-9\s]/)
  ) {
    return false;
  } else {
    return true;
  }
}

// Verifica se as duas senhas são iguais
function comparePassword(passwd, confirm) {
  if (passwd !== confirm) {
    return true;
  } else {
    return false;
  }
}

// Adiciona msg de erro quando a senha não atende aos requisitos
password.addEventListener("keyup", () => {
  const passwdContainer = document.getElementById("pswd-container");
  if (!validatePassword(password.value)) {
    passwdContainer.classList.add("password-container");
  } else {
    passwdContainer.classList.remove("password-container");
  }
});

// Adiciona msg de erro quando as senhas não coincidem
confirmPassword.addEventListener("keyup", () => {
  const container = document.getElementById("confirm-container");
  if (comparePassword(password.value, confirmPassword.value)) {
    container.classList.add("confirm-container");
  } else {
    container.classList.remove("confirm-container");
  }
});

// Alteração o status do tooltip

const toolTip = {
  upper: document.getElementById("A"),
  lower: document.getElementById("a"),
  numbers: document.getElementById("numeros"),
  char: document.getElementById("especial"),
  length: document.getElementById("passwd-length"),
};

password.addEventListener("keyup", () => {
  const { upper, lower, numbers, char, length } = toolTip;
  const senha = password.value;
  senha.match(/[a-z]/)
    ? lower.classList.add("ok")
    : lower.classList.remove("ok");
  senha.match(/[A-Z]/)
    ? upper.classList.add("ok")
    : upper.classList.remove("ok");
  senha.match(/[0-9]/)
    ? numbers.classList.add("ok")
    : numbers.classList.remove("ok");
  senha.match(/[^a-zA-Z0-9\s]/)
    ? char.classList.add("ok")
    : char.classList.remove("ok");
  senha.length >= 8
    ? length.classList.add("ok")
    : length.classList.remove("ok");
});

// Consumo api

//Login
async function loginUser() {
  const loginUrl = "http://localhost:8080/login";
  const password = document.getElementById("password").value;
  const login = document.getElementById("usuario").value;

  const postOptions = {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    fetch(loginUrl, postOptions)
      .then((response) => {
        if (response.status === 403) {
          document
            .getElementById("login-passwd-container")
            .classList.add("wrong-password");
        } else {
          document
            .getElementById("login-passwd-container")
            .classList.remove("wrong-password");
          window.location.href = "./index.html";
        }
        return response.text();
      })
      .then((data) => {
        const cookie = `token=${data};expires=Session;path=/`;
        document.cookie = cookie;
      });
  } catch (err) {
    console.error(err);
  }
}

const loginForms = document
  .getElementById("login-form")
  .addEventListener("submit", (ev) => {
    ev.preventDefault();
    loginUser();
  });

// Register

async function registerUser() {
  const registerUrl = "http://localhost:8080/register";
  let login = document.getElementById("register-usuario").value;
  let password = document.getElementById("confirm-password").value;
  const postOptions = {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    fetch(registerUrl, postOptions).then((response) => {
      if (response.status === 403) {
        document
          .getElementById("username-register-container")
          .classList.add("unavailable-username");
      } else {
        document
          .getElementById("username-register-container")
          .classList.remove("unavailable-username");

        modal.showModal();
      }
    });
  } catch (err) {
    console.error(err);
  }
}

registerForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  if (
    validatePassword(password.value) ||
    !comparePassword(password.value, validatePassword.value)
  ) {
    console.log("ok");
    registerUser();
  }
});

//fecha o dialog e muda para o formulário de login
const close = document.getElementById("close").addEventListener("click", () => {
  modal.close();
  registerToLogin();
  login.value = "";
  password.value = "";
  confirmPassword.value = "";
});
