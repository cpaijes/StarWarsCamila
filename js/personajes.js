$(function(){

    //Darth Vader
    $("#imagenDarth").mouseenter(function(){
            var imagenColorDarth="./Imágenes/darthvader.JPG";
            $("#imagenDarth").attr("src", imagenColorDarth);

    });

    $("#imagenDarth").mouseleave(function(){

        var imagenBYNDarth="./Imágenes/darthvaderbyn.JPG";
            $("#imagenDarth").attr("src", imagenBYNDarth);
    });

    //Luke

    $("#imagenLuke").mouseenter(function(){
        var imagenColorLuke="./Imágenes/luke.JPG";
        $("#imagenLuke").attr("src", imagenColorLuke);

    });

    $("#imagenLuke").mouseleave(function(){

        var imagenBYNLuke="./Imágenes/lukebyn.JPG";
            $("#imagenLuke").attr("src", imagenBYNLuke);
    });

    //Yoda

    $("#imagenYoda").mouseenter(function(){
        var imagenColorYoda="./Imágenes/yoda.jpeg";
        $("#imagenYoda").attr("src", imagenColorYoda);

    });

    $("#imagenYoda").mouseleave(function(){

        var imagenBYNYoda="./Imágenes/yodabyn.jpeg";
            $("#imagenYoda").attr("src", imagenBYNYoda);
    });
    //Leia

    $("#imagenLeia").mouseenter(function(){
        var imagenColorLeia="./Imágenes/leia.JPG";
        $("#imagenLeia").attr("src", imagenColorLeia);

    });

    $("#imagenLeia").mouseleave(function(){

        var imagenBYNLeia="./Imágenes/leiabyn.JPG";
            $("#imagenLeia").attr("src", imagenBYNLeia);
    });
});