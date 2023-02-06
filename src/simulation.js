import {initialize as model_init, update as model_update, go as model_go} from "./model.js"
import {initialize as visual_init, update as visual_update, go as visual_go} from "./viz.js"

function iterate (display) {
	model_go();
	visual_go(display);
};

function initialize (display,config) {	
	model_init();
	visual_init(display,config); 
};

function update (display) {
	model_update();
	visual_update(display);
}

export {iterate,initialize,update}