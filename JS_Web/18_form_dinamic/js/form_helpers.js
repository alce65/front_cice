

export function setRadio(radio) {
    for (let i = 0; i < radio.length; i++) {
        const item = radio[i];
        if (item.checked) {
            return item.value
        }
    }
    return false
}