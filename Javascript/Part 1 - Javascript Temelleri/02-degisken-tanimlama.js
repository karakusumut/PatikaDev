//******** Let ve Const ile Değişken Tanımlama **********

// var ile değişken tanımlama:
/*var serverName ="api.kodluyoruz.org"
console.log(serverName)*/

// let ile değişkeni boş tanımlamak
let serverName;
console.log(serverName)

// let ile değişkene bilgi atamak
serverName = "https://kodluyoruz.org"
console.log(serverName)

// let ile değişkene bilgi atayarak tanımlamak
let password = 1234;
console.log(password)


// değişken ataması yapmadan önce kullanmaya çalışmak
/*HATALI KULLANIM*/
let fullName = "Umut Karakuş";
//*console.log(fullName)*/

//let ile tanımlanan değişkenin içindeki bilgiyi değiştirmek
fullName ="lorem ipsum"
console.log(fullName)

//birleştirme veya ekleme işlemi
fullName +="Yeni eklenen bilgi"
console.log(fullName)

// const ile değişkeni boş tanımlamaya çalışmak
//const serverPassword;

//const ile değişkeni tanımlamak
const SERVER_PASSWORD = "aldnakjlda212"
console.log(SERVER_PASSWORD)

/*SERVER_PASSWORD = "12345"
console.log(SERVER_PASSWORD)*(ÇALIŞMAZ)*/