document.getElementById('contact-form1').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var surname = document.getElementById('soyisim').value;
    var address = document.getElementById('adres').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    alert(name + ' ' + surname + '\n' + address + '\n' + email + '\n\n' + message);
  });