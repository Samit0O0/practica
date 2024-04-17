<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1>hasta luegoo</h1>
<form action="index.php" method="post">
¿Cuantas veces?
<input type="text" name="number">
<input type="submit" value="Enviar">
</form>
<p>
<?php
/* Mostraremos el uso de la sentencia While y comenzamos a usar entrada
del teclado mediante un formulario simple */
if ( isset( $_POST['number'] )) {
$number = $_POST['number'];
$counter = 1;
while ($counter <= $number) {
echo "<b>$counter</b>.- Los bucles son faciles!<br>\n";
$counter++;
}
echo "Se acabo.\n";
}
?>
</p>
</body>
</html>