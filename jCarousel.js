Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    onReady: function() {
        // Crear los items del Carousel
        var carousel1 = new Ext.Carousel({
            defaults: {
                cls: 'card'
            },
            items: [ //Arreglo de items ..
            {
                html: '<h1>Carousel</h1><p>Esto es normal para exponer el comprotamiento de contenido....</p>'
                //html para el contenido 1
            },
            {
                title: 'Contenido del segmento 2',
                html: '<h1>Contenido del segmento 2</h1>'
            },
            {
                title: 'Contenido del segmento 2',
                html: '<h1>Contenido del segmento 3</h1>'
            }
            ]
        });
        
        //Contenido del Panel que incluye los carousel
        new Ext.Panel({
            fullscreen: true,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            defaults: {
                flex: 1
            },
            items: [carousel1]
        });
    }
});