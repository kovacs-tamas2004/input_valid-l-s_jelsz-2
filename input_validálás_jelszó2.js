function isValidPassword(value) {
    if (value.length < 8) {
      return false;
    }
  
    let szam = 0;
    let kisbetu = 0;
    let nagybetu = 0;
    let specKarakter = 0;
  
    for (let i = 0; i < value.length; i++) {
      let karakter = value.charAt(i);
  
      if (/\d/.test(karakter)) {
        szam++;
      } else if (/[a-z]/.test(karakter)) {
        kisbetu++;
      } else if (/[A-Z]/.test(karakter)) {
        nagybetu++;
      } else if (/[!@#\$%\^&*\(\)_\+\-=\{\}\[\]\|:;\"'<>,.?\/]/.test(karakter)) {
        specKarakter++;
      }
    }
  
    return (
        szam >= 2 && kisbetu >= 2 && nagybetu >= 2 && specKarakter >= 1
    )
  }
  
  let jelszo1 = "Abcdefg1"; // 
  console.log(isValidPassword(jelszo1));
  
  let jelszo2 = "Ab1"; 
  console.log(isValidPassword(jelszo2));