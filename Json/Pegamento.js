AFRAME.registerComponent('pegamento', {

    schema: {
      target: {type: 'selector'},
      distancia: {type: 'number', default: 1.0 },
    },

    init: function () {

    },

    tick: function (time, timeDelta) {

      let distancia = this.el.object3D.position.distanceTo(this.data.target.object3D.position);

      if(distancia<=this.data.distancia){

        //console.log("CONTACTE!!!");

        // Canviar color i posició
        this.el.setAttribute('color', 'yellow');
        this.el.object3D.position.x = this.data.target.object3D.position.x;
        this.el.object3D.position.y = this.data.target.object3D.position.y;

        // Eliminar hoverable grabbable stretchable draggable dropppable
        this.el.removeAttribute('hoverable');
        this.el.removeAttribute('grabbable');
        this.el.removeAttribute('stretchable');
        this.el.removeAttribute('draggable');
        this.el.removeAttribute('dropppable');
      }
      //console.log(distancia);
    }

  });
