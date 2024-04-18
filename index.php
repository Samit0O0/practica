<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h1><center>Ejercicios practicos de PHP</center></h1>

<hr>
<h2>Ejercicio 1</h2>
<h3>Introduccion a los arrays, metodo corto </h3>

<p> A continuacion escribiremos los arrays de acuerdo al metodo corto </p>

<p>codigo: </p>
<p>$dia =array('domingo','lunes','martes','miercoles','jueves','viernes','sabado'); <br>

echo $dia[0]</p>

<p>resultado: </p>
 <?php 

$dia =array('domingo','lunes','martes','miercoles','jueves','viernes','sabado');

echo $dia[1]

?>


<hr>

<h2>Ejercicio 2</h2>
<h3>Ejemplo de operaciones aritmeticas en PHP </h3>
<p>codigo: </p>
<p>
    
$a=5;
$b=3;
</br></br>

echo $a + $b,  "< /br>";</br>
echo $a - $b,  "< /br>";</br>
echo $a * $b,  "< /br>";</br>
echo $a / $b,  "< /br>";</br>


</p>

<p>resultado: </p>

<?php 

$a=5;
$b=3;


echo $a + $b, "</br>";
echo $a - $b ,"</br>";
echo $a * $b,"</br>";
echo $a / $b,"</br>";


?>

<hr>
<h2>Ejercicio 3</h2>
<h3>Ejemplo de operaciones comparacion en PHP </h3>
<p>codigo: </p>
<p>
nota: cuando una condicion se cumple sale 1 y sy no se cumple no da ningun resultado </br></br>
$a=8;
$b=3;
$c=3;
</br></br>

echo $a == $b ,"< /br>";</br>
echo $a != $b ,"< /br>";</br>
echo $a < $b  ,"< /br>";</br>
echo $a > $b  ,"< /br>";</br>
echo $a <= $c ,"< /br>";</br>
echo $a>= $c  ,"< /br>";</br>

</p>
    
<p>resultado: </p>

<?php 

$a=8;
$b=3;
$c=3;


echo $a == $b,"</br>";
echo $a != $b,"</br>";
echo $a < $b ,"</br>";
echo $a > $b,"</br>";
echo $a <= $c ,"</br>";
echo $a>= $c ,"</br>";

?>




<hr>
<h2>Ejercicio 4</h2>
<h3>Ejemplo de operaciones logicas en PHP </h3>
<p>codigo: </p>
<p>

$a=8;
$b=3;
$c=3;
</br></br>
echo ($a==$b)&&($c >$b), "< /br>";</br>
echo ($a==$b) || ($b ==$c), "< /br>";</br>
echo !( $b<= $c), "< /br>";</br>


</p>
<p>resultado: </p>

<?php 
$a=8;
$b=3;
$c=3;

echo ($a==$b)&&($c >$b), "</br>";
echo ($a==$b) || ($b ==$c), "</br>";
echo !( $b<= $c), "</br>";



?>


<hr>
<h2>Ejercicio 5</h2>
<h3>Condicional IF</h3>
<p>codigo: </p>
<p>


$a=5;
$b=3;

echo "el valor de a es " ,$a, ", el valor de b es ", $b , "</br></br>";

if($a<$b){
echo "a es menor que b","</br></br>";

} else {

    echo "a es mayor que b","</br></br>";
};



$dia=date("d") ;

echo  "el dia de hoy es ", $dia,"</br>";


if ($dia <10){

    echo "sitio activo","</br></br>";
}else{
    echo 'sitio inactivo',"</br></br>";
}

</p>

<?php 

$a=5;
$b=3;

echo "el valor de a es " ,$a, ", el valor de b es ", $b , "</br></br>";

if($a<$b){
echo "a es menor que b","</br></br>";

} else {

    echo "a es mayor que b","</br></br>";
};



$dia=date("d") ;

echo  "el dia de hoy es ", $dia,"</br>";


if ($dia <10){

    echo "sitio activo","</br></br>";
}else{
    echo 'sitio inactivo',"</br></br>";
}
?>





<hr>
<h2>PRACTICA 1</h2>
<h3>ejercicio 1</h3>
<p>
Sabiendo que la funcion RAND nos retorna un valor aleatorio entre un rango de dos enteros:</br></br>
$num = rand(1,100);</br></br>
En la variable $num se almacena un valor entero que la computadora genera en forma aleatoria entre
1 y 100. </br>Hacer un programa que lo muestre por pantalla al valor generado.</br> Mostrar ademas si es
menor o igual a 50 o si es mayor. Para imprimir el contenido de una variable tambien utilizamos el
comando ECHO    
</p>
<p>
resultado
</p>

<?php 

$num = rand (1,100);

echo "valor generado $num</br>";

if($num < 50){
   

    echo "es menor a 50 </br>";
}else{
    echo "es mayor a 50";
};
?>

<h3>ejercicio 2</h3>

<p>

Definir una variable de cada ipo: integer, double, string y boolean. Luego imprimirlas en la pagina, una
por linea.

</p>
   
<?php
$string="string";
$entero= 5;
$boll1=true;
$boll2=false;


echo $string , $entero , $boll1 , $boll2
?>



<h3>ejercicio 3</h3>

<p>
Generar un valor aleatorio entre 1 y 5. Luego imprimir en castellano el numero (Ej. Si se genera el 3
lugo mostrar en la pagina el string “tres”).</br> Para ver si una variable es igual a cierto valor debemos
plantear una condicion similar a:</br>
If ($valor==3)</br>
{</br>
//algorimo</br>
}</br>
</p>

<?php 

$random= rand (1,5);


echo "el numero es " , $random,"</br>";
if($random == 1 ){

    echo "el numero es UNO";
}else if($random== 2){

    echo "el numero es DOS";
}else if ($random== 3) {
    echo "el numero es TRES";
}else if ($random== 4) {
    echo "el numero es CUATRO";
}else if($random== 5){

    echo "el numero es CINCO";
};




?>





</body>
</html>