var form = document.getElementById('form');

var input1 = document.getElementById('nome');
var input2 = document.getElementById('email');
var input3 = document.getElementById('telefone');
var input4 = document.getElementById('assunto');
var input5 = document.getElementById('mensagem');

var btn = document.getElementById('btn');

var errors = document.getElementsByClassName('error-mg');

function isEmail(str) {
  return (
    typeof str === 'string' &&
    /^[\w+\d+._]+\@[\w+\d+_+]+\.[\w+\d+._]{2,8}$/.test(str)
  );
}

function cleanErrors() {
  !input1.classList.remove('error');
  !input2.classList.remove('error');
  !input3.classList.remove('error');
  !input4.classList.remove('error');
  !input5.classList.remove('error');
  for (var i = 0; i < errors.length; i++) {
    var el = errors[i];
    el.innerHTML = '';
  }
}

function validation() {
  cleanErrors();

  if (!input1.value) {
    input1.classList.add('error');
    errors[0].innerHTML = 'Nome é obrigatório';
  }
  if (!input2.value) {
    input2.classList.add('error');
    errors[1].innerHTML = 'Email é obrigatório';
  } else if (!isEmail(input2.value)) {
    input2.classList.add('error');
    errors[1].innerHTML = 'Email inválido';
  }
  if (!input3.value) {
    input3.classList.add('error');
    errors[2].innerHTML = 'Telefone é obrigatório';
  } else if (input3.value.length <= 13) {
    input3.classList.add('error');
    errors[2].innerHTML = 'Telefone invalido';
  }
  if (!input4.value) {
    input4.classList.add('error');
    errors[3].innerHTML = 'Assunto é obrigatório';
  }
  if (!input5.value) {
    input5.classList.add('error');
    errors[4].innerHTML = 'Mensagem é obrigatório';
  }
}

form.addEventListener('submit', function(e) {
  e.preventDefault();
  validation();
});

var mask = new IMask(input3, { mask: '(00) 00000-0000' });
