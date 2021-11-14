function start() {
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models.json',modelReady);
    }
    function modelReady(){
        classifier.classify(gotResults);
    }
    function gotResults(error, results){
    if (error) {
        console.error(error);
    } else {
    console.log(results);
    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;
    document.getElementById("object").innerHTML = 'I can hear -' + results[0].label;
    document.getElementById("accuracy").innerHTML = 'Accuracy -' + (results[0].confidence*100).tofixed(2);
    document.getElementById("object").style.color = "rgb("+ random_number_r + "," + random_number_g + "," + random_number_b + ")" ;
    img = document.getElementById ('alien-1');
    img1 = document.getElementById ('alien-2');
    img2 = document.getElementById ('alien-3');
    img3 = document.getElementById ('alien-4');
    
    if (results[0].label == "dog"){
    img.src = 'a-dog-smiling.jpg'
    img1.src = 'smiling cat.jpg'
    }
    else if(results[1].label == "cat"){
        img.src = 'a-dog-smiling.jpg'
        img1.src = 'smiling cat.jpg'
          
    }
  