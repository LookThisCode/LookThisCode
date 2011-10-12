var App = new Ext.Application({
    name : 'NickNotas',
    useLoadMask : true,
    
    launch : function () 
    {
        
        this.viewport = new Ext.Panel({
        fullscreen: true,
        html:'Prueba HTML'	        
        });
    }
});
