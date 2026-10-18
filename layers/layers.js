ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32749").setExtent([676013.484111, 9187369.928652, 702859.074177, 9204485.537177]);
var wms_layers = [];


        var lyr_MapboxSatelite_0 = new ol.layer.Tile({
            'title': 'Mapbox Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.webp?sku=101ifSAcKcVFs&access_token=pk.eyJ1IjoidW5mb2xkZWRpbmMiLCJhIjoiY2s5ZG90MjMzMDV6eDNkbnh2cDJvbHl4NyJ9.BT2LAvHi31vNNEplsgxucQ'
            })
        });

        var lyr_ESRIWorldTopo_1 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_KELURAHANMANYARSABRANGAN_2 = new ol.format.GeoJSON();
var features_KELURAHANMANYARSABRANGAN_2 = format_KELURAHANMANYARSABRANGAN_2.readFeatures(json_KELURAHANMANYARSABRANGAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KELURAHANMANYARSABRANGAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHANMANYARSABRANGAN_2.addFeatures(features_KELURAHANMANYARSABRANGAN_2);
var lyr_KELURAHANMANYARSABRANGAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHANMANYARSABRANGAN_2, 
                style: style_KELURAHANMANYARSABRANGAN_2,
                popuplayertitle: 'KELURAHAN MANYAR SABRANGAN',
                interactive: true,
    title: 'KELURAHAN MANYAR SABRANGAN<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_0.png" /> RW 1<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_1.png" /> RW 2<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_2.png" /> RW 3<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_3.png" /> RW 4<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_4.png" /> RW 5<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_5.png" /> RW 6<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_6.png" /> RW 7<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_7.png" /> RW 8<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_8.png" /> RW 9<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_9.png" /> RW 10<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_10.png" /> RW 12<br />\
    <img src="styles/legend/KELURAHANMANYARSABRANGAN_2_11.png" /> RW 11<br />' });
var format_DAERAHRAWANGENANGAN_3 = new ol.format.GeoJSON();
var features_DAERAHRAWANGENANGAN_3 = format_DAERAHRAWANGENANGAN_3.readFeatures(json_DAERAHRAWANGENANGAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DAERAHRAWANGENANGAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DAERAHRAWANGENANGAN_3.addFeatures(features_DAERAHRAWANGENANGAN_3);
var lyr_DAERAHRAWANGENANGAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DAERAHRAWANGENANGAN_3, 
                style: style_DAERAHRAWANGENANGAN_3,
                popuplayertitle: 'DAERAH RAWAN GENANGAN',
                interactive: true,
                title: '<img src="styles/legend/DAERAHRAWANGENANGAN_3.png" /> DAERAH RAWAN GENANGAN'
            });
var format_DRAINASE_4 = new ol.format.GeoJSON();
var features_DRAINASE_4 = format_DRAINASE_4.readFeatures(json_DRAINASE_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DRAINASE_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINASE_4.addFeatures(features_DRAINASE_4);
var lyr_DRAINASE_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINASE_4, 
                style: style_DRAINASE_4,
                popuplayertitle: 'DRAINASE',
                interactive: true,
                title: '<img src="styles/legend/DRAINASE_4.png" /> DRAINASE'
            });
var format_DRAINASE_RDTR_5 = new ol.format.GeoJSON();
var features_DRAINASE_RDTR_5 = format_DRAINASE_RDTR_5.readFeatures(json_DRAINASE_RDTR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_DRAINASE_RDTR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINASE_RDTR_5.addFeatures(features_DRAINASE_RDTR_5);
var lyr_DRAINASE_RDTR_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINASE_RDTR_5, 
                style: style_DRAINASE_RDTR_5,
                popuplayertitle: 'DRAINASE_RDTR',
                interactive: true,
    title: 'DRAINASE_RDTR<br />\
    <img src="styles/legend/DRAINASE_RDTR_5_0.png" /> 1-Peningkatan Saluran Primer<br />\
    <img src="styles/legend/DRAINASE_RDTR_5_1.png" /> 1-Peningkatan Saluran Sekunder<br />\
    <img src="styles/legend/DRAINASE_RDTR_5_2.png" /> Saluran Primer<br />\
    <img src="styles/legend/DRAINASE_RDTR_5_3.png" /> Saluran Sekunder<br />' });
var format_JaringanDrainase_6 = new ol.format.GeoJSON();
var features_JaringanDrainase_6 = format_JaringanDrainase_6.readFeatures(json_JaringanDrainase_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JaringanDrainase_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanDrainase_6.addFeatures(features_JaringanDrainase_6);
var lyr_JaringanDrainase_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanDrainase_6, 
                style: style_JaringanDrainase_6,
                popuplayertitle: 'Jaringan Drainase',
                interactive: true,
    title: 'Jaringan Drainase<br />\
    <img src="styles/legend/JaringanDrainase_6_0.png" /> 1-Peningkatan Saluran Primer<br />\
    <img src="styles/legend/JaringanDrainase_6_1.png" /> 1-Peningkatan Saluran Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_6_2.png" /> Saluran Primer<br />\
    <img src="styles/legend/JaringanDrainase_6_3.png" /> Saluran Sekunder<br />\
    <img src="styles/legend/JaringanDrainase_6_4.png" /> Saluran Tersier<br />' });
var format_JARINGANJALAN_7 = new ol.format.GeoJSON();
var features_JARINGANJALAN_7 = format_JARINGANJALAN_7.readFeatures(json_JARINGANJALAN_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JARINGANJALAN_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JARINGANJALAN_7.addFeatures(features_JARINGANJALAN_7);
var lyr_JARINGANJALAN_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JARINGANJALAN_7, 
                style: style_JARINGANJALAN_7,
                popuplayertitle: 'JARINGAN JALAN',
                interactive: true,
                title: '<img src="styles/legend/JARINGANJALAN_7.png" /> JARINGAN JALAN'
            });
var format_JANGKAUANTITIKRAWANGENANGAN_8 = new ol.format.GeoJSON();
var features_JANGKAUANTITIKRAWANGENANGAN_8 = format_JANGKAUANTITIKRAWANGENANGAN_8.readFeatures(json_JANGKAUANTITIKRAWANGENANGAN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JANGKAUANTITIKRAWANGENANGAN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTITIKRAWANGENANGAN_8.addFeatures(features_JANGKAUANTITIKRAWANGENANGAN_8);
var lyr_JANGKAUANTITIKRAWANGENANGAN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUANTITIKRAWANGENANGAN_8, 
                style: style_JANGKAUANTITIKRAWANGENANGAN_8,
                popuplayertitle: 'JANGKAUAN TITIK RAWAN GENANGAN',
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTITIKRAWANGENANGAN_8.png" /> JANGKAUAN TITIK RAWAN GENANGAN'
            });
var format_JANGKAUANTITIKDRAINASEBERMASALAH_9 = new ol.format.GeoJSON();
var features_JANGKAUANTITIKDRAINASEBERMASALAH_9 = format_JANGKAUANTITIKDRAINASEBERMASALAH_9.readFeatures(json_JANGKAUANTITIKDRAINASEBERMASALAH_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_JANGKAUANTITIKDRAINASEBERMASALAH_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JANGKAUANTITIKDRAINASEBERMASALAH_9.addFeatures(features_JANGKAUANTITIKDRAINASEBERMASALAH_9);
var lyr_JANGKAUANTITIKDRAINASEBERMASALAH_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JANGKAUANTITIKDRAINASEBERMASALAH_9, 
                style: style_JANGKAUANTITIKDRAINASEBERMASALAH_9,
                popuplayertitle: 'JANGKAUAN TITIK DRAINASE BERMASALAH',
                interactive: true,
                title: '<img src="styles/legend/JANGKAUANTITIKDRAINASEBERMASALAH_9.png" /> JANGKAUAN TITIK DRAINASE BERMASALAH'
            });
var format_TITIKRAWANGENANGAN_10 = new ol.format.GeoJSON();
var features_TITIKRAWANGENANGAN_10 = format_TITIKRAWANGENANGAN_10.readFeatures(json_TITIKRAWANGENANGAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TITIKRAWANGENANGAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKRAWANGENANGAN_10.addFeatures(features_TITIKRAWANGENANGAN_10);
var lyr_TITIKRAWANGENANGAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKRAWANGENANGAN_10, 
                style: style_TITIKRAWANGENANGAN_10,
                popuplayertitle: 'TITIK RAWAN GENANGAN',
                interactive: true,
                title: '<img src="styles/legend/TITIKRAWANGENANGAN_10.png" /> TITIK RAWAN GENANGAN'
            });
var format_TITIKDRAINASEBERMASALAH_11 = new ol.format.GeoJSON();
var features_TITIKDRAINASEBERMASALAH_11 = format_TITIKDRAINASEBERMASALAH_11.readFeatures(json_TITIKDRAINASEBERMASALAH_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_TITIKDRAINASEBERMASALAH_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKDRAINASEBERMASALAH_11.addFeatures(features_TITIKDRAINASEBERMASALAH_11);
var lyr_TITIKDRAINASEBERMASALAH_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKDRAINASEBERMASALAH_11, 
                style: style_TITIKDRAINASEBERMASALAH_11,
                popuplayertitle: 'TITIK DRAINASE BERMASALAH',
                interactive: true,
                title: '<img src="styles/legend/TITIKDRAINASEBERMASALAH_11.png" /> TITIK DRAINASE BERMASALAH'
            });
var format_KANTORKELURAHAN_12 = new ol.format.GeoJSON();
var features_KANTORKELURAHAN_12 = format_KANTORKELURAHAN_12.readFeatures(json_KANTORKELURAHAN_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32749'});
var jsonSource_KANTORKELURAHAN_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KANTORKELURAHAN_12.addFeatures(features_KANTORKELURAHAN_12);
var lyr_KANTORKELURAHAN_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KANTORKELURAHAN_12, 
                style: style_KANTORKELURAHAN_12,
                popuplayertitle: 'KANTOR KELURAHAN',
                interactive: true,
                title: '<img src="styles/legend/KANTORKELURAHAN_12.png" /> KANTOR KELURAHAN'
            });

lyr_MapboxSatelite_0.setVisible(true);lyr_ESRIWorldTopo_1.setVisible(true);lyr_KELURAHANMANYARSABRANGAN_2.setVisible(true);lyr_DAERAHRAWANGENANGAN_3.setVisible(true);lyr_DRAINASE_4.setVisible(true);lyr_DRAINASE_RDTR_5.setVisible(true);lyr_JaringanDrainase_6.setVisible(true);lyr_JARINGANJALAN_7.setVisible(true);lyr_JANGKAUANTITIKRAWANGENANGAN_8.setVisible(true);lyr_JANGKAUANTITIKDRAINASEBERMASALAH_9.setVisible(true);lyr_TITIKRAWANGENANGAN_10.setVisible(true);lyr_TITIKDRAINASEBERMASALAH_11.setVisible(true);lyr_KANTORKELURAHAN_12.setVisible(true);
var layersList = [lyr_MapboxSatelite_0,lyr_ESRIWorldTopo_1,lyr_KELURAHANMANYARSABRANGAN_2,lyr_DAERAHRAWANGENANGAN_3,lyr_DRAINASE_4,lyr_DRAINASE_RDTR_5,lyr_JaringanDrainase_6,lyr_JARINGANJALAN_7,lyr_JANGKAUANTITIKRAWANGENANGAN_8,lyr_JANGKAUANTITIKDRAINASEBERMASALAH_9,lyr_TITIKRAWANGENANGAN_10,lyr_TITIKDRAINASEBERMASALAH_11,lyr_KANTORKELURAHAN_12];
lyr_KELURAHANMANYARSABRANGAN_2.set('fieldAliases', {'FID_Batas_': 'FID_Batas_', 'WADMKD': 'WADMKD', 'UP': 'UP', 'RW': 'RW', });
lyr_DAERAHRAWANGENANGAN_3.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', });
lyr_DRAINASE_4.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_DRAINASE_RDTR_5.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_JaringanDrainase_6.set('fieldAliases', {'FID_Rencan': 'FID_Rencan', 'FID_': 'FID_', 'Layer': 'Layer', 'FID_Batas_': 'FID_Batas_', 'UP': 'UP', 'Luas_Ha': 'Luas_Ha', });
lyr_JARINGANJALAN_7.set('fieldAliases', {'Status': 'Status', 'Nama': 'Nama', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Panjang': 'Panjang', 'UP': 'UP', });
lyr_JANGKAUANTITIKRAWANGENANGAN_8.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'layer': 'layer', 'path': 'path', });
lyr_JANGKAUANTITIKDRAINASEBERMASALAH_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Radius': 'Radius', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TITIKRAWANGENANGAN_10.set('fieldAliases', {'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Foto': 'Foto', 'DIAGRAM GA': 'DIAGRAM GA', 'ALAMAT': 'ALAMAT', });
lyr_TITIKDRAINASEBERMASALAH_11.set('fieldAliases', {'Id': 'Id', 'NamaJalan': 'NamaJalan', 'RW': 'RW', 'Radius': 'Radius', 'FOTO': 'FOTO', 'ALAMAT': 'ALAMAT', 'DIAGRAM': 'DIAGRAM', });
lyr_KANTORKELURAHAN_12.set('fieldAliases', {'Id': 'Id', 'KETERANGAN': 'KETERANGAN', 'FOTO': 'FOTO', });
lyr_KELURAHANMANYARSABRANGAN_2.set('fieldImages', {'FID_Batas_': 'Range', 'WADMKD': 'TextEdit', 'UP': 'TextEdit', 'RW': 'TextEdit', });
lyr_DAERAHRAWANGENANGAN_3.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', });
lyr_DRAINASE_4.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_DRAINASE_RDTR_5.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JaringanDrainase_6.set('fieldImages', {'FID_Rencan': 'Range', 'FID_': 'Range', 'Layer': 'TextEdit', 'FID_Batas_': 'Range', 'UP': 'TextEdit', 'Luas_Ha': 'TextEdit', });
lyr_JARINGANJALAN_7.set('fieldImages', {'Status': 'TextEdit', 'Nama': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Panjang': 'TextEdit', 'UP': 'TextEdit', });
lyr_JANGKAUANTITIKRAWANGENANGAN_8.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_JANGKAUANTITIKDRAINASEBERMASALAH_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Radius': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_TITIKRAWANGENANGAN_10.set('fieldImages', {'Id': 'Range', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Foto': 'ExternalResource', 'DIAGRAM GA': 'ExternalResource', 'ALAMAT': 'TextEdit', });
lyr_TITIKDRAINASEBERMASALAH_11.set('fieldImages', {'Id': 'Range', 'NamaJalan': 'TextEdit', 'RW': 'TextEdit', 'Radius': 'TextEdit', 'FOTO': 'ExternalResource', 'ALAMAT': 'TextEdit', 'DIAGRAM': 'ExternalResource', });
lyr_KANTORKELURAHAN_12.set('fieldImages', {'Id': 'Range', 'KETERANGAN': 'TextEdit', 'FOTO': 'ExternalResource', });
lyr_KELURAHANMANYARSABRANGAN_2.set('fieldLabels', {'FID_Batas_': 'hidden field', 'WADMKD': 'hidden field', 'UP': 'inline label - always visible', 'RW': 'inline label - always visible', });
lyr_DAERAHRAWANGENANGAN_3.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'hidden field', });
lyr_DRAINASE_4.set('fieldLabels', {'FID_Rencan': 'no label', 'FID_': 'no label', 'Layer': 'no label', 'FID_Batas_': 'no label', 'UP': 'no label', 'Luas_Ha': 'no label', });
lyr_DRAINASE_RDTR_5.set('fieldLabels', {'FID_Rencan': 'no label', 'FID_': 'no label', 'Layer': 'inline label - always visible', 'FID_Batas_': 'no label', 'UP': 'no label', 'Luas_Ha': 'no label', });
lyr_JaringanDrainase_6.set('fieldLabels', {'FID_Rencan': 'hidden field', 'FID_': 'hidden field', 'Layer': 'inline label - always visible', 'FID_Batas_': 'hidden field', 'UP': 'hidden field', 'Luas_Ha': 'hidden field', });
lyr_JARINGANJALAN_7.set('fieldLabels', {'Status': 'inline label - always visible', 'Nama': 'hidden field', 'Keterangan': 'hidden field', 'Sumber': 'hidden field', 'Panjang': 'hidden field', 'UP': 'hidden field', });
lyr_JANGKAUANTITIKRAWANGENANGAN_8.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_JANGKAUANTITIKDRAINASEBERMASALAH_9.set('fieldLabels', {'OBJECTID': 'hidden field', 'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'hidden field', 'Radius': 'inline label - always visible', 'BUFF_DIST': 'hidden field', 'ORIG_FID': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_TITIKRAWANGENANGAN_10.set('fieldLabels', {'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'Foto': 'inline label - always visible', 'DIAGRAM GA': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', });
lyr_TITIKDRAINASEBERMASALAH_11.set('fieldLabels', {'Id': 'hidden field', 'NamaJalan': 'hidden field', 'RW': 'inline label - always visible', 'Radius': 'inline label - always visible', 'FOTO': 'inline label - always visible', 'ALAMAT': 'inline label - always visible', 'DIAGRAM': 'inline label - always visible', });
lyr_KANTORKELURAHAN_12.set('fieldLabels', {'Id': 'hidden field', 'KETERANGAN': 'inline label - always visible', 'FOTO': 'inline label - always visible', });
lyr_KANTORKELURAHAN_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});