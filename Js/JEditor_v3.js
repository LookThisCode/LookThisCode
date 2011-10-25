var App = new Ext.Application({
    name: 'NickEditor',
    useLoadMask: true,
    launch: function () {

        this.barraNotas = new Ext.Toolbar({
            id: 'barraNotas',
            title: 'Nick Notas'
        });

        this.contenedorNotas = new Ext.Panel({
            id: 'contenedorNotas',
            layout: 'fit',
            html: 'Este es el contenedor de las notas',
            dockedItems: [this.barraNotas]
        });

        this.viewport = new Ext.Panel({
            fullscreen: true,
            layout: 'card',
            cardAnimation: 'slide',
            items: [this.contenedorNotas]
        });
    }
});
