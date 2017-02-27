function ConvertNumberToPersion(str) {
    var str = str.replace(/0/i, '۰');
    var str = str.replace(/1/i, '۱');
    var str = str.replace(/2/i, '۲');
    var str = str.replace(/3/i, '۳');
    var str = str.replace(/4/i, '۴');
    var str = str.replace(/5/i, '۵');
    var str = str.replace(/6/i, '۶');
    var str = str.replace(/7/i, '۷');
    var str = str.replace(/8/i, '۸');
    var str = str.replace(/9/i, '۹');
    return str;
  }

console.log(ConvertNumberToPersion('0123456789'));
console.log(ConvertNumberToPersion('0123مهدی456789'));
console.log(ConvertNumberToPersion('01234ali56789'));
