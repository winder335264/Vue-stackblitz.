import { createStore } from 'vuex'
import { playlist } from './store/playlist.js';

const store = createStore({
	modules: {
    playlist
	}
});