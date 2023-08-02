var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KAWASANHUTANLHK2019_1 = new ol.format.GeoJSON();
var features_KAWASANHUTANLHK2019_1 = format_KAWASANHUTANLHK2019_1.readFeatures(json_KAWASANHUTANLHK2019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KAWASANHUTANLHK2019_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KAWASANHUTANLHK2019_1.addFeatures(features_KAWASANHUTANLHK2019_1);
var lyr_KAWASANHUTANLHK2019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KAWASANHUTANLHK2019_1, 
                style: style_KAWASANHUTANLHK2019_1,
                interactive: true,
    title: 'KAWASAN HUTAN (LHK 2019)<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_0.png" /> Areal Penggunaan Lain<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_1.png" /> Cagar Alam<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_2.png" /> Hutan Lindung<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_3.png" /> Hutan Produksi<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_4.png" /> Hutan Produksi Konversi<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_5.png" /> Hutan Produksi Terbatas<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_6.png" /> Hutan Suaka Alam<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_7.png" /> Laut - Air<br />\
    <img src="styles/legend/KAWASANHUTANLHK2019_1_8.png" /> Suaka Margastwa<br />'
        });
var format_LBS2019TIDAKADA_2 = new ol.format.GeoJSON();
var features_LBS2019TIDAKADA_2 = format_LBS2019TIDAKADA_2.readFeatures(json_LBS2019TIDAKADA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LBS2019TIDAKADA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LBS2019TIDAKADA_2.addFeatures(features_LBS2019TIDAKADA_2);
var lyr_LBS2019TIDAKADA_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LBS2019TIDAKADA_2, 
                style: style_LBS2019TIDAKADA_2,
                interactive: true,
                title: '<img src="styles/legend/LBS2019TIDAKADA_2.png" /> LBS 2019 (TIDAK ADA)'
            });
var format_SLOPE_WPDEMNAS_3 = new ol.format.GeoJSON();
var features_SLOPE_WPDEMNAS_3 = format_SLOPE_WPDEMNAS_3.readFeatures(json_SLOPE_WPDEMNAS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLOPE_WPDEMNAS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLOPE_WPDEMNAS_3.addFeatures(features_SLOPE_WPDEMNAS_3);
var lyr_SLOPE_WPDEMNAS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLOPE_WPDEMNAS_3, 
                style: style_SLOPE_WPDEMNAS_3,
                interactive: true,
    title: 'SLOPE_WP (DEMNAS)<br />\
    <img src="styles/legend/SLOPE_WPDEMNAS_3_0.png" /> <15%<br />\
    <img src="styles/legend/SLOPE_WPDEMNAS_3_1.png" /> 15-25 %<br />\
    <img src="styles/legend/SLOPE_WPDEMNAS_3_2.png" /> 25-40 %<br />\
    <img src="styles/legend/SLOPE_WPDEMNAS_3_3.png" /> >40 %<br />'
        });
var format_FORMATLAMA_4 = new ol.format.GeoJSON();
var features_FORMATLAMA_4 = format_FORMATLAMA_4.readFeatures(json_FORMATLAMA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FORMATLAMA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FORMATLAMA_4.addFeatures(features_FORMATLAMA_4);
var lyr_FORMATLAMA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FORMATLAMA_4, 
                style: style_FORMATLAMA_4,
                interactive: true,
    title: 'FORMAT LAMA<br />\
    <img src="styles/legend/FORMATLAMA_4_0.png" /> Industri<br />\
    <img src="styles/legend/FORMATLAMA_4_1.png" /> Jasa<br />\
    <img src="styles/legend/FORMATLAMA_4_2.png" /> Perdagangan<br />\
    <img src="styles/legend/FORMATLAMA_4_3.png" /> Perkantoran<br />\
    <img src="styles/legend/FORMATLAMA_4_4.png" /> Perumahan Kepadatan Rendah R-4<br />\
    <img src="styles/legend/FORMATLAMA_4_5.png" /> Perumahan Kepadatan Sedang R-3<br />\
    <img src="styles/legend/FORMATLAMA_4_6.png" /> Perumahan Kepadatan Tinggi R-2<br />\
    <img src="styles/legend/FORMATLAMA_4_7.png" /> Perumahan Kepadatan Tinggi R2<br />\
    <img src="styles/legend/FORMATLAMA_4_8.png" /> Peruntukan Khusus<br />\
    <img src="styles/legend/FORMATLAMA_4_9.png" /> Peruntukan Lain Pertamina PL-2<br />\
    <img src="styles/legend/FORMATLAMA_4_10.png" /> RTH<br />\
    <img src="styles/legend/FORMATLAMA_4_11.png" /> Sarana Pelayanan Umum<br />\
    <img src="styles/legend/FORMATLAMA_4_12.png" /> Zona Campuran<br />\
    <img src="styles/legend/FORMATLAMA_4_13.png" /> Zona Perlindungan Setempat<br />\
    <img src="styles/legend/FORMATLAMA_4_14.png" /> Zona Peruntukan Lainnya<br />\
    <img src="styles/legend/FORMATLAMA_4_15.png" /> Zona Ruang Terbuka Hijau<br />'
        });
var format__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5 = new ol.format.GeoJSON();
var features__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5 = format__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5.readFeatures(json__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5.addFeatures(features__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5);
var lyr__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5, 
                style: style__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5,
                interactive: true,
    title: '_1_5RD_AR_PR_SAUMLAKILARAT_2023 (BASISDATA TERBARU)<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_0.png" /> Transportasi<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_1.png" /> Campuran Intensitas Menengah/Sedang<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_2.png" /> Kawasan Peruntukan Industri<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_3.png" /> Perdagangan dan Jasa Skala WP<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_4.png" /> Perkantoran<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_5.png" /> Pertahanan dan Keamanan<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_6.png" /> Perumahan Kepadatan Rendah<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_7.png" /> Perumahan Kepadatan Sedang<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_8.png" /> Perumahan Kepadatan Tinggi<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_9.png" /> SPU Skala Kota<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_10.png" /> Pemakaman<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_11.png" /> Jalur Hijau<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_12.png" /> Taman Kelurahan<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_13.png" /> Taman Kota<br />\
    <img src="styles/legend/_1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5_14.png" /> Perlindungan Setempat<br />'
        });
var format_BATASWP_6 = new ol.format.GeoJSON();
var features_BATASWP_6 = format_BATASWP_6.readFeatures(json_BATASWP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASWP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASWP_6.addFeatures(features_BATASWP_6);
var lyr_BATASWP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BATASWP_6, 
                style: style_BATASWP_6,
                interactive: true,
                title: '<img src="styles/legend/BATASWP_6.png" /> BATASWP'
            });
var format_Bangunan_7 = new ol.format.GeoJSON();
var features_Bangunan_7 = format_Bangunan_7.readFeatures(json_Bangunan_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_7.addFeatures(features_Bangunan_7);
var lyr_Bangunan_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bangunan_7, 
                style: style_Bangunan_7,
                interactive: true,
                title: '<img src="styles/legend/Bangunan_7.png" /> Bangunan'
            });
var format_batasdesaBIG_8 = new ol.format.GeoJSON();
var features_batasdesaBIG_8 = format_batasdesaBIG_8.readFeatures(json_batasdesaBIG_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batasdesaBIG_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batasdesaBIG_8.addFeatures(features_batasdesaBIG_8);
var lyr_batasdesaBIG_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_batasdesaBIG_8, 
                style: style_batasdesaBIG_8,
                interactive: true,
                title: '<img src="styles/legend/batasdesaBIG_8.png" /> batas desa (BIG)'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KAWASANHUTANLHK2019_1.setVisible(false);lyr_LBS2019TIDAKADA_2.setVisible(false);lyr_SLOPE_WPDEMNAS_3.setVisible(false);lyr_FORMATLAMA_4.setVisible(false);lyr__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5.setVisible(true);lyr_BATASWP_6.setVisible(true);lyr_Bangunan_7.setVisible(false);lyr_batasdesaBIG_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KAWASANHUTANLHK2019_1,lyr_LBS2019TIDAKADA_2,lyr_SLOPE_WPDEMNAS_3,lyr_FORMATLAMA_4,lyr__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5,lyr_BATASWP_6,lyr_Bangunan_7,lyr_batasdesaBIG_8];
lyr_KAWASANHUTANLHK2019_1.set('fieldAliases', {'KODEPROV': 'KODEPROV', 'FUNGSIKWS': 'FUNGSIKWS', 'NOSKPNJK': 'NOSKPNJK', 'TGLSKPNJK': 'TGLSKPNJK', 'LSKPNJK': 'LSKPNJK', 'KET': 'KET', 'FUNGSI_ID': 'FUNGSI_ID', 'Kode_angka': 'Kode_angka', 'Nilai': 'Nilai', 'Singkatan': 'Singkatan', });
lyr_LBS2019TIDAKADA_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Ket_2511': 'Ket_2511', 'Luas_CEA': 'Luas_CEA', 'Qname_2019': 'Qname_2019', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_SLOPE_WPDEMNAS_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Id': 'Id', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'LERENG': 'LERENG', });
lyr_FORMATLAMA_4.set('fieldAliases', {'Id': 'Id', 'Pola_Ruang': 'Pola_Ruang', 'Luas': 'Luas', 'Kode': 'Kode', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', });
lyr__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'Nama Objek', 'NAMZON': 'Nama Zona', 'KODZON': 'Kode Zona', 'NAMSZN': 'Nama Sub-Zona', 'KODSZN': 'Kode Sub-Zona', 'JNSRPR': 'Jenis Rencana Pola Ruang', 'KODEWP': 'Kode WP', 'KODSWP': 'Kode SWP', 'KODBLK': 'Kode Blok', 'KODSBL': 'Kode Sub-Blok', 'WADMPR': 'Wilayah Administrasi Provinsi', 'WADMKK': 'Wilayah Administrasi Kabupaten/Kota', 'WADMKC': 'Wilayah Administrasi Kecamatan', 'WADMKD': 'Wilayah Administrasi Kelurahan/Desa', 'KKOP_1': 'Kawasan Keselamatan Operasi Penerbangan', 'LP2B_2': 'Lahan Pertanian Pangan Berkelanjutan', 'KRB_03': 'Kawasan Rawan Bencana', 'TOD_04': 'Kawasan Berorientasi Transit', 'TEB_05': 'Tempat Evakuasi Bencana', 'PUSLIT': 'Pusat Penelitian', 'CAGBUD': 'Kawasan Cagar Budaya', 'RESAIR': 'Kawasan Resapan Air', 'KSMPDN': 'Kawasan Sempadan', 'HANKAM': 'Kawasan Pertahanan dan Keamanan', 'KKARST': 'Kawasan Karst', 'PTBGMB': 'Kawasan Pertambangan Mineral dan Batubara', 'MGRSAT': 'Kawasan Migrasi Satwa', 'RDBUMI': 'Ruang Dalam Bumi', 'TPZ_00': 'Teknik Pengaturan Zonasi', 'REMARK': 'Catatan', 'LUASHA': 'Luas Area', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_BATASWP_6.set('fieldAliases', {'Id': 'Id', 'Sub_BWP': 'Sub_BWP', 'BLOK': 'BLOK', 'WP': 'WP', });
lyr_Bangunan_7.set('fieldAliases', {'Id': 'Id', });
lyr_batasdesaBIG_8.set('fieldAliases', {'L4': 'desa', 'L3': 'kecamatan', 'L2': 'kabkot', 'L1': 'provinsi', 'L0': 'negara', });
lyr_KAWASANHUTANLHK2019_1.set('fieldImages', {'KODEPROV': 'TextEdit', 'FUNGSIKWS': 'TextEdit', 'NOSKPNJK': 'TextEdit', 'TGLSKPNJK': 'DateTime', 'LSKPNJK': 'TextEdit', 'KET': 'TextEdit', 'FUNGSI_ID': 'TextEdit', 'Kode_angka': 'TextEdit', 'Nilai': 'TextEdit', 'Singkatan': 'TextEdit', });
lyr_LBS2019TIDAKADA_2.set('fieldImages', {'OBJECTID': '', 'WADMKK': '', 'WADMPR': '', 'Ket_2511': '', 'Luas_CEA': '', 'Qname_2019': '', 'Shape_Leng': '', 'Shape_Le_1': '', 'Shape_Area': '', });
lyr_SLOPE_WPDEMNAS_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'Id': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'LERENG': 'TextEdit', });
lyr_FORMATLAMA_4.set('fieldImages', {'Id': 'TextEdit', 'Pola_Ruang': 'TextEdit', 'Luas': 'TextEdit', 'Kode': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', });
lyr__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'NAMZON': 'TextEdit', 'KODZON': 'ValueMap', 'NAMSZN': 'ValueMap', 'KODSZN': 'ValueMap', 'JNSRPR': 'ValueMap', 'KODEWP': 'TextEdit', 'KODSWP': 'TextEdit', 'KODBLK': 'TextEdit', 'KODSBL': 'ValueMap', 'WADMPR': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'KKOP_1': 'ValueMap', 'LP2B_2': 'ValueMap', 'KRB_03': 'ValueMap', 'TOD_04': 'ValueMap', 'TEB_05': 'ValueMap', 'PUSLIT': 'ValueMap', 'CAGBUD': 'ValueMap', 'RESAIR': 'ValueMap', 'KSMPDN': 'ValueMap', 'HANKAM': 'ValueMap', 'KKARST': 'ValueMap', 'PTBGMB': 'ValueMap', 'MGRSAT': 'ValueMap', 'RDBUMI': 'ValueMap', 'TPZ_00': 'TextEdit', 'REMARK': 'TextEdit', 'LUASHA': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_BATASWP_6.set('fieldImages', {'Id': 'TextEdit', 'Sub_BWP': 'TextEdit', 'BLOK': 'TextEdit', 'WP': 'TextEdit', });
lyr_Bangunan_7.set('fieldImages', {'Id': '', });
lyr_batasdesaBIG_8.set('fieldImages', {'L4': 'TextEdit', 'L3': 'TextEdit', 'L2': 'TextEdit', 'L1': 'TextEdit', 'L0': 'TextEdit', });
lyr_KAWASANHUTANLHK2019_1.set('fieldLabels', {'KODEPROV': 'inline label', 'FUNGSIKWS': 'inline label', 'NOSKPNJK': 'inline label', 'TGLSKPNJK': 'inline label', 'LSKPNJK': 'inline label', 'KET': 'inline label', 'FUNGSI_ID': 'inline label', 'Kode_angka': 'inline label', 'Nilai': 'inline label', 'Singkatan': 'inline label', });
lyr_LBS2019TIDAKADA_2.set('fieldLabels', {'OBJECTID': 'inline label', 'WADMKK': 'inline label', 'WADMPR': 'inline label', 'Ket_2511': 'inline label', 'Luas_CEA': 'inline label', 'Qname_2019': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Le_1': 'inline label', 'Shape_Area': 'inline label', });
lyr_SLOPE_WPDEMNAS_3.set('fieldLabels', {'OBJECTID': 'inline label', 'Id': 'inline label', 'Shape_Leng': 'inline label', 'Shape_Area': 'inline label', 'LERENG': 'inline label', });
lyr_FORMATLAMA_4.set('fieldLabels', {'Id': 'inline label', 'Pola_Ruang': 'inline label', 'Luas': 'inline label', 'Kode': 'inline label', 'NAMOBJ': 'inline label', 'REMARK': 'inline label', });
lyr__1_5RD_AR_PR_SAUMLAKILARAT_2023BASISDATATERBARU_5.set('fieldLabels', {'OBJECTID': 'inline label', 'NAMOBJ': 'inline label', 'NAMZON': 'inline label', 'KODZON': 'inline label', 'NAMSZN': 'inline label', 'KODSZN': 'inline label', 'JNSRPR': 'inline label', 'KODEWP': 'inline label', 'KODSWP': 'inline label', 'KODBLK': 'inline label', 'KODSBL': 'inline label', 'WADMPR': 'inline label', 'WADMKK': 'inline label', 'WADMKC': 'inline label', 'WADMKD': 'inline label', 'KKOP_1': 'inline label', 'LP2B_2': 'inline label', 'KRB_03': 'inline label', 'TOD_04': 'inline label', 'TEB_05': 'inline label', 'PUSLIT': 'inline label', 'CAGBUD': 'inline label', 'RESAIR': 'inline label', 'KSMPDN': 'inline label', 'HANKAM': 'inline label', 'KKARST': 'inline label', 'PTBGMB': 'inline label', 'MGRSAT': 'inline label', 'RDBUMI': 'inline label', 'TPZ_00': 'inline label', 'REMARK': 'inline label', 'LUASHA': 'inline label', 'Shape_Length': 'inline label', 'Shape_Area': 'inline label', });
lyr_BATASWP_6.set('fieldLabels', {'Id': 'inline label', 'Sub_BWP': 'inline label', 'BLOK': 'inline label', 'WP': 'inline label', });
lyr_Bangunan_7.set('fieldLabels', {'Id': 'inline label', });
lyr_batasdesaBIG_8.set('fieldLabels', {'L4': 'inline label', 'L3': 'inline label', 'L2': 'inline label', 'L1': 'inline label', 'L0': 'header label', });
lyr_batasdesaBIG_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});