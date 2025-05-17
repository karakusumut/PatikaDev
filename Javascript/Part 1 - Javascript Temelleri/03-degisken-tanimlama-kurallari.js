//******************Degişken Tanımlama Kuralları **********************
// https://www.w3schools.com/js/js_conventions.asp
// https://google.github.io/styleguide/jsguide.html#features-local-variable-declarations
//https://www.robinwieruch.de/javascript-naming-conventions

// camelCase kullanımı:
let fullName;
let kodluyoruzServerInfo;

// UPPER_CASE kullanımı:
const PC_PASSWORD = "asdad1234";
const PASSWORD ="ADA1231";

// Kod okunurluğu açısından bazı şeyleri ayrı ayrı yazılmalı
let firstName = "Umut";
let lastName = "Karakuş";

// değişkenlerde türkçe ve diğer dillerin kullanımı:
let türkçeBilgi = "Türkçe bilgiler";
console.log(türkçeBilgi)//Bu kullanımlar yanlıştır, standarta uygun değildir.

let info = "Türkçe bilgiler";
console.log(türkçeBilgi)//DOĞRU KULLANIM

// anlamsız değişken adları kullanılmaz!
// https://stackoverflow.com/questions/184618/what-is-the-best-comment-in-source-code-you-have-ever-encountered
// When I wrote this, only God and I understood what I was doing
// Now, God only knows
let x = 1; //YANLIŞ KULLANIM

// ### Ek Bilgi:
// 1: boolean tanımlanırken is/has kullanımı:
let isActive = true;
let hasPassword = false;

// 2: Line Length < 80
//satırın uzunluğu 80 karakteri geçmemelidir.