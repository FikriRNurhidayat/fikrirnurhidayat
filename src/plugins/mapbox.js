import Vue from 'vue';
import Mapbox from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

Mapbox.accessToken = process.env.VUE_APP_MAPBOX_TOKEN; 

Vue.prototype.$mapbox = Mapbox;
