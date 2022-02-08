/* 
    ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার 
    কালার lightblue করেদিতে পারো কিনা। 
*/
const allH2Tag = document.getElementsByTagName("h2");

for (const h2Tag of allH2Tag) {
  h2Tag.style.color = "lightblue";
}

/* 
    ৩. ওই ওয়েবসাইট এ backpack আইডি দিয়ে একটা সেকশন আছে। সেই 
    সেকশনের ব্যাকগ্রাউন্ড কালার tomato করে দিতে পারো কিনা। 
*/

document.getElementById("backpack").style.backgroundColor = "tomato";

/* 
    ৪. card ক্লাস যতগুলা জায়গায় ইউজ করা হয়েছে সবগুলা কার্ড এর 
    বর্ডার রেডিয়াস ৩০px করে দিতে পারো কিনা 
*/

const cards = document.getElementsByClassName("card");
for (const card of cards) {
  card.style.borderRadius = "30px";
}

/* 
    ৫. কোন একটা ফাংশন লিখো। সেটার ভিতরে কনসোল লগ হবে। এবং 
    সেই ফাংশন টা ক্লিক হ্যান্ডলার হিসেবে কোন একটা বাটনে যোগ করো 
*/
function btnClicked() {
  console.log("Button is clicked");
}

/* 
৬. এইবার নতুন করে সবগুলা buy now বাটনে এমন একটা ইভেন্ট হ্যান্ডলার যোগ করো।
 যাতে যেকোন একটা buy now বাটনে চাপ দিলে সেটা ওয়েবসাইট থেকে রিমুভ হয়ে যায়। 
 একটু চিন্তা করে করার চেষ্টা করো। 
*/
// document
//   .getElementsByClassName("btn")
//   .addEventListener("click", function (event) {
//     event.target.parentNode.removeChild(event.target);
//   });
const btns = document.getElementsByClassName("btn");
for (const btn of btns) {
  btn.addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
}
