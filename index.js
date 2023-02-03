const reducer = (
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  },
  action
) => {
  switch (action.type) {
    case "changeFirstName":
      return { ...state, firstName: action.payload };
    case "changeLastName":
      return { ...state, lastName: action.payload };
    case "changeEmail":
      return { ...state, email: action.payload };
    case "changePassword":
      return { ...state, password: action.payload };
  }
  return state;
};
const store = Redux.createStore(reducer);

const form = document.getElementById("form");
const firstNameError = document.getElementsByClassName("error")[0];
const lastNameError = document.getElementsByClassName("error")[1];
const emailError = document.getElementsByClassName("error")[2];
const passwordError = document.getElementsByClassName("error")[3];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const firstName = document.getElementsByTagName("input")[0].value;
  const lastName = document.getElementsByTagName("input")[1].value;
  const email = document.getElementsByTagName("input")[2].value;
  const password = document.getElementsByTagName("input")[3].value;
  let error = 0;

  //action creator
  const changeFirstName = () => {
    return {
      type: "changeFirstName",
      payload: firstName,
    };
  };
  const changeLastName = () => {
    return {
      type: "changeLastName",
      payload: lastName,
    };
  };
  const changeEmail = () => {
    return {
      type: "changeEmail",
      payload: email,
    };
  };
  const changePassword = () => {
    return {
      type: "changePassword",
      payload: password,
    };
  };

  if (firstName === "") {
    document.getElementsByTagName("input")[0].style.border =
      "1px solid hsl(0, 100%, 74%)";
    document.getElementsByTagName("input")[1].style.marginTop = "0";
    firstNameError.textContent = "First name cannot be empty";
    error++;
  } else {
    document.getElementsByTagName("input")[0].style.border =
      "1px solid hsl(246, 25%, 77%)";
    document.getElementsByTagName("input")[1].style.marginTop = "25px";
    firstNameError.textContent = "";
    store.dispatch(changeFirstName());
  }

  if (lastName === "") {
    document.getElementsByTagName("input")[1].style.border =
      "1px solid hsl(0, 100%, 74%)";
    document.getElementsByTagName("input")[2].style.marginTop = "0";
    lastNameError.textContent = "Last name cannot be empty";
    error++;
  } else {
    document.getElementsByTagName("input")[1].style.border =
      "1px solid hsl(246, 25%, 77%)";
    document.getElementsByTagName("input")[2].style.marginTop = "25px";
    lastNameError.textContent = "";
    store.dispatch(changeLastName());
  }

  if (email === "") {
    document.getElementsByTagName("input")[2].style.border =
      "1px solid hsl(0, 100%, 74%)";
    document.getElementsByTagName("input")[3].style.marginTop = "0";
    emailError.textContent = "Email cannot be empty";
  } else {
    document.getElementsByTagName("input")[2].style.border =
      "1px solid hsl(246, 25%, 77%)";
    document.getElementsByTagName("input")[3].style.marginTop = "25px";
    emailError.textContent = "";
    store.dispatch(changeEmail());
  }

  if (password === "") {
    document.getElementsByTagName("input")[3].style.border =
      "1px solid hsl(0, 100%, 74%)";
    passwordError.textContent = "Password cannot be empty";
  } else {
    document.getElementsByTagName("input")[3].style.border =
      "1px solid hsl(246, 25%, 77%)";
    passwordError.textContent = "";
    store.dispatch(changePassword());
  }
});
