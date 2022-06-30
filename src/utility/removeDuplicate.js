export default function removeDuplicate(arr) {
    var upperArr = arr.map(item => {
        return item.toUpperCase();
    })
    return [...new Set(upperArr)];
}