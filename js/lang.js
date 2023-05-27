const atopleft = document.querySelector(".atopleft");

fetch("http://127.0.0.1:5500/js/DataLang/az/translation.json")
  .then((res) => res.json())
  .then((data) => {
    data.langs.forEach((element) => {
      switch (element.lang) {
        case "az":
          localStorage.setItem("az", JSON.stringify(element));
          break;
        case "en":
          localStorage.setItem("en", JSON.stringify(element));
          break;
        case "ru":
          localStorage.setItem("ru", JSON.stringify(element));
          break;
      }
    });
  });

const langs = document.getElementById("langs");
const showLang = (e) => {
  const myLangs = ["az", "en", "ru"];
  myLangs.forEach((item, index) => {
    let j = JSON.parse(localStorage.getItem(item));

    if (item == localStorage.getItem("lang")) {
      langs.selectedIndex = index;
// 
      atopleft.innerHTML = j.text;
      FrequentlyAskedQuestion.innerHTML = j.FrequentlyAskedQuestion;
      EsasSehife.innerHTML = j.EsasSehife;
      Temir.innerHTML = j.Temir;
      Qurasdirma.innerHTML = j.Qurasdirma;
      UstaSifarisi.innerHTML = j.UstaSifarisi;
      Catdirilma.innerHTML = j.Catdirilma;
      Haqqimizda.innerHTML = j.Haqqimizda;
      Elaqe.innerHTML = j.Elaqe;




      
      
      
      
      


    }
  });
};
showLang();
const options = document.querySelectorAll(".option1");

langs.addEventListener("change", (e) => {
  if (langs.value == "az") {
    localStorage.setItem("lang", "az");
  } else if (langs.value == "en") {
    localStorage.setItem("lang", "en");
  } else {
    localStorage.setItem("lang", "ru");
  }
  showLang();
});
