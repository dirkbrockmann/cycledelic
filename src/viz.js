import * as d3 from "d3"
import param from "./parameters.js"
import {agents} from "./model.js"
import cfg from "./config.js"


const N = param.N;
const ds = 1.0/(2*N+1);

const X = d3.scaleLinear().domain([-0.5,0.5]);
const Y = d3.scaleLinear().domain([-0.5,0.5]);
var ctx,dL,W,H;




const go =  (display,config) => {
	ctx.clearRect(0, 0, W, H);
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		

	agents.forEach(d=>{
		const c = d.cell();
		const r = Math.floor(255*(param.show_species_1.widget.value()?d.u:0));
		const g = Math.floor(255*(param.show_species_2.widget.value()?d.v:0));
		const b = Math.floor(255*(param.show_species_3.widget.value()?d.w:0));

		ctx.fillStyle=
			"rgb("+r+","+g+","+b+")";
		ctx.fillRect(X(c[2].x), Y(c[2].y), (X(c[0].x)-X(c[2].x)), (Y(c[0].y)-Y(c[2].y)));
	})
	
	ctx.strokeStyle = "black";
	ctx.strokeRect(0, 0, config.display_size.width, config.display_size.height);		
}

const update = (display,config) => {
	go (display,config);		
}

const initialize = (display,config) => {

	W = config.display_size.width;
	H = config.display_size.height;
	
	dL = ds*W;
		
	X.range([0,W]);
	Y.range([0,H]);
	
	ctx = display.node().getContext('2d');
	
	go (display,config);
};
	



export {initialize,go,update}
