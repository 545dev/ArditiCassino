
<?php

//Script Written by Stefano D.C

$files = glob("images/slider/*.*");

for ($i = 1; $i < count($files); $i++)
{
    $num = $files[$i];
    echo '<img src="' . $num . '" alt="image">';
}

?>

