(function(){
var width = 400,
	height = 400,
	control_box_width = 400,
	control_box_height = 400,
	sl_width = 400,
	sl_height = 120,
	sl_margin = {top:30,bottom:0,left:10,right:10},
	butt_width = 400,
	butt_margin = {top:150+40+25,bottom:0,left:30,right:30};

var sbl = new widget.block([3],sl_height,0,"[]"),
	bbl = new widget.block([2,1],butt_width-butt_margin.left-butt_margin.right,200,"[]");

var N = 100,
	dt = 0.1;

var	def_sigma = 2,
	def_mu = 1.5,
	def_epsilon = 0.05;	
	
	
var pixel_width = width / N;
var pixel_height = height / N;
var X = d3.scaleLinear().domain([0,N]).range([0,width]);
var Y = d3.scaleLinear().domain([0,N]).range([0,height]);

var sigma = {id:"sigma", name:"predation", range:[0,3], value:def_sigma},
	mu = {id:"mu", name:"competition", range:[0,3], value:def_mu},
	epsilon = {id:"epsilon", name:"diffusion", range:[0,.1], value:def_epsilon};

var playpause = { id:"b1", name:"", actions: ["play","pause"], value: 0};
var back = { id:"b2", name:"", actions: ["back"], value: 0};
var reload = { id:"b3", name:"", actions: ["reload"], value: 0};


var sliders = [
	new widget.slider(sigma).width(sl_width-sl_margin.left-sl_margin.right),
	new widget.slider(mu).width(sl_width-sl_margin.left-sl_margin.right),
	new widget.slider(epsilon).width(sl_width-sl_margin.left-sl_margin.right)
]

var buttons = [
	new widget.button(playpause).update(runpause),
	new widget.button(back).update(reset),
	new widget.button(reload).update(rl)
]


var canvas  = d3.select("#cxpbox_cycledelic_display").append("canvas")
	.attr("id", "canvas")
	.attr("width", width)
	.attr("height", height)
	.attr("class","explorable_display")

//d3.selectAll("#container").append("br")	

var controls = d3.selectAll("#cxpbox_cycledelic_controls").append("svg")
	.attr("width",control_box_width)
	.attr("height",control_box_height)
	.attr("class","explorable_controls")

controls.selectAll(".slider").data(sliders).enter().append(widget.sliderElement)
	.attr("transform",function(d,i){return "translate("+sl_margin.left+","+(sl_margin.top+sbl.x(i))+")"});

controls.selectAll(".button").data(buttons).enter().append(widget.buttonElement)
	.attr("transform",function(d,i){return "translate("+(butt_margin.left+bbl.x(i))+","+butt_margin.top+")"});	
	

var context = canvas.node().getContext("2d");
var points = d3.range(N*N).map(function(i){	
	return { x: (i % N) , y: Math.floor(i / N), u: Math.random(), v: Math.random(), w: Math.random() }
})

points.forEach(function(d,i){
	context.fillStyle="rgb("+Math.floor(255*d.u)+","+Math.floor(255*d.v)+","+Math.floor(255*d.w)+")";
	context.fillRect(X(d.x), Y(d.y), pixel_width, pixel_height);
	d.nn=nn(i,N).map(function(x){return points[x]});
})


function reset(){
	 points = d3.range(N*N).map(function(i){
		return { x: (i % N) , y: Math.floor(i / N), u: Math.random(), v: Math.random(), w: Math.random() }
	 })
		
	 points.forEach(function(d,i){
		context.fillStyle="rgb("+Math.floor(255*d.u)+","+Math.floor(255*d.v)+","+Math.floor(255*d.w)+")";
			context.fillRect(X(d.x), Y(d.y), pixel_width, pixel_height);
			d.nn=nn(i,N).map(function(x){return points[x]});
	})
}

function rl(){ 
	sliders[0].click(def_sigma);
	sliders[1].click(def_mu);
	sliders[2].click(def_epsilon);
}

var t;

function runpause(d){ d.value() == 1 ? t = d3.timer(runsim,0) : t.stop(); }

function runsim(){

	points.forEach(function(d){
		d.du = dt * d.u * (sigma.value * (d.v - d.w) + d.u - mu.value * (d.v + d.w) - d.u*d.u) + dt * epsilon.value * ( d3.sum(d.nn,function(x){return x.u-d.u}) );
		d.dv = dt * d.v * (sigma.value * (d.w - d.u) + d.v - mu.value * (d.u + d.w) - d.v*d.v) + dt * epsilon.value * ( d3.sum(d.nn,function(x){return x.v-d.v}) );;
		d.dw = dt * d.w * (sigma.value * (d.u - d.v) + d.w - mu.value * (d.u + d.v) - d.w*d.w) + dt * epsilon.value * ( d3.sum(d.nn,function(x){return x.w-d.w}) );;
		d.u += d.du;
		d.v += d.dv;
		d.w += d.dw;
		if (d.u < 0) {d.u = 0}
		if (d.v < 0) {d.v = 0}
		if (d.w < 0) {d.w = 0}	
	});

	points.forEach(function(d,i){
		context.fillStyle="rgb("+Math.floor(255*(d.u))+","+Math.floor(255*(d.v))+","+Math.floor(255*(d.w))+")";
		context.fillRect(X(d.x), Y(d.y), pixel_width, pixel_height);
	})	
}


function d2l(x,y,n){ return y*n+x; }
function l2d(i,n){ return [i % n, Math.floor(i/n)];}
function nn(k,n){
	wadda=[];
	for(i=-1;i<=1;i++){
		for(j=-1;j<=1;j++){
			p = l2d(k,n);
			x = p[0];y = p[1];
			a = x + i; b = y+j;
			if (!(j == 0 && i==0)) {
				wadda.push(n*((b+n)%n)+(a+n)%n);
			}
		}
	}
	return wadda;
}

})()