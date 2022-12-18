AFRAME.registerComponent('piezas', {
    schema: {
        info: {type: 'asset'}
    },

    init: function () {
        this.loader = new THREE.FileLoader();

       
    },

    update: function (oldData) {

      

        const data = this.data;
        if (AFRAME.utils.deepEqual(oldData, data)) {
            return;
        }
        if (data.info && data.info !== oldData.info) {
            this.loader.load(data.info, this.onDataLoaded.bind(this));
        }
    },

    onDataLoaded: function (file) {

        let puzzle = JSON.parse(file);
        let imagenes = puzzle[0].piezzas;

        
        let piezas = document.querySelector('#piezas');

        let i = 0;
        let a = 0;
    
        for (let imagen of imagenes) {
            let entity = document.createElement('a-entity');
            entity.setAttribute('geometry', 'primitive:plane');
            entity.setAttribute('position', '5 '+(i+1.27)+' 1');
            entity.setAttribute('rotation', '-90 -90 0');
            entity.setAttribute('scale', '0.5 0.5');
            entity.setAttribute('material', 'src:#'+imagen.id+"; transparent:true; alphaTest:0;");
            entity.setAttribute('hoverable');
            entity.setAttribute('grabbable');
            entity.setAttribute('stretchable');
            entity.setAttribute('draggable');
            entity.setAttribute('dropppable');
            entity.setAttribute('pegamento','target:#final'+a+'; distancia:1');
            piezas.appendChild(entity);
            i = i + 0.005;
            a++;
        };

        document.querySelector('#piezas').flushToDOM(true);

    }
});


/*let pieza = document.createElement('a-entity');
pieza.setAttribute('class', 'pieza');
pieza.setAttribute('geometry','primitive: plane; height: 0.15; width: 0.15;');
pieza.setAttribute( 'material', 'transparent:true; alphaTest:0;')
entity.appendChild(pieza);*/