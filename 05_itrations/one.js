// For 
//node 05_itrations/one.js
for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5) {
        // console.log(`${element} is best Number`)    
    }
    // console.log(element);
}
let ro = 5;
let vari = 1;
let pat = "";
let pat2 = "";
// for (let i = 1; i <= ro; i++) {
//     for (let j = 1; j <= i; j++) {
//         pat += vari+" ";
//         vari++;
//     }
//     pat += "\n";
// }
// console.log(pat);
//---------------- 4 -------------
// for (let i = 1; i <= ro; i++) {
//     for (let j = 1; j <= i; j++) {
//         pat += j;
//     }
//     if(i != ro){
//         pat += "\n";
//     }else{
//         break;
//     }
// }
// console.log(pat);
// let emt = ro + 1;
// for (let i = 1; i <= ro; i++) {
//     for (let j = 1; j <= (ro)-i; j++) {
//         pat2 += j;
    
//     }
//     pat2 += "\n";
// }
// console.log(pat2);
//-------------------------------------------
// 1
// 12
// 123
// 1234
// 12345
// 1234
// 123
// 12
// 1
// ------------------- 5 -----------------
/*
let emt = ro + 1;
for (let i = 1; i <= ro; i++) {
        for (let j = 1; j <= (ro+1)-i; j++) {
            pat2 += j;        
        }
        if(i != ro){
            pat2 += "\n";
        }else{
            break;
        }
}
console.log(pat2);
for (let i = 1; i <= ro; i++) {
        for (let j = 1; j <= i; j++) {
            if(i != 1){
                pat += j;
            }else{
                break;
            }
        }
        if (i == 1) {
            continue;
        }else{
            pat += "\n";
        }
}
console.log(pat);
*/
//----------------------------------------------
// 12345
// 1234
// 123
// 12
// 1
// 12
// 123
// 1234
// 12345

// ------------------- 6 --------------------------------
/*
for (let i = 1; i <= ro; i++) {
    for (let s = 1; s <= ro-i; s++) {
        pat += " ";
    }
    for (let j =1; j <= i; j++) {
        pat += j;
    }
    if (i == ro) {
        
        break;
    }        
    else{
        pat += "\n";
    }
}
console.log(pat);
for (let i = 1; i <= ro; i++) {
    for (let j = 1; j <= i; j++) {
        if (i == j) {
            continue;
        }else{
            pat2 += " ";
        }
    }
    for (let s = 1; s <= (ro+1)-i; s++) {
        pat2 += s;
    }
    pat2 += "\n";        
}
console.log(pat2);
*/
// -------------------------------------------------------------
//     1
//    12
//   123
//  1234 
// 12345
// 12345
//  1234 
//   123
//    12 
//     1

// ---------------------------- 7 -----------------------------------
/*
for (let i = 1; i <= ro; i++) {
    for (let s = 1; s <= ro-i; s++) {
        pat += " ";
    }
    for (let j =1; j <= i; j++) {
        pat += j;
    }
    if (i == ro) {
        
        break;
    }        
    else{
        pat += "\n";
    }
}
console.log(pat);
for (let i = 1; i <= ro; i++) {
    for (let j = 1; j <= i; j++) {
        if (i == j) {
            continue;
        }else{
            pat2 += " ";
        }
    }
    for (let s = 1; s <= (ro+1)-i; s++) {
        if (i == 1) {
            continue;
        }else{
            pat2 += s;
        }
    }
    if (i == 1) {
        continue;
    }else{
        pat2 += "\n";
    }
            
}
console.log(pat2);
*/
// ------------------------------------------------
//     1
//    12
//   123
//  1234 
// 12345
//  1234 
//   123
//    12 
//     1

// ------------------ 8 ---------------------------
/*
for (let i = 1; i <= ro; i++) {
    for (let s = 1; s <= ro-i; s++) {
        pat += " ";
    }
    for (let j =1; j <= i; j++) {
        pat += `${j} `;
    }
    if (i == ro) {
        
        break;
    }        
    else{
        pat += "\n";
    }
}
for (let i = 1; i <= ro; i++) {   
    if (i != 1) {
        for (let j = 1; j <= i; j++) {   
            if (i == j) {
                continue;
            }else{
                pat2 += " ";
            }
        }
        for (let j = i; j <= ro; j++) {   
            pat2 += `${j} `;
        }
        pat2 += "\n";

        
    }else{
        continue;
    }
}
console.log(pat);
console.log(pat2);
*/
// -------------------------------------------------
//     1 
//    1 2 
//   1 2 3 
//  1 2 3 4 
// 1 2 3 4 5 
//  2 3 4 5 
//   3 4 5 
//    4 5 
//     5 

// ------------------- 9 ------------------

for (let i = 1; i <= ro; i++) {

    if (i % 2 == 0) {
        pat += "\n";
        continue;
    }
    else{
        for (let s = 1; s <= ro-i; s++) {
            pat += " ";
        }
        for (let j =1; j <= i; j++) {
            pat += `${j} `;
        }
        if (i == ro) {
            
            break;
        }        
        else{
            pat += "\n";
        }
    }
    
}
for (let i = 1; i <= ro; i++) {   
        if (i != 1) {
            if (i % 2 == 0) {
                pat += "\n";
                continue;
            }else{
                for (let j = 1; j <= i; j++) {   
                    if (i == j) {
                        continue;
                    }else{
                        pat2 += " ";
                    }
                }
                for (let j = i; j <= ro; j++) {   
                    pat2 += `${j} `;
                }
                pat2 += "\n";  
            } 
        }
         else{
            continue;
        }
        
}
    




console.log(pat);
console.log(pat2);
// for (let i = 0; i < 5; i++) {
   
// }