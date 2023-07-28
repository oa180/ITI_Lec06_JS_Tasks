const submitBtn = document.getElementById("btn");

function loadUserInfo(e) {
  // e.preventDefault();
  const userName = document.getElementsByClassName("userName")[0].value;
  const userAge = document.getElementsByClassName("userAge")[0].value;
  const maleGender = document.getElementById("male");
  const femaleGender = document.getElementById("female");
  const userColor = document.getElementById("colorList").value;

  userNameCookie(userName);
  userAgeCookie(userName, userAge);
  userNumberOfVists(userName);

  const userGender = maleGender.checked ? "male" : "female";

  userGenderCookie(userName, userGender);
  userColortCookie(userName, userColor);
  userExpirationCookie(userName);
}

function expirationDate() {
  let myDate = new Date();
  myDate = new Date(myDate.setDate(myDate.getDate() + 1));

  return myDate;
}

// Create User's Name Cookie
function userNameCookie(userName) {
  setCookie("name", userName, expirationDate());
}

// Create User's Age Cookie
function userAgeCookie(userName, userAge) {
  const cookieKey = `${userName}Age`;
  setCookie(cookieKey, userAge, expirationDate());
}

// User's Number of Visits
function userNumberOfVists(userName) {
  const cookieKey = `${userName}visits`;

  if (!hasCookie(cookieKey)) {
    setCookie(cookieKey, 1, expirationDate());
    return;
  }

  const oldNoOfVisits = getACookie(cookieKey);

  setCookie(cookieKey, Number(oldNoOfVisits) + 1, expirationDate());
}

// User's Gender
function userGenderCookie(userName, userGender) {
  const cookieKey = `${userName}gender`;

  setCookie(cookieKey, userGender, expirationDate());
}

// User's Color Cookie
function userColortCookie(userName, userColor) {
  const cookieKey = `${userName}color`;

  setCookie(cookieKey, userColor, expirationDate());
}

// User's Expiration Cookie
function userExpirationCookie(userName) {
  const cookieKey = `${userName}expires`;

  setCookie(cookieKey, expirationDate(), expirationDate());
}

submitBtn.addEventListener("click", loadUserInfo);

// Create New Cookie
function setCookie(cookieKey, cookieValue, expirationDate) {
  if (arguments.length < 3) {
    document.cookie = `${cookieKey}=${cookieValue}`;
    return;
  }
  document.cookie = `${cookieKey}=${cookieValue}; expires=${expirationDate}`;
}

// Remove A Cookie
function removeCookie(cookieKey) {
  if (arguments.length == 0) return;

  let expirationDate = new Date();
  expirationDate = new Date(
    expirationDate.setDate(expirationDate.getDate() - 1)
  );

  document.cookie = `${cookieKey}=; expires=${expirationDate}`;
}

// Get All Cookies
function getALlCookies() {
  return document.cookie.split(";");
}

// Get A Cookie
function getACookie(cookieNameTarget) {
  if (arguments.length == 0) return;

  const allCookies = getALlCookies();
  const cookiesObj = {};

  for (let i = 0; i < allCookies.length; i++) {
    const cookieName = allCookies[i].split("=")[0].trim();
    const cookieValue = allCookies[i].split("=")[1].trim();

    cookiesObj[cookieName] = cookieValue;
  }
  //   console.log(cookiesObj[cookieNameTarget]);
  return cookiesObj[cookieNameTarget];
}

// Has The Cookie??
function hasCookie(cookieNameTarget) {
  //   console.log(getACookie(cookieNameTarget) != undefined);

  return getACookie(cookieNameTarget) != undefined;
}

// setCookie("password", "111111", myDate);
// setCookie("name", "alaa", myDate);

// removeCookie("password");

// getACookie("names");
// const hasACookie = hasCookie("password");
// console.log(hasACookie);
