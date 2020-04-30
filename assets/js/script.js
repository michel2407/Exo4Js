//la attribu Function permet d'appeler la fonction du html défini
function validate() {
  var lastName = document.getElementById('lastName').value;
  var firstName = document.getElementById('firstName').value;
  var city= document.getElementById('city').value;
  alert('Nom : ' + lastName + '\n' + 'Prénom : ' + firstName + '\n'  + 'Ville : ' + city);
}
