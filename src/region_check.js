var is_iranian = false;
if (navigator.languages){
    is_iranian = navigator.languages.includes("fa");
}
else{
    is_iranian = navigator.language === "fa"
}
export default is_iranian