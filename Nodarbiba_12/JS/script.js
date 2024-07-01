var div = document.createElement('div');

setTimeout(() => {
    console.log(div);
}, 3010);

setTimeout(() => {
    div.innerHTML = '<p>CreateElement example</p>';
}, 5000);

setTimeout(() => {
    console.log(div);
}, 5010);

setTimeout(() => {
    document.body.appendChild(div);
}, 7000);
