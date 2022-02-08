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

const backpackBG = (document.getElementById("backpack").style.backgroundColor =
  "tomato");
