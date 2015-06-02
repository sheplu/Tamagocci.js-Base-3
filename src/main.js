require(["tamagocci"], function () {

    var tamagocciDiv = document.getElementById("tamagocci");
    var eatButton = document.getElementById("eat-button");
    var playButton = document.getElementById("play-button");

    var tamagocci = new HelloKitty();
    tamagocci.ondie = function () {
        stopTheGame();
    }

    update();

    eatButton.onclick = function () {
        tamagocci.eat();
        update();
    }

    playButton.onclick = function () {
        tamagocci.play();
        update();
    }

    var intervalID = setInterval(function () {
        tamagocci.becomeOlder();
        update();
    }, 5000);

    function displayOrRefreshTamagocciPicture() {
        var tamagocciPicture = document.getElementById("picture");
        tamagocciPicture.setAttribute("src", tamagocci.getPicture());
    }

    function displayOrRefreshTamagocciInfo() {
        document.getElementById("age").innerHTML = tamagocci.age;
        document.getElementById("minWeight").innerHTML = tamagocci.minWeight;
        document.getElementById("weight").innerHTML = tamagocci.weight;
        document.getElementById("maxWeight").innerHTML = tamagocci.maxWeight;
        document.getElementById("happiness").innerHTML = tamagocci.happiness;
    }

    function update() {
        displayOrRefreshTamagocciInfo();
        displayOrRefreshTamagocciPicture();
    }

    function stopTheGame() {
        eatButton.onclick = null;
        playButton.onclick = null;
        clearInterval(intervalID);
    }

});
