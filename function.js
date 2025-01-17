document.getElementById('beeBtn').addEventListener('click', function() {
    const hiddenMessage = document.getElementById('hiddenMessage');
    if (hiddenMessage.style.display === 'block') {
        hiddenMessage.style.display = 'none';

    } else {
        hiddenMessage.style.display = 'block';

    }});