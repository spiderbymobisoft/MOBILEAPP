export class Intelligence {

  setTitleCase(str) : string {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       // You do not need to check if i is larger than splitStr length, as your for does that for you
       // Assign it back to the array
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   // Directly return the joined string
   return splitStr.join(' ');
  }

  GENERATE_STREET_ID(){
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var text='SID-';
    var len = 16;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  GENERATE_PROPERTY_ID(){
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var text='SID-';
    var len = 16;
    for( var i=0; i < len; i++ )
        text += charset.charAt(Math.floor(Math.random() * charset.length));
    return text;
  }

  
  isEmailValid(email) {
    var x = email;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        return false;
    }
    else{
      return true;
    }
  }
  
}