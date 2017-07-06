if ($('#order').length) {
    var formMail = new MyForm($('#order'), '/send-form.php');
    formMail.init();
}
console.log("edffe")