// Registering component in log-component.js
AFRAME.registerComponent('log', {
    schema: {
      message: {type: 'string', default: 'Hello, World!'}
    },
    init: function () {
        console.log(this.data.message);
      }
  });

AFRAME.registerComponent('movement', {
  schema: {
    distance: {type: 'number', default: 1}
  },
  tick: function(){
    this.data.distance=this.data.distance+0.01
    var pos=this.el.getAttribute("position")
    pos.x=this.data.distance
    this.el.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
  }
})

AFRAME.registerComponent('spin', {
  schema: {
    distance: {type: 'number', default: 0},
  },
  tick: function(){
    var clicks=0
    window.addEventListener("click",(e)=>{
      this.data.distance=this.data.distance-0.1;
      clicks=clicks+1;
    })
    if(clicks==9){
      distance=0
    }
    var rot=this.el.getAttribute("rotation")
    rot.y=this.data.distance
    this.el.setAttribute("rotation",{x:rot.x,y:rot.y,z:rot.z})
  }
})

