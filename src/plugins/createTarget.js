import Vue from "vue";
import * as d3 from "d3";

const Target = class {
  constructor(svg){
    this._svg = svg;
    this._count = 0;
  }

  random(min, max){
    return Math.random()*(max-min) + min;
  }

  getCount(){
    return this._count;
  }
};

const Circle = class extends Target {
  constructor(svg){
    super(svg);
  }

  create(){
    const size = this.getSize();
    this._svg.append("circle")
      .on("click", (d,i,nodes)=>{
        const newSize = this.getSize();
        d3.select(nodes[i]).attr("cx", newSize.cx);
        d3.select(nodes[i]).attr("cy", newSize.cy);
        this._count ++;
      })
      .attr("cx", size.cx)
      .attr("cy", size.cy)
      .attr("r", size.r)
      .attr("fill", "skyblue");
  }

  getSize(){
    return {
      cx: this.random(10, 200),
      cy: this.random(10, 500),
      r: 10,
    };
  }
};

const Rect = class extends Target {
  constructor(svg){
    super(svg);
  }

  create(){
    const size = this.getSize();
    this._svg.append("rect")
      .on("click", (d,i,nodes)=>{
        const newSize = this.getSize();
        d3.select(nodes[i]).attr("x", newSize.x);
        d3.select(nodes[i]).attr("y", newSize.y);
        this._count ++;
      })
      .attr("x", size.x)
      .attr("y", size.y)
      .attr("width", size.width)
      .attr("height", size.height)
      .attr("fill", "skyblue");
  }

  getSize(){
    return {
      x: this.random(10, 200),
      y: this.random(10, 500),
      width: 20,
      height: 20,
    };
  }
};

Vue.prototype.$CreateCircle = svg => new Circle(svg);
Vue.prototype.$CreateRect = svg => new Rect(svg);
