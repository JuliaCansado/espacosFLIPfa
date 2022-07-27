var wms_layers = [];


        var lyr_SatliteGoogle_0 = new ol.layer.Tile({
            'title': 'Satélite Google',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_PlantaCadastral_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Planta Cadastral",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PlantaCadastral_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4979062.392337, -2659632.690574, -4976774.054022, -2658020.611463]
                            })
                        });
var lyr_FotoArea_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Foto Aérea",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/FotoArea_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-4979099.565834, -2659661.668221, -4976765.589774, -2657999.791937]
                            })
                        });
var format_categoria3_3 = new ol.format.GeoJSON();
var features_categoria3_3 = format_categoria3_3.readFeatures(json_categoria3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_categoria3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_categoria3_3.addFeatures(features_categoria3_3);
var lyr_categoria3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_categoria3_3, 
                style: style_categoria3_3,
                interactive: true,
                title: '<img src="styles/legend/categoria3_3.png" /> categoria3'
            });
var format_categoria2_4 = new ol.format.GeoJSON();
var features_categoria2_4 = format_categoria2_4.readFeatures(json_categoria2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_categoria2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_categoria2_4.addFeatures(features_categoria2_4);
var lyr_categoria2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_categoria2_4, 
                style: style_categoria2_4,
                interactive: true,
                title: '<img src="styles/legend/categoria2_4.png" /> categoria2'
            });
var format_categoria1_5 = new ol.format.GeoJSON();
var features_categoria1_5 = format_categoria1_5.readFeatures(json_categoria1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_categoria1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_categoria1_5.addFeatures(features_categoria1_5);
var lyr_categoria1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_categoria1_5, 
                style: style_categoria1_5,
                interactive: true,
                title: '<img src="styles/legend/categoria1_5.png" /> categoria1'
            });

lyr_SatliteGoogle_0.setVisible(true);lyr_PlantaCadastral_1.setVisible(true);lyr_FotoArea_2.setVisible(true);lyr_categoria3_3.setVisible(true);lyr_categoria2_4.setVisible(true);lyr_categoria1_5.setVisible(true);
var layersList = [lyr_SatliteGoogle_0,lyr_PlantaCadastral_1,lyr_FotoArea_2,lyr_categoria3_3,lyr_categoria2_4,lyr_categoria1_5];
lyr_categoria3_3.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_categoria2_4.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_categoria1_5.set('fieldAliases', {'Nome': 'Nome', 'Descrição': 'Descrição', });
lyr_categoria3_3.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_categoria2_4.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_categoria1_5.set('fieldImages', {'Nome': 'TextEdit', 'Descrição': 'TextEdit', });
lyr_categoria3_3.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_categoria2_4.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_categoria1_5.set('fieldLabels', {'Nome': 'header label', 'Descrição': 'header label', });
lyr_categoria1_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});