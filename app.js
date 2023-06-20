const App = {
  $: {
    cardSubscribe: document.querySelector(".subscribe-card"),
    cardDismiss: document.querySelector(".modal--succes_mgs"),
    successEmail: document.querySelector(".userEmail"),
    inputCont: document.querySelector("#emailInput"),
    subscribeBtn: document.querySelector("#sub-btn"),
    dismissBtn: document.querySelector("#btn-dismiss"),
    emailErrorText: document.querySelector(".error-txt"),
  },
  init() {
    App.$.subscribeBtn.addEventListener("click", (e) => {
      const inputValue = App.$.inputCont.value;
      const regExEmail =
        /^[A-Za-z\d]+[A-Za-z\d\S]+[A-Za-z\d]+@[A-Za-z\d]+[\.][A-Za-z]+$/;
      if (regExEmail.test(inputValue)) {
        App.$.emailErrorText.classList.add("hidden");
        App.$.inputCont.classList.remove("error-box");
        App.subscribeSuccess(inputValue);
      } else {
        App.errorMsg();
      }
    });

    App.$.dismissBtn.addEventListener("click", e=> {
        App.$.cardSubscribe.classList.remove("hidden");
        App.$.cardDismiss.classList.add("hidden");
    })
  },
  errorMsg() {
    App.$.emailErrorText.classList.add("hidden");

    //resets element so animation plays again
    void App.$.emailErrorText.offsetWidth;

    App.$.emailErrorText.classList.remove("hidden");
    App.$.inputCont.classList.add("error-box");
  },
  subscribeSuccess(userEmail) {
    App.$.cardSubscribe.classList.add("hidden");
    App.$.cardDismiss.classList.remove("hidden");
    App.$.successEmail.innerHTML = userEmail;
  },
};

window.addEventListener("load", App.init);
