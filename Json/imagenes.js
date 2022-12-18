AFRAME.registerComponent('imagenes', {
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

        let assets = document.querySelector('a-assets');

        for (let imagen of imagenes) {
            let entity = document.createElement('img');
            entity.setAttribute('id', imagen.id);
            //entity.setAttribute('class', 'imagen');
            entity.setAttribute('src', imagen.file);
            assets.appendChild(entity);
        };

    }
});