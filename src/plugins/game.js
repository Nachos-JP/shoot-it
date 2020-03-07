import Vue from "vue";
import * as d3 from "d3";
import { resolve } from "upath";

const Target = class {
  constructor(svg){
    this._svg = svg;
    this._width = parseFloat(this._svg.style("width"));
    this._height = parseFloat(this._svg.style("height"));
    this._targetCount = 0;
    this._allCount = 0;
    this._startTime = 0;
    this._endTime = 0;
  }

  random(min, max){
    return Math.random()*(max-min) + min;
  }

  getSize(){
    return {
      cx: this.random(10, this._width-10),
      cy: this.random(10, this._height-10),
      r: 10,
    };
  }

  start(option){
    return new Promise(resolve => {
      const size = this.getSize();
      this._startTime = performance.now();
      this._svg.append("circle")
        .on("click", (d,i,nodes)=>{
          const newSize = this.getSize();
          d3.select(nodes[i]).attr("cx", newSize.cx);
          d3.select(nodes[i]).attr("cy", newSize.cy);
          this._targetCount ++;

          if(this._targetCount >= option.targetNum){
            this._allCount ++;
            this._endTime = performance.now();
            d3.select(nodes[i]).remove();
            resolve();
          }
        })
        .attr("cx", size.cx)
        .attr("cy", size.cy)
        .attr("r", size.r)
        .attr("fill", "skyblue");

      this._svg.on("click", () => this._allCount ++);
    });
  }

  getData(){
    return {
      count: {
        all: this._allCount,
        target: this._targetCount,
      },
      time: {
        start: this._startTime,
        end: this._endTime,
      },
    };
  }
};

const Game = class {
  constructor(elem){
    this._elem = elem;
    this.addSvg();
  }

  addSvg(){
    this._svg = d3.select(this._elem).append("svg")
      .attr("width", "100%")
      .attr("height", "100%");
  }

  async start(option){
    const target = new Target(this._svg);
    await target.start(option);
    const data = target.getData();
    const score = this.score(data);
    return Promise.resolve(score);
  }

  score(data){
    return {
      point: data.count.target * 10,
      accuracy: data.count.target / data.count.all * 100,
      time: Math.round((data.time.end - data.time.start)) / 1e3
    };
  }
};

Vue.prototype.$Game = Game;
