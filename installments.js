
function loadDate() {
    const value = new Date().toISOString().slice(0, 10);
    console.log('value', value)
    const valueSplitted = value.split('-');
    console.log('valueSplitted', valueSplitted)
    const valueReversed = valueSplitted.reverse();
    console.log('valueReversed', valueReversed)
    const date = valueReversed.join('/');
    console.log('date', date)
    const dateComponent = document.getElementById('date');
    console.log('dateComponent', dateComponent)
    // dateComponent.value = date;

    dateComponent.setAttribute('value', value);

    // dateComponent.style.backgroundColor = 'red';
    return date;

}

document.addEventListener("DOMContentLoaded", function() {
    loadDate();
});