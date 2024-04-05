(()=>{"use strict";class t{bfCode;memory;ptr;pc;loopStack;constructor(t){this.bfCode=t,this.memory=new Array(1e3).fill(0),this.ptr=500,this.pc=0,this.loopStack=[]}moveRight(){this.ptr++}moveLeft(){this.ptr--}increment(){this.memory[this.ptr]++}decrement(){this.memory[this.ptr]--}loopStart(){if(0===this.memory[this.ptr]){let t=1;for(;0!==t;)this.pc++,"["===this.bfCode[this.pc]?t++:"]"===this.bfCode[this.pc]&&t--}else this.loopStack.push(this.pc)}loopEnd(){0!==this.memory[this.ptr]?this.pc=this.loopStack[this.loopStack.length-1]:this.loopStack.pop()}evaluate(){let t="";for(;this.pc<this.bfCode.length;){switch(this.bfCode[this.pc]){case">":this.moveRight();break;case"<":this.moveLeft();break;case"+":this.increment();break;case"-":this.decrement();break;case"[":this.loopStart();break;case"]":this.loopEnd();break;case".":t+=String.fromCharCode(this.memory[this.ptr])}this.pc++}return t}}window.exec=function(){const e=(s=document.getElementById("sourceCodeArea").value,new t(s).evaluate());var s;document.getElementById("executionResult").value=e}})();