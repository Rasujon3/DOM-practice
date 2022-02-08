/* 
    ২. যতগুলা ইলিমেন্টে h2 ট্যাগ আছে সেগুলাকে সিলেক্ট করে তার লেখাগুলার 
    কালার lightblue করেদিতে পারো কিনা। 
*/
const allH2Tag = document.getElementsByTagName("h2");
// console.log(allH2Tag);
// allH2Tag[0].style.color = "lightblue";
// allH2Tag[1].style.color = "lightblue";
for (const h2Tag of allH2Tag) {
  console.log(h2Tag);
  h2Tag.style.color = "lightblue";
}
// document.getElementsByTagName("h2").style.color = "lightblue";
