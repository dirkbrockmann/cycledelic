import {interval} from "d3"
import * as ct from "./controls.js"
import cfg from "./config.js"
import param from "./parameters.js"
import resetparameters from "./reset_parameters.js"
import {iterate,initialize,update} from "./simulation.js"


var timer = {}

const startstop = (display) => {
	ct.go.value() == 1 ? timer = interval(()=>iterate(display),cfg.simulation.delay) : timer.stop()

}

export default (display,controls,config) => {
	
	ct.reset.update(()=>resetparameters(controls))	
	ct.go.update(()=>startstop(display))
	ct.setup.update(()=>initialize(display,config))
	param.number_of_particles.widget.update(()=>initialize(display,config))
	
}

