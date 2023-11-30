var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_shptuplahaeseaacopy_1 = new ol.format.GeoJSON();
var features_shptuplahaeseaacopy_1 = format_shptuplahaeseaacopy_1.readFeatures(json_shptuplahaeseaacopy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_shptuplahaeseaacopy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_shptuplahaeseaacopy_1.addFeatures(features_shptuplahaeseaacopy_1);
var lyr_shptuplahaeseaacopy_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_shptuplahaeseaacopy_1, 
                style: style_shptuplahaeseaacopy_1,
                interactive: true,
    title: 'shp tuplah aeseaa copy<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_0.png" /> Air<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_1.png" /> Hutan Tanaman<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_2.png" /> Perkebunan Sayur<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_3.png" /> Crops<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_4.png" /> Permukiman<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_5.png" /> Tanah Tandus<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_6.png" /> 10<br />\
    <img src="styles/legend/shptuplahaeseaacopy_1_7.png" /> 11<br />'
        });
var format_countour_2 = new ol.format.GeoJSON();
var features_countour_2 = format_countour_2.readFeatures(json_countour_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_countour_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_countour_2.addFeatures(features_countour_2);
var lyr_countour_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_countour_2, 
                style: style_countour_2,
                interactive: true,
                title: '<img src="styles/legend/countour_2.png" /> countour '
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_shptuplahaeseaacopy_1.setVisible(true);lyr_countour_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_shptuplahaeseaacopy_1,lyr_countour_2];
lyr_shptuplahaeseaacopy_1.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_countour_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_shptuplahaeseaacopy_1.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', });
lyr_countour_2.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'ELEV': 'TextEdit', });
lyr_shptuplahaeseaacopy_1.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_countour_2.set('fieldLabels', {'fid': 'inline label', 'ID': 'inline label', 'ELEV': 'inline label', });
lyr_countour_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});