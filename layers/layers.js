var wms_layers = [];


        var lyr_FonddecarteOSM_0 = new ol.layer.Tile({
            'title': 'Fond de carte OSM',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DpartementsCnetreValdeLoire_1 = new ol.format.GeoJSON();
var features_DpartementsCnetreValdeLoire_1 = format_DpartementsCnetreValdeLoire_1.readFeatures(json_DpartementsCnetreValdeLoire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DpartementsCnetreValdeLoire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DpartementsCnetreValdeLoire_1.addFeatures(features_DpartementsCnetreValdeLoire_1);
var lyr_DpartementsCnetreValdeLoire_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DpartementsCnetreValdeLoire_1, 
                style: style_DpartementsCnetreValdeLoire_1,
                interactive: true,
                title: '<img src="styles/legend/DpartementsCnetreValdeLoire_1.png" /> Départements Cnetre Val de Loire'
            });
var format_RgionCentreValdeLoire_2 = new ol.format.GeoJSON();
var features_RgionCentreValdeLoire_2 = format_RgionCentreValdeLoire_2.readFeatures(json_RgionCentreValdeLoire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RgionCentreValdeLoire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RgionCentreValdeLoire_2.addFeatures(features_RgionCentreValdeLoire_2);
var lyr_RgionCentreValdeLoire_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RgionCentreValdeLoire_2, 
                style: style_RgionCentreValdeLoire_2,
                interactive: true,
                title: '<img src="styles/legend/RgionCentreValdeLoire_2.png" /> Région Centre Val de Loire'
            });
var format_HorsthmatiqueDSILexceptionnelle_3 = new ol.format.GeoJSON();
var features_HorsthmatiqueDSILexceptionnelle_3 = format_HorsthmatiqueDSILexceptionnelle_3.readFeatures(json_HorsthmatiqueDSILexceptionnelle_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HorsthmatiqueDSILexceptionnelle_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HorsthmatiqueDSILexceptionnelle_3.addFeatures(features_HorsthmatiqueDSILexceptionnelle_3);
var lyr_HorsthmatiqueDSILexceptionnelle_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HorsthmatiqueDSILexceptionnelle_3, 
                style: style_HorsthmatiqueDSILexceptionnelle_3,
                interactive: true,
                title: '<img src="styles/legend/HorsthmatiqueDSILexceptionnelle_3.png" /> Hors thématique DSIL exceptionnelle'
            });
var format_Transitioncologique_4 = new ol.format.GeoJSON();
var features_Transitioncologique_4 = format_Transitioncologique_4.readFeatures(json_Transitioncologique_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transitioncologique_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transitioncologique_4.addFeatures(features_Transitioncologique_4);
var lyr_Transitioncologique_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Transitioncologique_4, 
                style: style_Transitioncologique_4,
                interactive: true,
                title: '<img src="styles/legend/Transitioncologique_4.png" /> Transition écologique'
            });
var format_Prservationdupatrimoine_5 = new ol.format.GeoJSON();
var features_Prservationdupatrimoine_5 = format_Prservationdupatrimoine_5.readFeatures(json_Prservationdupatrimoine_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prservationdupatrimoine_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prservationdupatrimoine_5.addFeatures(features_Prservationdupatrimoine_5);
var lyr_Prservationdupatrimoine_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prservationdupatrimoine_5, 
                style: style_Prservationdupatrimoine_5,
                interactive: true,
                title: '<img src="styles/legend/Prservationdupatrimoine_5.png" /> Préservation du patrimoine'
            });
var format_Rsiliencesanitaire_6 = new ol.format.GeoJSON();
var features_Rsiliencesanitaire_6 = format_Rsiliencesanitaire_6.readFeatures(json_Rsiliencesanitaire_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rsiliencesanitaire_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rsiliencesanitaire_6.addFeatures(features_Rsiliencesanitaire_6);
var lyr_Rsiliencesanitaire_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rsiliencesanitaire_6, 
                style: style_Rsiliencesanitaire_6,
                interactive: true,
                title: '<img src="styles/legend/Rsiliencesanitaire_6.png" /> Résilience sanitaire'
            });

lyr_FonddecarteOSM_0.setVisible(true);lyr_DpartementsCnetreValdeLoire_1.setVisible(true);lyr_RgionCentreValdeLoire_2.setVisible(true);lyr_HorsthmatiqueDSILexceptionnelle_3.setVisible(true);lyr_Transitioncologique_4.setVisible(true);lyr_Prservationdupatrimoine_5.setVisible(true);lyr_Rsiliencesanitaire_6.setVisible(true);
var layersList = [lyr_FonddecarteOSM_0,lyr_DpartementsCnetreValdeLoire_1,lyr_RgionCentreValdeLoire_2,lyr_HorsthmatiqueDSILexceptionnelle_3,lyr_Transitioncologique_4,lyr_Prservationdupatrimoine_5,lyr_Rsiliencesanitaire_6];
lyr_DpartementsCnetreValdeLoire_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts3': 'nuts3', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_RgionCentreValdeLoire_2.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_HorsthmatiqueDSILexceptionnelle_3.set('fieldAliases', {'Nom': 'Nom', 'Thème': 'Thème', 'Projet': 'Projet', 'Coût': 'Coût', 'Subvention': 'Subvention', 'Part': 'Part', });
lyr_Transitioncologique_4.set('fieldAliases', {'Nom': 'Nom', 'Thème': 'Thème', 'Projet': 'Projet', 'Coût': 'Coût', 'Subvention': 'Subvention', 'Part': 'Part', });
lyr_Prservationdupatrimoine_5.set('fieldAliases', {'Nom': 'Nom', 'Thème': 'Thème', 'Projet': 'Projet', 'Coût': 'Coût', 'Subvention': 'Subvention', 'Part': 'Part', });
lyr_Rsiliencesanitaire_6.set('fieldAliases', {'Nom': 'Nom', 'Thème': 'Thème', 'Projet': 'Projet', 'Coût': 'Coût', 'Subvention': 'Subvention', 'Part': 'Part', });
lyr_DpartementsCnetreValdeLoire_1.set('fieldImages', {'code_insee': 'Hidden', 'nom': 'Hidden', 'nuts3': 'Hidden', 'wikipedia': 'Hidden', 'surf_km2': 'Hidden', });
lyr_RgionCentreValdeLoire_2.set('fieldImages', {'code_insee': 'Hidden', 'nom': 'Hidden', 'nuts2': 'Hidden', 'wikipedia': 'Hidden', 'surf_km2': 'Hidden', });
lyr_HorsthmatiqueDSILexceptionnelle_3.set('fieldImages', {'Nom': 'TextEdit', 'Thème': 'TextEdit', 'Projet': 'TextEdit', 'Coût': 'TextEdit', 'Subvention': 'TextEdit', 'Part': 'TextEdit', });
lyr_Transitioncologique_4.set('fieldImages', {'Nom': 'TextEdit', 'Thème': 'TextEdit', 'Projet': 'TextEdit', 'Coût': 'TextEdit', 'Subvention': 'TextEdit', 'Part': 'TextEdit', });
lyr_Prservationdupatrimoine_5.set('fieldImages', {'Nom': 'TextEdit', 'Thème': 'TextEdit', 'Projet': 'TextEdit', 'Coût': 'TextEdit', 'Subvention': 'TextEdit', 'Part': 'TextEdit', });
lyr_Rsiliencesanitaire_6.set('fieldImages', {'Nom': 'TextEdit', 'Thème': 'TextEdit', 'Projet': 'TextEdit', 'Coût': 'TextEdit', 'Subvention': 'TextEdit', 'Part': 'TextEdit', });
lyr_DpartementsCnetreValdeLoire_1.set('fieldLabels', {});
lyr_RgionCentreValdeLoire_2.set('fieldLabels', {});
lyr_HorsthmatiqueDSILexceptionnelle_3.set('fieldLabels', {'Nom': 'inline label', 'Thème': 'inline label', 'Projet': 'inline label', 'Coût': 'inline label', 'Subvention': 'inline label', 'Part': 'inline label', });
lyr_Transitioncologique_4.set('fieldLabels', {'Nom': 'inline label', 'Thème': 'inline label', 'Projet': 'inline label', 'Coût': 'inline label', 'Subvention': 'inline label', 'Part': 'inline label', });
lyr_Prservationdupatrimoine_5.set('fieldLabels', {'Nom': 'inline label', 'Thème': 'inline label', 'Projet': 'inline label', 'Coût': 'inline label', 'Subvention': 'inline label', 'Part': 'inline label', });
lyr_Rsiliencesanitaire_6.set('fieldLabels', {'Nom': 'inline label', 'Thème': 'inline label', 'Projet': 'inline label', 'Coût': 'inline label', 'Subvention': 'inline label', 'Part': 'inline label', });
lyr_Rsiliencesanitaire_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});