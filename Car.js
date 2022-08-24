AFRAME.registerComponent("car-model", {
  schema: {
    modelRef: { type: "string", default: "../assets/car/scene.gltf" },
    clickoncar: { type: "number", default: 0 },
  },
  init: function () {
    // Do something when component first attached.
    this.el.setAttribute("gltf-model", this.data.modelRef);
    const position = { x: 0, y: 50, z: 80 };
    const rotation = { x: 0, y: -100, z: 0 };
    this.el.setAttribute("position", position);
    this.el.setAttribute("rotation", rotation);
  },

  update: function () {
    window.addEventListener("click", (e) => {
      this.data.clickoncar = this.data.clickoncar + 1;
      if (this.data.clickoncar === 1) {
        const rotation = { x: 0, y: 20, z: 0 };
        this.el.setAttribute("rotation", rotation);
      } else if (this.data.clickoncar === 2) {
        const rotation = { x: 0, y: 100, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }

      else if (this.data.clickoncar === 3) {
        const rotation = { x: 0, y: -200, z: 0 };
        this.el.setAttribute("rotation", rotation);
      }

      else if (this.data.clickoncar === 4) {
        const rotation = { x: 0, y: -100, z: 0 };
        this.el.setAttribute("rotation", rotation);
        const camera1=document.querySelector("#camera")
        const position={ x: 0, y: 195, z: 450 }
        camera1.setAttribute("position",position)
      }
      else{const rotation = { x: 0, y: -100, z: 0 };
      this.el.setAttribute("rotation", rotation);
      const camera1=document.querySelector("#camera")
      const position={ x: 0, y: 50, z: 250 }
      camera1.setAttribute("position",position)
      this.data.clickoncar=0

      }
    });
  },
});
