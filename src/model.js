
import param from "./parameters.js"
import {each,range,map,mean,sumBy} from "lodash-es"
import  {square as sqlat} from "lattices"


const N = param.N;
const dt = param.dt;

var agents = [];

const initialize = () => {

	// set/reset timer
	param.timer={}; param.tick=0;

	const s = sqlat(N).boundary("periodic");

	agents = s.nodes;
	agents.forEach(a=>{
		a.u = Math.random(); a.v = Math.random(); a.w = Math.random();
	});	
	
};

const go  = () => {
		
	param.tick++;
	const dt = param.dt;
	const sigma = param.predation.widget.value();
	const mu = param.competition.widget.value();
	const epsilon = param.diffusion.widget.value();
	
	each(agents,d=>{
		d.du = dt * d.u * (sigma * (d.v - d.w) + d.u 
			- mu * (d.v + d.w) - d.u*d.u) + dt * epsilon * ( sumBy(d.neighbors,x=>x.u-d.u) );			
		d.dv = dt * d.v * (sigma * (d.w - d.u) + d.v 
			- mu * (d.u + d.w) - d.v*d.v) + dt * epsilon * ( sumBy(d.neighbors,x=>x.v-d.v) );
		d.dw = dt * d.w * (sigma * (d.u - d.v) + d.w 
			- mu * (d.u + d.v) - d.w*d.w) + dt * epsilon * ( sumBy(d.neighbors,x=>x.w-d.w) );
	});
	
	each(agents,d=>{
		d.u += d.du;
		d.v += d.dv;
		d.w += d.dw;
		if (d.u < 0) {d.u = 0}
		if (d.v < 0) {d.v = 0}
		if (d.w < 0) {d.w = 0}
	});
		
	
	
}

const update = () => {
	
	each(agents,x => {x.active = x.index < param.number_of_particles.widget.value() ? true : false})

}

export {agents,initialize,go,update}
