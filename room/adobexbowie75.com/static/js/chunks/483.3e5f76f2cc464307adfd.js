"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[483],{8160:(t,e,_)=>{_.d(e,{C:()=>r});const r={enabled:!1,files:{},add:function(t,e){!1!==this.enabled&&(this.files[t]=e)},get:function(t){if(!1!==this.enabled)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}}},831:(t,e,_)=>{_.d(e,{h:()=>i});var r=_(8160),n=_(3034);const s={};class i extends n.a{constructor(t){super(t)}load(t,e,_,n){void 0===t&&(t=""),void 0!==this.path&&(t=this.path+t),t=this.manager.resolveURL(t);const i=r.C.get(t);if(void 0!==i)return this.manager.itemStart(t),setTimeout((()=>{e&&e(i),this.manager.itemEnd(t)}),0),i;if(void 0!==s[t])return void s[t].push({onLoad:e,onProgress:_,onError:n});s[t]=[],s[t].push({onLoad:e,onProgress:_,onError:n});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,R=this.responseType;fetch(o).then((e=>{if(200===e.status||0===e.status){if(0===e.status&&console.warn("THREE.FileLoader: HTTP Status 0 received."),"undefined"==typeof ReadableStream||void 0===e.body||void 0===e.body.getReader)return e;const _=s[t],r=e.body.getReader(),n=e.headers.get("Content-Length"),i=n?parseInt(n):0,o=0!==i;let a=0;const R=new ReadableStream({start(t){!function e(){r.read().then((({done:r,value:n})=>{if(r)t.close();else{a+=n.byteLength;const r=new ProgressEvent("progress",{lengthComputable:o,loaded:a,total:i});for(let t=0,e=_.length;t<e;t++){const e=_[t];e.onProgress&&e.onProgress(r)}t.enqueue(n),e()}}))}()}});return new Response(R)}throw Error(`fetch for "${e.url}" responded with ${e.status}: ${e.statusText}`)})).then((t=>{switch(R){case"arraybuffer":return t.arrayBuffer();case"blob":return t.blob();case"document":return t.text().then((t=>(new DOMParser).parseFromString(t,a)));case"json":return t.json();default:if(void 0===a)return t.text();{const e=/charset="?([^;"\s]*)"?/i.exec(a),_=e&&e[1]?e[1].toLowerCase():void 0,r=new TextDecoder(_);return t.arrayBuffer().then((t=>r.decode(t)))}}})).then((e=>{r.C.add(t,e);const _=s[t];delete s[t];for(let t=0,r=_.length;t<r;t++){const r=_[t];r.onLoad&&r.onLoad(e)}})).catch((e=>{const _=s[t];if(void 0===_)throw this.manager.itemError(t),e;delete s[t];for(let t=0,r=_.length;t<r;t++){const r=_[t];r.onError&&r.onError(e)}this.manager.itemError(t)})).finally((()=>{this.manager.itemEnd(t)})),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}},3034:(t,e,_)=>{_.d(e,{a:()=>n});var r=_(7723);class n{constructor(t){this.manager=void 0!==t?t:r.t,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const _=this;return new Promise((function(r,n){_.load(t,r,e,n)}))}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}},7723:(t,e,_)=>{_.d(e,{l:()=>r,t:()=>n});class r{constructor(t,e,_){const r=this;let n,s=!1,i=0,o=0;const a=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=_,this.itemStart=function(t){o++,!1===s&&void 0!==r.onStart&&r.onStart(t,i,o),s=!0},this.itemEnd=function(t){i++,void 0!==r.onProgress&&r.onProgress(t,i,o),i===o&&(s=!1,void 0!==r.onLoad&&r.onLoad())},this.itemError=function(t){void 0!==r.onError&&r.onError(t)},this.resolveURL=function(t){return n?n(t):t},this.setURLModifier=function(t){return n=t,this},this.addHandler=function(t,e){return a.push(t,e),this},this.removeHandler=function(t){const e=a.indexOf(t);return-1!==e&&a.splice(e,2),this},this.getHandler=function(t){for(let e=0,_=a.length;e<_;e+=2){const _=a[e],r=a[e+1];if(_.global&&(_.lastIndex=0),_.test(t))return r}return null}}}const n=new r},1893:(t,e,_)=>{_.d(e,{E:()=>n});var r=_(9752);class n extends r.x{constructor(t,e,_,r,n,s,i,o,a,R,T,A){super(null,s,i,o,a,R,r,n,T,A),this.isCompressedTexture=!0,this.image={width:e,height:_},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}},2074:(t,e,_)=>{_.d(e,{I:()=>s});var r=_(9752),n=_(2826);class s extends r.x{constructor(t=null,e=1,_=1,r,s,i,o,a,R=n.TyD,T=n.TyD,A,O){super(null,i,o,a,R,T,r,s,A,O),this.isDataTexture=!0,this.image={data:t,width:e,height:_},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}},1483:(t,e,_)=>{_.r(e),_.d(e,{KTX2Loader:()=>hn});var r={};_.r(r),_.d(r,{KHR_DF_CHANNEL_RGBSDA_ALPHA:()=>at,KHR_DF_CHANNEL_RGBSDA_BLUE:()=>st,KHR_DF_CHANNEL_RGBSDA_DEPTH:()=>ot,KHR_DF_CHANNEL_RGBSDA_GREEN:()=>nt,KHR_DF_CHANNEL_RGBSDA_RED:()=>rt,KHR_DF_CHANNEL_RGBSDA_STENCIL:()=>it,KHR_DF_FLAG_ALPHA_PREMULTIPLIED:()=>u,KHR_DF_FLAG_ALPHA_STRAIGHT:()=>U,KHR_DF_KHR_DESCRIPTORTYPE_BASICFORMAT:()=>h,KHR_DF_MODEL_ASTC:()=>C,KHR_DF_MODEL_ETC1:()=>d,KHR_DF_MODEL_ETC1S:()=>f,KHR_DF_MODEL_ETC2:()=>S,KHR_DF_MODEL_RGBSDA:()=>M,KHR_DF_MODEL_UNSPECIFIED:()=>B,KHR_DF_PRIMARIES_ACES:()=>Q,KHR_DF_PRIMARIES_ACESCC:()=>Z,KHR_DF_PRIMARIES_ADOBERGB:()=>_t,KHR_DF_PRIMARIES_BT2020:()=>q,KHR_DF_PRIMARIES_BT601_EBU:()=>Y,KHR_DF_PRIMARIES_BT601_SMPTE:()=>j,KHR_DF_PRIMARIES_BT709:()=>z,KHR_DF_PRIMARIES_CIEXYZ:()=>J,KHR_DF_PRIMARIES_DISPLAYP3:()=>et,KHR_DF_PRIMARIES_NTSC1953:()=>$,KHR_DF_PRIMARIES_PAL525:()=>tt,KHR_DF_PRIMARIES_UNSPECIFIED:()=>W,KHR_DF_SAMPLE_DATATYPE_EXPONENT:()=>At,KHR_DF_SAMPLE_DATATYPE_FLOAT:()=>Rt,KHR_DF_SAMPLE_DATATYPE_LINEAR:()=>Ot,KHR_DF_SAMPLE_DATATYPE_SIGNED:()=>Tt,KHR_DF_TRANSFER_ACESCC:()=>k,KHR_DF_TRANSFER_ACESCCT:()=>v,KHR_DF_TRANSFER_ADOBERGB:()=>X,KHR_DF_TRANSFER_BT1886:()=>N,KHR_DF_TRANSFER_DCIP3:()=>y,KHR_DF_TRANSFER_HLG_EOTF:()=>P,KHR_DF_TRANSFER_HLG_OETF:()=>w,KHR_DF_TRANSFER_ITU:()=>V,KHR_DF_TRANSFER_LINEAR:()=>E,KHR_DF_TRANSFER_NTSC:()=>g,KHR_DF_TRANSFER_PAL625_EOTF:()=>b,KHR_DF_TRANSFER_PAL_OETF:()=>I,KHR_DF_TRANSFER_PQ_EOTF:()=>x,KHR_DF_TRANSFER_PQ_OETF:()=>D,KHR_DF_TRANSFER_SLOG:()=>m,KHR_DF_TRANSFER_SLOG2:()=>G,KHR_DF_TRANSFER_SRGB:()=>L,KHR_DF_TRANSFER_ST240:()=>H,KHR_DF_TRANSFER_UNSPECIFIED:()=>p,KHR_DF_VENDORID_KHRONOS:()=>K,KHR_DF_VERSION:()=>c,KHR_SUPERCOMPRESSION_BASISLZ:()=>O,KHR_SUPERCOMPRESSION_NONE:()=>A,KHR_SUPERCOMPRESSION_ZLIB:()=>l,KHR_SUPERCOMPRESSION_ZSTD:()=>F,KTX2Container:()=>Ir,VK_FORMAT_A1R5G5B5_UNORM_PACK16:()=>St,VK_FORMAT_A2B10G10R10_SINT_PACK32:()=>se,VK_FORMAT_A2B10G10R10_SNORM_PACK32:()=>re,VK_FORMAT_A2B10G10R10_UINT_PACK32:()=>ne,VK_FORMAT_A2B10G10R10_UNORM_PACK32:()=>_e,VK_FORMAT_A2R10G10B10_SINT_PACK32:()=>ee,VK_FORMAT_A2R10G10B10_SNORM_PACK32:()=>$t,VK_FORMAT_A2R10G10B10_UINT_PACK32:()=>te,VK_FORMAT_A2R10G10B10_UNORM_PACK32:()=>Zt,VK_FORMAT_A4B4G4R4_UNORM_PACK16_EXT:()=>yr,VK_FORMAT_A4R4G4B4_UNORM_PACK16_EXT:()=>Dr,VK_FORMAT_ASTC_10x10_SFLOAT_BLOCK_EXT:()=>wr,VK_FORMAT_ASTC_10x10_SRGB_BLOCK:()=>tr,VK_FORMAT_ASTC_10x10_UNORM_BLOCK:()=>$_,VK_FORMAT_ASTC_10x5_SFLOAT_BLOCK_EXT:()=>mr,VK_FORMAT_ASTC_10x5_SRGB_BLOCK:()=>j_,VK_FORMAT_ASTC_10x5_UNORM_BLOCK:()=>Y_,VK_FORMAT_ASTC_10x6_SFLOAT_BLOCK_EXT:()=>Gr,VK_FORMAT_ASTC_10x6_SRGB_BLOCK:()=>J_,VK_FORMAT_ASTC_10x6_UNORM_BLOCK:()=>q_,VK_FORMAT_ASTC_10x8_SFLOAT_BLOCK_EXT:()=>Nr,VK_FORMAT_ASTC_10x8_SRGB_BLOCK:()=>Z_,VK_FORMAT_ASTC_10x8_UNORM_BLOCK:()=>Q_,VK_FORMAT_ASTC_12x10_SFLOAT_BLOCK_EXT:()=>Pr,VK_FORMAT_ASTC_12x10_SRGB_BLOCK:()=>_r,VK_FORMAT_ASTC_12x10_UNORM_BLOCK:()=>er,VK_FORMAT_ASTC_12x12_SFLOAT_BLOCK_EXT:()=>xr,VK_FORMAT_ASTC_12x12_SRGB_BLOCK:()=>nr,VK_FORMAT_ASTC_12x12_UNORM_BLOCK:()=>rr,VK_FORMAT_ASTC_4x4_SFLOAT_BLOCK_EXT:()=>fr,VK_FORMAT_ASTC_4x4_SRGB_BLOCK:()=>G_,VK_FORMAT_ASTC_4x4_UNORM_BLOCK:()=>m_,VK_FORMAT_ASTC_5x4_SFLOAT_BLOCK_EXT:()=>Ur,VK_FORMAT_ASTC_5x4_SRGB_BLOCK:()=>w_,VK_FORMAT_ASTC_5x4_UNORM_BLOCK:()=>N_,VK_FORMAT_ASTC_5x5_SFLOAT_BLOCK_EXT:()=>ur,VK_FORMAT_ASTC_5x5_SRGB_BLOCK:()=>x_,VK_FORMAT_ASTC_5x5_UNORM_BLOCK:()=>P_,VK_FORMAT_ASTC_6x5_SFLOAT_BLOCK_EXT:()=>pr,VK_FORMAT_ASTC_6x5_SRGB_BLOCK:()=>y_,VK_FORMAT_ASTC_6x5_UNORM_BLOCK:()=>D_,VK_FORMAT_ASTC_6x6_SFLOAT_BLOCK_EXT:()=>Er,VK_FORMAT_ASTC_6x6_SRGB_BLOCK:()=>b_,VK_FORMAT_ASTC_6x6_UNORM_BLOCK:()=>I_,VK_FORMAT_ASTC_8x5_SFLOAT_BLOCK_EXT:()=>Lr,VK_FORMAT_ASTC_8x5_SRGB_BLOCK:()=>k_,VK_FORMAT_ASTC_8x5_UNORM_BLOCK:()=>H_,VK_FORMAT_ASTC_8x6_SFLOAT_BLOCK_EXT:()=>Vr,VK_FORMAT_ASTC_8x6_SRGB_BLOCK:()=>X_,VK_FORMAT_ASTC_8x6_UNORM_BLOCK:()=>v_,VK_FORMAT_ASTC_8x8_SFLOAT_BLOCK_EXT:()=>gr,VK_FORMAT_ASTC_8x8_SRGB_BLOCK:()=>z_,VK_FORMAT_ASTC_8x8_UNORM_BLOCK:()=>W_,VK_FORMAT_B10G11R11_UFLOAT_PACK32:()=>Je,VK_FORMAT_B10X6G10X6R10X6G10X6_422_UNORM_4PACK16:()=>Rr,VK_FORMAT_B12X4G12X4R12X4G12X4_422_UNORM_4PACK16:()=>lr,VK_FORMAT_B4G4R4A4_UNORM_PACK16:()=>Kt,VK_FORMAT_B5G5R5A1_UNORM_PACK16:()=>dt,VK_FORMAT_B5G6R5_UNORM_PACK16:()=>Bt,VK_FORMAT_B8G8R8A8_SINT:()=>Jt,VK_FORMAT_B8G8R8A8_SNORM:()=>jt,VK_FORMAT_B8G8R8A8_SRGB:()=>Qt,VK_FORMAT_B8G8R8A8_UINT:()=>qt,VK_FORMAT_B8G8R8A8_UNORM:()=>Yt,VK_FORMAT_B8G8R8_SINT:()=>bt,VK_FORMAT_B8G8R8_SNORM:()=>yt,VK_FORMAT_B8G8R8_SRGB:()=>Ht,VK_FORMAT_B8G8R8_UINT:()=>It,VK_FORMAT_B8G8R8_UNORM:()=>Dt,VK_FORMAT_BC1_RGBA_SRGB_BLOCK:()=>a_,VK_FORMAT_BC1_RGBA_UNORM_BLOCK:()=>o_,VK_FORMAT_BC1_RGB_SRGB_BLOCK:()=>i_,VK_FORMAT_BC1_RGB_UNORM_BLOCK:()=>s_,VK_FORMAT_BC2_SRGB_BLOCK:()=>T_,VK_FORMAT_BC2_UNORM_BLOCK:()=>R_,VK_FORMAT_BC3_SRGB_BLOCK:()=>O_,VK_FORMAT_BC3_UNORM_BLOCK:()=>A_,VK_FORMAT_BC4_SNORM_BLOCK:()=>l_,VK_FORMAT_BC4_UNORM_BLOCK:()=>F_,VK_FORMAT_BC5_SNORM_BLOCK:()=>K_,VK_FORMAT_BC5_UNORM_BLOCK:()=>h_,VK_FORMAT_BC6H_SFLOAT_BLOCK:()=>B_,VK_FORMAT_BC6H_UFLOAT_BLOCK:()=>c_,VK_FORMAT_BC7_SRGB_BLOCK:()=>d_,VK_FORMAT_BC7_UNORM_BLOCK:()=>M_,VK_FORMAT_D16_UNORM:()=>Ze,VK_FORMAT_D16_UNORM_S8_UINT:()=>__,VK_FORMAT_D24_UNORM_S8_UINT:()=>r_,VK_FORMAT_D32_SFLOAT:()=>t_,VK_FORMAT_D32_SFLOAT_S8_UINT:()=>n_,VK_FORMAT_E5B9G9R9_UFLOAT_PACK32:()=>Qe,VK_FORMAT_EAC_R11G11_SNORM_BLOCK:()=>g_,VK_FORMAT_EAC_R11G11_UNORM_BLOCK:()=>V_,VK_FORMAT_EAC_R11_SNORM_BLOCK:()=>L_,VK_FORMAT_EAC_R11_UNORM_BLOCK:()=>E_,VK_FORMAT_ETC2_R8G8B8A1_SRGB_BLOCK:()=>U_,VK_FORMAT_ETC2_R8G8B8A1_UNORM_BLOCK:()=>f_,VK_FORMAT_ETC2_R8G8B8A8_SRGB_BLOCK:()=>p_,VK_FORMAT_ETC2_R8G8B8A8_UNORM_BLOCK:()=>u_,VK_FORMAT_ETC2_R8G8B8_SRGB_BLOCK:()=>C_,VK_FORMAT_ETC2_R8G8B8_UNORM_BLOCK:()=>S_,VK_FORMAT_G10X6B10X6G10X6R10X6_422_UNORM_4PACK16:()=>ar,VK_FORMAT_G12X4B12X4G12X4R12X4_422_UNORM_4PACK16:()=>Fr,VK_FORMAT_PVRTC1_2BPP_SRGB_BLOCK_IMG:()=>Mr,VK_FORMAT_PVRTC1_2BPP_UNORM_BLOCK_IMG:()=>hr,VK_FORMAT_PVRTC1_4BPP_SRGB_BLOCK_IMG:()=>dr,VK_FORMAT_PVRTC1_4BPP_UNORM_BLOCK_IMG:()=>Kr,VK_FORMAT_PVRTC2_2BPP_SRGB_BLOCK_IMG:()=>Sr,VK_FORMAT_PVRTC2_2BPP_UNORM_BLOCK_IMG:()=>cr,VK_FORMAT_PVRTC2_4BPP_SRGB_BLOCK_IMG:()=>Cr,VK_FORMAT_PVRTC2_4BPP_UNORM_BLOCK_IMG:()=>Br,VK_FORMAT_R10X6G10X6B10X6A10X6_UNORM_4PACK16:()=>or,VK_FORMAT_R10X6G10X6_UNORM_2PACK16:()=>ir,VK_FORMAT_R10X6_UNORM_PACK16:()=>sr,VK_FORMAT_R12X4G12X4B12X4A12X4_UNORM_4PACK16:()=>Or,VK_FORMAT_R12X4G12X4_UNORM_2PACK16:()=>Ar,VK_FORMAT_R12X4_UNORM_PACK16:()=>Tr,VK_FORMAT_R16G16B16A16_SFLOAT:()=>ue,VK_FORMAT_R16G16B16A16_SINT:()=>Ue,VK_FORMAT_R16G16B16A16_SNORM:()=>Ce,VK_FORMAT_R16G16B16A16_UINT:()=>fe,VK_FORMAT_R16G16B16A16_UNORM:()=>Se,VK_FORMAT_R16G16B16_SFLOAT:()=>de,VK_FORMAT_R16G16B16_SINT:()=>Me,VK_FORMAT_R16G16B16_SNORM:()=>ce,VK_FORMAT_R16G16B16_UINT:()=>Be,VK_FORMAT_R16G16B16_UNORM:()=>Ke,VK_FORMAT_R16G16_SFLOAT:()=>he,VK_FORMAT_R16G16_SINT:()=>le,VK_FORMAT_R16G16_SNORM:()=>Oe,VK_FORMAT_R16G16_UINT:()=>Fe,VK_FORMAT_R16G16_UNORM:()=>Ae,VK_FORMAT_R16_SFLOAT:()=>Te,VK_FORMAT_R16_SINT:()=>Re,VK_FORMAT_R16_SNORM:()=>oe,VK_FORMAT_R16_UINT:()=>ae,VK_FORMAT_R16_UNORM:()=>ie,VK_FORMAT_R32G32B32A32_SFLOAT:()=>De,VK_FORMAT_R32G32B32A32_SINT:()=>xe,VK_FORMAT_R32G32B32A32_UINT:()=>Pe,VK_FORMAT_R32G32B32_SFLOAT:()=>we,VK_FORMAT_R32G32B32_SINT:()=>Ne,VK_FORMAT_R32G32B32_UINT:()=>Ge,VK_FORMAT_R32G32_SFLOAT:()=>me,VK_FORMAT_R32G32_SINT:()=>ge,VK_FORMAT_R32G32_UINT:()=>Ve,VK_FORMAT_R32_SFLOAT:()=>Le,VK_FORMAT_R32_SINT:()=>Ee,VK_FORMAT_R32_UINT:()=>pe,VK_FORMAT_R4G4B4A4_UNORM_PACK16:()=>ht,VK_FORMAT_R4G4_UNORM_PACK8:()=>lt,VK_FORMAT_R5G5B5A1_UNORM_PACK16:()=>Mt,VK_FORMAT_R5G6B5_UNORM_PACK16:()=>ct,VK_FORMAT_R64G64B64A64_SFLOAT:()=>qe,VK_FORMAT_R64G64B64A64_SINT:()=>je,VK_FORMAT_R64G64B64A64_UINT:()=>Ye,VK_FORMAT_R64G64B64_SFLOAT:()=>ze,VK_FORMAT_R64G64B64_SINT:()=>We,VK_FORMAT_R64G64B64_UINT:()=>Xe,VK_FORMAT_R64G64_SFLOAT:()=>ve,VK_FORMAT_R64G64_SINT:()=>ke,VK_FORMAT_R64G64_UINT:()=>He,VK_FORMAT_R64_SFLOAT:()=>be,VK_FORMAT_R64_SINT:()=>Ie,VK_FORMAT_R64_UINT:()=>ye,VK_FORMAT_R8G8B8A8_SINT:()=>Wt,VK_FORMAT_R8G8B8A8_SNORM:()=>vt,VK_FORMAT_R8G8B8A8_SRGB:()=>zt,VK_FORMAT_R8G8B8A8_UINT:()=>Xt,VK_FORMAT_R8G8B8A8_UNORM:()=>kt,VK_FORMAT_R8G8B8_SINT:()=>Pt,VK_FORMAT_R8G8B8_SNORM:()=>Nt,VK_FORMAT_R8G8B8_SRGB:()=>xt,VK_FORMAT_R8G8B8_UINT:()=>wt,VK_FORMAT_R8G8B8_UNORM:()=>Gt,VK_FORMAT_R8G8_SINT:()=>gt,VK_FORMAT_R8G8_SNORM:()=>Lt,VK_FORMAT_R8G8_SRGB:()=>mt,VK_FORMAT_R8G8_UINT:()=>Vt,VK_FORMAT_R8G8_UNORM:()=>Et,VK_FORMAT_R8_SINT:()=>ut,VK_FORMAT_R8_SNORM:()=>ft,VK_FORMAT_R8_SRGB:()=>pt,VK_FORMAT_R8_UINT:()=>Ut,VK_FORMAT_R8_UNORM:()=>Ct,VK_FORMAT_S8_UINT:()=>e_,VK_FORMAT_UNDEFINED:()=>Ft,VK_FORMAT_X8_D24_UNORM_PACK32:()=>$e,read:()=>zr,write:()=>qr});var n=_(3034),s=_(831),i=_(1893),o=_(2826),a=_(2074),R=_(3648);class T{constructor(t=4){this.pool=t,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(t){if(!this.workers[t]){const e=this.workerCreator();e.addEventListener("message",this._onMessage.bind(this,t)),this.workers[t]=e}}_getIdleWorker(){for(let t=0;t<this.pool;t++)if(!(this.workerStatus&1<<t))return t;return-1}_onMessage(t,e){const _=this.workersResolve[t];if(_&&_(e),this.queue.length){const{resolve:e,msg:_,transfer:r}=this.queue.shift();this.workersResolve[t]=e,this.workers[t].postMessage(_,r)}else this.workerStatus^=1<<t}setWorkerCreator(t){this.workerCreator=t}setWorkerLimit(t){this.pool=t}postMessage(t,e){return new Promise((_=>{const r=this._getIdleWorker();-1!==r?(this._initWorker(r),this.workerStatus|=1<<r,this.workersResolve[r]=_,this.workers[r].postMessage(t,e)):this.queue.push({resolve:_,msg:t,transfer:e})}))}dispose(){this.workers.forEach((t=>t.terminate())),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const A=0,O=1,F=2,l=3,h=0,K=0,c=2,B=0,M=1,d=160,S=161,C=162,f=163,U=0,u=1,p=0,E=1,L=2,V=3,g=4,m=5,G=6,N=7,w=8,P=9,x=10,D=11,y=12,I=13,b=14,H=15,k=16,v=17,X=18,W=0,z=1,Y=2,j=3,q=4,J=5,Q=6,Z=7,$=8,tt=9,et=10,_t=11,rt=0,nt=1,st=2,it=13,ot=14,at=15,Rt=128,Tt=64,At=32,Ot=16,Ft=0,lt=1,ht=2,Kt=3,ct=4,Bt=5,Mt=6,dt=7,St=8,Ct=9,ft=10,Ut=13,ut=14,pt=15,Et=16,Lt=17,Vt=20,gt=21,mt=22,Gt=23,Nt=24,wt=27,Pt=28,xt=29,Dt=30,yt=31,It=34,bt=35,Ht=36,kt=37,vt=38,Xt=41,Wt=42,zt=43,Yt=44,jt=45,qt=48,Jt=49,Qt=50,Zt=58,$t=59,te=62,ee=63,_e=64,re=65,ne=68,se=69,ie=70,oe=71,ae=74,Re=75,Te=76,Ae=77,Oe=78,Fe=81,le=82,he=83,Ke=84,ce=85,Be=88,Me=89,de=90,Se=91,Ce=92,fe=95,Ue=96,ue=97,pe=98,Ee=99,Le=100,Ve=101,ge=102,me=103,Ge=104,Ne=105,we=106,Pe=107,xe=108,De=109,ye=110,Ie=111,be=112,He=113,ke=114,ve=115,Xe=116,We=117,ze=118,Ye=119,je=120,qe=121,Je=122,Qe=123,Ze=124,$e=125,t_=126,e_=127,__=128,r_=129,n_=130,s_=131,i_=132,o_=133,a_=134,R_=135,T_=136,A_=137,O_=138,F_=139,l_=140,h_=141,K_=142,c_=143,B_=144,M_=145,d_=146,S_=147,C_=148,f_=149,U_=150,u_=151,p_=152,E_=153,L_=154,V_=155,g_=156,m_=157,G_=158,N_=159,w_=160,P_=161,x_=162,D_=163,y_=164,I_=165,b_=166,H_=167,k_=168,v_=169,X_=170,W_=171,z_=172,Y_=173,j_=174,q_=175,J_=176,Q_=177,Z_=178,$_=179,tr=180,er=181,_r=182,rr=183,nr=184,sr=1000156007,ir=1000156008,or=1000156009,ar=1000156010,Rr=1000156011,Tr=1000156017,Ar=1000156018,Or=1000156019,Fr=1000156020,lr=1000156021,hr=1000054e3,Kr=1000054001,cr=1000054002,Br=1000054003,Mr=1000054004,dr=1000054005,Sr=1000054006,Cr=1000054007,fr=1000066e3,Ur=1000066001,ur=1000066002,pr=1000066003,Er=1000066004,Lr=1000066005,Vr=1000066006,gr=1000066007,mr=1000066008,Gr=1000066009,Nr=1000066010,wr=1000066011,Pr=1000066012,xr=1000066013,Dr=100034e4,yr=1000340001;class Ir{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class br{constructor(t,e,_,r){this._dataView=new DataView(t.buffer,t.byteOffset+e,_),this._littleEndian=r,this._offset=0}_nextUint8(){const t=this._dataView.getUint8(this._offset);return this._offset+=1,t}_nextUint16(){const t=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,t}_nextUint32(){const t=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,t}_nextUint64(){const t=this._dataView.getUint32(this._offset,this._littleEndian)+2**32*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,t}_nextInt32(){const t=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,t}_skip(t){return this._offset+=t,this}_scan(t,e=0){const _=this._offset;let r=0;for(;this._dataView.getUint8(this._offset)!==e&&r<t;)r++,this._offset++;return r<t&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+_,r)}}const Hr=new Uint8Array([0]),kr=[171,75,84,88,32,50,48,187,13,10,26,10];function vr(t){return"undefined"!=typeof TextEncoder?(new TextEncoder).encode(t):Buffer.from(t)}function Xr(t){return"undefined"!=typeof TextDecoder?(new TextDecoder).decode(t):Buffer.from(t).toString("utf8")}function Wr(t){let e=0;for(const _ of t)e+=_.byteLength;const _=new Uint8Array(e);let r=0;for(const e of t)_.set(new Uint8Array(e),r),r+=e.byteLength;return _}function zr(t){const e=new Uint8Array(t.buffer,t.byteOffset,kr.length);if(e[0]!==kr[0]||e[1]!==kr[1]||e[2]!==kr[2]||e[3]!==kr[3]||e[4]!==kr[4]||e[5]!==kr[5]||e[6]!==kr[6]||e[7]!==kr[7]||e[8]!==kr[8]||e[9]!==kr[9]||e[10]!==kr[10]||e[11]!==kr[11])throw new Error("Missing KTX 2.0 identifier.");const _=new Ir,r=17*Uint32Array.BYTES_PER_ELEMENT,n=new br(t,kr.length,r,!0);_.vkFormat=n._nextUint32(),_.typeSize=n._nextUint32(),_.pixelWidth=n._nextUint32(),_.pixelHeight=n._nextUint32(),_.pixelDepth=n._nextUint32(),_.layerCount=n._nextUint32(),_.faceCount=n._nextUint32();const s=n._nextUint32();_.supercompressionScheme=n._nextUint32();const i=n._nextUint32(),o=n._nextUint32(),a=n._nextUint32(),R=n._nextUint32(),T=n._nextUint64(),A=n._nextUint64(),O=new br(t,kr.length+r,3*s*8,!0);for(let e=0;e<s;e++)_.levels.push({levelData:new Uint8Array(t.buffer,t.byteOffset+O._nextUint64(),O._nextUint64()),uncompressedByteLength:O._nextUint64()});const F=new br(t,i,o,!0),l={vendorId:F._skip(4)._nextUint16(),descriptorType:F._nextUint16(),versionNumber:F._nextUint16(),descriptorBlockSize:F._nextUint16(),colorModel:F._nextUint8(),colorPrimaries:F._nextUint8(),transferFunction:F._nextUint8(),flags:F._nextUint8(),texelBlockDimension:[F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8()],bytesPlane:[F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8()],samples:[]},h=(l.descriptorBlockSize/4-6)/4;for(let t=0;t<h;t++){const e={bitOffset:F._nextUint16(),bitLength:F._nextUint8(),channelType:F._nextUint8(),samplePosition:[F._nextUint8(),F._nextUint8(),F._nextUint8(),F._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&e.channelType?(e.sampleLower=F._nextInt32(),e.sampleUpper=F._nextInt32()):(e.sampleLower=F._nextUint32(),e.sampleUpper=F._nextUint32()),l.samples[t]=e}_.dataFormatDescriptor.length=0,_.dataFormatDescriptor.push(l);const K=new br(t,a,R,!0);for(;K._offset<R;){const t=K._nextUint32(),e=K._scan(t),r=Xr(e),n=K._scan(t-e.byteLength);_.keyValue[r]=r.match(/^ktx/i)?Xr(n):n,K._offset%4&&K._skip(4-K._offset%4)}if(A<=0)return _;const c=new br(t,T,A,!0),B=c._nextUint16(),M=c._nextUint16(),d=c._nextUint32(),S=c._nextUint32(),C=c._nextUint32(),f=c._nextUint32(),U=[];for(let t=0;t<s;t++)U.push({imageFlags:c._nextUint32(),rgbSliceByteOffset:c._nextUint32(),rgbSliceByteLength:c._nextUint32(),alphaSliceByteOffset:c._nextUint32(),alphaSliceByteLength:c._nextUint32()});const u=T+c._offset,p=u+d,E=p+S,L=E+C,V=new Uint8Array(t.buffer,t.byteOffset+u,d),g=new Uint8Array(t.buffer,t.byteOffset+p,S),m=new Uint8Array(t.buffer,t.byteOffset+E,C),G=new Uint8Array(t.buffer,t.byteOffset+L,f);return _.globalData={endpointCount:B,selectorCount:M,imageDescs:U,endpointsData:V,selectorsData:g,tablesData:m,extendedData:G},_}function Yr(){return(Yr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var _=arguments[e];for(var r in _)Object.prototype.hasOwnProperty.call(_,r)&&(t[r]=_[r])}return t}).apply(this,arguments)}const jr={keepWriter:!1};function qr(t,e={}){e=Yr({},jr,e);let _=new ArrayBuffer(0);if(t.globalData){const e=new ArrayBuffer(20+5*t.globalData.imageDescs.length*4),r=new DataView(e);r.setUint16(0,t.globalData.endpointCount,!0),r.setUint16(2,t.globalData.selectorCount,!0),r.setUint32(4,t.globalData.endpointsData.byteLength,!0),r.setUint32(8,t.globalData.selectorsData.byteLength,!0),r.setUint32(12,t.globalData.tablesData.byteLength,!0),r.setUint32(16,t.globalData.extendedData.byteLength,!0);for(let e=0;e<t.globalData.imageDescs.length;e++){const _=t.globalData.imageDescs[e];r.setUint32(20+5*e*4+0,_.imageFlags,!0),r.setUint32(20+5*e*4+4,_.rgbSliceByteOffset,!0),r.setUint32(20+5*e*4+8,_.rgbSliceByteLength,!0),r.setUint32(20+5*e*4+12,_.alphaSliceByteOffset,!0),r.setUint32(20+5*e*4+16,_.alphaSliceByteLength,!0)}_=Wr([e,t.globalData.endpointsData,t.globalData.selectorsData,t.globalData.tablesData,t.globalData.extendedData])}const r=[];let n=t.keyValue;e.keepWriter||(n=Yr({},t.keyValue,{KTXwriter:"KTX-Parse v0.3.1"}));for(const t in n){const e=n[t],_=vr(t),s="string"==typeof e?vr(e):e,i=_.byteLength+1+s.byteLength+1,o=i%4?4-i%4:0;r.push(Wr([new Uint32Array([i]),_,Hr,s,Hr,new Uint8Array(o).fill(0)]))}const s=Wr(r);if(1!==t.dataFormatDescriptor.length||0!==t.dataFormatDescriptor[0].descriptorType)throw new Error("Only BASICFORMAT Data Format Descriptor output supported.");const i=t.dataFormatDescriptor[0],o=new ArrayBuffer(28+16*i.samples.length),a=new DataView(o),R=24+16*i.samples.length;if(a.setUint32(0,o.byteLength,!0),a.setUint16(4,i.vendorId,!0),a.setUint16(6,i.descriptorType,!0),a.setUint16(8,i.versionNumber,!0),a.setUint16(10,R,!0),a.setUint8(12,i.colorModel),a.setUint8(13,i.colorPrimaries),a.setUint8(14,i.transferFunction),a.setUint8(15,i.flags),!Array.isArray(i.texelBlockDimension))throw new Error("texelBlockDimension is now an array. For dimensionality `d`, set `d - 1`.");a.setUint8(16,i.texelBlockDimension[0]),a.setUint8(17,i.texelBlockDimension[1]),a.setUint8(18,i.texelBlockDimension[2]),a.setUint8(19,i.texelBlockDimension[3]);for(let t=0;t<8;t++)a.setUint8(20+t,i.bytesPlane[t]);for(let t=0;t<i.samples.length;t++){const e=i.samples[t],_=28+16*t;if(e.channelID)throw new Error("channelID has been renamed to channelType.");a.setUint16(_+0,e.bitOffset,!0),a.setUint8(_+2,e.bitLength),a.setUint8(_+3,e.channelType),a.setUint8(_+4,e.samplePosition[0]),a.setUint8(_+5,e.samplePosition[1]),a.setUint8(_+6,e.samplePosition[2]),a.setUint8(_+7,e.samplePosition[3]),64&e.channelType?(a.setInt32(_+8,e.sampleLower,!0),a.setInt32(_+12,e.sampleUpper,!0)):(a.setUint32(_+8,e.sampleLower,!0),a.setUint32(_+12,e.sampleUpper,!0))}const T=kr.length+68+3*t.levels.length*8,A=T+o.byteLength;let O=_.byteLength>0?A+s.byteLength:0;O%8&&(O+=8-O%8);const F=[],l=new DataView(new ArrayBuffer(3*t.levels.length*8));let h=(O||A+s.byteLength)+_.byteLength;for(let e=0;e<t.levels.length;e++){const _=t.levels[e];F.push(_.levelData),l.setBigUint64(24*e+0,BigInt(h),!0),l.setBigUint64(24*e+8,BigInt(_.levelData.byteLength),!0),l.setBigUint64(24*e+16,BigInt(_.uncompressedByteLength),!0),h+=_.levelData.byteLength}const K=new ArrayBuffer(68),c=new DataView(K);return c.setUint32(0,t.vkFormat,!0),c.setUint32(4,t.typeSize,!0),c.setUint32(8,t.pixelWidth,!0),c.setUint32(12,t.pixelHeight,!0),c.setUint32(16,t.pixelDepth,!0),c.setUint32(20,t.layerCount,!0),c.setUint32(24,t.faceCount,!0),c.setUint32(28,t.levels.length,!0),c.setUint32(32,t.supercompressionScheme,!0),c.setUint32(36,T,!0),c.setUint32(40,o.byteLength,!0),c.setUint32(44,A,!0),c.setUint32(48,s.byteLength,!0),c.setBigUint64(52,BigInt(_.byteLength>0?O:0),!0),c.setBigUint64(60,BigInt(_.byteLength),!0),new Uint8Array(Wr([new Uint8Array(kr).buffer,K,l.buffer,o,s,O>0?new ArrayBuffer(O-(A+s.byteLength)):new ArrayBuffer(0),_,...F]))}const{read:Jr,KHR_DF_FLAG_ALPHA_PREMULTIPLIED:Qr,KHR_DF_TRANSFER_SRGB:Zr,VK_FORMAT_UNDEFINED:$r,VK_FORMAT_R16_SFLOAT:tn,VK_FORMAT_R16G16_SFLOAT:en,VK_FORMAT_R16G16B16A16_SFLOAT:_n,VK_FORMAT_R32_SFLOAT:rn,VK_FORMAT_R32G32_SFLOAT:nn,VK_FORMAT_R32G32B32A32_SFLOAT:sn,VK_FORMAT_R8_SRGB:on,VK_FORMAT_R8_UNORM:an,VK_FORMAT_R8G8_SRGB:Rn,VK_FORMAT_R8G8_UNORM:Tn,VK_FORMAT_R8G8B8A8_SRGB:An,VK_FORMAT_R8G8B8A8_UNORM:On}=r,Fn=new WeakMap;let ln=0;class hn extends n.a{constructor(t){super(t),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new T,this.workerSourceURL="",this.workerConfig=null,"undefined"!=typeof MSC_TRANSCODER&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(t){return this.transcoderPath=t,this}setWorkerLimit(t){return this.workerPool.setWorkerLimit(t),this}detectSupport(t){return this.workerConfig={astcSupported:t.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:t.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:t.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:t.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:t.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:t.extensions.has("WEBGL_compressed_texture_pvrtc")||t.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},t.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const t=new s.h(this.manager);t.setPath(this.transcoderPath),t.setWithCredentials(this.withCredentials);const e=t.loadAsync("basis_transcoder.js"),_=new s.h(this.manager);_.setPath(this.transcoderPath),_.setResponseType("arraybuffer"),_.setWithCredentials(this.withCredentials);const r=_.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([e,r]).then((([t,e])=>{const _=hn.BasisWorker.toString(),r=["/* constants */","let _EngineFormat = "+JSON.stringify(hn.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(hn.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(hn.BasisFormat),"/* basis_transcoder.js */",t,"/* worker */",_.substring(_.indexOf("{")+1,_.lastIndexOf("}"))].join("\n");this.workerSourceURL=URL.createObjectURL(new Blob([r])),this.transcoderBinary=e,this.workerPool.setWorkerCreator((()=>{const t=new Worker(this.workerSourceURL),e=this.transcoderBinary.slice(0);return t.postMessage({type:"init",config:this.workerConfig,transcoderBinary:e},[e]),t}))})),ln>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),ln++}return this.transcoderPending}load(t,e,_,r){if(null===this.workerConfig)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const n=new s.h(this.manager);n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials),n.load(t,(t=>{if(Fn.has(t)){return Fn.get(t).promise.then(e).catch(r)}this._createTexture(t).then((t=>e?e(t):null)).catch(r)}),_,r)}_createTextureFrom(t){const{mipmaps:e,width:_,height:r,format:n,type:s,error:a,dfdTransferFn:R,dfdFlags:T}=t;if("error"===s)return Promise.reject(a);const A=new i.E(e,_,r,n,o.ywz);return A.minFilter=1===e.length?o.wem:o.D1R,A.magFilter=o.wem,A.generateMipmaps=!1,A.needsUpdate=!0,A.encoding=R===Zr?o.knz:o.rnI,A.premultiplyAlpha=!!(T&Qr),A}_createTexture(t,e={}){const _=Jr(new Uint8Array(t));if(_.vkFormat!==$r)return function(t){const{vkFormat:e,pixelWidth:_,pixelHeight:r,pixelDepth:n}=t;if(void 0===Kn[e])throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let s;const i=t.levels[0].levelData;s=cn[e]===o.VzW?new Float32Array(i.buffer,i.byteOffset,i.byteLength/Float32Array.BYTES_PER_ELEMENT):cn[e]===o.cLu?new Uint16Array(i.buffer,i.byteOffset,i.byteLength/Uint16Array.BYTES_PER_ELEMENT):i;const T=0===n?new a.I(s,_,r):new R.J(s,_,r,n);return T.type=cn[e],T.format=Kn[e],T.encoding=Bn[e]||o.rnI,T.needsUpdate=!0,Promise.resolve(T)}(_);const r=e,n=this.init().then((()=>this.workerPool.postMessage({type:"transcode",buffer:t,taskConfig:r},[t]))).then((t=>this._createTextureFrom(t.data)));return Fn.set(t,{promise:n}),n}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),ln--,this}}hn.BasisFormat={ETC1S:0,UASTC_4x4:1},hn.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16},hn.EngineFormat={RGBAFormat:o.wk1,RGBA_ASTC_4x4_Format:o.ptH,RGBA_BPTC_Format:o.bsb,RGBA_ETC2_EAC_Format:o.ekQ,RGBA_PVRTC_4BPPV1_Format:o.eaV,RGBA_S3TC_DXT5_Format:o.ILR,RGB_ETC1_Format:o.fto,RGB_ETC2_Format:o.l0P,RGB_PVRTC_4BPPV1_Format:o._AM,RGB_S3TC_DXT1_Format:o.wuA},hn.BasisWorker=function(){let t,e,_;const r=_EngineFormat,n=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",(function(i){const T=i.data;switch(T.type){case"init":t=T.config,A=T.transcoderBinary,e=new Promise((t=>{_={wasmBinary:A,onRuntimeInitialized:t},BASIS(_)})).then((()=>{_.initializeBasis(),void 0===_.KTX2File&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")}));break;case"transcode":e.then((()=>{try{const{width:e,height:i,hasAlpha:A,mipmaps:O,format:F,dfdTransferFn:l,dfdFlags:h}=function(e){const i=new _.KTX2File(new Uint8Array(e));function T(){i.close(),i.delete()}if(!i.isValid())throw T(),new Error("THREE.KTX2Loader:\tInvalid or unsupported .ktx2 file");const A=i.isUASTC()?s.UASTC_4x4:s.ETC1S,O=i.getWidth(),F=i.getHeight(),l=i.getLevels(),h=i.getHasAlpha(),K=i.getDFDTransferFunc(),c=i.getDFDFlags(),{transcoderFormat:B,engineFormat:M}=function(e,_,i,T){let A,O;const F=e===s.ETC1S?o:a;for(let r=0;r<F.length;r++){const n=F[r];if(t[n.if]&&(n.basisFormat.includes(e)&&!(T&&n.transcoderFormat.length<2)&&(!n.needsPowerOfTwo||R(_)&&R(i))))return A=n.transcoderFormat[T?1:0],O=n.engineFormat[T?1:0],{transcoderFormat:A,engineFormat:O}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),A=n.RGBA32,O=r.RGBAFormat,{transcoderFormat:A,engineFormat:O}}(A,O,F,h);if(!O||!F||!l)throw T(),new Error("THREE.KTX2Loader:\tInvalid texture");if(!i.startTranscoding())throw T(),new Error("THREE.KTX2Loader: .startTranscoding failed");const d=[];for(let t=0;t<l;t++){const e=i.getImageLevelInfo(t,0,0),_=e.origWidth,r=e.origHeight,n=new Uint8Array(i.getImageTranscodedSizeInBytes(t,0,0,B));if(!i.transcodeImage(n,t,0,0,B,0,-1,-1))throw T(),new Error("THREE.KTX2Loader: .transcodeImage failed.");d.push({data:n,width:_,height:r})}return T(),{width:O,height:F,hasAlpha:h,mipmaps:d,format:M,dfdTransferFn:K,dfdFlags:c}}(T.buffer),K=[];for(let t=0;t<O.length;++t)K.push(O[t].data.buffer);self.postMessage({type:"transcode",id:T.id,width:e,height:i,hasAlpha:A,mipmaps:O,format:F,dfdTransferFn:l,dfdFlags:h},K)}catch(t){console.error(t),self.postMessage({type:"error",id:T.id,error:t.message})}}))}var A}));const i=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[r.RGBA_ASTC_4x4_Format,r.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[r.RGBA_BPTC_Format,r.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC1,n.BC3],engineFormat:[r.RGB_S3TC_DXT1_Format,r.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[r.RGB_ETC2_Format,r.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1],engineFormat:[r.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[r.RGB_PVRTC_4BPPV1_Format,r.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],o=i.sort((function(t,e){return t.priorityETC1S-e.priorityETC1S})),a=i.sort((function(t,e){return t.priorityUASTC-e.priorityUASTC}));function R(t){return t<=2||0==(t&t-1)&&0!==t}};const Kn={[sn]:o.wk1,[_n]:o.wk1,[On]:o.wk1,[An]:o.wk1,[nn]:o.av9,[en]:o.av9,[Tn]:o.av9,[Rn]:o.av9,[rn]:o.hEm,[tn]:o.hEm,[on]:o.hEm,[an]:o.hEm},cn={[sn]:o.VzW,[_n]:o.cLu,[On]:o.ywz,[An]:o.ywz,[nn]:o.VzW,[en]:o.cLu,[Tn]:o.ywz,[Rn]:o.ywz,[rn]:o.VzW,[tn]:o.cLu,[on]:o.ywz,[an]:o.ywz},Bn={[An]:o.knz,[Rn]:o.knz,[on]:o.knz}}}]);
//# sourceMappingURL=483.3e5f76f2cc464307adfd.js.map