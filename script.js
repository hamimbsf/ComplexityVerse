// 📘 Let's understand Complexity

// যখন কোনো টাস্কের কার্যকারিতা (efficiency) বা কোডের performance কেমন হবে,
// অর্থাৎ সময় ও মেমোরি কতটুকু লাগবে — সেটা বোঝাতে আমরা "Complexity" ব্যবহার করি।

// 📘 Time Complexity

// প্রথমেই পরিষ্কার করে নিই: time/সময় এর সঙ্গে Time Complexity এর কোনও সরাসরি সম্পর্ক নেই!
// মানে, কোড রান হতে বাস্তবে কত সেকেন্ড লাগল — সেটা Time Complexity না ❌

// ✅ তাহলে Time Complexity কী?

// Time Complexity বোঝায় —
// "একটি কোড চালাতে কতগুলো অপারেশন (steps) বা কাজ হয়,
// এবং এই কাজগুলো ইনপুট সাইজ `n` এর উপর কতটা নির্ভরশীল।"

// 👉 একে বলা যায়:
// Amount of operations taken as a function of input size n

// ⚠️ মনে রাখো:
// এখানে 'সময়' বলতে বোঝানো হচ্ছে → কোডে কয়টি স্টেপ বা ইনস্ট্রাকশন হচ্ছে,
// বাস্তবের ঘড়ির সময় (seconds, milliseconds) নয়।

// উদাহরণ:
// function printAll(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]); // n বার চলবে
//   }
// }

// 👉 উপসংহার:
// ইনপুট যত বড় হবে (n বাড়বে), কোডে অপারেশনের সংখ্যা তত বাড়বে।
// Time Complexity সেই অনুপাতে পরিবর্তিত হয়।

// 📘 Handling for large input

// 🟡 Important : Time complexity সবসময় large input এর ক্ষেত্রেই বিবেচনা করা হয়

// 🧠 চল একটা বাস্তব উদাহরণ দেই:

// ধরি, একটা কোম্পানি আছে।
// সেখানে যদি মাত্র ১ জন কর্মচারী থাকে, তাহলে তার ইনফরমেশন মুখস্থ রেখেই ম্যানেজ করা সম্ভব।

// ১০ জন হলে? ঠিক আছে — একটা খাতায় লিখে রাখলেই চলবে।
// ৫০ জন? একটু সময় লাগবে, কিন্তু তাও ম্যানেজেবল।
// কিন্তু...

// যখন কর্মচারীর সংখ্যা ১০০০ বা ১০,০০০ ছাড়িয়ে যাবে,
// তখন আর কাগজ-কলম দিয়ে ম্যানেজ করা সম্ভব না!
// তখন দরকার হয় —
// ✅ একটা সিস্টেম!
// ✅ দক্ষ প্রোগ্রামিং লজিক!
// ✅ এবং সেই সাথে, কোড কেমন স্কেল করে — সেটা বোঝার জন্য Time Complexity!

// 📌 Bottom Line:
// ছোট ইনফরমেশনের ক্ষেত্রে Time Complexity নিয়ে ভাবার দরকার পড়ে না।
// কিন্তু ডেটা যখন "Huge" হয়ে যাবে, তখন efficient কোড লিখতেই
// Time Complexity এর বিশ্লেষণ দরকার হয়।
// 📘 Complexity Representation

// যেমন:
// - ওজন পরিমাপে → kg
// - দূরত্ব পরিমাপে → km
// - তরল পরিমাপে → liter

// ঠিক তেমনই,
// কোডের Efficiency বা Time Complexity পরিমাপ করতে আমরা ব্যবহার করি কিছু Notation।

// ✅ এই তিনটি Notation দিয়ে আমরা Complexity Represent করি:

// 1️⃣ Big O (Upper Bound / Worst Case)
// 2️⃣ Theta Θ (Exact / Average Case)
// 3️⃣ Omega Ω (Lower Bound / Best Case)

// কিন্তু আমরা সাধারণত Big O ব্যবহার করি। কেন?

// 🪙 যেমন ৫ টাকা, ৫ ডলার, ৫ রুপি — সবই '৫' হলেও currency ভিন্ন হয়, অর্থ ভিন্ন বোঝায়।
// তেমনই এই তিনটি Notation-ই কোনো একটি কাজকে Represent করে ভিন্ন ভিন্ন দৃষ্টিকোণ থেকে।

// 🟡 আমরা Big O ব্যবহার করি কারণ:
// আমরা সাধারণত **worst case** নিয়ে কাজ করি,
// যেন সবচেয়ে খারাপ পরিস্থিতিতেও কোড কত ভালো চলে সেটা বুঝতে পারি।

// 📌 এখন চল এক্সাম্পল দিয়ে বুঝি:
// -------------------------------------

// 🧠 Big O (Upper Bound / Worst Case):
// - অর্থ: এর চেয়ে খারাপ হবে না, এই হচ্ছে সর্বোচ্চ সময় বা অপারেশন।
// - উদাহরণ: "A থেকে B যেতে max ১০ মিনিট লাগতে পারে।" → এর বেশি না।
// - এটাকেই বলে Worst Case / Upper Bound।

// 🧠 Theta Θ (Average Case):
// - অর্থ: গড় সময় বা গড় অপারেশন সংখ্যা।
// - উদাহরণ: "A থেকে B যেতে সাধারণত ৬-৭ মিনিট লাগে।" → এটা হল Theta।

// 🧠 Omega Ω (Lower Bound / Best Case):
// - অর্থ: এর কমে হবে না, এটি হচ্ছে সর্বনিম্ন সময় বা অপারেশন।
// - উদাহরণ: "A থেকে B যেতে কমপক্ষে ১০ মিনিট লাগবেই।" → এর চেয়ে কম হবে না, বেশি হতে পারে।

// ✅ Bottom Line:
// তাই আমরা বাস্তব জীবনে সবচেয়ে খারাপ পরিস্থিতির প্রস্তুতি নিতে চাই,
// এজন্য **Big O Notation**-ই Time Complexity বোঝাতে সবচেয়ে বেশি ব্যবহৃত হয়।

// 📘 Type and Graph

// ✅ Constant Time — O(1)

// যখন কোনো task এক ধাপে (one step) শেষ হয়ে যায়, তখন আমরা সেটাকে বলি Constant Time Complexity বা O(1)

// আবার, যখন একটি নির্দিষ্ট (fixed) value-এর উপর কোনো অপারেশন চালানো হয়, তখন সেটিও O(1) হয়।
// কিন্তু যদি সেই value ডায়নামিক হয় বা আগে থেকে নির্ধারিত না থাকে,
// তাহলে সেটা O(1) নাও হতে পারে — কারণ তখন আমরা নিশ্চিত না কতবার অপারেশন চলবে।

// ✅ Constant Time (O(1)) উদাহরণ:

// let arr = [10, 20, 30];
// console.log(arr[1]); // O(1) — কারণ নির্দিষ্ট index access করছি

// 📌 নোট:
// Array থেকে একটি নির্দিষ্ট index access, কোনো নির্দিষ্ট variable এর উপর কাজ — এগুলো সবই Constant Time, কারণ input এর size বাড়লেও এই কাজটা এক ধাপে হয়।

// ❌ Constant Time নয় (O(n)) উদাহরণ:

// ইউজারের ইনপুট অনুযায়ী লুপের পরিমাণ পরিবর্তিত হচ্ছে

// let n = Number(prompt("Enter number of times to run loop:")); // ইউজারের ইনপুট
// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

// 🔍 ব্যাখ্যা:
// এখানে লুপ চালানো হবে n বার, যেখানে n ইউজারের ইনপুট।
// অর্থাৎ, অপারেশন পরিমাণ ইনপুট সাইজের উপর নির্ভরশীল।
// তাই এই অপারেশনটি Constant Time নয়

// 📘 Linear Time Complexity — O(n)

// যখন কোনো অপারেশন নির্দিষ্ট নয়,
// অর্থাৎ কাজের পরিমাণ ইনপুট সাইজ (n) এর উপর নির্ভর করে,
// তখন সেটাকে Linear Time Complexity বা O(n) বলে।

// কারণ, ইনপুট বড় হলে কাজের পরিমাণও সোজা অনুপাতে বৃদ্ধি পায়।

// উদাহরণ:
// let n = parseInt(prompt("Enter number of times to run loop:"));

// for (let i = 0; i < n; i++) {
//   console.log(i); // n বার অপারেশন চলছে
// }

// এই ক্ষেত্রে, লুপ চালানোর সংখ্যা নির্ভর করছে ইউজারের দেওয়া n এর উপর,
// তাই Time Complexity হল O(n)।

// 📘 Quadratic Time Complexity — O(n²)

// যখন কোনো অপারেশন nested loop এর মাধ্যমে চালানো হয়,
// অর্থাৎ লুপের ভিতরে আরেকটা লুপ থাকে,
// তখন অপারেশনের সংখ্যা হয় n × n বা n² হারে বৃদ্ধি পায়।

// let n = Number(prompt("Enter a number:"));

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     console.log(i, j); // অপারেশন চলছে n × n বার
//   }
// }

// এখানে,
// বাইরের লুপ n বার চলবে,
// এবং প্রতিবার ভিতরের লুপ n বার চলবে,
// তাই মোট অপারেশন হবে n × n = n²
// তাই Time Complexity হল O(n²)

// এর মানে,
// ইনপুটের সংখ্যা n হলে অপারেশনের সংখ্যা n × n হারে বৃদ্ধি পাবে।

// 📘 Cubic Time Complexity — O(n³)

// যখন কোনো অপারেশন triple nested loop এর মাধ্যমে চালানো হয়,
// অর্থাৎ লুপের ভিতরে লুপ, আর তার ভিতরে আরেকটা লুপ থাকে,
// তখন অপারেশনের সংখ্যা হয় n × n × n = n³ হারে বৃদ্ধি পায়।

// let n = parseInt(prompt("Enter a number:"));

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     for (let k = 0; k < n; k++) {
//       console.log(i, j, k); // অপারেশন চলছে n × n × n = n³ বার
//     }
//   }
// }

// এখানে,
// বাইরের লুপ n বার চলবে,
// ভিতরের দ্বিতীয় লুপ n বার চলবে,
// আর তৃতীয় লুপও n বার চলবে,
// তাই মোট অপারেশন হবে n × n × n = n³
// তাই Time Complexity হল O(n³)

// এর মানে,
// ইনপুটের সংখ্যা n হলে অপারেশনের সংখ্যা n³ হারে বৃদ্ধি পাবে।

// 📘 Logarithmic Time Complexity — O(log n)

// যখন কোনো অপারেশন প্রতিবার ইনপুট সাইজকে আংশিক করে কমিয়ে নেয়,
// যেমন প্রতি ধাপে ইনপুটকে দুইভাগ করা হয়,
// তখন অপারেশনের সংখ্যা বাড়ে ধীর গতিতে, অর্থাৎ log n হারে।

// সবচেয়ে পরিচিত উদাহরণ — Binary Search algorithm।

// উদাহরণ: Binary Search-এ প্রতিবার সার্চ স্পেসকে দুইভাগে ভাগ করা হয়।

// let sortedArr = [2, 4, 6, 8, 10, 12, 14, 16];
// let target = 10;

// function binarySearch(arr, target) {
//   let left = 0;
//   let right = arr.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (arr[mid] === target) return mid;
//     else if (arr[mid] < target) left = mid + 1;
//     else right = mid - 1;
//   }
//   return -1; // না পাওয়া গেলে
// }

// console.log(binarySearch(sortedArr, target)); // Output: 4

// এখানে,
// প্রতিবার আমরা খুঁজতে যাওয়া এলাকা অর্ধেক করে দিচ্ছি,
// তাই অপারেশনের সংখ্যা n এর পরিবর্তে log n হারে বাড়ে,
// যা অনেক দ্রুত।

// এর মানে,
// ইনপুটের সংখ্যা n বাড়লেও অপারেশনের সংখ্যা ধীরে ধীরে বাড়ে।

// 📘 Exponential Time Complexity — O(2ⁿ)

// 👉 যখন কোনো সমস্যায় প্রতি ধাপে ২টা করে নতুন রাস্তায় যেতে হয়,
// তখন অপারেশনের সংখ্যা 2^n হারে বেড়ে যায়।
// এটাকেই বলে Exponential Time Complexity।

// 🎯 যেমন ধরো — ফিবোনাচ্চি সিরিজ (Recursive ভাবে লিখলে)

// ফিবোনাচ্চি মানে:
// 0 1 1 2 3 5 8 13 ...
// যেখানে প্রতিটি সংখ্যা = আগের দুইটা সংখ্যার যোগফল

// 🔁 আমরা যদি রিকার্সিভভাবে করি,
// তাহলে প্রতিবার ২টা নতুন কল হয়: n-1 আর n-2 এর জন্য

// function fibonacci(n) {
//   if (n <= 1) return n; // base case: 0 বা 1 হলে সেটাই রিটার্ন করি
//   return fibonacci(n - 1) + fibonacci(n - 2); // দুইটা রাস্তায় ভাগ হয়ে যায়
// }

// console.log(fibonacci(5)); // Output: 5

// 🔎 এখানে প্রতিবার ২টা করে নতুন কল হওয়ায়,
// যত n বাড়ে, কাজের পরিমাণ অনেক দ্রুত বাড়ে — তাই 2^n time লাগে।

// 📘 Factorial Time Complexity — O(n!) কি?

// যখন তোমার কাজ এমন হয়, যেখানে সব সম্ভাব্য সাজানোর উপায় (Permutation) দেখতে হয়, তখন কাজের পরিমাণ দ্রুত বাড়ে।

// উদাহরণ:
// ধরো তোমার কাছে ৩ টা ফল আছে: আপেল (A), কলা (B), আম (C)

// সাজানোর উপায়গুলো:
// ABC, ACB, BAC, BCA, CAB, CBA

// মোট ৬টি সাজানোর উপায়, অর্থাৎ 3! = 3 × 2 × 1 = 6

// বড় হলে:
// 4! = 24, 5! = 120, 10! = 3,628,800

// Factorial Time Complexity মানে কাজের পরিমাণ n! হারে বাড়ে,
// যা দ্রুত বেড়ে অনেক সময় কম্পিউটারে করা কঠিন হয়ে পড়ে।

// সংক্ষিপ্ত টেবিল:

// Input size (n)   | Number of operations (n!)
// -------------------------------------------
// 3                | 6
// 4                | 24
// 5                | 120
// 10               | 3,628,800

// তাই যখন কাজের সংখ্যা permutations বা সাজানোর উপায় দেখে হিসাব করতে হয়,
// তখন factorial টাইম কমপ্লেক্সিটি হয়, যা দ্রুত বেড়ে যায় এবং স্লো হয়ে যায়।

// 📘 Generating Complexity Equation

// কোড দেখে কিভাবে Time Complexity বের করব? — সহজভাবে বোঝা যাক

// ধরো নিচে ৩টা লুপ আছে, প্রতিটা লুপ n বার চলে:

// let n = Number(prompt("Enter a number"));

// for (let i = 0; i < n; i++) {
//   console.log("Loop 1");
// }
// ⏱️ Time Complexity = O(n)

// for (let i = 0; i < n; i++) {
//   console.log("Loop 2");
// }
// ⏱️ Time Complexity = O(n)

// for (let i = 0; i < n; i++) {
//   console.log("Loop 3");
// }
// ⏱️ Time Complexity = O(n)

// 🧠 Explanation:

// 🔹 এই তিনটি লুপ একটার পর একটা চলছে (sequentially).
// 🔹 এগুলো nested না, তাই multiply না হয়ে যোগ (add) হবে।

// 👉 Total Time Complexity:
//    O(n) + O(n) + O(n) = O(3n)
// ❌ আমরা constant (3) কে গণনায় ধরি না।

// ✅ Final Time Complexity = O(n)

// How to find the Time Complexity of a Nested Loop?

// let n = Number(prompt("Enter a number"));

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     console.log(`Index ${i}`, j);
//   }
// }

/*
🔍 Explanation:

- এখানে একটা Nested Loop আছে, অর্থাৎ একটা লুপের ভিতরে আরেকটা লুপ চলছে।

- বাইরের লুপ n বার চলে → Time Complexity O(n)
- ভিতরের লুপও n বার চলে প্রতিবার বাইরের লুপের জন্য → Time Complexity O(n)

- যেহেতু ভিতরের লুপ বাইরের লুপের ভিতরে nested,
  তাই তাদের অপারেশন সংখ্যা গুণ করতে হবে:

  O(n) * O(n) = O(n²)

- অর্থাৎ, এই কোডের Time Complexity হল **O(n²)**
*/

// Time Complexity Analysis of Nested and Sequential Loops

// let n = Number(prompt("Enter a number"));

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     console.log(`Index ${i}`, j);
//   }
// }

// for (let i = 0; i < n; i++) {
//   console.log(i);
// }

/*
কিভাবে Time Complexity বের করব?

1️⃣ প্রথম nested loop এর time complexity:
   - বাইরের loop: O(n)
   - ভিতরের loop: O(n)
   - nested হওয়ায় multiply করতে হবে → O(n) * O(n) = O(n²)

2️⃣ দ্বিতীয় loop এর time complexity:
   - single loop হওয়ায় → O(n)

3️⃣ কোডগুলো sequentially চলছে (একটার পরে একটা), তাই যোগ করতে হবে:
   O(n²) + O(n)

4️⃣ Big O notation এ ছোট টার্মগুলো বাদ দিয়ে বড় টার্মটাই গ্রহণ করি:
   তাই, Total Time Complexity = O(n²)
*/

// How to Simplify and Find Time Complexity from Equations

// কখনো কখনো সরাসরি একটি Equation দেওয়া হয় এবং আমাদের সেটার Time Complexity বের করতে হয়।

// Example Equation One:
// 3n²/2 + n log n + n

// Step 1 --> ছোট term গুলো বাদ দিতে হবে
// অর্থাৎ এখানে n log n এবং n ছোট term

// Step 2 --> constant গুলোও বাদ দিতে হবে
// যেমন 3 এবং 2

// তাই,
// Total Time Complexity = O(n²)

// Example Equation Two:

// n log n + log n + O(1)

// Step 1 --> ছোট term গুলো বাদ দিতে হবে
// অর্থাৎ এখানে log n এবং O(1) ছোট term

// Step 2 --> বড় term টা ধরে নিতে হবে

// তাই,
// Total Time Complexity = O(n log n)

// ❌ TLE (Time Limit Exceeded)

// প্রতিটি ইনপুট সাইজের জন্য একটি নির্দিষ্ট time complexity এর সীমা থাকে।
// এর মানে হলো, ইনপুট ডেটা যদি অনেক বড় হয়, তাহলে তোমাকে অবশ্যই ঠিক তেমন একটি efficient algorithm লিখতে হবে

// ✨ প্রথম ধাপ:
// যেকোনো প্রবলেমের ক্ষেত্রে প্রথমে দেখে নাও ইনপুটের সীমা কত (constraints), যেমন:
// যদি n ≤ 10^5 হয়, তাহলে তুমি O(n log n) বা O(n) টাইপের এলগোরিদম ব্যবহার করতে পারো।
// কিন্তু যদি তুমি এখানে O(n^2) টাইপের এলগোরিদম লেখো, তাহলে Time Limit Exceeded (TLE) দেখাবে।

// ✅ গুরুত্বপূর্ণ:
// যত বড় ইনপুট হবে, তত বেশি efficient এলগোরিদম দরকার হবে।
// বাজে এলগোরিদম লিখলে প্রোগ্রাম শেষ হতে বেশি সময় নেবে এবং TLE হয়ে যাবে।

// ❓তাহলে কীভাবে বুঝবে কোন ইনপুট সাইজের জন্য কোন টাইপের এলগোরিদম প্রযোজ্য?

// ✅ Step 1: ইনপুট সাইজ দেখো
// ✅ Step 2: সেই সাইজ অনুযায়ী সবচেয়ে efficient এলগোরিদম বেছে নাও
// ✅ Step 3: বড় ডেটা = ভালো এলগোরিদম না হলে TLE

// If n ≤ 10^3      → O(n^2) acceptable
// If n ≤ 10^5      → O(n log n) or better
// If n ≤ 10^6~7    → O(n) or O(n log n) if constants are small
// If n > 10^8      → Only O(1) or O(log n) acceptable

// 🧠 Space Complexity

// কোনো Algorithm বা Code রান করার সময়, সেটা কতটা Memory (RAM) ব্যবহার করে — এটাকেই বলে Space Complexity.

// এইটা মূলত নির্ভর করে তুমি কতটা নতুন ভেরিয়েবল, অ্যারে, অবজেক্ট ইত্যাদি তৈরি করছো।

// ✅ Constant Space → O(1)
// যখন ইনপুট যত বড়ই হোক না কেন, তুমি সবসময় fix সংখ্যক variable ব্যবহার করো।

// উদাহরণ:
// function sum(arr) {
//   let total = 0; // 1 variable
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// এখানে শুধু ১টা variable 'total' ব্যবহার হচ্ছে। তাই Space Complexity → O(1)

// ✅ Linear Space → O(n)
// যখন তুমি ইনপুটের উপর ভিত্তি করে নতুন অ্যারে বা অবজেক্ট তৈরি করো।

// উদাহরণ:
// function doubleArray(arr) {
//   let result = []; // New array based on input
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i] * 2);
//   }
//   return result;
// }
// এখানে 'result' নামের একটি নতুন array তৈরি হচ্ছে যার size → n
// তাই Space Complexity → O(n)

// ✅ Quadratic Space → O(n^2)
// যখন তুমি nested structure (2D array, matrix) তৈরি করো

// উদাহরণ:
// function createMatrix(n) {
//   let matrix = [];
//   for (let i = 0; i < n; i++) {
//     let row = [];
//     for (let j = 0; j < n; j++) {
//       row.push(0);
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }
// এখানে n × n মাপের একটি matrix তৈরি হচ্ছে, তাই Space Complexity → O(n^2)

// ✨ Bonus: Space-Time Tradeoff
// কখনও আমরা extra space ব্যবহার করি যেন time কমে। যেমনঃ caching, memoization, etc.
