
  var products = {
    // (A) PRODUCTS LIST
    list : {
      1 : { name:"Banana", img:"banana.png", price: 12 },
      2 : { name:"Cherry", img:"cherry.png", price: 23 },
      3 : { name:"Ice Cream", img:"icecream.png", price: 54 },
      4 : { name:"Orange", img:"orange.png", price: 65 },
      5 : { name:"Strawberry", img:"strawberry.png", price: 34 },
      6 : { name:"Watermelon", img:"watermelon.png", price: 67 }
    },

  draw : () => {
      const wrapper = document.getElementById("poslist");

      for (let pid in products.list) {
          let p = products.list[pid],
          pdt = document.createElement("div"),
          segment;

          pdt.className = "pwrap";
          pdt.onclick = () => { createImageBitmap.add(pid); };
          wrapper.appendChild(pdt);

          segment = document.createElement("img");
          segment.className = "pimg";
          segment.src = "images/" + p.img;
          pdt.appendChild(segment);

          segment =  document.createElement("div");
          segment.className = "pname";
          segment.innerHTML = p.name;
          pdt.appendChild(segment);

          segment = document.createElement("div");
          segment.className = "pprice";
          segment.innerHTML = "$" + p.price;
          pdt.appendChild(segment);
      }
  }
};

  window.addEventListener("DOMContentLoaded",products.draw);
  var cart = {
      items : {},

      save : () => {
          localStorage.setItem("cart", JSON.stringify(cart.items));
      },
      load : () => {
          localStorage.getItem("cart")
          if(cart.items == null) {cart.items = {}}
          else{ cart.items = JSON.parse(cart.items);}
      },
      nuke : () => {
          cart.items = {}
          localStorage.removeItem("cart");
          cart.list();
      },
      init : () => {
          cart.load();
          cart.list();
      }
  }
