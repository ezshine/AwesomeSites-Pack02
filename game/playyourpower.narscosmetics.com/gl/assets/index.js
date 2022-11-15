var yn=Object.defineProperty;var si=Object.getOwnPropertySymbols;var En=Object.prototype.hasOwnProperty,Mn=Object.prototype.propertyIsEnumerable;var ai=(i,t,e)=>t in i?yn(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,oi=(i,t)=>{for(var e in t||(t={}))En.call(t,e)&&ai(i,e,t[e]);if(si)for(var e of si(t))Mn.call(t,e)&&ai(i,e,t[e]);return i};function be(i){let t=i[0],e=i[1],r=i[2];return Math.sqrt(t*t+e*e+r*r)}function Xt(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i}function li(i,t,e,r){return i[0]=t,i[1]=e,i[2]=r,i}function ye(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i[2]=t[2]+e[2],i}function Ee(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2],i}function ci(i,t,e){return i[0]=t[0]*e[0],i[1]=t[1]*e[1],i[2]=t[2]*e[2],i}function ui(i,t,e){return i[0]=t[0]/e[0],i[1]=t[1]/e[1],i[2]=t[2]/e[2],i}function qt(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e,i}function hi(i,t){let e=t[0]-i[0],r=t[1]-i[1],n=t[2]-i[2];return Math.sqrt(e*e+r*r+n*n)}function fi(i,t){let e=t[0]-i[0],r=t[1]-i[1],n=t[2]-i[2];return e*e+r*r+n*n}function Me(i){let t=i[0],e=i[1],r=i[2];return t*t+e*e+r*r}function di(i,t){return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i}function mi(i,t){return i[0]=1/t[0],i[1]=1/t[1],i[2]=1/t[2],i}function $t(i,t){let e=t[0],r=t[1],n=t[2],s=e*e+r*r+n*n;return s>0&&(s=1/Math.sqrt(s)),i[0]=t[0]*s,i[1]=t[1]*s,i[2]=t[2]*s,i}function we(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]}function Te(i,t,e){let r=t[0],n=t[1],s=t[2],a=e[0],o=e[1],l=e[2];return i[0]=n*l-s*o,i[1]=s*a-r*l,i[2]=r*o-n*a,i}function pi(i,t,e,r){let n=t[0],s=t[1],a=t[2];return i[0]=n+r*(e[0]-n),i[1]=s+r*(e[1]-s),i[2]=a+r*(e[2]-a),i}function gi(i,t,e){let r=t[0],n=t[1],s=t[2],a=e[3]*r+e[7]*n+e[11]*s+e[15];return a=a||1,i[0]=(e[0]*r+e[4]*n+e[8]*s+e[12])/a,i[1]=(e[1]*r+e[5]*n+e[9]*s+e[13])/a,i[2]=(e[2]*r+e[6]*n+e[10]*s+e[14])/a,i}function vi(i,t,e){let r=t[0],n=t[1],s=t[2],a=e[3]*r+e[7]*n+e[11]*s+e[15];return a=a||1,i[0]=(e[0]*r+e[4]*n+e[8]*s)/a,i[1]=(e[1]*r+e[5]*n+e[9]*s)/a,i[2]=(e[2]*r+e[6]*n+e[10]*s)/a,i}function xi(i,t,e){let r=t[0],n=t[1],s=t[2];return i[0]=r*e[0]+n*e[3]+s*e[6],i[1]=r*e[1]+n*e[4]+s*e[7],i[2]=r*e[2]+n*e[5]+s*e[8],i}function _i(i,t,e){let r=t[0],n=t[1],s=t[2],a=e[0],o=e[1],l=e[2],c=e[3],u=o*s-l*n,h=l*r-a*s,f=a*n-o*r,m=o*f-l*h,d=l*u-a*f,g=a*h-o*u,p=c*2;return u*=p,h*=p,f*=p,m*=2,d*=2,g*=2,i[0]=r+u+m,i[1]=n+h+d,i[2]=s+f+g,i}var bi=function(){let i=[0,0,0],t=[0,0,0];return function(e,r){Xt(i,e),Xt(t,r),$t(i,i),$t(t,t);let n=we(i,t);return n>1?0:n<-1?Math.PI:Math.acos(n)}}();function yi(i,t){return i[0]===t[0]&&i[1]===t[1]&&i[2]===t[2]}var O=class extends Array{constructor(t=0,e=t,r=t){return super(t,e,r),this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t}set y(t){this[1]=t}set z(t){this[2]=t}set(t,e=t,r=t){return t.length?this.copy(t):(li(this,t,e,r),this)}copy(t){return Xt(this,t),this}add(t,e){return e?ye(this,t,e):ye(this,this,t),this}sub(t,e){return e?Ee(this,t,e):Ee(this,this,t),this}multiply(t){return t.length?ci(this,this,t):qt(this,this,t),this}divide(t){return t.length?ui(this,this,t):qt(this,this,1/t),this}inverse(t=this){return mi(this,t),this}len(){return be(this)}distance(t){return t?hi(this,t):be(this)}squaredLen(){return Me(this)}squaredDistance(t){return t?fi(this,t):Me(this)}negate(t=this){return di(this,t),this}cross(t,e){return e?Te(this,t,e):Te(this,this,t),this}scale(t){return qt(this,this,t),this}normalize(){return $t(this,this),this}dot(t){return we(this,t)}equals(t){return yi(this,t)}applyMatrix3(t){return xi(this,this,t),this}applyMatrix4(t){return gi(this,this,t),this}scaleRotateMatrix4(t){return vi(this,this,t),this}applyQuaternion(t){return _i(this,this,t),this}angle(t){return bi(this,t)}lerp(t,e){return pi(this,this,t,e),this}clone(){return new O(this[0],this[1],this[2])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}transformDirection(t){let e=this[0],r=this[1],n=this[2];return this[0]=t[0]*e+t[4]*r+t[8]*n,this[1]=t[1]*e+t[5]*r+t[9]*n,this[2]=t[2]*e+t[6]*r+t[10]*n,this.normalize()}};var Ei=new O,Tn=1,Sn=1,Mi=!1,K=class{constructor(t,e={}){t.canvas||console.error("gl not passed as first argument to Geometry"),this.gl=t,this.attributes=e,this.id=Tn++,this.VAOs={},this.drawRange={start:0,count:0},this.instancedCount=0,this.gl.renderer.bindVertexArray(null),this.gl.renderer.currentGeometry=null,this.glState=this.gl.renderer.state;for(let r in e)this.addAttribute(r,e[r])}addAttribute(t,e){if(this.attributes[t]=e,e.id=Sn++,e.size=e.size||1,e.type=e.type||(e.data.constructor===Float32Array?this.gl.FLOAT:e.data.constructor===Uint16Array?this.gl.UNSIGNED_SHORT:this.gl.UNSIGNED_INT),e.target=t==="index"?this.gl.ELEMENT_ARRAY_BUFFER:this.gl.ARRAY_BUFFER,e.normalized=e.normalized||!1,e.stride=e.stride||0,e.offset=e.offset||0,e.count=e.count||(e.stride?e.data.byteLength/e.stride:e.data.length/e.size),e.divisor=e.instanced||0,e.needsUpdate=!1,e.usage=e.usage||this.gl.STATIC_DRAW,e.buffer||this.updateAttribute(e),e.divisor){if(this.isInstanced=!0,this.instancedCount&&this.instancedCount!==e.count*e.divisor)return console.warn("geometry has multiple instanced buffers of different length"),this.instancedCount=Math.min(this.instancedCount,e.count*e.divisor);this.instancedCount=e.count*e.divisor}else t==="index"?this.drawRange.count=e.count:this.attributes.index||(this.drawRange.count=Math.max(this.drawRange.count,e.count))}updateAttribute(t){let e=!t.buffer;e&&(t.buffer=this.gl.createBuffer()),this.glState.boundBuffer!==t.buffer&&(this.gl.bindBuffer(t.target,t.buffer),this.glState.boundBuffer=t.buffer),e?this.gl.bufferData(t.target,t.data,t.usage):this.gl.bufferSubData(t.target,0,t.data),t.needsUpdate=!1}setIndex(t){this.addAttribute("index",t)}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}setInstancedCount(t){this.instancedCount=t}createVAO(t){this.VAOs[t.attributeOrder]=this.gl.renderer.createVertexArray(),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.bindAttributes(t)}bindAttributes(t){t.attributeLocations.forEach((e,{name:r,type:n})=>{if(!this.attributes[r]){console.warn(`active attribute ${r} not being supplied`);return}let s=this.attributes[r];this.gl.bindBuffer(s.target,s.buffer),this.glState.boundBuffer=s.buffer;let a=1;n===35674&&(a=2),n===35675&&(a=3),n===35676&&(a=4);let o=s.size/a,l=a===1?0:a*a*a,c=a===1?0:a*a;for(let u=0;u<a;u++)this.gl.vertexAttribPointer(e+u,o,s.type,s.normalized,s.stride+l,s.offset+u*c),this.gl.enableVertexAttribArray(e+u),this.gl.renderer.vertexAttribDivisor(e+u,s.divisor)}),this.attributes.index&&this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER,this.attributes.index.buffer)}draw({program:t,mode:e=this.gl.TRIANGLES}){this.gl.renderer.currentGeometry!==`${this.id}_${t.attributeOrder}`&&(this.VAOs[t.attributeOrder]||this.createVAO(t),this.gl.renderer.bindVertexArray(this.VAOs[t.attributeOrder]),this.gl.renderer.currentGeometry=`${this.id}_${t.attributeOrder}`),t.attributeLocations.forEach((r,{name:n})=>{let s=this.attributes[n];s.needsUpdate&&this.updateAttribute(s)}),this.isInstanced?this.attributes.index?this.gl.renderer.drawElementsInstanced(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2,this.instancedCount):this.gl.renderer.drawArraysInstanced(e,this.drawRange.start,this.drawRange.count,this.instancedCount):this.attributes.index?this.gl.drawElements(e,this.drawRange.count,this.attributes.index.type,this.attributes.index.offset+this.drawRange.start*2):this.gl.drawArrays(e,this.drawRange.start,this.drawRange.count)}getPosition(){let t=this.attributes.position;if(t.data)return t;if(!Mi)return console.warn("No position buffer data found to compute bounds"),Mi=!0}computeBoundingBox(t){t||(t=this.getPosition());let e=t.data,r=t.stride?t.stride/e.BYTES_PER_ELEMENT:t.size;this.bounds||(this.bounds={min:new O,max:new O,center:new O,scale:new O,radius:1/0});let n=this.bounds.min,s=this.bounds.max,a=this.bounds.center,o=this.bounds.scale;n.set(1/0),s.set(-1/0);for(let l=0,c=e.length;l<c;l+=r){let u=e[l],h=e[l+1],f=e[l+2];n.x=Math.min(u,n.x),n.y=Math.min(h,n.y),n.z=Math.min(f,n.z),s.x=Math.max(u,s.x),s.y=Math.max(h,s.y),s.z=Math.max(f,s.z)}o.sub(s,n),a.add(n,s).divide(2)}computeBoundingSphere(t){t||(t=this.getPosition());let e=t.data,r=t.stride?t.stride/e.BYTES_PER_ELEMENT:t.size;this.bounds||this.computeBoundingBox(t);let n=0;for(let s=0,a=e.length;s<a;s+=r)Ei.fromArray(e,s),n=Math.max(n,this.bounds.center.squaredDistance(Ei));this.bounds.radius=Math.sqrt(n)}remove(){for(let t in this.VAOs)this.gl.renderer.deleteVertexArray(this.VAOs[t]),delete this.VAOs[t];for(let t in this.attributes)this.gl.deleteBuffer(this.attributes[t].buffer),delete this.attributes[t]}};var An=1,wi={},H=class{constructor(t,{vertex:e,fragment:r,uniforms:n={},transparent:s=!1,cullFace:a=t.BACK,frontFace:o=t.CCW,depthTest:l=!0,depthWrite:c=!0,depthFunc:u=t.LESS}={}){t.canvas||console.error("gl not passed as fist argument to Program"),this.gl=t,this.uniforms=n,this.id=An++,e||console.warn("vertex shader not supplied"),r||console.warn("fragment shader not supplied"),this.transparent=s,this.cullFace=a,this.frontFace=o,this.depthTest=l,this.depthWrite=c,this.depthFunc=u,this.blendFunc={},this.blendEquation={},this.transparent&&!this.blendFunc.src&&(this.gl.renderer.premultipliedAlpha?this.setBlendFunc(this.gl.ONE,this.gl.ONE_MINUS_SRC_ALPHA):this.setBlendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA));let h=t.createShader(t.VERTEX_SHADER);t.shaderSource(h,e),t.compileShader(h),t.getShaderInfoLog(h)!==""&&console.warn(`${t.getShaderInfoLog(h)}
Vertex Shader
${Ti(e)}`);let f=t.createShader(t.FRAGMENT_SHADER);if(t.shaderSource(f,r),t.compileShader(f),t.getShaderInfoLog(f)!==""&&console.warn(`${t.getShaderInfoLog(f)}
Fragment Shader
${Ti(r)}`),this.program=t.createProgram(),t.attachShader(this.program,h),t.attachShader(this.program,f),t.linkProgram(this.program),!t.getProgramParameter(this.program,t.LINK_STATUS))return console.warn(t.getProgramInfoLog(this.program));t.deleteShader(h),t.deleteShader(f),this.uniformLocations=new Map;let m=t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS);for(let p=0;p<m;p++){let v=t.getActiveUniform(this.program,p);this.uniformLocations.set(v,t.getUniformLocation(this.program,v.name));let E=v.name.match(/(\w+)/g);v.uniformName=E[0],E.length===3?(v.isStructArray=!0,v.structIndex=Number(E[1]),v.structProperty=E[2]):E.length===2&&isNaN(Number(E[1]))&&(v.isStruct=!0,v.structProperty=E[1])}this.attributeLocations=new Map;let d=[],g=t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES);for(let p=0;p<g;p++){let v=t.getActiveAttrib(this.program,p),E=t.getAttribLocation(this.program,v.name);E!==-1&&(d[E]=v.name,this.attributeLocations.set(v,E))}this.attributeOrder=d.join("")}setBlendFunc(t,e,r,n){this.blendFunc.src=t,this.blendFunc.dst=e,this.blendFunc.srcAlpha=r,this.blendFunc.dstAlpha=n,t&&(this.transparent=!0)}setBlendEquation(t,e){this.blendEquation.modeRGB=t,this.blendEquation.modeAlpha=e}applyState(){this.depthTest?this.gl.renderer.enable(this.gl.DEPTH_TEST):this.gl.renderer.disable(this.gl.DEPTH_TEST),this.cullFace?this.gl.renderer.enable(this.gl.CULL_FACE):this.gl.renderer.disable(this.gl.CULL_FACE),this.blendFunc.src?this.gl.renderer.enable(this.gl.BLEND):this.gl.renderer.disable(this.gl.BLEND),this.cullFace&&this.gl.renderer.setCullFace(this.cullFace),this.gl.renderer.setFrontFace(this.frontFace),this.gl.renderer.setDepthMask(this.depthWrite),this.gl.renderer.setDepthFunc(this.depthFunc),this.blendFunc.src&&this.gl.renderer.setBlendFunc(this.blendFunc.src,this.blendFunc.dst,this.blendFunc.srcAlpha,this.blendFunc.dstAlpha),this.gl.renderer.setBlendEquation(this.blendEquation.modeRGB,this.blendEquation.modeAlpha)}use({flipFaces:t=!1}={}){let e=-1;this.gl.renderer.state.currentProgram===this.id||(this.gl.useProgram(this.program),this.gl.renderer.state.currentProgram=this.id),this.uniformLocations.forEach((n,s)=>{let a=s.uniformName,o=this.uniforms[a];if(s.isStruct&&(o=o[s.structProperty],a+=`.${s.structProperty}`),s.isStructArray&&(o=o[s.structIndex][s.structProperty],a+=`[${s.structIndex}].${s.structProperty}`),!o)return Si(`Active uniform ${a} has not been supplied`);if(o&&o.value===void 0)return Si(`${a} uniform is missing a value parameter`);if(o.value.texture)return e=e+1,o.value.update(e),Se(this.gl,s.type,n,e);if(o.value.length&&o.value[0].texture){let l=[];return o.value.forEach(c=>{e=e+1,c.update(e),l.push(e)}),Se(this.gl,s.type,n,l)}Se(this.gl,s.type,n,o.value)}),this.applyState(),t&&this.gl.renderer.setFrontFace(this.frontFace===this.gl.CCW?this.gl.CW:this.gl.CCW)}remove(){this.gl.deleteProgram(this.program)}};function Se(i,t,e,r){r=r.length?Cn(r):r;let n=i.renderer.state.uniformLocations.get(e);if(r.length)if(n===void 0||n.length!==r.length)i.renderer.state.uniformLocations.set(e,r.slice(0));else{if(Rn(n,r))return;n.set?n.set(r):On(n,r),i.renderer.state.uniformLocations.set(e,n)}else{if(n===r)return;i.renderer.state.uniformLocations.set(e,r)}switch(t){case 5126:return r.length?i.uniform1fv(e,r):i.uniform1f(e,r);case 35664:return i.uniform2fv(e,r);case 35665:return i.uniform3fv(e,r);case 35666:return i.uniform4fv(e,r);case 35670:case 5124:case 35678:case 35680:return r.length?i.uniform1iv(e,r):i.uniform1i(e,r);case 35671:case 35667:return i.uniform2iv(e,r);case 35672:case 35668:return i.uniform3iv(e,r);case 35673:case 35669:return i.uniform4iv(e,r);case 35674:return i.uniformMatrix2fv(e,!1,r);case 35675:return i.uniformMatrix3fv(e,!1,r);case 35676:return i.uniformMatrix4fv(e,!1,r)}}function Ti(i){let t=i.split(`
`);for(let e=0;e<t.length;e++)t[e]=e+1+": "+t[e];return t.join(`
`)}function Cn(i){let t=i.length,e=i[0].length;if(e===void 0)return i;let r=t*e,n=wi[r];n||(wi[r]=n=new Float32Array(r));for(let s=0;s<t;s++)n.set(i[s],s*e);return n}function Rn(i,t){if(i.length!==t.length)return!1;for(let e=0,r=i.length;e<r;e++)if(i[e]!==t[e])return!1;return!0}function On(i,t){for(let e=0,r=i.length;e<r;e++)i[e]=t[e]}var Ae=0;function Si(i){Ae>100||(console.warn(i),Ae++,Ae>100&&console.warn("More than 100 program warnings - stopping logs."))}var Ce=new O,Ln=1,Rt=class{constructor({canvas:t=document.createElement("canvas"),width:e=300,height:r=150,dpr:n=1,alpha:s=!1,depth:a=!0,stencil:o=!1,antialias:l=!1,premultipliedAlpha:c=!1,preserveDrawingBuffer:u=!1,powerPreference:h="default",autoClear:f=!0,webgl:m=2}={}){let d={alpha:s,depth:a,stencil:o,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h};this.dpr=n,this.alpha=s,this.color=!0,this.depth=a,this.stencil=o,this.premultipliedAlpha=c,this.autoClear=f,this.id=Ln++,m===2&&(this.gl=t.getContext("webgl2",d)),this.isWebgl2=!!this.gl,this.gl||(this.gl=t.getContext("webgl",d)),this.gl||console.error("unable to create webgl context"),this.gl.renderer=this,this.setSize(e,r),this.state={},this.state.blendFunc={src:this.gl.ONE,dst:this.gl.ZERO},this.state.blendEquation={modeRGB:this.gl.FUNC_ADD},this.state.cullFace=null,this.state.frontFace=this.gl.CCW,this.state.depthMask=!0,this.state.depthFunc=this.gl.LESS,this.state.premultiplyAlpha=!1,this.state.flipY=!1,this.state.unpackAlignment=4,this.state.framebuffer=null,this.state.viewport={x:0,y:0,width:null,height:null},this.state.textureUnits=[],this.state.activeTextureUnit=0,this.state.boundBuffer=null,this.state.uniformLocations=new Map,this.state.currentProgram=null,this.extensions={},this.isWebgl2?(this.getExtension("EXT_color_buffer_float"),this.getExtension("OES_texture_float_linear")):(this.getExtension("OES_texture_float"),this.getExtension("OES_texture_float_linear"),this.getExtension("OES_texture_half_float"),this.getExtension("OES_texture_half_float_linear"),this.getExtension("OES_element_index_uint"),this.getExtension("OES_standard_derivatives"),this.getExtension("EXT_sRGB"),this.getExtension("WEBGL_depth_texture"),this.getExtension("WEBGL_draw_buffers")),this.getExtension("WEBGL_compressed_texture_astc"),this.getExtension("EXT_texture_compression_bptc"),this.getExtension("WEBGL_compressed_texture_s3tc"),this.getExtension("WEBGL_compressed_texture_etc1"),this.getExtension("WEBGL_compressed_texture_pvrtc"),this.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),this.vertexAttribDivisor=this.getExtension("ANGLE_instanced_arrays","vertexAttribDivisor","vertexAttribDivisorANGLE"),this.drawArraysInstanced=this.getExtension("ANGLE_instanced_arrays","drawArraysInstanced","drawArraysInstancedANGLE"),this.drawElementsInstanced=this.getExtension("ANGLE_instanced_arrays","drawElementsInstanced","drawElementsInstancedANGLE"),this.createVertexArray=this.getExtension("OES_vertex_array_object","createVertexArray","createVertexArrayOES"),this.bindVertexArray=this.getExtension("OES_vertex_array_object","bindVertexArray","bindVertexArrayOES"),this.deleteVertexArray=this.getExtension("OES_vertex_array_object","deleteVertexArray","deleteVertexArrayOES"),this.drawBuffers=this.getExtension("WEBGL_draw_buffers","drawBuffers","drawBuffersWEBGL"),this.parameters={},this.parameters.maxTextureUnits=this.gl.getParameter(this.gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS),this.parameters.maxAnisotropy=this.getExtension("EXT_texture_filter_anisotropic")?this.gl.getParameter(this.getExtension("EXT_texture_filter_anisotropic").MAX_TEXTURE_MAX_ANISOTROPY_EXT):0}setSize(t,e){this.width=t,this.height=e,this.gl.canvas.width=t*this.dpr,this.gl.canvas.height=e*this.dpr,Object.assign(this.gl.canvas.style,{width:t+"px",height:e+"px"})}setViewport(t,e,r=0,n=0){this.state.viewport.width===t&&this.state.viewport.height===e||(this.state.viewport.width=t,this.state.viewport.height=e,this.state.viewport.x=r,this.state.viewport.y=n,this.gl.viewport(r,n,t,e))}setScissor(t,e,r=0,n=0){this.gl.scissor(r,n,t,e)}enable(t){this.state[t]!==!0&&(this.gl.enable(t),this.state[t]=!0)}disable(t){this.state[t]!==!1&&(this.gl.disable(t),this.state[t]=!1)}setBlendFunc(t,e,r,n){this.state.blendFunc.src===t&&this.state.blendFunc.dst===e&&this.state.blendFunc.srcAlpha===r&&this.state.blendFunc.dstAlpha===n||(this.state.blendFunc.src=t,this.state.blendFunc.dst=e,this.state.blendFunc.srcAlpha=r,this.state.blendFunc.dstAlpha=n,r!==void 0?this.gl.blendFuncSeparate(t,e,r,n):this.gl.blendFunc(t,e))}setBlendEquation(t,e){t=t||this.gl.FUNC_ADD,!(this.state.blendEquation.modeRGB===t&&this.state.blendEquation.modeAlpha===e)&&(this.state.blendEquation.modeRGB=t,this.state.blendEquation.modeAlpha=e,e!==void 0?this.gl.blendEquationSeparate(t,e):this.gl.blendEquation(t))}setCullFace(t){this.state.cullFace!==t&&(this.state.cullFace=t,this.gl.cullFace(t))}setFrontFace(t){this.state.frontFace!==t&&(this.state.frontFace=t,this.gl.frontFace(t))}setDepthMask(t){this.state.depthMask!==t&&(this.state.depthMask=t,this.gl.depthMask(t))}setDepthFunc(t){this.state.depthFunc!==t&&(this.state.depthFunc=t,this.gl.depthFunc(t))}activeTexture(t){this.state.activeTextureUnit!==t&&(this.state.activeTextureUnit=t,this.gl.activeTexture(this.gl.TEXTURE0+t))}bindFramebuffer({target:t=this.gl.FRAMEBUFFER,buffer:e=null}={}){this.state.framebuffer!==e&&(this.state.framebuffer=e,this.gl.bindFramebuffer(t,e))}getExtension(t,e,r){return e&&this.gl[e]?this.gl[e].bind(this.gl):(this.extensions[t]||(this.extensions[t]=this.gl.getExtension(t)),e?this.extensions[t]?this.extensions[t][r].bind(this.extensions[t]):null:this.extensions[t])}sortOpaque(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:t.zDepth!==e.zDepth?t.zDepth-e.zDepth:e.id-t.id}sortTransparent(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.zDepth!==e.zDepth?e.zDepth-t.zDepth:e.id-t.id}sortUI(t,e){return t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.program.id!==e.program.id?t.program.id-e.program.id:e.id-t.id}getRenderList({scene:t,camera:e,frustumCull:r,sort:n}){let s=[];if(e&&r&&e.updateFrustum(),t.traverse(a=>{if(!a.visible)return!0;!a.draw||r&&a.frustumCulled&&e&&!e.frustumIntersectsMesh(a)||s.push(a)}),n){let a=[],o=[],l=[];s.forEach(c=>{c.program.transparent?c.program.depthTest?o.push(c):l.push(c):a.push(c),c.zDepth=0,!(c.renderOrder!==0||!c.program.depthTest||!e)&&(c.worldMatrix.getTranslation(Ce),Ce.applyMatrix4(e.projectionViewMatrix),c.zDepth=Ce.z)}),a.sort(this.sortOpaque),o.sort(this.sortTransparent),l.sort(this.sortUI),s=a.concat(o,l)}return s}render({scene:t,camera:e,target:r=null,update:n=!0,sort:s=!0,frustumCull:a=!0,clear:o}){r===null?(this.bindFramebuffer(),this.setViewport(this.width*this.dpr,this.height*this.dpr)):(this.bindFramebuffer(r),this.setViewport(r.width,r.height)),(o||this.autoClear&&o!==!1)&&(this.depth&&(!r||r.depth)&&(this.enable(this.gl.DEPTH_TEST),this.setDepthMask(!0)),this.gl.clear((this.color?this.gl.COLOR_BUFFER_BIT:0)|(this.depth?this.gl.DEPTH_BUFFER_BIT:0)|(this.stencil?this.gl.STENCIL_BUFFER_BIT:0))),n&&t.updateMatrixWorld(),e&&e.updateMatrixWorld(),this.getRenderList({scene:t,camera:e,frustumCull:a,sort:s}).forEach(c=>{c.draw({camera:e})})}};function Ai(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i}function Ci(i,t,e,r,n){return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i}function Ri(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=e*e+r*r+n*n+s*s;return a>0&&(a=1/Math.sqrt(a)),i[0]=e*a,i[1]=r*a,i[2]=n*a,i[3]=s*a,i}function Oi(i,t){return i[0]*t[0]+i[1]*t[1]+i[2]*t[2]+i[3]*t[3]}function Li(i){return i[0]=0,i[1]=0,i[2]=0,i[3]=1,i}function Fi(i,t,e){e=e*.5;let r=Math.sin(e);return i[0]=r*t[0],i[1]=r*t[1],i[2]=r*t[2],i[3]=Math.cos(e),i}function Re(i,t,e){let r=t[0],n=t[1],s=t[2],a=t[3],o=e[0],l=e[1],c=e[2],u=e[3];return i[0]=r*u+a*o+n*c-s*l,i[1]=n*u+a*l+s*o-r*c,i[2]=s*u+a*c+r*l-n*o,i[3]=a*u-r*o-n*l-s*c,i}function Di(i,t,e){e*=.5;let r=t[0],n=t[1],s=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return i[0]=r*l+a*o,i[1]=n*l+s*o,i[2]=s*l-n*o,i[3]=a*l-r*o,i}function Pi(i,t,e){e*=.5;let r=t[0],n=t[1],s=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return i[0]=r*l-s*o,i[1]=n*l+a*o,i[2]=s*l+r*o,i[3]=a*l-n*o,i}function Ni(i,t,e){e*=.5;let r=t[0],n=t[1],s=t[2],a=t[3],o=Math.sin(e),l=Math.cos(e);return i[0]=r*l+n*o,i[1]=n*l-r*o,i[2]=s*l+a*o,i[3]=a*l-s*o,i}function Ii(i,t,e,r){let n=t[0],s=t[1],a=t[2],o=t[3],l=e[0],c=e[1],u=e[2],h=e[3],f,m,d,g,p;return m=n*l+s*c+a*u+o*h,m<0&&(m=-m,l=-l,c=-c,u=-u,h=-h),1-m>1e-6?(f=Math.acos(m),d=Math.sin(f),g=Math.sin((1-r)*f)/d,p=Math.sin(r*f)/d):(g=1-r,p=r),i[0]=g*n+p*l,i[1]=g*s+p*c,i[2]=g*a+p*u,i[3]=g*o+p*h,i}function Bi(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=e*e+r*r+n*n+s*s,o=a?1/a:0;return i[0]=-e*o,i[1]=-r*o,i[2]=-n*o,i[3]=s*o,i}function zi(i,t){return i[0]=-t[0],i[1]=-t[1],i[2]=-t[2],i[3]=t[3],i}function Ui(i,t){let e=t[0]+t[4]+t[8],r;if(e>0)r=Math.sqrt(e+1),i[3]=.5*r,r=.5/r,i[0]=(t[5]-t[7])*r,i[1]=(t[6]-t[2])*r,i[2]=(t[1]-t[3])*r;else{let n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);let s=(n+1)%3,a=(n+2)%3;r=Math.sqrt(t[n*3+n]-t[s*3+s]-t[a*3+a]+1),i[n]=.5*r,r=.5/r,i[3]=(t[s*3+a]-t[a*3+s])*r,i[s]=(t[s*3+n]+t[n*3+s])*r,i[a]=(t[a*3+n]+t[n*3+a])*r}return i}function Vi(i,t,e="YXZ"){let r=Math.sin(t[0]*.5),n=Math.cos(t[0]*.5),s=Math.sin(t[1]*.5),a=Math.cos(t[1]*.5),o=Math.sin(t[2]*.5),l=Math.cos(t[2]*.5);return e==="XYZ"?(i[0]=r*a*l+n*s*o,i[1]=n*s*l-r*a*o,i[2]=n*a*o+r*s*l,i[3]=n*a*l-r*s*o):e==="YXZ"?(i[0]=r*a*l+n*s*o,i[1]=n*s*l-r*a*o,i[2]=n*a*o-r*s*l,i[3]=n*a*l+r*s*o):e==="ZXY"?(i[0]=r*a*l-n*s*o,i[1]=n*s*l+r*a*o,i[2]=n*a*o+r*s*l,i[3]=n*a*l-r*s*o):e==="ZYX"?(i[0]=r*a*l-n*s*o,i[1]=n*s*l+r*a*o,i[2]=n*a*o-r*s*l,i[3]=n*a*l+r*s*o):e==="YZX"?(i[0]=r*a*l+n*s*o,i[1]=n*s*l+r*a*o,i[2]=n*a*o-r*s*l,i[3]=n*a*l-r*s*o):e==="XZY"&&(i[0]=r*a*l-n*s*o,i[1]=n*s*l-r*a*o,i[2]=n*a*o+r*s*l,i[3]=n*a*l+r*s*o),i}var ki=Ai,Gi=Ci;var Hi=Oi;var Xi=Ri;var ot=class extends Array{constructor(t=0,e=0,r=0,n=1){return super(t,e,r,n),this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}get w(){return this[3]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set w(t){this[3]=t,this.onChange()}identity(){return Li(this),this.onChange(),this}set(t,e,r,n){return t.length?this.copy(t):(Gi(this,t,e,r,n),this.onChange(),this)}rotateX(t){return Di(this,this,t),this.onChange(),this}rotateY(t){return Pi(this,this,t),this.onChange(),this}rotateZ(t){return Ni(this,this,t),this.onChange(),this}inverse(t=this){return Bi(this,t),this.onChange(),this}conjugate(t=this){return zi(this,t),this.onChange(),this}copy(t){return ki(this,t),this.onChange(),this}normalize(t=this){return Xi(this,t),this.onChange(),this}multiply(t,e){return e?Re(this,t,e):Re(this,this,t),this.onChange(),this}dot(t){return Hi(this,t)}fromMatrix3(t){return Ui(this,t),this.onChange(),this}fromEuler(t){return Vi(this,t,t.order),this}fromAxisAngle(t,e){return Fi(this,t,e),this}slerp(t,e){return Ii(this,this,t,e),this}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t}};function $i(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i[9]=t[9],i[10]=t[10],i[11]=t[11],i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i}function qi(i,t,e,r,n,s,a,o,l,c,u,h,f,m,d,g,p){return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i[4]=s,i[5]=a,i[6]=o,i[7]=l,i[8]=c,i[9]=u,i[10]=h,i[11]=f,i[12]=m,i[13]=d,i[14]=g,i[15]=p,i}function Wi(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=1,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=1,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function ji(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],d=t[12],g=t[13],p=t[14],v=t[15],E=e*o-r*a,x=e*l-n*a,_=e*c-s*a,b=r*l-n*o,w=r*c-s*o,R=n*c-s*l,S=u*g-h*d,N=u*p-f*d,D=u*v-m*d,P=h*p-f*g,L=h*v-m*g,B=f*v-m*p,F=E*B-x*L+_*P+b*D-w*N+R*S;return F?(F=1/F,i[0]=(o*B-l*L+c*P)*F,i[1]=(n*L-r*B-s*P)*F,i[2]=(g*R-p*w+v*b)*F,i[3]=(f*w-h*R-m*b)*F,i[4]=(l*D-a*B-c*N)*F,i[5]=(e*B-n*D+s*N)*F,i[6]=(p*_-d*R-v*x)*F,i[7]=(u*R-f*_+m*x)*F,i[8]=(a*L-o*D+c*S)*F,i[9]=(r*D-e*L-s*S)*F,i[10]=(d*w-g*_+v*E)*F,i[11]=(h*_-u*w-m*E)*F,i[12]=(o*N-a*P-l*S)*F,i[13]=(e*P-r*N+n*S)*F,i[14]=(g*x-d*b-p*E)*F,i[15]=(u*b-h*x+f*E)*F,i):null}function Yi(i){let t=i[0],e=i[1],r=i[2],n=i[3],s=i[4],a=i[5],o=i[6],l=i[7],c=i[8],u=i[9],h=i[10],f=i[11],m=i[12],d=i[13],g=i[14],p=i[15],v=t*a-e*s,E=t*o-r*s,x=t*l-n*s,_=e*o-r*a,b=e*l-n*a,w=r*l-n*o,R=c*d-u*m,S=c*g-h*m,N=c*p-f*m,D=u*g-h*d,P=u*p-f*d,L=h*p-f*g;return v*L-E*P+x*D+_*N-b*S+w*R}function Oe(i,t,e){let r=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=t[9],m=t[10],d=t[11],g=t[12],p=t[13],v=t[14],E=t[15],x=e[0],_=e[1],b=e[2],w=e[3];return i[0]=x*r+_*o+b*h+w*g,i[1]=x*n+_*l+b*f+w*p,i[2]=x*s+_*c+b*m+w*v,i[3]=x*a+_*u+b*d+w*E,x=e[4],_=e[5],b=e[6],w=e[7],i[4]=x*r+_*o+b*h+w*g,i[5]=x*n+_*l+b*f+w*p,i[6]=x*s+_*c+b*m+w*v,i[7]=x*a+_*u+b*d+w*E,x=e[8],_=e[9],b=e[10],w=e[11],i[8]=x*r+_*o+b*h+w*g,i[9]=x*n+_*l+b*f+w*p,i[10]=x*s+_*c+b*m+w*v,i[11]=x*a+_*u+b*d+w*E,x=e[12],_=e[13],b=e[14],w=e[15],i[12]=x*r+_*o+b*h+w*g,i[13]=x*n+_*l+b*f+w*p,i[14]=x*s+_*c+b*m+w*v,i[15]=x*a+_*u+b*d+w*E,i}function Ki(i,t,e){let r=e[0],n=e[1],s=e[2],a,o,l,c,u,h,f,m,d,g,p,v;return t===i?(i[12]=t[0]*r+t[4]*n+t[8]*s+t[12],i[13]=t[1]*r+t[5]*n+t[9]*s+t[13],i[14]=t[2]*r+t[6]*n+t[10]*s+t[14],i[15]=t[3]*r+t[7]*n+t[11]*s+t[15]):(a=t[0],o=t[1],l=t[2],c=t[3],u=t[4],h=t[5],f=t[6],m=t[7],d=t[8],g=t[9],p=t[10],v=t[11],i[0]=a,i[1]=o,i[2]=l,i[3]=c,i[4]=u,i[5]=h,i[6]=f,i[7]=m,i[8]=d,i[9]=g,i[10]=p,i[11]=v,i[12]=a*r+u*n+d*s+t[12],i[13]=o*r+h*n+g*s+t[13],i[14]=l*r+f*n+p*s+t[14],i[15]=c*r+m*n+v*s+t[15]),i}function Qi(i,t,e){let r=e[0],n=e[1],s=e[2];return i[0]=t[0]*r,i[1]=t[1]*r,i[2]=t[2]*r,i[3]=t[3]*r,i[4]=t[4]*n,i[5]=t[5]*n,i[6]=t[6]*n,i[7]=t[7]*n,i[8]=t[8]*s,i[9]=t[9]*s,i[10]=t[10]*s,i[11]=t[11]*s,i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15],i}function Zi(i,t,e,r){let n=r[0],s=r[1],a=r[2],o=Math.hypot(n,s,a),l,c,u,h,f,m,d,g,p,v,E,x,_,b,w,R,S,N,D,P,L,B,F,Y;return Math.abs(o)<1e-6?null:(o=1/o,n*=o,s*=o,a*=o,l=Math.sin(e),c=Math.cos(e),u=1-c,h=t[0],f=t[1],m=t[2],d=t[3],g=t[4],p=t[5],v=t[6],E=t[7],x=t[8],_=t[9],b=t[10],w=t[11],R=n*n*u+c,S=s*n*u+a*l,N=a*n*u-s*l,D=n*s*u-a*l,P=s*s*u+c,L=a*s*u+n*l,B=n*a*u+s*l,F=s*a*u-n*l,Y=a*a*u+c,i[0]=h*R+g*S+x*N,i[1]=f*R+p*S+_*N,i[2]=m*R+v*S+b*N,i[3]=d*R+E*S+w*N,i[4]=h*D+g*P+x*L,i[5]=f*D+p*P+_*L,i[6]=m*D+v*P+b*L,i[7]=d*D+E*P+w*L,i[8]=h*B+g*F+x*Y,i[9]=f*B+p*F+_*Y,i[10]=m*B+v*F+b*Y,i[11]=d*B+E*F+w*Y,t!==i&&(i[12]=t[12],i[13]=t[13],i[14]=t[14],i[15]=t[15]),i)}function Ji(i,t){return i[0]=t[12],i[1]=t[13],i[2]=t[14],i}function Le(i,t){let e=t[0],r=t[1],n=t[2],s=t[4],a=t[5],o=t[6],l=t[8],c=t[9],u=t[10];return i[0]=Math.hypot(e,r,n),i[1]=Math.hypot(s,a,o),i[2]=Math.hypot(l,c,u),i}function tr(i){let t=i[0],e=i[1],r=i[2],n=i[4],s=i[5],a=i[6],o=i[8],l=i[9],c=i[10],u=t*t+e*e+r*r,h=n*n+s*s+a*a,f=o*o+l*l+c*c;return Math.sqrt(Math.max(u,h,f))}var er=function(){let i=[0,0,0];return function(t,e){let r=i;Le(r,e);let n=1/r[0],s=1/r[1],a=1/r[2],o=e[0]*n,l=e[1]*s,c=e[2]*a,u=e[4]*n,h=e[5]*s,f=e[6]*a,m=e[8]*n,d=e[9]*s,g=e[10]*a,p=o+h+g,v=0;return p>0?(v=Math.sqrt(p+1)*2,t[3]=.25*v,t[0]=(f-d)/v,t[1]=(m-c)/v,t[2]=(l-u)/v):o>h&&o>g?(v=Math.sqrt(1+o-h-g)*2,t[3]=(f-d)/v,t[0]=.25*v,t[1]=(l+u)/v,t[2]=(m+c)/v):h>g?(v=Math.sqrt(1+h-o-g)*2,t[3]=(m-c)/v,t[0]=(l+u)/v,t[1]=.25*v,t[2]=(f+d)/v):(v=Math.sqrt(1+g-o-h)*2,t[3]=(l-u)/v,t[0]=(m+c)/v,t[1]=(f+d)/v,t[2]=.25*v),t}}();function ir(i,t,e,r){let n=t[0],s=t[1],a=t[2],o=t[3],l=n+n,c=s+s,u=a+a,h=n*l,f=n*c,m=n*u,d=s*c,g=s*u,p=a*u,v=o*l,E=o*c,x=o*u,_=r[0],b=r[1],w=r[2];return i[0]=(1-(d+p))*_,i[1]=(f+x)*_,i[2]=(m-E)*_,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(h+p))*b,i[6]=(g+v)*b,i[7]=0,i[8]=(m+E)*w,i[9]=(g-v)*w,i[10]=(1-(h+d))*w,i[11]=0,i[12]=e[0],i[13]=e[1],i[14]=e[2],i[15]=1,i}function rr(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=e+e,o=r+r,l=n+n,c=e*a,u=r*a,h=r*o,f=n*a,m=n*o,d=n*l,g=s*a,p=s*o,v=s*l;return i[0]=1-h-d,i[1]=u+v,i[2]=f-p,i[3]=0,i[4]=u-v,i[5]=1-c-d,i[6]=m+g,i[7]=0,i[8]=f+p,i[9]=m-g,i[10]=1-c-h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,i}function nr(i,t,e,r,n){let s=1/Math.tan(t/2),a=1/(r-n);return i[0]=s/e,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=s,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(n+r)*a,i[11]=-1,i[12]=0,i[13]=0,i[14]=2*n*r*a,i[15]=0,i}function sr(i,t,e,r,n,s,a){let o=1/(t-e),l=1/(r-n),c=1/(s-a);return i[0]=-2*o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=-2*l,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=2*c,i[11]=0,i[12]=(t+e)*o,i[13]=(n+r)*l,i[14]=(a+s)*c,i[15]=1,i}function ar(i,t,e,r){let n=t[0],s=t[1],a=t[2],o=r[0],l=r[1],c=r[2],u=n-e[0],h=s-e[1],f=a-e[2],m=u*u+h*h+f*f;m===0?f=1:(m=1/Math.sqrt(m),u*=m,h*=m,f*=m);let d=l*f-c*h,g=c*u-o*f,p=o*h-l*u;return m=d*d+g*g+p*p,m===0&&(c?o+=1e-6:l?c+=1e-6:l+=1e-6,d=l*f-c*h,g=c*u-o*f,p=o*h-l*u,m=d*d+g*g+p*p),m=1/Math.sqrt(m),d*=m,g*=m,p*=m,i[0]=d,i[1]=g,i[2]=p,i[3]=0,i[4]=h*p-f*g,i[5]=f*d-u*p,i[6]=u*g-h*d,i[7]=0,i[8]=u,i[9]=h,i[10]=f,i[11]=0,i[12]=n,i[13]=s,i[14]=a,i[15]=1,i}var $=class extends Array{constructor(t=1,e=0,r=0,n=0,s=0,a=1,o=0,l=0,c=0,u=0,h=1,f=0,m=0,d=0,g=0,p=1){return super(t,e,r,n,s,a,o,l,c,u,h,f,m,d,g,p),this}get x(){return this[12]}get y(){return this[13]}get z(){return this[14]}get w(){return this[15]}set x(t){this[12]=t}set y(t){this[13]=t}set z(t){this[14]=t}set w(t){this[15]=t}set(t,e,r,n,s,a,o,l,c,u,h,f,m,d,g,p){return t.length?this.copy(t):(qi(this,t,e,r,n,s,a,o,l,c,u,h,f,m,d,g,p),this)}translate(t,e=this){return Ki(this,e,t),this}rotate(t,e,r=this){return Zi(this,r,t,e),this}scale(t,e=this){return Qi(this,e,typeof t=="number"?[t,t,t]:t),this}multiply(t,e){return e?Oe(this,t,e):Oe(this,this,t),this}identity(){return Wi(this),this}copy(t){return $i(this,t),this}fromPerspective({fov:t,aspect:e,near:r,far:n}={}){return nr(this,t,e,r,n),this}fromOrthogonal({left:t,right:e,bottom:r,top:n,near:s,far:a}){return sr(this,t,e,r,n,s,a),this}fromQuaternion(t){return rr(this,t),this}setPosition(t){return this.x=t[0],this.y=t[1],this.z=t[2],this}inverse(t=this){return ji(this,t),this}compose(t,e,r){return ir(this,t,e,r),this}getRotation(t){return er(t,this),this}getTranslation(t){return Ji(t,this),this}getScaling(t){return Le(t,this),this}getMaxScaleOnAxis(){return tr(this)}lookAt(t,e,r){return ar(this,t,e,r),this}determinant(){return Yi(this)}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this[2]=t[e+2],this[3]=t[e+3],this[4]=t[e+4],this[5]=t[e+5],this[6]=t[e+6],this[7]=t[e+7],this[8]=t[e+8],this[9]=t[e+9],this[10]=t[e+10],this[11]=t[e+11],this[12]=t[e+12],this[13]=t[e+13],this[14]=t[e+14],this[15]=t[e+15],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t[e+3]=this[3],t[e+4]=this[4],t[e+5]=this[5],t[e+6]=this[6],t[e+7]=this[7],t[e+8]=this[8],t[e+9]=this[9],t[e+10]=this[10],t[e+11]=this[11],t[e+12]=this[12],t[e+13]=this[13],t[e+14]=this[14],t[e+15]=this[15],t}};function or(i,t,e="YXZ"){return e==="XYZ"?(i[1]=Math.asin(Math.min(Math.max(t[8],-1),1)),Math.abs(t[8])<.99999?(i[0]=Math.atan2(-t[9],t[10]),i[2]=Math.atan2(-t[4],t[0])):(i[0]=Math.atan2(t[6],t[5]),i[2]=0)):e==="YXZ"?(i[0]=Math.asin(-Math.min(Math.max(t[9],-1),1)),Math.abs(t[9])<.99999?(i[1]=Math.atan2(t[8],t[10]),i[2]=Math.atan2(t[1],t[5])):(i[1]=Math.atan2(-t[2],t[0]),i[2]=0)):e==="ZXY"?(i[0]=Math.asin(Math.min(Math.max(t[6],-1),1)),Math.abs(t[6])<.99999?(i[1]=Math.atan2(-t[2],t[10]),i[2]=Math.atan2(-t[4],t[5])):(i[1]=0,i[2]=Math.atan2(t[1],t[0]))):e==="ZYX"?(i[1]=Math.asin(-Math.min(Math.max(t[2],-1),1)),Math.abs(t[2])<.99999?(i[0]=Math.atan2(t[6],t[10]),i[2]=Math.atan2(t[1],t[0])):(i[0]=0,i[2]=Math.atan2(-t[4],t[5]))):e==="YZX"?(i[2]=Math.asin(Math.min(Math.max(t[1],-1),1)),Math.abs(t[1])<.99999?(i[0]=Math.atan2(-t[9],t[5]),i[1]=Math.atan2(-t[2],t[0])):(i[0]=0,i[1]=Math.atan2(t[8],t[10]))):e==="XZY"&&(i[2]=Math.asin(-Math.min(Math.max(t[4],-1),1)),Math.abs(t[4])<.99999?(i[0]=Math.atan2(t[6],t[5]),i[1]=Math.atan2(t[8],t[0])):(i[0]=Math.atan2(-t[9],t[10]),i[1]=0)),i}var lr=new $,Wt=class extends Array{constructor(t=0,e=t,r=t,n="YXZ"){return super(t,e,r),this.order=n,this.onChange=()=>{},this}get x(){return this[0]}get y(){return this[1]}get z(){return this[2]}set x(t){this[0]=t,this.onChange()}set y(t){this[1]=t,this.onChange()}set z(t){this[2]=t,this.onChange()}set(t,e=t,r=t){return t.length?this.copy(t):(this[0]=t,this[1]=e,this[2]=r,this.onChange(),this)}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this.onChange(),this}reorder(t){return this.order=t,this.onChange(),this}fromRotationMatrix(t,e=this.order){return or(this,t,e),this}fromQuaternion(t,e=this.order){return lr.fromQuaternion(t),this.fromRotationMatrix(lr,e)}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t[e+2]=this[2],t}};var k=class{constructor(){this.parent=null,this.children=[],this.visible=!0,this.matrix=new $,this.worldMatrix=new $,this.matrixAutoUpdate=!0,this.position=new O,this.quaternion=new ot,this.scale=new O(1),this.rotation=new Wt,this.up=new O(0,1,0),this.rotation.onChange=()=>this.quaternion.fromEuler(this.rotation),this.quaternion.onChange=()=>this.rotation.fromQuaternion(this.quaternion)}setParent(t,e=!0){this.parent&&t!==this.parent&&this.parent.removeChild(this,!1),this.parent=t,e&&t&&t.addChild(this,!1)}addChild(t,e=!0){~this.children.indexOf(t)||this.children.push(t),e&&t.setParent(this,!1)}removeChild(t,e=!0){~this.children.indexOf(t)&&this.children.splice(this.children.indexOf(t),1),e&&t.setParent(null,!1)}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.worldMatrixNeedsUpdate||t)&&(this.parent===null?this.worldMatrix.copy(this.matrix):this.worldMatrix.multiply(this.parent.worldMatrix,this.matrix),this.worldMatrixNeedsUpdate=!1,t=!0);for(let e=0,r=this.children.length;e<r;e++)this.children[e].updateMatrixWorld(t)}updateMatrix(){this.matrix.compose(this.quaternion,this.position,this.scale),this.worldMatrixNeedsUpdate=!0}traverse(t){if(!t(this))for(let e=0,r=this.children.length;e<r;e++)this.children[e].traverse(t)}decompose(){this.matrix.getTranslation(this.position),this.matrix.getRotation(this.quaternion),this.matrix.getScaling(this.scale),this.rotation.fromQuaternion(this.quaternion)}lookAt(t,e=!1){e?this.matrix.lookAt(this.position,t,this.up):this.matrix.lookAt(t,this.position,this.up),this.matrix.getRotation(this.quaternion),this.rotation.fromQuaternion(this.quaternion)}};var In=new $,Bn=new O,zn=new O,Ot=class extends k{constructor(t,{near:e=.1,far:r=100,fov:n=45,aspect:s=1,left:a,right:o,bottom:l,top:c,zoom:u=1}={}){super(),Object.assign(this,{near:e,far:r,fov:n,aspect:s,left:a,right:o,bottom:l,top:c,zoom:u}),this.projectionMatrix=new $,this.viewMatrix=new $,this.projectionViewMatrix=new $,this.worldPosition=new O,this.type=a||o?"orthographic":"perspective",this.type==="orthographic"?this.orthographic():this.perspective()}perspective({near:t=this.near,far:e=this.far,fov:r=this.fov,aspect:n=this.aspect}={}){return Object.assign(this,{near:t,far:e,fov:r,aspect:n}),this.projectionMatrix.fromPerspective({fov:r*(Math.PI/180),aspect:n,near:t,far:e}),this.type="perspective",this}orthographic({near:t=this.near,far:e=this.far,left:r=this.left,right:n=this.right,bottom:s=this.bottom,top:a=this.top,zoom:o=this.zoom}={}){return Object.assign(this,{near:t,far:e,left:r,right:n,bottom:s,top:a,zoom:o}),r/=o,n/=o,s/=o,a/=o,this.projectionMatrix.fromOrthogonal({left:r,right:n,bottom:s,top:a,near:t,far:e}),this.type="orthographic",this}updateMatrixWorld(){return super.updateMatrixWorld(),this.viewMatrix.inverse(this.worldMatrix),this.worldMatrix.getTranslation(this.worldPosition),this.projectionViewMatrix.multiply(this.projectionMatrix,this.viewMatrix),this}lookAt(t){return super.lookAt(t,!0),this}project(t){return t.applyMatrix4(this.viewMatrix),t.applyMatrix4(this.projectionMatrix),this}unproject(t){return t.applyMatrix4(In.inverse(this.projectionMatrix)),t.applyMatrix4(this.worldMatrix),this}updateFrustum(){this.frustum||(this.frustum=[new O,new O,new O,new O,new O,new O]);let t=this.projectionViewMatrix;this.frustum[0].set(t[3]-t[0],t[7]-t[4],t[11]-t[8]).constant=t[15]-t[12],this.frustum[1].set(t[3]+t[0],t[7]+t[4],t[11]+t[8]).constant=t[15]+t[12],this.frustum[2].set(t[3]+t[1],t[7]+t[5],t[11]+t[9]).constant=t[15]+t[13],this.frustum[3].set(t[3]-t[1],t[7]-t[5],t[11]-t[9]).constant=t[15]-t[13],this.frustum[4].set(t[3]-t[2],t[7]-t[6],t[11]-t[10]).constant=t[15]-t[14],this.frustum[5].set(t[3]+t[2],t[7]+t[6],t[11]+t[10]).constant=t[15]+t[14];for(let e=0;e<6;e++){let r=1/this.frustum[e].distance();this.frustum[e].multiply(r),this.frustum[e].constant*=r}}frustumIntersectsMesh(t){if(!t.geometry.attributes.position||((!t.geometry.bounds||t.geometry.bounds.radius===1/0)&&t.geometry.computeBoundingSphere(),!t.geometry.bounds))return!0;let e=Bn;e.copy(t.geometry.bounds.center),e.applyMatrix4(t.worldMatrix);let r=t.geometry.bounds.radius*t.worldMatrix.getMaxScaleOnAxis();return this.frustumIntersectsSphere(e,r)}frustumIntersectsSphere(t,e){let r=zn;for(let n=0;n<6;n++){let s=this.frustum[n];if(r.copy(s).dot(t)+s.constant<-e)return!1}return!0}};function cr(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[4],i[4]=t[5],i[5]=t[6],i[6]=t[8],i[7]=t[9],i[8]=t[10],i}function ur(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=e+e,o=r+r,l=n+n,c=e*a,u=r*a,h=r*o,f=n*a,m=n*o,d=n*l,g=s*a,p=s*o,v=s*l;return i[0]=1-h-d,i[3]=u-v,i[6]=f+p,i[1]=u+v,i[4]=1-c-d,i[7]=m-g,i[2]=f-p,i[5]=m+g,i[8]=1-c-h,i}function hr(i,t){return i[0]=t[0],i[1]=t[1],i[2]=t[2],i[3]=t[3],i[4]=t[4],i[5]=t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i}function fr(i,t,e,r,n,s,a,o,l,c){return i[0]=t,i[1]=e,i[2]=r,i[3]=n,i[4]=s,i[5]=a,i[6]=o,i[7]=l,i[8]=c,i}function dr(i){return i[0]=1,i[1]=0,i[2]=0,i[3]=0,i[4]=1,i[5]=0,i[6]=0,i[7]=0,i[8]=1,i}function mr(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=u*a-o*c,f=-u*s+o*l,m=c*s-a*l,d=e*h+r*f+n*m;return d?(d=1/d,i[0]=h*d,i[1]=(-u*r+n*c)*d,i[2]=(o*r-n*a)*d,i[3]=f*d,i[4]=(u*e-n*l)*d,i[5]=(-o*e+n*s)*d,i[6]=m*d,i[7]=(-c*e+r*l)*d,i[8]=(a*e-r*s)*d,i):null}function Fe(i,t,e){let r=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=e[0],m=e[1],d=e[2],g=e[3],p=e[4],v=e[5],E=e[6],x=e[7],_=e[8];return i[0]=f*r+m*a+d*c,i[1]=f*n+m*o+d*u,i[2]=f*s+m*l+d*h,i[3]=g*r+p*a+v*c,i[4]=g*n+p*o+v*u,i[5]=g*s+p*l+v*h,i[6]=E*r+x*a+_*c,i[7]=E*n+x*o+_*u,i[8]=E*s+x*l+_*h,i}function pr(i,t,e){let r=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=e[0],m=e[1];return i[0]=r,i[1]=n,i[2]=s,i[3]=a,i[4]=o,i[5]=l,i[6]=f*r+m*a+c,i[7]=f*n+m*o+u,i[8]=f*s+m*l+h,i}function gr(i,t,e){let r=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],c=t[6],u=t[7],h=t[8],f=Math.sin(e),m=Math.cos(e);return i[0]=m*r+f*a,i[1]=m*n+f*o,i[2]=m*s+f*l,i[3]=m*a-f*r,i[4]=m*o-f*n,i[5]=m*l-f*s,i[6]=c,i[7]=u,i[8]=h,i}function vr(i,t,e){let r=e[0],n=e[1];return i[0]=r*t[0],i[1]=r*t[1],i[2]=r*t[2],i[3]=n*t[3],i[4]=n*t[4],i[5]=n*t[5],i[6]=t[6],i[7]=t[7],i[8]=t[8],i}function xr(i,t){let e=t[0],r=t[1],n=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],m=t[11],d=t[12],g=t[13],p=t[14],v=t[15],E=e*o-r*a,x=e*l-n*a,_=e*c-s*a,b=r*l-n*o,w=r*c-s*o,R=n*c-s*l,S=u*g-h*d,N=u*p-f*d,D=u*v-m*d,P=h*p-f*g,L=h*v-m*g,B=f*v-m*p,F=E*B-x*L+_*P+b*D-w*N+R*S;return F?(F=1/F,i[0]=(o*B-l*L+c*P)*F,i[1]=(l*D-a*B-c*N)*F,i[2]=(a*L-o*D+c*S)*F,i[3]=(n*L-r*B-s*P)*F,i[4]=(e*B-n*D+s*N)*F,i[5]=(r*D-e*L-s*S)*F,i[6]=(g*R-p*w+v*b)*F,i[7]=(p*_-d*R-v*x)*F,i[8]=(d*w-g*_+v*E)*F,i):null}var jt=class extends Array{constructor(t=1,e=0,r=0,n=0,s=1,a=0,o=0,l=0,c=1){return super(t,e,r,n,s,a,o,l,c),this}set(t,e,r,n,s,a,o,l,c){return t.length?this.copy(t):(fr(this,t,e,r,n,s,a,o,l,c),this)}translate(t,e=this){return pr(this,e,t),this}rotate(t,e=this){return gr(this,e,t),this}scale(t,e=this){return vr(this,e,t),this}multiply(t,e){return e?Fe(this,t,e):Fe(this,this,t),this}identity(){return dr(this),this}copy(t){return hr(this,t),this}fromMatrix4(t){return cr(this,t),this}fromQuaternion(t){return ur(this,t),this}fromBasis(t,e,r){return this.set(t[0],t[1],t[2],e[0],e[1],e[2],r[0],r[1],r[2]),this}inverse(t=this){return mr(this,t),this}getNormalMatrix(t){return xr(this,t),this}};var Vn=0,q=class extends k{constructor(t,{geometry:e,program:r,mode:n=t.TRIANGLES,frustumCulled:s=!0,renderOrder:a=0}={}){super(),t.canvas||console.error("gl not passed as first argument to Mesh"),this.gl=t,this.id=Vn++,this.geometry=e,this.program=r,this.mode=n,this.frustumCulled=s,this.renderOrder=a,this.modelViewMatrix=new $,this.normalMatrix=new jt,this.beforeRenderCallbacks=[],this.afterRenderCallbacks=[]}onBeforeRender(t){return this.beforeRenderCallbacks.push(t),this}onAfterRender(t){return this.afterRenderCallbacks.push(t),this}draw({camera:t}={}){this.beforeRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t})),t&&(this.program.uniforms.modelMatrix||Object.assign(this.program.uniforms,{modelMatrix:{value:null},viewMatrix:{value:null},modelViewMatrix:{value:null},normalMatrix:{value:null},projectionMatrix:{value:null},cameraPosition:{value:null}}),this.program.uniforms.projectionMatrix.value=t.projectionMatrix,this.program.uniforms.cameraPosition.value=t.worldPosition,this.program.uniforms.viewMatrix.value=t.viewMatrix,this.modelViewMatrix.multiply(t.viewMatrix,this.worldMatrix),this.normalMatrix.getNormalMatrix(this.modelViewMatrix),this.program.uniforms.modelMatrix.value=this.worldMatrix,this.program.uniforms.modelViewMatrix.value=this.modelViewMatrix,this.program.uniforms.normalMatrix.value=this.normalMatrix);let e=this.program.cullFace&&this.worldMatrix.determinant()<0;this.program.use({flipFaces:e}),this.geometry.draw({mode:this.mode,program:this.program}),this.afterRenderCallbacks.forEach(r=>r&&r({mesh:this,camera:t}))}};var _r=new Uint8Array(4);function br(i){return(i&i-1)===0}var kn=1,W=class{constructor(t,{image:e,target:r=t.TEXTURE_2D,type:n=t.UNSIGNED_BYTE,format:s=t.RGBA,internalFormat:a=s,wrapS:o=t.CLAMP_TO_EDGE,wrapT:l=t.CLAMP_TO_EDGE,generateMipmaps:c=!0,minFilter:u=c?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:h=t.LINEAR,premultiplyAlpha:f=!1,unpackAlignment:m=4,flipY:d=r==t.TEXTURE_2D,anisotropy:g=0,level:p=0,width:v,height:E=v}={}){this.gl=t,this.id=kn++,this.image=e,this.target=r,this.type=n,this.format=s,this.internalFormat=a,this.minFilter=u,this.magFilter=h,this.wrapS=o,this.wrapT=l,this.generateMipmaps=c,this.premultiplyAlpha=f,this.unpackAlignment=m,this.flipY=d,this.anisotropy=Math.min(g,this.gl.renderer.parameters.maxAnisotropy),this.level=p,this.width=v,this.height=E,this.texture=this.gl.createTexture(),this.store={image:null},this.glState=this.gl.renderer.state,this.state={},this.state.minFilter=this.gl.NEAREST_MIPMAP_LINEAR,this.state.magFilter=this.gl.LINEAR,this.state.wrapS=this.gl.REPEAT,this.state.wrapT=this.gl.REPEAT,this.state.anisotropy=0}bind(){this.glState.textureUnits[this.glState.activeTextureUnit]!==this.id&&(this.gl.bindTexture(this.target,this.texture),this.glState.textureUnits[this.glState.activeTextureUnit]=this.id)}update(t=0){let e=!(this.image===this.store.image&&!this.needsUpdate);if((e||this.glState.textureUnits[t]!==this.id)&&(this.gl.renderer.activeTexture(t),this.bind()),!!e){if(this.needsUpdate=!1,this.flipY!==this.glState.flipY&&(this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,this.flipY),this.glState.flipY=this.flipY),this.premultiplyAlpha!==this.glState.premultiplyAlpha&&(this.gl.pixelStorei(this.gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),this.glState.premultiplyAlpha=this.premultiplyAlpha),this.unpackAlignment!==this.glState.unpackAlignment&&(this.gl.pixelStorei(this.gl.UNPACK_ALIGNMENT,this.unpackAlignment),this.glState.unpackAlignment=this.unpackAlignment),this.minFilter!==this.state.minFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MIN_FILTER,this.minFilter),this.state.minFilter=this.minFilter),this.magFilter!==this.state.magFilter&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_MAG_FILTER,this.magFilter),this.state.magFilter=this.magFilter),this.wrapS!==this.state.wrapS&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_S,this.wrapS),this.state.wrapS=this.wrapS),this.wrapT!==this.state.wrapT&&(this.gl.texParameteri(this.target,this.gl.TEXTURE_WRAP_T,this.wrapT),this.state.wrapT=this.wrapT),this.anisotropy&&this.anisotropy!==this.state.anisotropy&&(this.gl.texParameterf(this.target,this.gl.renderer.getExtension("EXT_texture_filter_anisotropic").TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropy),this.state.anisotropy=this.anisotropy),this.image){if(this.image.width&&(this.width=this.image.width,this.height=this.image.height),this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,this.level,this.internalFormat,this.format,this.type,this.image[r]);else if(ArrayBuffer.isView(this.image))this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,this.image);else if(this.image.isCompressedTexture)for(let r=0;r<this.image.length;r++)this.gl.compressedTexImage2D(this.target,r,this.internalFormat,this.image[r].width,this.image[r].height,0,this.image[r].data);else this.gl.texImage2D(this.target,this.level,this.internalFormat,this.format,this.type,this.image);this.generateMipmaps&&(!this.gl.renderer.isWebgl2&&(!br(this.image.width)||!br(this.image.height))?(this.generateMipmaps=!1,this.wrapS=this.wrapT=this.gl.CLAMP_TO_EDGE,this.minFilter=this.gl.LINEAR):this.gl.generateMipmap(this.target)),this.onUpdate&&this.onUpdate()}else if(this.target===this.gl.TEXTURE_CUBE_MAP)for(let r=0;r<6;r++)this.gl.texImage2D(this.gl.TEXTURE_CUBE_MAP_POSITIVE_X+r,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,_r);else this.width?this.gl.texImage2D(this.target,this.level,this.internalFormat,this.width,this.height,0,this.format,this.type,null):this.gl.texImage2D(this.target,0,this.gl.RGBA,1,1,0,this.gl.RGBA,this.gl.UNSIGNED_BYTE,_r);this.store.image=this.image}}};var Lt=class{constructor(t,{width:e=t.canvas.width,height:r=t.canvas.height,target:n=t.FRAMEBUFFER,color:s=1,depth:a=!0,stencil:o=!1,depthTexture:l=!1,wrapS:c=t.CLAMP_TO_EDGE,wrapT:u=t.CLAMP_TO_EDGE,minFilter:h=t.LINEAR,magFilter:f=h,type:m=t.UNSIGNED_BYTE,format:d=t.RGBA,internalFormat:g=d,unpackAlignment:p,premultiplyAlpha:v}={}){this.gl=t,this.width=e,this.height=r,this.depth=a,this.buffer=this.gl.createFramebuffer(),this.target=n,this.gl.renderer.bindFramebuffer(this),this.textures=[];let E=[];for(let x=0;x<s;x++)this.textures.push(new W(t,{width:e,height:r,wrapS:c,wrapT:u,minFilter:h,magFilter:f,type:m,format:d,internalFormat:g,unpackAlignment:p,premultiplyAlpha:v,flipY:!1,generateMipmaps:!1})),this.textures[x].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+x,this.gl.TEXTURE_2D,this.textures[x].texture,0),E.push(this.gl.COLOR_ATTACHMENT0+x);E.length>1&&this.gl.renderer.drawBuffers(E),this.texture=this.textures[0],l&&(this.gl.renderer.isWebgl2||this.gl.renderer.getExtension("WEBGL_depth_texture"))?(this.depthTexture=new W(t,{width:e,height:r,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,format:this.gl.DEPTH_COMPONENT,internalFormat:t.renderer.isWebgl2?this.gl.DEPTH_COMPONENT16:this.gl.DEPTH_COMPONENT,type:this.gl.UNSIGNED_INT}),this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(a&&!o&&(this.depthBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,e,r),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.RENDERBUFFER,this.depthBuffer)),o&&!a&&(this.stencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,e,r),this.gl.framebufferRenderbuffer(this.target,this.gl.STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.stencilBuffer)),a&&o&&(this.depthStencilBuffer=this.gl.createRenderbuffer(),this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,e,r),this.gl.framebufferRenderbuffer(this.target,this.gl.DEPTH_STENCIL_ATTACHMENT,this.gl.RENDERBUFFER,this.depthStencilBuffer))),this.gl.renderer.bindFramebuffer({target:this.target})}setSize(t,e){if(!(this.width===t&&this.height===e)){this.width=t,this.height=e,this.gl.renderer.bindFramebuffer(this);for(let r=0;r<this.textures.length;r++)this.textures[r].width=t,this.textures[r].height=e,this.textures[r].needsUpdate=!0,this.textures[r].update(),this.gl.framebufferTexture2D(this.target,this.gl.COLOR_ATTACHMENT0+r,this.gl.TEXTURE_2D,this.textures[r].texture,0);this.depthTexture?(this.depthTexture.width=t,this.depthTexture.height=e,this.depthTexture.needsUpdate=!0,this.depthTexture.update(),this.gl.framebufferTexture2D(this.target,this.gl.DEPTH_ATTACHMENT,this.gl.TEXTURE_2D,this.depthTexture.texture,0)):(this.depthBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_COMPONENT16,t,e)),this.stencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.stencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.STENCIL_INDEX8,t,e)),this.depthStencilBuffer&&(this.gl.bindRenderbuffer(this.gl.RENDERBUFFER,this.depthStencilBuffer),this.gl.renderbufferStorage(this.gl.RENDERBUFFER,this.gl.DEPTH_STENCIL,t,e))),this.gl.renderer.bindFramebuffer({target:this.target})}}};var yr={black:"#000000",white:"#ffffff",red:"#ff0000",green:"#00ff00",blue:"#0000ff",fuchsia:"#ff00ff",cyan:"#00ffff",yellow:"#ffff00",orange:"#ff8000"};function Er(i){i.length===4&&(i=i[0]+i[1]+i[1]+i[2]+i[2]+i[3]+i[3]);let t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i);return t||console.warn(`Unable to convert hex string ${i} to rgb values`),[parseInt(t[1],16)/255,parseInt(t[2],16)/255,parseInt(t[3],16)/255]}function Gn(i){return i=parseInt(i),[(i>>16&255)/255,(i>>8&255)/255,(i&255)/255]}function De(i){return i===void 0?[0,0,0]:arguments.length===3?arguments:isNaN(i)?i[0]==="#"?Er(i):yr[i.toLowerCase()]?Er(yr[i.toLowerCase()]):(console.warn("Color format not recognised"),[0,0,0]):Gn(i)}var J=class extends Array{constructor(t){return Array.isArray(t)?super(...t):super(...De(...arguments))}get r(){return this[0]}get g(){return this[1]}get b(){return this[2]}set r(t){this[0]=t}set g(t){this[1]=t}set b(t){this[2]=t}set(t){return Array.isArray(t)?this.copy(t):this.copy(De(...arguments))}copy(t){return this[0]=t[0],this[1]=t[1],this[2]=t[2],this}};function Mr(i,t){return i[0]=t[0],i[1]=t[1],i}function wr(i,t,e){return i[0]=t,i[1]=e,i}function Pe(i,t,e){return i[0]=t[0]+e[0],i[1]=t[1]+e[1],i}function Ne(i,t,e){return i[0]=t[0]-e[0],i[1]=t[1]-e[1],i}function Tr(i,t,e){return i[0]=t[0]*e[0],i[1]=t[1]*e[1],i}function Sr(i,t,e){return i[0]=t[0]/e[0],i[1]=t[1]/e[1],i}function Yt(i,t,e){return i[0]=t[0]*e,i[1]=t[1]*e,i}function Ar(i,t){var e=t[0]-i[0],r=t[1]-i[1];return Math.sqrt(e*e+r*r)}function Cr(i,t){var e=t[0]-i[0],r=t[1]-i[1];return e*e+r*r}function Ie(i){var t=i[0],e=i[1];return Math.sqrt(t*t+e*e)}function Rr(i){var t=i[0],e=i[1];return t*t+e*e}function Or(i,t){return i[0]=-t[0],i[1]=-t[1],i}function Lr(i,t){return i[0]=1/t[0],i[1]=1/t[1],i}function Fr(i,t){var e=t[0],r=t[1],n=e*e+r*r;return n>0&&(n=1/Math.sqrt(n)),i[0]=t[0]*n,i[1]=t[1]*n,i}function Dr(i,t){return i[0]*t[0]+i[1]*t[1]}function Be(i,t){return i[0]*t[1]-i[1]*t[0]}function Pr(i,t,e,r){var n=t[0],s=t[1];return i[0]=n+r*(e[0]-n),i[1]=s+r*(e[1]-s),i}function Nr(i,t,e){var r=t[0],n=t[1];return i[0]=e[0]*r+e[3]*n+e[6],i[1]=e[1]*r+e[4]*n+e[7],i}function Ir(i,t,e){let r=t[0],n=t[1];return i[0]=e[0]*r+e[4]*n+e[12],i[1]=e[1]*r+e[5]*n+e[13],i}function Br(i,t){return i[0]===t[0]&&i[1]===t[1]}var G=class extends Array{constructor(t=0,e=t){return super(t,e),this}get x(){return this[0]}get y(){return this[1]}set x(t){this[0]=t}set y(t){this[1]=t}set(t,e=t){return t.length?this.copy(t):(wr(this,t,e),this)}copy(t){return Mr(this,t),this}add(t,e){return e?Pe(this,t,e):Pe(this,this,t),this}sub(t,e){return e?Ne(this,t,e):Ne(this,this,t),this}multiply(t){return t.length?Tr(this,this,t):Yt(this,this,t),this}divide(t){return t.length?Sr(this,this,t):Yt(this,this,1/t),this}inverse(t=this){return Lr(this,t),this}len(){return Ie(this)}distance(t){return t?Ar(this,t):Ie(this)}squaredLen(){return this.squaredDistance()}squaredDistance(t){return t?Cr(this,t):Rr(this)}negate(t=this){return Or(this,t),this}cross(t,e){return e?Be(t,e):Be(this,t)}scale(t){return Yt(this,this,t),this}normalize(){return Fr(this,this),this}dot(t){return Dr(this,t)}equals(t){return Br(this,t)}applyMatrix3(t){return Nr(this,this,t),this}applyMatrix4(t){return Ir(this,this,t),this}lerp(t,e){return Pr(this,this,t,e),this}clone(){return new G(this[0],this[1])}fromArray(t,e=0){return this[0]=t[e],this[1]=t[e+1],this}toArray(t=[],e=0){return t[e]=this[0],t[e+1]=this[1],t}};var Q=class extends K{constructor(t,{width:e=1,height:r=1,widthSegments:n=1,heightSegments:s=1,attributes:a={}}={}){let o=n,l=s,c=(o+1)*(l+1),u=o*l*6,h=new Float32Array(c*3),f=new Float32Array(c*3),m=new Float32Array(c*2),d=u>65536?new Uint32Array(u):new Uint16Array(u);Q.buildPlane(h,f,m,d,e,r,0,o,l),Object.assign(a,{position:{size:3,data:h},normal:{size:3,data:f},uv:{size:2,data:m},index:{data:d}}),super(t,a)}static buildPlane(t,e,r,n,s,a,o,l,c,u=0,h=1,f=2,m=1,d=-1,g=0,p=0){let v=g,E=s/l,x=a/c;for(let _=0;_<=c;_++){let b=_*x-a/2;for(let w=0;w<=l;w++,g++){let R=w*E-s/2;if(t[g*3+u]=R*m,t[g*3+h]=b*d,t[g*3+f]=o/2,e[g*3+u]=0,e[g*3+h]=0,e[g*3+f]=o>=0?1:-1,r[g*2]=w/l,r[g*2+1]=1-_/c,_===c||w===l)continue;let S=v+w+_*(l+1),N=v+w+(_+1)*(l+1),D=v+w+(_+1)*(l+1)+1,P=v+w+_*(l+1)+1;n[p*6]=S,n[p*6+1]=N,n[p*6+2]=P,n[p*6+3]=N,n[p*6+4]=D,n[p*6+5]=P,p++}}}};var lt=class extends K{constructor(t,{width:e=1,height:r=1,depth:n=1,widthSegments:s=1,heightSegments:a=1,depthSegments:o=1,attributes:l={}}={}){let c=s,u=a,h=o,f=(c+1)*(u+1)*2+(c+1)*(h+1)*2+(u+1)*(h+1)*2,m=(c*u*2+c*h*2+u*h*2)*6,d=new Float32Array(f*3),g=new Float32Array(f*3),p=new Float32Array(f*2),v=f>65536?new Uint32Array(m):new Uint16Array(m),E=0,x=0;Q.buildPlane(d,g,p,v,n,r,e,h,u,2,1,0,-1,-1,E,x),E+=(h+1)*(u+1),x+=h*u,Q.buildPlane(d,g,p,v,n,r,-e,h,u,2,1,0,1,-1,E,x),E+=(h+1)*(u+1),x+=h*u,Q.buildPlane(d,g,p,v,e,n,r,h,c,0,2,1,1,1,E,x),E+=(c+1)*(h+1),x+=c*h,Q.buildPlane(d,g,p,v,e,n,-r,h,c,0,2,1,1,-1,E,x),E+=(c+1)*(h+1),x+=c*h,Q.buildPlane(d,g,p,v,e,r,-n,c,u,0,1,2,-1,-1,E,x),E+=(c+1)*(u+1),x+=c*u,Q.buildPlane(d,g,p,v,e,r,n,c,u,0,1,2,1,-1,E,x),Object.assign(l,{position:{size:3,data:d},normal:{size:3,data:g},uv:{size:2,data:p},index:{data:v}}),super(t,l)}};var ct=class extends K{constructor(t,{attributes:e={}}={}){Object.assign(e,{position:{size:2,data:new Float32Array([-1,-1,3,-1,-1,3])},uv:{size:2,data:new Float32Array([0,0,2,0,0,2])}}),super(t,e)}};var $n=new G,qn=new G,Wn=new G,zr=new O,Ur=new O,Vr=new O,jn=new O,Yn=new O,Kn=new O,kr=new O,ze=new O,Gr=new O,Hr=new O,Qn=new O,Xr=new $,Ft=class{constructor(){this.origin=new O,this.direction=new O}castMouse(t,e=[0,0]){if(t.type==="orthographic"){let{left:r,right:n,bottom:s,top:a,zoom:o}=t,l=r/o+(n-r)/o*(e[0]*.5+.5),c=s/o+(a-s)/o*(e[1]*.5+.5);this.origin.set(l,c,0),this.origin.applyMatrix4(t.worldMatrix),this.direction.x=-t.worldMatrix[8],this.direction.y=-t.worldMatrix[9],this.direction.z=-t.worldMatrix[10]}else t.worldMatrix.getTranslation(this.origin),this.direction.set(e[0],e[1],.5),t.unproject(this.direction),this.direction.sub(this.origin).normalize()}intersectBounds(t,{maxDistance:e,output:r=[]}={}){Array.isArray(t)||(t=[t]);let n=Xr,s=zr,a=Ur,o=r;return o.length=0,t.forEach(l=>{(!l.geometry.bounds||l.geometry.bounds.radius===1/0)&&l.geometry.computeBoundingSphere();let c=l.geometry.bounds;n.inverse(l.worldMatrix);let u;if(e&&(a.copy(this.direction).scaleRotateMatrix4(n),u=e*a.len()),s.copy(this.origin).applyMatrix4(n),a.copy(this.direction).transformDirection(n),e&&s.distance(c.center)-c.radius>u)return;let h=0;if(l.geometry.raycast==="sphere"){if(s.distance(c.center)>c.radius&&(h=this.intersectSphere(c,s,a),!h))return}else if((s.x<c.min.x||s.x>c.max.x||s.y<c.min.y||s.y>c.max.y||s.z<c.min.z||s.z>c.max.z)&&(h=this.intersectBox(c,s,a),!h))return;e&&h>u||(l.hit||(l.hit={localPoint:new O,point:new O}),l.hit.localPoint.copy(a).multiply(h).add(s),l.hit.point.copy(l.hit.localPoint).applyMatrix4(l.worldMatrix),l.hit.distance=l.hit.point.distance(this.origin),o.push(l))}),o.sort((l,c)=>l.hit.distance-c.hit.distance),o}intersectMeshes(t,{cullFace:e=!0,maxDistance:r,includeUV:n=!0,includeNormal:s=!0,output:a=[]}={}){let o=this.intersectBounds(t,{maxDistance:r,output:a});if(!o.length)return o;let l=Xr,c=zr,u=Ur,h=Vr,f=jn,m=Yn,d=Kn,g=kr,p=ze,v=$n,E=qn,x=Wn;for(let _=o.length-1;_>=0;_--){let b=o[_];l.inverse(b.worldMatrix);let w;r&&(u.copy(this.direction).scaleRotateMatrix4(l),w=r*u.len()),c.copy(this.origin).applyMatrix4(l),u.copy(this.direction).transformDirection(l);let R=0,S,N,D,P=b.geometry,L=P.attributes,B=L.index,F=L.position,Y=Math.max(0,P.drawRange.start),rt=Math.min(B?B.count:F.count,P.drawRange.start+P.drawRange.count),at=F.stride?F.stride/F.data.BYTES_PER_ELEMENT:F.size;for(let Z=Y;Z<rt;Z+=3){let gt=B?B.data[Z]:Z,ri=B?B.data[Z+1]:Z+1,ni=B?B.data[Z+2]:Z+2;h.fromArray(F.data,gt*at),f.fromArray(F.data,ri*at),m.fromArray(F.data,ni*at);let Ht=this.intersectTriangle(h,f,m,e,c,u,g);!Ht||r&&Ht>w||(!R||Ht<R)&&(R=Ht,S=gt,N=ri,D=ni,d.copy(g))}R||o.splice(_,1),b.hit.localPoint.copy(u).multiply(R).add(c),b.hit.point.copy(b.hit.localPoint).applyMatrix4(b.worldMatrix),b.hit.distance=b.hit.point.distance(this.origin),b.hit.faceNormal||(b.hit.localFaceNormal=new O,b.hit.faceNormal=new O,b.hit.uv=new G,b.hit.localNormal=new O,b.hit.normal=new O),b.hit.localFaceNormal.copy(d),b.hit.faceNormal.copy(b.hit.localFaceNormal).transformDirection(b.worldMatrix),(n||s)&&(h.fromArray(F.data,S*3),f.fromArray(F.data,N*3),m.fromArray(F.data,D*3),this.getBarycoord(b.hit.localPoint,h,f,m,p)),n&&L.uv&&(v.fromArray(L.uv.data,S*2),E.fromArray(L.uv.data,N*2),x.fromArray(L.uv.data,D*2),b.hit.uv.set(v.x*p.x+E.x*p.y+x.x*p.z,v.y*p.x+E.y*p.y+x.y*p.z)),s&&L.normal&&(h.fromArray(L.normal.data,S*3),f.fromArray(L.normal.data,N*3),m.fromArray(L.normal.data,D*3),b.hit.localNormal.set(h.x*p.x+f.x*p.y+m.x*p.z,h.y*p.x+f.y*p.y+m.y*p.z,h.z*p.x+f.z*p.y+m.z*p.z),b.hit.normal.copy(b.hit.localNormal).transformDirection(b.worldMatrix))}return o.sort((_,b)=>_.hit.distance-b.hit.distance),o}intersectSphere(t,e=this.origin,r=this.direction){let n=Vr;n.sub(t.center,e);let s=n.dot(r),a=n.dot(n)-s*s,o=t.radius*t.radius;if(a>o)return 0;let l=Math.sqrt(o-a),c=s-l,u=s+l;return c<0&&u<0?0:c<0?u:c}intersectBox(t,e=this.origin,r=this.direction){let n,s,a,o,l,c,u=1/r.x,h=1/r.y,f=1/r.z,m=t.min,d=t.max;return n=((u>=0?m.x:d.x)-e.x)*u,s=((u>=0?d.x:m.x)-e.x)*u,a=((h>=0?m.y:d.y)-e.y)*h,o=((h>=0?d.y:m.y)-e.y)*h,n>o||a>s||(a>n&&(n=a),o<s&&(s=o),l=((f>=0?m.z:d.z)-e.z)*f,c=((f>=0?d.z:m.z)-e.z)*f,n>c||l>s)||(l>n&&(n=l),c<s&&(s=c),s<0)?0:n>=0?n:s}intersectTriangle(t,e,r,n=!0,s=this.origin,a=this.direction,o=kr){let l=ze,c=Gr,u=Hr;l.sub(e,t),c.sub(r,t),o.cross(l,c);let h=a.dot(o);if(!h)return 0;let f;if(h>0){if(n)return 0;f=1}else f=-1,h=-h;u.sub(s,t);let m=f*a.dot(c.cross(u,c));if(m<0)return 0;let d=f*a.dot(l.cross(u));if(d<0||m+d>h)return 0;let g=-f*u.dot(o);return g<0?0:g/h}getBarycoord(t,e,r,n,s=ze){let a=Gr,o=Hr,l=Qn;a.sub(n,e),o.sub(r,e),l.sub(t,e);let c=a.dot(a),u=a.dot(o),h=a.dot(l),f=o.dot(o),m=o.dot(l),d=c*f-u*u;if(d===0)return s.set(-2,-1,-1);let g=1/d,p=(f*h-u*m)*g,v=(c*m-u*h)*g;return s.set(1-p-v,v,p)}};var ht=class{constructor(t,{width:e,height:r,dpr:n,wrapS:s=t.CLAMP_TO_EDGE,wrapT:a=t.CLAMP_TO_EDGE,minFilter:o=t.LINEAR,magFilter:l=t.LINEAR,geometry:c=new ct(t),targetOnly:u=null}={}){this.gl=t,this.options={wrapS:s,wrapT:a,minFilter:o,magFilter:l},this.passes=[],this.geometry=c,this.uniform={value:null},this.targetOnly=u;let h=this.fbo={read:null,write:null,swap:()=>{let f=h.read;h.read=h.write,h.write=f}};this.resize({width:e,height:r,dpr:n})}addPass({vertex:t=Zn,fragment:e=Jn,uniforms:r={},textureUniform:n="tMap",enabled:s=!0}={}){r[n]={value:this.fbo.read.texture};let a=new H(this.gl,{vertex:t,fragment:e,uniforms:r}),l={mesh:new q(this.gl,{geometry:this.geometry,program:a}),program:a,uniforms:r,enabled:s,textureUniform:n};return this.passes.push(l),l}resize({width:t,height:e,dpr:r}={}){r&&(this.dpr=r),t&&(this.width=t,this.height=e||t),r=this.dpr||this.gl.renderer.dpr,t=Math.floor((this.width||this.gl.renderer.width)*r),e=Math.floor((this.height||this.gl.renderer.height)*r),this.options.width=t,this.options.height=e,this.fbo.read=new Lt(this.gl,this.options),this.fbo.write=new Lt(this.gl,this.options)}render({scene:t,camera:e,texture:r,target:n=null,update:s=!0,sort:a=!0,frustumCull:o=!0}){let l=this.passes.filter(c=>c.enabled);r||(this.gl.renderer.render({scene:t,camera:e,target:l.length||!n&&this.targetOnly?this.fbo.write:n,update:s,sort:a,frustumCull:o}),this.fbo.swap()),l.forEach((c,u)=>{c.mesh.program.uniforms[c.textureUniform].value=!u&&r?r:this.fbo.read.texture,this.gl.renderer.render({scene:c.mesh,target:u===l.length-1&&(n||!this.targetOnly)?n:this.fbo.write,clear:!0}),this.fbo.swap()}),this.uniform.value=this.fbo.read.texture}},Zn=`
    attribute vec2 uv;
    attribute vec2 position;

    varying vec2 vUv;

    void main() {
        vUv = uv;
        gl_Position = vec4(position, 0, 1);
    }
`,Jn=`
    precision highp float;

    uniform sampler2D tMap;
    varying vec2 vUv;

    void main() {
        gl_FragColor = texture2D(tMap, vUv);
    }
`;var ts=`
    precision highp float;
    precision highp int;

    attribute vec3 position;
    attribute vec3 normal;

    uniform mat3 normalMatrix;
    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;

    varying vec3 vNormal;

    void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`,es=`
    precision highp float;
    precision highp int;

    varying vec3 vNormal;

    void main() {
        gl_FragColor.rgb = normalize(vNormal);
        gl_FragColor.a = 1.0;
    }
`;function $r(i){return new H(i,{vertex:ts,fragment:es,cullFace:null})}var yt=new O,vt=class{constructor(t,{points:e,vertex:r=is,fragment:n=rs,uniforms:s={},attributes:a={}}){this.gl=t,this.points=e,this.count=e.length,this.position=new Float32Array(this.count*3*2),this.prev=new Float32Array(this.count*3*2),this.next=new Float32Array(this.count*3*2);let o=new Float32Array(this.count*1*2),l=new Float32Array(this.count*2*2),c=new Uint16Array((this.count-1)*3*2);for(let f=0;f<this.count;f++){o.set([-1,1],f*2);let m=f/(this.count-1);if(l.set([0,m,1,m],f*4),f===this.count-1)continue;let d=f*2;c.set([d+0,d+1,d+2],(d+0)*3),c.set([d+2,d+1,d+3],(d+1)*3)}let u=this.geometry=new K(t,Object.assign(a,{position:{size:3,data:this.position},prev:{size:3,data:this.prev},next:{size:3,data:this.next},side:{size:1,data:o},uv:{size:2,data:l},index:{size:1,data:c}}));this.updateGeometry(),s.uResolution||(this.resolution=s.uResolution={value:new G}),s.uDPR||(this.dpr=s.uDPR={value:1}),s.uThickness||(this.thickness=s.uThickness={value:1}),s.uColor||(this.color=s.uColor={value:new J("#000")}),s.uMiter||(this.miter=s.uMiter={value:1}),this.resize();let h=this.program=new H(t,{vertex:r,fragment:n,uniforms:s});this.mesh=new q(t,{geometry:u,program:h})}updateGeometry(){this.points.forEach((t,e)=>{t.toArray(this.position,e*3*2),t.toArray(this.position,e*3*2+3),e?(t.toArray(this.next,(e-1)*3*2),t.toArray(this.next,(e-1)*3*2+3)):(yt.copy(t).sub(this.points[e+1]).add(t),yt.toArray(this.prev,e*3*2),yt.toArray(this.prev,e*3*2+3)),e===this.points.length-1?(yt.copy(t).sub(this.points[e-1]).add(t),yt.toArray(this.next,e*3*2),yt.toArray(this.next,e*3*2+3)):(t.toArray(this.prev,(e+1)*3*2),t.toArray(this.prev,(e+1)*3*2+3))}),this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.prev.needsUpdate=!0,this.geometry.attributes.next.needsUpdate=!0}resize(){this.resolution&&this.resolution.value.set(this.gl.canvas.width,this.gl.canvas.height),this.dpr&&(this.dpr.value=this.gl.renderer.dpr)}},is=`
    precision highp float;

    attribute vec3 position;
    attribute vec3 next;
    attribute vec3 prev;
    attribute vec2 uv;
    attribute float side;

    uniform mat4 modelViewMatrix;
    uniform mat4 projectionMatrix;
    uniform vec2 uResolution;
    uniform float uDPR;
    uniform float uThickness;
    uniform float uMiter;

    varying vec2 vUv;

    vec4 getPosition() {
        mat4 mvp = projectionMatrix * modelViewMatrix;
        vec4 current = mvp * vec4(position, 1);
        vec4 nextPos = mvp * vec4(next, 1);
        vec4 prevPos = mvp * vec4(prev, 1);

        vec2 aspect = vec2(uResolution.x / uResolution.y, 1);    
        vec2 currentScreen = current.xy / current.w * aspect;
        vec2 nextScreen = nextPos.xy / nextPos.w * aspect;
        vec2 prevScreen = prevPos.xy / prevPos.w * aspect;
    
        vec2 dir1 = normalize(currentScreen - prevScreen);
        vec2 dir2 = normalize(nextScreen - currentScreen);
        vec2 dir = normalize(dir1 + dir2);
    
        vec2 normal = vec2(-dir.y, dir.x);
        normal /= mix(1.0, max(0.3, dot(normal, vec2(-dir1.y, dir1.x))), uMiter);
        normal /= aspect;

        float pixelWidthRatio = 1.0 / (uResolution.y / uDPR);
        float pixelWidth = current.w * pixelWidthRatio;
        normal *= pixelWidth * uThickness;
        current.xy -= normal * side;
    
        return current;
    }

    void main() {
        vUv = uv;
        gl_Position = getPosition();
    }
`,rs=`
    precision highp float;

    uniform vec3 uColor;
    
    varying vec2 vUv;

    void main() {
        gl_FragColor.rgb = uColor;
        gl_FragColor.a = 1.0;
    }
`;var Kt=class extends W{constructor(t,{buffer:e,wrapS:r=t.CLAMP_TO_EDGE,wrapT:n=t.CLAMP_TO_EDGE,anisotropy:s=0,minFilter:a,magFilter:o}={}){if(super(t,{generateMipmaps:!1,wrapS:r,wrapT:n,anisotropy:s,minFilter:a,magFilter:o}),e)return this.parseBuffer(e)}parseBuffer(t){let e=new ns(t);e.mipmaps.isCompressedTexture=!0,this.image=e.mipmaps,this.internalFormat=e.glInternalFormat,e.numberOfMipmapLevels>1?this.minFilter===this.gl.LINEAR&&(this.minFilter=this.gl.NEAREST_MIPMAP_LINEAR):this.minFilter===this.gl.NEAREST_MIPMAP_LINEAR&&(this.minFilter=this.gl.LINEAR)}};function ns(i){let t=[171,75,84,88,32,49,49,187,13,10,26,10],e=new Uint8Array(i,0,12);for(let h=0;h<e.length;h++)if(e[h]!==t[h])return console.error("File missing KTX identifier");let r=Uint32Array.BYTES_PER_ELEMENT,n=new DataView(i,12,13*r),s=n.getUint32(0,!0)===67305985;if(n.getUint32(1*r,s)!==0)return console.warn("only compressed formats currently supported");this.glInternalFormat=n.getUint32(4*r,s);let o=n.getUint32(6*r,s),l=n.getUint32(7*r,s);this.numberOfFaces=n.getUint32(10*r,s),this.numberOfMipmapLevels=Math.max(1,n.getUint32(11*r,s));let c=n.getUint32(12*r,s);this.mipmaps=[];let u=12+13*4+c;for(let h=0;h<this.numberOfMipmapLevels;h++){let f=new Int32Array(i,u,1)[0];u+=4;for(let m=0;m<this.numberOfFaces;m++){let d=new Uint8Array(i,u,f);this.mipmaps.push({data:d,width:o,height:l}),u+=f,u+=3-(f+3)%4}o=o>>1,l=l>>1}}var Qt={},Et=[],Mt=class{static load(t,{src:e,wrapS:r=t.CLAMP_TO_EDGE,wrapT:n=t.CLAMP_TO_EDGE,anisotropy:s=0,format:a=t.RGBA,internalFormat:o=a,generateMipmaps:l=!0,minFilter:c=l?t.NEAREST_MIPMAP_LINEAR:t.LINEAR,magFilter:u=t.LINEAR,premultiplyAlpha:h=!1,unpackAlignment:f=4,flipY:m=!0}={}){let d=this.getSupportedExtensions(t),g="none";if(typeof e=="string"&&(g=e.split(".").pop().split("?")[0].toLowerCase()),typeof e=="object"){for(let E in e)if(d.includes(E.toLowerCase())){g=E.toLowerCase(),e=e[E];break}}let p=e+r+n+s+a+o+l+c+u+h+f+m+t.renderer.id;if(Qt[p])return Qt[p];let v;switch(g){case"ktx":case"pvrtc":case"s3tc":case"etc":case"etc1":case"astc":v=new Kt(t,{src:e,wrapS:r,wrapT:n,anisotropy:s,minFilter:c,magFilter:u}),v.loaded=this.loadKTX(e,v);break;case"webp":case"jpg":case"jpeg":case"png":v=new W(t,{wrapS:r,wrapT:n,anisotropy:s,format:a,internalFormat:o,generateMipmaps:l,minFilter:c,magFilter:u,premultiplyAlpha:h,unpackAlignment:f,flipY:m}),v.loaded=this.loadImage(t,e,v,m);break;default:console.warn("No supported format supplied"),v=new W(t)}return v.ext=g,Qt[p]=v,v}static getSupportedExtensions(t){if(Et.length)return Et;let e={pvrtc:t.renderer.getExtension("WEBGL_compressed_texture_pvrtc")||t.renderer.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),s3tc:t.renderer.getExtension("WEBGL_compressed_texture_s3tc"),etc1:t.renderer.getExtension("WEBGL_compressed_texture_etc1"),astc:t.renderer.getExtension("WEBGL_compressed_texture_astc"),bc7:t.renderer.getExtension("EXT_texture_compression_bptc")};for(let r in e)e[r]&&Et.push(r);return ss()&&Et.push("webp"),Et.push("png","jpg"),Et}static loadKTX(t,e){return fetch(t).then(r=>r.arrayBuffer()).then(r=>e.parseBuffer(r))}static loadImage(t,e,r,n){return as(e,n).then(s=>((!qr(s.width)||!qr(s.height))&&(r.generateMipmaps&&(r.generateMipmaps=!1),r.minFilter===t.NEAREST_MIPMAP_LINEAR&&(r.minFilter=t.LINEAR),r.wrapS===t.REPEAT&&(r.wrapS=r.wrapT=t.CLAMP_TO_EDGE)),r.image=s,r.onUpdate=()=>{s.close&&s.close(),r.onUpdate=null},s))}static clearCache(){Qt={}}};function ss(){return document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")==0}function qr(i){return Math.log2(i)%1===0}function as(i,t){return new Promise(e=>{let r=navigator.userAgent.toLowerCase().includes("chrome");if(!!window.createImageBitmap&&r)fetch(i,{mode:"cors"}).then(n=>n.blob()).then(n=>createImageBitmap(n,{imageOrientation:t?"flipY":"none",premultiplyAlpha:"none"})).then(e);else{let n=new Image;n.crossOrigin="",n.src=i,n.onload=()=>e(n)}})}var Wr=new O,os=new O,ls=new O,cs=new O,jr=new ot,us=new ot,hs=new ot,fs=new ot,Zt=class{constructor(t,e=1){this.data=t,this.elapsed=0,this.weight=e,this.loop=!0,this.startTime=t.reduce((r,{times:n})=>Math.min(r,n[0]),1/0),this.endTime=t.reduce((r,{times:n})=>Math.max(r,n[n.length-1]),0),this.duration=this.endTime-this.startTime}update(t=1,e){let r=e?1:this.weight/t,n=this.duration?(this.loop?this.elapsed%this.duration:Math.min(this.elapsed,this.duration-.001))+this.startTime:0;this.data.forEach(({node:s,transform:a,interpolation:o,times:l,values:c})=>{if(!this.duration){let E=Wr,x=3;a==="quaternion"&&(E=jr,x=4),E.fromArray(c,0),x===4?s[a].slerp(E,r):s[a].lerp(E,r);return}let u=Math.max(1,l.findIndex(E=>E>n))-1,h=u+1,f=(n-l[u])/(l[h]-l[u]);o==="STEP"&&(f=0);let m=Wr,d=os,g=ls,p=cs,v=3;a==="quaternion"&&(m=jr,d=us,g=hs,p=fs,v=4),o==="CUBICSPLINE"?(m.fromArray(c,u*v*3+v*1),d.fromArray(c,u*v*3+v*2),g.fromArray(c,h*v*3+v*0),p.fromArray(c,h*v*3+v*1),m=this.cubicSplineInterpolate(f,m,d,g,p),v===4&&m.normalize()):(m.fromArray(c,u*v),p.fromArray(c,h*v),v===4?m.slerp(p,f):m.lerp(p,f)),v===4?s[a].slerp(m,r):s[a].lerp(m,r)})}cubicSplineInterpolate(t,e,r,n,s){let a=t*t,o=a*t,l=3*a-2*o,c=o-a,u=1-l,h=c-a+t;for(let f=0;f<e.length;f++)e[f]=u*e[f]+h*(1-t)*r[f]+l*s[f]+c*t*n[f];return e}};var Yr=new $,ds=new $,xt=class extends q{constructor(t,{skeleton:e,geometry:r,program:n,mode:s=t.TRIANGLES}={}){super(t,{geometry:r,program:n,mode:s}),this.skeleton=e,this.program=n,this.createBoneTexture(),this.animations=[]}createBoneTexture(){if(!this.skeleton.joints.length)return;let t=Math.max(4,Math.pow(2,Math.ceil(Math.log(Math.sqrt(this.skeleton.joints.length*4))/Math.LN2)));this.boneMatrices=new Float32Array(t*t*4),this.boneTextureSize=t,this.boneTexture=new W(this.gl,{image:this.boneMatrices,generateMipmaps:!1,type:this.gl.FLOAT,internalFormat:this.gl.renderer.isWebgl2?this.gl.RGBA32F:this.gl.RGBA,minFilter:this.gl.NEAREST,magFilter:this.gl.NEAREST,flipY:!1,width:t})}updateUniforms(){this.skeleton.joints.forEach((t,e)=>{Yr.multiply(t.worldMatrix,t.bindInverse),this.boneMatrices.set(Yr,e*16)}),this.boneTexture&&(this.boneTexture.needsUpdate=!0)}draw({camera:t}={}){this.program.uniforms.boneTexture||Object.assign(this.program.uniforms,{boneTexture:{value:this.boneTexture},boneTextureSize:{value:this.boneTextureSize}}),this.updateUniforms();let e=this.worldMatrix;this.worldMatrix=ds,super.draw({camera:t}),this.worldMatrix=e}};var ms={5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array,"image/jpeg":Uint8Array,"image/png":Uint8Array},ps={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},gs={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},vs={translation:"position",rotation:"quaternion",scale:"scale"},ut=class{static setBasisManager(t){this.basisManager=t}static async load(t,e){let r=e.split("/").slice(0,-1).join("/")+"/",n=await this.parseDesc(e);return await this.parse(t,n,r)}static async parse(t,e,r){var p;(e.asset===void 0||e.asset.version[0]<2)&&console.warn("Only GLTF >=2.0 supported. Attempting to parse."),((p=e.extensionsRequired)==null?void 0:p.includes("KHR_texture_basisu"))&&!this.basisManager&&console.warn("KHR_texture_basisu extension required but no manager supplied. Use .setBasisManager()");let n=await this.loadBuffers(e,r);t.renderer.bindVertexArray(null);let s=this.parseBufferViews(t,e,n),a=await this.parseImages(t,e,r,s),o=this.parseTextures(t,e,a),l=this.parseMaterials(t,e,o),c=this.parseSkins(t,e,s),u=this.parseMeshes(t,e,s,l,c),h=this.parseNodes(t,e,u,c,a);this.populateSkins(c,h);let f=this.parseAnimations(t,e,h,s),m=this.parseScenes(e,h),d=m[e.scene],g=this.parseLights(t,e,h,m);for(let v=h.length;v>=0;v--)h[v]||h.splice(v,1);return{json:e,buffers:n,bufferViews:s,images:a,textures:o,materials:l,meshes:u,nodes:h,lights:g,animations:f,scenes:m,scene:d}}static async parseDesc(t){return t.match(/\.glb/)?await fetch(t).then(e=>e.arrayBuffer()).then(e=>this.unpackGLB(e)):await fetch(t).then(e=>e.json())}static unpackGLB(t){let e=new Uint32Array(t,0,3);if(e[0]!==1179937895)throw new Error("Invalid glTF asset.");if(e[1]!==2)throw new Error(`Unsupported glTF binary version, "${e[1]}".`);let r=new Uint32Array(t,12,2),n=20,s=r[0];if(r[1]!==1313821514)throw new Error("Unexpected GLB layout.");let a=new TextDecoder().decode(t.slice(n,n+s)),o=JSON.parse(a);if(n+s===t.byteLength)return o;let l=new Uint32Array(t,n+s,2);if(l[1]!==5130562)throw new Error("Unexpected GLB layout.");let c=n+s+8,u=l[0],h=t.slice(c,c+u);return o.buffers[0].binary=h,o}static resolveURI(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}static async loadBuffers(t,e){return t.buffers?await Promise.all(t.buffers.map(r=>{if(r.binary)return r.binary;let n=this.resolveURI(r.uri,e);return fetch(n).then(s=>s.arrayBuffer())})):null}static parseBufferViews(t,e,r){if(!e.bufferViews)return null;let n=e.bufferViews.map(s=>Object.assign({},s));return e.meshes&&e.meshes.forEach(({primitives:s})=>{s.forEach(({attributes:a,indices:o})=>{for(let l in a)n[e.accessors[a[l]].bufferView].isAttribute=!0;o!==void 0&&(n[e.accessors[o].bufferView].isAttribute=!0,n[e.accessors[o].bufferView].target=t.ELEMENT_ARRAY_BUFFER)})}),e.accessors.forEach(({bufferView:s,componentType:a})=>{n[s].componentType=a}),e.images&&e.images.forEach(({uri:s,bufferView:a,mimeType:o})=>{a!==void 0&&(n[a].mimeType=o)}),n.forEach(({buffer:s,byteOffset:a=0,byteLength:o,byteStride:l,target:c=t.ARRAY_BUFFER,name:u,extensions:h,extras:f,componentType:m,mimeType:d,isAttribute:g},p)=>{if(n[p].data=r[s].slice(a,a+o),!g)return;let v=t.createBuffer();t.bindBuffer(c,v),t.renderer.state.boundBuffer=v,t.bufferData(c,n[p].data,t.STATIC_DRAW),n[p].buffer=v}),n}static async parseImages(t,e,r,n){return e.images?await Promise.all(e.images.map(async({uri:s,bufferView:a,mimeType:o,name:l})=>{if(o==="image/ktx2"){let{data:u}=n[a];return await this.basisManager.parseTexture(u)}let c=new Image;if(c.name=l,s)c.src=this.resolveURI(s,r);else if(a!==void 0){let{data:u}=n[a],h=new Blob([u],{type:o});c.src=URL.createObjectURL(h)}return c.ready=new Promise(u=>{c.onload=()=>u()}),c})):null}static parseTextures(t,e,r){return e.textures?e.textures.map(n=>this.createTexture(t,e,r,n)):null}static createTexture(t,e,r,{sampler:n,source:s,name:a,extensions:o,extras:l}){s===void 0&&!!o&&o.KHR_texture_basisu&&(s=o.KHR_texture_basisu.source);let c=r[s];if(c.texture)return c.texture;let u={flipY:!1,wrapS:t.REPEAT,wrapT:t.REPEAT},h=n!==void 0?e.samplers[n]:null;if(h&&["magFilter","minFilter","wrapS","wrapT"].forEach(m=>{h[m]&&(u[m]=h[m])}),c.isBasis){u.image=c,u.internalFormat=c.internalFormat,c.isCompressedTexture&&(u.generateMipmaps=!1,c.length>1&&(this.minFilter=t.NEAREST_MIPMAP_LINEAR));let m=new W(t,u);return m.name=a,c.texture=m,m}let f=new W(t,u);return f.name=a,c.texture=f,c.ready.then(()=>{f.image=c}),f}static parseMaterials(t,e,r){return e.materials?e.materials.map(({name:n,extensions:s,extras:a,pbrMetallicRoughness:o={},normalTexture:l,occlusionTexture:c,emissiveTexture:u,emissiveFactor:h=[0,0,0],alphaMode:f="OPAQUE",alphaCutoff:m=.5,doubleSided:d=!1})=>{let{baseColorFactor:g=[1,1,1,1],baseColorTexture:p,metallicFactor:v=1,roughnessFactor:E=1,metallicRoughnessTexture:x}=o;return p&&(p.texture=r[p.index]),l&&(l.texture=r[l.index]),x&&(x.texture=r[x.index]),c&&(c.texture=r[c.index]),u&&(u.texture=r[u.index]),{name:n,extensions:s,extras:a,baseColorFactor:g,baseColorTexture:p,metallicFactor:v,roughnessFactor:E,metallicRoughnessTexture:x,normalTexture:l,occlusionTexture:c,emissiveTexture:u,emissiveFactor:h,alphaMode:f,alphaCutoff:m,doubleSided:d}}):null}static parseSkins(t,e,r){return e.skins?e.skins.map(({inverseBindMatrices:n,skeleton:s,joints:a})=>({inverseBindMatrices:this.parseAccessor(n,e,r),skeleton:s,joints:a})):null}static parseMeshes(t,e,r,n,s){return e.meshes?e.meshes.map(({primitives:a,weights:o,name:l,extensions:c,extras:u},h)=>{let f=0,m=[],d=!1;return e.nodes&&e.nodes.forEach(({mesh:p,skin:v,extras:E})=>{p===h&&(f++,v!==void 0&&m.push(v),E&&E.lightmap_scale_offset&&(d=!0))}),!!m.length?(a=m.map(p=>this.parsePrimitives(t,a,e,r,n,1,d).map(({geometry:v,program:E,mode:x})=>{let _=new xt(t,{skeleton:s[p],geometry:v,program:E,mode:x});return _.name=l,_.frustumCulled=!1,_})),a.instanceCount=0,a.numInstances=f):a=this.parsePrimitives(t,a,e,r,n,f,d).map(({geometry:p,program:v,mode:E})=>{let x=new q(t,{geometry:p,program:v,mode:E});return x.name=l,x.numInstances=f,x.geometry.attributes.instanceMatrix&&(x.frustumCulled=!1),x}),{primitives:a,weights:o,name:l}}):null}static parsePrimitives(t,e,r,n,s,a,o){return e.map(({attributes:l,indices:c,material:u,mode:h=4,targets:f,extensions:m,extras:d})=>{let g=new $r(t);u!==void 0&&(g.gltfMaterial=s[u]);let p=new K(t);for(let v in l)p.addAttribute(gs[v],this.parseAccessor(l[v],r,n));return c!==void 0&&p.addAttribute("index",this.parseAccessor(c,r,n)),a>1&&p.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(a*16)}),o&&p.addAttribute("lightmapScaleOffset",{instanced:1,size:4,data:new Float32Array(a*4)}),{geometry:p,program:g,mode:h}})}static parseAccessor(t,e,r){let{bufferView:n,byteOffset:s=0,componentType:a,normalized:o=!1,count:l,type:c,min:u,max:h,sparse:f}=e.accessors[t],{data:m,buffer:d,byteOffset:g=0,byteStride:p=0,target:v}=r[n],E=ps[c],x=ms[a],_=m.BYTES_PER_ELEMENT,b=p/_;return{data:!!p&&b!==E?new x(m):new x(m,s,l*E),size:E,type:a,normalized:o,buffer:d,stride:p,offset:s,count:l,min:u,max:h}}static parseNodes(t,e,r,n,s){if(!e.nodes)return null;let a=e.nodes.map(({camera:o,children:l,skin:c,matrix:u,mesh:h,rotation:f,scale:m,translation:d,weights:g,name:p,extensions:v,extras:E})=>{let x=new k;p&&(x.name=p),x.extras=E,x.extensions=v,E&&E.lightmapTexture!==void 0&&(E.lightmapTexture.texture=this.createTexture(t,e,s,{source:E.lightmapTexture.index})),u?(x.matrix.copy(u),x.decompose()):(f&&x.quaternion.copy(f),m&&x.scale.copy(m),d&&x.position.copy(d),x.updateMatrix());let _=!1,b=!0,w=!1;if(h!==void 0&&(c!==void 0?(r[h].primitives[r[h].primitives.instanceCount].forEach(S=>{S.extras=E,S.setParent(x)}),r[h].primitives.instanceCount++,r[h].primitives.instanceCount===r[h].primitives.numInstances&&(delete r[h].primitives.numInstances,delete r[h].primitives.instanceCount)):r[h].primitives.forEach(S=>{S.extras=E,S.geometry.isInstanced&&(_=!0,S.instanceCount?b=!1:S.instanceCount=0,S.geometry.attributes.instanceMatrix&&(w=!0,x.matrix.toArray(S.geometry.attributes.instanceMatrix.data,S.instanceCount*16)),S.geometry.attributes.lightmapScaleOffset&&S.geometry.attributes.lightmapScaleOffset.data.set(E.lightmap_scale_offset,S.instanceCount*4),S.instanceCount++,S.instanceCount===S.numInstances&&(delete S.numInstances,delete S.instanceCount,S.geometry.attributes.instanceMatrix&&(S.geometry.attributes.instanceMatrix.needsUpdate=!0),S.geometry.attributes.lightmapScaleOffset&&(S.geometry.attributes.lightmapScaleOffset.needsUpdate=!0))),_?b&&S.setParent(x):S.setParent(x)})),w){if(!b)return null;x.matrix.identity(),x.decompose()}return x});return e.nodes.forEach(({children:o=[]},l)=>{o.forEach(c=>{!a[c]||a[c].setParent(a[l])})}),a}static populateSkins(t,e){!t||t.forEach(r=>{r.joints=r.joints.map((n,s)=>{let a=e[n];return a.bindInverse=new $(...r.inverseBindMatrices.data.slice(s*16,(s+1)*16)),a}),r.skeleton&&(r.skeleton=e[r.skeleton])})}static parseAnimations(t,e,r,n){return e.animations?e.animations.map(({channels:s,samplers:a,name:o})=>{let l=s.map(({sampler:c,target:u})=>{let{input:h,interpolation:f="LINEAR",output:m}=a[c],{node:d,path:g}=u,p=r[d],v=vs[g],E=this.parseAccessor(h,e,n).data,x=this.parseAccessor(m,e,n).data;return{node:p,transform:v,interpolation:f,times:E,values:x}});return{name:o,animation:new Zt(l)}}):null}static parseScenes(t,e){return t.scenes?t.scenes.map(({nodes:r=[],name:n,extensions:s,extras:a})=>{let o=r.reduce((l,c)=>(e[c]&&l.push(e[c]),l),[]);return o.extras=a,o}):null}static parseLights(t,e,r,n){var o,l;let s={directional:[],point:[],spot:[]};n.forEach(c=>c.forEach(u=>u.updateMatrixWorld()));let a=((l=(o=e.extensions)==null?void 0:o.KHR_lights_punctual)==null?void 0:l.lights)||[];return r.forEach(c=>{var m;if(!((m=c==null?void 0:c.extensions)!=null&&m.KHR_lights_punctual))return;let u=c.extensions.KHR_lights_punctual.light,h=a[u],f={name:h.name||"",color:{value:new O().set(h.color||1)}};switch(h.intensity!==void 0&&f.color.value.multiply(h.intensity),h.type){case"directional":f.direction={value:new O(0,0,1).transformDirection(c.worldMatrix)};break;case"point":f.position={value:new O().applyMatrix4(c.worldMatrix)},f.distance={value:h.range},f.decay={value:2};break;case"spot":Object.assign(f,h);break}s[h.type].push(f)}),s}};var Ue,Ve=0,Dt=class{constructor(t){Ue||(Ue=this.getSupportedFormat()),this.onMessage=this.onMessage.bind(this),this.queue=new Map,this.initWorker(t)}getSupportedFormat(){let t=document.createElement("canvas").getContext("webgl");return t.getExtension("WEBGL_compressed_texture_astc")?"astc":t.getExtension("EXT_texture_compression_bptc")?"bptc":t.getExtension("WEBGL_compressed_texture_s3tc")?"s3tc":t.getExtension("WEBGL_compressed_texture_etc1")?"etc1":!!t.getExtension("WEBGL_compressed_texture_pvrtc")||!!t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc")?"pvrtc":"none"}initWorker(t){this.worker=new Worker(t),this.worker.onmessage=this.onMessage}onMessage({data:t}){let{id:e,error:r,image:n}=t;if(r){console.log(r,e);return}let s=this.queue.get(e);this.queue.delete(e),n.isBasis=!0,s(n)}parseTexture(t){Ve++,this.worker.postMessage({id:Ve,buffer:t,supportedFormat:Ue});let e,r=new Promise(n=>e=n);return this.queue.set(Ve,e),r}};var ke=class{constructor(){this.queue=[];let t=performance.now(),e=r=>{let n=Math.min(150,r-t);t=r;for(let s=this.queue.length-1;s>=0;s--){let a=this.queue[s];if(a.fps){let o=r-a.last;if(o<1e3/a.fps)continue;a(o===1/0?1e3/a.fps:o,r,++a.frame),a.last=r;continue}a(n,r)}requestAnimationFrame(e)};requestAnimationFrame(e)}add(t,e){e&&(t.fps=e,t.last=-1/0,t.frame=-1,t.delta=16),this.queue.includes(t)||this.queue.unshift(t)}remove(t){this.queue.includes(t)&&this.queue.splice(this.queue.indexOf(t),1)}},I=new ke;var nt={linear:function(i){return i},inQuad:function(i){return i*i},outQuad:function(i){return i*(2-i)},inOutQuad:function(i){return(i*=2)<1?.5*i*i:-.5*(--i*(i-2)-1)},inCubic:function(i){return i*i*i},outCubic:function(i){return--i*i*i+1},inOutCubic:function(i){return(i*=2)<1?.5*i*i*i:.5*((i-=2)*i*i+2)},inQuart:function(i){return i*i*i*i},outQuart:function(i){return 1- --i*i*i*i},inOutQuart:function(i){return(i*=2)<1?.5*i*i*i*i:-.5*((i-=2)*i*i*i-2)},inQuint:function(i){return i*i*i*i*i},outQuint:function(i){return--i*i*i*i*i+1},inOutQuint:function(i){return(i*=2)<1?.5*i*i*i*i*i:.5*((i-=2)*i*i*i*i+2)},inSine:function(i){return 1-Math.cos(i*Math.PI/2)},outSine:function(i){return Math.sin(i*Math.PI/2)},inOutSine:function(i){return .5*(1-Math.cos(Math.PI*i))},inExpo:function(i){return i===0?0:Math.pow(1024,i-1)},outExpo:function(i){return i===1?1:1-Math.pow(2,-10*i)},inOutExpo:function(i){return i===0?0:i===1?1:(i*=2)<1?.5*Math.pow(1024,i-1):.5*(-Math.pow(2,-10*(i-1))+2)},inCirc:function(i){return 1-Math.sqrt(1-i*i)},outCirc:function(i){return Math.sqrt(1- --i*i)},inOutCirc:function(i){return(i*=2)<1?-.5*(Math.sqrt(1-i*i)-1):.5*(Math.sqrt(1-(i-=2)*i)+1)},inElastic:function(i,t=1,e=.4){var r;return i===0?0:i===1?1:(!t||t<1?(t=1,r=e/4):r=e*Math.asin(1/t)/(2*Math.PI),-(t*Math.pow(2,10*(i-=1))*Math.sin((i-r)*(2*Math.PI)/e)))},outElastic:function(i,t=1,e=.4){var r;return i===0?0:i===1?1:(!t||t<1?(t=1,r=e/4):r=e*Math.asin(1/t)/(2*Math.PI),t*Math.pow(2,-10*i)*Math.sin((i-r)*(2*Math.PI)/e)+1)},inOutElastic:function(i,t=1,e=.4){var r;return i===0?0:i===1?1:(!t||t<1?(t=1,r=e/4):r=e*Math.asin(1/t)/(2*Math.PI),(i*=2)<1?-.5*(t*Math.pow(2,10*(i-=1))*Math.sin((i-r)*(2*Math.PI)/e)):t*Math.pow(2,-10*(i-=1))*Math.sin((i-r)*(2*Math.PI)/e)*.5+1)},inBack:function(i){var t=1.70158;return i*i*((t+1)*i-t)},outBack:function(i){var t=1.70158;return--i*i*((t+1)*i+t)+1},inOutBack:function(i){var t=2.5949095;return(i*=2)<1?.5*(i*i*((t+1)*i-t)):.5*((i-=2)*i*((t+1)*i+t)+2)},inBounce:function(i){return 1-nt.outBounce(1-i)},outBounce:function(i){return i<.36363636363636365?7.5625*i*i:i<.7272727272727273?7.5625*(i-=.5454545454545454)*i+.75:i<.9090909090909091?7.5625*(i-=.8181818181818182)*i+.9375:7.5625*(i-=.9545454545454546)*i+.984375},inOutBounce:function(i){return i<.5?nt.inBounce(i*2)*.5:nt.outBounce(i*2-1)*.5+.5}};var wt=[],Kr="outCubic";I.add(xs);function xs(i,t){for(let e=wt.length-1;e>=0;e--){let r=wt[e];r.update&&r.update(i,t)}}function X(i,t){let e=new U(null,i,t?{complete:t}:null),r=e.promise();return r.clear=e.stop.bind(e),r}var U=class{constructor(t,e,r){if(t&&!!t.forEach&&typeof t[0]=="object")return this.stagger(t,e,r);this.elapsed=0,this.object=t,this.duration=e,this.delay=0,this.suffix={},this.from={},this.to=Object.assign({},r),["ease","delay","spring","damping","repeat","repeatDelay","yoyo","yoyoEase"].forEach(n=>{this.to[n]!==void 0&&(this[n]=this.to[n],delete this.to[n])}),nt[this.ease]||(this.ease=Kr),this.yoyo&&(this.yoyoEase=nt[this.yoyoEase]||(()=>this.ease.includes("inOut")||this.ease==="linear"?nt[this.ease]:this.ease.includes("out")?nt[this.ease.replace("out","in")]:nt[this.ease.replace("in","out")])()),this.ease=nt[this.ease],["update","complete"].forEach(n=>{this.to[n]!==void 0&&(this[n+"Callbacks"]||(this[n+"Callbacks"]=[]),this[n+"Callbacks"].push(this.to[n]),delete this.to[n])}),t&&!t._anims&&(Object.defineProperty(t,"_anims",{enumerable:!1,writable:!0}),t._anims={});for(let n in this.to)if(t._anims[n]&&t._anims[n].override(n),this.from[n]=t[n],t._anims[n]=this,typeof this.from[n]=="string"){let s=this.from[n].split(/([^\d-.]+)/);this.from[n]=Number.parseFloat(this.from[n]),typeof this.to[n]=="string"&&(this.to[n]=Number.parseFloat(this.to[n])),s.length>2&&(this.suffix[n]=s[s.length-2])}return wt.push(this),this}update(t){this.elapsed+=t;let e=Math.max(0,Math.min(1,(this.elapsed-this.delay)/this.duration)),r=this.ease(e,this.spring,this.damping);for(let n in this.to)this.object[n]=this.from[n]+(this.to[n]-this.from[n])*r,this.suffix[n]&&(this.object[n]+=this.suffix[n]);this.updateCallbacks&&this.updateCallbacks.forEach(n=>n&&n()),e===1&&this.complete()}complete(){if(this.repeat){this.repeat>0&&this.repeat--,this.elapsed=0,this.delay=this.repeatDelay||0,this.yoyo&&this.reverse();return}for(let t in this.to)delete this.object._anims[t];this.stop(),this.completeCallbacks&&this.completeCallbacks.forEach(t=>t&&t()),this._promise&&this._promise.resolve()}stop(){wt.includes(this)&&wt.splice(wt.indexOf(this),1)}stagger(t,e,r){let n=r.stagger||0,s=typeof r.stagger=="function"?r.stagger:(u,h)=>n<0?-n*(h-1)+n*u:n*u,a=r.staggerComplete;r.stagger&&delete r.stagger,r.staggerComplete&&delete r.staggerComplete;let o=r.delay||0,l,c=t.map((u,h)=>{r.delay=o+s(h,t.length);let f=new U(u,e,r);return(!l||r.delay>l.delay)&&(l=f),f});return a&&l.onComplete(a),c}reverse(){for(let e in this.to){let r=this.to[e];this.to[e]=this.from[e],this.from[e]=r}let t=this.ease;this.ease=this.yoyoEase,this.yoyoEase=t}override(t){delete this.from[t],delete this.to[t],Object.keys(this.to).length||this.stop()}onUpdate(t){return this.updateCallbacks||(this.updateCallbacks=[]),this.updateCallbacks.push(t),this}onComplete(t){return this.completeCallbacks||(this.completeCallbacks=[]),this.completeCallbacks.push(t),this}promise(){return this._promise?this._promise:this._promise=_s()}static clear(t){if(!(!t||!t._anims))for(let e in t._anims)t._anims[e].stop(),delete t._anims[e]}static setDefaultEase(t){Kr=t}};function _s(){let i,t=new Promise(e=>i=e);return t.resolve=i,t}var Ge=class{constructor(){this.events=[]}on(t,e){this.events.push({name:t,callback:e})}off(t,e){for(let r=this.events.length-1;r>=0;r--)this.events[r].name===t&&this.events[r].callback===e&&this.events.splice(r,1)}emit(t,e={}){this.events.forEach(r=>{r.name===t&&r.callback(e)})}},C=new Ge;var Tt=class extends Array{constructor(t=0,e=t){return super(t,e),this}get x(){return this[0]}set x(t){this[0]=t}get y(){return this[1]}set y(t){this[1]=t}set(t,e=t){return t.length?this.copy(t):(this[0]=t,this[1]=e,this)}copy(t){return this[0]=t[0],this[1]=t[1],this}len(){return Math.sqrt(this[0]*this[0]+this[1]*this[1])}},He=class{constructor(){let t=this;this.pixel=new Tt,this.normal=new Tt(.5),this.tilt=new Tt,this.normalFlip=new Tt(.5);let e,r;n();function n(){window.addEventListener("pointerdown",a),window.addEventListener("pointermove",o),window.addEventListener("touchmove",o),window.addEventListener("pointerup",l),window.addEventListener("resize",s),window.addEventListener("orientationchange",s),s()}function s(){e=window.innerWidth,r=window.innerHeight}function a(u){c(u)}function o(u){c(u)}function l(){}function c(u){u.changedTouches&&u.changedTouches.length&&(u.x=u.changedTouches[0].pageX,u.y=u.changedTouches[0].pageY),u.x===void 0&&(u.x=u.pageX,u.y=u.pageY),t.pixel.set(u.x,u.y),t.normal.x=t.pixel.x/e,t.normal.y=t.pixel.y/r,t.normalFlip.x=t.normal.x,t.normalFlip.y=1-t.normal.y,t.tilt.x=t.normalFlip.x*2-1,t.tilt.y=t.normalFlip.y*2-1}}},Pt=new He;var Xe=class{constructor(){this.data={},this.events={}}link(t,e){Array.isArray(t)||(t=[t]);let r=!1;t.forEach(n=>{this.data[n]!==void 0&&(r=!0),this.events[n]||(this.events[n]=[]),this.events[n].push(e)}),r&&e&&e(this.data)}unlink(t,e){Array.isArray(t)||(t=[t]),t.forEach(r=>{!this.events[r]||this.events[r].includes(e)&&this.events[r].splice(this.events[r].indexOf(e),1)})}push(t){let e=[];for(let r in t){if(this.data[r]===t[r]){delete t[r];continue}!this.events[r]||this.events[r].forEach(n=>{e.includes(n)||e.push(n)})}Object.entries(t).length!==0&&(Object.assign(this.data,t),e.length&&e.forEach(r=>r&&r(this.data)))}},y=new Xe;var bs=Date.now()%1e9,A=class{static sign(t){return t=+t,t===0||isNaN(t)?Number(t):t>0?1:-1}static round(t,e=0){let r=Math.pow(10,e);return Math.round(t*r)/r}static random(t,e,r=0){return typeof t>"u"?Math.random():t===e?t:(t=t||0,e=e||1,A.round(t+Math.random()*(e-t),r))}static flip(t=-1,e=1){return Math.random()>.5?t:e}static degrees(t){return t*(180/Math.PI)}static radians(t){return t*(Math.PI/180)}static clamp(t,e=0,r=1){return Math.min(Math.max(t,Math.min(e,r)),Math.max(e,r))}static map(t,e=-1,r=1,n=0,s=1,a){let o=(t-e)*(s-n)/(r-e)+n;return a?A.clamp(o,Math.min(n,s),Math.max(n,s)):o}static mix(t,e,r){return t*(1-r)+e*r}static step(t,e){return e<t?0:1}static smoothstep(t,e,r){let n=A.clamp((r-t)/(e-t));return n*n*(3-2*n)}static fract(t){return t-Math.floor(t)}static mod(t,e){return(t%e+e)%e}static guid(){return(Math.random()*1e9>>>0)+bs++}static padInt(t,e=2,r){r&&(t=Math.min(t,Math.pow(10,e)-1));let n=Math.floor(t).toString();return Math.pow(10,Math.max(0,e-n.length)).toString().slice(1)+n}static powerOfTwo(t){return Math.log2(t)%1===0}},Nt=class{static shuffle(t){let e=t.length,r,n;for(;e!==0;)n=A.random(0,e,0),e-=1,r=t[e],t[e]=t[n],t[n]=r;return t}static random(t,e){let r=A.random(0,t.length-1);if(!e)return t[r];for(t.randomStore||(t.randomStore=[]),e=Math.min(e,t.length);~t.randomStore.indexOf(r);)(r+=1)>t.length-1&&(r=0);return t.randomStore.push(r),t.randomStore.length>=e&&t.randomStore.shift(),t[r]}static remove(t,e){let r=t.indexOf(e);if(~r)return t.splice(r,1)}static last(t){return t[t.length-1]}static filterList(t,e){for(let r=t.length-1;r>=0;r--)t[r].includes(e)||t.splice(r,1);return t}static excludeList(t,e){for(let r=t.length-1;r>=0;r--)t[r].includes(e)&&t.splice(r,1);return t}},tt=class{static includes(t,e){if(!Array.isArray(e))return~t.indexOf(e);for(let r=e.length-1;r>=0;r--)if(~t.indexOf(e[r]))return!0;return!1}static includesAll(t,e){if(!Array.isArray(e))return~t.indexOf(e);for(let r=e.length-1;r>=0;r--)if(!~t.indexOf(e[r]))return!1;return!0}static equals(t,e){if(!Array.isArray(e))return t===e;for(let r=e.length-1;r>=0;r--)if(t===e[r])return t;return!1}static replaceAll(t,e,r){return t.split(e).join(r)}static delimit(t,e=","){return t.replace(/\B(?=(\d{3})+(?!\d))/g,e)}static capitalize(t){return t.charAt(0).toUpperCase()+t.slice(1)}};var $e=0,qe=class{constructor(){}init(t=[],{mode:e="history",root:r="",parent:n=document.body}={}){this.routes=t,this.mode=e,this.parent=n,this.activeComponent=null,this.activeRoute=null,this.idleComponents=new Map,this.path="",this.keys=null,this.isRouting=!1,this.search=window.location.search,r&&(r.slice(0,1)!=="/"&&(r="/"+r),r.slice(-1)==="/"&&(r=r.slice(0,-1)),r==="/"&&(r="")),this.root=r,window.addEventListener("popstate",s=>this.stateChange(s),!1),this.stateChange()}async stateChange(){let t=++$e,e=this.getLocationPath();if(this.path===e)return;let r=this.path;this.path=e;let n=this.getRouteComponent();if(!n)return console.warn(`Unable to match ${this.path} with provided routes`);this.keys=n.keys,this.isRouting=!0,C.emit("router_start",{route:n,path:e});let s;if(this.activeComponent){let o=this.activeComponent;if(s=this.activeRoute.component,this.activeRoute.keepAlive&&this.idleComponents.set(this.activeRoute.component,o),this.activeComponent=null,this.activeRoute=null,o.deactivate&&await o.deactivate({nextPath:e,nextComponent:n.component.name,keys:n.keys}),o==this.activeComponent)return;this.parent.removeChild(o)}if(t!==$e)return;let a;this.idleComponents.has(n.component)?(a=this.idleComponents.get(n.component),this.idleComponents.delete(n.component)):a=document.createElement(n.component),this.parent.appendChild(a),this.activeComponent=a,this.activeRoute=n,C.emit("router_change",{route:n,path:e}),setTimeout(async()=>{a.activate&&await a.activate({prevPath:r,prevComponentName:s,keys:n.keys}),t===$e&&(this.isRouting=!1,C.emit("router_complete"))},0)}push({event:t,path:e,title:r}){if(e=this.formatLocation(e),t&&(t.ctrlKey||t.metaKey||t.which===2))return open(e,"_blank");r&&(document.title=r),this.mode==="hash"&&history.pushState(null,null,e),this.mode==="history"&&history.pushState(null,null,e),this.stateChange()}replace({path:t,title:e}){t=this.formatLocation(t),e&&(document.title=e),this.mode==="hash"&&history.replaceState(null,null,t),this.mode==="history"&&history.replaceState(null,null,t)}getLocationPath(){let t=(()=>{if(this.mode==="history")return this.root?location.pathname.split(this.root).last():location.pathname;if(this.mode==="hash")return location.hash?location.hash.slice(1):"/"})();return t.slice(-1)!=="/"&&(t+="/"),t}formatLocation(t){return(this.mode==="hash"?"#":this.root)+(t.slice(0,1)!=="/"?"/":"")+t+(this.mode==="history"&&this.search?this.search:"")}getRouteComponent(){let t;return this.routes.every(e=>{let r=this.regexparam(e.path),n=r.pattern.exec(this.path);if(!n)return!0;let s={};r.keys.forEach((a,o)=>s[a]=n[o+1]||null),t=Object.assign(e,{keys:s})}),t}regexparam(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};let r,n,s,a,o=[],l="",c=t.split("/");for(c[0]||c.shift();s=c.shift();)r=s[0],r==="*"?(o.push("wild"),l+="/(.*)"):r===":"?(n=s.indexOf("?",1),a=s.indexOf(".",1),o.push(s.substring(1,~n?n:~a?a:s.length)),l+=!!~n&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(l+=(~n?"?":"")+"\\"+s.substring(a))):l+="/"+s;return{keys:o,pattern:new RegExp("^"+l+(e?"(?=$|/)":"/?$"),"i")}}},ys=new qe;var Qr={vertex:`
attribute vec3 position;

#define PI 3.141592653589793

#ifdef UV
    attribute vec2 uv;
#else
    const vec2 uv = vec2(0);
#endif

#ifdef UV2
    attribute vec2 uv2;
#else
    const vec2 uv2 = vec2(0);
#endif

#ifdef NORMAL
    attribute vec3 normal;
#else
    const vec3 normal = vec3(0);
#endif

#ifdef VERTEX_COLOR
    attribute vec4 color;
#else
    const vec4 color = vec4(1);
#endif

#ifdef INSTANCED
    attribute mat4 instanceMatrix;
#endif

#ifdef SKINNING
    attribute vec4 skinIndex;
    attribute vec4 skinWeight;
#endif

#ifdef INSTANCED_SKIN
    attribute vec4 skinIndex;
    attribute vec4 skinWeight;
    attribute float frame;
    attribute float avatarIndex;
#endif

#ifdef LIGHTMAP_SCALE_OFFSET
    attribute vec4 lightmapScaleOffset;
#endif

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

#ifdef SKINNING
    uniform highp sampler2D boneTexture;
    uniform int boneTextureSize;
#endif

#ifdef INSTANCED_SKIN
    uniform sampler2D animationTexture;
    uniform vec2 animationTextureSize;
#endif

#ifdef SHADOWS
    uniform mat4 shadowViewMatrix;
    uniform mat4 shadowProjectionMatrix;
#endif

uniform float uTime;
uniform vec3 uPlayer;
uniform float uCurvatureX;
uniform float uCurvatureZ;
uniform float uBonusBoost;

// UNIFORMS
// VERTEX_UNIFORMS 

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec4 vColor;
varying vec3 vMPos;
varying vec3 vMVPos;

#ifdef INSTANCED_SKIN
  varying float vAvatarIndex;
#endif

#ifdef LIGHTMAP_SCALE_OFFSET
    varying vec4 vLightmapScaleOffset;
#endif

#ifdef SHADOWS
  varying vec4 vLightNDC;

  // Matrix to shift range from -1->1 to 0->1
  const mat4 depthScaleMatrix = mat4(
    0.5, 0, 0, 0, 
    0, 0.5, 0, 0, 
    0, 0, 0.5, 0, 
    0.5, 0.5, 0.5, 1
);
#endif

// VARYING
// VERTEX_VARYING

#ifdef SKINNING
    mat4 getBoneMatrix(const in float i) {
        float j = i * 4.0;
        float x = mod(j, float(boneTextureSize));
        float y = floor(j / float(boneTextureSize));

        float dx = 1.0 / float(boneTextureSize);
        float dy = 1.0 / float(boneTextureSize);

        y = dy * (y + 0.5);

        vec4 v1 = texture2D(boneTexture, vec2(dx * (x + 0.5), y));
        vec4 v2 = texture2D(boneTexture, vec2(dx * (x + 1.5), y));
        vec4 v3 = texture2D(boneTexture, vec2(dx * (x + 2.5), y));
        vec4 v4 = texture2D(boneTexture, vec2(dx * (x + 3.5), y));

        return mat4(v1, v2, v3, v4);
    }

    void skin(inout vec4 pos, inout vec3 nml) {
        mat4 boneMatX = getBoneMatrix(skinIndex.x);
        mat4 boneMatY = getBoneMatrix(skinIndex.y);
        mat4 boneMatZ = getBoneMatrix(skinIndex.z);
        mat4 boneMatW = getBoneMatrix(skinIndex.w);

        // update normal
        mat4 skinMatrix = mat4(0.0);
        skinMatrix += skinWeight.x * boneMatX;
        skinMatrix += skinWeight.y * boneMatY;
        skinMatrix += skinWeight.z * boneMatZ;
        skinMatrix += skinWeight.w * boneMatW;
        nml = vec4(skinMatrix * vec4(nml, 0.0)).xyz;

        // Update position
        vec4 transformed = vec4(0.0);
        transformed += boneMatX * pos * skinWeight.x;
        transformed += boneMatY * pos * skinWeight.y;
        transformed += boneMatZ * pos * skinWeight.z;
        transformed += boneMatW * pos * skinWeight.w;
        pos = transformed;
    }
#endif

#ifdef INSTANCED_SKIN
    mat4 getBoneMatrix(const in float i) {
        float x = i * 4.0;
        float y = frame;

        float dx = 1.0 / animationTextureSize.x;
        float dy = 1.0 / animationTextureSize.y;

        y = dy * (y + 0.5);

        vec4 v1 = texture2D(animationTexture, vec2(dx * (x + 0.5), y));
        vec4 v2 = texture2D(animationTexture, vec2(dx * (x + 1.5), y));
        vec4 v3 = texture2D(animationTexture, vec2(dx * (x + 2.5), y));
        vec4 v4 = texture2D(animationTexture, vec2(dx * (x + 3.5), y));

        return mat4(v1, v2, v3, v4);
    }

    void skin(inout vec4 pos, inout vec3 nml) {
        // update normal
        mat4 skinMatrix = mat4(0.0);
        // Update position
        vec4 transformed = vec4(0.0);

        mat4 boneMatX = getBoneMatrix(skinIndex.x);
        skinMatrix += skinWeight.x * boneMatX;
        transformed += boneMatX * pos * skinWeight.x;

        if (skinWeight.y > 0.0) {
            mat4 boneMatY = getBoneMatrix(skinIndex.y);
            skinMatrix += skinWeight.y * boneMatY;
            transformed += boneMatY * pos * skinWeight.y;

            if (skinWeight.z > 0.0) {
                mat4 boneMatZ = getBoneMatrix(skinIndex.z);
                skinMatrix += skinWeight.z * boneMatZ;
                transformed += boneMatZ * pos * skinWeight.z;

                if (skinWeight.w > 0.0) {
                    mat4 boneMatW = getBoneMatrix(skinIndex.w);
                    skinMatrix += skinWeight.w * boneMatW;
                    transformed += boneMatW * pos * skinWeight.w;
                }
            }
        }

        nml = vec4(skinMatrix * vec4(nml, 0.0)).xyz;
        pos = transformed;
    }
#endif

highp float rand(const in vec2 uv) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);
    return fract(sin(sn) * c);
}

vec2 rotate2d(vec2 v, float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, -s, s, c) * v;
}

// VERTEX_PRE_MAIN

void main() {
    vec4 pos = vec4(position, 1);
    vec3 nml = normal;

    #ifdef LIGHTMAP_SCALE_OFFSET
        vLightmapScaleOffset = lightmapScaleOffset;
    #endif

    // START_POS

    #ifdef SKINNING
        skin(pos, nml);
    #endif

    #ifdef INSTANCED_SKIN
        skin(pos, nml);
        vAvatarIndex = avatarIndex;
    #endif

    #ifdef INSTANCED
        pos = instanceMatrix * pos;

        mat3 m = mat3(instanceMatrix);
        nml /= vec3(dot(m[0], m[0]), dot(m[1], m[1]), dot(m[2], m[2]));
        nml = m * nml;
    #endif

    vUv = uv;
    vUv2 = uv2;
    vNormal = normalize(normalMatrix * nml);
    vColor = color;

    vec4 mPos = modelMatrix * pos;

    #ifdef SHADOWS
      // Calculate the NDC (normalized device coords) for the light to compare against shadowmap
      vLightNDC = depthScaleMatrix * shadowProjectionMatrix * shadowViewMatrix * mPos;
    #endif


    // Spherical effect START
    float deformXStrength = -0.1 * uCurvatureX;
    float deformZStrength = 0.005 * uCurvatureZ;
    // vec2 deformDiff = mPos.xz - uPlayer.xz;
    // vec3 deformOrigin = uPlayer + vec3(0.0, -1.0, 0.0);
    // Always origin
    vec2 deformDiff = mPos.xz;
    vec3 deformOrigin = vec3(0.0, -1.0, 0.0);
    mPos.xyz -= deformOrigin;

    float deformX = max(-1.0, min(1.0, deformDiff.x * deformXStrength));
    // mPos.xy = rotate2d(mPos.xy, deformX);

    float deformZ = max(-1.0, min(1.0, deformDiff.y * deformZStrength));
    mPos.zy = rotate2d(mPos.zy, deformZ);

    mPos.xyz += deformOrigin;
    // Spherical effect END


    vMPos = mPos.xyz;

    // END_M_POS

    // vec4 mVPos = modelViewMatrix * pos;
    vec4 mVPos = viewMatrix * mPos;
    vMVPos = mVPos.xyz;

    // END_POS

    gl_Position = projectionMatrix * mVPos;
}
  `,fragment:`

uniform mat4 viewMatrix;
uniform mat3 normalMatrix;
uniform vec3 cameraPosition;

uniform float uTime;
uniform float uAspect;
uniform vec2 uResolution;
uniform vec3 uPlayer;

uniform vec4 uBaseColor;
uniform sampler2D tBaseColor;
uniform vec2 uBaseColorScale;

uniform sampler2D tORM;
uniform vec2 uORMScale;
uniform float uAOStrength;
uniform float uRoughness;
uniform float uMetalness;

uniform sampler2D tNormal;
uniform vec2 uNormalScale;
uniform float uNormalStrength;

uniform sampler2D tEmissive;
uniform vec2 uEmissiveScale;
uniform vec3 uEmissive;

uniform sampler2D tLightmap;

uniform sampler2D tEnvIrradiance;
uniform sampler2D tEnvRadiance;
uniform float uEnvIntensity;

uniform float uAlphaCutoff;

uniform vec3 uFogColor;
uniform vec3 uFogNearFarAlpha;
uniform float uBonusBoost;

#ifdef SHADOWS
    uniform sampler2D tShadow;
#endif

// UNIFORMS
// FRAGMENT_UNIFORMS

varying vec2 vUv;
varying vec2 vUv2;
varying vec3 vNormal;
varying vec4 vColor;
varying vec3 vMPos;
varying vec3 vMVPos;

// VARYING
// FRAGMENT_VARYING

#ifdef INSTANCED_SKIN
    varying float vAvatarIndex;
#endif

#ifdef LIGHTMAP_SCALE_OFFSET
    varying vec4 vLightmapScaleOffset;
#endif

#ifdef SHADOWS
    varying vec4 vLightNDC;

    float unpackRGBA (vec4 v) {
        return dot(v, 1.0 / vec4(1.0, 255.0, 65025.0, 16581375.0));
    }
#endif

// out vec4 gl_FragColor;

#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#define LN2 0.69314718056
#define ENV_LODS 6.0
#define saturate(a) clamp(a, 0.0, 1.0)

struct IncidentLight {
    vec3 color;
    vec3 direction;
    bool visible;
};

struct ReflectedLight {
    vec3 directDiffuse;
    vec3 directSpecular;
    vec3 indirectDiffuse;
    vec3 indirectSpecular;
};

struct GeometricContext {
    vec3 position;
    vec3 normal;
    vec3 viewDir;
};

struct PhysicalMaterial {
    vec3 diffuseColor;
    float roughness;
    vec3 specularColor;
    float specularF90;
};

struct DirectionalLight {
    vec3 direction;
    vec3 color;
};

struct PointLight {
    vec3 position;
    vec3 color;
    float distance;
    float decay;
};

#ifdef DIRECTIONAL_LIGHTS
    uniform DirectionalLight uDirectionalLights[NUM_DIRECTIONAL_LIGHTS];
#endif
#ifdef POINT_LIGHTS
    uniform PointLight uPointLights[NUM_POINT_LIGHTS];
#endif

uniform vec3 uAmbientLightColor;
// uniform vec3 uLightProbe[ 9 ];

float pow2(const in float x) {
    return x*x;
}

float pow3(const in float x) {
    return x*x*x;
}
float pow4(const in float x) {
    float x2 = x*x;
    return x2*x2;
}

float max3(const in vec3 v) {
    return max(max(v.x, v.y), v.z);
}

highp float rand(const in vec2 uv) {
    const highp float a = 12.9898, b = 78.233, c = 43758.5453;
    highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);
    return fract(sin(sn) * c);
}

vec2 rotate2d(vec2 v, float a) {
    float c = cos(a);
    float s = sin(a);
    return mat2(c, -s, s, c) * v;
}

vec4 RGBMToLinear(in vec4 value) {
    float maxRange = 6.0;
    return vec4(value.xyz * value.w * maxRange, 1.0);
}

vec3 SRGBtoLinear(in vec3 value) {
    return vec3(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))));
}

vec3 linearToSRGB(in vec3 value) {
    return vec3(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))));
}

vec4 SRGBtoLinear(in vec4 value) {
    return vec4(SRGBtoLinear(value.rgb), value.a);
    // return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.a);
}

vec4 linearToSRGB(in vec4 value) {
    return vec4(linearToSRGB(value.rgb), value.a);
    // return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.a);
}

vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
    return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection(in vec3 dir, in mat4 matrix) {
    return normalize((vec4(dir, 0.0) * matrix).xyz);
}

vec2 cartesianToPolar(vec3 n) {
    vec2 uv;
    uv.x = atan(n.z + EPSILON, n.x) * RECIPROCAL_PI2 + 0.5;
    uv.y = asin(n.y) * RECIPROCAL_PI + 0.5;
    return uv;
}

vec3 dithering(vec3 color) {
    float r = rand(gl_FragCoord.xy);
    vec3 rgb = vec3(0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0);
    rgb = mix(2.0 * rgb, -2.0 * rgb, r);
    return color + rgb;
}

vec3 acesToneMap(vec3 color, float exposure) {
    float tA = 2.51;
    float tB = 0.03;
    float tC = 2.43;
    float tD = 0.59;
    float tE = 0.14;
    vec3 x = color * exposure;
    return (x*(tA*x+tB))/(x*(tC*x+tD)+tE);
}



vec3 BRDF_Lambert(const in vec3 diffuseColor) {
    return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick(const in vec3 f0, const in float f90, const in float dotVH) {
    float fresnel = exp2((- 5.55473 * dotVH - 6.98316) * dotVH);
    return f0 * (1.0 - fresnel) + (f90 * fresnel);
}
float V_GGX_SmithCorrelated(const in float alpha, const in float dotNL, const in float dotNV) {
    float a2 = pow2(alpha);
    float gv = dotNL * sqrt(a2 + (1.0 - a2) * pow2(dotNV));
    float gl = dotNV * sqrt(a2 + (1.0 - a2) * pow2(dotNL));
    return 0.5 / max(gv + gl, EPSILON);
}
float D_GGX(const in float alpha, const in float dotNH) {
    float a2 = pow2(alpha);
    float denom = pow2(dotNH) * (a2 - 1.0) + 1.0;
    return RECIPROCAL_PI * a2 / pow2(denom);
}
vec3 BRDF_GGX(const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness) {
    float alpha = pow2(roughness);
    vec3 halfDir = normalize(lightDir + viewDir);
    float dotNL = saturate(dot(normal, lightDir));
    float dotNV = saturate(dot(normal, viewDir));
    float dotNH = saturate(dot(normal, halfDir));
    float dotVH = saturate(dot(viewDir, halfDir));
    vec3 F = F_Schlick(f0, f90, dotVH);
    float V = V_GGX_SmithCorrelated(alpha, dotNL, dotNV);
    float D = D_GGX(alpha, dotNH);
    return F * (V * D);
}

vec2 DFGApprox(const in vec3 normal, const in vec3 viewDir, const in float roughness) {
    float dotNV = saturate(dot(normal, viewDir));
    const vec4 c0 = vec4(- 1, - 0.0275, - 0.572, 0.022);
    const vec4 c1 = vec4(1, 0.0425, 1.04, - 0.04);
    vec4 r = roughness * c0 + c1;
    float a004 = min(r.x * r.x, exp2(- 9.28 * dotNV)) * r.x + r.y;
    vec2 fab = vec2(- 1.04, 1.04) * a004 + r.zw;
    return fab;
}
vec3 EnvironmentBRDF(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness) {
    vec2 fab = DFGApprox(normal, viewDir, roughness);
    return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering(const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter) {
    vec2 fab = DFGApprox(normal, viewDir, roughness);
    vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
    float Ess = fab.x + fab.y;
    float Ems = 1.0 - Ess;
    vec3 Favg = specularColor + (1.0 - specularColor) * 0.047619;
    vec3 Fms = FssEss * Favg / (1.0 - Ems * Favg);
    singleScatter += FssEss;
    multiScatter += Fms * Ems;
}

float getDistanceAttenuation(const in float lightDistance, const in float cutoffDistance, const in float decayExponent) {
    float distanceFalloff = 1.0 / max(pow(lightDistance, decayExponent), 0.01);
    if (cutoffDistance > 0.0) {
        distanceFalloff *= pow2(saturate(1.0 - pow4(lightDistance / cutoffDistance)));
    }
    return distanceFalloff;
}

void getDirectionalLightInfo(const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light) {
    light.color = directionalLight.color;
    light.direction = normalize(directionalLight.direction);
    // So that light doesn't follow camera
    light.direction = transformDirection(light.direction, viewMatrix);
    light.visible = true;
}

void getPointLightInfo(const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light) {
    vec3 lVector = (viewMatrix * vec4(pointLight.position, 1.0)).xyz - geometry.position;
    light.direction = normalize(lVector);
    float lightDistance = length(lVector);
    light.color = pointLight.color;
    light.color *= getDistanceAttenuation(lightDistance, pointLight.distance, pointLight.decay);
    light.visible = (light.color != vec3(0.0));
}

void RE_Direct(const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    float dotNL = saturate(dot(geometry.normal, directLight.direction));
    vec3 irradiance = dotNL * directLight.color;
    reflectedLight.directSpecular += irradiance * BRDF_GGX(directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness);
    reflectedLight.directDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectDiffuse(const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert(material.diffuseColor);
}

void RE_IndirectSpecular(const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
    vec3 singleScattering = vec3(0.0);
    vec3 multiScattering = vec3(0.0);
    vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
    computeMultiscattering(geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering);
    vec3 diffuse = material.diffuseColor * (1.0 - (singleScattering + multiScattering));
    reflectedLight.indirectSpecular += radiance * singleScattering;
    reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
    reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}

// vec3 shGetIrradianceAt(in vec3 normal, in vec3 shCoefficients[ 9 ]) {
//     float x = normal.x, y = normal.y, z = normal.z;
//     vec3 result = shCoefficients[ 0 ] * 0.886227;
//     result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
//     result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
//     result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
//     result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
//     result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
//     result += shCoefficients[ 6 ] * (0.743125 * z * z - 0.247708);
//     result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
//     result += shCoefficients[ 8 ] * 0.429043 * (x * x - y * y);
//     return result;
// }

// vec3 getLightProbeIrradiance(const in vec3 lightProbe[ 9 ], const in vec3 normal) {
//     vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
//     vec3 irradiance = shGetIrradianceAt(worldNormal, lightProbe);
//     return irradiance;
// }

vec3 getAmbientLightIrradiance(const in vec3 ambientLightColor) {
    vec3 irradiance = ambientLightColor;
    return irradiance;
}

vec3 getIBLIrradiance(const in vec3 normal) {
    vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);
    vec3 envMapColor = RGBMToLinear(texture2D(tEnvIrradiance, cartesianToPolar(worldNormal))).rgb;
    return PI * envMapColor.rgb * uEnvIntensity;
}

vec3 getIBLRadiance(const in vec3 viewDir, const in vec3 normal, const in float roughness) {
    vec3 reflectVec;
    reflectVec = reflect(-viewDir, normal);
    reflectVec = normalize(mix(reflectVec, normal, roughness * roughness));
    // Refraction
    // reflectVec = refract(- viewDir, normal, refractionRatio);
    reflectVec = inverseTransformDirection(reflectVec, viewMatrix);

    // Sample 2 levels and mix between to get smoother degradation
    float blend = roughness * ENV_LODS;
    float level0 = floor(blend);
    float level1 = min(ENV_LODS, level0 + 1.0);
    blend -= level0;

    // Sample the specular env map atlas depending on the roughness value
    vec2 uvSpec = cartesianToPolar(reflectVec) + vec2(0.05, 0.0);
    uvSpec.y /= 2.0;

    vec2 uv0 = uvSpec;
    vec2 uv1 = uvSpec;

    uv0 /= pow(2.0, level0);
    uv0.y += 1.0 - exp(-LN2 * level0);

    uv1 /= pow(2.0, level1);
    uv1.y += 1.0 - exp(-LN2 * level1);

    vec3 radiance0 = RGBMToLinear(texture2D(tEnvRadiance, uv0)).rgb;
    vec3 radiance1 = RGBMToLinear(texture2D(tEnvRadiance, uv1)).rgb;
    vec3 envMapColor = mix(radiance0, radiance1, blend);

    return envMapColor.rgb * uEnvIntensity;
}

float computeSpecularOcclusion(const in float dotNV, const in float ambientOcclusion, const in float roughness) {
    return saturate(pow(dotNV + ambientOcclusion, exp2(- 16.0 * roughness - 1.0)) - 1.0 + ambientOcclusion);
}

vec3 getNormal() {
    vec3 normal = normalize(vNormal);
    #ifdef DOUBLE_SIDED
        float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
        normal = normal * faceDirection;
    #endif
    #ifdef NORMAL_MAP  
        vec3 pos_dx = dFdx(vMVPos.xyz);
        vec3 pos_dy = dFdy(vMVPos.xyz);
        vec2 tex_dx = dFdx(vUv);
        vec2 tex_dy = dFdy(vUv);

        vec3 t = normalize(pos_dx * tex_dy.t - pos_dy * tex_dx.t);
        vec3 b = normalize(-pos_dx * tex_dy.s + pos_dy * tex_dx.s);
        mat3 tbn = mat3(t, b, normal);

        vec3 n = texture2D(tNormal, vUv * uNormalScale).rgb * 2.0 - 1.0;
        n.xy *= uNormalStrength;
        return normalize(tbn * n);
    #else
        return normal;
    #endif
}

vec4 getLightMap() {
    vec2 uvLightmap = vUv2;
    uvLightmap.y = 1.0 - uvLightmap.y;
    #ifdef LIGHTMAP_SCALE_OFFSET
        uvLightmap *= vLightmapScaleOffset.xy;
        uvLightmap += vLightmapScaleOffset.zw;
    #endif
    uvLightmap.y = 1.0 - uvLightmap.y;
    return SRGBtoLinear(texture2D(tLightmap, uvLightmap));
}

// FRAGMENT_PRE_MAIN

void main() {

    // MAIN START

    // distance from the camera
    float dist = length(vMVPos);

    // Inputs
    // If applying vertex colours, use like this
    // vec4 baseColor = uBaseColor * vColor;
    vec4 baseColor = uBaseColor;
    #ifdef COLOR_MAP
        baseColor *= SRGBtoLinear(texture2D(tBaseColor, vUv * uBaseColorScale));
    #endif
    float alpha = baseColor.a;

    // Quit early if possible
    #ifdef ALPHA_MASK
        if (alpha < uAlphaCutoff) discard;
    #endif

    vec3 color = vec3(0);

    // COLOR START

    // Geometry variables
    GeometricContext geometry;
    geometry.position = vMVPos;
    geometry.normal = getNormal();
    geometry.viewDir = normalize(-vMVPos);

    #ifndef UNLIT
        // ORM map packed as rgba = [ambient-occlusion, roughness, metalness, nothing]
        vec4 ormSample = vec4(1);
        #ifdef ORM_MAP
            ormSample *= texture2D(tORM, vUv * uORMScale);
        #endif
        float aoInput = (ormSample.r - 1.0) * uAOStrength + 1.0;
        float roughnessInput = ormSample.g * uRoughness;
        float metalnessInput = ormSample.b * uMetalness;

        // Outputs
        ReflectedLight reflectedLight = ReflectedLight(vec3(0), vec3(0), vec3(0), vec3(0));

        PhysicalMaterial material;
        vec3 f0 = vec3(0.04);
        vec3 normal = vNormal;
        #ifdef DOUBLE_SIDED
            float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
            normal = normal * faceDirection;
        #endif
        vec3 dxy = max(abs(dFdx(normal)), abs(dFdy(normal)));
        material.roughness = min(1.0, max(0.0525, roughnessInput) + max3(dxy));
        material.diffuseColor = baseColor.rgb * (1.0 - metalnessInput);
        material.specularColor = mix(f0, baseColor.rgb, metalnessInput);
        material.specularF90 = 1.0;

        // Actual lights
        IncidentLight directLight;

        // Point lights
        PointLight pointLight;
        // POINT LIGHTS

        // Directional lights
        DirectionalLight directionalLight;
        // DIRECTIONAL LIGHTS

        // IBL
        vec3 iblIrradiance = vec3(0);
        vec3 irradiance = vec3(0);
        irradiance += getAmbientLightIrradiance(uAmbientLightColor);
        iblIrradiance += getIBLIrradiance(geometry.normal);
        irradiance += iblIrradiance;

        // TODO: Test using SH light probe (in what situation?)
        // irradiance += getLightProbeIrradiance(uLightProbe, geometry.normal);

        vec3 radiance = vec3(0.0);
        vec3 clearcoatRadiance = vec3(0.0);
        radiance += getIBLRadiance(geometry.viewDir, geometry.normal, material.roughness);
        RE_IndirectDiffuse(irradiance, geometry, material, reflectedLight);
        RE_IndirectSpecular(radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight);

        // IBL END

        // Ambient Occlusion
        reflectedLight.indirectDiffuse *= aoInput;
        float dotNV = saturate(dot(geometry.normal, geometry.viewDir));
        reflectedLight.indirectSpecular *= computeSpecularOcclusion(dotNV, aoInput, material.roughness);

        #ifdef LIGHTMAP
            // TODO: Figure out how best to apply lightmap
            vec3 lightMapTex = getLightMap().rgb;
            // vec3 lightMapIrradiance = lightMapTex * 2.0 - 1.0;
            // TODO: play with this to look good
            // lightMapIrradiance *= PI;
            // irradiance += lightMapIrradiance;
            // TODO: affect directLight too - but at what point?
            // reflectedLight.directDiffuse *= lightMapTex;
            // reflectedLight.directSpecular *= lightMapTex;
            reflectedLight.indirectDiffuse *= lightMapTex;
            reflectedLight.indirectSpecular *= lightMapTex;
        #endif

        vec3 diffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
        vec3 specular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

        color = diffuse + specular;
    #endif

    #ifdef UNLIT
        color = baseColor.rgb;

        #ifdef LIGHTMAP
            vec3 lightMapTex = getLightMap().rgb;
            color *= lightMapTex;
        #endif
    #endif

    vec3 emissive = uEmissive;
    #ifdef EMISSIVE_MAP  
        emissive *= SRGBtoLinear(texture2D(tEmissive, vUv * uEmissiveScale)).rgb;
    #endif

    color += emissive;

    #ifdef ADDITIVE
        // In case textures are using alpha rather than colour
        color *= alpha;
    #endif

    // TODO: if glass, make reflections/specular visible
    // // Add IBL spec to alpha for reflections on transparent surfaces (glass)
    // alpha = max(alpha, max(max(specularIBL.r, specularIBL.g), specularIBL.b));
        // // Add lights spec to alpha for reflections on transparent surfaces (glass)
    // alpha = max(alpha, max(max(specContrib.r, specContrib.g), specContrib.b));

    // FINAL COLOR

    // TODO: add shadow to directLight
    #ifdef SHADOWS
        vec3 lightPos = vLightNDC.xyz / vLightNDC.w;

        float bias = 0.001;
        float depth = lightPos.z - bias;
        float occluder = unpackRGBA(texture2D(tShadow, lightPos.xy));

        vec3 shadowUV = abs(lightPos.xyz - 0.5);
        float shadowEdges = smoothstep(0.4, 0.5, max(max(shadowUV.x, shadowUV.y), shadowUV.z));

        // Compare actual depth from light to the occluded depth rendered in the depth map
        // If the occluded depth is smaller, we must be in shadow
        float shadow = mix(0.0, 1.0, step(depth, occluder));
        shadow = mix(shadow, 1.0, shadowEdges);

        // TODO: add normal into calculation so opposite facing sides are in shade

        // vec3 N = geometry.normal;
        // vec3 L = normalize(uLightDirection);
        // float NdL = clamp(dot(N, L), 0.001, 1.0);

        // TODO: shadow color
        vec3 shadowColor = vec3(0.5);
        // vec3 shading = mix(uShadowColor, vec3(1.0), min(NdL, shadow));
        vec3 shading = mix(shadowColor, vec3(1.0), shadow);
        color.rgb *= shading;
    #endif

    // vec3 N = normalize(geometry.normal);
    // vec3 L = normalize(vec3(0.0, 0.0, 1.0));
    // float NdL = clamp(dot(N, L), 0.001, 1.0);
    // vec3 shading = mix(vec3(0.1), vec3(1.0), NdL);
    // color.rgb *= shading;
    // color.rgb *= NdL;
    // color.rgb = N;

    // TODO: Test Tone mapping
    color = acesToneMap(color, 1.0);

    gl_FragColor.rgb = color;
    gl_FragColor.a = alpha;

    // Convert to sRGB to display
    gl_FragColor = linearToSRGB(gl_FragColor);

    // BEFORE FOG

    #ifndef SKIP_FOG
        // Fog - add fog relative to the distance from the camera
        vec3 f = uFogNearFarAlpha;
        float fog = smoothstep(f.x, f.y, dist) * f.z;
        // vec3 fogColor = uFogColor;
        vec3 fogColor = mix(vec3(0.219, 0.002, 0.014), vec3(1.0, 0.9, 0.9) * 0.92, uBonusBoost);
        gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fog);
    #endif

    // TODO: test Dithering
    // gl_FragColor.rgb = dithering(gl_FragColor.rgb);

    // FINAL MAIN

}
  `};var z=class{static init(){if(this.isInit)return;this.isInit=!0;let t=this.world=y.data.world;this.gl=this.world.gl,this.isWebgl2=this.world.renderer.isWebgl2,this.directionalLights_=[],this.pointLights_=[],this.envIrradianceTexture_=new W(this.gl),this.envRadianceTexture_=new W(this.gl),this.texScale=[1,1]}static addLights(t){t.directional.forEach(e=>this.directionalLights_.push(e)),t.point.forEach(e=>this.pointLights_.push(e))}static removeLights(){this.directionalLights_=[],this.pointLights_=[]}static parseGLTF(t,e,r){var m,d,g,p,v,E,x,_,b,w,R,S,N,D,P,L,B,F;let n=this.world,s=t.program.gltfMaterial||{},{vertex:a,fragment:o}=Qr,l=(r==null?void 0:r.uDirectionalLights)||this.directionalLights_,c=(r==null?void 0:r.uPointLights)||this.pointLights_,u=`${this.isWebgl2?"#version 300 es":"#extension GL_OES_standard_derivatives : enable"}
            precision highp int;
            precision highp float;
            ${t.geometry.attributes.uv?"#define UV":""}
            ${t.geometry.attributes.uv2?"#define UV2":""}
            ${t.geometry.attributes.normal?"#define NORMAL":""}
            ${t.geometry.attributes.color?"#define VERTEX_COLOR":""}
            ${t.geometry.attributes.lightmapScaleOffset?"#define LIGHTMAP_SCALE_OFFSET":""}
            ${t.geometry.attributes.instanceMatrix?"#define INSTANCED":""}
            ${t.boneTexture&&!t.instancedSkinning?"#define SKINNING":""}
            ${t.instancedSkinning?"#define INSTANCED_SKIN":""}
            ${s.alphaMode==="MASK"?"#define ALPHA_MASK":""}
            ${s.baseColorTexture?"#define COLOR_MAP":""}
            ${s.normalTexture?"#define NORMAL_MAP":""}
            ${s.metallicRoughnessTexture?"#define ORM_MAP":""}
            ${s.emissiveTexture?"#define EMISSIVE_MAP":""}
            ${s.doubleSided?"#define DOUBLE_SIDED":""}
            ${l.length?"#define DIRECTIONAL_LIGHTS":""}
            ${c.length?"#define POINT_LIGHTS":""}
            ${((m=s.extras)==null?void 0:m.KHR_materials_unlit)||((d=s.extensions)==null?void 0:d.KHR_materials_unlit)?"#define UNLIT":""}
            ${(g=t.extras)!=null&&g.lightmapTexture?"#define LIGHTMAP":""}
            ${t.isSkipFog?"#define SKIP_FOG":""}
            ${s.receiveShadows?"#define SHADOWS":""}
            ${(p=s.extras)!=null&&p.additiveBlending?"#define ADDITIVE":""}
            ${this.isWebgl2?`
            #define attribute in
            #define varying out
            #define texture2D texture
            #define texture2DProj textureProj
            #define gl_FragColor FragColor
            out vec4 FragColor;
            `:""}
        `,h=tt.replaceAll(u,"#define varying out","#define varying in");a=u+a,o=h+o,o=tt.replaceAll(o,"NUM_POINT_LIGHTS",c.length),o=tt.replaceAll(o,"NUM_DIRECTIONAL_LIGHTS",l.length),o=tt.replaceAll(o,"// POINT LIGHTS",c.map((Y,rt)=>`
                        pointLight = uPointLights[${rt}];
                        getPointLightInfo(pointLight, geometry, directLight);
                        RE_Direct(directLight, geometry, material, reflectedLight);
                    `).join("")),o=tt.replaceAll(o,"// DIRECTIONAL LIGHTS",l.map((Y,rt)=>`
                        directionalLight = uDirectionalLights[${rt}];
                        getDirectionalLightInfo(directionalLight, geometry, directLight);
                        RE_Direct(directLight, geometry, material, reflectedLight);
                    `).join("")),e&&e.forEach(({match:Y,replacement:rt})=>{a=tt.replaceAll(a,Y,rt),o=tt.replaceAll(o,Y,rt)});let f=new H(this.gl,{vertex:a,fragment:o,uniforms:oi({uTime:n.time,uAspect:n.aspect,uResolution:n.resolution,uPlayer:n.playerPosition,uCurvatureX:n.curvatureX,uCurvatureZ:n.curvatureZ,uBaseColor:{value:s.baseColorFactor||[1,1,1,1]},tBaseColor:{value:s.baseColorTexture?s.baseColorTexture.texture:null},uBaseColorScale:{value:((x=(E=(v=s.baseColorTexture)==null?void 0:v.extensions)==null?void 0:E.KHR_texture_transform)==null?void 0:x.scale)||this.texScale},tORM:{value:s.metallicRoughnessTexture?s.metallicRoughnessTexture.texture:null},uORMScale:{value:((w=(b=(_=s.metallicRoughnessTexture)==null?void 0:_.extensions)==null?void 0:b.KHR_texture_transform)==null?void 0:w.scale)||this.texScale},uAOStrength:{value:1},uRoughness:{value:s.roughnessFactor!==void 0?s.roughnessFactor:1},uMetalness:{value:s.metallicFactor!==void 0?s.metallicFactor:1},tNormal:{value:s.normalTexture?s.normalTexture.texture:null},uNormalScale:{value:((N=(S=(R=s.normalTexture)==null?void 0:R.extensions)==null?void 0:S.KHR_texture_transform)==null?void 0:N.scale)||this.texScale},uNormalStrength:{value:s.normalTexture&&s.normalTexture.scale||1},tEmissive:{value:s.emissiveTexture?s.emissiveTexture.texture:null},uEmissiveScale:{value:((L=(P=(D=s.emissiveTexture)==null?void 0:D.extensions)==null?void 0:P.KHR_texture_transform)==null?void 0:L.scale)||this.texScale},uEmissive:{value:s.emissiveFactor||[0,0,0]},tLightmap:{value:(B=t.extras)!=null&&B.lightmapTexture?t.extras.lightmapTexture.texture:null},tEnvIrradiance:{value:this.envIrradianceTexture_},tEnvRadiance:{value:this.envRadianceTexture_},uEnvIntensity:{value:1},uAmbientLightColor:{value:new J("#000")},uDirectionalLights:l,uPointLights:c,uAlphaCutoff:{value:s.alphaCutoff},uFogColor:n.fogColor,uFogNearFarAlpha:n.fogNearFarAlpha,uBonusBoost:n.bonusBoost},r),transparent:s.alphaMode==="BLEND",cullFace:s.doubleSided?null:this.gl.BACK});return(F=s.extras)!=null&&F.additiveBlending&&(f.setBlendFunc(this.gl.ONE,this.gl.ONE),f.depthWrite=!1),f.gltfMaterial=s,f}};var Jt=class{constructor({World:t}){let e=this,r=t.gl;this.match={meshName:"*"},this.add=n=>{let s=!!n.program.gltfMaterial.receiveShadows,a=!!n.program.gltfMaterial.castShadows,o=z.parseGLTF(n);n.program=o},this.fallback=()=>{},this.destroy=()=>{}}};var te=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"CAMERAS"};let n=60,s=100,a=100,o=130,l=500,c=.2,u,h,f,m=0,d={alpha:0,zoom:.5,shake:0};g(),I.add(w);function g(){C.on("game_reset",p),C.on(y.data.EVENTS.GAMEOVER,v),C.on("game_start",E),C.on("game_boost_start",x),C.on("game_boost_end",_),C.on(y.data.EVENTS.CRASHED,b)}function p(){t.camera.position.copy(h.position),t.camera.quaternion.copy(h.quaternion),f&&f.stop(),d.alpha=0,f=new U(d,3500,{alpha:1,ease:"inOutCubic",update:()=>{t.camera.position.copy(h.position),t.camera.quaternion.copy(h.quaternion),t.camera.position.lerp(u.position,d.alpha),t.camera.quaternion.slerp(u.quaternion,d.alpha)}}),d.zoom=.5,new U(d,3500,{zoom:1,ease:"inOutCubic"})}function v(){t.camera.position.copy(u.position),t.camera.quaternion.copy(u.quaternion),f&&f.stop(),d.alpha=0,f=new U(d,4e3,{alpha:1,ease:"inOutCubic",update:()=>{t.camera.position.copy(u.position),t.camera.quaternion.copy(u.quaternion),t.camera.position.lerp(h.position,d.alpha),t.camera.quaternion.slerp(h.quaternion,d.alpha)}})}function E(){new U(d,700,{zoom:.5,ease:"inOutQuad"})}function x(){new U(d,500,{zoom:0,ease:"inOutQuad"})}function _(){new U(d,1500,{zoom:.5,ease:"inOutQuad"})}async function b(){d.shake=1,new U(d,l,{shake:0,ease:"outCubic",update:()=>{let R=Math.sin(t.time.value*100)*d.shake*c,S=Math.sin(t.time.value*120+2.5)*d.shake*c;t.camera.position.x=u.position.x+R,t.camera.position.y=u.position.y+S}})}function w(){if(t.isPaused)return;let R=A.map(t.aspect.value,1.7,.5,0,1,!0),S=A.mix(n,a,R),N=A.mix(s,o,R),D=A.map(d.zoom+d.shake*.1,0,1,N,S);m!==D&&(t.camera.perspective({fov:D}),m=D)}this.add=R=>{R.children.forEach(S=>{switch(S.rotation.x-=Math.PI/2,S.name){case"game-camera":u=S;break;case"intro-camera":h=S;break}}),t.camera.position.copy(u.position),t.camera.rotation.x=u.rotation.x},this.fallback=()=>{console.warn("no CAMERAS found")},this.destroy=()=>{}}};var ee=class{constructor({World:t}){let e=this,r=t.gl,n=45,s=3,a=100,o=a.toFixed(1),l=25,c=20,u=.8,h=8.8,f=l*2+c*2,m=[0,1,2,3,4,5,6,7,8,9],d=new k,g=[],p=null;this.match={groupName:"SCENERY"},I.add(v);function v(x){!p||y.data.isPaused||(g.forEach(_=>{_.position.z+=y.data.game.speedDelta,_.position.z>=2&&(_.position.z-=s*n)}),p.position.z=y.data.game.progress)}function E(x){x.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(f*16)}),x.geometry.addAttribute("instanceIndex",{instanced:1,size:2,data:new Float32Array(f*2)});let _=0;for(let b=0;b<l;b++,_++)d.position.x=-h+A.random(-u,u,3),d.position.z=-b*(a/l),d.scale.y=A.random(1.2,2.4,3),d.scale.x=1,d.scale.z=A.random(1,1.2,3),d.updateMatrix(),d.matrix.toArray(x.geometry.attributes.instanceMatrix.data,_*16),x.geometry.attributes.instanceIndex.data[_*2+1]=d.position.z;for(let b=0;b<l;b++,_++)d.position.x=h+A.random(-u,u,3),d.position.z=-b*(a/l),d.scale.y=A.random(1.2,2.4,3),d.scale.x=-1,d.scale.z=A.random(1,1.2,3),d.updateMatrix(),d.matrix.toArray(x.geometry.attributes.instanceMatrix.data,_*16),x.geometry.attributes.instanceIndex.data[_*2+1]=d.position.z;for(let b=0;b<c;b++,_++)d.position.x=-14.2+A.random(-u,u,3),d.position.z=-b*(a/c),d.scale.y=A.random(2.8,4.5,3),d.scale.x=1,d.scale.z=1,d.updateMatrix(),d.matrix.toArray(x.geometry.attributes.instanceMatrix.data,_*16),x.geometry.attributes.instanceIndex.data[_*2+1]=d.position.z;for(let b=0;b<c;b++,_++)d.position.x=14.2+A.random(-u,u,3),d.position.z=-b*(a/c),d.scale.y=A.random(2.8,4.5,3),d.scale.x=-1,d.scale.z=1,d.updateMatrix(),d.matrix.toArray(x.geometry.attributes.instanceMatrix.data,_*16),x.geometry.attributes.instanceIndex.data[_*2+1]=d.position.z;x.geometry.attributes.instanceMatrix.needsUpdate=!0,x.frustumCulled=!1;for(let b=0;b<f;b++)x.geometry.attributes.instanceIndex.data[b*2]=Nt.random(m,m.length);x.geometry.attributes.instanceIndex.needsUpdate=!0}this.add=x=>{x.children.forEach(_=>{switch(_.name){case"small-cubes":_.children.forEach(b=>{g.push(b)});break;case"tall-cubes":p=_,E(_.children[0].children[0]);break}}),x.traverse(_=>{if(!_.program)return;_.program.gltfMaterial.doubleSided=!0;let b=null;_.name==="tall-cube-geo"&&(b=[{match:"attribute mat4 instanceMatrix;",replacement:`
                                attribute mat4 instanceMatrix;
                                attribute vec2 instanceIndex;
                            `},{match:"// UNIFORMS",replacement:`
                                varying vec2 vInstanceIndex;
                            `},{match:"// END_POS",replacement:`
                                vInstanceIndex = instanceIndex;
                            `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                                mat4 mm = modelMatrix;
                                mm[3][2] = 3.0 + mod(mm[3][2] + ${o} + instanceMatrix[3][2], ${o}) - (${o} + instanceMatrix[3][2]);
                                vec4 mPos = mm * pos;
                            `},{match:"float alpha = baseColor.a;",replacement:`
                                float alpha = baseColor.a;

                                vec3 col; 
                                if (vInstanceIndex[0] < 0.5) {
                                    col = vec3(0.821, 0.168, 0.177);
                                } else if (vInstanceIndex[0] < 1.5) {
                                    col = vec3(0.61, 0.182, 0.205);
                                } else if (vInstanceIndex[0] < 2.5) {
                                    col = vec3(0.599, 0.237, 0.316);
                                } else if (vInstanceIndex[0] < 3.5) {
                                    col = vec3(0.464, 0.113, 0.139);
                                } else if (vInstanceIndex[0] < 4.5) {
                                    col = vec3(0.778, 0.342, 0.395);
                                } else if (vInstanceIndex[0] < 5.5) {
                                    col = vec3(0.618, 0.124, 0.196);
                                } else if (vInstanceIndex[0] < 6.5) {
                                    col = vec3(0.821, 0.4, 0.46);
                                } else if (vInstanceIndex[0] < 7.5) {
                                    col = vec3(0.702, 0.312, 0.4);
                                } else if (vInstanceIndex[0] < 8.5) {
                                    col = vec3(0.316, 0.077, 0.082);
                                } else if (vInstanceIndex[0] < 9.5) {
                                    col = vec3(0.55, 0.077, 0.108);
                                }

                                col = pow(col, vec3(1.7)) * 1.2;

                                baseColor.rgb = pow(baseColor.rgb, vec3(2.0));
                                
                                baseColor.rgb *= col;
                            `}],_.program.gltfMaterial.doubleSided=!0),_.name.includes("side_cubes")&&(b=[{match:"float alpha = baseColor.a;",replacement:`
                                float alpha = baseColor.a;
                                baseColor.rgb *= baseColor.rgb * 0.01;
                            `}]);let w=z.parseGLTF(_,b);_.program=w})},this.fallback=()=>{console.warn("no GROUND found")},this.destroy=()=>{}}};var ft=class{constructor({count:t,bufferProperties:e,onInit:r,onEmit:n,onUpdate:s}){this.count=t,this.bufferProperties=e,this.onInit=r,this.onEmit=n,this.onUpdate=s,this.emitIndex=0,this.particles=[];for(let a=0;a<t;a++)this.particles.push(new k);this.particles.forEach((a,o)=>{this.onInit&&this.onInit(a,o)})}emit(t=1,...e){for(let r=0;r<t;r++){let n=this.emitIndex%this.count,s=this.particles[n];this.onEmit&&this.onEmit(s,n,...e),this.emitIndex++}}update(...t){this.particles.forEach((e,r)=>{this.onUpdate&&this.onUpdate(e,r,...t),this.bufferProperties.forEach(({property:n,attribute:s,offset:a})=>{let{data:o,size:l}=s;e[n].length?o.set(e[n],r*l+a):o[r*l+a]=e[n]})}),this.bufferProperties.forEach(({attribute:e})=>{e.needsUpdate=!0})}};var ie=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"COINS"};let n=10,s=1500,a=.75,o=1,l=10,c=10,u=100,h=null,f=null,m=[];d(),I.add(g);function d(){let v=new lt(r);v.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(u*16)});let E=[];for(let w=0;w<u;w++)E.push(new k);let x=new H(r,{vertex:`
                    precision highp float;
                    precision highp int;

                    attribute vec3 position;
                    attribute vec3 normal;
                    attribute mat4 instanceMatrix;

                    uniform mat3 normalMatrix;
                    uniform mat4 modelViewMatrix;
                    uniform mat4 projectionMatrix;

                    varying vec3 vNormal;

                    void main() {
                        vec4 pos = vec4(position, 1.0);
                        pos.xyz *= 0.1;
                        pos = instanceMatrix * pos;
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * pos;
                    }
                `,fragment:`
                    precision highp float;
                    precision highp int;

                    varying vec3 vNormal;

                    void main() {
                        gl_FragColor.rgb = vec3(1);
                        gl_FragColor.a = 1.0;
                    }
                `,uniforms:{}});new q(r,{geometry:v,program:x}).setParent(t.scene);let b=new ft({count:u,bufferProperties:[{property:"matrix",attribute:v.attributes.instanceMatrix,offset:0}],onInit:(w,R)=>{w.velocity=new O,w.rotVelocity=new O,w.life=0,w.random=[Math.random(),Math.random(),Math.random(),Math.random()],w.position.y=-100,w.updateMatrix()},onEmit:(w,R,S,N)=>{w.life=1,w.position.set(S+A.random(-1,1,3)*.2,1+A.random(-1,1,3)*.2,-N+A.random(-1,1,3)*.2),w.velocity.set(A.random(-1,1,3)*.07,A.random(-.3,1.5,3)*.11,.1+A.random(-.2,1,3)*.3),w.rotation.set(A.random(-1,1,3)*.8,A.random(-1,1,3)*.8,A.random(-1,1,3)*.8),w.rotVelocity.set(A.random(-1,1,3)*.9,A.random(-1,1,3)*.9,A.random(-1,1,3)*.9),w.scale.set(A.random(.4,1,3))},onUpdate:(w,R)=>{w.life<=0||(w.velocity.x*=A.mix(.9,.95,w.random[2]),w.velocity.y*=A.mix(.9,.95,w.random[3]),w.velocity.z*=A.mix(.95,.98,w.random[0]),w.rotVelocity.multiply(.98),w.scale.multiply(A.mix(.93,.98,w.random[1])),w.position.add(w.velocity),w.rotation.x+=w.rotVelocity.x,w.rotation.y+=w.rotVelocity.y,w.rotation.z+=w.rotVelocity.z,w.life-=A.mix(.03,.06,w.random[1]),w.life<=0&&(w.position.y=-100),w.updateMatrix())}});C.on("game_coin",({x:w,z:R})=>{b.emit(8,w,R)}),I.add(()=>{y.data.isPaused||b.update()})}function g(v){if(!!h&&!y.data.isPaused){h.position.z=y.data.game.progress,f.position.z=y.data.game.progress,m.sort(p);for(let E=0;E<Math.min(n,m.length);E++){let x=m[E],_=a,b=o;if(y.data.game.isBonusing&&y.data.game.bonusType===0&&(_=l,!x.isHit&&Math.abs(x.z)<c)){let w=Math.abs(x.z)/c,R=y.data.input.roadPos+(x.originalPositionX-y.data.input.roadPos)*w;x.position.x+=(R-x.position.x)*.1}!x.isHit&&Math.abs(x.z)<b&&Math.abs(x.position.x-y.data.input.roadPos)<_&&(C.emit("game_coin",{x:x.position.x,z:x.z}),x.isHit=0,new U(x,80,{isHit:1,ease:"inCubic"}),X(500,()=>{x.isHit=0,x.position.x=x.originalPositionX})),x.matrix.toArray(h.geometry.attributes.instanceMatrix.data,E*16),h.geometry.attributes.instanceData.data[E*4]=x.isHit||0,x.matrix.toArray(f.geometry.attributes.instanceMatrix.data,E*16),f.geometry.attributes.instanceData.data[E*4]=x.isHit||0}h.geometry.attributes.instanceMatrix.needsUpdate=!0,h.geometry.attributes.instanceData.needsUpdate=!0,f.geometry.attributes.instanceMatrix.needsUpdate=!0,f.geometry.attributes.instanceData.needsUpdate=!0}}function p(v,E){return v.z=A.mod(-v.position.z+3-y.data.game.progress,s)-3,E.z=A.mod(-E.position.z+3-y.data.game.progress,s)-3,v.z-E.z}this.add=v=>{h=v.children[0].children[0],f=v.children[1].children[0],h.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),h.geometry.addAttribute("instanceData",{instanced:1,size:4,data:new Float32Array(n*4)}),h.frustumCulled=!1,f.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),f.geometry.addAttribute("instanceData",{instanced:1,size:4,data:new Float32Array(n*4)}),f.frustumCulled=!1,m=v.children.slice(2),m.forEach(x=>{x.originalPositionX=x.position.x});let E=s.toFixed(1);{let x=[{match:"// START_POS",replacement:`
                        pos.xyz *= 1.0 - instanceData[0];
                        pos.xz = rotate2d(pos.xz, uTime * 3.0 + instanceMatrix[3][2]);
                        pos.yz = rotate2d(pos.yz, -0.4);
                        pos.y += sin(uTime * 5.0 + instanceMatrix[3][2] * 0.15) * 0.2;
                        pos.y += instanceData[0];
                    `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                        mat4 mm = modelMatrix;
                        mm[3][2] = mod(mm[3][2] + ${E} + instanceMatrix[3][2] - 3.0, ${E}) - (${E} + instanceMatrix[3][2] - 3.0);
                        vec4 mPos = mm * pos;
                        mPos.y += 0.65;
                    `},{match:"attribute mat4 instanceMatrix;",replacement:`
                        attribute mat4 instanceMatrix;
                        attribute vec4 instanceData;
                    `},{match:"// UNIFORMS",replacement:`
                        varying vec4 vInstanceData;
                    `},{match:"// END_POS",replacement:`
                        vInstanceData = instanceData;
                    `},{match:"float alpha = baseColor.a;",replacement:`
                        baseColor.rgb *= 3.2;
                        float alpha = baseColor.a;

                        // if (vInstanceData[0] > 0.5) discard;
                    `},{match:"emissive *= SRGBtoLinear(texture2D(tEmissive, vUv * uEmissiveScale)).rgb;",replacement:`
                        // emissive *= 50.0 * SRGBtoLinear(texture2D(tEmissive, vUv * uEmissiveScale)).rgb;
                        emissive *= smoothstep(0.0, 0.1, vInstanceData[0]);
                        // emissive *= 0.0;
                    `},{match:"// FINAL COLOR",replacement:`
                        // color *= mix(vec3(1.0), vec3(1.0, 0.0, 0.0), vInstanceData[0]);
                    `}],_={uDirectionalLights:[],uPointLights:[]},b=z.parseGLTF(h,x,_);h.program=b}{let x=[{match:"// START_POS",replacement:`
                        // pos.xz = rotate2d(pos.xz, uTime * 3.0 + instanceMatrix[3][2]);
                        // pos.yz = rotate2d(pos.yz, -0.4);
                        pos.xz *= 2.6 - sin(uTime * 5.0 + instanceMatrix[3][2] * 0.1) * 0.1;
                    `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                        mat4 mm = modelMatrix;
                        mm[3][2] = mod(mm[3][2] + ${E} + instanceMatrix[3][2] - 3.0, ${E}) - (${E} + instanceMatrix[3][2] - 3.0);
                        vec4 mPos = mm * pos;
                        // mPos.y += 0.5;
                    `},{match:"attribute mat4 instanceMatrix;",replacement:`
                        attribute mat4 instanceMatrix;
                        attribute vec4 instanceData;
                    `},{match:"// UNIFORMS",replacement:`
                        varying vec4 vInstanceData;
                        varying mat4 vInstanceMatrix;
                    `},{match:"// END_POS",replacement:`
                        vInstanceData = instanceData;
                        vInstanceMatrix = instanceMatrix;
                    `},{match:"float alpha = baseColor.a;",replacement:`
                        float alpha = baseColor.a;
                        baseColor.rgb = vec3( pow(max(0.0, 1.0 - length(vUv - 0.5) * 2.5), 3.0) );
                        baseColor.rgb *= 0.7 - 0.3 * sin(uTime * 5.0 + vInstanceMatrix[3][2] * 0.1);
                        baseColor.rgb *= 0.1;
                    `},{match:"// FINAL COLOR",replacement:`
                        // color *= mix(vec3(1.0), vec3(1.0, 0.0, 0.0), vInstanceData[0]);
                    `}],_={uDirectionalLights:[],uPointLights:[]};f.isSkipFog=!0,f.program.gltfMaterial.extras={KHR_materials_unlit:!0,additiveBlending:!0};let b=z.parseGLTF(f,x,_);f.program=b}},this.fallback=()=>{console.warn("no COINS found")},this.destroy=()=>{}}};var re=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"BOOSTS"};let n=10,s=1500,a=.75,o=1.5,l=null,c=[];I.add(u);function u(f){if(!!l&&!y.data.isPaused){l.position.z=y.data.game.progress,c.sort(h);for(let m=0;m<Math.min(n,c.length);m++){let d=c[m];!d.isHit&&Math.abs(d.z)<o&&Math.abs(d.position.x-y.data.input.roadPos)<a&&(C.emit("game_boost"),d.isHit=1,X(500,()=>d.isHit=0)),d.matrix.toArray(l.geometry.attributes.instanceMatrix.data,m*16),l.geometry.attributes.instanceData.data[m*4]=d.isHit||0}l.geometry.attributes.instanceMatrix.needsUpdate=!0,l.geometry.attributes.instanceData.needsUpdate=!0}}function h(f,m){return f.z=A.mod(-f.position.z+3-y.data.game.progress,s)-3,m.z=A.mod(-m.position.z+3-y.data.game.progress,s)-3,f.z-m.z}this.add=f=>{let m=f.children[0].children[0];m.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),m.geometry.addAttribute("instanceData",{instanced:1,size:4,data:new Float32Array(n*4)}),m.frustumCulled=!1,l=m,c=f.children.slice(1);let d=s.toFixed(1),g=[{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                        mat4 mm = modelMatrix;
                        mm[3][2] = mod(mm[3][2] + ${d} + instanceMatrix[3][2] - 3.0, ${d}) - (${d} + instanceMatrix[3][2] - 3.0);
                        vec4 mPos = mm * pos;
                    `},{match:"attribute mat4 instanceMatrix;",replacement:`
                        attribute mat4 instanceMatrix;
                        attribute vec4 instanceData;
                    `},{match:"// UNIFORMS",replacement:`
                        varying vec4 vInstanceData;
                    `},{match:"// END_POS",replacement:`
                        vInstanceData = instanceData;
                    `},{match:"color = baseColor.rgb;",replacement:`
                        // color = baseColor.rgb;
                        // color = vec3(baseColor.r);
                        // color = vec3(baseColor.r + baseColor.g + baseColor.b);
                        // color = vec3(1.0);

                        float loop = mod(uTime / 0.5, 1.0);
                        float a = smoothstep(0.81, 0.8, loop);
                        float b = smoothstep(0.3, 0.31, loop);
                        float c = smoothstep(0.6, 0.61, loop);
                        color += baseColor.r * a;
                        color += baseColor.g * b;
                        color += baseColor.b * c;
                    `},{match:"color += emissive;",replacement:`
                    `},{match:"// FINAL COLOR",replacement:`
                        color *= mix(vec3(1.0), vec3(1.0, 0.0, 0.0), vInstanceData[0]);
                    `}];m.program.gltfMaterial.baseColorTexture.texture.minFilter=r.LINEAR,m.program.gltfMaterial.baseColorTexture.texture.magFilter=r.LINEAR,m.program.gltfMaterial.extras={additiveBlending:!0,KHR_materials_unlit:!0},m.isSkipFog=!0;let p=z.parseGLTF(m,g);m.program=p},this.fallback=()=>{console.warn("no BOOSTS found")},this.destroy=()=>{}}};var ne=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"LIVES"};let n=10,s=1500,a=.75,o=1,l=100,c=null,u=null,h=[];f(),I.add(m);function f(){let g=new lt(r);g.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(l*16)});let p=[];for(let _=0;_<l;_++)p.push(new k);let v=new H(r,{vertex:`
                    precision highp float;
                    precision highp int;

                    attribute vec3 position;
                    attribute vec3 normal;
                    attribute mat4 instanceMatrix;

                    uniform mat3 normalMatrix;
                    uniform mat4 modelViewMatrix;
                    uniform mat4 projectionMatrix;

                    varying vec3 vNormal;

                    void main() {
                        vec4 pos = vec4(position, 1.0);
                        pos.xyz *= 0.1;
                        pos = instanceMatrix * pos;
                        vNormal = normalize(normalMatrix * normal);
                        gl_Position = projectionMatrix * modelViewMatrix * pos;
                    }
                `,fragment:`
                    precision highp float;
                    precision highp int;

                    varying vec3 vNormal;

                    void main() {
                        gl_FragColor.rgb = vec3(1, 0.4, 0.4) * 3.0;
                        gl_FragColor.a = 1.0;
                    }
                `,uniforms:{}});new q(r,{geometry:g,program:v}).setParent(t.scene);let x=new ft({count:l,bufferProperties:[{property:"matrix",attribute:g.attributes.instanceMatrix,offset:0}],onInit:(_,b)=>{_.velocity=new O,_.rotVelocity=new O,_.life=0,_.random=[Math.random(),Math.random(),Math.random(),Math.random()],_.position.y=-100,_.updateMatrix()},onEmit:(_,b,w,R)=>{_.life=1,_.position.set(w+A.random(-1,1,3)*.2,1.5+A.random(-1,1,3)*.2,-R+A.random(-1,1,3)*.2),_.velocity.set(A.random(-1,1,3)*.07,A.random(-.8,1.5,3)*.11,A.random(-.2,1,3)*.3),_.rotation.set(A.random(-1,1,3)*.8,A.random(-1,1,3)*.8,A.random(-1,1,3)*.8),_.rotVelocity.set(A.random(-1,1,3)*.9,A.random(-1,1,3)*.9,A.random(-1,1,3)*.9),_.scale.set(A.random(.4,1,3))},onUpdate:(_,b)=>{_.life<=0||(_.velocity.x*=A.mix(.9,.95,_.random[2]),_.velocity.y*=A.mix(.9,.95,_.random[3]),_.velocity.z*=A.mix(.95,.98,_.random[0]),_.rotVelocity.multiply(.98),_.scale.multiply(A.mix(.93,.98,_.random[1])),_.position.add(_.velocity),_.rotation.x+=_.rotVelocity.x,_.rotation.y+=_.rotVelocity.y,_.rotation.z+=_.rotVelocity.z,_.life-=A.mix(.03,.06,_.random[1]),_.life<=0&&(_.position.y=-100),_.updateMatrix())}});C.on("game_life",({x:_,z:b})=>{X(550,()=>x.emit(30,_,b))}),I.add(()=>{y.data.isPaused||x.update()})}function m(g){if(!!c&&!y.data.isPaused){c.position.z=y.data.game.progress,u.position.z=y.data.game.progress,h.sort(d);for(let p=0;p<Math.min(n,h.length);p++){let v=h[p];!v.isHit&&Math.abs(v.z)<o&&Math.abs(v.position.x-y.data.input.roadPos)<a&&(C.emit("game_life",{x:v.position.x,z:v.z}),v.isHit=0,new U(v,1e3,{isHit:1,ease:"outCubic"}),X(1200,()=>v.isHit=0)),v.matrix.toArray(c.geometry.attributes.instanceMatrix.data,p*16),c.geometry.attributes.instanceData.data[p*4]=v.isHit||0,v.matrix.toArray(u.geometry.attributes.instanceMatrix.data,p*16),u.geometry.attributes.instanceData.data[p*4]=v.isHit||0}c.geometry.attributes.instanceMatrix.needsUpdate=!0,c.geometry.attributes.instanceData.needsUpdate=!0,u.geometry.attributes.instanceMatrix.needsUpdate=!0,u.geometry.attributes.instanceData.needsUpdate=!0}}function d(g,p){return g.z=A.mod(-g.position.z+10-y.data.game.progress,s)-10,p.z=A.mod(-p.position.z+10-y.data.game.progress,s)-10,g.z-p.z}this.add=g=>{c=g.children[0].children[0],u=g.children[1].children[0],c.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),c.geometry.addAttribute("instanceData",{instanced:1,size:4,data:new Float32Array(n*4)}),c.frustumCulled=!1,u.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),u.geometry.addAttribute("instanceData",{instanced:1,size:4,data:new Float32Array(n*4)}),u.frustumCulled=!1,h=g.children.slice(2);let p=s.toFixed(1);{let v=[{match:"// START_POS",replacement:`
                        // pos.xyz *= 1.0 - instanceData[0];
                        pos.xz = rotate2d(pos.xz, uTime * 3.0 + instanceMatrix[3][2]);
                        pos.yz = rotate2d(pos.yz, -0.4);
                        pos.xz = rotate2d(pos.xz, instanceData[0] * 5.0);
                        pos.z -= instanceData[0] * 12.0;

                        pos.y += sin(uTime * 5.0 + instanceMatrix[3][2] * 0.1) * 0.2;
                        pos.y += instanceData[0];
                    `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                        mat4 mm = modelMatrix;
                        mm[3][2] = mod(mm[3][2] + ${p} + instanceMatrix[3][2] - 10.0, ${p}) - (${p} + instanceMatrix[3][2] - 10.0);
                        vec4 mPos = mm * pos;
                        mPos.y += 0.65;
                    `},{match:"attribute mat4 instanceMatrix;",replacement:`
                        attribute mat4 instanceMatrix;
                        attribute vec4 instanceData;
                    `},{match:"// UNIFORMS",replacement:`
                        varying vec4 vInstanceData;
                    `},{match:"// END_POS",replacement:`
                        vInstanceData = instanceData;
                    `},{match:"float alpha = baseColor.a;",replacement:`
                        baseColor.rgb *= 3.0;
                        // baseColor.rgb += 0.02;
                        float alpha = baseColor.a;
                    `},{match:"emissive *= SRGBtoLinear(texture2D(tEmissive, vUv * uEmissiveScale)).rgb;",replacement:`
                        // emissive *= smoothstep(0.0, 0.1, vInstanceData[0]) * 3.0 * SRGBtoLinear(texture2D(tEmissive, vUv * uEmissiveScale)).rgb;
                        // emissive *= baseColor.rgb;
                        emissive *= smoothstep(0.0, 0.8, vInstanceData[0]) * 0.7;
                        // emissive *= 0.0;
                    `},{match:"// FINAL COLOR",replacement:`
                        // color *= mix(vec3(1.0), vec3(1.0, 0.0, 0.0), vInstanceData[0]);
                    `}],E={uDirectionalLights:[],uPointLights:[]},x=z.parseGLTF(c,v,E);c.program=x}{let v=[{match:"// START_POS",replacement:`
                        // pos.xz = rotate2d(pos.xz, uTime * 3.0 + instanceMatrix[3][2]);
                        // pos.yz = rotate2d(pos.yz, -0.4);
                        pos.xz *= 2.6 - sin(uTime * 5.0 + instanceMatrix[3][2] * 0.1) * 0.1;
                    `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                        mat4 mm = modelMatrix;
                        mm[3][2] = mod(mm[3][2] + ${p} + instanceMatrix[3][2] - 10.0, ${p}) - (${p} + instanceMatrix[3][2] - 10.0);
                        vec4 mPos = mm * pos;
                        // mPos.y += 0.5;
                    `},{match:"attribute mat4 instanceMatrix;",replacement:`
                        attribute mat4 instanceMatrix;
                        attribute vec4 instanceData;
                    `},{match:"// UNIFORMS",replacement:`
                        varying vec4 vInstanceData;
                        varying mat4 vInstanceMatrix;
                    `},{match:"// END_POS",replacement:`
                        vInstanceData = instanceData;
                        vInstanceMatrix = instanceMatrix;
                    `},{match:"float alpha = baseColor.a;",replacement:`
                        float alpha = baseColor.a;
                        baseColor.rgb = vec3( pow(max(0.0, 1.0 - length(vUv - 0.5) * 2.5), 3.0) );
                        baseColor.rgb *= 0.7 - 0.2 * sin(uTime * 5.0 + vInstanceMatrix[3][2] * 0.1);
                        baseColor.rgb *= 0.2;
                        baseColor.rgb *= vec3(1.0, 0.2, 0.2);
                    `},{match:"// FINAL COLOR",replacement:`
                        // color *= mix(vec3(1.0), vec3(1.0, 0.0, 0.0), vInstanceData[0]);
                    `}],E={uDirectionalLights:[],uPointLights:[]};u.isSkipFog=!0,u.program.gltfMaterial.extras={KHR_materials_unlit:!0,additiveBlending:!0};let x=z.parseGLTF(u,v,E);u.program=x}},this.fallback=()=>{console.warn("no LIVES found")},this.destroy=()=>{}}};var se=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"WALLS"};let n=10,s=1500,a=1,o=1.5,l=null,c=null,u=[];I.add(h);function h(m){if(!!l&&!y.data.isPaused){l.position.z=y.data.game.progress,c.position.z=y.data.game.progress,u.sort(f);for(let d=0;d<Math.min(n,u.length);d++){let g=u[d];!g.isHit&&!(y.data.game.isBonusing&&y.data.game.bonusType===1)&&Math.abs(g.z)<o&&Math.abs(g.position.x-y.data.input.roadPos)<a&&(C.emit("game_crash"),g.isHit=1,X(500,()=>g.isHit=0)),g.matrix.toArray(l.geometry.attributes.instanceMatrix.data,d*16),l.geometry.attributes.instanceData.data[d*4]=g.isHit||0,g.matrix.toArray(c.geometry.attributes.instanceMatrix.data,d*16)}l.geometry.attributes.instanceMatrix.needsUpdate=!0,l.geometry.attributes.instanceData.needsUpdate=!0,c.geometry.attributes.instanceMatrix.needsUpdate=!0}}function f(m,d){return m.z=A.mod(-m.position.z+3-y.data.game.progress,s)-3,d.z=A.mod(-d.position.z+3-y.data.game.progress,s)-3,m.z-d.z}this.add=m=>{l=m.children[0].children[0],c=m.children[1].children[0],l.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),l.geometry.addAttribute("instanceData",{instanced:1,size:4,data:new Float32Array(n*4)}),l.frustumCulled=!1,c.geometry.addAttribute("instanceMatrix",{instanced:1,size:16,data:new Float32Array(n*16)}),c.frustumCulled=!1,u=m.children.slice(2);let d=s.toFixed(1);{let g=[{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                        mat4 mm = modelMatrix;
                        mm[3][2] = mod(mm[3][2] + ${d} + instanceMatrix[3][2] - 3.0, ${d}) - (${d} + instanceMatrix[3][2] - 3.0);
                        vec4 mPos = mm * pos;
                    `},{match:"attribute mat4 instanceMatrix;",replacement:`
                        attribute mat4 instanceMatrix;
                        attribute vec4 instanceData;
                    `},{match:"// UNIFORMS",replacement:`
                        varying vec4 vInstanceData;
                    `},{match:"// END_POS",replacement:`
                        vInstanceData = instanceData;
                    `},{match:"float alpha = baseColor.a;",replacement:`
                        baseColor.rgb += 0.5;
                        float alpha = baseColor.a;
                    `},{match:"// FINAL COLOR",replacement:`
                        // color += 0.02;
                        color *= mix(vec3(1.0), vec3(0.02), vInstanceData[0]);
                    `}],p=z.parseGLTF(l,g);l.program=p}{c.program.gltfMaterial.doubleSided=!0,c.program.gltfMaterial.extras={KHR_materials_unlit:!0};let g=[{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                            mat4 mm = modelMatrix;
                            mm[3][2] = mod(mm[3][2] + ${d} + instanceMatrix[3][2] - 3.0, ${d}) - (${d} + instanceMatrix[3][2] - 3.0);
                            vec4 mPos = mm * pos;
                        `}],p=z.parseGLTF(c,g);p.depthWrite=!1,c.program=p}},this.fallback=()=>{console.warn("no WALLS found")},this.destroy=()=>{}}};var ae=class{constructor({World:t,group:e}){let r=this,n=t.gl,s=new k;s.setParent(e),s.visible=!1;let a,o,l=[],c={value:0};{u();for(let g=0;g<3;g++)h(g);f()}function u(){a=new lt(n),o=new H(n,{vertex:`
                    precision highp float;
                    precision highp int;
                
                    attribute vec3 position;
                
                    uniform mat3 normalMatrix;
                    uniform mat4 modelViewMatrix;
                    uniform mat4 projectionMatrix;
            
                    void main() {
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,fragment:`
                    precision highp float;
                    precision highp int;

                    uniform float uBonus;
                
                    void main() {
                        gl_FragColor.rgb = vec3(1.0);
                        gl_FragColor.rgb *= uBonus;
                        gl_FragColor.a = 1.0;
                    }
                `,uniforms:{uBonus:c}}),o.setBlendFunc(n.ONE,n.ONE),o.depthWrite=!1}function h(g){let p=new k;l.push(p),p.setParent(s),p.position.y=.65;let v=A.random(.5,.7,3),E=100,x=[];for(let P=0;P<E;P++){let L=P/(E-2)*Math.PI*2,B=Math.cos(L),F=Math.sin(L),Y=0;x.push(new O(B,F,Y))}let _=new vt(n,{points:x,fragment:`
                    precision highp float;

                    uniform vec3 uColor;
                    uniform float uBonus;

                    varying vec2 vUv;

                    void main() {
                        gl_FragColor.rgb = uColor;
                        gl_FragColor.rgb *= max(0.0, 1.0 - vUv.y * 1.8);

                        gl_FragColor.rgb *= uBonus;

                        gl_FragColor.a = 1.0;
                    }
                `,uniforms:{uColor:{value:new J("#fff")},uThickness:{value:2},uBonus:c}});_.mesh.program.setBlendFunc(n.ONE,n.ONE),_.mesh.program.depthWrite=!1,_.mesh.scale.set(v),_.mesh.setParent(p),y.link(["width","height"],()=>{_.resize()});let b=new q(n,{geometry:a,program:o});b.setParent(p),b.position.x=v,b.scale.set(.08),b.rotation.set(A.random(-3.14,3.14,3),A.random(-3.14,3.14,3),A.random(-3.14,3.14,3));let w=A.mix(.04,.09,Math.random())*1.5,R=A.mix(.35,.6,Math.random()),S=A.mix(.4,.7,5,Math.random()),N=A.random(-3.14,3.14,3),D=A.mod(g,2)?3.14:0;p.rotation.z=A.random(-3.14,3.14,3),p.rotation.x=A.random(-.3,-.6,3),p.position.x=A.random(-.06,.06,3),p.position.z=A.random(-.06,.06,3),I.add(()=>{y.data.isPaused||(p.rotation.z-=w,p.rotation.y=Math.sin(t.time.value*S+N)*R+D,b.rotation.x+=.04,b.rotation.y+=.02,!r.isDelayExpiringUpdate&&(c.value+=((y.data.game.bonusType===0&&y.data.game.isBonusing?1:0)-c.value)*.04))})}function f(){C.on(y.data.EVENTS.BONUS_STARTED,m),C.on(y.data.EVENTS.BONUS_ENDED,d)}function m(){y.data.game.bonusType===0&&(r.isDelayExpiringUpdate=!1,s.visible=!0,l.forEach((g,p)=>{g.scale.set(.01),new U(g.scale,1e3,{x:1,y:1,z:1,ease:"outCubic",delay:A.random(0,100)})}))}async function d(){y.data.game.bonusType===0&&(r.isDelayExpiringUpdate=!0,l.forEach((g,p)=>{new U(g.scale,1e3,{x:.01,y:.01,z:.01,ease:"inCubic",delay:A.random(0,100)})}),await X(1e3),s.visible=!1,r.isDelayExpiringUpdate=!1)}}};var oe=class{constructor({World:t,group:e}){let r=this,n=t.gl,s={value:0},a={value:0};o(),l(),I.add(h);function o(){e.traverse(f=>{if(!!f.program){if(f.name==="bonus-01-halo-geo"){let m=[{match:"// UNIFORMS",replacement:`
                                uniform float uBonus;
                                uniform float uExpiring;
                            `},{match:"// VERTEX_PRE_MAIN",replacement:`
                                mat4 billboardMatrix(mat4 inMat4) {
                                    mat4 outMat4 = inMat4;
                                    outMat4[0][0] = 1.0;
                                    outMat4[0][1] = 0.0;
                                    outMat4[0][2] = 0.0;
                                    outMat4[1][0] = 0.0;
                                    outMat4[1][1] = 1.0;
                                    outMat4[1][2] = 0.0;
                                    outMat4[2][0] = 0.0;
                                    outMat4[2][1] = 0.0;
                                    outMat4[2][2] = 1.0;
                                    return outMat4;
                                }
                                `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                                vec4 mPos = billboardMatrix(modelMatrix) * pos;
                            `},{match:"vec4 mVPos = viewMatrix * mPos;",replacement:`
                                vec4 mVPos = billboardMatrix(viewMatrix) * mPos;
                            `},{match:"color += emissive;",replacement:`
                                float strength = 1.0 - uBonus;

                                float diff = vUv.y - strength;
                                color *= smoothstep(0.0, 0.1, diff);
                                color *= 0.8;

                                // Expiring flashing
                                color *= mix(1.0, smoothstep(0.1, 0.5, sin(uTime * 15.0) * 0.5 + 0.5), uExpiring);
                            `}],d={uBonus:s,uExpiring:a};f.program.gltfMaterial.extras={additiveBlending:!0,KHR_materials_unlit:!0},f.isSkipFog=!0;let g=z.parseGLTF(f,m,d);g.depthTest=!1,g.depthWrite=!1,f.program=g}if(f.name==="bonus-01-sphere-geo"){let m=[{match:"// UNIFORMS",replacement:`
                                uniform float uBonus;
                                uniform float uExpiring;
                            `},{match:"// VERTEX_PRE_MAIN",replacement:`
                                mat4 billboardMatrix(mat4 inMat4) {
                                    mat4 outMat4 = inMat4;
                                    outMat4[0][0] = 1.0;
                                    outMat4[0][1] = 0.0;
                                    outMat4[0][2] = 0.0;
                                    outMat4[1][0] = 0.0;
                                    outMat4[1][1] = 1.0;
                                    outMat4[1][2] = 0.0;
                                    outMat4[2][0] = 0.0;
                                    outMat4[2][1] = 0.0;
                                    outMat4[2][2] = 1.0;
                                    return outMat4;
                                }
                                `},{match:"vec4 mPos = modelMatrix * pos;",replacement:`
                                vec4 mPos = modelMatrix * pos;
                                // vec4 mPos = billboardMatrix(modelMatrix) * pos;
                            `},{match:"vec4 mVPos = viewMatrix * mPos;",replacement:`
                                // vec4 mVPos = viewMatrix * mPos;
                                vec4 mVPos = billboardMatrix(viewMatrix) * mPos;
                            `},{match:"baseColor *= SRGBtoLinear(texture2D(tBaseColor, vUv * uBaseColorScale));",replacement:`
                                // baseColor *= SRGBtoLinear(texture2D(tBaseColor, vUv * uBaseColorScale * vec2(2.0, 1.0)));
                            `},{match:"color += emissive;",replacement:`
                                vec3 mask1 = SRGBtoLinear(texture2D(tBaseColor, vUv * vec2(1.0, 1.0) + vec2(uTime * 0.1, uTime * -0.12))).rgb;
                                vec3 mask2 = SRGBtoLinear(texture2D(tBaseColor, vUv * vec2(2.0, 1.0) * 1.5 + vec2(uTime * -0.12, uTime * 0.18))).rgb;

                                float noise1 = mask1.r;
                                float noise2 = mask2.g;
                                float perlin = mask1.b * 2.0 - 1.0;

                                color = vec3(0);
                                color += (noise1 * noise2) * 2.5;

                                // color += geometry.normal.z * 0.1;
                                color *= (pow(smoothstep(0.7, 0.0, geometry.normal.z), 2.0) * 0.4 + 0.02 + pow(smoothstep(0.5, 1.0, vUv.y), 2.0) * 0.5);


                                float strength = 1.0 - uBonus;
                                float fill = strength + perlin * 0.1;
                                float y = vUv.y + sin(vUv.x * 6.28 * 16.0) * 0.01;
                                float diff = y - fill;
                                color *= smoothstep(0.0, 0.05, diff);
                                color += smoothstep( mix(0.005, 0.02, noise1), 0.0, abs(diff));

                                // Expiring flashing
                                color *= mix(1.0, smoothstep(0.1, 0.5, sin(uTime * 15.0) * 0.5 + 0.5), uExpiring);
                            `}],d={uBonus:s,uExpiring:a};f.program.gltfMaterial.extras={additiveBlending:!0,KHR_materials_unlit:!0},f.isSkipFog=!0;let g=z.parseGLTF(f,m,d);g.depthTest=!1,g.depthWrite=!1,f.program=g}}}),e.visible=!1}function l(){C.on(y.data.EVENTS.BONUS_STARTED,c),C.on(y.data.EVENTS.BONUS_ENDED,u)}function c(){y.data.game.bonusType===1&&(r.isDelayExpiringUpdate=!1,e.visible=!0,new U(s,2e3,{value:1,ease:"outCubic"}))}async function u(){y.data.game.bonusType===1&&(r.isDelayExpiringUpdate=!0,await new U(s,1e3,{value:0,ease:"inCubic"}).promise(),e.visible=!1,r.isDelayExpiringUpdate=!1)}function h(f){y.data.isPaused||y.data.game.bonusType===1&&(r.isDelayExpiringUpdate||(a.value=y.data.game.isBonusExpiring?1:0))}}};var le=class{constructor({World:t,group:e}){let r=this,n=t.gl,s={value:0},a={value:0},o,l,c;u(),h(),I.add(d);function u(){e.traverse(b=>{if(!!b.program&&b.name==="bonus-02-sphere-geo"){o=b.program.gltfMaterial.baseColorTexture.texture,l=b.program.gltfMaterial.metallicRoughnessTexture.texture,c=b.program.gltfMaterial.emissiveTexture.texture;let w=new H(n,{vertex:`
                            precision highp float;
                            precision highp int;
                        
                            attribute vec3 position;
                            attribute vec3 normal;
                            attribute vec2 uv;
                        
                            uniform mat3 normalMatrix;
                            uniform mat4 modelViewMatrix;
                            uniform mat4 projectionMatrix;

                            uniform float uBonus;

                            varying vec3 vNormal;
                            varying vec2 vUv;
                    
                            void main() {
                                vUv = uv;
                                vNormal = normalize(normalMatrix * normal);
                                gl_Position = projectionMatrix * modelViewMatrix * vec4(position * smoothstep(0.0, 0.5, uBonus), 1.0);
                            }
                        `,fragment:`
                            precision highp float;
                            precision highp int;
        
                            uniform float uTime;
                            uniform float uBonus;
                            uniform sampler2D tNoise;
                            uniform sampler2D tVoronoi;

                            varying vec3 vNormal;
                            varying vec2 vUv;
                        
                            void main() {

                                vec2 uvNoise = vUv * vec2(2.0, 1.0) * 0.2 + vec2(uTime * 0.0, uTime * -0.05);
                                vec3 noise = texture2D(tNoise, uvNoise).rgb;
                                noise = noise * 2.0 - 1.0;
                                vec2 uvVoronoi1 = vUv * vec2(2.0, 1.0) * 2.0 + noise.r * 0.20 + vec2(uTime * 0.3, uTime * 0.5) * 2.0;
                                vec2 uvVoronoi2 = vUv * vec2(2.0, 1.0) * 0.6 + noise.g * 0.15 + vec2(uTime * -0.15, uTime * -0.2) * 2.0;
                                float voronoi1 = smoothstep(0.4, 0.0, texture2D(tVoronoi, uvVoronoi1).g);
                                float voronoi2 = smoothstep(0.6, 0.0, texture2D(tVoronoi, uvVoronoi2).g);
                                float voronoi = voronoi1 * voronoi2;

                                gl_FragColor.rgb = vec3(0.0, 0.0, 1.0) * voronoi + voronoi * 2.0;
                                // gl_FragColor.rgb = vec3(voronoi);

                                gl_FragColor.rgb *= smoothstep(0.0, 0.1, uBonus - vUv.y);

                                // gl_FragColor.rgb *= smoothstep(0.8, 0.3, abs(vNormal.z) );
                                // gl_FragColor.rgb *= uBonus;
                                gl_FragColor.a = 1.0;
                            }
                        `,uniforms:{uBonus:s,uTime:t.time,tNoise:{value:o},tVoronoi:{value:l}},cullFace:!1,depthWrite:!1});w.setBlendFunc(n.ONE,n.ONE),b.program=w,b.rotation.z=Math.PI*.5}});let g=15,p=new Float32Array(g*4);for(let b=0;b<g;b++)p.set([Math.random(),Math.random(),Math.random(),Math.random()],b*4);let v=new K(n,{position:{size:3,data:new Float32Array(g*3)},life:{size:1,data:new Float32Array(g*1)},random:{size:4,data:p}}),E=new ft({count:g,bufferProperties:[{property:"position",attribute:v.attributes.position,offset:0},{property:"life",attribute:v.attributes.life,offset:0}],onInit:(b,w)=>{b.life=0,b.random=[Math.random(),Math.random(),Math.random(),Math.random()]},onEmit:(b,w)=>{b.life=1,b.position.set(A.random(-1,1,3),A.random(-1,1,3),A.random(-1,1,3)).normalize().multiply(1.2)},onUpdate:(b,w)=>{b.life<=0||(b.life-=A.mix(.06,.2,b.random[1]),b.life<=0)}});I.add(()=>{y.data.isPaused||(E.emit(1),E.update())});let x=new H(n,{vertex:`
                    attribute vec3 position;
                    attribute float life;
                    attribute vec4 random;
                
                    uniform mat4 modelViewMatrix;
                    uniform mat4 projectionMatrix;
                
                    uniform float uBonus;
                    uniform float uTime;
                    uniform float uDPR;
                
                    varying float vLife;
                    varying vec4 vRandom;
                
                    void main() {
                        vLife = life;
                        vRandom = random;
                
                        vec4 mVpos = modelViewMatrix * vec4(position * smoothstep(0.0, 0.5, uBonus), 1.0);
                        gl_Position = projectionMatrix * mVpos;
                        
                        // gl_PointSize = 100.0 / length(mVpos.xyz);
                        gl_PointSize = mix(0.0, mix(30.0, 100.0, vRandom.x), uBonus) * (6.0 * uDPR) / length(mVpos.xyz);
                        // gl_PointSize = mix(40.0, 120.0, vRandom.x) * mix(0.3, 1.0, vLife) * 5.0 / length(mVpos.xyz);
                        // gl_PointSize = mix(40.0, 150.0, vRandom.x) * mix(0.3, 1.0, vLife) * mix(0.3, 1.0, smoothstep(1.0, 0.8, vLife)) * 20.0 / length(mVpos.xyz);
                    }
                `,fragment:`
                    precision highp float;
                
                    uniform float uBonus;
                    uniform float uTime;
                    uniform sampler2D tLightning;
                
                    varying float vLife;
                    varying vec4 vRandom;
                
                    vec2 rotate2d(vec2 v, float a){
                        float c = cos(a);
                        float s = sin(a);
                        return mat2(c, -s, s, c) * v;
                    }
                
                    void main() {
                        vec3 color = vec3(0);
                        float alpha = 1.0;
                        
                        vec2 uv = gl_PointCoord.xy;

                        // color = mix(vec3(1), vec3(0.791, 0.699, 0.602), vLife);
                
                        // Random rotation
                        uv -= 0.5;
                        uv = rotate2d(uv, mix(-3.14, 3.14, vRandom.y));
                        // uv = rotate2d(uv, sin(uTime * mix(1.0, 5.0, vRandom.w) + 6.24 * vRandom.z) * mix(-3.14, 3.14, vRandom.x));
                        uv += 0.5;

                        // Clip out neighbour stamps post rotation
                        alpha *= step(0.0, uv.x);
                        alpha *= step(0.0, uv.y);
                        alpha *= step(uv.x, 1.0);
                        alpha *= step(uv.y, 1.0);

                        float spriteIndex = floor(vRandom.z * 36.0); 
                        uv.x += mod(spriteIndex, 6.0);
                        uv.y += floor(spriteIndex / 6.0);
                        uv /= 6.0;
                
                        vec4 tex = texture2D(tLightning, uv);
                
                        color += vec3(0.0, 0.0, 1.0) * tex.g + tex.g * 1.5;
                        alpha *= tex.g;
                        // alpha *= 0.2;
                
                        alpha *= smoothstep(0.0, 0.3, vLife);
                        alpha *= smoothstep(1.0, 0.9, vLife);

                        if (alpha < 0.01) discard;

                        
                        gl_FragColor = vec4(color, alpha);
                    }
                `,uniforms:{uBonus:s,uTime:t.time,tLightning:{value:c},uDPR:t.uDPR},depthWrite:!1});x.setBlendFunc(n.ONE,n.ONE);let _=new q(n,{geometry:v,program:x,mode:n.POINTS});_.setParent(e),_.position.y=.5,e.visible=!1}function h(){C.on(y.data.EVENTS.BONUS_STARTED,f),C.on(y.data.EVENTS.BONUS_ENDED,m)}function f(){y.data.game.bonusType===2&&(r.isDelayExpiringUpdate=!1,e.visible=!0,new U(s,1500,{value:1,ease:"outCubic"}))}async function m(){y.data.game.bonusType===2&&(r.isDelayExpiringUpdate=!0,await new U(s,700,{value:0,ease:"inCubic"}).promise(),e.visible=!1,r.isDelayExpiringUpdate=!1)}function d(g){y.data.isPaused||y.data.game.bonusType===1&&(r.isDelayExpiringUpdate||(a.value=y.data.game.isBonusExpiring?1:0))}}};var ce=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"BIKE"};let n=null,s=null,a=null,o=null,l=new k,c=[],u={crash:0},h=new O,f={value:0},m={value:0},d={value:0},g={value:0},p={value:0};v(),E(),I.add(w),x();function v(){new ae({World:t,group:l})}function E(){let S=.2,N=.5,D=[];for(let L=0;L<5;L++)D.push(new O(0,0,L));let P=new vt(r,{points:D,fragment:`
                    precision highp float;
                
                    uniform vec3 uColor;
                    uniform float uBoost;
                    uniform float uLightning;
                    
                    varying vec2 vUv;
                
                    void main() {
                        gl_FragColor.rgb = mix(uColor * 1.8, vec3(0.5, 0.5, 1.0) * 1.4, uLightning);
                        gl_FragColor.rgb *= 1.0 - vUv.y;

                        gl_FragColor.rgb *= smoothstep(0.0, 0.1, abs(vUv.x - 0.5));

                        float round = 4.0;
                        if (vUv.y < 0.5 / round) {
                            gl_FragColor.rgb *= 0.5 + 0.5 * smoothstep(0.5, 0.49, length(vUv * vec2(1.0, round) - 0.5));
                        }

                        gl_FragColor.rgb *= mix(mix(0.2, 0.8, uBoost), 0.8, uLightning);





                        gl_FragColor.a = 1.0;
                    }
                `,uniforms:{uColor:{value:new J("#ec525b")},uThickness:{value:15},uBoost:f,uLightning:p}});P.mesh.program.setBlendFunc(r.ONE,r.ONE),P.mesh.program.depthWrite=!1,P.mesh.program.depthTest=!1,P.mesh.setParent(t.scene),y.link(["width","height"],()=>{P.resize()}),I.add(()=>{if(!y.data.isPaused){for(let L=D.length-1;L>=0;L--)if(L){let B=D[L-1];D[L].lerp(B,N),D[L].z=B.z+S*Math.max(.1,y.data.game.speed)*A.mix(1,1.5,p.value)}else D[L].copy(h),D[L].z-=.05;P.updateGeometry()}})}function x(){C.on(y.data.EVENTS.SKIN,_),C.on(y.data.EVENTS.CRASHED,b)}function _({index:R}){!n||s.traverse(S=>{!S.program||!S.name||S.name!=="bike-flare-geo"&&(S.program=c[R])})}async function b(){u.crash=1,new U(u,1e3,{crash:0,ease:"inOutQuad"})}function w(R){if(!n||y.data.isPaused)return;m.value=y.data.game.isCrashing&&y.data.game.isStarted?1:0,d.value+=((y.data.game.bonusType===0&&y.data.game.isBonusing?1:0)-d.value)*.04,g.value+=((y.data.game.bonusType===1&&y.data.game.isBonusing?1:0)-g.value)*.04,p.value+=((y.data.game.bonusType===2&&y.data.game.isBonusing?1:0)-p.value)*.04,f.value+=((y.data.game.isBoosting?1:0)-f.value)*.1,n.position.x=y.data.input.roadPos,s.rotation.z=y.data.input.posDiff*-1,s.rotation.y=y.data.input.posDiff*-.5;let S=Math.sin(t.time.value*20)*u.crash*.2,N=Math.sin(t.time.value*10)*u.crash*.4;s.rotation.z+=S,s.rotation.y+=N,a.rotation.y=s.rotation.y,o.rotation.z=-s.rotation.z,s.children[1].rotation.x+=(y.data.game.acceleration*7-s.children[1].rotation.x)*.04,s.children[0].rotation.x+=(y.data.game.acceleration*-5-s.children[0].rotation.x)*.04,n.updateMatrixWorld(),o.worldMatrix.getTranslation(h)}this.add=R=>{n=R,s=R.children[0],a=R.children[1],new oe({World:t,group:R.children[2]}),new le({World:t,group:R.children[3]}),R.traverse(S=>{if(S.name==="bonus-01"||S.name==="bonus-02")return!0;if(!S.program)return;let N=null;if(S.name==="square-geo"){S.program.gltfMaterial.extras={additiveBlending:!0,KHR_materials_unlit:!0},S.isSkipFog=!0;let P=[{match:"// UNIFORMS",replacement:`
                                uniform float uAlpha;
                            `},{match:"float alpha = baseColor.a;",replacement:`
                                float alpha = baseColor.a;
                                alpha *= uAlpha;
                            `}],L={uAlpha:{value:1}};C.on("game_reset",()=>L.uAlpha.value=1),C.on("game_start",()=>new U(L.uAlpha,1e3,{value:0}));let B=z.parseGLTF(S,P,L);S.program=B;return}if(S.name==="bike-flare-geo"){S.program.gltfMaterial.extras={additiveBlending:!0,KHR_materials_unlit:!0},S.isSkipFog=!0;let P=z.parseGLTF(S);S.program=P,o=S;return}if(S.name.includes("shadow-plane")){S.program.gltfMaterial.extras={KHR_materials_unlit:!0},S.isSkipFog=!0;let P=z.parseGLTF(S);S.program=P;return}if(S.name==="bonus-02-geo")return;S.program.gltfMaterial.doubleSided=!0,N=[{match:"// UNIFORMS",replacement:`
                            uniform float uCrash;
                            uniform float uMagnet;
                            uniform float uShield;
                            uniform float uLightning;
                        `},{match:"// FINAL COLOR",replacement:`
                            
                            // color += uCrash * smoothstep(0.4, 0.5,  mod(uTime * 2.0, 1.0) );
                            float crash = uCrash * (sin(uTime * 15.0) * 0.5 + 0.5) * 0.1;
                            vec3 crashColor = vec3(1.0, 0.1, 0.1) * 3.0;
                            color = mix(color, crashColor, crash);
                            
                            // float shield = (sin(uTime * 5.0) * 0.5 + 0.5) * 0.2 + 0.1;
                            // shield *= uShield;
                            float shield = uShield;
                            vec3 shieldColor = vec3(1.0) * 0.7;
                            color = mix(color, color * 5.0 + shieldColor, shield);
                            // color = mix(color, vec3(1), shield);

                            float magnet = uMagnet;
                            vec3 magnetColor = vec3(1.0) * 0.05;
                            color = mix(color, color * 2.0 + magnetColor, magnet);

                            float lightning = uLightning * (sin(uTime * 50.0) * 0.5 + 0.5) * 0.02;
                            vec3 lightningColor = vec3(0.5, 0.5, 1.0) * 3.0;
                            color = mix(color, lightningColor, lightning);
                        `}];let D={uCrash:m,uMagnet:d,uShield:g,uLightning:p};switch(S.program.gltfMaterial.name){case"MOTO_THTH":c[0]=z.parseGLTF(S,N,D);break;case"MOTO_DG":c[1]=z.parseGLTF(S,N,D);break;case"MOTO_AW":c[2]=z.parseGLTF(S,N,D);break}}),_({index:y.data.skinIndex}),l.name="bonus-transform",l.setParent(s)},this.fallback=()=>{console.warn("no BIKE found")},this.destroy=()=>{}}};var ue=class{constructor({World:t}){let e=this,r=t.gl;this.match={groupName:"road-geo"},I.add(n);function n(s){y.data.isPaused}this.add=s=>{let a=[{match:"float alpha = baseColor.a;",replacement:`
                        float alpha = baseColor.a;
                        // Red stripes
                        if (abs(vUv.y - 0.5) > 0.48) {
                            baseColor.rgb = vec3(1.0, 0.0, 0.0);
                        }
                    `}],o=z.parseGLTF(s,a);s.program=o},this.fallback=()=>{console.warn("no ROAD found")},this.destroy=()=>{}}};var Es=`
    precision highp float;
    uniform sampler2D tMap;
    uniform float uThreshold;

    varying vec2 vUv;

    void main() {
        vec4 tex = texture2D(tMap, vUv);
        vec4 bright = tex * step(uThreshold, length(tex.rgb) / 1.73205);
        gl_FragColor = bright;
    }
`,Zr=`
    precision highp float;

    // https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/5.glsl
    vec4 blur5(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3333333333333333) * direction;
        color += texture2D(image, uv) * 0.29411764705882354;
        color += texture2D(image, uv + (off1 / resolution)) * 0.35294117647058826;
        color += texture2D(image, uv - (off1 / resolution)) * 0.35294117647058826;
        return color;
    }

    // https://github.com/Jam3/glsl-fast-gaussian-blur/blob/master/9.glsl
    vec4 blur9(sampler2D image, vec2 uv, vec2 resolution, vec2 direction) {
        vec4 color = vec4(0.0);
        vec2 off1 = vec2(1.3846153846) * direction;
        vec2 off2 = vec2(3.2307692308) * direction;
        color += texture2D(image, uv) * 0.2270270270;
        color += texture2D(image, uv + (off1 / resolution)) * 0.3162162162;
        color += texture2D(image, uv - (off1 / resolution)) * 0.3162162162;
        color += texture2D(image, uv + (off2 / resolution)) * 0.0702702703;
        color += texture2D(image, uv - (off2 / resolution)) * 0.0702702703;
        return color;
    }

    uniform sampler2D tMap;
    uniform vec2 uDirection;
    uniform vec2 uResolution;

    varying vec2 vUv;

    void main() {
        // Swap with blur9 for higher quality
        // gl_FragColor = blur9(tMap, vUv, uResolution, uDirection);
        gl_FragColor = blur5(tMap, vUv, uResolution, uDirection);
    }
`,Ms=`
    precision highp float;
    
    #define PI 3.141592653589793

    uniform sampler2D tMap;
    uniform sampler2D tBloom;
    uniform vec2 uResolution;
    uniform float uBloomStrength;
    uniform float uAlpha;
    uniform float uBonusBoost;

    varying vec2 vUv;

    highp float rand(const in vec2 uv) {
        const highp float a = 12.9898, b = 78.233, c = 43758.5453;
        highp float dt = dot(uv.xy, vec2(a, b)), sn = mod(dt, PI);
        return fract(sin(sn) * c);
    }

    void main() {
        gl_FragColor = texture2D(tMap, vUv) + texture2D(tBloom, vUv) * uBloomStrength;

        // Vignette
        vec2 uv = vUv + rand(vUv) * 0.02;
        float vignette = 1.0 - length(uv - 0.5) * 0.7;
        gl_FragColor.rgb = mix(vec3(uBonusBoost * 0.2), gl_FragColor.rgb, vignette);

        // Top fade
        float topFade = smoothstep(1.1, 0.85, vUv.y);
        gl_FragColor.rgb *= topFade;
        
        // Fade in/out
        gl_FragColor.rgb *= uAlpha;
    }
`,he=class{constructor({World:t}){let e=this,r=t.gl,n={value:new G},s={value:new G},a,o=new ht(r),l=.5,c=.9,u=2,h=1,f=new ht(r,{dpr:l,targetOnly:!0}),m={value:0};d(),g(),I.add(v);function d(){f.addPass({fragment:Es,uniforms:{uThreshold:{value:c}}});let _=f.addPass({fragment:Zr,uniforms:{uResolution:s,uDirection:{value:new G(u,0)}}}),b=f.addPass({fragment:Zr,uniforms:{uResolution:s,uDirection:{value:new G(0,u)}}});for(let w=0;w<5;w++)f.passes.push(_,b);a=o.addPass({fragment:Ms,uniforms:{uResolution:n,tBloom:f.uniform,uBloomStrength:{value:h},uAlpha:m,uBonusBoost:t.bonusBoost}})}function g(){y.link(["width","height"],p),C.on("game_reset",E),C.on(y.data.EVENTS.GAMEOVER,x),y.data.width&&p(y.data)}function p({width:_,height:b}){o.resize(),f.resize(),n.value.set(_,b),s.value.set(f.options.width,f.options.height)}function v(_){y.data.isPaused||(a.enabled=!1,o.targetOnly=!0,o.render({scene:t.scene,camera:t.camera}),f.render({texture:o.uniform.value,targetOnly:!0}),a.enabled=!0,o.targetOnly=!1,o.render({texture:o.uniform.value}))}function E(){m.value=0,new U(m,3e3,{value:1,ease:"outCubic"})}function x(){new U(m,3e3,{value:.5,ease:"inCubic"})}this.match={groupName:"//////"},this.add=()=>{},this.fallback=()=>{},this.destroy=()=>{}}};var fe=class{constructor({World:t}){let e=this,r=t.gl,n=.35;this.match={groupName:"COUNTDOWN"};let s=[],a;o();function o(){C.on("game_reset",l),I.add(c)}function l(){a.position.z=y.data.game.progress*n,a.rotation.z=y.data.game.progress*.005,s[0].visible=!1,s[1].visible=!1,s[2].visible=!1,s[3].visible=!1,X(500,()=>{s[0].visible=!0,s[1].visible=!1,s[2].visible=!1,s[3].visible=!1}),X(1500,()=>{s[0].visible=!1,s[1].visible=!0,s[2].visible=!1,s[3].visible=!1}),X(2500,()=>{s[0].visible=!1,s[1].visible=!1,s[2].visible=!0,s[3].visible=!1}),X(3500,()=>{s[0].visible=!1,s[1].visible=!1,s[2].visible=!1,s[3].visible=!0}),X(5500,()=>{s[0].visible=!1,s[1].visible=!1,s[2].visible=!1,s[3].visible=!1})}function c(){!a||y.data.isPaused||(a.position.z+=(y.data.game.progress*n-a.position.z)*.1,a.rotation.z+=(y.data.game.progress*.005-a.rotation.z)*.04)}this.add=u=>{a=u,u.children.forEach(h=>{switch(h.name){case"countdown-3":s[0]=h;break;case"countdown-2":s[1]=h;break;case"countdown-1":s[2]=h;break;case"countdown-go":s[3]=h;break}h.visible=!1}),u.traverse(h=>{if(!h.program)return;h.program.gltfMaterial.extras={additiveBlending:!0,KHR_materials_unlit:!0},h.isSkipFog=!0;let f=[{match:"baseColor *= SRGBtoLinear(texture2D(tBaseColor, vUv * uBaseColorScale));",replacement:`
                            vec2 uvC = vUv;
                            uvC.x += smoothstep(0.97, 1.0, rand( vec2(floor(vUv.y * 100.0), floor(uTime * 20.0) ) )) * 0.04 * (rand(vec2(floor(uTime * 20.0))) * 2.0 - 1.0) ;
                            baseColor *= SRGBtoLinear(texture2D(tBaseColor, uvC));
                        `},{match:"float alpha = baseColor.a;",replacement:`
                            float alpha = baseColor.a;
                            baseColor.rgb *= 1.0;
                        `}],m=z.parseGLTF(h,f);m.depthWrite=!1,m.depthTest=!1,h.program=m})},this.fallback=()=>{console.warn("no COUNTDOWN found")},this.destroy=()=>{}}};var de=class{constructor({World:t}){let e=this,r=t.gl;n(),I.add(a);function n(){let o=new ct(r),l=new H(r,{vertex:`
                    attribute vec2 uv;
                    attribute vec2 position;

                    varying vec2 vUv;

                    void main() {
                        vUv = uv;
                        gl_Position = vec4(position, 0, 1);
                    }
                `,fragment:`
                    precision highp float;

                    uniform float uTime;
                    uniform float uBonusBoost;

                    varying vec2 vUv;

                    void main() {
                        vec3 color = vec3(0);

                        vec3 deepRed = vec3(0.219, 0.002, 0.014);
                        vec3 blackRed = vec3(0.040, 0.000, 0.000);

                        vec3 whiteRed = vec3(1.0, 0.9, 0.9);
                        vec3 pinkRed = vec3(1.0, 0.6, 0.6) * 0.9;

                        float centerDiff = length(vUv - 0.5);
                        color = mix(mix(deepRed, blackRed, centerDiff), mix(whiteRed, pinkRed, centerDiff) * 0.92, uBonusBoost);

                        gl_FragColor.rgb = color;
                        gl_FragColor.a = 1.0;
                    }
                `,uniforms:{uTime:t.time,uBonusBoost:t.bonusBoost},depthWrite:!1});new q(r,{geometry:o,program:l}).setParent(t.scene)}function s(){}function a(){}this.match={groupName:"/////"},this.add=()=>{},this.fallback=()=>{},this.destroy=()=>{}}};var It=class{static init(t,e){let r=this,n=t.gl,s=[de,he,te,ee,ie,re,ne,se,ce,ue,fe],a=[Jt],o=[...s,...a],l,c,u,h;f(),I.add(g);async function f(){o=o.map(p=>new p({World:t}))}function m(p){l=p,z.addLights(l.lights),z.envIrradianceTexture_=Mt.load(n,{src:y.data.envIrradianceSrc,generateMipmaps:!1}),z.envRadianceTexture_=Mt.load(n,{src:y.data.envRadianceSrc,generateMipmaps:!1}),l.scene.forEach(v=>{v.setParent(t.scene),v.traverse(E=>{E instanceof xt&&(E.frustumCulled=!1);for(let x=0;x<o.length;x++){let _=o[x],[b,w]=d(_,E);if(b&&(_.hasMatch=!0),w)return!0;if(b)return!1}})}),o.forEach(v=>{!v.hasMatch&&v.fallback&&v.fallback()})}function d(p,v){let{objectName:E,groupName:x,meshName:_,materialName:b}=p.match;return E&&v.name&&v.name===E?(p.add(v),[!0,!1]):x&&v.name&&v.name===x?(p.add(v),[!0,!0]):v.program?_&&v.name&&(v.name===_||_==="*")?(p.add(v),[!0,!1]):v.program.gltfMaterial?b&&v.program.gltfMaterial.name===b?(p.add(v),[!0,!1]):[!1,!1]:[!1,!1]:[!1,!1]}function g(){y.data.isPaused||l&&l.animations&&l.animations.length&&l.animations.forEach(({animation:p})=>{p.elapsed+=.01,p.update()})}this.parse=m,this.destroy=()=>{I.remove(g),o.forEach(p=>{p.destroy&&p.destroy()})}}};var me=class{constructor(){let t=this,e={left:["ArrowLeft","KeyA"],right:["ArrowRight","KeyD"],bonus:["Space","Enter"]};for(let w in e)this[w]=0;this.isBonus=0,this.targetMousePos=0,this.isMousedown=0,this.targetPos=0,this.pos=0,this.roadPos=0,this.posDiff=0,this.driftDiff=0,this.mouseDownY=0,this.mouseDownTime=0;let r=.04,n=.06,s=.1,a=4,o=.2,l=1.2,c=100,u=300,h=r;y.push({input:this}),f(),I.add(b);function f(){window.addEventListener("keydown",m),window.addEventListener("keyup",d),"ontouchstart"in window?(y.data.world.canvas.addEventListener("touchstart",g,{passive:!1}),window.addEventListener("touchmove",p,{passive:!1}),window.addEventListener("touchend",v)):(y.data.world.canvas.addEventListener("pointerdown",g),window.addEventListener("pointermove",p),window.addEventListener("pointerup",v)),document.addEventListener("visibilitychange",()=>{document.hidden&&x()},!1),C.on("game_reset",_)}function m({code:w}){if(document.activeElement.nodeName!=="INPUT")for(let R in e)e[R].includes(w)&&(t[R]=1)}function d({code:w}){for(let R in e)e[R].includes(w)&&(t[R]=0)}function g(w){t.isMousedown=1,E(),t.mouseDownY=Pt.pixel.y,t.mouseDownTime=w.timeStamp}function p(){!t.isMousedown||E()}function v(w){t.isMousedown=0;let R=Pt.pixel.y-t.mouseDownY,S=w.timeStamp-t.mouseDownTime;R<-c&&S<u&&C.emit("input_bonus")}function E(){t.targetMousePos=A.clamp(Pt.tilt[0]*1.2,-1,1)}function x(){for(let w in e)t[w]=0}function _(){t.isBonus=0,t.targetMousePos=0,t.isMousedown=0,t.targetPos=0,t.pos=0,t.roadPos=0,t.posDiff=0,t.driftDiff=0,t.mouseDownY=0,t.mouseDownTime=0}function b(w){if(y.data.isPaused)return;let R=w/16,S=t.bonus;S&&!t.isBonus&&C.emit("input_bonus"),t.isBonus=S,h+=((y.data.game.isBoosting?n:r)-h)*.1;let N=(t.right-t.left)*h*R,D=Math.min(1,y.data.game.speed);if(t.isMousedown){let P=h*l,L=A.clamp((t.targetMousePos-t.targetPos)*o*R,-P,P);t.driftDiff+=(L-t.driftDiff)*o*R*D}else t.driftDiff+=(N-t.driftDiff)*o*R*D;t.targetPos+=t.driftDiff*D,t.targetPos=Math.min(1,Math.max(-1,t.targetPos)),t.posDiff=t.targetPos-t.pos,y.data.game.isStarted||(t.posDiff=0),t.pos+=t.posDiff*s*R,t.roadPos=t.pos*a}}};var pe=class{constructor(){let t=this;y.push({game:this});let e=3,r=2,n=1e3,s=2e3,a=.5,o=20,l=[5e3,5e3,5e3],c=1e3,u=.1,h=.04,f=.2,m=.3,d=15e-6,g=.1,p=5,v=50,E=30,x=2;this.isStarted=!1,this.speedEase=0,this.speed=0,this.acceleration=0,this.speedDelta=0,this.progress=0,this.lives=e,this.bonusType=0,this.bonusCoins=0,this.isBonusReady=!1,this.isBonusing=!1,this.isBonusExpiring=!1,this.bonusRemaining=0,this.isBoosting=!1,this.boostRemaining=0,this.isCrashing=!1,this.score=0,this.scoreRounded=0,this.scoreMult=1,_(),I.add(Y);function _(){C.on("game_start",w),C.on("input_bonus",R),C.on(y.data.EVENTS.BONUS,R),C.on("game_boost",S),C.on("game_crash",N),C.on("game_life",L),C.on("game_coin",B),C.on("game_reset",F),C.on("nars:game:skin",b)}function b({index:at}){t.bonusType=at}function w(){t.isStarted=!0}function R(){!t.isStarted||!t.isBonusReady||t.isBonusing||(t.isBonusing=!0,t.bonusRemaining=l[t.bonusType],t.isBonusReady=!1,t.bonusCoins=0,C.emit(y.data.EVENTS.BONUS_STARTED),C.emit(y.data.EVENTS.BONUS_PROGRESS,{progress:t.bonusRemaining/l[t.bonusType]}))}function S(){t.score+=E*t.scoreMult,t.scoreRounded=Math.round(t.score),C.emit(y.data.EVENTS.SCORE,{value:t.scoreRounded}),t.isStarted&&(t.isBoosting||(t.isBoosting=!0,t.boostRemaining=n,C.emit("game_boost_start"),C.emit(y.data.EVENTS.BOOST)))}function N(){!t.isStarted||t.isCrashing||(t.isCrashing=!0,X(s,()=>{t.isCrashing=!1}),C.emit(y.data.EVENTS.CRASHED),D())}function D(){t.lives--,C.emit(y.data.EVENTS.LIFE,{value:t.lives}),t.lives<=0&&P()}function P(){t.isStarted=!1,t.isBonusing&&C.emit(y.data.EVENTS.BONUS_ENDED),C.emit(y.data.EVENTS.GAMEOVER)}function L(){t.lives++,t.lives>e&&(t.lives=e),C.emit(y.data.EVENTS.LIFE,{value:t.lives}),C.emit(y.data.EVENTS.CATCH_LIFE),t.score+=v*t.scoreMult,t.scoreRounded=Math.round(t.score),C.emit(y.data.EVENTS.SCORE,{value:t.scoreRounded})}function B(){!t.isBonusing&&!t.isBonusReady&&(t.bonusCoins++,C.emit(y.data.EVENTS.BONUS_PROGRESS,{progress:Math.min(1,t.bonusCoins/o)}),t.bonusCoins>=o&&(t.bonusCoins=o,t.isBonusReady||(t.isBonusReady=!0,C.emit(y.data.EVENTS.BONUS_READY)))),C.emit(y.data.EVENTS.CATCH_COIN),t.score+=p*t.scoreMult,t.scoreRounded=Math.round(t.score),C.emit(y.data.EVENTS.SCORE,{value:t.scoreRounded})}function F(){rt()}function Y(at){if(y.data.isPaused)return;let Z=at/16;t.isBonusing&&(t.bonusRemaining-=at,C.emit(y.data.EVENTS.BONUS_PROGRESS,{progress:t.bonusRemaining/l[t.bonusType]}),t.bonusRemaining<=c&&!t.isBonusExpiring&&(t.isBonusExpiring=!0),t.bonusRemaining<=0&&(t.bonusRemaining=0,t.isBonusing=!1,t.isBonusExpiring=!1,C.emit(y.data.EVENTS.BONUS_ENDED))),t.isBonusing&&t.bonusType===2?t.scoreMult=x:t.scoreMult=1,t.isBoosting&&(t.boostRemaining-=at,t.boostRemaining<=0&&(t.boostRemaining=0,t.isBoosting=!1,C.emit("game_boost_end")));let gt=0;t.isStarted&&(gt+=1),t.isBoosting&&(gt*=r),t.isCrashing&&(gt*=a),t.acceleration=gt-t.speed,t.acceleration>0?t.acceleration*=u*Z:t.isCrashing?t.acceleration*=f*Z:t.acceleration*=h*Z,t.speed+=t.acceleration,t.speedDelta=t.speed*(m+d*t.progress)*Z,t.progress+=t.speedDelta,t.isStarted&&(t.score+=t.speedDelta*g*t.scoreMult,t.scoreRounded=Math.round(t.score),C.emit(y.data.EVENTS.SCORE,{value:t.scoreRounded}))}function rt(){t.isStarted=!1,t.speedEase=0,t.speed=0,t.acceleration=0,t.speedDelta=0,t.progress=0,t.lives=e,t.bonusCoins=0,t.isBonusReady=!1,t.isBonusing=!1,t.isBonusExpiring=!1,t.bonusRemaining=0,t.isBoosting=!1,t.boostRemaining=0,t.isCrashing=!1,t.score=0,t.scoreRounded=0,t.scoreMult=1,C.emit(y.data.EVENTS.SCORE,{value:t.scoreRounded}),C.emit(y.data.EVENTS.LIFE,{value:t.lives}),C.emit(y.data.EVENTS.BONUS_PROGRESS,{progress:t.bonusCoins/o})}}};async function Jr(i,t){let e=await fetch(i),r=e.headers.get("content-length");if(!r){let u=await e.arrayBuffer();return ut.unpackGLB(u)}let n=0,s=e.body.getReader(),a=[];for(;;){let{done:u,value:h}=await s.read();if(u)break;n+=h.length,a.push(h),t(n/r)}let o=new Uint8Array(n),l=0;return a.forEach(u=>{o.set(u,l),l+=u.length}),ut.unpackGLB(o.buffer)}function ws(i){if(!!i&&!(typeof window>"u")){var t=document.createElement("style");return t.setAttribute("type","text/css"),t.innerHTML=i,document.head.appendChild(t),i}}function Ct(i,t){var e=i.__state.conversionName.toString(),r=Math.round(i.r),n=Math.round(i.g),s=Math.round(i.b),a=i.a,o=Math.round(i.h),l=i.s.toFixed(1),c=i.v.toFixed(1);if(t||e==="THREE_CHAR_HEX"||e==="SIX_CHAR_HEX"){for(var u=i.hex.toString(16);u.length<6;)u="0"+u;return"#"+u}else{if(e==="CSS_RGB")return"rgb("+r+","+n+","+s+")";if(e==="CSS_RGBA")return"rgba("+r+","+n+","+s+","+a+")";if(e==="HEX")return"0x"+i.hex.toString(16);if(e==="RGB_ARRAY")return"["+r+","+n+","+s+"]";if(e==="RGBA_ARRAY")return"["+r+","+n+","+s+","+a+"]";if(e==="RGB_OBJ")return"{r:"+r+",g:"+n+",b:"+s+"}";if(e==="RGBA_OBJ")return"{r:"+r+",g:"+n+",b:"+s+",a:"+a+"}";if(e==="HSV_OBJ")return"{h:"+o+",s:"+l+",v:"+c+"}";if(e==="HSVA_OBJ")return"{h:"+o+",s:"+l+",v:"+c+",a:"+a+"}"}return"unknown format"}var tn=Array.prototype.forEach,Bt=Array.prototype.slice,T={BREAK:{},extend:function(t){return this.each(Bt.call(arguments,1),function(e){var r=this.isObject(e)?Object.keys(e):[];r.forEach(function(n){this.isUndefined(e[n])||(t[n]=e[n])}.bind(this))},this),t},defaults:function(t){return this.each(Bt.call(arguments,1),function(e){var r=this.isObject(e)?Object.keys(e):[];r.forEach(function(n){this.isUndefined(t[n])&&(t[n]=e[n])}.bind(this))},this),t},compose:function(){var t=Bt.call(arguments);return function(){for(var e=Bt.call(arguments),r=t.length-1;r>=0;r--)e=[t[r].apply(this,e)];return e[0]}},each:function(t,e,r){if(!!t){if(tn&&t.forEach&&t.forEach===tn)t.forEach(e,r);else if(t.length===t.length+0){var n=void 0,s=void 0;for(n=0,s=t.length;n<s;n++)if(n in t&&e.call(r,t[n],n)===this.BREAK)return}else for(var a in t)if(e.call(r,t[a],a)===this.BREAK)return}},defer:function(t){setTimeout(t,0)},debounce:function(t,e,r){var n=void 0;return function(){var s=this,a=arguments;function o(){n=null,r||t.apply(s,a)}var l=r||!n;clearTimeout(n),n=setTimeout(o,e),l&&t.apply(s,a)}},toArray:function(t){return t.toArray?t.toArray():Bt.call(t)},isUndefined:function(t){return t===void 0},isNull:function(t){return t===null},isNaN:function(i){function t(e){return i.apply(this,arguments)}return t.toString=function(){return i.toString()},t}(function(i){return isNaN(i)}),isArray:Array.isArray||function(i){return i.constructor===Array},isObject:function(t){return t===Object(t)},isNumber:function(t){return t===t+0},isString:function(t){return t===t+""},isBoolean:function(t){return t===!1||t===!0},isFunction:function(t){return t instanceof Function}},Ts=[{litmus:T.isString,conversions:{THREE_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString()+e[1].toString()+e[2].toString()+e[2].toString()+e[3].toString()+e[3].toString(),0)}},write:Ct},SIX_CHAR_HEX:{read:function(t){var e=t.match(/^#([A-F0-9]{6})$/i);return e===null?!1:{space:"HEX",hex:parseInt("0x"+e[1].toString(),0)}},write:Ct},CSS_RGB:{read:function(t){var e=t.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3])}},write:Ct},CSS_RGBA:{read:function(t){var e=t.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);return e===null?!1:{space:"RGB",r:parseFloat(e[1]),g:parseFloat(e[2]),b:parseFloat(e[3]),a:parseFloat(e[4])}},write:Ct}}},{litmus:T.isNumber,conversions:{HEX:{read:function(t){return{space:"HEX",hex:t,conversionName:"HEX"}},write:function(t){return t.hex}}}},{litmus:T.isArray,conversions:{RGB_ARRAY:{read:function(t){return t.length!==3?!1:{space:"RGB",r:t[0],g:t[1],b:t[2]}},write:function(t){return[t.r,t.g,t.b]}},RGBA_ARRAY:{read:function(t){return t.length!==4?!1:{space:"RGB",r:t[0],g:t[1],b:t[2],a:t[3]}},write:function(t){return[t.r,t.g,t.b,t.a]}}}},{litmus:T.isObject,conversions:{RGBA_OBJ:{read:function(t){return T.isNumber(t.r)&&T.isNumber(t.g)&&T.isNumber(t.b)&&T.isNumber(t.a)?{space:"RGB",r:t.r,g:t.g,b:t.b,a:t.a}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b,a:t.a}}},RGB_OBJ:{read:function(t){return T.isNumber(t.r)&&T.isNumber(t.g)&&T.isNumber(t.b)?{space:"RGB",r:t.r,g:t.g,b:t.b}:!1},write:function(t){return{r:t.r,g:t.g,b:t.b}}},HSVA_OBJ:{read:function(t){return T.isNumber(t.h)&&T.isNumber(t.s)&&T.isNumber(t.v)&&T.isNumber(t.a)?{space:"HSV",h:t.h,s:t.s,v:t.v,a:t.a}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v,a:t.a}}},HSV_OBJ:{read:function(t){return T.isNumber(t.h)&&T.isNumber(t.s)&&T.isNumber(t.v)?{space:"HSV",h:t.h,s:t.s,v:t.v}:!1},write:function(t){return{h:t.h,s:t.s,v:t.v}}}}}],zt=void 0,ge=void 0,je=function(){ge=!1;var t=arguments.length>1?T.toArray(arguments):arguments[0];return T.each(Ts,function(e){if(e.litmus(t))return T.each(e.conversions,function(r,n){if(zt=r.read(t),ge===!1&&zt!==!1)return ge=zt,zt.conversionName=n,zt.conversion=r,T.BREAK}),T.BREAK}),ge},en=void 0,xe={hsv_to_rgb:function(t,e,r){var n=Math.floor(t/60)%6,s=t/60-Math.floor(t/60),a=r*(1-e),o=r*(1-s*e),l=r*(1-(1-s)*e),c=[[r,l,a],[o,r,a],[a,r,l],[a,o,r],[l,a,r],[r,a,o]][n];return{r:c[0]*255,g:c[1]*255,b:c[2]*255}},rgb_to_hsv:function(t,e,r){var n=Math.min(t,e,r),s=Math.max(t,e,r),a=s-n,o=void 0,l=void 0;if(s!==0)l=a/s;else return{h:NaN,s:0,v:0};return t===s?o=(e-r)/a:e===s?o=2+(r-t)/a:o=4+(t-e)/a,o/=6,o<0&&(o+=1),{h:o*360,s:l,v:s/255}},rgb_to_hex:function(t,e,r){var n=this.hex_with_component(0,2,t);return n=this.hex_with_component(n,1,e),n=this.hex_with_component(n,0,r),n},component_from_hex:function(t,e){return t>>e*8&255},hex_with_component:function(t,e,r){return r<<(en=e*8)|t&~(255<<en)}},Ss=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(i){return typeof i}:function(i){return i&&typeof Symbol=="function"&&i.constructor===Symbol&&i!==Symbol.prototype?"symbol":typeof i},et=function(i,t){if(!(i instanceof t))throw new TypeError("Cannot call a class as a function")},it=function(){function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}}(),dt=function i(t,e,r){t===null&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,e);if(n===void 0){var s=Object.getPrototypeOf(t);return s===null?void 0:i(s,e,r)}else{if("value"in n)return n.value;var a=n.get;return a===void 0?void 0:a.call(r)}},mt=function(i,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);i.prototype=Object.create(t&&t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(i,t):i.__proto__=t)},pt=function(i,t){if(!i)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:i},j=function(){function i(){if(et(this,i),this.__state=je.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return it(i,[{key:"toString",value:function(){return Ct(this)}},{key:"toHexString",value:function(){return Ct(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),i}();function ti(i,t,e){Object.defineProperty(i,t,{get:function(){return this.__state.space==="RGB"?this.__state[t]:(j.recalculateRGB(this,t,e),this.__state[t])},set:function(n){this.__state.space!=="RGB"&&(j.recalculateRGB(this,t,e),this.__state.space="RGB"),this.__state[t]=n}})}function ei(i,t){Object.defineProperty(i,t,{get:function(){return this.__state.space==="HSV"?this.__state[t]:(j.recalculateHSV(this),this.__state[t])},set:function(r){this.__state.space!=="HSV"&&(j.recalculateHSV(this),this.__state.space="HSV"),this.__state[t]=r}})}j.recalculateRGB=function(i,t,e){if(i.__state.space==="HEX")i.__state[t]=xe.component_from_hex(i.__state.hex,e);else if(i.__state.space==="HSV")T.extend(i.__state,xe.hsv_to_rgb(i.__state.h,i.__state.s,i.__state.v));else throw new Error("Corrupted color state")};j.recalculateHSV=function(i){var t=xe.rgb_to_hsv(i.r,i.g,i.b);T.extend(i.__state,{s:t.s,v:t.v}),T.isNaN(t.h)?T.isUndefined(i.__state.h)&&(i.__state.h=0):i.__state.h=t.h};j.COMPONENTS=["r","g","b","h","s","v","hex","a"];ti(j.prototype,"r",2);ti(j.prototype,"g",1);ti(j.prototype,"b",0);ei(j.prototype,"h");ei(j.prototype,"s");ei(j.prototype,"v");Object.defineProperty(j.prototype,"a",{get:function(){return this.__state.a},set:function(t){this.__state.a=t}});Object.defineProperty(j.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=xe.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(t){this.__state.space="HEX",this.__state.hex=t}});var _t=function(){function i(t,e){et(this,i),this.initialValue=t[e],this.domElement=document.createElement("div"),this.object=t,this.property=e,this.__onChange=void 0,this.__onFinishChange=void 0}return it(i,[{key:"onChange",value:function(e){return this.__onChange=e,this}},{key:"onFinishChange",value:function(e){return this.__onFinishChange=e,this}},{key:"setValue",value:function(e){return this.object[this.property]=e,this.__onChange&&this.__onChange.call(this,e),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),i}(),As={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},fn={};T.each(As,function(i,t){T.each(i,function(e){fn[e]=t})});var Cs=/(\d+(\.\d+)?)px/;function st(i){if(i==="0"||T.isUndefined(i))return 0;var t=i.match(Cs);return T.isNull(t)?0:parseFloat(t[1])}var M={makeSelectable:function(t,e){t===void 0||t.style===void 0||(t.onselectstart=e?function(){return!1}:function(){},t.style.MozUserSelect=e?"auto":"none",t.style.KhtmlUserSelect=e?"auto":"none",t.unselectable=e?"on":"off")},makeFullscreen:function(t,e,r){var n=r,s=e;T.isUndefined(s)&&(s=!0),T.isUndefined(n)&&(n=!0),t.style.position="absolute",s&&(t.style.left=0,t.style.right=0),n&&(t.style.top=0,t.style.bottom=0)},fakeEvent:function(t,e,r,n){var s=r||{},a=fn[e];if(!a)throw new Error("Event type "+e+" not supported.");var o=document.createEvent(a);switch(a){case"MouseEvents":{var l=s.x||s.clientX||0,c=s.y||s.clientY||0;o.initMouseEvent(e,s.bubbles||!1,s.cancelable||!0,window,s.clickCount||1,0,0,l,c,!1,!1,!1,!1,0,null);break}case"KeyboardEvents":{var u=o.initKeyboardEvent||o.initKeyEvent;T.defaults(s,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),u(e,s.bubbles||!1,s.cancelable,window,s.ctrlKey,s.altKey,s.shiftKey,s.metaKey,s.keyCode,s.charCode);break}default:{o.initEvent(e,s.bubbles||!1,s.cancelable||!0);break}}T.defaults(o,n),t.dispatchEvent(o)},bind:function(t,e,r,n){var s=n||!1;return t.addEventListener?t.addEventListener(e,r,s):t.attachEvent&&t.attachEvent("on"+e,r),M},unbind:function(t,e,r,n){var s=n||!1;return t.removeEventListener?t.removeEventListener(e,r,s):t.detachEvent&&t.detachEvent("on"+e,r),M},addClass:function(t,e){if(t.className===void 0)t.className=e;else if(t.className!==e){var r=t.className.split(/ +/);r.indexOf(e)===-1&&(r.push(e),t.className=r.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return M},removeClass:function(t,e){if(e)if(t.className===e)t.removeAttribute("class");else{var r=t.className.split(/ +/),n=r.indexOf(e);n!==-1&&(r.splice(n,1),t.className=r.join(" "))}else t.className=void 0;return M},hasClass:function(t,e){return new RegExp("(?:^|\\s+)"+e+"(?:\\s+|$)").test(t.className)||!1},getWidth:function(t){var e=getComputedStyle(t);return st(e["border-left-width"])+st(e["border-right-width"])+st(e["padding-left"])+st(e["padding-right"])+st(e.width)},getHeight:function(t){var e=getComputedStyle(t);return st(e["border-top-width"])+st(e["border-bottom-width"])+st(e["padding-top"])+st(e["padding-bottom"])+st(e.height)},getOffset:function(t){var e=t,r={left:0,top:0};if(e.offsetParent)do r.left+=e.offsetLeft,r.top+=e.offsetTop,e=e.offsetParent;while(e);return r},isActive:function(t){return t===document.activeElement&&(t.type||t.href)}},dn=function(i){mt(t,i);function t(e,r){et(this,t);var n=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),s=n;n.__prev=n.getValue(),n.__checkbox=document.createElement("input"),n.__checkbox.setAttribute("type","checkbox");function a(){s.setValue(!s.__prev)}return M.bind(n.__checkbox,"change",a,!1),n.domElement.appendChild(n.__checkbox),n.updateDisplay(),n}return it(t,[{key:"setValue",value:function(r){var n=dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),n}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(_t),Rs=function(i){mt(t,i);function t(e,r,n){et(this,t);var s=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),a=n,o=s;if(s.__select=document.createElement("select"),T.isArray(a)){var l={};T.each(a,function(c){l[c]=c}),a=l}return T.each(a,function(c,u){var h=document.createElement("option");h.innerHTML=u,h.setAttribute("value",c),o.__select.appendChild(h)}),s.updateDisplay(),M.bind(s.__select,"change",function(){var c=this.options[this.selectedIndex].value;o.setValue(c)}),s.domElement.appendChild(s.__select),s}return it(t,[{key:"setValue",value:function(r){var n=dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,r);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),n}},{key:"updateDisplay",value:function(){return M.isActive(this.__select)?this:(this.__select.value=this.getValue(),dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this))}}]),t}(_t),Os=function(i){mt(t,i);function t(e,r){et(this,t);var n=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),s=n;function a(){s.setValue(s.__input.value)}function o(){s.__onFinishChange&&s.__onFinishChange.call(s,s.getValue())}return n.__input=document.createElement("input"),n.__input.setAttribute("type","text"),M.bind(n.__input,"keyup",a),M.bind(n.__input,"change",a),M.bind(n.__input,"blur",o),M.bind(n.__input,"keydown",function(l){l.keyCode===13&&this.blur()}),n.updateDisplay(),n.domElement.appendChild(n.__input),n}return it(t,[{key:"updateDisplay",value:function(){return M.isActive(this.__input)||(this.__input.value=this.getValue()),dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(_t);function rn(i){var t=i.toString();return t.indexOf(".")>-1?t.length-t.indexOf(".")-1:0}var mn=function(i){mt(t,i);function t(e,r,n){et(this,t);var s=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),a=n||{};return s.__min=a.min,s.__max=a.max,s.__step=a.step,T.isUndefined(s.__step)?s.initialValue===0?s.__impliedStep=1:s.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(s.initialValue))/Math.LN10))/10:s.__impliedStep=s.__step,s.__precision=rn(s.__impliedStep),s}return it(t,[{key:"setValue",value:function(r){var n=r;return this.__min!==void 0&&n<this.__min?n=this.__min:this.__max!==void 0&&n>this.__max&&(n=this.__max),this.__step!==void 0&&n%this.__step!==0&&(n=Math.round(n/this.__step)*this.__step),dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"setValue",this).call(this,n)}},{key:"min",value:function(r){return this.__min=r,this}},{key:"max",value:function(r){return this.__max=r,this}},{key:"step",value:function(r){return this.__step=r,this.__impliedStep=r,this.__precision=rn(r),this}}]),t}(_t);function Ls(i,t){var e=Math.pow(10,t);return Math.round(i*e)/e}var _e=function(i){mt(t,i);function t(e,r,n){et(this,t);var s=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,n));s.__truncationSuspended=!1;var a=s,o=void 0;function l(){var d=parseFloat(a.__input.value);T.isNaN(d)||a.setValue(d)}function c(){a.__onFinishChange&&a.__onFinishChange.call(a,a.getValue())}function u(){c()}function h(d){var g=o-d.clientY;a.setValue(a.getValue()+g*a.__impliedStep),o=d.clientY}function f(){M.unbind(window,"mousemove",h),M.unbind(window,"mouseup",f),c()}function m(d){M.bind(window,"mousemove",h),M.bind(window,"mouseup",f),o=d.clientY}return s.__input=document.createElement("input"),s.__input.setAttribute("type","text"),M.bind(s.__input,"change",l),M.bind(s.__input,"blur",u),M.bind(s.__input,"mousedown",m),M.bind(s.__input,"keydown",function(d){d.keyCode===13&&(a.__truncationSuspended=!0,this.blur(),a.__truncationSuspended=!1,c())}),s.updateDisplay(),s.domElement.appendChild(s.__input),s}return it(t,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():Ls(this.getValue(),this.__precision),dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(mn);function nn(i,t,e,r,n){return r+(n-r)*((i-t)/(e-t))}var Ye=function(i){mt(t,i);function t(e,r,n,s,a){et(this,t);var o=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r,{min:n,max:s,step:a})),l=o;o.__background=document.createElement("div"),o.__foreground=document.createElement("div"),M.bind(o.__background,"mousedown",c),M.bind(o.__background,"touchstart",f),M.addClass(o.__background,"slider"),M.addClass(o.__foreground,"slider-fg");function c(g){document.activeElement.blur(),M.bind(window,"mousemove",u),M.bind(window,"mouseup",h),u(g)}function u(g){g.preventDefault();var p=l.__background.getBoundingClientRect();return l.setValue(nn(g.clientX,p.left,p.right,l.__min,l.__max)),!1}function h(){M.unbind(window,"mousemove",u),M.unbind(window,"mouseup",h),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}function f(g){g.touches.length===1&&(M.bind(window,"touchmove",m),M.bind(window,"touchend",d),m(g))}function m(g){var p=g.touches[0].clientX,v=l.__background.getBoundingClientRect();l.setValue(nn(p,v.left,v.right,l.__min,l.__max))}function d(){M.unbind(window,"touchmove",m),M.unbind(window,"touchend",d),l.__onFinishChange&&l.__onFinishChange.call(l,l.getValue())}return o.updateDisplay(),o.__background.appendChild(o.__foreground),o.domElement.appendChild(o.__background),o}return it(t,[{key:"updateDisplay",value:function(){var r=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=r*100+"%",dt(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"updateDisplay",this).call(this)}}]),t}(mn),pn=function(i){mt(t,i);function t(e,r,n){et(this,t);var s=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r)),a=s;return s.__button=document.createElement("div"),s.__button.innerHTML=n===void 0?"Fire":n,M.bind(s.__button,"click",function(o){return o.preventDefault(),a.fire(),!1}),M.addClass(s.__button,"button"),s.domElement.appendChild(s.__button),s}return it(t,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),t}(_t),Ke=function(i){mt(t,i);function t(e,r){et(this,t);var n=pt(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,r));n.__color=new j(n.getValue()),n.__temp=new j(0);var s=n;n.domElement=document.createElement("div"),M.makeSelectable(n.domElement,!1),n.__selector=document.createElement("div"),n.__selector.className="selector",n.__saturation_field=document.createElement("div"),n.__saturation_field.className="saturation-field",n.__field_knob=document.createElement("div"),n.__field_knob.className="field-knob",n.__field_knob_border="2px solid ",n.__hue_knob=document.createElement("div"),n.__hue_knob.className="hue-knob",n.__hue_field=document.createElement("div"),n.__hue_field.className="hue-field",n.__input=document.createElement("input"),n.__input.type="text",n.__input_textShadow="0 1px 1px ",M.bind(n.__input,"keydown",function(g){g.keyCode===13&&h.call(this)}),M.bind(n.__input,"blur",h),M.bind(n.__selector,"mousedown",function(){M.addClass(this,"drag").bind(window,"mouseup",function(){M.removeClass(s.__selector,"drag")})}),M.bind(n.__selector,"touchstart",function(){M.addClass(this,"drag").bind(window,"touchend",function(){M.removeClass(s.__selector,"drag")})});var a=document.createElement("div");T.extend(n.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),T.extend(n.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:n.__field_knob_border+(n.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),T.extend(n.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),T.extend(n.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),T.extend(a.style,{width:"100%",height:"100%",background:"none"}),sn(a,"top","rgba(0,0,0,0)","#000"),T.extend(n.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Ds(n.__hue_field),T.extend(n.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:n.__input_textShadow+"rgba(0,0,0,0.7)"}),M.bind(n.__saturation_field,"mousedown",o),M.bind(n.__saturation_field,"touchstart",o),M.bind(n.__field_knob,"mousedown",o),M.bind(n.__field_knob,"touchstart",o),M.bind(n.__hue_field,"mousedown",l),M.bind(n.__hue_field,"touchstart",l);function o(g){m(g),M.bind(window,"mousemove",m),M.bind(window,"touchmove",m),M.bind(window,"mouseup",c),M.bind(window,"touchend",c)}function l(g){d(g),M.bind(window,"mousemove",d),M.bind(window,"touchmove",d),M.bind(window,"mouseup",u),M.bind(window,"touchend",u)}function c(){M.unbind(window,"mousemove",m),M.unbind(window,"touchmove",m),M.unbind(window,"mouseup",c),M.unbind(window,"touchend",c),f()}function u(){M.unbind(window,"mousemove",d),M.unbind(window,"touchmove",d),M.unbind(window,"mouseup",u),M.unbind(window,"touchend",u),f()}function h(){var g=je(this.value);g!==!1?(s.__color.__state=g,s.setValue(s.__color.toOriginal())):this.value=s.__color.toString()}function f(){s.__onFinishChange&&s.__onFinishChange.call(s,s.__color.toOriginal())}n.__saturation_field.appendChild(a),n.__selector.appendChild(n.__field_knob),n.__selector.appendChild(n.__saturation_field),n.__selector.appendChild(n.__hue_field),n.__hue_field.appendChild(n.__hue_knob),n.domElement.appendChild(n.__input),n.domElement.appendChild(n.__selector),n.updateDisplay();function m(g){g.type.indexOf("touch")===-1&&g.preventDefault();var p=s.__saturation_field.getBoundingClientRect(),v=g.touches&&g.touches[0]||g,E=v.clientX,x=v.clientY,_=(E-p.left)/(p.right-p.left),b=1-(x-p.top)/(p.bottom-p.top);return b>1?b=1:b<0&&(b=0),_>1?_=1:_<0&&(_=0),s.__color.v=b,s.__color.s=_,s.setValue(s.__color.toOriginal()),!1}function d(g){g.type.indexOf("touch")===-1&&g.preventDefault();var p=s.__hue_field.getBoundingClientRect(),v=g.touches&&g.touches[0]||g,E=v.clientY,x=1-(E-p.top)/(p.bottom-p.top);return x>1?x=1:x<0&&(x=0),s.__color.h=x*360,s.setValue(s.__color.toOriginal()),!1}return n}return it(t,[{key:"updateDisplay",value:function(){var r=je(this.getValue());if(r!==!1){var n=!1;T.each(j.COMPONENTS,function(o){if(!T.isUndefined(r[o])&&!T.isUndefined(this.__color.__state[o])&&r[o]!==this.__color.__state[o])return n=!0,{}},this),n&&T.extend(this.__color.__state,r)}T.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var s=this.__color.v<.5||this.__color.s>.5?255:0,a=255-s;T.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+s+","+s+","+s+")"}),this.__hue_knob.style.marginTop=(1-this.__color.h/360)*100+"px",this.__temp.s=1,this.__temp.v=1,sn(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),T.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+s+","+s+","+s+")",textShadow:this.__input_textShadow+"rgba("+a+","+a+","+a+",.7)"})}}]),t}(_t),Fs=["-moz-","-o-","-webkit-","-ms-",""];function sn(i,t,e,r){i.style.background="",T.each(Fs,function(n){i.style.cssText+="background: "+n+"linear-gradient("+t+", "+e+" 0%, "+r+" 100%); "})}function Ds(i){i.style.background="",i.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",i.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",i.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}var Ps={load:function(t,e){var r=e||document,n=r.createElement("link");n.type="text/css",n.rel="stylesheet",n.href=t,r.getElementsByTagName("head")[0].appendChild(n)},inject:function(t,e){var r=e||document,n=document.createElement("style");n.type="text/css",n.innerHTML=t;var s=r.getElementsByTagName("head")[0];try{s.appendChild(n)}catch(a){}}},Ns=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`,Is=function(t,e){var r=t[e];return T.isArray(arguments[2])||T.isObject(arguments[2])?new Rs(t,e,arguments[2]):T.isNumber(r)?T.isNumber(arguments[2])&&T.isNumber(arguments[3])?T.isNumber(arguments[4])?new Ye(t,e,arguments[2],arguments[3],arguments[4]):new Ye(t,e,arguments[2],arguments[3]):T.isNumber(arguments[4])?new _e(t,e,{min:arguments[2],max:arguments[3],step:arguments[4]}):new _e(t,e,{min:arguments[2],max:arguments[3]}):T.isString(r)?new Os(t,e):T.isFunction(r)?new pn(t,e,""):T.isBoolean(r)?new dn(t,e):null};function Bs(i){setTimeout(i,1e3/60)}var zs=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||Bs,Us=function(){function i(){et(this,i),this.backgroundElement=document.createElement("div"),T.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),M.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),T.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var t=this;M.bind(this.backgroundElement,"click",function(){t.hide()})}return it(i,[{key:"show",value:function(){var e=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),T.defer(function(){e.backgroundElement.style.opacity=1,e.domElement.style.opacity=1,e.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var e=this,r=function n(){e.domElement.style.display="none",e.backgroundElement.style.display="none",M.unbind(e.domElement,"webkitTransitionEnd",n),M.unbind(e.domElement,"transitionend",n),M.unbind(e.domElement,"oTransitionEnd",n)};M.bind(this.domElement,"webkitTransitionEnd",r),M.bind(this.domElement,"transitionend",r),M.bind(this.domElement,"oTransitionEnd",r),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-M.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-M.getHeight(this.domElement)/2+"px"}}]),i}(),Vs=ws(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ps.inject(Vs);var an="dg",on=72,ln=20,Gt="Default",Ut=function(){try{return!!window.localStorage}catch(i){return!1}}(),Vt=void 0,cn=!0,St=void 0,We=!1,gn=[],V=function i(t){var e=this,r=t||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),M.addClass(this.domElement,an),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],r=T.defaults(r,{closeOnTop:!1,autoPlace:!0,width:i.DEFAULT_WIDTH}),r=T.defaults(r,{resizable:r.autoPlace,hideable:r.autoPlace}),T.isUndefined(r.load)?r.load={preset:Gt}:r.preset&&(r.load.preset=r.preset),T.isUndefined(r.parent)&&r.hideable&&gn.push(this),r.resizable=T.isUndefined(r.parent)&&r.resizable,r.autoPlace&&T.isUndefined(r.scrollable)&&(r.scrollable=!0);var n=Ut&&localStorage.getItem(At(this,"isLocal"))==="true",s=void 0,a=void 0;if(Object.defineProperties(this,{parent:{get:function(){return r.parent}},scrollable:{get:function(){return r.scrollable}},autoPlace:{get:function(){return r.autoPlace}},closeOnTop:{get:function(){return r.closeOnTop}},preset:{get:function(){return e.parent?e.getRoot().preset:r.load.preset},set:function(f){e.parent?e.getRoot().preset=f:r.load.preset=f,Xs(this),e.revert()}},width:{get:function(){return r.width},set:function(f){r.width=f,Je(e,f)}},name:{get:function(){return r.name},set:function(f){r.name=f,a&&(a.innerHTML=r.name)}},closed:{get:function(){return r.closed},set:function(f){r.closed=f,r.closed?M.addClass(e.__ul,i.CLASS_CLOSED):M.removeClass(e.__ul,i.CLASS_CLOSED),this.onResize(),e.__closeButton&&(e.__closeButton.innerHTML=f?i.TEXT_OPEN:i.TEXT_CLOSED)}},load:{get:function(){return r.load}},useLocalStorage:{get:function(){return n},set:function(f){Ut&&(n=f,f?M.bind(window,"unload",s):M.unbind(window,"unload",s),localStorage.setItem(At(e,"isLocal"),f))}}}),T.isUndefined(r.parent)){if(this.closed=r.closed||!1,M.addClass(this.domElement,i.CLASS_MAIN),M.makeSelectable(this.domElement,!1),Ut&&n){e.useLocalStorage=!0;var o=localStorage.getItem(At(this,"gui"));o&&(r.load=JSON.parse(o))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=i.TEXT_CLOSED,M.addClass(this.__closeButton,i.CLASS_CLOSE_BUTTON),r.closeOnTop?(M.addClass(this.__closeButton,i.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(M.addClass(this.__closeButton,i.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),M.bind(this.__closeButton,"click",function(){e.closed=!e.closed})}else{r.closed===void 0&&(r.closed=!0);var l=document.createTextNode(r.name);M.addClass(l,"controller-name"),a=ii(e,l);var c=function(f){return f.preventDefault(),e.closed=!e.closed,!1};M.addClass(this.__ul,i.CLASS_CLOSED),M.addClass(a,"title"),M.bind(a,"click",c),r.closed||(this.closed=!1)}r.autoPlace&&(T.isUndefined(r.parent)&&(cn&&(St=document.createElement("div"),M.addClass(St,an),M.addClass(St,i.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(St),cn=!1),St.appendChild(this.domElement),M.addClass(this.domElement,i.CLASS_AUTO_PLACE)),this.parent||Je(e,r.width)),this.__resizeHandler=function(){e.onResizeDebounced()},M.bind(window,"resize",this.__resizeHandler),M.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),M.bind(this.__ul,"transitionend",this.__resizeHandler),M.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),r.resizable&&Hs(this),s=function(){Ut&&localStorage.getItem(At(e,"isLocal"))==="true"&&localStorage.setItem(At(e,"gui"),JSON.stringify(e.getSaveObject()))},this.saveToLocalStorageIfPossible=s;function u(){var h=e.getRoot();h.width+=1,T.defer(function(){h.width-=1})}r.parent||u()};V.toggleHide=function(){We=!We,T.each(gn,function(i){i.domElement.style.display=We?"none":""})};V.CLASS_AUTO_PLACE="a";V.CLASS_AUTO_PLACE_CONTAINER="ac";V.CLASS_MAIN="main";V.CLASS_CONTROLLER_ROW="cr";V.CLASS_TOO_TALL="taller-than-window";V.CLASS_CLOSED="closed";V.CLASS_CLOSE_BUTTON="close-button";V.CLASS_CLOSE_TOP="close-top";V.CLASS_CLOSE_BOTTOM="close-bottom";V.CLASS_DRAG="drag";V.DEFAULT_WIDTH=245;V.TEXT_CLOSED="Close Controls";V.TEXT_OPEN="Open Controls";V._keydownHandler=function(i){document.activeElement.type!=="text"&&(i.which===on||i.keyCode===on)&&V.toggleHide()};M.bind(window,"keydown",V._keydownHandler,!1);T.extend(V.prototype,{add:function(t,e){return kt(this,t,e,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(t,e){return kt(this,t,e,{color:!0})},remove:function(t){this.__ul.removeChild(t.__li),this.__controllers.splice(this.__controllers.indexOf(t),1);var e=this;T.defer(function(){e.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&St.removeChild(this.domElement);var t=this;T.each(this.__folders,function(e){t.removeFolder(e)}),M.unbind(window,"keydown",V._keydownHandler,!1),un(this)},addFolder:function(t){if(this.__folders[t]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+t+'"');var e={name:t,parent:this};e.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[t]&&(e.closed=this.load.folders[t].closed,e.load=this.load.folders[t]);var r=new V(e);this.__folders[t]=r;var n=ii(this,r.domElement);return M.addClass(n,"folder"),r},removeFolder:function(t){this.__ul.removeChild(t.domElement.parentElement),delete this.__folders[t.name],this.load&&this.load.folders&&this.load.folders[t.name]&&delete this.load.folders[t.name],un(t);var e=this;T.each(t.__folders,function(r){t.removeFolder(r)}),T.defer(function(){e.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var t=this.getRoot();if(t.scrollable){var e=M.getOffset(t.__ul).top,r=0;T.each(t.__ul.childNodes,function(n){t.autoPlace&&n===t.__save_row||(r+=M.getHeight(n))}),window.innerHeight-e-ln<r?(M.addClass(t.domElement,V.CLASS_TOO_TALL),t.__ul.style.height=window.innerHeight-e-ln+"px"):(M.removeClass(t.domElement,V.CLASS_TOO_TALL),t.__ul.style.height="auto")}t.__resize_handle&&T.defer(function(){t.__resize_handle.style.height=t.__ul.offsetHeight+"px"}),t.__closeButton&&(t.__closeButton.style.width=t.width+"px")},onResizeDebounced:T.debounce(function(){this.onResize()},50),remember:function(){if(T.isUndefined(Vt)&&(Vt=new Us,Vt.domElement.innerHTML=Ns),this.parent)throw new Error("You can only call remember on a top level GUI.");var t=this;T.each(Array.prototype.slice.call(arguments),function(e){t.__rememberedObjects.length===0&&Gs(t),t.__rememberedObjects.indexOf(e)===-1&&t.__rememberedObjects.push(e)}),this.autoPlace&&Je(this,this.width)},getRoot:function(){for(var t=this;t.parent;)t=t.parent;return t},getSaveObject:function(){var t=this.load;return t.closed=this.closed,this.__rememberedObjects.length>0&&(t.preset=this.preset,t.remembered||(t.remembered={}),t.remembered[this.preset]=ve(this)),t.folders={},T.each(this.__folders,function(e,r){t.folders[r]=e.getSaveObject()}),t},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=ve(this),Qe(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(t){this.load.remembered||(this.load.remembered={},this.load.remembered[Gt]=ve(this,!0)),this.load.remembered[t]=ve(this),this.preset=t,Ze(this,t,!0),this.saveToLocalStorageIfPossible()},revert:function(t){T.each(this.__controllers,function(e){this.getRoot().load.remembered?vn(t||this.getRoot(),e):e.setValue(e.initialValue),e.__onFinishChange&&e.__onFinishChange.call(e,e.getValue())},this),T.each(this.__folders,function(e){e.revert(e)}),t||Qe(this.getRoot(),!1)},listen:function(t){var e=this.__listening.length===0;this.__listening.push(t),e&&xn(this.__listening)},updateDisplay:function(){T.each(this.__controllers,function(t){t.updateDisplay()}),T.each(this.__folders,function(t){t.updateDisplay()})}});function ii(i,t,e){var r=document.createElement("li");return t&&r.appendChild(t),e?i.__ul.insertBefore(r,e):i.__ul.appendChild(r),i.onResize(),r}function un(i){M.unbind(window,"resize",i.__resizeHandler),i.saveToLocalStorageIfPossible&&M.unbind(window,"unload",i.saveToLocalStorageIfPossible)}function Qe(i,t){var e=i.__preset_select[i.__preset_select.selectedIndex];t?e.innerHTML=e.value+"*":e.innerHTML=e.value}function ks(i,t,e){if(e.__li=t,e.__gui=i,T.extend(e,{options:function(a){if(arguments.length>1){var o=e.__li.nextElementSibling;return e.remove(),kt(i,e.object,e.property,{before:o,factoryArgs:[T.toArray(arguments)]})}if(T.isArray(a)||T.isObject(a)){var l=e.__li.nextElementSibling;return e.remove(),kt(i,e.object,e.property,{before:l,factoryArgs:[a]})}},name:function(a){return e.__li.firstElementChild.firstElementChild.innerHTML=a,e},listen:function(){return e.__gui.listen(e),e},remove:function(){return e.__gui.remove(e),e}}),e instanceof Ye){var r=new _e(e.object,e.property,{min:e.__min,max:e.__max,step:e.__step});T.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(s){var a=e[s],o=r[s];e[s]=r[s]=function(){var l=Array.prototype.slice.call(arguments);return o.apply(r,l),a.apply(e,l)}}),M.addClass(t,"has-slider"),e.domElement.insertBefore(r.domElement,e.domElement.firstElementChild)}else if(e instanceof _e){var n=function(a){if(T.isNumber(e.__min)&&T.isNumber(e.__max)){var o=e.__li.firstElementChild.firstElementChild.innerHTML,l=e.__gui.__listening.indexOf(e)>-1;e.remove();var c=kt(i,e.object,e.property,{before:e.__li.nextElementSibling,factoryArgs:[e.__min,e.__max,e.__step]});return c.name(o),l&&c.listen(),c}return a};e.min=T.compose(n,e.min),e.max=T.compose(n,e.max)}else e instanceof dn?(M.bind(t,"click",function(){M.fakeEvent(e.__checkbox,"click")}),M.bind(e.__checkbox,"click",function(s){s.stopPropagation()})):e instanceof pn?(M.bind(t,"click",function(){M.fakeEvent(e.__button,"click")}),M.bind(t,"mouseover",function(){M.addClass(e.__button,"hover")}),M.bind(t,"mouseout",function(){M.removeClass(e.__button,"hover")})):e instanceof Ke&&(M.addClass(t,"color"),e.updateDisplay=T.compose(function(s){return t.style.borderLeftColor=e.__color.toString(),s},e.updateDisplay),e.updateDisplay());e.setValue=T.compose(function(s){return i.getRoot().__preset_select&&e.isModified()&&Qe(i.getRoot(),!0),s},e.setValue)}function vn(i,t){var e=i.getRoot(),r=e.__rememberedObjects.indexOf(t.object);if(r!==-1){var n=e.__rememberedObjectIndecesToControllers[r];if(n===void 0&&(n={},e.__rememberedObjectIndecesToControllers[r]=n),n[t.property]=t,e.load&&e.load.remembered){var s=e.load.remembered,a=void 0;if(s[i.preset])a=s[i.preset];else if(s[Gt])a=s[Gt];else return;if(a[r]&&a[r][t.property]!==void 0){var o=a[r][t.property];t.initialValue=o,t.setValue(o)}}}}function kt(i,t,e,r){if(t[e]===void 0)throw new Error('Object "'+t+'" has no property "'+e+'"');var n=void 0;if(r.color)n=new Ke(t,e);else{var s=[t,e].concat(r.factoryArgs);n=Is.apply(i,s)}r.before instanceof _t&&(r.before=r.before.__li),vn(i,n),M.addClass(n.domElement,"c");var a=document.createElement("span");M.addClass(a,"property-name"),a.innerHTML=n.property;var o=document.createElement("div");o.appendChild(a),o.appendChild(n.domElement);var l=ii(i,o,r.before);return M.addClass(l,V.CLASS_CONTROLLER_ROW),n instanceof Ke?M.addClass(l,"color"):M.addClass(l,Ss(n.getValue())),ks(i,l,n),i.__controllers.push(n),n}function At(i,t){return document.location.href+"."+t}function Ze(i,t,e){var r=document.createElement("option");r.innerHTML=t,r.value=t,i.__preset_select.appendChild(r),e&&(i.__preset_select.selectedIndex=i.__preset_select.length-1)}function hn(i,t){t.style.display=i.useLocalStorage?"block":"none"}function Gs(i){var t=i.__save_row=document.createElement("li");M.addClass(i.domElement,"has-save"),i.__ul.insertBefore(t,i.__ul.firstChild),M.addClass(t,"save-row");var e=document.createElement("span");e.innerHTML="&nbsp;",M.addClass(e,"button gears");var r=document.createElement("span");r.innerHTML="Save",M.addClass(r,"button"),M.addClass(r,"save");var n=document.createElement("span");n.innerHTML="New",M.addClass(n,"button"),M.addClass(n,"save-as");var s=document.createElement("span");s.innerHTML="Revert",M.addClass(s,"button"),M.addClass(s,"revert");var a=i.__preset_select=document.createElement("select");if(i.load&&i.load.remembered?T.each(i.load.remembered,function(h,f){Ze(i,f,f===i.preset)}):Ze(i,Gt,!1),M.bind(a,"change",function(){for(var h=0;h<i.__preset_select.length;h++)i.__preset_select[h].innerHTML=i.__preset_select[h].value;i.preset=this.value}),t.appendChild(a),t.appendChild(e),t.appendChild(r),t.appendChild(n),t.appendChild(s),Ut){var o=document.getElementById("dg-local-explain"),l=document.getElementById("dg-local-storage"),c=document.getElementById("dg-save-locally");c.style.display="block",localStorage.getItem(At(i,"isLocal"))==="true"&&l.setAttribute("checked","checked"),hn(i,o),M.bind(l,"change",function(){i.useLocalStorage=!i.useLocalStorage,hn(i,o)})}var u=document.getElementById("dg-new-constructor");M.bind(u,"keydown",function(h){h.metaKey&&(h.which===67||h.keyCode===67)&&Vt.hide()}),M.bind(e,"click",function(){u.innerHTML=JSON.stringify(i.getSaveObject(),void 0,2),Vt.show(),u.focus(),u.select()}),M.bind(r,"click",function(){i.save()}),M.bind(n,"click",function(){var h=prompt("Enter a new preset name.");h&&i.saveAs(h)}),M.bind(s,"click",function(){i.revert()})}function Hs(i){var t=void 0;i.__resize_handle=document.createElement("div"),T.extend(i.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"});function e(s){return s.preventDefault(),i.width+=t-s.clientX,i.onResize(),t=s.clientX,!1}function r(){M.removeClass(i.__closeButton,V.CLASS_DRAG),M.unbind(window,"mousemove",e),M.unbind(window,"mouseup",r)}function n(s){return s.preventDefault(),t=s.clientX,M.addClass(i.__closeButton,V.CLASS_DRAG),M.bind(window,"mousemove",e),M.bind(window,"mouseup",r),!1}M.bind(i.__resize_handle,"mousedown",n),M.bind(i.__closeButton,"mousedown",n),i.domElement.insertBefore(i.__resize_handle,i.domElement.firstElementChild)}function Je(i,t){i.domElement.style.width=t+"px",i.__save_row&&i.autoPlace&&(i.__save_row.style.width=t+"px"),i.__closeButton&&(i.__closeButton.style.width=t+"px")}function ve(i,t){var e={};return T.each(i.__rememberedObjects,function(r,n){var s={},a=i.__rememberedObjectIndecesToControllers[n];T.each(a,function(o,l){s[l]=t?o.initialValue:o.getValue()}),e[n]=s}),e}function Xs(i){for(var t=0;t<i.__preset_select.length;t++)i.__preset_select[t].value===i.preset&&(i.__preset_select.selectedIndex=t)}function xn(i){i.length!==0&&zs.call(window,function(){xn(i)}),T.each(i,function(t){t.updateDisplay()})}var _n=V;var bt={SKIN:"nars:game:skin",START:"nars:game:start",PAUSE:"nars:game:pause",RESUME:"nars:game:resume",BONUS:"nars:game:bonus",LOAD_PROGRESS:"nars:game:load-progress",LOADED:"nars:game:loaded",SCORE:"nars:game:score",LIFE:"nars:game:life",BONUS_PROGRESS:"nars:game:bonus-progress",BONUS_READY:"nars:game:bonus-ready",BONUS_STARTED:"nars:game:bonus-start",BONUS_ENDED:"nars:game:bonus-end",CRASHED:"nars:game:crashed",GAMEOVER:"nars:game:gameover",CATCH_COIN:"nars:game:catch-coin",CATCH_LIFE:"nars:game:catch-life",BOOST:"nars:game:boost"};y.push({EVENTS:bt});var bn=15,$s=window.ENV_ROOT||"/gl/";y.push({ROOT:$s,BUILD_VERSION:bn});console.log("webgl",{BUILD_VERSION:bn});var qs=new URLSearchParams(window.location.search);y.push({isGUI:qs.has("gui")});customElements.define("game-gl",class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
                <style>
                    :host {
                        position: fixed;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                    }
                </style>
                <canvas>
            `,this.emitter=C,this.canvas=this.shadowRoot.querySelector("canvas"),this.config={fov:80,fogColor:"#ffffff",fogNear:0,fogFar:100,fogOpacity:1,curvatureX:0,curvatureZ:.3},y.data.isGUI&&this.initGUI(),this.uDPR={value:1},this.time={value:0},this.resolution={value:new G},this.aspect={value:1},this.playerPosition={value:new O},this.bonusBoost={value:0},this.fogColor={value:new J(this.config.fogColor)},this.fogNearFarAlpha={value:new O(this.config.fogNear,this.config.fogFar,this.config.fogOpacity)},this.curvatureX={value:this.config.curvatureX},this.curvatureZ={value:this.config.curvatureZ},this.resize=this.resize.bind(this),this.tick=this.tick.bind(this),this.start=this.start.bind(this),this.pause=this.pause.bind(this),this.resume=this.resume.bind(this),this.updateSkin=this.updateSkin.bind(this),y.push({world:this}),this.dpr=1.5,this.uDPR.value=this.dpr,this.renderer=new Rt({canvas:this.canvas,dpr:this.dpr});let i=this.gl=this.renderer.gl;i.clearColor(.9,.9,.9,1),this.gl=i,this.camera=new Ot(i,{near:.1,far:200,fov:this.config.fov}),this.camera.position.z=10,this.camera.position.y=2,this.postComposite=new ht(i),this.scene=new k,this.raycast=new Ft(i),this.triangle=new ct(i),this.plane=new Q(i),this.width=300,this.height=100,this.mouseHold=new G,this.mouseDiff=new G,this.mouseDelta=new G,this.mousePixel=new G,this.isMouseDown=!1,this.mouseInertiaAnim=null,this.interactionTimer=null,this.hasScrolled=!1,this.instructionsTimer=null,this.snapAnim=null,this.POIs=[{scroll:this.config.POI0},{scroll:this.config.POI1},{scroll:this.config.POI2}],this.currentPOI=null;let t=new Dt(`${y.data.ROOT}assets/basis/BasisWorker.js`);ut.setBasisManager(t),y.push({isPaused:!0,skinIndex:0}),z.init(),y.push({envIrradianceSrc:`${y.data.ROOT}assets/images/pbr/both-diffuse-RGBM.png`,envRadianceSrc:`${y.data.ROOT}assets/images/pbr/both-specular-RGBM.png`}),this.initScene(),new me,new pe,I.add(this.tick),this.handlers()}async initScene(){let i=`${y.data.ROOT}assets/geometry/layout-basis.glb?v=${y.data.BUILD_VERSION}`,t=await Jr(i,r=>C.emit(bt.LOAD_PROGRESS,{progress:r})),e=await ut.parse(this.gl,t,"");It.init(this),It.parse(e),this.isLoaded=!0,C.emit(bt.LOADED)}initGUI(){let i=new _n;i.remember(this.config);let t=i.addFolder("Camera"),e=i.addFolder("Fog");e.addColor(this.config,"fogColor").onChange(()=>this.fogColor.value.set(this.config.fogColor)),e.add(this.config,"fogNear").min(0).max(200).step(.1).onChange(()=>this.fogNearFarAlpha.value[0]=this.config.fogNear),e.add(this.config,"fogFar").min(0).max(200).step(.1).onChange(()=>this.fogNearFarAlpha.value[1]=this.config.fogFar),e.add(this.config,"fogOpacity").min(0).max(1).step(.01).onChange(()=>this.fogNearFarAlpha.value[2]=this.config.fogOpacity);let r=i.addFolder("Curvature");r.add(this.config,"curvatureX").min(-1).max(1).step(.01).onChange(()=>this.curvatureX.value=this.config.curvatureX),r.add(this.config,"curvatureZ").min(-1).max(1).step(.01).onChange(()=>this.curvatureZ.value=this.config.curvatureZ)}handlers(){new ResizeObserver(t=>{for(let e of t){let{width:r,height:n}=e.contentRect;this.width=r,this.height=n,this.resize(r,n)}}).observe(this),this.canvas.addEventListener("wheel",this.onWheel,!0),C.on(bt.START,this.start),C.on(bt.PAUSE,this.pause),C.on(bt.RESUME,this.resume),C.on(bt.SKIN,this.updateSkin)}start(){y.push({isPaused:!1}),C.emit("game_reset"),X(3500,()=>{C.emit("game_start")})}pause(){y.push({isPaused:!0})}resume(){y.push({isPaused:!1})}updateSkin({index:i}){y.push({skinIndex:i})}resize(i,t){this.renderer.setSize(i,t),this.resolution.value.set(i*this.dpr,t*this.dpr),this.aspect.value=i/t,this.camera.perspective({aspect:this.aspect.value}),this.postComposite.resize(),y.push({width:i,height:t,aspect:this.aspect.value})}tick(i){y.data.isPaused||(this.controls&&this.controls.update(),this.time.value+=i*.001,this.bonusBoost.value+=((y.data.game.isBoosting||y.data.game.isBonusing?1:0)-this.bonusBoost.value)*.03)}});
