// for request otp
document
  .getElementById("validationForm")
  .addEventListener("submit", (event) => {
    // for not refresh
    event.preventDefault();
    const phoneNumber = document.getElementById("phoneNumber").value;

    axios
      .get(`http://localhost:3000/login?phonenumber=${phoneNumber}&channel=sms`)
      .then((response) => {
        console.log("success", response);
      })
      .catch((err) => {
        console.log(err);
      });
  });

// compare otp and phone number
document.getElementById("validationOtp").addEventListener("submit", (event) => {
  // for not refresh
  event.preventDefault();
  const phoneNumber = document.getElementById("phoneNumber").value;
  const otp = document.getElementById("otp").value;
  axios
    .get(`http://localhost:3000/verify?phonenumber=${phoneNumber}&code=${otp}`)
    .then((response) => {
      console.log(response);
      if (response.data) {
        if (!firebase.apps.length) {
          firebase.initializeApp({
            apiKey: "AIzaSyDmoLXoArz17QzfmbxKni3K9j_b2gxnfNk",
            authDomain: "project-1-18941.firebaseapp.com",
            databaseURL: "https://project-1-18941.firebaseio.com/",
            projectId: "project-1-18941",
            storageBucket: "project-1-18941.appspot.com",
            messagingSenderId: "268827594327",
          });
        }
        const rootRef = firebase.database().ref("users/");
        const newStoreRef = rootRef.push();
        newStoreRef.set(
          {
            phone: phoneNumber,
          },
          (error) => {
            if (error) {
              window.alert("Failed");
              throw error;
            } else {
              console.log("Data add");
              window.location.assign("./Home.html");
            }
          }
        );
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// document
//   .getElementById("validationForm")
//   .addEventListener("submit", (event) => {
//     // for not refresh
//     event.preventDefault();

//     // getting value from form
//     const phoneNumber = document.getElementById("phoneNumber").value;

//     // Set the configuration for your app

//     if (!firebase.apps.length) {
//       firebase.initializeApp({
//         apiKey: "AIzaSyDmoLXoArz17QzfmbxKni3K9j_b2gxnfNk",
//         authDomain: "project-1-18941.firebaseapp.com",
//         databaseURL: "https://project-1-18941.firebaseio.com/",
//         projectId: "project-1-18941",
//         storageBucket: "project-1-18941.appspot.com",
//         messagingSenderId: "268827594327",
//       });
//     }

//     const rootRef = firebase.database().ref("users/");
//     const newStoreRef = rootRef.push();
//     newStoreRef.set(
//       {
//         phone: phoneNumber,
//       },
//       (error) => {
//         if (error) {
//           console.log(error);
//         } else {
//           console.log("Data add");
//         }
//       }
//     );
//   });

// const axios = require("axios");
// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: "AIzaSyDmoLXoArz17QzfmbxKni3K9j_b2gxnfNk",
//     authDomain: "project-1-18941.firebaseapp.com",
//     databaseURL: "https://project-1-18941.firebaseio.com/",
//     projectId: "project-1-18941",
//     storageBucket: "project-1-18941.appspot.com",
//     messagingSenderId: "268827594327",
//   });

//   const rootRef = firebase.database().ref("users/");
//   const newStoreRef = rootRef.push();
//   newStoreRef.set(
//     {
//       phone: phoneNumber,
//     },
//     (error) => {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log("Data add");
//       }
//     }
//   );
