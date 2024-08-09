document.getElementById('copyEmail').addEventListener('click', function(event) {
    event.preventDefault();

    const textToCopy = "jamesh2910@gmail.com";

    const tempInput = document.createElement('input');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);

    tempInput.select();
    document.execCommand('copy');

    document.body.removeChild(tempInput);
}
);