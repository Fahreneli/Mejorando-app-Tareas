/* export const dateElement = (date) => {
    const dateelement = document.createElement("li");
    dateelement.classList.add("date");
    dateelement.innerHTML = date;
    return dateelement;
}*/

export default (date) => {
    const dateElement = document.createElement("li");
    dateElement.classList.add("date");
    dateElement.innerHTML = date;
    return dateElement;
}