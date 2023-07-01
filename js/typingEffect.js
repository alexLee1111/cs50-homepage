export function typing(text, area, i){
    for (var char of text) {
        i++;
        setTimeout((char) => {
            area.innerHTML += char;
        }, 1000 * i / 10,char);
    }
}