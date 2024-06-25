function toggleLight() {
    var img = document.getElementById("lightbulb");
    var body = document.body;
  
    if (img.src === "https://cdn-icons-png.flaticon.com/512/32/32299.png") {
      img.src = "https://cdn-icons-png.flaticon.com/512/1884/1884795.png";
      body.classList.remove("light-off");
      body.classList.add("light-on");
    } else {
      img.src = "https://cdn-icons-png.flaticon.com/512/32/32299.png";
      body.classList.remove("light-on");
      body.classList.add("light-off");
    }
  }