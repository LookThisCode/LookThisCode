var App = new Ext.Application({
    name: 'NickEditor',
    useLoadMask: true,
    launch: function () {
        
        //Registro del modelo de datos.
        Ext.regModel('Nota', {
            idProperty: 'id',
            fields: [
                { name: 'id', type: 'int' },
                { name: 'fecha', type: 'date', dateFormat: 'c' },
                { name: 'nombre', type: 'string' },
                { name: 'descripcion', type: 'string' }
            ],
            validations: [
                { type: 'presence', field: 'id' },
                { type: 'presence', field: 'nombre' }
            ]
        });

        //Datos concretos del modelo
        Ext.regStore('DatosNota', {
            model: 'Nota',
            sorters: [{
                property: 'fecha',
                direction: 'DESC'
            }],
            proxy: {
                type: 'localstorage',
                id: 'notes-app-localstore'
            },
            
            data: [
                { id: 1, fecha: new Date(), nombre: 'Test Note 1 ', descripcion: 'solo es una demostración' },
                { id: 2, fecha: new Date(), nombre: 'Test Note 2', descripcion: 'esta es una descripcion' },
                { id: 3, fecha: new Date(), nombre: 'Test Note 3', descripcion: 'nada' }
            ]
        });
        
        //Lista de notas concreta
         this.listaNotas = new Ext.List({
            id: 'listaNotas',
            store: 'DatosNota',
            itemTpl: '<div class="list-item-title">{nombre}</div>' + '<div class="list-item-narrative">{descripcion}</div>',
            onItemDisclosure: function (record) {
                // TODO: Visualizar la nota en el editor
            }
        });
        
        
        //Barra de herramientas u operaciones
        this.barraNotas = new Ext.Toolbar({
            id: 'barraNotas',
            title: 'Nick Notas',
            layout: 'hbox',
            items: [
                { xtype: 'spacer' },
                {
                    id: 'nuevaNota',
                    text: 'Nueva',
                    ui: 'action',
                    handler: function () {
                        
                    }
                }
            ]
        });

        this.contenedorNotas = new Ext.Panel({
            id: 'contenedorNotas',
            layout: 'fit',
            html: 'Este es el contenedor de las notas',
            dockedItems: [this.barraNotas],
            items: [this.listaNotas]
        });

        this.viewport = new Ext.Panel({
            fullscreen: true,
            layout: 'card',
            cardAnimation: 'slide',
            items: [this.contenedorNotas]
        });
    }
});








