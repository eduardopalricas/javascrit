<?php
    if(isset($_GET['nome']) and isset($_GET['apelido'])){
        $nome = $_GET['nome']
        $apelido = $_GET['apelido']
        $frase_final = "Seja bemvindo ao servidor, Sr(a). $nome $apelido "
        echo $frasefinal
    }


?>