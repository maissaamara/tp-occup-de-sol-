var wms_layers = [];

var format_ghanouchshp_0 = new ol.format.GeoJSON();
var features_ghanouchshp_0 = format_ghanouchshp_0.readFeatures(json_ghanouchshp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ghanouchshp_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ghanouchshp_0.addFeatures(features_ghanouchshp_0);
var lyr_ghanouchshp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ghanouchshp_0, 
                style: style_ghanouchshp_0,
                interactive: true,
    title: 'ghanouchshp<br />\
    <img src="styles/legend/ghanouchshp_0_0.png" /> <br />\
    <img src="styles/legend/ghanouchshp_0_1.png" /> mer [Red] 3106 points<br />\
    <img src="styles/legend/ghanouchshp_0_2.png" /> oasis [Yellow] 272 points<br />\
    <img src="styles/legend/ghanouchshp_0_3.png" /> sable [Blue] 79 points<br />\
    <img src="styles/legend/ghanouchshp_0_4.png" /> tn [Maroon] 1687 points<br />\
    <img src="styles/legend/ghanouchshp_0_5.png" /> ZA [Magenta] 551 points<br />\
    <img src="styles/legend/ghanouchshp_0_6.png" /> zc [Green] 915 points<br />\
    <img src="styles/legend/ghanouchshp_0_7.png" /> zu [Cyan] 332 points<br />'
        });

lyr_ghanouchshp_0.setVisible(true);
var layersList = [lyr_ghanouchshp_0];
lyr_ghanouchshp_0.set('fieldAliases', {'Class_Name': 'Class_Name', 'Class_Id': 'Class_Id', 'Parts': 'Parts', 'Length': 'Length', 'Area': 'Area', });
lyr_ghanouchshp_0.set('fieldImages', {'Class_Name': 'TextEdit', 'Class_Id': 'Range', 'Parts': 'Range', 'Length': 'TextEdit', 'Area': 'TextEdit', });
lyr_ghanouchshp_0.set('fieldLabels', {'Class_Name': 'no label', 'Class_Id': 'no label', 'Parts': 'no label', 'Length': 'no label', 'Area': 'no label', });
lyr_ghanouchshp_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});