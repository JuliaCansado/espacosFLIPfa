var wms_layers = [];

var lyr_FotoArea_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Foto Aérea",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FotoArea_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4979099.565834, -2659661.668221, -4976765.589774, -2657999.791937]
                            })
                        });
var format_categoria3_1 = new ol.format.GeoJSON();
var features_categoria3_1 = format_categoria3_1.readFeatures(json_categoria3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_categoria3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_categoria3_1.addFeatures(features_categoria3_1);
var lyr_categoria3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_categoria3_1, 
                style: style_categoria3_1,
                interactive: true,
                title: '<img src="styles/legend/categoria3_1.png" /> categoria3'
            });
var format_categoria2_2 = new ol.format.GeoJSON();
var features_categoria2_2 = format_categoria2_2.readFeatures(json_categoria2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_categoria2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_categoria2_2.addFeatures(features_categoria2_2);
var lyr_categoria2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_categoria2_2, 
                style: style_categoria2_2,
                interactive: true,
                title: '<img src="styles/legend/categoria2_2.png" /> categoria2'
            });
var format_categoria1_3 = new ol.format.GeoJSON();
var features_categoria1_3 = format_categoria1_3.readFeatures(json_categoria1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_categoria1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_categoria1_3.addFeatures(features_categoria1_3);
var lyr_categoria1_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_categoria1_3, 
                style: style_categoria1_3,
                interactive: true,
                title: '<img src="styles/legend/categoria1_3.png" /> categoria1'
            });

lyr_FotoArea_0.setVisible(true);lyr_categoria3_1.setVisible(true);lyr_categoria2_2.setVisible(true);lyr_categoria1_3.setVisible(true);
var layersList = [lyr_FotoArea_0,lyr_categoria3_1,lyr_categoria2_2,lyr_categoria1_3];
lyr_categoria3_1.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_categoria2_2.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_categoria1_3.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_categoria3_1.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_categoria2_2.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_categoria1_3.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_categoria3_1.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_categoria2_2.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_categoria1_3.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_categoria1_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});