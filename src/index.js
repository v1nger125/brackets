module.exports = check
function check(str, bracketsConfig) {
    function get_index(letter){
        for (let index = 0; index < bracketsConfig.length; index++) {
            if(bracketsConfig[index].indexOf(letter) != -1) {
                if(bracketsConfig[index][0] != bracketsConfig[index][1]){
                    return [index, bracketsConfig[index].indexOf(letter)];
                }
                else{
                    return [index, -1];
                }
            }
        }
    }
    let conf = new Array();
    for (let i = 0; i < str.length; i++) {
        conf.push(get_index(str[i]));
        if (conf.length >= 2 && conf[conf.length-1][0] == conf[conf.length-2][0] && (conf[conf.length-1][1] > conf[conf.length-2][1] || conf[conf.length-1][1] == -1)) {
            conf.pop();
            conf.pop();
        }
    }
    if (conf.length == 0) { 
        return true;
    }
    else {
        return false;
    }
}
