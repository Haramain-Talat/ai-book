---
sidebar_position: 1
title: پہلا سبق (Pehla Sabaq - First Lesson)
description: یہ پہلا سبق مصنوعی ذہانت کے بنیادی تصورات کو سمجھنے کے لیے ہے۔ (This first lesson is for understanding the basic concepts of Artificial Intelligence.)
---

# مصنوعی ذہانت کی وضاحت (Artificial Intelligence Explained)

## وضاحت (Explanation)

مصنوعی ذہانت (AI) کمپیوٹر سائنس کا ایک ایسا شعبہ ہے جو مشینوں کو انسانوں جیسی ذہانت سے کام کرنے کے قابل بناتا ہے۔ اس میں سیکھنے، مسئلہ حل کرنے، فیصلہ سازی، اور زبان سمجھنے جیسی صلاحیتیں شامل ہیں۔ (Artificial Intelligence (AI) is a field of computer science that enables machines to perform tasks with human-like intelligence. This includes capabilities such as learning, problem-solving, decision-making, and language understanding.)

### کلیدی تصورات (Key Concepts)

*   **مشین لرننگ (Machine Learning)**: مشینوں کو ڈیٹا سے سیکھنے کی صلاحیت فراہم کرنا۔ (Giving machines the ability to learn from data.)
*   **ڈیپ لرننگ (Deep Learning)**: نیورل نیٹ ورکس کا استعمال کرتے ہوئے پیچیدہ پیٹرن کو پہچاننا۔ (Recognizing complex patterns using neural networks.)

## مثال (Example)

ایک ای میل سپیم فلٹر AI کی ایک عام مثال ہے۔ یہ ہزاروں ای میلز سے سیکھتا ہے اور خود بخود سپیم کو ان باکس سے الگ کرتا ہے۔ (An email spam filter is a common example of AI. It learns from thousands of emails and automatically separates spam from the inbox.)

```javascript
// ایک سادہ AI سپیم فلٹر کی مثال (A simple AI spam filter example)
function isSpam(emailContent) {
  const spamKeywords = ["buy now", "free money", "unlimited offer"];
  for (const keyword of spamKeywords) {
    if (emailContent.toLowerCase().includes(keyword)) {
      return true;
    }
  }
  return false;
}

let email1 = "Hello, check out this great offer!";
let email2 = "Buy now and get free money!";

console.log(`Email 1 is spam: ${isSpam(email1)}`); // Output: Email 1 is spam: false
console.log(`Email 2 is spam: ${isSpam(email2)}`); // Output: Email 2 is spam: true
```

## مشق (Practice)

اپنی روزمرہ کی زندگی سے AI کی ایک اور مثال تلاش کریں اور مختصراً بیان کریں کہ AI اس میں کیسے کام کر رہا ہے۔ (Find another example of AI from your daily life and briefly describe how AI works in it.)
