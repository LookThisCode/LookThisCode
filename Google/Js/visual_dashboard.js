 function drawVisualization() {
        // Preparando la información (los datos)
        var data = google.visualization.arrayToDataTable([
          ['Nombre', 'Sexo', 'Edad', 'Proyectos'],
          ['Martin' , 'Masculino', 12, 5],
          ['Elisa', 'Femenino', 20, 7],
          ['Roberto', 'Masculino', 7, 3],
          ['Juan', 'Masculino', 54, 2],
          ['Jessica', 'Femenino', 22, 6],
          ['Malena', 'Femenino', 42, 8],
          ['Arturo', 'Masculino', 3, 1],
          ['Mariano', 'Masculino', 33, 6]
        ]);  
        
        // Definir el control por edad 
        var slider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'control1',
          'options': {
            'filterColumnLabel': 'Edad',
          'ui': {'labelStacking': 'vertical'}
          }
        });
      
        // Definir la  categoria por Genero o Sexo 
        var categoryPicker = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'control2',
          'options': {
            'filterColumnLabel': 'Sexo',
            'ui': {
            'labelStacking': 'vertical',
              'allowTyping': false,
              'allowMultiple': false
            }
          }
        });
      
        // Definir el grafico de torta 
        var pie = new google.visualization.ChartWrapper({
          'chartType': 'PieChart', 
          'containerId': 'chart1',
          'options': {
            'width': 300,
            'height': 300,
            'legend': 'none',
            'title': 'Proyectos coordinasdos por persona',
            'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
            'pieSliceText': 'label'
          },
          // Utiliza para el grafico las columnas  0 y 3
          // Datos.
          'view': {'columns': [0, 3]}
        });
      
        // Definir la tabla
        var table = new google.visualization.ChartWrapper({
          'chartType': 'Table',
          'containerId': 'chart2',
          'options': {
            'width': '300px'
          }
        });
      
        // Crear el panel administrativo
        new google.visualization.Dashboard(document.getElementById('dashboard')).
            // Establecer el vínculo (grafico y la tabla)
            bind([slider, categoryPicker], [pie, table]).
            // Dibujar el panel
            draw(data);
      }
