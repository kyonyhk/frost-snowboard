(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tc="163",lp=0,tu=1,cp=2,af=1,up=2,mi=3,Zi=0,_n=1,vi=2,Wi=0,cs=1,nu=2,iu=3,ru=4,hp=5,_r=100,fp=101,dp=102,pp=103,mp=104,_p=200,gp=201,vp=202,xp=203,Gl=204,Wl=205,Mp=206,Sp=207,yp=208,Ep=209,Tp=210,bp=211,Ap=212,wp=213,Rp=214,Cp=0,Pp=1,Lp=2,go=3,Dp=4,Up=5,Ip=6,Np=7,of=0,Op=1,Fp=2,Xi=0,Bp=1,zp=2,kp=3,Hp=4,Vp=5,Gp=6,Wp=7,lf=300,vs=301,xs=302,Xl=303,Yl=304,Oo=306,ql=1e3,vr=1001,$l=1002,kn=1003,Xp=1004,ya=1005,Zn=1006,$o=1007,xr=1008,Yi=1009,Yp=1010,qp=1011,cf=1012,uf=1013,Ms=1014,Bi=1015,vo=1016,hf=1017,ff=1018,ma=1020,$p=35902,Kp=1021,Zp=1022,ii=1023,jp=1024,Jp=1025,us=1026,sa=1027,Qp=1028,df=1029,em=1030,pf=1031,mf=1033,Ko=33776,Zo=33777,jo=33778,Jo=33779,su=35840,au=35841,ou=35842,lu=35843,_f=36196,cu=37492,uu=37496,hu=37808,fu=37809,du=37810,pu=37811,mu=37812,_u=37813,gu=37814,vu=37815,xu=37816,Mu=37817,Su=37818,yu=37819,Eu=37820,Tu=37821,Qo=36492,bu=36494,Au=36495,tm=36283,wu=36284,Ru=36285,Cu=36286,nm=3200,im=3201,rm=0,sm=1,Fi="",jn="srgb",er="srgb-linear",bc="display-p3",Fo="display-p3-linear",xo="linear",_t="srgb",Mo="rec709",So="p3",Fr=7680,Pu=519,am=512,om=513,lm=514,gf=515,cm=516,um=517,hm=518,fm=519,Lu=35044,Du="300 es",Mi=2e3,yo=2001;class Rs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],el=Math.PI/180,Kl=180/Math.PI;function _a(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[r&255]+Kt[r>>8&255]+Kt[r>>16&255]+Kt[r>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function mn(r,e,t){return Math.max(e,Math.min(t,r))}function dm(r,e){return(r%e+e)%e}function tl(r,e,t){return(1-t)*r+t*e}function Ls(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function dn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],_=i[0],p=i[3],m=i[6],T=i[1],x=i[4],b=i[7],P=i[2],w=i[5],E=i[8];return s[0]=a*_+o*T+l*P,s[3]=a*p+o*x+l*w,s[6]=a*m+o*b+l*E,s[1]=c*_+u*T+f*P,s[4]=c*p+u*x+f*w,s[7]=c*m+u*b+f*E,s[2]=h*_+d*T+g*P,s[5]=h*p+d*x+g*w,s[8]=h*m+d*b+g*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=d*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(nl.makeScale(e,t)),this}rotate(e){return this.premultiply(nl.makeRotation(-e)),this}translate(e,t){return this.premultiply(nl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const nl=new We;function vf(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function pm(){const r=Eo("canvas");return r.style.display="block",r}const Uu={};function mm(r){r in Uu||(Uu[r]=!0,console.warn(r))}const Iu=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nu=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ea={[er]:{transfer:xo,primaries:Mo,toReference:r=>r,fromReference:r=>r},[jn]:{transfer:_t,primaries:Mo,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Fo]:{transfer:xo,primaries:So,toReference:r=>r.applyMatrix3(Nu),fromReference:r=>r.applyMatrix3(Iu)},[bc]:{transfer:_t,primaries:So,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Nu),fromReference:r=>r.applyMatrix3(Iu).convertLinearToSRGB()}},_m=new Set([er,Fo]),ut={enabled:!0,_workingColorSpace:er,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!_m.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=Ea[e].toReference,i=Ea[t].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Ea[r].primaries},getTransfer:function(r){return r===Fi?xo:Ea[r].transfer}};function hs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function il(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Br;class gm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Br===void 0&&(Br=Eo("canvas")),Br.width=e.width,Br.height=e.height;const n=Br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Eo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=hs(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hs(t[n]/255)*255):t[n]=hs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let vm=0;class xf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(rl(i[a].image)):s.push(rl(i[a]))}else s=rl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function rl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let xm=0;class fn extends Rs{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,n=vr,i=vr,s=Zn,a=xr,o=ii,l=Yi,c=fn.DEFAULT_ANISOTROPY,u=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=_a(),this.name="",this.source=new xf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ql:e.x=e.x-Math.floor(e.x);break;case vr:e.x=e.x<0?0:1;break;case $l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ql:e.y=e.y-Math.floor(e.y);break;case vr:e.y=e.y<0?0:1;break;case $l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=lf;fn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,n=0,i=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,b=(d+1)/2,P=(m+1)/2,w=(u+h)/4,E=(f+_)/4,L=(g+p)/4;return x>b&&x>P?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=E/n):b>P?b<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(b),n=w/i,s=L/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=E/s,i=L/s),this.set(n,i,s,t),this}let T=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(p-g)/T,this.y=(f-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mm extends Rs{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const s=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pr extends Mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Mf extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sm extends fn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=kn,this.minFilter=kn,this.wrapR=vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ga{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const h=s[a+0],d=s[a+1],g=s[a+2],_=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==h||c!==d||u!==g){let p=1-o;const m=l*h+c*d+u*g+f*_,T=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const P=Math.sqrt(x),w=Math.atan2(P,m*T);p=Math.sin(p*w)/P,o=Math.sin(o*w)/P}const b=o*T;if(l=l*p+h*b,c=c*p+d*b,u=u*p+g*b,f=f*p+_*b,p===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ou.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ou.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new X,Ou=new ga;class va{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(s,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ds),ba.subVectors(this.max,Ds),zr.subVectors(e.a,Ds),kr.subVectors(e.b,Ds),Hr.subVectors(e.c,Ds),Pi.subVectors(kr,zr),Li.subVectors(Hr,kr),ir.subVectors(zr,Hr);let t=[0,-Pi.z,Pi.y,0,-Li.z,Li.y,0,-ir.z,ir.y,Pi.z,0,-Pi.x,Li.z,0,-Li.x,ir.z,0,-ir.x,-Pi.y,Pi.x,0,-Li.y,Li.x,0,-ir.y,ir.x,0];return!al(t,zr,kr,Hr,ba)||(t=[1,0,0,0,1,0,0,0,1],!al(t,zr,kr,Hr,ba))?!1:(Aa.crossVectors(Pi,Li),t=[Aa.x,Aa.y,Aa.z],al(t,zr,kr,Hr,ba))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new X,new X,new X,new X,new X,new X,new X,new X],Xn=new X,Ta=new va,zr=new X,kr=new X,Hr=new X,Pi=new X,Li=new X,ir=new X,Ds=new X,ba=new X,Aa=new X,rr=new X;function al(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){rr.fromArray(r,s);const o=i.x*Math.abs(rr.x)+i.y*Math.abs(rr.y)+i.z*Math.abs(rr.z),l=e.dot(rr),c=t.dot(rr),u=n.dot(rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const ym=new va,Us=new X,ol=new X;class Bo{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ym.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Us.subVectors(e,this.center);const t=Us.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Us.copy(e.center).add(ol)),this.expandByPoint(Us.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new X,ll=new X,wa=new X,Di=new X,cl=new X,Ra=new X,ul=new X;class Ac{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,t),hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ll.copy(e).add(t).multiplyScalar(.5),wa.copy(t).sub(e).normalize(),Di.copy(this.origin).sub(ll);const s=e.distanceTo(t)*.5,a=-this.direction.dot(wa),o=Di.dot(this.direction),l=-Di.dot(wa),c=Di.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const _=1/u;f*=_,h*=_,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(ll).addScaledVector(wa,h),d}intersectSphere(e,t){hi.subVectors(e.center,this.origin);const n=hi.dot(this.direction),i=hi.dot(hi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,t,n,i,s){cl.subVectors(t,e),Ra.subVectors(n,e),ul.crossVectors(cl,Ra);let a=this.direction.dot(ul),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Di.subVectors(this.origin,e);const l=o*this.direction.dot(Ra.crossVectors(Di,Ra));if(l<0)return null;const c=o*this.direction.dot(cl.cross(Di));if(c<0||l+c>a)return null;const u=-o*Di.dot(ul);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,p){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,p)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=h,m[3]=d,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h+_*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,_=c*f;t[0]=h-_*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+_,t[1]=l*f,t[5]=_*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-_*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+_,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,Tm)}lookAt(e,t,n){const i=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),Ui.crossVectors(n,En),Ui.lengthSq()===0&&(Math.abs(n.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),Ui.crossVectors(n,En)),Ui.normalize(),Ca.crossVectors(En,Ui),i[0]=Ui.x,i[4]=Ca.x,i[8]=En.x,i[1]=Ui.y,i[5]=Ca.y,i[9]=En.y,i[2]=Ui.z,i[6]=Ca.z,i[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],_=n[6],p=n[10],m=n[14],T=n[3],x=n[7],b=n[11],P=n[15],w=i[0],E=i[4],L=i[8],S=i[12],v=i[1],I=i[5],N=i[9],D=i[13],H=i[2],V=i[6],q=i[10],Y=i[14],B=i[3],j=i[7],R=i[11],se=i[15];return s[0]=a*w+o*v+l*H+c*B,s[4]=a*E+o*I+l*V+c*j,s[8]=a*L+o*N+l*q+c*R,s[12]=a*S+o*D+l*Y+c*se,s[1]=u*w+f*v+h*H+d*B,s[5]=u*E+f*I+h*V+d*j,s[9]=u*L+f*N+h*q+d*R,s[13]=u*S+f*D+h*Y+d*se,s[2]=g*w+_*v+p*H+m*B,s[6]=g*E+_*I+p*V+m*j,s[10]=g*L+_*N+p*q+m*R,s[14]=g*S+_*D+p*Y+m*se,s[3]=T*w+x*v+b*H+P*B,s[7]=T*E+x*I+b*V+P*j,s[11]=T*L+x*N+b*q+P*R,s[15]=T*S+x*D+b*Y+P*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+s*l*f-i*c*f-s*o*h+n*c*h+i*o*d-n*l*d)+_*(+t*l*d-t*c*h+s*a*h-i*a*d+i*c*u-s*l*u)+p*(+t*c*f-t*o*d-s*a*f+n*a*d+s*o*u-n*c*u)+m*(-i*o*u-t*l*f+t*o*h+i*a*f-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],_=e[13],p=e[14],m=e[15],T=f*p*c-_*h*c+_*l*d-o*p*d-f*l*m+o*h*m,x=g*h*c-u*p*c-g*l*d+a*p*d+u*l*m-a*h*m,b=u*_*c-g*f*c+g*o*d-a*_*d-u*o*m+a*f*m,P=g*f*l-u*_*l-g*o*h+a*_*h+u*o*p-a*f*p,w=t*T+n*x+i*b+s*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=T*E,e[1]=(_*h*s-f*p*s-_*i*d+n*p*d+f*i*m-n*h*m)*E,e[2]=(o*p*s-_*l*s+_*i*c-n*p*c-o*i*m+n*l*m)*E,e[3]=(f*l*s-o*h*s-f*i*c+n*h*c+o*i*d-n*l*d)*E,e[4]=x*E,e[5]=(u*p*s-g*h*s+g*i*d-t*p*d-u*i*m+t*h*m)*E,e[6]=(g*l*s-a*p*s-g*i*c+t*p*c+a*i*m-t*l*m)*E,e[7]=(a*h*s-u*l*s+u*i*c-t*h*c-a*i*d+t*l*d)*E,e[8]=b*E,e[9]=(g*f*s-u*_*s-g*n*d+t*_*d+u*n*m-t*f*m)*E,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*m+t*o*m)*E,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*d-t*o*d)*E,e[12]=P*E,e[13]=(u*_*i-g*f*i+g*n*h-t*_*h-u*n*p+t*f*p)*E,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*p-t*o*p)*E,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*h+t*o*h)*E,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,_=a*u,p=a*f,m=o*f,T=l*c,x=l*u,b=l*f,P=n.x,w=n.y,E=n.z;return i[0]=(1-(_+m))*P,i[1]=(d+b)*P,i[2]=(g-x)*P,i[3]=0,i[4]=(d-b)*w,i[5]=(1-(h+m))*w,i[6]=(p+T)*w,i[7]=0,i[8]=(g+x)*E,i[9]=(p-T)*E,i[10]=(1-(h+_))*E,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Vr.set(i[0],i[1],i[2]).length();const a=Vr.set(i[4],i[5],i[6]).length(),o=Vr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],Yn.copy(this);const c=1/s,u=1/a,f=1/o;return Yn.elements[0]*=c,Yn.elements[1]*=c,Yn.elements[2]*=c,Yn.elements[4]*=u,Yn.elements[5]*=u,Yn.elements[6]*=u,Yn.elements[8]*=f,Yn.elements[9]*=f,Yn.elements[10]*=f,t.setFromRotationMatrix(Yn),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=Mi){const l=this.elements,c=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),h=(n+i)/(n-i);let d,g;if(o===Mi)d=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===yo)d=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Mi){const l=this.elements,c=1/(t-e),u=1/(n-i),f=1/(a-s),h=(t+e)*c,d=(n+i)*u;let g,_;if(o===Mi)g=(a+s)*f,_=-2*f;else if(o===yo)g=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vr=new X,Yn=new Pt,Em=new X(0,0,0),Tm=new X(1,1,1),Ui=new X,Ca=new X,En=new X,Fu=new Pt,Bu=new ga;class Ti{constructor(e=0,t=0,n=0,i=Ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Bu.setFromEuler(this),this.setFromQuaternion(Bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ti.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let bm=0;const zu=new X,Gr=new ga,fi=new Pt,Pa=new X,Is=new X,Am=new X,wm=new ga,ku=new X(1,0,0),Hu=new X(0,1,0),Vu=new X(0,0,1),Gu={type:"added"},Rm={type:"removed"},Wr={type:"childadded",child:null},hl={type:"childremoved",child:null};class gn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new X,t=new Ti,n=new ga,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new We}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.multiply(Gr),this}rotateOnWorldAxis(e,t){return Gr.setFromAxisAngle(e,t),this.quaternion.premultiply(Gr),this}rotateX(e){return this.rotateOnAxis(ku,e)}rotateY(e){return this.rotateOnAxis(Hu,e)}rotateZ(e){return this.rotateOnAxis(Vu,e)}translateOnAxis(e,t){return zu.copy(e).applyQuaternion(this.quaternion),this.position.add(zu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ku,e)}translateY(e){return this.translateOnAxis(Hu,e)}translateZ(e){return this.translateOnAxis(Vu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Pa.copy(e):Pa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(Is,Pa,this.up):fi.lookAt(Pa,Is,this.up),this.quaternion.setFromRotationMatrix(fi),i&&(fi.extractRotation(i.matrixWorld),Gr.setFromRotationMatrix(fi),this.quaternion.premultiply(Gr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gu),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gu),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++){const o=i[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}gn.DEFAULT_UP=new X(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new X,di=new X,fl=new X,pi=new X,Xr=new X,Yr=new X,Wu=new X,dl=new X,pl=new X,ml=new X;class ti{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){qn.subVectors(i,t),di.subVectors(n,t),fl.subVectors(e,t);const a=qn.dot(qn),o=qn.dot(di),l=qn.dot(fl),c=di.dot(di),u=di.dot(fl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),di.subVectors(e,t),qn.cross(di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),qn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ti.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Xr.subVectors(i,n),Yr.subVectors(s,n),dl.subVectors(e,n);const l=Xr.dot(dl),c=Yr.dot(dl);if(l<=0&&c<=0)return t.copy(n);pl.subVectors(e,i);const u=Xr.dot(pl),f=Yr.dot(pl);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Xr,a);ml.subVectors(e,s);const d=Xr.dot(ml),g=Yr.dot(ml);if(g>=0&&d<=g)return t.copy(s);const _=d*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Yr,o);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return Wu.subVectors(s,i),o=(f-u)/(f-u+(d-g)),t.copy(i).addScaledVector(Wu,o);const m=1/(p+_+h);return a=_*m,o=h*m,t.copy(n).addScaledVector(Xr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},La={h:0,s:0,l:0};function _l(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=dm(e,1),t=mn(t,0,1),n=mn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=_l(a,s,e+1/3),this.g=_l(a,s,e),this.b=_l(a,s,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=jn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jn){const n=Sf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hs(e.r),this.g=hs(e.g),this.b=hs(e.b),this}copyLinearToSRGB(e){return this.r=il(e.r),this.g=il(e.g),this.b=il(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return ut.fromWorkingColorSpace(Zt.copy(this),e),Math.round(mn(Zt.r*255,0,255))*65536+Math.round(mn(Zt.g*255,0,255))*256+Math.round(mn(Zt.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Zt.copy(this),t);const n=Zt.r,i=Zt.g,s=Zt.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Zt.copy(this),t),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=jn){ut.fromWorkingColorSpace(Zt.copy(this),e);const t=Zt.r,n=Zt.g,i=Zt.b;return e!==jn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ii),this.setHSL(Ii.h+e,Ii.s+t,Ii.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ii),e.getHSL(La);const n=tl(Ii.h,La.h,t),i=tl(Ii.s,La.s,t),s=tl(Ii.l,La.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new at;at.NAMES=Sf;let Cm=0;class xa extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=cs,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gl,this.blendDst=Wl,this.blendEquation=_r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=go,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fr,this.stencilZFail=Fr,this.stencilZPass=Fr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==cs&&(n.blending=this.blending),this.side!==Zi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Gl&&(n.blendSrc=this.blendSrc),this.blendDst!==Wl&&(n.blendDst=this.blendDst),this.blendEquation!==_r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==go&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yf extends xa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new X,Da=new it;class Ln{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return mm("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Da.fromBufferAttribute(this,t),Da.applyMatrix3(e),this.setXY(t,Da.x,Da.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ls(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=dn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ls(t,this.array)),t}setX(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ls(t,this.array)),t}setY(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ls(t,this.array)),t}setZ(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ls(t,this.array)),t}setW(e,t){return this.normalized&&(t=dn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=dn(t,this.array),n=dn(n,this.array),i=dn(i,this.array),s=dn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class Ef extends Ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Tf extends Ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yr extends Ln{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Pm=0;const Nn=new Pt,gl=new gn,qr=new X,Tn=new va,Ns=new va,kt=new X;class Ri extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vf(e)?Tf:Ef)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,n){return Nn.makeTranslation(e,t,n),this.applyMatrix4(Nn),this}scale(e,t,n){return Nn.makeScale(e,t,n),this.applyMatrix4(Nn),this}lookAt(e){return gl.lookAt(e),gl.updateMatrix(),this.applyMatrix4(gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new yr(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ns.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(Tn.min,Ns.min),Tn.expandByPoint(kt),kt.addVectors(Tn.max,Ns.max),Tn.expandByPoint(kt)):(Tn.expandByPoint(Ns.min),Tn.expandByPoint(Ns.max))}Tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(kt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)kt.fromBufferAttribute(o,c),l&&(qr.fromBufferAttribute(e,c),kt.add(qr)),i=Math.max(i,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ln(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<n.count;L++)o[L]=new X,l[L]=new X;const c=new X,u=new X,f=new X,h=new it,d=new it,g=new it,_=new X,p=new X;function m(L,S,v){c.fromBufferAttribute(n,L),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,v),h.fromBufferAttribute(s,L),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,v),u.sub(c),f.sub(c),d.sub(h),g.sub(h);const I=1/(d.x*g.y-g.x*d.y);isFinite(I)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(I),p.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(I),o[L].add(_),o[S].add(_),o[v].add(_),l[L].add(p),l[S].add(p),l[v].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let L=0,S=T.length;L<S;++L){const v=T[L],I=v.start,N=v.count;for(let D=I,H=I+N;D<H;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const x=new X,b=new X,P=new X,w=new X;function E(L){P.fromBufferAttribute(i,L),w.copy(P);const S=o[L];x.copy(S),x.sub(P.multiplyScalar(P.dot(S))).normalize(),b.crossVectors(w,S);const I=b.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,I)}for(let L=0,S=T.length;L<S;++L){const v=T[L],I=v.start,N=v.count;for(let D=I,H=I+N;D<H;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),_=e.getX(h+1),p=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?d=l[_]*o.data.stride+o.offset:d=l[_]*u;for(let m=0;m<u;m++)h[g++]=c[d++]}return new Ln(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ri,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xu=new Pt,sr=new Ac,Ua=new Bo,Yu=new X,$r=new X,Kr=new X,Zr=new X,vl=new X,Ia=new X,Na=new it,Oa=new it,Fa=new it,qu=new X,$u=new X,Ku=new X,Ba=new X,za=new X;class Si extends gn{constructor(e=new Ri,t=new yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Ia.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(vl.fromBufferAttribute(f,e),a?Ia.addScaledVector(vl,u):Ia.addScaledVector(vl.sub(t),u))}t.add(Ia)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(s),sr.copy(e.ray).recast(e.near),!(Ua.containsPoint(sr.origin)===!1&&(sr.intersectSphere(Ua,Yu)===null||sr.origin.distanceToSquared(Yu)>(e.far-e.near)**2))&&(Xu.copy(s).invert(),sr.copy(e.ray).applyMatrix4(Xu),!(n.boundingBox!==null&&sr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,sr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),x=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let b=T,P=x;b<P;b+=3){const w=o.getX(b),E=o.getX(b+1),L=o.getX(b+2);i=ka(this,m,e,n,c,u,f,w,E,L),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const T=o.getX(p),x=o.getX(p+1),b=o.getX(p+2);i=ka(this,a,e,n,c,u,f,T,x,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const p=h[g],m=a[p.materialIndex],T=Math.max(p.start,d.start),x=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=T,P=x;b<P;b+=3){const w=b,E=b+1,L=b+2;i=ka(this,m,e,n,c,u,f,w,E,L),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let p=g,m=_;p<m;p+=3){const T=p,x=p+1,b=p+2;i=ka(this,a,e,n,c,u,f,T,x,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Lm(r,e,t,n,i,s,a,o){let l;if(e.side===_n?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Zi,o),l===null)return null;za.copy(o),za.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(za);return c<t.near||c>t.far?null:{distance:c,point:za.clone(),object:r}}function ka(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,$r),r.getVertexPosition(l,Kr),r.getVertexPosition(c,Zr);const u=Lm(r,e,t,n,$r,Kr,Zr,Ba);if(u){i&&(Na.fromBufferAttribute(i,o),Oa.fromBufferAttribute(i,l),Fa.fromBufferAttribute(i,c),u.uv=ti.getInterpolation(Ba,$r,Kr,Zr,Na,Oa,Fa,new it)),s&&(Na.fromBufferAttribute(s,o),Oa.fromBufferAttribute(s,l),Fa.fromBufferAttribute(s,c),u.uv1=ti.getInterpolation(Ba,$r,Kr,Zr,Na,Oa,Fa,new it)),a&&(qu.fromBufferAttribute(a,o),$u.fromBufferAttribute(a,l),Ku.fromBufferAttribute(a,c),u.normal=ti.getInterpolation(Ba,$r,Kr,Zr,qu,$u,Ku,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new X,materialIndex:0};ti.getNormal($r,Kr,Zr,f.normal),u.face=f}return u}class Ma extends Ri{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new yr(c,3)),this.setAttribute("normal",new yr(u,3)),this.setAttribute("uv",new yr(f,2));function g(_,p,m,T,x,b,P,w,E,L,S){const v=b/E,I=P/L,N=b/2,D=P/2,H=w/2,V=E+1,q=L+1;let Y=0,B=0;const j=new X;for(let R=0;R<q;R++){const se=R*I-D;for(let Ue=0;Ue<V;Ue++){const Ye=Ue*v-N;j[_]=Ye*T,j[p]=se*x,j[m]=H,c.push(j.x,j.y,j.z),j[_]=0,j[p]=0,j[m]=w>0?1:-1,u.push(j.x,j.y,j.z),f.push(Ue/E),f.push(1-R/L),Y+=1}}for(let R=0;R<L;R++)for(let se=0;se<E;se++){const Ue=h+se+V*R,Ye=h+se+V*(R+1),W=h+(se+1)+V*(R+1),Q=h+(se+1)+V*R;l.push(Ue,Ye,Q),l.push(Ye,W,Q),B+=6}o.addGroup(d,B,S),d+=B,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ma(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ss(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(r){const e={};for(let t=0;t<r.length;t++){const n=Ss(r[t]);for(const i in n)e[i]=n[i]}return e}function Dm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function bf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const Um={clone:Ss,merge:sn};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bi extends xa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ss(e.uniforms),this.uniformsGroups=Dm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Af extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new X,Zu=new it,ju=new it;class Fn extends Af{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Kl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(el*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kl*2*Math.atan(Math.tan(el*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,t){return this.getViewBounds(e,Zu,ju),t.subVectors(ju,Zu)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(el*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const jr=-90,Jr=1;class Om extends gn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Fn(jr,Jr,e,t);i.layers=this.layers,this.add(i);const s=new Fn(jr,Jr,e,t);s.layers=this.layers,this.add(s);const a=new Fn(jr,Jr,e,t);a.layers=this.layers,this.add(a);const o=new Fn(jr,Jr,e,t);o.layers=this.layers,this.add(o);const l=new Fn(jr,Jr,e,t);l.layers=this.layers,this.add(l);const c=new Fn(jr,Jr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===yo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class wf extends fn{constructor(e,t,n,i,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:vs,super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fm extends Pr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new wf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ma(5,5,5),s=new bi({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:_n,blending:Wi});s.uniforms.tEquirect.value=t;const a=new Si(i,s),o=t.minFilter;return t.minFilter===xr&&(t.minFilter=Zn),new Om(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}const xl=new X,Bm=new X,zm=new We;class hr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=xl.subVectors(n,t).cross(Bm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zm.getNormalMatrix(e),i=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ar=new Bo,Ha=new X;class Rf{constructor(e=new hr,t=new hr,n=new hr,i=new hr,s=new hr,a=new hr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mi){const n=this.planes,i=e.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],h=i[7],d=i[8],g=i[9],_=i[10],p=i[11],m=i[12],T=i[13],x=i[14],b=i[15];if(n[0].setComponents(l-s,h-c,p-d,b-m).normalize(),n[1].setComponents(l+s,h+c,p+d,b+m).normalize(),n[2].setComponents(l+a,h+u,p+g,b+T).normalize(),n[3].setComponents(l-a,h-u,p-g,b-T).normalize(),n[4].setComponents(l-o,h-f,p-_,b-x).normalize(),t===Mi)n[5].setComponents(l+o,h+f,p+_,b+x).normalize();else if(t===yo)n[5].setComponents(o,f,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ar.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ar.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ar)}intersectsSprite(e){return ar.center.set(0,0,0),ar.radius=.7071067811865476,ar.applyMatrix4(e.matrixWorld),this.intersectsSphere(ar)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ha.x=i.normal.x>0?e.max.x:e.min.x,Ha.y=i.normal.y>0?e.max.y:e.min.y,Ha.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function km(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,o),f.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let d=0,g=h.length;d<g;d++){const _=h[d];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(r.bufferSubData(c,f.offset*u.BYTES_PER_ELEMENT,u,f.offset,f.count),f.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class zo extends Ri{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const T=m*h-a;for(let x=0;x<c;x++){const b=x*f-s;g.push(b,-T,0),_.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let T=0;T<o;T++){const x=T+c*m,b=T+c*(m+1),P=T+1+c*(m+1),w=T+1+c*m;d.push(x,b,w),d.push(b,P,w)}this.setIndex(d),this.setAttribute("position",new yr(g,3)),this.setAttribute("normal",new yr(_,3)),this.setAttribute("uv",new yr(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$m=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,e_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,t_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,n_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,o_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,l_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,c_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,u_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,h_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,f_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,d_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,__=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,g_="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,x_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,T_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,b_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,w_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,C_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,P_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,U_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,I_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,N_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,k_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,H_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,V_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,G_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,K_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Z_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ig=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ag=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ug=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_g=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Tg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,bg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ag=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ug=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ig=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Og=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$g=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,e0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,t0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,n0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,r0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,a0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,l0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,c0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,h0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,f0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,p0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,v0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,x0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:Hm,alphahash_pars_fragment:Vm,alphamap_fragment:Gm,alphamap_pars_fragment:Wm,alphatest_fragment:Xm,alphatest_pars_fragment:Ym,aomap_fragment:qm,aomap_pars_fragment:$m,batching_pars_vertex:Km,batching_vertex:Zm,begin_vertex:jm,beginnormal_vertex:Jm,bsdfs:Qm,iridescence_fragment:e_,bumpmap_pars_fragment:t_,clipping_planes_fragment:n_,clipping_planes_pars_fragment:i_,clipping_planes_pars_vertex:r_,clipping_planes_vertex:s_,color_fragment:a_,color_pars_fragment:o_,color_pars_vertex:l_,color_vertex:c_,common:u_,cube_uv_reflection_fragment:h_,defaultnormal_vertex:f_,displacementmap_pars_vertex:d_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:__,colorspace_fragment:g_,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:M_,envmap_pars_fragment:S_,envmap_pars_vertex:y_,envmap_physical_pars_fragment:I_,envmap_vertex:E_,fog_vertex:T_,fog_pars_vertex:b_,fog_fragment:A_,fog_pars_fragment:w_,gradientmap_pars_fragment:R_,lightmap_fragment:C_,lightmap_pars_fragment:P_,lights_lambert_fragment:L_,lights_lambert_pars_fragment:D_,lights_pars_begin:U_,lights_toon_fragment:N_,lights_toon_pars_fragment:O_,lights_phong_fragment:F_,lights_phong_pars_fragment:B_,lights_physical_fragment:z_,lights_physical_pars_fragment:k_,lights_fragment_begin:H_,lights_fragment_maps:V_,lights_fragment_end:G_,logdepthbuf_fragment:W_,logdepthbuf_pars_fragment:X_,logdepthbuf_pars_vertex:Y_,logdepthbuf_vertex:q_,map_fragment:$_,map_pars_fragment:K_,map_particle_fragment:Z_,map_particle_pars_fragment:j_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:rg,normal_fragment_begin:sg,normal_fragment_maps:ag,normal_pars_fragment:og,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:ug,clearcoat_normal_fragment_begin:hg,clearcoat_normal_fragment_maps:fg,clearcoat_pars_fragment:dg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:_g,premultiplied_alpha_fragment:gg,project_vertex:vg,dithering_fragment:xg,dithering_pars_fragment:Mg,roughnessmap_fragment:Sg,roughnessmap_pars_fragment:yg,shadowmap_pars_fragment:Eg,shadowmap_pars_vertex:Tg,shadowmap_vertex:bg,shadowmask_pars_fragment:Ag,skinbase_vertex:wg,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Dg,tonemapping_fragment:Ug,tonemapping_pars_fragment:Ig,transmission_fragment:Ng,transmission_pars_fragment:Og,uv_pars_fragment:Fg,uv_pars_vertex:Bg,uv_vertex:zg,worldpos_vertex:kg,background_vert:Hg,background_frag:Vg,backgroundCube_vert:Gg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:Yg,depth_vert:qg,depth_frag:$g,distanceRGBA_vert:Kg,distanceRGBA_frag:Zg,equirect_vert:jg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:e0,meshbasic_vert:t0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:r0,meshmatcap_vert:s0,meshmatcap_frag:a0,meshnormal_vert:o0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:u0,meshphysical_vert:h0,meshphysical_frag:f0,meshtoon_vert:d0,meshtoon_frag:p0,points_vert:m0,points_frag:_0,shadow_vert:g0,shadow_frag:v0,sprite_vert:x0,sprite_frag:M0},ce={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ei={basic:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:sn([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:sn([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:sn([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new at(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:sn([ce.points,ce.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:sn([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:sn([ce.common,ce.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:sn([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:sn([ce.sprite,ce.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:sn([ce.common,ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:sn([ce.lights,ce.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ei.physical={uniforms:sn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Va={r:0,b:0,g:0},or=new Ti,S0=new Pt;function y0(r,e,t,n,i,s,a){const o=new at(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(p,m){let T=!1,x=m.isScene===!0?m.background:null;x&&x.isTexture&&(x=(m.backgroundBlurriness>0?t:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),T=!0);const b=r.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,a):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||T)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Oo)?(u===void 0&&(u=new Si(new Ma(1,1,1),new bi({name:"BackgroundCubeMaterial",uniforms:Ss(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),or.copy(m.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(or)),u.material.toneMapped=ut.getTransfer(x.colorSpace)!==_t,(f!==x||h!==x.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Si(new zo(2,2),new bi({name:"BackgroundMaterial",uniforms:Ss(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=ut.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,d=r.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function _(p,m){p.getRGB(Va,bf(r)),n.buffers.color.setClear(Va.r,Va.g,Va.b,m,a)}return{getClearColor:function(){return o},setClearColor:function(p,m=1){o.set(p),l=m,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,_(o,l)},render:g}}function E0(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(v,I,N,D,H){let V=!1;const q=f(D,N,I);s!==q&&(s=q,c(s.object)),V=d(v,D,N,H),V&&g(v,D,N,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(v,I,N,D),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,I,N){const D=N.wireframe===!0;let H=n[v.id];H===void 0&&(H={},n[v.id]=H);let V=H[I.id];V===void 0&&(V={},H[I.id]=V);let q=V[D];return q===void 0&&(q=h(l()),V[D]=q),q}function h(v){const I=[],N=[],D=[];for(let H=0;H<t;H++)I[H]=0,N[H]=0,D[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:N,attributeDivisors:D,object:v,attributes:{},index:null}}function d(v,I,N,D){const H=s.attributes,V=I.attributes;let q=0;const Y=N.getAttributes();for(const B in Y)if(Y[B].location>=0){const R=H[B];let se=V[B];if(se===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(se=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(se=v.instanceColor)),R===void 0||R.attribute!==se||se&&R.data!==se.data)return!0;q++}return s.attributesNum!==q||s.index!==D}function g(v,I,N,D){const H={},V=I.attributes;let q=0;const Y=N.getAttributes();for(const B in Y)if(Y[B].location>=0){let R=V[B];R===void 0&&(B==="instanceMatrix"&&v.instanceMatrix&&(R=v.instanceMatrix),B==="instanceColor"&&v.instanceColor&&(R=v.instanceColor));const se={};se.attribute=R,R&&R.data&&(se.data=R.data),H[B]=se,q++}s.attributes=H,s.attributesNum=q,s.index=D}function _(){const v=s.newAttributes;for(let I=0,N=v.length;I<N;I++)v[I]=0}function p(v){m(v,0)}function m(v,I){const N=s.newAttributes,D=s.enabledAttributes,H=s.attributeDivisors;N[v]=1,D[v]===0&&(r.enableVertexAttribArray(v),D[v]=1),H[v]!==I&&(r.vertexAttribDivisor(v,I),H[v]=I)}function T(){const v=s.newAttributes,I=s.enabledAttributes;for(let N=0,D=I.length;N<D;N++)I[N]!==v[N]&&(r.disableVertexAttribArray(N),I[N]=0)}function x(v,I,N,D,H,V,q){q===!0?r.vertexAttribIPointer(v,I,N,H,V):r.vertexAttribPointer(v,I,N,D,H,V)}function b(v,I,N,D){_();const H=D.attributes,V=N.getAttributes(),q=I.defaultAttributeValues;for(const Y in V){const B=V[Y];if(B.location>=0){let j=H[Y];if(j===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),j!==void 0){const R=j.normalized,se=j.itemSize,Ue=e.get(j);if(Ue===void 0)continue;const Ye=Ue.buffer,W=Ue.type,Q=Ue.bytesPerElement,le=W===r.INT||W===r.UNSIGNED_INT||j.gpuType===uf;if(j.isInterleavedBufferAttribute){const ne=j.data,Ee=ne.stride,be=j.offset;if(ne.isInstancedInterleavedBuffer){for(let ze=0;ze<B.locationSize;ze++)m(B.location+ze,ne.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ze=0;ze<B.locationSize;ze++)p(B.location+ze);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ze=0;ze<B.locationSize;ze++)x(B.location+ze,se/B.locationSize,W,R,Ee*Q,(be+se/B.locationSize*ze)*Q,le)}else{if(j.isInstancedBufferAttribute){for(let ne=0;ne<B.locationSize;ne++)m(B.location+ne,j.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ne=0;ne<B.locationSize;ne++)p(B.location+ne);r.bindBuffer(r.ARRAY_BUFFER,Ye);for(let ne=0;ne<B.locationSize;ne++)x(B.location+ne,se/B.locationSize,W,R,se*Q,se/B.locationSize*ne*Q,le)}}else if(q!==void 0){const R=q[Y];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(B.location,R);break;case 3:r.vertexAttrib3fv(B.location,R);break;case 4:r.vertexAttrib4fv(B.location,R);break;default:r.vertexAttrib1fv(B.location,R)}}}}T()}function P(){L();for(const v in n){const I=n[v];for(const N in I){const D=I[N];for(const H in D)u(D[H].object),delete D[H];delete I[N]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const I=n[v.id];for(const N in I){const D=I[N];for(const H in D)u(D[H].object),delete D[H];delete I[N]}delete n[v.id]}function E(v){for(const I in n){const N=n[I];if(N[v.id]===void 0)continue;const D=N[v.id];for(const H in D)u(D[H].object),delete D[H];delete N[v.id]}}function L(){S(),a=!0,s!==i&&(s=i,c(s.object))}function S(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function T0(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<u;h++)this.render(l[h],c[h]);else{f.multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function b0(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(x){if(x==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=s(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const l=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),h=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),g=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),p=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),m=u>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:u,maxTextureSize:f,maxCubemapSize:h,maxAttributes:d,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:m,maxSamples:T}}function A0(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new hr,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||g===null||g.length===0||s&&!p)s?u(null):c();else{const T=s?0:n,x=T*4;let b=m.clippingState||null;l.value=b,b=u(g,h,x,d);for(let P=0;P!==x;++P)b[P]=t[P];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=d+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,b=d;x!==_;++x,b+=4)a.copy(f[x]).applyMatrix4(T,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function w0(r){let e=new WeakMap;function t(a,o){return o===Xl?a.mapping=vs:o===Yl&&(a.mapping=xs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xl||o===Yl)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Fm(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class R0 extends Af{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ss=4,Ju=[.125,.215,.35,.446,.526,.582],gr=20,Ml=new R0,Qu=new at;let Sl=null,yl=0,El=0,Tl=!1;const fr=(1+Math.sqrt(5))/2,Qr=1/fr,eh=[new X(1,1,1),new X(-1,1,1),new X(1,1,-1),new X(-1,1,-1),new X(0,fr,Qr),new X(0,fr,-Qr),new X(Qr,0,fr),new X(-Qr,0,fr),new X(fr,Qr,0),new X(-fr,Qr,0)];class th{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Sl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,yl,El),this._renderer.xr.enabled=Tl,e.scissorTest=!1,Ga(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Tl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:vo,format:ii,colorSpace:er,depthBuffer:!1},i=nh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nh(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(s)),this._blurMaterial=P0(s,e,t)}return i}_compileMaterial(e){const t=new Si(this._lodPlanes[0],e);this._renderer.compile(t,Ml)}_sceneToCubeUV(e,t,n,i){const o=new Fn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qu),u.toneMapping=Xi,u.autoClear=!1;const d=new yf({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),g=new Si(new Ma,d);let _=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,_=!0):(d.color.copy(Qu),_=!0);for(let m=0;m<6;m++){const T=m%3;T===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):T===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Ga(i,T*x,m>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===vs||e.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ih());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new Si(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ga(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ml)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=eh[(i-1)%eh.length];this._blur(e,i-1,i,s,a)}t.autoClear=n}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Si(this._lodPlanes[i],c),h=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*gr-1),_=s/g,p=isFinite(s)?1+Math.floor(u*_):gr;p>gr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gr}`);const m=[];let T=0;for(let E=0;E<gr;++E){const L=E/_,S=Math.exp(-L*L/2);m.push(S),E===0?T+=S:E<p&&(T+=2*S)}for(let E=0;E<m.length;E++)m[E]=m[E]/T;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=g,h.mipInt.value=x-n;const b=this._sizeLods[i],P=3*b*(i>x-ss?i-x+ss:0),w=4*(this._cubeSize-b);Ga(t,P,w,3*b,2*b),l.setRenderTarget(t),l.render(f,Ml)}}function C0(r){const e=[],t=[],n=[];let i=r;const s=r-ss+1+Ju.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>r-ss?l=Ju[a-r+ss-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,_=3,p=2,m=1,T=new Float32Array(_*g*d),x=new Float32Array(p*g*d),b=new Float32Array(m*g*d);for(let w=0;w<d;w++){const E=w%3*2/3-1,L=w>2?0:-1,S=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];T.set(S,_*g*w),x.set(h,p*g*w);const v=[w,w,w,w,w,w];b.set(v,m*g*w)}const P=new Ri;P.setAttribute("position",new Ln(T,_)),P.setAttribute("uv",new Ln(x,p)),P.setAttribute("faceIndex",new Ln(b,m)),e.push(P),i>ss&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function nh(r,e,t){const n=new Pr(r,e,t);return n.texture.mapping=Oo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ga(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function P0(r,e,t){const n=new Float32Array(gr),i=new X(0,1,0);return new bi({name:"SphericalGaussianBlur",defines:{n:gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function ih(){return new bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function rh(){return new bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Rc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function L0(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xl||l===Yl,u=l===vs||l===xs;if(c||u){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new th(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const d=o.image;return c&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new th(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function D0(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function U0(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const _=h.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],r.ARRAY_BUFFER);const d=f.morphAttributes;for(const g in d){const _=d[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let _=0;if(d!==null){const T=d.array;_=d.version;for(let x=0,b=T.length;x<b;x+=3){const P=T[x+0],w=T[x+1],E=T[x+2];h.push(P,w,w,E,E,P)}}else if(g!==void 0){const T=g.array;_=g.version;for(let x=0,b=T.length/3-1;x<b;x+=3){const P=x+0,w=x+1,E=x+2;h.push(P,w,w,E,E,P)}}else return;const p=new(vf(h)?Tf:Ef)(h,1);p.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function I0(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<d;_++)this.render(f[_]/a,h[_]);else{g.multiDrawElementsWEBGL(n,h,0,s,f,0,d);let _=0;for(let p=0;p<d;p++)_+=h[p];t.update(_,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function N0(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function O0(r,e,t){const n=new WeakMap,i=new Xt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let v=function(){L.dispose(),n.delete(o),o.removeEventListener("dispose",v)};var d=v;h!==void 0&&h.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let P=o.attributes.position.count*b,w=1;P>e.maxTextureSize&&(w=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const E=new Float32Array(P*w*4*f),L=new Mf(E,P,w,f);L.type=Bi,L.needsUpdate=!0;const S=b*4;for(let I=0;I<f;I++){const N=m[I],D=T[I],H=x[I],V=P*w*4*I;for(let q=0;q<N.count;q++){const Y=q*S;g===!0&&(i.fromBufferAttribute(N,q),E[V+Y+0]=i.x,E[V+Y+1]=i.y,E[V+Y+2]=i.z,E[V+Y+3]=0),_===!0&&(i.fromBufferAttribute(D,q),E[V+Y+4]=i.x,E[V+Y+5]=i.y,E[V+Y+6]=i.z,E[V+Y+7]=0),p===!0&&(i.fromBufferAttribute(H,q),E[V+Y+8]=i.x,E[V+Y+9]=i.y,E[V+Y+10]=i.z,E[V+Y+11]=H.itemSize===4?i.w:1)}}h={count:f,texture:L,size:new it(P,w)},n.set(o,h),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function F0(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Pf extends fn{constructor(e,t,n,i,s,a,o,l,c,u){if(u=u!==void 0?u:us,u!==us&&u!==sa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===us&&(n=Ms),n===void 0&&u===sa&&(n=ma),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:kn,this.minFilter=l!==void 0?l:kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Lf=new fn,Df=new Pf(1,1);Df.compareFunction=gf;const Uf=new Mf,If=new Sm,Nf=new wf,sh=[],ah=[],oh=new Float32Array(16),lh=new Float32Array(9),ch=new Float32Array(4);function Cs(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=sh[i];if(s===void 0&&(s=new Float32Array(i),sh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Bt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function ko(r,e){let t=ah[e];t===void 0&&(t=new Int32Array(e),ah[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function B0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2fv(this.addr,e),zt(t,e)}}function k0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;r.uniform3fv(this.addr,e),zt(t,e)}}function H0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4fv(this.addr,e),zt(t,e)}}function V0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;ch.set(n),r.uniformMatrix2fv(this.addr,!1,ch),zt(t,n)}}function G0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;lh.set(n),r.uniformMatrix3fv(this.addr,!1,lh),zt(t,n)}}function W0(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;oh.set(n),r.uniformMatrix4fv(this.addr,!1,oh),zt(t,n)}}function X0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Y0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2iv(this.addr,e),zt(t,e)}}function q0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3iv(this.addr,e),zt(t,e)}}function $0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4iv(this.addr,e),zt(t,e)}}function K0(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Z0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;r.uniform2uiv(this.addr,e),zt(t,e)}}function j0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;r.uniform3uiv(this.addr,e),zt(t,e)}}function J0(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;r.uniform4uiv(this.addr,e),zt(t,e)}}function Q0(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const s=this.type===r.SAMPLER_2D_SHADOW?Df:Lf;t.setTexture2D(e||s,i)}function ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||If,i)}function tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Nf,i)}function nv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Uf,i)}function iv(r){switch(r){case 5126:return B0;case 35664:return z0;case 35665:return k0;case 35666:return H0;case 35674:return V0;case 35675:return G0;case 35676:return W0;case 5124:case 35670:return X0;case 35667:case 35671:return Y0;case 35668:case 35672:return q0;case 35669:case 35673:return $0;case 5125:return K0;case 36294:return Z0;case 36295:return j0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return Q0;case 35679:case 36299:case 36307:return ev;case 35680:case 36300:case 36308:case 36293:return tv;case 36289:case 36303:case 36311:case 36292:return nv}}function rv(r,e){r.uniform1fv(this.addr,e)}function sv(r,e){const t=Cs(e,this.size,2);r.uniform2fv(this.addr,t)}function av(r,e){const t=Cs(e,this.size,3);r.uniform3fv(this.addr,t)}function ov(r,e){const t=Cs(e,this.size,4);r.uniform4fv(this.addr,t)}function lv(r,e){const t=Cs(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function cv(r,e){const t=Cs(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function uv(r,e){const t=Cs(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function hv(r,e){r.uniform1iv(this.addr,e)}function fv(r,e){r.uniform2iv(this.addr,e)}function dv(r,e){r.uniform3iv(this.addr,e)}function pv(r,e){r.uniform4iv(this.addr,e)}function mv(r,e){r.uniform1uiv(this.addr,e)}function _v(r,e){r.uniform2uiv(this.addr,e)}function gv(r,e){r.uniform3uiv(this.addr,e)}function vv(r,e){r.uniform4uiv(this.addr,e)}function xv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Lf,s[a])}function Mv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||If,s[a])}function Sv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Nf,s[a])}function yv(r,e,t){const n=this.cache,i=e.length,s=ko(t,i);Bt(n,s)||(r.uniform1iv(this.addr,s),zt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Uf,s[a])}function Ev(r){switch(r){case 5126:return rv;case 35664:return sv;case 35665:return av;case 35666:return ov;case 35674:return lv;case 35675:return cv;case 35676:return uv;case 5124:case 35670:return hv;case 35667:case 35671:return fv;case 35668:case 35672:return dv;case 35669:case 35673:return pv;case 5125:return mv;case 36294:return _v;case 36295:return gv;case 36296:return vv;case 35678:case 36198:case 36298:case 36306:case 35682:return xv;case 35679:case 36299:case 36307:return Mv;case 35680:case 36300:case 36308:case 36293:return Sv;case 36289:case 36303:case 36311:case 36292:return yv}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iv(t.type)}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ev(t.type)}}class Av{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function uh(r,e){r.seq.push(e),r.map[e.id]=e}function wv(r,e,t){const n=r.name,i=n.length;for(bl.lastIndex=0;;){const s=bl.exec(n),a=bl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){uh(t,c===void 0?new Tv(o,r,e):new bv(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new Av(o),uh(t,f)),t=f}}}class ao{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),a=e.getUniformLocation(t,s.name);wv(s,a,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function hh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Rv=37297;let Cv=0;function Pv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Lv(r){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(r);let n;switch(e===t?n="":e===So&&t===Mo?n="LinearDisplayP3ToLinearSRGB":e===Mo&&t===So&&(n="LinearSRGBToLinearDisplayP3"),r){case er:case Fo:return[n,"LinearTransferOETF"];case jn:case bc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function fh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Pv(r.getShaderSource(e),a)}else return i}function Dv(r,e){const t=Lv(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Uv(r,e){let t;switch(e){case Bp:t="Linear";break;case zp:t="Reinhard";break;case kp:t="OptimizedCineon";break;case Hp:t="ACESFilmic";break;case Gp:t="AgX";break;case Wp:t="Neutral";break;case Vp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Iv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Nv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Ov(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function zs(r){return r!==""}function dh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ph(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zl(r){return r.replace(Fv,zv)}const Bv=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function zv(r,e){let t=Ge[e];if(t===void 0){const n=Bv.get(e);if(n!==void 0)t=Ge[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Zl(t)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mh(r){return r.replace(kv,Hv)}function Hv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function _h(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===up?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vs:case xs:e="ENVMAP_TYPE_CUBE";break;case Oo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function Xv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case of:e="ENVMAP_BLENDING_MULTIPLY";break;case Op:e="ENVMAP_BLENDING_MIX";break;case Fp:e="ENVMAP_BLENDING_ADD";break}return e}function Yv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qv(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vv(t),c=Gv(t),u=Wv(t),f=Xv(t),h=Yv(t),d=Iv(t),g=Nv(s),_=i.createProgram();let p,m,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`)):(p=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),m=[_h(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?Ge.tonemapping_pars_fragment:"",t.toneMapping!==Xi?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zs).join(`
`)),a=Zl(a),a=dh(a,t),a=ph(a,t),o=Zl(o),o=dh(o,t),o=ph(o,t),a=mh(a),o=mh(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===Du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=T+p+a,b=T+m+o,P=hh(i,i.VERTEX_SHADER,x),w=hh(i,i.FRAGMENT_SHADER,b);i.attachShader(_,P),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function E(I){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_).trim(),D=i.getShaderInfoLog(P).trim(),H=i.getShaderInfoLog(w).trim();let V=!0,q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(V=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,P,w);else{const Y=fh(i,P,"vertex"),B=fh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+Y+`
`+B)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(D===""||H==="")&&(q=!1);q&&(I.diagnostics={runnable:V,programLog:N,vertexShader:{log:D,prefix:p},fragmentShader:{log:H,prefix:m}})}i.deleteShader(P),i.deleteShader(w),L=new ao(i,_),S=Ov(i,_)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,Rv)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=w,this}let $v=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zv(e),t.set(e,n)),n}}class Zv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function jv(r,e,t,n,i,s,a){const o=new wc,l=new Kv,c=new Set,u=[],f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,v,I,N,D){const H=N.fog,V=D.geometry,q=S.isMeshStandardMaterial?N.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),B=Y&&Y.mapping===Oo?Y.image.height:null,j=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const R=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,se=R!==void 0?R.length:0;let Ue=0;V.morphAttributes.position!==void 0&&(Ue=1),V.morphAttributes.normal!==void 0&&(Ue=2),V.morphAttributes.color!==void 0&&(Ue=3);let Ye,W,Q,le;if(j){const ft=ei[j];Ye=ft.vertexShader,W=ft.fragmentShader}else Ye=S.vertexShader,W=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),le=l.getFragmentShaderID(S);const ne=r.getRenderTarget(),Ee=D.isInstancedMesh===!0,be=D.isBatchedMesh===!0,ze=!!S.map,O=!!S.matcap,Ne=!!Y,ae=!!S.aoMap,ke=!!S.lightMap,Se=!!S.bumpMap,He=!!S.normalMap,M=!!S.displacementMap,y=!!S.emissiveMap,G=!!S.metalnessMap,$=!!S.roughnessMap,K=S.anisotropy>0,J=S.clearcoat>0,Ae=S.iridescence>0,te=S.sheen>0,fe=S.transmission>0,we=K&&!!S.anisotropyMap,ee=J&&!!S.clearcoatMap,ue=J&&!!S.clearcoatNormalMap,Re=J&&!!S.clearcoatRoughnessMap,de=Ae&&!!S.iridescenceMap,ge=Ae&&!!S.iridescenceThicknessMap,Ce=te&&!!S.sheenColorMap,qe=te&&!!S.sheenRoughnessMap,$e=!!S.specularMap,je=!!S.specularColorMap,rt=!!S.specularIntensityMap,_e=fe&&!!S.transmissionMap,C=fe&&!!S.thicknessMap,Z=!!S.gradientMap,re=!!S.alphaMap,pe=S.alphaTest>0,ve=!!S.alphaHash,Ke=!!S.extensions;let nt=Xi;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(nt=r.toneMapping);const ot={shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:W,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:be,instancing:Ee,instancingColor:Ee&&D.instanceColor!==null,instancingMorph:Ee&&D.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ne===null?r.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:er,alphaToCoverage:!!S.alphaToCoverage,map:ze,matcap:O,envMap:Ne,envMapMode:Ne&&Y.mapping,envMapCubeUVHeight:B,aoMap:ae,lightMap:ke,bumpMap:Se,normalMap:He,displacementMap:h&&M,emissiveMap:y,normalMapObjectSpace:He&&S.normalMapType===sm,normalMapTangentSpace:He&&S.normalMapType===rm,metalnessMap:G,roughnessMap:$,anisotropy:K,anisotropyMap:we,clearcoat:J,clearcoatMap:ee,clearcoatNormalMap:ue,clearcoatRoughnessMap:Re,iridescence:Ae,iridescenceMap:de,iridescenceThicknessMap:ge,sheen:te,sheenColorMap:Ce,sheenRoughnessMap:qe,specularMap:$e,specularColorMap:je,specularIntensityMap:rt,transmission:fe,transmissionMap:_e,thicknessMap:C,gradientMap:Z,opaque:S.transparent===!1&&S.blending===cs&&S.alphaToCoverage===!1,alphaMap:re,alphaTest:pe,alphaHash:ve,combine:S.combine,mapUv:ze&&_(S.map.channel),aoMapUv:ae&&_(S.aoMap.channel),lightMapUv:ke&&_(S.lightMap.channel),bumpMapUv:Se&&_(S.bumpMap.channel),normalMapUv:He&&_(S.normalMap.channel),displacementMapUv:M&&_(S.displacementMap.channel),emissiveMapUv:y&&_(S.emissiveMap.channel),metalnessMapUv:G&&_(S.metalnessMap.channel),roughnessMapUv:$&&_(S.roughnessMap.channel),anisotropyMapUv:we&&_(S.anisotropyMap.channel),clearcoatMapUv:ee&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:qe&&_(S.sheenRoughnessMap.channel),specularMapUv:$e&&_(S.specularMap.channel),specularColorMapUv:je&&_(S.specularColorMap.channel),specularIntensityMapUv:rt&&_(S.specularIntensityMap.channel),transmissionMapUv:_e&&_(S.transmissionMap.channel),thicknessMapUv:C&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(He||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ze||re),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:nt,useLegacyLights:r._useLegacyLights,decodeVideoTexture:ze&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===_t,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===vi,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ke&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ke&&S.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ot.vertexUv1s=c.has(1),ot.vertexUv2s=c.has(2),ot.vertexUv3s=c.has(3),c.clear(),ot}function m(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)v.push(I),v.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(T(v,S),x(v,S),v.push(r.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function T(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function x(S,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),S.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),S.push(o.mask)}function b(S){const v=g[S.type];let I;if(v){const N=ei[v];I=Um.clone(N.uniforms)}else I=S.uniforms;return I}function P(S,v){let I;for(let N=0,D=u.length;N<D;N++){const H=u[N];if(H.cacheKey===v){I=H,++I.usedTimes;break}}return I===void 0&&(I=new qv(r,v,S,s),u.push(I)),I}function w(S){if(--S.usedTimes===0){const v=u.indexOf(S);u[v]=u[u.length-1],u.pop(),S.destroy()}}function E(S){l.remove(S)}function L(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:b,acquireProgram:P,releaseProgram:w,releaseShaderCache:E,programs:u,dispose:L}}function Jv(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function n(s,a,o){r.get(s)[a]=o}function i(){r=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Qv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function gh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function vh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,h,d,g,_,p){let m=r[e];return m===void 0?(m={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},r[e]=m):(m.id=f.id,m.object=f,m.geometry=h,m.material=d,m.groupOrder=g,m.renderOrder=f.renderOrder,m.z=_,m.group=p),e++,m}function o(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(f,h,d,g,_,p){const m=a(f,h,d,g,_,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(f,h){t.length>1&&t.sort(f||Qv),n.length>1&&n.sort(h||gh),i.length>1&&i.sort(h||gh)}function u(){for(let f=e,h=r.length;f<h;f++){const d=r[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function ex(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new vh,r.set(n,[a])):i>=s.length?(a=new vh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function tx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new at};break;case"SpotLight":t={position:new X,direction:new X,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function nx(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let ix=0;function rx(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function sx(r){const e=new tx,t=nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Pt,a=new Pt;function o(c,u){let f=0,h=0,d=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let g=0,_=0,p=0,m=0,T=0,x=0,b=0,P=0,w=0,E=0,L=0;c.sort(rx);const S=u===!0?Math.PI:1;for(let I=0,N=c.length;I<N;I++){const D=c[I],H=D.color,V=D.intensity,q=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=H.r*V*S,h+=H.g*V*S,d+=H.b*V*S;else if(D.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(D.sh.coefficients[B],V);L++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*S),D.castShadow){const j=D.shadow,R=t.get(D);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,n.directionalShadow[g]=R,n.directionalShadowMap[g]=Y,n.directionalShadowMatrix[g]=D.shadow.matrix,x++}n.directional[g]=B,g++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(H).multiplyScalar(V*S),B.distance=q,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,n.spot[p]=B;const j=D.shadow;if(D.map&&(n.spotLightMap[w]=D.map,w++,j.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[p]=j.matrix,D.castShadow){const R=t.get(D);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,n.spotShadow[p]=R,n.spotShadowMap[p]=Y,P++}p++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(H).multiplyScalar(V),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=B,m++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity*S),B.distance=D.distance,B.decay=D.decay,D.castShadow){const j=D.shadow,R=t.get(D);R.shadowBias=j.bias,R.shadowNormalBias=j.normalBias,R.shadowRadius=j.radius,R.shadowMapSize=j.mapSize,R.shadowCameraNear=j.camera.near,R.shadowCameraFar=j.camera.far,n.pointShadow[_]=R,n.pointShadowMap[_]=Y,n.pointShadowMatrix[_]=D.shadow.matrix,b++}n.point[_]=B,_++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(V*S),B.groundColor.copy(D.groundColor).multiplyScalar(V*S),n.hemi[T]=B,T++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ce.LTC_FLOAT_1,n.rectAreaLTC2=ce.LTC_FLOAT_2):(n.rectAreaLTC1=ce.LTC_HALF_1,n.rectAreaLTC2=ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==m||v.hemiLength!==T||v.numDirectionalShadows!==x||v.numPointShadows!==b||v.numSpotShadows!==P||v.numSpotMaps!==w||v.numLightProbes!==L)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=m,n.point.length=_,n.hemi.length=T,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=P,n.spotShadowMap.length=P,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=P+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=L,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=m,v.hemiLength=T,v.numDirectionalShadows=x,v.numPointShadows=b,v.numSpotShadows=P,v.numSpotMaps=w,v.numLightProbes=L,n.version=ix++)}function l(c,u){let f=0,h=0,d=0,g=0,_=0;const p=u.matrixWorldInverse;for(let m=0,T=c.length;m<T;m++){const x=c[m];if(x.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),f++}else if(x.isSpotLight){const b=n.spot[d];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),d++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[h];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(p),h++}else if(x.isHemisphereLight){const b=n.hemi[_];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function xh(r){const e=new sx(r),t=[],n=[];function i(){t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(u){e.setup(t,u)}function l(u){e.setupView(t,u)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function ax(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new xh(r),e.set(i,[o])):s>=a.length?(o=new xh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class ox extends xa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends xa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ux=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function hx(r,e,t){let n=new Rf;const i=new it,s=new it,a=new Xt,o=new ox({depthPacking:im}),l=new lx,c={},u=t.maxTextureSize,f={[Zi]:_n,[_n]:Zi,[vi]:vi},h=new bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:cx,fragmentShader:ux}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ri;g.setAttribute("position",new Ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Si(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let m=this.type;this.render=function(w,E,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const S=r.getRenderTarget(),v=r.getActiveCubeFace(),I=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Wi),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const D=m!==mi&&this.type===mi,H=m===mi&&this.type!==mi;for(let V=0,q=w.length;V<q;V++){const Y=w[V],B=Y.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const j=B.getFrameExtents();if(i.multiply(j),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/j.x),i.x=s.x*j.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/j.y),i.y=s.y*j.y,B.mapSize.y=s.y)),B.map===null||D===!0||H===!0){const se=this.type!==mi?{minFilter:kn,magFilter:kn}:{};B.map!==null&&B.map.dispose(),B.map=new Pr(i.x,i.y,se),B.map.texture.name=Y.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const R=B.getViewportCount();for(let se=0;se<R;se++){const Ue=B.getViewport(se);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),N.viewport(a),B.updateMatrices(Y,se),n=B.getFrustum(),b(E,L,B.camera,Y,this.type)}B.isPointLightShadow!==!0&&this.type===mi&&T(B,L),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,v,I)};function T(w,E){const L=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Pr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,L,h,_,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,L,d,_,null)}function x(w,E,L,S){let v=null;const I=L.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)v=I;else if(v=L.isPointLight===!0?l:o,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const N=v.uuid,D=E.uuid;let H=c[N];H===void 0&&(H={},c[N]=H);let V=H[D];V===void 0&&(V=v.clone(),H[D]=V,E.addEventListener("dispose",P)),v=V}if(v.visible=E.visible,v.wireframe=E.wireframe,S===mi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:f[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=r.properties.get(v);N.light=L}return v}function b(w,E,L,S,v){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===mi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,w.matrixWorld);const D=e.update(w),H=w.material;if(Array.isArray(H)){const V=D.groups;for(let q=0,Y=V.length;q<Y;q++){const B=V[q],j=H[B.materialIndex];if(j&&j.visible){const R=x(w,j,S,v);w.onBeforeShadow(r,w,E,L,D,R,B),r.renderBufferDirect(L,null,D,R,w,B),w.onAfterShadow(r,w,E,L,D,R,B)}}}else if(H.visible){const V=x(w,H,S,v);w.onBeforeShadow(r,w,E,L,D,V,null),r.renderBufferDirect(L,null,D,V,w,null),w.onAfterShadow(r,w,E,L,D,V,null)}}const N=w.children;for(let D=0,H=N.length;D<H;D++)b(N[D],E,L,S,v)}function P(w){w.target.removeEventListener("dispose",P);for(const L in c){const S=c[L],v=w.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}function fx(r){function e(){let C=!1;const Z=new Xt;let re=null;const pe=new Xt(0,0,0,0);return{setMask:function(ve){re!==ve&&!C&&(r.colorMask(ve,ve,ve,ve),re=ve)},setLocked:function(ve){C=ve},setClear:function(ve,Ke,nt,ot,ft){ft===!0&&(ve*=ot,Ke*=ot,nt*=ot),Z.set(ve,Ke,nt,ot),pe.equals(Z)===!1&&(r.clearColor(ve,Ke,nt,ot),pe.copy(Z))},reset:function(){C=!1,re=null,pe.set(-1,0,0,0)}}}function t(){let C=!1,Z=null,re=null,pe=null;return{setTest:function(ve){ve?le(r.DEPTH_TEST):ne(r.DEPTH_TEST)},setMask:function(ve){Z!==ve&&!C&&(r.depthMask(ve),Z=ve)},setFunc:function(ve){if(re!==ve){switch(ve){case Cp:r.depthFunc(r.NEVER);break;case Pp:r.depthFunc(r.ALWAYS);break;case Lp:r.depthFunc(r.LESS);break;case go:r.depthFunc(r.LEQUAL);break;case Dp:r.depthFunc(r.EQUAL);break;case Up:r.depthFunc(r.GEQUAL);break;case Ip:r.depthFunc(r.GREATER);break;case Np:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}re=ve}},setLocked:function(ve){C=ve},setClear:function(ve){pe!==ve&&(r.clearDepth(ve),pe=ve)},reset:function(){C=!1,Z=null,re=null,pe=null}}}function n(){let C=!1,Z=null,re=null,pe=null,ve=null,Ke=null,nt=null,ot=null,ft=null;return{setTest:function(st){C||(st?le(r.STENCIL_TEST):ne(r.STENCIL_TEST))},setMask:function(st){Z!==st&&!C&&(r.stencilMask(st),Z=st)},setFunc:function(st,Pe,Me){(re!==st||pe!==Pe||ve!==Me)&&(r.stencilFunc(st,Pe,Me),re=st,pe=Pe,ve=Me)},setOp:function(st,Pe,Me){(Ke!==st||nt!==Pe||ot!==Me)&&(r.stencilOp(st,Pe,Me),Ke=st,nt=Pe,ot=Me)},setLocked:function(st){C=st},setClear:function(st){ft!==st&&(r.clearStencil(st),ft=st)},reset:function(){C=!1,Z=null,re=null,pe=null,ve=null,Ke=null,nt=null,ot=null,ft=null}}}const i=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,T=null,x=null,b=null,P=null,w=new at(0,0,0),E=0,L=!1,S=null,v=null,I=null,N=null,D=null;const H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,q=0;const Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=q>=1):Y.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=q>=2);let B=null,j={};const R=r.getParameter(r.SCISSOR_BOX),se=r.getParameter(r.VIEWPORT),Ue=new Xt().fromArray(R),Ye=new Xt().fromArray(se);function W(C,Z,re,pe){const ve=new Uint8Array(4),Ke=r.createTexture();r.bindTexture(C,Ke),r.texParameteri(C,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(C,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let nt=0;nt<re;nt++)C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY?r.texImage3D(Z,0,r.RGBA,1,1,pe,0,r.RGBA,r.UNSIGNED_BYTE,ve):r.texImage2D(Z+nt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ve);return Ke}const Q={};Q[r.TEXTURE_2D]=W(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=W(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=W(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=W(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),le(r.DEPTH_TEST),s.setFunc(go),Se(!1),He(tu),le(r.CULL_FACE),ae(Wi);function le(C){c[C]!==!0&&(r.enable(C),c[C]=!0)}function ne(C){c[C]!==!1&&(r.disable(C),c[C]=!1)}function Ee(C,Z){return u[C]!==Z?(r.bindFramebuffer(C,Z),u[C]=Z,C===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Z),C===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Z),!0):!1}function be(C,Z){let re=h,pe=!1;if(C){re=f.get(Z),re===void 0&&(re=[],f.set(Z,re));const ve=C.textures;if(re.length!==ve.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Ke=0,nt=ve.length;Ke<nt;Ke++)re[Ke]=r.COLOR_ATTACHMENT0+Ke;re.length=ve.length,pe=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,pe=!0);pe&&r.drawBuffers(re)}function ze(C){return d!==C?(r.useProgram(C),d=C,!0):!1}const O={[_r]:r.FUNC_ADD,[fp]:r.FUNC_SUBTRACT,[dp]:r.FUNC_REVERSE_SUBTRACT};O[pp]=r.MIN,O[mp]=r.MAX;const Ne={[_p]:r.ZERO,[gp]:r.ONE,[vp]:r.SRC_COLOR,[Gl]:r.SRC_ALPHA,[Tp]:r.SRC_ALPHA_SATURATE,[yp]:r.DST_COLOR,[Mp]:r.DST_ALPHA,[xp]:r.ONE_MINUS_SRC_COLOR,[Wl]:r.ONE_MINUS_SRC_ALPHA,[Ep]:r.ONE_MINUS_DST_COLOR,[Sp]:r.ONE_MINUS_DST_ALPHA,[bp]:r.CONSTANT_COLOR,[Ap]:r.ONE_MINUS_CONSTANT_COLOR,[wp]:r.CONSTANT_ALPHA,[Rp]:r.ONE_MINUS_CONSTANT_ALPHA};function ae(C,Z,re,pe,ve,Ke,nt,ot,ft,st){if(C===Wi){g===!0&&(ne(r.BLEND),g=!1);return}if(g===!1&&(le(r.BLEND),g=!0),C!==hp){if(C!==_||st!==L){if((p!==_r||x!==_r)&&(r.blendEquation(r.FUNC_ADD),p=_r,x=_r),st)switch(C){case cs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nu:r.blendFunc(r.ONE,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case cs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case iu:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ru:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}m=null,T=null,b=null,P=null,w.set(0,0,0),E=0,_=C,L=st}return}ve=ve||Z,Ke=Ke||re,nt=nt||pe,(Z!==p||ve!==x)&&(r.blendEquationSeparate(O[Z],O[ve]),p=Z,x=ve),(re!==m||pe!==T||Ke!==b||nt!==P)&&(r.blendFuncSeparate(Ne[re],Ne[pe],Ne[Ke],Ne[nt]),m=re,T=pe,b=Ke,P=nt),(ot.equals(w)===!1||ft!==E)&&(r.blendColor(ot.r,ot.g,ot.b,ft),w.copy(ot),E=ft),_=C,L=!1}function ke(C,Z){C.side===vi?ne(r.CULL_FACE):le(r.CULL_FACE);let re=C.side===_n;Z&&(re=!re),Se(re),C.blending===cs&&C.transparent===!1?ae(Wi):ae(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),i.setMask(C.colorWrite);const pe=C.stencilWrite;a.setTest(pe),pe&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),y(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?le(r.SAMPLE_ALPHA_TO_COVERAGE):ne(r.SAMPLE_ALPHA_TO_COVERAGE)}function Se(C){S!==C&&(C?r.frontFace(r.CW):r.frontFace(r.CCW),S=C)}function He(C){C!==lp?(le(r.CULL_FACE),C!==v&&(C===tu?r.cullFace(r.BACK):C===cp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ne(r.CULL_FACE),v=C}function M(C){C!==I&&(V&&r.lineWidth(C),I=C)}function y(C,Z,re){C?(le(r.POLYGON_OFFSET_FILL),(N!==Z||D!==re)&&(r.polygonOffset(Z,re),N=Z,D=re)):ne(r.POLYGON_OFFSET_FILL)}function G(C){C?le(r.SCISSOR_TEST):ne(r.SCISSOR_TEST)}function $(C){C===void 0&&(C=r.TEXTURE0+H-1),B!==C&&(r.activeTexture(C),B=C)}function K(C,Z,re){re===void 0&&(B===null?re=r.TEXTURE0+H-1:re=B);let pe=j[re];pe===void 0&&(pe={type:void 0,texture:void 0},j[re]=pe),(pe.type!==C||pe.texture!==Z)&&(B!==re&&(r.activeTexture(re),B=re),r.bindTexture(C,Z||Q[C]),pe.type=C,pe.texture=Z)}function J(){const C=j[B];C!==void 0&&C.type!==void 0&&(r.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Ae(){try{r.compressedTexImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function fe(){try{r.texSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{r.texSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ue(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Re(){try{r.texStorage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function de(){try{r.texStorage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{r.texImage2D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function qe(C){Ue.equals(C)===!1&&(r.scissor(C.x,C.y,C.z,C.w),Ue.copy(C))}function $e(C){Ye.equals(C)===!1&&(r.viewport(C.x,C.y,C.z,C.w),Ye.copy(C))}function je(C,Z){let re=l.get(Z);re===void 0&&(re=new WeakMap,l.set(Z,re));let pe=re.get(C);pe===void 0&&(pe=r.getUniformBlockIndex(Z,C.name),re.set(C,pe))}function rt(C,Z){const pe=l.get(Z).get(C);o.get(Z)!==pe&&(r.uniformBlockBinding(Z,pe,C.__bindingPointIndex),o.set(Z,pe))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},B=null,j={},u={},f=new WeakMap,h=[],d=null,g=!1,_=null,p=null,m=null,T=null,x=null,b=null,P=null,w=new at(0,0,0),E=0,L=!1,S=null,v=null,I=null,N=null,D=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:le,disable:ne,bindFramebuffer:Ee,drawBuffers:be,useProgram:ze,setBlending:ae,setMaterial:ke,setFlipSided:Se,setCullFace:He,setLineWidth:M,setPolygonOffset:y,setScissorTest:G,activeTexture:$,bindTexture:K,unbindTexture:J,compressedTexImage2D:Ae,compressedTexImage3D:te,texImage2D:ge,texImage3D:Ce,updateUBOMapping:je,uniformBlockBinding:rt,texStorage2D:Re,texStorage3D:de,texSubImage2D:fe,texSubImage3D:we,compressedTexSubImage2D:ee,compressedTexSubImage3D:ue,scissor:qe,viewport:$e,reset:_e}}function dx(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,u=new WeakMap;let f;const h=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return d?new OffscreenCanvas(M,y):Eo("canvas")}function _(M,y,G){let $=1;const K=He(M);if((K.width>G||K.height>G)&&($=G/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const J=Math.floor($*K.width),Ae=Math.floor($*K.height);f===void 0&&(f=g(J,Ae));const te=y?g(J,Ae):f;return te.width=J,te.height=Ae,te.getContext("2d").drawImage(M,0,0,J,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+J+"x"+Ae+")."),te}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),M;return M}function p(M){return M.generateMipmaps&&M.minFilter!==kn&&M.minFilter!==Zn}function m(M){r.generateMipmap(M)}function T(M,y,G,$,K=!1){if(M!==null){if(r[M]!==void 0)return r[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let J=y;if(y===r.RED&&(G===r.FLOAT&&(J=r.R32F),G===r.HALF_FLOAT&&(J=r.R16F),G===r.UNSIGNED_BYTE&&(J=r.R8)),y===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.R8UI),G===r.UNSIGNED_SHORT&&(J=r.R16UI),G===r.UNSIGNED_INT&&(J=r.R32UI),G===r.BYTE&&(J=r.R8I),G===r.SHORT&&(J=r.R16I),G===r.INT&&(J=r.R32I)),y===r.RG&&(G===r.FLOAT&&(J=r.RG32F),G===r.HALF_FLOAT&&(J=r.RG16F),G===r.UNSIGNED_BYTE&&(J=r.RG8)),y===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&(J=r.RG8UI),G===r.UNSIGNED_SHORT&&(J=r.RG16UI),G===r.UNSIGNED_INT&&(J=r.RG32UI),G===r.BYTE&&(J=r.RG8I),G===r.SHORT&&(J=r.RG16I),G===r.INT&&(J=r.RG32I)),y===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),y===r.RGBA){const Ae=K?xo:ut.getTransfer($);G===r.FLOAT&&(J=r.RGBA32F),G===r.HALF_FLOAT&&(J=r.RGBA16F),G===r.UNSIGNED_BYTE&&(J=Ae===_t?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(M,y){return p(M)===!0||M.isFramebufferTexture&&M.minFilter!==kn&&M.minFilter!==Zn?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function b(M){const y=M.target;y.removeEventListener("dispose",b),w(y),y.isVideoTexture&&u.delete(y)}function P(M){const y=M.target;y.removeEventListener("dispose",P),L(y)}function w(M){const y=n.get(M);if(y.__webglInit===void 0)return;const G=M.source,$=h.get(G);if($){const K=$[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(M),Object.keys($).length===0&&h.delete(G)}n.remove(M)}function E(M){const y=n.get(M);r.deleteTexture(y.__webglTexture);const G=M.source,$=h.get(G);delete $[y.__cacheKey],a.memory.textures--}function L(M){const y=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let K=0;K<y.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(y.__webglFramebuffer[$][K]);else r.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)r.deleteFramebuffer(y.__webglFramebuffer[$]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=M.textures;for(let $=0,K=G.length;$<K;$++){const J=n.get(G[$]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(M)}let S=0;function v(){S=0}function I(){const M=S;return M>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+i.maxTextures),S+=1,M}function N(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function D(M,y){const G=n.get(M);if(M.isVideoTexture&&ke(M),M.isRenderTargetTexture===!1&&M.version>0&&G.__version!==M.version){const $=M.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(G,M,y);return}}t.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+y)}function H(M,y){const G=n.get(M);if(M.version>0&&G.__version!==M.version){Ue(G,M,y);return}t.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+y)}function V(M,y){const G=n.get(M);if(M.version>0&&G.__version!==M.version){Ue(G,M,y);return}t.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+y)}function q(M,y){const G=n.get(M);if(M.version>0&&G.__version!==M.version){Ye(G,M,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+y)}const Y={[ql]:r.REPEAT,[vr]:r.CLAMP_TO_EDGE,[$l]:r.MIRRORED_REPEAT},B={[kn]:r.NEAREST,[Xp]:r.NEAREST_MIPMAP_NEAREST,[ya]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[$o]:r.LINEAR_MIPMAP_NEAREST,[xr]:r.LINEAR_MIPMAP_LINEAR},j={[am]:r.NEVER,[fm]:r.ALWAYS,[om]:r.LESS,[gf]:r.LEQUAL,[lm]:r.EQUAL,[hm]:r.GEQUAL,[cm]:r.GREATER,[um]:r.NOTEQUAL};function R(M,y){if(y.type===Bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Zn||y.magFilter===$o||y.magFilter===ya||y.magFilter===xr||y.minFilter===Zn||y.minFilter===$o||y.minFilter===ya||y.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(M,r.TEXTURE_WRAP_S,Y[y.wrapS]),r.texParameteri(M,r.TEXTURE_WRAP_T,Y[y.wrapT]),(M===r.TEXTURE_3D||M===r.TEXTURE_2D_ARRAY)&&r.texParameteri(M,r.TEXTURE_WRAP_R,Y[y.wrapR]),r.texParameteri(M,r.TEXTURE_MAG_FILTER,B[y.magFilter]),r.texParameteri(M,r.TEXTURE_MIN_FILTER,B[y.minFilter]),y.compareFunction&&(r.texParameteri(M,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(M,r.TEXTURE_COMPARE_FUNC,j[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===kn||y.minFilter!==ya&&y.minFilter!==xr||y.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");r.texParameterf(M,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function se(M,y){let G=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",b));const $=y.source;let K=h.get($);K===void 0&&(K={},h.set($,K));const J=N(y);if(J!==M.__cacheKey){K[J]===void 0&&(K[J]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[J].usedTimes++;const Ae=K[M.__cacheKey];Ae!==void 0&&(K[M.__cacheKey].usedTimes--,Ae.usedTimes===0&&E(y)),M.__cacheKey=J,M.__webglTexture=K[J].texture}return G}function Ue(M,y,G){let $=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=r.TEXTURE_3D);const K=se(M,y),J=y.source;t.bindTexture($,M.__webglTexture,r.TEXTURE0+G);const Ae=n.get(J);if(J.version!==Ae.__version||K===!0){t.activeTexture(r.TEXTURE0+G);const te=ut.getPrimaries(ut.workingColorSpace),fe=y.colorSpace===Fi?null:ut.getPrimaries(y.colorSpace),we=y.colorSpace===Fi||te===fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ee=_(y.image,!1,i.maxTextureSize);ee=Se(y,ee);const ue=s.convert(y.format,y.colorSpace),Re=s.convert(y.type);let de=T(y.internalFormat,ue,Re,y.colorSpace,y.isVideoTexture);R($,y);let ge;const Ce=y.mipmaps,qe=y.isVideoTexture!==!0&&de!==_f,$e=Ae.__version===void 0||K===!0,je=J.dataReady,rt=x(y,ee);if(y.isDepthTexture)de=r.DEPTH_COMPONENT16,y.type===Bi?de=r.DEPTH_COMPONENT32F:y.type===Ms?de=r.DEPTH_COMPONENT24:y.type===ma&&(de=r.DEPTH24_STENCIL8),$e&&(qe?t.texStorage2D(r.TEXTURE_2D,1,de,ee.width,ee.height):t.texImage2D(r.TEXTURE_2D,0,de,ee.width,ee.height,0,ue,Re,null));else if(y.isDataTexture)if(Ce.length>0){qe&&$e&&t.texStorage2D(r.TEXTURE_2D,rt,de,Ce[0].width,Ce[0].height);for(let _e=0,C=Ce.length;_e<C;_e++)ge=Ce[_e],qe?je&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,ge.width,ge.height,ue,Re,ge.data):t.texImage2D(r.TEXTURE_2D,_e,de,ge.width,ge.height,0,ue,Re,ge.data);y.generateMipmaps=!1}else qe?($e&&t.texStorage2D(r.TEXTURE_2D,rt,de,ee.width,ee.height),je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee.width,ee.height,ue,Re,ee.data)):t.texImage2D(r.TEXTURE_2D,0,de,ee.width,ee.height,0,ue,Re,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qe&&$e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,rt,de,Ce[0].width,Ce[0].height,ee.depth);for(let _e=0,C=Ce.length;_e<C;_e++)ge=Ce[_e],y.format!==ii?ue!==null?qe?je&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,ge.width,ge.height,ee.depth,ue,ge.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,_e,de,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?je&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,_e,0,0,0,ge.width,ge.height,ee.depth,ue,Re,ge.data):t.texImage3D(r.TEXTURE_2D_ARRAY,_e,de,ge.width,ge.height,ee.depth,0,ue,Re,ge.data)}else{qe&&$e&&t.texStorage2D(r.TEXTURE_2D,rt,de,Ce[0].width,Ce[0].height);for(let _e=0,C=Ce.length;_e<C;_e++)ge=Ce[_e],y.format!==ii?ue!==null?qe?je&&t.compressedTexSubImage2D(r.TEXTURE_2D,_e,0,0,ge.width,ge.height,ue,ge.data):t.compressedTexImage2D(r.TEXTURE_2D,_e,de,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?je&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,ge.width,ge.height,ue,Re,ge.data):t.texImage2D(r.TEXTURE_2D,_e,de,ge.width,ge.height,0,ue,Re,ge.data)}else if(y.isDataArrayTexture)qe?($e&&t.texStorage3D(r.TEXTURE_2D_ARRAY,rt,de,ee.width,ee.height,ee.depth),je&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ue,Re,ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,ue,Re,ee.data);else if(y.isData3DTexture)qe?($e&&t.texStorage3D(r.TEXTURE_3D,rt,de,ee.width,ee.height,ee.depth),je&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ue,Re,ee.data)):t.texImage3D(r.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,ue,Re,ee.data);else if(y.isFramebufferTexture){if($e)if(qe)t.texStorage2D(r.TEXTURE_2D,rt,de,ee.width,ee.height);else{let _e=ee.width,C=ee.height;for(let Z=0;Z<rt;Z++)t.texImage2D(r.TEXTURE_2D,Z,de,_e,C,0,ue,Re,null),_e>>=1,C>>=1}}else if(Ce.length>0){if(qe&&$e){const _e=He(Ce[0]);t.texStorage2D(r.TEXTURE_2D,rt,de,_e.width,_e.height)}for(let _e=0,C=Ce.length;_e<C;_e++)ge=Ce[_e],qe?je&&t.texSubImage2D(r.TEXTURE_2D,_e,0,0,ue,Re,ge):t.texImage2D(r.TEXTURE_2D,_e,de,ue,Re,ge);y.generateMipmaps=!1}else if(qe){if($e){const _e=He(ee);t.texStorage2D(r.TEXTURE_2D,rt,de,_e.width,_e.height)}je&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ue,Re,ee)}else t.texImage2D(r.TEXTURE_2D,0,de,ue,Re,ee);p(y)&&m($),Ae.__version=J.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function Ye(M,y,G){if(y.image.length!==6)return;const $=se(M,y),K=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,M.__webglTexture,r.TEXTURE0+G);const J=n.get(K);if(K.version!==J.__version||$===!0){t.activeTexture(r.TEXTURE0+G);const Ae=ut.getPrimaries(ut.workingColorSpace),te=y.colorSpace===Fi?null:ut.getPrimaries(y.colorSpace),fe=y.colorSpace===Fi||Ae===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const we=y.isCompressedTexture||y.image[0].isCompressedTexture,ee=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let C=0;C<6;C++)!we&&!ee?ue[C]=_(y.image[C],!0,i.maxCubemapSize):ue[C]=ee?y.image[C].image:y.image[C],ue[C]=Se(y,ue[C]);const Re=ue[0],de=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),Ce=T(y.internalFormat,de,ge,y.colorSpace),qe=y.isVideoTexture!==!0,$e=J.__version===void 0||$===!0,je=K.dataReady;let rt=x(y,Re);R(r.TEXTURE_CUBE_MAP,y);let _e;if(we){qe&&$e&&t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Ce,Re.width,Re.height);for(let C=0;C<6;C++){_e=ue[C].mipmaps;for(let Z=0;Z<_e.length;Z++){const re=_e[Z];y.format!==ii?de!==null?qe?je&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z,0,0,re.width,re.height,de,re.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z,Ce,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z,0,0,re.width,re.height,de,ge,re.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z,Ce,re.width,re.height,0,de,ge,re.data)}}}else{if(_e=y.mipmaps,qe&&$e){_e.length>0&&rt++;const C=He(ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,rt,Ce,C.width,C.height)}for(let C=0;C<6;C++)if(ee){qe?je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,ue[C].width,ue[C].height,de,ge,ue[C].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Ce,ue[C].width,ue[C].height,0,de,ge,ue[C].data);for(let Z=0;Z<_e.length;Z++){const pe=_e[Z].image[C].image;qe?je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z+1,0,0,pe.width,pe.height,de,ge,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z+1,Ce,pe.width,pe.height,0,de,ge,pe.data)}}else{qe?je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,0,0,de,ge,ue[C]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,0,Ce,de,ge,ue[C]);for(let Z=0;Z<_e.length;Z++){const re=_e[Z];qe?je&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z+1,0,0,de,ge,re.image[C]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+C,Z+1,Ce,de,ge,re.image[C])}}}p(y)&&m(r.TEXTURE_CUBE_MAP),J.__version=K.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function W(M,y,G,$,K,J){const Ae=s.convert(G.format,G.colorSpace),te=s.convert(G.type),fe=T(G.internalFormat,Ae,te,G.colorSpace);if(!n.get(y).__hasExternalTextures){const ee=Math.max(1,y.width>>J),ue=Math.max(1,y.height>>J);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,J,fe,ee,ue,y.depth,0,Ae,te,null):t.texImage2D(K,J,fe,ee,ue,0,Ae,te,null)}t.bindFramebuffer(r.FRAMEBUFFER,M),ae(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,n.get(G).__webglTexture,0,Ne(y)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,n.get(G).__webglTexture,J),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Q(M,y,G){if(r.bindRenderbuffer(r.RENDERBUFFER,M),y.depthBuffer&&!y.stencilBuffer){let $=r.DEPTH_COMPONENT24;if(G||ae(y)){const K=y.depthTexture;K&&K.isDepthTexture&&(K.type===Bi?$=r.DEPTH_COMPONENT32F:K.type===Ms&&($=r.DEPTH_COMPONENT24));const J=Ne(y);ae(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,J,$,y.width,y.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,J,$,y.width,y.height)}else r.renderbufferStorage(r.RENDERBUFFER,$,y.width,y.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,M)}else if(y.depthBuffer&&y.stencilBuffer){const $=Ne(y);G&&ae(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,y.width,y.height):ae(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,$,r.DEPTH24_STENCIL8,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,M)}else{const $=y.textures;for(let K=0;K<$.length;K++){const J=$[K],Ae=s.convert(J.format,J.colorSpace),te=s.convert(J.type),fe=T(J.internalFormat,Ae,te,J.colorSpace),we=Ne(y);G&&ae(y)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,we,fe,y.width,y.height):ae(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,we,fe,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,fe,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function le(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),D(y.depthTexture,0);const $=n.get(y.depthTexture).__webglTexture,K=Ne(y);if(y.depthTexture.format===us)ae(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,$,0);else if(y.depthTexture.format===sa)ae(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0,K):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function ne(M){const y=n.get(M),G=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");le(y.__webglFramebuffer,M)}else if(G){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]=r.createRenderbuffer(),Q(y.__webglDepthbuffer[$],M,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=r.createRenderbuffer(),Q(y.__webglDepthbuffer,M,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ee(M,y,G){const $=n.get(M);y!==void 0&&W($.__webglFramebuffer,M,M.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&ne(M)}function be(M){const y=M.texture,G=n.get(M),$=n.get(y);M.addEventListener("dispose",P);const K=M.textures,J=M.isWebGLCubeRenderTarget===!0,Ae=K.length>1;if(Ae||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,a.memory.textures++),J){G.__webglFramebuffer=[];for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[te]=[];for(let fe=0;fe<y.mipmaps.length;fe++)G.__webglFramebuffer[te][fe]=r.createFramebuffer()}else G.__webglFramebuffer[te]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let te=0;te<y.mipmaps.length;te++)G.__webglFramebuffer[te]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let te=0,fe=K.length;te<fe;te++){const we=n.get(K[te]);we.__webglTexture===void 0&&(we.__webglTexture=r.createTexture(),a.memory.textures++)}if(M.samples>0&&ae(M)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let te=0;te<K.length;te++){const fe=K[te];G.__webglColorRenderbuffer[te]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[te]);const we=s.convert(fe.format,fe.colorSpace),ee=s.convert(fe.type),ue=T(fe.internalFormat,we,ee,fe.colorSpace,M.isXRRenderTarget===!0),Re=Ne(M);r.renderbufferStorageMultisample(r.RENDERBUFFER,Re,ue,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,G.__webglColorRenderbuffer[te])}r.bindRenderbuffer(r.RENDERBUFFER,null),M.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),Q(G.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),R(r.TEXTURE_CUBE_MAP,y);for(let te=0;te<6;te++)if(y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)W(G.__webglFramebuffer[te][fe],M,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,fe);else W(G.__webglFramebuffer[te],M,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+te,0);p(y)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let te=0,fe=K.length;te<fe;te++){const we=K[te],ee=n.get(we);t.bindTexture(r.TEXTURE_2D,ee.__webglTexture),R(r.TEXTURE_2D,we),W(G.__webglFramebuffer,M,we,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,0),p(we)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let te=r.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(te=M.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(te,$.__webglTexture),R(te,y),y.mipmaps&&y.mipmaps.length>0)for(let fe=0;fe<y.mipmaps.length;fe++)W(G.__webglFramebuffer[fe],M,y,r.COLOR_ATTACHMENT0,te,fe);else W(G.__webglFramebuffer,M,y,r.COLOR_ATTACHMENT0,te,0);p(y)&&m(te),t.unbindTexture()}M.depthBuffer&&ne(M)}function ze(M){const y=M.textures;for(let G=0,$=y.length;G<$;G++){const K=y[G];if(p(K)){const J=M.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ae=n.get(K).__webglTexture;t.bindTexture(J,Ae),m(J),t.unbindTexture()}}}function O(M){if(M.samples>0&&ae(M)===!1){const y=M.textures,G=M.width,$=M.height;let K=r.COLOR_BUFFER_BIT;const J=[],Ae=M.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=n.get(M),fe=y.length>1;if(fe)for(let we=0;we<y.length;we++)t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,te.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglFramebuffer);for(let we=0;we<y.length;we++){J.push(r.COLOR_ATTACHMENT0+we),M.depthBuffer&&J.push(Ae);const ee=te.__ignoreDepthValues!==void 0?te.__ignoreDepthValues:!1;if(ee===!1&&(M.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),M.stencilBuffer&&te.__isTransmissionRenderTarget!==!0&&(K|=r.STENCIL_BUFFER_BIT)),fe&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,te.__webglColorRenderbuffer[we]),ee===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[Ae]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[Ae])),fe){const ue=n.get(y[we]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,G,$,0,0,G,$,K,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),fe)for(let we=0;we<y.length;we++){t.bindFramebuffer(r.FRAMEBUFFER,te.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,te.__webglColorRenderbuffer[we]);const ee=n.get(y[we]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,te.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.TEXTURE_2D,ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,te.__webglMultisampledFramebuffer)}}function Ne(M){return Math.min(i.maxSamples,M.samples)}function ae(M){const y=n.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ke(M){const y=a.render.frame;u.get(M)!==y&&(u.set(M,y),M.update())}function Se(M,y){const G=M.colorSpace,$=M.format,K=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||G!==er&&G!==Fi&&(ut.getTransfer(G)===_t?($!==ii||K!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function He(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=v,this.setTexture2D=D,this.setTexture2DArray=H,this.setTexture3D=V,this.setTextureCube=q,this.rebindTextures=Ee,this.setupRenderTarget=be,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=O,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=W,this.useMultisampledRTT=ae}function px(r,e){function t(n,i=Fi){let s;const a=ut.getTransfer(i);if(n===Yi)return r.UNSIGNED_BYTE;if(n===hf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ff)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$p)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Yp)return r.BYTE;if(n===qp)return r.SHORT;if(n===cf)return r.UNSIGNED_SHORT;if(n===uf)return r.INT;if(n===Ms)return r.UNSIGNED_INT;if(n===Bi)return r.FLOAT;if(n===vo)return r.HALF_FLOAT;if(n===Kp)return r.ALPHA;if(n===Zp)return r.RGB;if(n===ii)return r.RGBA;if(n===jp)return r.LUMINANCE;if(n===Jp)return r.LUMINANCE_ALPHA;if(n===us)return r.DEPTH_COMPONENT;if(n===sa)return r.DEPTH_STENCIL;if(n===Qp)return r.RED;if(n===df)return r.RED_INTEGER;if(n===em)return r.RG;if(n===pf)return r.RG_INTEGER;if(n===mf)return r.RGBA_INTEGER;if(n===Ko||n===Zo||n===jo||n===Jo)if(a===_t)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===su||n===au||n===ou||n===lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===su)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===au)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ou)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_f)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===cu||n===uu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===cu)return a===_t?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===hu||n===fu||n===du||n===pu||n===mu||n===_u||n===gu||n===vu||n===xu||n===Mu||n===Su||n===yu||n===Eu||n===Tu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===hu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===du)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===mu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_u)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Su)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Eu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tu)return a===_t?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Qo||n===bu||n===Au)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Qo)return a===_t?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Au)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tm||n===wu||n===Ru||n===Cu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Qo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ru)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Cu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ma?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}class mx extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wa extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class Al{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Wa;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const gx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new fn,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new bi({vertexShader:gx,fragmentShader:vx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new zo(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Mx extends Rs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const _=new xx,p=t.getContextAttributes();let m=null,T=null;const x=[],b=[],P=new it;let w=null;const E=new Fn;E.layers.enable(1),E.viewport=new Xt;const L=new Fn;L.layers.enable(2),L.viewport=new Xt;const S=[E,L],v=new mx;v.layers.enable(1),v.layers.enable(2);let I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let Q=x[W];return Q===void 0&&(Q=new Al,x[W]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(W){let Q=x[W];return Q===void 0&&(Q=new Al,x[W]=Q),Q.getGripSpace()},this.getHand=function(W){let Q=x[W];return Q===void 0&&(Q=new Al,x[W]=Q),Q.getHandSpace()};function D(W){const Q=b.indexOf(W.inputSource);if(Q===-1)return;const le=x[Q];le!==void 0&&(le.update(W.inputSource,W.frame,c||a),le.dispatchEvent({type:W.type,data:W.inputSource}))}function H(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",V);for(let W=0;W<x.length;W++){const Q=b[W];Q!==null&&(b[W]=null,x[W].disconnect(Q))}I=null,N=null,_.reset(),e.setRenderTarget(m),d=null,h=null,f=null,i=null,T=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",H),i.addEventListener("inputsourceschange",V),p.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(P),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),T=new Pr(d.framebufferWidth,d.framebufferHeight,{format:ii,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,le=null,ne=null;p.depth&&(ne=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?sa:us,le=p.stencil?ma:Ms);const Ee={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(i,t),h=f.createProjectionLayer(Ee),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),T=new Pr(h.textureWidth,h.textureHeight,{format:ii,type:Yi,depthTexture:new Pf(h.textureWidth,h.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const be=e.properties.get(T);be.__ignoreDepthValues=h.ignoreDepthValues}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ye.setContext(i),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function V(W){for(let Q=0;Q<W.removed.length;Q++){const le=W.removed[Q],ne=b.indexOf(le);ne>=0&&(b[ne]=null,x[ne].disconnect(le))}for(let Q=0;Q<W.added.length;Q++){const le=W.added[Q];let ne=b.indexOf(le);if(ne===-1){for(let be=0;be<x.length;be++)if(be>=b.length){b.push(le),ne=be;break}else if(b[be]===null){b[be]=le,ne=be;break}if(ne===-1)break}const Ee=x[ne];Ee&&Ee.connect(le)}}const q=new X,Y=new X;function B(W,Q,le){q.setFromMatrixPosition(Q.matrixWorld),Y.setFromMatrixPosition(le.matrixWorld);const ne=q.distanceTo(Y),Ee=Q.projectionMatrix.elements,be=le.projectionMatrix.elements,ze=Ee[14]/(Ee[10]-1),O=Ee[14]/(Ee[10]+1),Ne=(Ee[9]+1)/Ee[5],ae=(Ee[9]-1)/Ee[5],ke=(Ee[8]-1)/Ee[0],Se=(be[8]+1)/be[0],He=ze*ke,M=ze*Se,y=ne/(-ke+Se),G=y*-ke;Q.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(G),W.translateZ(y),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert();const $=ze+y,K=O+y,J=He-G,Ae=M+(ne-G),te=Ne*O/K*$,fe=ae*O/K*$;W.projectionMatrix.makePerspective(J,Ae,te,fe,$,K),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}function j(W,Q){Q===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(Q.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;_.texture!==null&&(W.near=_.depthNear,W.far=_.depthFar),v.near=L.near=E.near=W.near,v.far=L.far=E.far=W.far,(I!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),I=v.near,N=v.far,E.near=I,E.far=N,L.near=I,L.far=N,E.updateProjectionMatrix(),L.updateProjectionMatrix(),W.updateProjectionMatrix());const Q=W.parent,le=v.cameras;j(v,Q);for(let ne=0;ne<le.length;ne++)j(le[ne],Q);le.length===2?B(v,E,L):v.projectionMatrix.copy(E.projectionMatrix),R(W,v,Q)};function R(W,Q,le){le===null?W.matrix.copy(Q.matrixWorld):(W.matrix.copy(le.matrixWorld),W.matrix.invert(),W.matrix.multiply(Q.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(Q.projectionMatrix),W.projectionMatrixInverse.copy(Q.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Kl*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null};let se=null;function Ue(W,Q){if(u=Q.getViewerPose(c||a),g=Q,u!==null){const le=u.views;d!==null&&(e.setRenderTargetFramebuffer(T,d.framebuffer),e.setRenderTarget(T));let ne=!1;le.length!==v.cameras.length&&(v.cameras.length=0,ne=!0);for(let be=0;be<le.length;be++){const ze=le[be];let O=null;if(d!==null)O=d.getViewport(ze);else{const ae=f.getViewSubImage(h,ze);O=ae.viewport,be===0&&(e.setRenderTargetTextures(T,ae.colorTexture,h.ignoreDepthValues?void 0:ae.depthStencilTexture),e.setRenderTarget(T))}let Ne=S[be];Ne===void 0&&(Ne=new Fn,Ne.layers.enable(be),Ne.viewport=new Xt,S[be]=Ne),Ne.matrix.fromArray(ze.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ze.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(O.x,O.y,O.width,O.height),be===0&&(v.matrix.copy(Ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ne===!0&&v.cameras.push(Ne)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const be=f.getDepthInformation(le[0]);be&&be.isValid&&be.texture&&_.init(e,be,i.renderState)}}for(let le=0;le<x.length;le++){const ne=b[le],Ee=x[le];ne!==null&&Ee!==void 0&&Ee.update(ne,Q,c||a)}_.render(e,v),se&&se(W,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Ye=new Cf;Ye.setAnimationLoop(Ue),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const lr=new Ti,Sx=new Pt;function yx(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,bf(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,T,x,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,T,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===_n&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===_n&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const T=e.get(m),x=T.envMap,b=T.envMapRotation;if(x&&(p.envMap.value=x,lr.copy(b),lr.x*=-1,lr.y*=-1,lr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),p.envMapRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(lr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const P=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*P,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,T,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*T,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,T){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===_n&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const T=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Ex(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,x){const b=x.program;n.uniformBlockBinding(T,b)}function c(T,x){let b=i[T.id];b===void 0&&(g(T),b=u(T),i[T.id]=b,T.addEventListener("dispose",p));const P=x.program;n.updateUBOMapping(T,P);const w=e.render.frame;s[T.id]!==w&&(h(T),s[T.id]=w)}function u(T){const x=f();T.__bindingPointIndex=x;const b=r.createBuffer(),P=T.__size,w=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,P,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,b),b}function f(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const x=i[T.id],b=T.uniforms,P=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,E=b.length;w<E;w++){const L=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,v=L.length;S<v;S++){const I=L[S];if(d(I,w,S,P)===!0){const N=I.__offset,D=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let V=0;V<D.length;V++){const q=D[V],Y=_(q);typeof q=="number"||typeof q=="boolean"?(I.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,N+H,I.__data)):q.isMatrix3?(I.__data[0]=q.elements[0],I.__data[1]=q.elements[1],I.__data[2]=q.elements[2],I.__data[3]=0,I.__data[4]=q.elements[3],I.__data[5]=q.elements[4],I.__data[6]=q.elements[5],I.__data[7]=0,I.__data[8]=q.elements[6],I.__data[9]=q.elements[7],I.__data[10]=q.elements[8],I.__data[11]=0):(q.toArray(I.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,I.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(T,x,b,P){const w=T.value,E=x+"_"+b;if(P[E]===void 0)return typeof w=="number"||typeof w=="boolean"?P[E]=w:P[E]=w.clone(),!0;{const L=P[E];if(typeof w=="number"||typeof w=="boolean"){if(L!==w)return P[E]=w,!0}else if(L.equals(w)===!1)return L.copy(w),!0}return!1}function g(T){const x=T.uniforms;let b=0;const P=16;for(let E=0,L=x.length;E<L;E++){const S=Array.isArray(x[E])?x[E]:[x[E]];for(let v=0,I=S.length;v<I;v++){const N=S[v],D=Array.isArray(N.value)?N.value:[N.value];for(let H=0,V=D.length;H<V;H++){const q=D[H],Y=_(q),B=b%P;B!==0&&P-B<Y.boundary&&(b+=P-B),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=Y.storage}}}const w=b%P;return w>0&&(b+=P-w),T.__size=b,T.__cache={},this}function _(T){const x={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(x.boundary=4,x.storage=4):T.isVector2?(x.boundary=8,x.storage=8):T.isVector3||T.isColor?(x.boundary=16,x.storage=12):T.isVector4?(x.boundary=16,x.storage=16):T.isMatrix3?(x.boundary=48,x.storage=48):T.isMatrix4?(x.boundary=64,x.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),x}function p(T){const x=T.target;x.removeEventListener("dispose",p);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const T in i)r.deleteBuffer(i[T]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class Tx{constructor(e={}){const{canvas:t=pm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;const d=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this._useLegacyLights=!1,this.toneMapping=Xi,this.toneMappingExposure=1;const x=this;let b=!1,P=0,w=0,E=null,L=-1,S=null;const v=new Xt,I=new Xt;let N=null;const D=new at(0);let H=0,V=t.width,q=t.height,Y=1,B=null,j=null;const R=new Xt(0,0,V,q),se=new Xt(0,0,V,q);let Ue=!1;const Ye=new Rf;let W=!1,Q=!1;const le=new Pt,ne=new it,Ee=new X,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return E===null?Y:1}let O=n;function Ne(A,U){const z=t.getContext(A,U);return z!==null?z:null}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Tc}`),t.addEventListener("webglcontextlost",Z,!1),t.addEventListener("webglcontextrestored",re,!1),t.addEventListener("webglcontextcreationerror",pe,!1),O===null){const U="webgl2";if(O=Ne(U,A),O===null)throw Ne(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,ke,Se,He,M,y,G,$,K,J,Ae,te,fe,we,ee,ue,Re,de,ge,Ce,qe,$e,je,rt;function _e(){ae=new D0(O),ae.init(),ke=new b0(O,ae,e),$e=new px(O,ae),Se=new fx(O),He=new N0(O),M=new Jv,y=new dx(O,ae,Se,M,ke,$e,He),G=new w0(x),$=new L0(x),K=new km(O),je=new E0(O,K),J=new U0(O,K,He,je),Ae=new F0(O,J,K,He),ge=new O0(O,ke,y),ue=new A0(M),te=new jv(x,G,$,ae,ke,je,ue),fe=new yx(x,M),we=new ex,ee=new ax(ae),de=new y0(x,G,$,Se,Ae,h,l),Re=new hx(x,Ae,ke),rt=new Ex(O,He,ke,Se),Ce=new T0(O,ae,He),qe=new I0(O,ae,He),He.programs=te.programs,x.capabilities=ke,x.extensions=ae,x.properties=M,x.renderLists=we,x.shadowMap=Re,x.state=Se,x.info=He}_e();const C=new Mx(x,O);this.xr=C,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(A){A!==void 0&&(Y=A,this.setSize(V,q,!1))},this.getSize=function(A){return A.set(V,q)},this.setSize=function(A,U,z=!0){if(C.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,q=U,t.width=Math.floor(A*Y),t.height=Math.floor(U*Y),z===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set(V*Y,q*Y).floor()},this.setDrawingBufferSize=function(A,U,z){V=A,q=U,Y=z,t.width=Math.floor(A*z),t.height=Math.floor(U*z),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(R)},this.setViewport=function(A,U,z,k){A.isVector4?R.set(A.x,A.y,A.z,A.w):R.set(A,U,z,k),Se.viewport(v.copy(R).multiplyScalar(Y).round())},this.getScissor=function(A){return A.copy(se)},this.setScissor=function(A,U,z,k){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,U,z,k),Se.scissor(I.copy(se).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Se.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){B=A},this.setTransparentSort=function(A){j=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,U=!0,z=!0){let k=0;if(A){let F=!1;if(E!==null){const ie=E.texture.format;F=ie===mf||ie===pf||ie===df}if(F){const ie=E.texture.type,he=ie===Yi||ie===Ms||ie===cf||ie===ma||ie===hf||ie===ff,Te=de.getClearColor(),Ie=de.getClearAlpha(),ye=Te.r,xe=Te.g,De=Te.b;he?(d[0]=ye,d[1]=xe,d[2]=De,d[3]=Ie,O.clearBufferuiv(O.COLOR,0,d)):(g[0]=ye,g[1]=xe,g[2]=De,g[3]=Ie,O.clearBufferiv(O.COLOR,0,g))}else k|=O.COLOR_BUFFER_BIT}U&&(k|=O.DEPTH_BUFFER_BIT),z&&(k|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Z,!1),t.removeEventListener("webglcontextrestored",re,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),we.dispose(),ee.dispose(),M.dispose(),G.dispose(),$.dispose(),Ae.dispose(),je.dispose(),rt.dispose(),te.dispose(),C.dispose(),C.removeEventListener("sessionstart",Pe),C.removeEventListener("sessionend",Me),Xe.stop()};function Z(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function re(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const A=He.autoReset,U=Re.enabled,z=Re.autoUpdate,k=Re.needsUpdate,F=Re.type;_e(),He.autoReset=A,Re.enabled=U,Re.autoUpdate=z,Re.needsUpdate=k,Re.type=F}function pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ve(A){const U=A.target;U.removeEventListener("dispose",ve),Ke(U)}function Ke(A){nt(A),M.remove(A)}function nt(A){const U=M.get(A).programs;U!==void 0&&(U.forEach(function(z){te.releaseProgram(z)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,z,k,F,ie){U===null&&(U=be);const he=F.isMesh&&F.matrixWorld.determinant()<0,Te=xt(A,U,z,k,F);Se.setMaterial(k,he);let Ie=z.index,ye=1;if(k.wireframe===!0){if(Ie=J.getWireframeAttribute(z),Ie===void 0)return;ye=2}const xe=z.drawRange,De=z.attributes.position;let mt=xe.start*ye,qt=(xe.start+xe.count)*ye;ie!==null&&(mt=Math.max(mt,ie.start*ye),qt=Math.min(qt,(ie.start+ie.count)*ye)),Ie!==null?(mt=Math.max(mt,0),qt=Math.min(qt,Ie.count)):De!=null&&(mt=Math.max(mt,0),qt=Math.min(qt,De.count));const Mt=qt-mt;if(Mt<0||Mt===1/0)return;je.setup(F,k,Te,z,Ie);let Lt,ct=Ce;if(Ie!==null&&(Lt=K.get(Ie),ct=qe,ct.setIndex(Lt)),F.isMesh)k.wireframe===!0?(Se.setLineWidth(k.wireframeLinewidth*ze()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(F.isLine){let Be=k.linewidth;Be===void 0&&(Be=1),Se.setLineWidth(Be*ze()),F.isLineSegments?ct.setMode(O.LINES):F.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else F.isPoints?ct.setMode(O.POINTS):F.isSprite&&ct.setMode(O.TRIANGLES);if(F.isBatchedMesh)ct.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else if(F.isInstancedMesh)ct.renderInstances(mt,Mt,F.count);else if(z.isInstancedBufferGeometry){const Be=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ci=Math.min(z.instanceCount,Be);ct.renderInstances(mt,Mt,ci)}else ct.render(mt,Mt)};function ot(A,U,z){A.transparent===!0&&A.side===vi&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,Ve(A,U,z),A.side=Zi,A.needsUpdate=!0,Ve(A,U,z),A.side=vi):Ve(A,U,z)}this.compile=function(A,U,z=null){z===null&&(z=A),p=ee.get(z),p.init(),T.push(p),z.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),A!==z&&A.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights(x._useLegacyLights);const k=new Set;return A.traverse(function(F){const ie=F.material;if(ie)if(Array.isArray(ie))for(let he=0;he<ie.length;he++){const Te=ie[he];ot(Te,z,F),k.add(Te)}else ot(ie,z,F),k.add(ie)}),T.pop(),p=null,k},this.compileAsync=function(A,U,z=null){const k=this.compile(A,U,z);return new Promise(F=>{function ie(){if(k.forEach(function(he){M.get(he).currentProgram.isReady()&&k.delete(he)}),k.size===0){F(A);return}setTimeout(ie,10)}ae.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let ft=null;function st(A){ft&&ft(A)}function Pe(){Xe.stop()}function Me(){Xe.start()}const Xe=new Cf;Xe.setAnimationLoop(st),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(A){ft=A,C.setAnimationLoop(A),A===null?Xe.stop():Xe.start()},C.addEventListener("sessionstart",Pe),C.addEventListener("sessionend",Me),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),C.enabled===!0&&C.isPresenting===!0&&(C.cameraAutoUpdate===!0&&C.updateCamera(U),U=C.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,E),p=ee.get(A,T.length),p.init(),T.push(p),le.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Ye.setFromProjectionMatrix(le),Q=this.localClippingEnabled,W=ue.init(this.clippingPlanes,Q),_=we.get(A,m.length),_.init(),m.push(_),oe(A,U,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(B,j),this.info.render.frame++,W===!0&&ue.beginShadows();const z=p.state.shadowsArray;if(Re.render(z,A,U),W===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(C.enabled===!1||C.isPresenting===!1||C.hasDepthSensing()===!1)&&de.render(_,A),p.setupLights(x._useLegacyLights),U.isArrayCamera){const k=U.cameras;for(let F=0,ie=k.length;F<ie;F++){const he=k[F];Fe(_,A,he,he.viewport)}}else Fe(_,A,U);E!==null&&(y.updateMultisampleRenderTarget(E),y.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,U),je.resetDefaultState(),L=-1,S=null,T.pop(),T.length>0?p=T[T.length-1]:p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function oe(A,U,z,k){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ye.intersectsSprite(A)){k&&Ee.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);const he=Ae.update(A),Te=A.material;Te.visible&&_.push(A,he,Te,z,Ee.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ye.intersectsObject(A))){const he=Ae.update(A),Te=A.material;if(k&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ee.copy(A.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),Ee.copy(he.boundingSphere.center)),Ee.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Te)){const Ie=he.groups;for(let ye=0,xe=Ie.length;ye<xe;ye++){const De=Ie[ye],mt=Te[De.materialIndex];mt&&mt.visible&&_.push(A,he,mt,z,Ee.z,De)}}else Te.visible&&_.push(A,he,Te,z,Ee.z,null)}}const ie=A.children;for(let he=0,Te=ie.length;he<Te;he++)oe(ie[he],U,z,k)}function Fe(A,U,z,k){const F=A.opaque,ie=A.transmissive,he=A.transparent;p.setupLightsView(z),W===!0&&ue.setGlobalState(x.clippingPlanes,z),ie.length>0&&Le(F,ie,U,z),k&&Se.viewport(v.copy(k)),F.length>0&&Oe(F,U,z),ie.length>0&&Oe(ie,U,z),he.length>0&&Oe(he,U,z),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Le(A,U,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Pr(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?vo:Yi,minFilter:xr,samples:4,stencilBuffer:s});const ye=M.get(p.state.transmissionRenderTarget);ye.__isTransmissionRenderTarget=!0}const ie=p.state.transmissionRenderTarget;x.getDrawingBufferSize(ne),ie.setSize(ne.x,ne.y);const he=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor(D),H=x.getClearAlpha(),H<1&&x.setClearColor(16777215,.5),x.clear();const Te=x.toneMapping;x.toneMapping=Xi,Oe(A,z,k),y.updateMultisampleRenderTarget(ie),y.updateRenderTargetMipmap(ie);let Ie=!1;for(let ye=0,xe=U.length;ye<xe;ye++){const De=U[ye],mt=De.object,qt=De.geometry,Mt=De.material,Lt=De.group;if(Mt.side===vi&&mt.layers.test(k.layers)){const ct=Mt.side;Mt.side=_n,Mt.needsUpdate=!0,wt(mt,z,k,qt,Mt,Lt),Mt.side=ct,Mt.needsUpdate=!0,Ie=!0}}Ie===!0&&(y.updateMultisampleRenderTarget(ie),y.updateRenderTargetMipmap(ie)),x.setRenderTarget(he),x.setClearColor(D,H),x.toneMapping=Te}function Oe(A,U,z){const k=U.isScene===!0?U.overrideMaterial:null;for(let F=0,ie=A.length;F<ie;F++){const he=A[F],Te=he.object,Ie=he.geometry,ye=k===null?he.material:k,xe=he.group;Te.layers.test(z.layers)&&wt(Te,U,z,Ie,ye,xe)}}function wt(A,U,z,k,F,ie){A.onBeforeRender(x,U,z,k,F,ie),A.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),F.onBeforeRender(x,U,z,k,A,ie),F.transparent===!0&&F.side===vi&&F.forceSinglePass===!1?(F.side=_n,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,A,ie),F.side=Zi,F.needsUpdate=!0,x.renderBufferDirect(z,U,k,F,A,ie),F.side=vi):x.renderBufferDirect(z,U,k,F,A,ie),A.onAfterRender(x,U,z,k,F,ie)}function Ve(A,U,z){U.isScene!==!0&&(U=be);const k=M.get(A),F=p.state.lights,ie=p.state.shadowsArray,he=F.state.version,Te=te.getParameters(A,F.state,ie,U,z),Ie=te.getProgramCacheKey(Te);let ye=k.programs;k.environment=A.isMeshStandardMaterial?U.environment:null,k.fog=U.fog,k.envMap=(A.isMeshStandardMaterial?$:G).get(A.envMap||k.environment),k.envMapRotation=k.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,ye===void 0&&(A.addEventListener("dispose",ve),ye=new Map,k.programs=ye);let xe=ye.get(Ie);if(xe!==void 0){if(k.currentProgram===xe&&k.lightsStateVersion===he)return Nt(A,Te),xe}else Te.uniforms=te.getUniforms(A),A.onBuild(z,Te,x),A.onBeforeCompile(Te,x),xe=te.acquireProgram(Te,Ie),ye.set(Ie,xe),k.uniforms=Te.uniforms;const De=k.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(De.clippingPlanes=ue.uniform),Nt(A,Te),k.needsLights=lt(A),k.lightsStateVersion=he,k.needsLights&&(De.ambientLightColor.value=F.state.ambient,De.lightProbe.value=F.state.probe,De.directionalLights.value=F.state.directional,De.directionalLightShadows.value=F.state.directionalShadow,De.spotLights.value=F.state.spot,De.spotLightShadows.value=F.state.spotShadow,De.rectAreaLights.value=F.state.rectArea,De.ltc_1.value=F.state.rectAreaLTC1,De.ltc_2.value=F.state.rectAreaLTC2,De.pointLights.value=F.state.point,De.pointLightShadows.value=F.state.pointShadow,De.hemisphereLights.value=F.state.hemi,De.directionalShadowMap.value=F.state.directionalShadowMap,De.directionalShadowMatrix.value=F.state.directionalShadowMatrix,De.spotShadowMap.value=F.state.spotShadowMap,De.spotLightMatrix.value=F.state.spotLightMatrix,De.spotLightMap.value=F.state.spotLightMap,De.pointShadowMap.value=F.state.pointShadowMap,De.pointShadowMatrix.value=F.state.pointShadowMatrix),k.currentProgram=xe,k.uniformsList=null,xe}function vt(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=ao.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Nt(A,U){const z=M.get(A);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function xt(A,U,z,k,F){U.isScene!==!0&&(U=be),y.resetTextureUnits();const ie=U.fog,he=k.isMeshStandardMaterial?U.environment:null,Te=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:er,Ie=(k.isMeshStandardMaterial?$:G).get(k.envMap||he),ye=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,xe=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),De=!!z.morphAttributes.position,mt=!!z.morphAttributes.normal,qt=!!z.morphAttributes.color;let Mt=Xi;k.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const Lt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ct=Lt!==void 0?Lt.length:0,Be=M.get(k),ci=p.state.lights;if(W===!0&&(Q===!0||A!==S)){const In=A===S&&k.id===L;ue.setState(k,A,In)}let St=!1;k.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ci.state.version||Be.outputColorSpace!==Te||F.isBatchedMesh&&Be.batching===!1||!F.isBatchedMesh&&Be.batching===!0||F.isInstancedMesh&&Be.instancing===!1||!F.isInstancedMesh&&Be.instancing===!0||F.isSkinnedMesh&&Be.skinning===!1||!F.isSkinnedMesh&&Be.skinning===!0||F.isInstancedMesh&&Be.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Be.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Be.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Be.instancingMorph===!1&&F.morphTexture!==null||Be.envMap!==Ie||k.fog===!0&&Be.fog!==ie||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ue.numPlanes||Be.numIntersection!==ue.numIntersection)||Be.vertexAlphas!==ye||Be.vertexTangents!==xe||Be.morphTargets!==De||Be.morphNormals!==mt||Be.morphColors!==qt||Be.toneMapping!==Mt||Be.morphTargetsCount!==ct)&&(St=!0):(St=!0,Be.__version=k.version);let nr=Be.currentProgram;St===!0&&(nr=Ve(k,U,F));let Qc=!1,Ps=!1,Xo=!1;const $t=nr.getUniforms(),Ci=Be.uniforms;if(Se.useProgram(nr.program)&&(Qc=!0,Ps=!0,Xo=!0),k.id!==L&&(L=k.id,Ps=!0),Qc||S!==A){$t.setValue(O,"projectionMatrix",A.projectionMatrix),$t.setValue(O,"viewMatrix",A.matrixWorldInverse);const In=$t.map.cameraPosition;In!==void 0&&In.setValue(O,Ee.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&$t.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&$t.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Ps=!0,Xo=!0)}if(F.isSkinnedMesh){$t.setOptional(O,F,"bindMatrix"),$t.setOptional(O,F,"bindMatrixInverse");const In=F.skeleton;In&&(In.boneTexture===null&&In.computeBoneTexture(),$t.setValue(O,"boneTexture",In.boneTexture,y))}F.isBatchedMesh&&($t.setOptional(O,F,"batchingTexture"),$t.setValue(O,"batchingTexture",F._matricesTexture,y));const Yo=z.morphAttributes;if((Yo.position!==void 0||Yo.normal!==void 0||Yo.color!==void 0)&&ge.update(F,z,nr),(Ps||Be.receiveShadow!==F.receiveShadow)&&(Be.receiveShadow=F.receiveShadow,$t.setValue(O,"receiveShadow",F.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ci.envMap.value=Ie,Ci.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&U.environment!==null&&(Ci.envMapIntensity.value=U.environmentIntensity),Ps&&($t.setValue(O,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&dt(Ci,Xo),ie&&k.fog===!0&&fe.refreshFogUniforms(Ci,ie),fe.refreshMaterialUniforms(Ci,k,Y,q,p.state.transmissionRenderTarget),ao.upload(O,vt(Be),Ci,y)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(ao.upload(O,vt(Be),Ci,y),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&$t.setValue(O,"center",F.center),$t.setValue(O,"modelViewMatrix",F.modelViewMatrix),$t.setValue(O,"normalMatrix",F.normalMatrix),$t.setValue(O,"modelMatrix",F.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const In=k.uniformsGroups;for(let qo=0,op=In.length;qo<op;qo++){const eu=In[qo];rt.update(eu,nr),rt.bind(eu,nr)}}return nr}function dt(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function lt(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,U,z){M.get(A.texture).__webglTexture=U,M.get(A.depthTexture).__webglTexture=z;const k=M.get(A);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const z=M.get(A);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,z=0){E=A,P=U,w=z;let k=!0,F=null,ie=!1,he=!1;if(A){const Ie=M.get(A);Ie.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(O.FRAMEBUFFER,null),k=!1):Ie.__webglFramebuffer===void 0?y.setupRenderTarget(A):Ie.__hasExternalTextures&&y.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);const ye=A.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(he=!0);const xe=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(xe[U])?F=xe[U][z]:F=xe[U],ie=!0):A.samples>0&&y.useMultisampledRTT(A)===!1?F=M.get(A).__webglMultisampledFramebuffer:Array.isArray(xe)?F=xe[z]:F=xe,v.copy(A.viewport),I.copy(A.scissor),N=A.scissorTest}else v.copy(R).multiplyScalar(Y).floor(),I.copy(se).multiplyScalar(Y).floor(),N=Ue;if(Se.bindFramebuffer(O.FRAMEBUFFER,F)&&k&&Se.drawBuffers(A,F),Se.viewport(v),Se.scissor(I),Se.setScissorTest(N),ie){const Ie=M.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ie.__webglTexture,z)}else if(he){const Ie=M.get(A.texture),ye=U||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ie.__webglTexture,z||0,ye)}L=-1},this.readRenderTargetPixels=function(A,U,z,k,F,ie,he){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&he!==void 0&&(Te=Te[he]),Te){Se.bindFramebuffer(O.FRAMEBUFFER,Te);try{const Ie=A.texture,ye=Ie.format,xe=Ie.type;if(ye!==ii&&$e.convert(ye)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const De=xe===vo&&(ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float"));if(xe!==Yi&&$e.convert(xe)!==O.getParameter(O.IMPLEMENTATION_COLOR_READ_TYPE)&&xe!==Bi&&!De){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-k&&z>=0&&z<=A.height-F&&O.readPixels(U,z,k,F,$e.convert(ye),$e.convert(xe),ie)}finally{const Ie=E!==null?M.get(E).__webglFramebuffer:null;Se.bindFramebuffer(O.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(A,U,z=0){const k=Math.pow(2,-z),F=Math.floor(U.image.width*k),ie=Math.floor(U.image.height*k);y.setTexture2D(U,0),O.copyTexSubImage2D(O.TEXTURE_2D,z,0,0,A.x,A.y,F,ie),Se.unbindTexture()},this.copyTextureToTexture=function(A,U,z,k=0){const F=U.image.width,ie=U.image.height,he=$e.convert(z.format),Te=$e.convert(z.type);y.setTexture2D(z,0),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,z.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,z.unpackAlignment),U.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,k,A.x,A.y,F,ie,he,Te,U.image.data):U.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,k,A.x,A.y,U.mipmaps[0].width,U.mipmaps[0].height,he,U.mipmaps[0].data):O.texSubImage2D(O.TEXTURE_2D,k,A.x,A.y,he,Te,U.image),k===0&&z.generateMipmaps&&O.generateMipmap(O.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,U,z,k,F=0){const ie=Math.round(A.max.x-A.min.x),he=Math.round(A.max.y-A.min.y),Te=A.max.z-A.min.z+1,Ie=$e.convert(k.format),ye=$e.convert(k.type);let xe;if(k.isData3DTexture)y.setTexture3D(k,0),xe=O.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)y.setTexture2DArray(k,0),xe=O.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,k.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,k.unpackAlignment);const De=O.getParameter(O.UNPACK_ROW_LENGTH),mt=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qt=O.getParameter(O.UNPACK_SKIP_PIXELS),Mt=O.getParameter(O.UNPACK_SKIP_ROWS),Lt=O.getParameter(O.UNPACK_SKIP_IMAGES),ct=z.isCompressedTexture?z.mipmaps[F]:z.image;O.pixelStorei(O.UNPACK_ROW_LENGTH,ct.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ct.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,A.min.x),O.pixelStorei(O.UNPACK_SKIP_ROWS,A.min.y),O.pixelStorei(O.UNPACK_SKIP_IMAGES,A.min.z),z.isDataTexture||z.isData3DTexture?O.texSubImage3D(xe,F,U.x,U.y,U.z,ie,he,Te,Ie,ye,ct.data):k.isCompressedArrayTexture?O.compressedTexSubImage3D(xe,F,U.x,U.y,U.z,ie,he,Te,Ie,ct.data):O.texSubImage3D(xe,F,U.x,U.y,U.z,ie,he,Te,Ie,ye,ct),O.pixelStorei(O.UNPACK_ROW_LENGTH,De),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,mt),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Mt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Lt),F===0&&k.generateMipmaps&&O.generateMipmap(xe),Se.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?y.setTextureCube(A,0):A.isData3DTexture?y.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?y.setTexture2DArray(A,0):y.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){P=0,w=0,E=null,Se.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===bc?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Fo?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bx extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ax extends xa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new at(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mh=new Pt,jl=new Ac,Xa=new Bo,Ya=new X;class wx extends gn{constructor(e=new Ri,t=new Ax){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xa.copy(n.boundingSphere),Xa.applyMatrix4(i),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Mh.copy(i).invert(),jl.copy(e.ray).applyMatrix4(Mh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=h,_=d;g<_;g++){const p=c.getX(g);Ya.fromBufferAttribute(f,p),Sh(Ya,p,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let g=h,_=d;g<_;g++)Ya.fromBufferAttribute(f,g),Sh(Ya,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sh(r,e,t,n,i,s,a){const o=jl.distanceSqToPoint(r);if(o<t){const l=new X;jl.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}const yh=new Pt;class Rx{constructor(e,t,n=0,i=1/0){this.ray=new Ac(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new wc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yh),this}intersectObject(e,t=!0,n=[]){return Jl(e,this,n,t),n.sort(Eh),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)Jl(e[i],this,n,t);return n.sort(Eh),n}}function Eh(r,e){return r.distance-e.distance}function Jl(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let s=0,a=i.length;s<a;s++)Jl(i[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tc);function _i(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Of(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Dn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ys={duration:.5,overwrite:!1,delay:0},Cc,en,yt,Hn=1e8,pt=1/Hn,Ql=Math.PI*2,Cx=Ql/4,Px=0,Ff=Math.sqrt,Lx=Math.cos,Dx=Math.sin,Wt=function(e){return typeof e=="string"},At=function(e){return typeof e=="function"},Ai=function(e){return typeof e=="number"},Pc=function(e){return typeof e>"u"},li=function(e){return typeof e=="object"},vn=function(e){return e!==!1},Lc=function(){return typeof window<"u"},qa=function(e){return At(e)||Wt(e)},Bf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},tn=Array.isArray,ec=/(?:-?\.?\d|\.)+/gi,zf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,wl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kf=/[+-]=-?[.\d]+/,Hf=/[^,'"\[\]\s]+/gi,Ux=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Tt,Jn,tc,Dc,Un={},To={},Vf,Gf=function(e){return(To=Lr(e,Un))&&yn},Uc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},aa=function(e,t){return!t&&console.warn(e)},Wf=function(e,t){return e&&(Un[e]=t)&&To&&(To[e]=t)||Un},oa=function(){return 0},Ix={suppressEvents:!0,isStart:!0,kill:!1},oo={suppressEvents:!0,kill:!1},Nx={suppressEvents:!0},Ic={},qi=[],nc={},Xf,wn={},Rl={},Th=30,lo=[],Nc="",Oc=function(e){var t=e[0],n,i;if(li(t)||At(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=lo.length;i--&&!lo[i].targetTest(t););n=lo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new md(e[i],n)))||e.splice(i,1);return e},Er=function(e){return e._gsap||Oc(Vn(e))[0]._gsap},Yf=function(e,t,n){return(n=e[t])&&At(n)?e[t]():Pc(n)&&e.getAttribute&&e.getAttribute(t)||n},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Rt=function(e){return Math.round(e*1e5)/1e5||0},Gt=function(e){return Math.round(e*1e7)/1e7||0},fs=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Ox=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},bo=function(){var e=qi.length,t=qi.slice(0),n,i;for(nc={},qi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qf=function(e,t,n,i){qi.length&&!en&&bo(),e.render(t,n,i||en&&t<0&&(e._initted||e._startAt)),qi.length&&!en&&bo()},$f=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hf).length<2?t:Wt(e)?e.trim():e},Kf=function(e){return e},Wn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Lr=function(e,t){for(var n in t)e[n]=t[n];return e},bh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=li(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ao=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||Tt,n=e.keyframes?Fx(tn(e.keyframes)):Wn;if(vn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Bx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Zf=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ho=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Tr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zx=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ic=function(e,t,n,i){return e._startAt&&(en?e._startAt.revert(oo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},kx=function r(e){return!e||e._ts&&r(e.parent)},Ah=function(e){return e._repeat?Es(e._tTime,e=e.duration()+e._rDelay)*e:0},Es=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},wo=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Vo=function(e){return e._end=Gt(e._start+(e._tDur/Math.abs(e._ts||e._rts||pt)||0))},Go=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Gt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Vo(e),n._dirty||Tr(n,e)),e},jf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=wo(e.rawTime(),t),(!t._dur||Sa(0,t.totalDuration(),n)-t._tTime>pt)&&t.render(n,!0)),Tr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-pt}},ni=function(e,t,n,i){return t.parent&&ji(t),t._start=Gt((Ai(n)?n:n||e!==Tt?On(e,n,t):e._time)+t._delay),t._end=Gt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Zf(e,t,"_first","_last",e._sort?"_start":0),rc(t)||(e._recent=t),i||jf(e,t),e._ts<0&&Go(e,e._tTime),e},Jf=function(e,t){return(Un.ScrollTrigger||Uc("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},Qf=function(e,t,n,i,s){if(Bc(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!en&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Xf!==Rn.frame)return qi.push(e),e._lazy=[s,i],1},Hx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},rc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vx=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Hx(e)&&!(!e._initted&&rc(e))||(e._ts<0||e._dp._ts<0)&&!rc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=Sa(0,e._tDur,t),u=Es(l,o),e._yoyo&&u&1&&(a=1-a),u!==Es(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||en||i||e._zTime===pt||!t&&e._zTime){if(!e._initted&&Qf(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?pt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&ic(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&ji(e,1),!n&&!en&&(Pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gx=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ts=function(e,t,n,i){var s=e._repeat,a=Gt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Gt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Go(e,e._tTime=e._tDur*o),e.parent&&Vo(e),n||Tr(e.parent,e),e},wh=function(e){return e instanceof cn?Tr(e):Ts(e,e._dur)},Wx={_start:0,endTime:oa,totalDuration:oa},On=function r(e,t,n){var i=e.labels,s=e._recent||Wx,a=e.duration()>=Hn?s.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(tn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},$s=function(e,t,n){var i=Ai(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;a.immediateRender=vn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new It(t[0],a,t[s+1])},tr=function(e,t){return e||e===0?t(e):t},Sa=function(e,t,n){return n<e?e:n>t?t:n},Qt=function(e,t){return!Wt(e)||!(t=Ux.exec(e))?"":t[1]},Xx=function(e,t,n){return tr(n,function(i){return Sa(e,t,i)})},sc=[].slice,ed=function(e,t){return e&&li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&li(e[0]))&&!e.nodeType&&e!==Jn},Yx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Wt(i)&&!t||ed(i,1)?(s=n).push.apply(s,Vn(i)):n.push(i)})||n},Vn=function(e,t,n){return yt&&!t&&yt.selector?yt.selector(e):Wt(e)&&!n&&(tc||!bs())?sc.call((t||Dc).querySelectorAll(e),0):tn(e)?Yx(e,n):ed(e)?sc.call(e,0):e?[e]:[]},ac=function(e){return e=Vn(e)[0]||aa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vn(t,n.querySelectorAll?n:n===e?aa("Invalid scope")||Dc.createElement("div"):e)}},td=function(e){return e.sort(function(){return .5-Math.random()})},nd=function(e){if(At(e))return e;var t=li(e)?e:{each:e},n=br(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return Wt(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,g){var _=(g||t).length,p=a[_],m,T,x,b,P,w,E,L,S;if(!p){if(S=t.grid==="auto"?0:(t.grid||[1,Hn])[1],!S){for(E=-Hn;E<(E=g[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(p=a[_]=[],m=l?Math.min(S,_)*u-.5:i%S,T=S===Hn?0:l?_*f/S-.5:i/S|0,E=0,L=Hn,w=0;w<_;w++)x=w%S-m,b=T-(w/S|0),p[w]=P=c?Math.abs(c==="y"?b:x):Ff(x*x+b*b),P>E&&(E=P),P<L&&(L=P);i==="random"&&td(p),p.max=E-L,p.min=L,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:c?c==="y"?_/S:S:Math.max(S,_/S))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Qt(t.amount||t.each)||0,n=n&&_<0?fd(n):n}return _=(p[h]-p.min)/p.max||0,Gt(p.b+(n?n(_):_)*p.v)+p.u}},oc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Gt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Ai(n)?0:Qt(n))}},id=function(e,t){var n=tn(e),i,s;return!n&&li(e)&&(i=n=e.radius||Hn,e.values?(e=Vn(e.values),(s=!Ai(e[0]))&&(i*=i)):e=oc(e.increment)),tr(t,n?At(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Hn,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Ai(a)?u:u+Qt(a)}:oc(e))},rd=function(e,t,n,i){return tr(tn(e)?!t:n===!0?!!(n=0):!i,function(){return tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},qx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},$x=function(e,t){return function(n){return e(parseFloat(n))+(t||Qt(n))}},Kx=function(e,t,n){return ad(e,t,0,1,n)},sd=function(e,t,n){return tr(n,function(i){return e[~~t(i)]})},Zx=function r(e,t,n){var i=t-e;return tn(e)?sd(e,r(0,e.length),t):tr(n,function(s){return(i+(s-e)%i)%i+e})},jx=function r(e,t,n){var i=t-e,s=i*2;return tn(e)?sd(e,r(0,e.length-1),t):tr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},la=function(e){for(var t=0,n="",i,s,a,o;~(i=e.indexOf("random(",t));)a=e.indexOf(")",i),o=e.charAt(i+7)==="[",s=e.substr(i+7,a-i-7).match(o?Hf:ec),n+=e.substr(t,i-t)+rd(o?s:+s[0],o?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},ad=function(e,t,n,i,s){var a=t-e,o=i-n;return tr(s,function(l){return n+((l-e)/a*o||0)})},Jx=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=Wt(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(tn(e)&&!tn(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(h,~~g);return u[_](g-_)},n=t}else i||(e=Lr(tn(e)?[]:{},e));if(!u){for(l in t)Fc.call(o,e,l,"get",t[l]);s=function(g){return Hc(g,o)||(a?e.p:e)}}}return tr(n,s)},Rh=function(e,t,n){var i=e.labels,s=Hn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Pn=function(e,t,n){var i=e.vars,s=i[t],a=yt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qi.length&&bo(),o&&(yt=o),u=l?s.apply(c,l):s.call(c),yt=a,u},ks=function(e){return ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!en),e.progress()<1&&Pn(e,"onInterrupt"),e},os,od=[],ld=function(e){if(e)if(e=!e.name&&e.default||e,Lc()||e.headless){var t=e.name,n=At(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:oa,render:Hc,add:Fc,kill:pM,modifier:dM,rawVars:0},a={targetTest:0,get:0,getSetter:kc,aliases:{},register:0};if(bs(),e!==i){if(wn[t])return;Wn(i,Wn(Ao(e,s),a)),Lr(i.prototype,Lr(s,Ao(e,a))),wn[i.prop=t]=i,e.targetTest&&(lo.push(i),Ic[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wf(t,i),e.register&&e.register(yn,i,Mn)}else od.push(e)},ht=255,Hs={aqua:[0,ht,ht],lime:[0,ht,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ht],navy:[0,0,128],white:[ht,ht,ht],olive:[128,128,0],yellow:[ht,ht,0],orange:[ht,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ht,0,0],pink:[ht,192,203],cyan:[0,ht,ht],transparent:[ht,ht,ht,0]},Cl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*ht+.5|0},cd=function(e,t,n){var i=e?Ai(e)?[e>>16,e>>8&ht,e&ht]:0:Hs.black,s,a,o,l,c,u,f,h,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hs[e])i=Hs[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&ht,i&ht,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&ht,e&ht]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(ec),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Cl(l+1/3,s,a),i[1]=Cl(l,s,a),i[2]=Cl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(zf),n&&i.length<4&&(i[3]=1),i}else i=e.match(ec)||Hs.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/ht,a=i[1]/ht,o=i[2]/ht,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},ud=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(s){var a=s.match(as)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Ch=function(e,t,n){var i="",s=(e+i).match($i),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=cd(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=ud(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(as),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($i),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},$i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hs)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Qx=/hsl[a]?\(/,hd=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=Qx.test(t),e[1]=Ch(e[1],n),e[0]=Ch(e[0],n,ud(e[1])),!0},ca,Rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,g=function _(p){var m=r()-i,T=p===!0,x,b,P,w;if((m>e||m<0)&&(n+=m-t),i+=m,P=i-n,x=P-a,(x>0||T)&&(w=++f.frame,h=P-f.time*1e3,f.time=P=P/1e3,a+=x+(x>=s?4:s-x),b=1),T||(l=c(_)),b)for(d=0;d<o.length;d++)o[d](P,h,w,p)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Vf&&(!tc&&Lc()&&(Jn=tc=window,Dc=Jn.document||{},Un.gsap=yn,(Jn.gsapVersions||(Jn.gsapVersions=[])).push(yn.version),Gf(To||Jn.GreenSockGlobals||!Jn.gsap&&Jn||{}),od.forEach(ld)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},ca=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ca=0,c=oa},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,T){var x=m?function(b,P,w,E){p(b,P,w,E),f.remove(x)}:p;return f.remove(p),o[T?"unshift":"push"](x),bs(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},f}(),bs=function(){return!ca&&Rn.wake()},tt={},eM=/^[\d.\-M][\d.\-,\s]/,tM=/["']/g,nM=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(tM,"").trim():+c,i=l.substr(o+1).trim();return t},iM=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},rM=function(e){var t=(e+"").split("("),n=tt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nM(t[1])]:iM(e).split(",").map($f)):tt._CE&&eM.test(e)?tt._CE("",e):n},fd=function(e){return function(t){return 1-e(1-t)}},dd=function r(e,t){for(var n=e._first,i;n;)n instanceof cn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},br=function(e,t){return e&&(At(e)?e:tt[e]||rM(e))||t},Or=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return xn(e,function(o){tt[o]=Un[o]=s,tt[a=o.toLowerCase()]=n;for(var l in s)tt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=tt[o+"."+l]=s[l]}),s},pd=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Pl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ql*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Dx((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:pd(o);return s=Ql/s,l.config=function(c,u){return r(e,c,u)},l},Ll=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:pd(n);return i.config=function(s){return r(e,s)},i};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Or(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});tt.Linear.easeNone=tt.none=tt.Linear.easeIn;Or("Elastic",Pl("in"),Pl("out"),Pl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Or("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Or("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});Or("Circ",function(r){return-(Ff(1-r*r)-1)});Or("Sine",function(r){return r===1?1:-Lx(r*Cx)+1});Or("Back",Ll("in"),Ll("out"),Ll());tt.SteppedEase=tt.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-pt;return function(o){return((i*Sa(0,a,o)|0)+s)*n}}};ys.ease=tt["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nc+=r+","+r+"Params,"});var md=function(e,t){this.id=Px++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Yf,this.set=t?t.getSetter:kc},ua=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ts(this,+t.duration,1,1),this.data=t.data,yt&&(this._ctx=yt,yt.data.push(this)),ca||Rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ts(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(bs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Go(this,n),!s._dp||s.parent||jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ni(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===pt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ah(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ah(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Es(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-pt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?wo(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-pt?0:this._rts,this.totalTime(Sa(-Math.abs(this._delay),this._tDur,s),i!==!1),Vo(this),zx(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==pt&&(this._tTime-=pt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ni(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(vn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wo(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Nx);var i=en;return en=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),en=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,wh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,wh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(On(this,n),vn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,vn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-pt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-pt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this;return new Promise(function(s){var a=At(n)?n:Kf,o=function(){var c=i.then;i.then=null,At(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=c),s(a),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?o():i._prom=o})},e.kill=function(){ks(this)},r}();Wn(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-pt,_prom:0,_ps:!1,_rts:1});var cn=function(r){Of(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=vn(n.sortChildren),Tt&&ni(n.parent||Tt,_i(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Jf(_i(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return $s(0,arguments,this),this},t.from=function(i,s,a){return $s(1,arguments,this),this},t.fromTo=function(i,s,a,o){return $s(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new It(i,s,On(this,a),1),this},t.call=function(i,s,a){return ni(this,It.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new It(i,a,On(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,qs(a).immediateRender=vn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,qs(o).immediateRender=vn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Gt(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,g,_,p,m,T,x,b,P,w,E;if(this!==Tt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,b=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(h=Gt(u%p),u===l?(_=this._repeat,h=c):(_=~~(u/p),_&&_===u/p&&(h=c,_--),h>c&&(h=c)),P=Es(this._tTime,p),!o&&this._tTime&&P!==_&&this._tTime-P*p-this._dur<=0&&(P=_),w&&_&1&&(h=c-h,E=1),_!==P&&!this._lock){var L=w&&P&1,S=L===(w&&_&1);if(_<P&&(L=!L),o=L?0:u%c?c:u,this._lock=1,this.render(o||(E?0:Gt(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,S&&(this._lock=2,o=L?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;dd(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=Gx(this,Gt(o),Gt(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&!s&&!_&&(Pn(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||h>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!m){T=0,g&&(u+=this._zTime=-pt);break}}d=g}else{d=this._last;for(var v=i<0?i:h;d;){if(g=d._prev,(d._act||v<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,s,a||en&&(d._initted||d._startAt)),h!==this._time||!this._ts&&!m){T=0,g&&(u+=this._zTime=v?-pt:pt);break}}d=g}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-pt)._zTime=h>=o?1:-1,this._ts))return this._start=b,Vo(this),this.render(i,s,a);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(b===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&ji(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Pn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Ai(s)||(s=On(this,s,i)),!(i instanceof ua)){if(tn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Wt(i))return this.addLabel(i,s);if(At(i))i=It.delayedCall(0,i);else return this}return this!==i?ni(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof It?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Wt(i)?this.removeLabel(i):At(i)?this.killTweensOf(i):(Ho(this,i),i===this._recent&&(this._recent=this._last),Tr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Gt(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=On(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=It.delayedCall(0,s||oa,a);return o.data="isPause",this._hasPause=1,ni(this,o,On(this,i))},t.removePause=function(i){var s=this._first;for(i=On(this,i);s;)s._start===i&&s.data==="isPause"&&ji(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)zi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Vn(i),l=this._first,c=Ai(s),u;l;)l instanceof It?Ox(l._targets,o)&&(c?(!zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=On(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,g=It.to(a,Wn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||pt,onStart:function(){if(a.pause(),!d){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==p&&Ts(g,p,0,1).render(g._time,!0,!0),d=1}u&&u.apply(g,f||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Wn({startAt:{time:On(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Rh(this,On(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Rh(this,On(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+pt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);for(var o=this._first,l=this.labels,c;o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Tr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Tr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Hn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ni(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=u/a._ts,a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Ts(a,a===Tt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Tt._ts&&(qf(Tt,wo(i,Tt)),Xf=Rn.frame),Rn.frame>=Th){Th+=Dn.autoSleep||120;var s=Tt._first;if((!s||!s._ts)&&Dn.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},e}(ua);Wn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sM=function(e,t,n,i,s,a,o){var l=new Mn(this._pt,e,t,0,1,Sd,null,s),c=0,u=0,f,h,d,g,_,p,m,T;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=la(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),h=n.match(wl)||[];f=wl.exec(i);)g=f[0],_=i.substring(c,f.index),d?d=(d+1)%5:_.substr(-5)==="rgba("&&(d=1),g!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:g.charAt(1)==="="?fs(p,g)-p:parseFloat(g)-p,m:d&&d<4?Math.round:0},c=wl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(kf.test(i)||m)&&(l.e=0),this._pt=l,l},Fc=function(e,t,n,i,s,a,o,l,c,u){At(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:At(f)?c?e[t.indexOf("set")||!At(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=At(f)?c?uM:xd:zc,g;if(Wt(i)&&(~i.indexOf("random(")&&(i=la(i)),i.charAt(1)==="="&&(g=fs(h,i)+(Qt(h)||0),(g||g===0)&&(i=g))),!u||h!==i||lc)return!isNaN(h*i)&&i!==""?(g=new Mn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?fM:Md,0,d),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Uc(t,i),sM.call(this,e,t,h,i,d,l||Dn.stringFilter,c))},aM=function(e,t,n,i,s){if(At(e)&&(e=Ks(e,s,t,n,i)),!li(e)||e.style&&e.nodeType||tn(e)||Bf(e))return Wt(e)?Ks(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ks(e[o],s,t,n,i);return a},_d=function(e,t,n,i,s,a){var o,l,c,u;if(wn[e]&&(o=new wn[e]).init(s,o.rawVars?t[e]:aM(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Mn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==os))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},zi,lc,Bc=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,g=e._dur,_=e._startAt,p=e._targets,m=e.parent,T=m&&m.data==="nested"?m.vars.targets:p,x=e._overwrite==="auto"&&!Cc,b=e.timeline,P,w,E,L,S,v,I,N,D,H,V,q,Y;if(b&&(!h||!s)&&(s="none"),e._ease=br(s,ys.ease),e._yEase=f?fd(br(f===!0?s:f,ys.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!b&&!!i.runBackwards,!b||h&&!i.stagger){if(N=p[0]?Er(p[0]).harness:0,q=N&&i[N.prop],P=Ao(i,Ic),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!d?_.render(-1,!0):_.revert(u&&g?oo:Ix),_._lazy=0),a){if(ji(e._startAt=It.set(p,Wn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!_&&vn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en||!o&&!d)&&e._startAt.revert(oo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),E=Wn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&vn(l),immediateRender:o,stagger:0,parent:m},P),q&&(E[N.prop]=q),ji(e._startAt=It.set(p,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(en?e._startAt.revert(oo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,pt,pt);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&vn(l)||l&&!g,w=0;w<p.length;w++){if(S=p[w],I=S._gsap||Oc(p)[w]._gsap,e._ptLookup[w]=H={},nc[I.id]&&qi.length&&bo(),V=T===p?w:T.indexOf(S),N&&(D=new N).init(S,q||P,e,V,T)!==!1&&(e._pt=L=new Mn(e._pt,S,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(B){H[B]=L}),D.priority&&(v=1)),!N||q)for(E in P)wn[E]&&(D=_d(E,P,e,V,S,T))?D.priority&&(v=1):H[E]=L=Fc.call(e,S,E,"get",P[E],V,T,0,i.stringFilter);e._op&&e._op[w]&&e.kill(S,e._op[w]),x&&e._pt&&(zi=e,Tt.killTweensOf(S,H,e.globalTime(t)),Y=!e.parent,zi=0),e._pt&&l&&(nc[I.id]=1)}v&&yd(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!Y,h&&t<=0&&b.render(Hn,!0,!0)},oM=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return lc=1,e.vars[t]="+=0",Bc(e,o),lc=0,l?aa(t+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Rt(n)+Qt(f.e)),f.b&&(f.b=u.s+Qt(f.b))},lM=function(e,t){var n=e[0]?Er(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Lr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},cM=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(tn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ks=function(e,t,n,i,s){return At(e)?e.call(t,n,i,s):Wt(e)&&~e.indexOf("random(")?la(e):e},gd=Nc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vd={};xn(gd+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return vd[r]=1});var It=function(r){Of(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:qs(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,g=l.keyframes,_=l.defaults,p=l.scrollTrigger,m=l.yoyoEase,T=i.parent||Tt,x=(tn(n)||Bf(n)?Ai(n[0]):"length"in i)?[n]:Vn(n),b,P,w,E,L,S,v,I;if(o._targets=x.length?Oc(x):aa("GSAP target "+n+" not found. https://gsap.com",!Dn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,g||h||qa(c)||qa(u)){if(i=o.vars,b=o.timeline=new cn({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:x}),b.kill(),b.parent=b._dp=_i(o),b._start=0,h||qa(c)||qa(u)){if(E=x.length,v=h&&nd(h),li(h))for(L in h)~gd.indexOf(L)&&(I||(I={}),I[L]=h[L]);for(P=0;P<E;P++)w=Ao(i,vd),w.stagger=0,m&&(w.yoyoEase=m),I&&Lr(w,I),S=x[P],w.duration=+Ks(c,_i(o),P,S,x),w.delay=(+Ks(u,_i(o),P,S,x)||0)-o._delay,!h&&E===1&&w.delay&&(o._delay=u=w.delay,o._start+=u,w.delay=0),b.to(S,w,v?v(P,S,x):0),b._ease=tt.none;b.duration()?c=u=0:o.timeline=0}else if(g){qs(Wn(b.vars.defaults,{ease:"none"})),b._ease=br(g.ease||i.ease||"none");var N=0,D,H,V;if(tn(g))g.forEach(function(q){return b.to(x,q,">")}),b.duration();else{w={};for(L in g)L==="ease"||L==="easeEach"||cM(L,g[L],w,g.easeEach);for(L in w)for(D=w[L].sort(function(q,Y){return q.t-Y.t}),N=0,P=0;P<D.length;P++)H=D[P],V={ease:H.e,duration:(H.t-(P?D[P-1].t:0))/100*c},V[L]=H.v,b.to(x,V,N),N+=V.duration;b.duration()<c&&b.to({},{duration:c-b.duration()})}}c||o.duration(c=b.duration())}else o.timeline=0;return d===!0&&!Cc&&(zi=_i(o),Tt.killTweensOf(x),zi=0),ni(T,_i(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Gt(T._time)&&vn(f)&&kx(_i(o))&&T.data!=="nested")&&(o._tTime=-pt,o.render(Math.max(0,-u)||0)),p&&Jf(_i(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-pt&&!u?l:i<pt?0:i,h,d,g,_,p,m,T,x,b;if(!c)Vx(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u){if(h=f,x=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Gt(f%_),f===l?(g=this._repeat,h=c):(g=~~(f/_),g&&g===Gt(f/_)&&(h=c,g--),h>c&&(h=c)),m=this._yoyo&&g&1,m&&(b=this._yEase,h=c-h),p=Es(this._tTime,_),h===o&&!a&&this._initted&&g===p)return this._tTime=f,this;g!==p&&(x&&this._yEase&&dd(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&this._time!==_&&this._initted&&(this._lock=a=1,this.render(Gt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Qf(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(b||this._ease)(h/c),this._from&&(this.ratio=T=1-T),h&&!o&&!s&&!g&&(Pn(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&ic(this,i,s,a),Pn(this,"onUpdate")),this._repeat&&g!==p&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&ic(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ji(this,1),!s&&!(u&&!o)&&(f||o||m)&&(Pn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){ca||Rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Bc(this,c),u=this._ease(c/this._dur),oM(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Go(this,0),this.parent||Zf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ks(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,zi&&zi.vars.overwrite!==!0)._first||ks(this),this.parent&&a!==this.timeline.totalDuration()&&Ts(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Vn(i):o,c=this._ptLookup,u=this._pt,f,h,d,g,_,p,m;if((!s||s==="all")&&Bx(o,l))return s==="all"&&(this._pt=0),ks(this);for(f=this._op=this._op||[],s!=="all"&&(Wt(s)&&(_={},xn(s,function(T){return _[T]=1}),s=_),s=lM(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){h=c[m],s==="all"?(f[m]=s,g=h,d={}):(d=f[m]=f[m]||{},g=s);for(_ in g)p=h&&h[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&Ho(this,p,"_pt"),delete h[_]),d!=="all"&&(d[_]=1)}return this._initted&&!this._pt&&u&&ks(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $s(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return $s(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Tt.killTweensOf(i,s,a)},e}(ua);Wn(It.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(r){It[r]=function(){var e=new cn,t=sc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var zc=function(e,t,n){return e[t]=n},xd=function(e,t,n){return e[t](n)},uM=function(e,t,n,i){return e[t](i.fp,n)},hM=function(e,t,n){return e.setAttribute(t,n)},kc=function(e,t){return At(e[t])?xd:Pc(e[t])&&e.setAttribute?hM:zc},Md=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},fM=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sd=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Hc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},dM=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},pM=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ho(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mM=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},yd=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Mn=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Md,this.d=l||this,this.set=c||zc,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=mM,this.m=n,this.mt=s,this.tween=i},r}();xn(Nc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Ic[r]=1});Un.TweenMax=Un.TweenLite=It;Un.TimelineLite=Un.TimelineMax=cn;Tt=new cn({sortChildren:!1,defaults:ys,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Dn.stringFilter=hd;var Ar=[],co={},_M=[],Ph=0,gM=0,Dl=function(e){return(co[e]||_M).map(function(t){return t()})},cc=function(){var e=Date.now(),t=[];e-Ph>2&&(Dl("matchMediaInit"),Ar.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Jn.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Dl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ph=e,Dl("matchMedia"))},Ed=function(){function r(t,n){this.selector=n&&ac(n),this.data=[],this._r=[],this.isReverted=!1,this.id=gM++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){At(n)&&(s=i,i=n,n=At);var a=this,o=function(){var c=yt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=ac(s)),yt=a,f=i.apply(a,arguments),At(f)&&a._r.push(f),yt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===At?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=yt;yt=null,n(this),yt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof It&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof cn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof It)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ar.length;a--;)Ar[a].id===this.id&&Ar.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),vM=function(){function r(t){this.contexts=[],this.scope=t,yt&&yt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){li(n)||(n={matches:n});var a=new Ed(0,s||this.scope),o=a.conditions={},l,c,u;yt&&!a.selector&&(a.selector=yt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Jn.matchMedia(n[c]),l&&(Ar.indexOf(a)<0&&Ar.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(cc):l.addEventListener("change",cc)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),Ro={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return ld(i)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return Tt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=Vn(e)[0]);var s=Er(e||{}).get,a=n?Kf:$f;return n==="native"&&(n=""),e&&(t?a((wn[t]&&wn[t].get||s)(e,t,n,i)):function(o,l,c){return a((wn[o]&&wn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Vn(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=wn[t],o=Er(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;os._pt=0,f.init(e,n?u+n:u,os,0,[e]),f.render(1,f),os._pt&&Hc(1,os)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,Lr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Tt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=br(e.ease,ys.ease)),bh(ys,e||{})},config:function(e){return bh(Dn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!wn[o]&&!Un[o]&&aa(t+" effect requires "+o+" plugin.")}),Rl[t]=function(o,l,c){return n(Vn(o),Wn(l||{},s),c)},a&&(cn.prototype[t]=function(o,l,c){return this.add(Rl[t](o,li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){tt[e]=br(t)},parseEase:function(e,t){return arguments.length?br(e,t):tt},getById:function(e){return Tt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new cn(e),i,s;for(n.smoothChildTiming=vn(e.smoothChildTiming),Tt.remove(n),n._dp=0,n._time=n._tTime=Tt._time,i=Tt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof It&&i.vars.onComplete===i._targets[0]))&&ni(n,i,i._start-i._delay),i=s;return ni(Tt,n,0),n},context:function(e,t){return e?new Ed(e,t):yt},matchMedia:function(e){return new vM(e)},matchMediaRefresh:function(){return Ar.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||cc()},addEventListener:function(e,t){var n=co[e]||(co[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=co[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Zx,wrapYoyo:jx,distribute:nd,random:rd,snap:id,normalize:Kx,getUnit:Qt,clamp:Xx,splitColor:cd,toArray:Vn,selector:ac,mapRange:ad,pipe:qx,unitize:$x,interpolate:Jx,shuffle:td},install:Gf,effects:Rl,ticker:Rn,updateRoot:cn.updateRoot,plugins:wn,globalTimeline:Tt,core:{PropTween:Mn,globals:Wf,Tween:It,Timeline:cn,Animation:ua,getCache:Er,_removeLinkedListItem:Ho,reverting:function(){return en},context:function(e){return e&&yt&&(yt.data.push(e),e._ctx=yt),yt},suppressOverwrites:function(e){return Cc=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ro[r]=It[r]});Rn.add(cn.updateRoot);os=Ro.to({},{duration:0});var xM=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},MM=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=xM(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Ul=function(e,t){return{name:e,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Wt(s)&&(l={},xn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}MM(o,s)}}}},yn=Ro.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)en?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Ul("roundProps",oc),Ul("modifiers"),Ul("snap",id))||Ro;It.version=cn.version=yn.version="3.12.5";Vf=1;Lc()&&bs();tt.Power0;tt.Power1;tt.Power2;tt.Power3;tt.Power4;tt.Linear;tt.Quad;tt.Cubic;tt.Quart;tt.Quint;tt.Strong;tt.Elastic;tt.Back;tt.SteppedEase;tt.Bounce;tt.Sine;tt.Expo;tt.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lh,ki,ds,Vc,Mr,Dh,Gc,SM=function(){return typeof window<"u"},wi={},dr=180/Math.PI,ps=Math.PI/180,es=Math.atan2,Uh=1e8,Wc=/([A-Z])/g,yM=/(left|right|width|margin|padding|x)/i,EM=/[\s,\(]\S/,ri={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},uc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TM=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bM=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AM=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Td=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},bd=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},wM=function(e,t,n){return e.style[t]=n},RM=function(e,t,n){return e.style.setProperty(t,n)},CM=function(e,t,n){return e._gsap[t]=n},PM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},LM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},DM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},bt="transform",Sn=bt+"Origin",UM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in wi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ri[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=gi(i,o)}):this.tfm[e]=a.x?a[e]:gi(i,e),e===Sn&&(this.tfm.zOrigin=a.zOrigin);else return ri.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(bt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=bt}(s||t)&&this.props.push(e,t,s[e])},Ad=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},IM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Wc,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Gc(),(!s||!s.isStart)&&!n[bt]&&(Ad(n),i.zOrigin&&n[Sn]&&(n[Sn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},wd=function(e,t){var n={target:e,props:[],revert:IM,save:UM};return e._gsap||yn.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},Rd,hc=function(e,t){var n=ki.createElementNS?ki.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ki.createElement(e);return n&&n.style?n:ki.createElement(e)},ai=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Wc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,As(t)||t,1)||""},Ih="O,Moz,ms,Ms,Webkit".split(","),As=function(e,t,n){var i=t||Mr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ih[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ih[a]:"")+e},fc=function(){SM()&&window.document&&(Lh=window,ki=Lh.document,ds=ki.documentElement,Mr=hc("div")||{style:{}},hc("div"),bt=As(bt),Sn=bt+"Origin",Mr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Rd=!!As("perspective"),Gc=yn.core.reverting,Vc=1)},Il=function r(e){var t=hc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,a;if(ds.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ds.removeChild(t),this.style.cssText=s,a},Nh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Cd=function(e){var t;try{t=e.getBBox()}catch{t=Il.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Il||(t=Il.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Nh(e,["x","cx","x1"])||0,y:+Nh(e,["y","cy","y1"])||0,width:0,height:0}:t},Pd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cd(e))},Dr=function(e,t){if(t){var n=e.style,i;t in wi&&t!==Sn&&(t=bt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Wc,"-$1").toLowerCase())):n.removeAttribute(t)}},Hi=function(e,t,n,i,s,a){var o=new Mn(e._pt,t,n,0,1,a?bd:Td);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Oh={deg:1,rad:1,turn:1},NM={grid:1,flex:1},Ji=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Mr.style,l=yM.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",g,_,p,m;if(i===a||!s||Oh[i]||Oh[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),m=e.getCTM&&Pd(e),(d||a==="%")&&(wi[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[u],Rt(d?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(h?a:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===ki||!_.appendChild)&&(_=ki.body),p=_._gsap,p&&d&&p.width&&l&&p.time===Rn.time&&!p.uncache)return Rt(s/p.width*f);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+i,g=e[u],T?e.style[t]=T:Dr(e,t)}else(d||a==="%")&&!NM[ai(_,"display")]&&(o.position=ai(e,"position")),_===e&&(o.position="static"),_.appendChild(Mr),g=Mr[u],_.removeChild(Mr),o.position="absolute";return l&&d&&(p=Er(_),p.time=Rn.time,p.width=_[u]),Rt(h?g*s/f:g&&s?f/g*s:0)},gi=function(e,t,n,i){var s;return Vc||fc(),t in ri&&t!=="transform"&&(t=ri[t],~t.indexOf(",")&&(t=t.split(",")[0])),wi[t]&&t!=="transform"?(s=fa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Po(ai(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Co[t]&&Co[t](e,t,n)||ai(e,t)||Yf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Ji(e,t,s,n)+n:s},OM=function(e,t,n,i){if(!n||n==="none"){var s=As(t,e,1),a=s&&ai(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=ai(e,"borderTopColor"))}var o=new Mn(this._pt,e.style,t,0,1,Sd),l=0,c=0,u,f,h,d,g,_,p,m,T,x,b,P;if(o.b=n,o.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=ai(e,t)||i,_?e.style[t]=_:Dr(e,t)),u=[n,i],hd(u),n=u[0],i=u[1],h=n.match(as)||[],P=i.match(as)||[],P.length){for(;f=as.exec(i);)p=f[0],T=i.substring(l,f.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),p!==(_=h[c++]||"")&&(d=parseFloat(_)||0,b=_.substr((d+"").length),p.charAt(1)==="="&&(p=fs(d,p)+b),m=parseFloat(p),x=p.substr((m+"").length),l=as.lastIndex-x.length,x||(x=x||Dn.units[t]||b,l===i.length&&(i+=x,o.e+=x)),b!==x&&(d=Ji(e,t,_,x)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?bd:Td;return kf.test(i)&&(o.e=0),this._pt=o,o},Fh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Fh[n]||n,t[1]=Fh[i]||i,t.join(" ")},BM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],wi[o]&&(l=1,o=o==="transformOrigin"?Sn:bt),Dr(n,o);l&&(Dr(n,bt),a&&(a.svg&&n.removeAttribute("transform"),fa(n,1),a.uncache=1,Ad(i)))}},Co={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Mn(e._pt,t,n,0,0,BM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ha=[1,0,0,1,0,0],Ld={},Dd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Bh=function(e){var t=ai(e,bt);return Dd(t)?ha:t.substr(7).match(zf).map(Rt)},Xc=function(e,t){var n=e._gsap||Er(e),i=e.style,s=Bh(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ha:s):(s===ha&&!e.offsetParent&&e!==ds&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(c=1,o=e.nextElementSibling,ds.appendChild(e)),s=Bh(e),l?i.display=l:Dr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},dc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Xc(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],g=l[1],_=l[2],p=l[3],m=l[4],T=l[5],x=t.split(" "),b=parseFloat(x[0])||0,P=parseFloat(x[1])||0,w,E,L,S;n?l!==ha&&(E=d*p-g*_)&&(L=b*(p/E)+P*(-_/E)+(_*T-p*m)/E,S=b*(-g/E)+P*(d/E)-(d*T-g*m)/E,b=L,P=S):(w=Cd(e),b=w.x+(~x[0].indexOf("%")?b/100*w.width:b),P=w.y+(~(x[1]||x[0]).indexOf("%")?P/100*w.height:P)),i||i!==!1&&o.smooth?(m=b-c,T=P-u,o.xOffset=f+(m*d+T*_)-m,o.yOffset=h+(m*g+T*p)-T):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=P,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Sn]="0px 0px",a&&(Hi(a,o,"xOrigin",c,b),Hi(a,o,"yOrigin",u,P),Hi(a,o,"xOffset",f,o.xOffset),Hi(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",b+" "+P)},fa=function(e,t){var n=e._gsap||new md(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=ai(e,Sn)||"0",u,f,h,d,g,_,p,m,T,x,b,P,w,E,L,S,v,I,N,D,H,V,q,Y,B,j,R,se,Ue,Ye,W,Q;return u=f=h=_=p=m=T=x=b=0,d=g=1,n.svg=!!(e.getCTM&&Pd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[bt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[bt]!=="none"?l[bt]:"")),i.scale=i.rotate=i.translate="none"),E=Xc(e,n.svg),n.svg&&(n.uncache?(B=e.getBBox(),c=n.xOrigin-B.x+"px "+(n.yOrigin-B.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),dc(e,Y||c,!!Y||n.originIsAbsolute,n.smooth!==!1,E)),P=n.xOrigin||0,w=n.yOrigin||0,E!==ha&&(I=E[0],N=E[1],D=E[2],H=E[3],u=V=E[4],f=q=E[5],E.length===6?(d=Math.sqrt(I*I+N*N),g=Math.sqrt(H*H+D*D),_=I||N?es(N,I)*dr:0,T=D||H?es(D,H)*dr+_:0,T&&(g*=Math.abs(Math.cos(T*ps))),n.svg&&(u-=P-(P*I+w*D),f-=w-(P*N+w*H))):(Q=E[6],Ye=E[7],R=E[8],se=E[9],Ue=E[10],W=E[11],u=E[12],f=E[13],h=E[14],L=es(Q,Ue),p=L*dr,L&&(S=Math.cos(-L),v=Math.sin(-L),Y=V*S+R*v,B=q*S+se*v,j=Q*S+Ue*v,R=V*-v+R*S,se=q*-v+se*S,Ue=Q*-v+Ue*S,W=Ye*-v+W*S,V=Y,q=B,Q=j),L=es(-D,Ue),m=L*dr,L&&(S=Math.cos(-L),v=Math.sin(-L),Y=I*S-R*v,B=N*S-se*v,j=D*S-Ue*v,W=H*v+W*S,I=Y,N=B,D=j),L=es(N,I),_=L*dr,L&&(S=Math.cos(L),v=Math.sin(L),Y=I*S+N*v,B=V*S+q*v,N=N*S-I*v,q=q*S-V*v,I=Y,V=B),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,m=180-m),d=Rt(Math.sqrt(I*I+N*N+D*D)),g=Rt(Math.sqrt(q*q+Q*Q)),L=es(V,q),T=Math.abs(L)>2e-4?L*dr:0,b=W?1/(W<0?-W:W):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Dd(ai(e,bt)),Y&&e.setAttribute("transform",Y))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Rt(d),n.scaleY=Rt(g),n.rotation=Rt(_)+o,n.rotationX=Rt(p)+o,n.rotationY=Rt(m)+o,n.skewX=T+o,n.skewY=x+o,n.transformPerspective=b+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Sn]=Po(c)),n.xOffset=n.yOffset=0,n.force3D=Dn.force3D,n.renderTransform=n.svg?kM:Rd?Ud:zM,n.uncache=0,n},Po=function(e){return(e=e.split(" "))[0]+" "+e[1]},Nl=function(e,t,n){var i=Qt(t);return Rt(parseFloat(t)+parseFloat(Ji(e,"x",n+"px",i)))+i},zM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ud(e,t)},cr="0deg",Os="0px",ur=") ",Ud=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,g=n.scaleX,_=n.scaleY,p=n.transformPerspective,m=n.force3D,T=n.target,x=n.zOrigin,b="",P=m==="auto"&&e&&e!==1||m===!0;if(x&&(f!==cr||u!==cr)){var w=parseFloat(u)*ps,E=Math.sin(w),L=Math.cos(w),S;w=parseFloat(f)*ps,S=Math.cos(w),a=Nl(T,a,E*S*-x),o=Nl(T,o,-Math.sin(w)*-x),l=Nl(T,l,L*S*-x+x)}p!==Os&&(b+="perspective("+p+ur),(i||s)&&(b+="translate("+i+"%, "+s+"%) "),(P||a!==Os||o!==Os||l!==Os)&&(b+=l!==Os||P?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ur),c!==cr&&(b+="rotate("+c+ur),u!==cr&&(b+="rotateY("+u+ur),f!==cr&&(b+="rotateX("+f+ur),(h!==cr||d!==cr)&&(b+="skew("+h+", "+d+ur),(g!==1||_!==1)&&(b+="scale("+g+", "+_+ur),T.style[bt]=b||"translate(0, 0)"},kM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,g=n.xOrigin,_=n.yOrigin,p=n.xOffset,m=n.yOffset,T=n.forceCSS,x=parseFloat(a),b=parseFloat(o),P,w,E,L,S;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ps,c*=ps,P=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-c)*-h,L=Math.cos(l-c)*h,c&&(u*=ps,S=Math.tan(c-u),S=Math.sqrt(1+S*S),E*=S,L*=S,u&&(S=Math.tan(u),S=Math.sqrt(1+S*S),P*=S,w*=S)),P=Rt(P),w=Rt(w),E=Rt(E),L=Rt(L)):(P=f,L=h,w=E=0),(x&&!~(a+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(x=Ji(d,"x",a,"px"),b=Ji(d,"y",o,"px")),(g||_||p||m)&&(x=Rt(x+g-(g*P+_*E)+p),b=Rt(b+_-(g*w+_*L)+m)),(i||s)&&(S=d.getBBox(),x=Rt(x+i/100*S.width),b=Rt(b+s/100*S.height)),S="matrix("+P+","+w+","+E+","+L+","+x+","+b+")",d.setAttribute("transform",S),T&&(d.style[bt]=S)},HM=function(e,t,n,i,s){var a=360,o=Wt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?dr:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Uh)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Uh)%a-~~(c/a)*a)),e._pt=h=new Mn(e._pt,t,n,i,c,TM),h.e=u,h.u="deg",e._props.push(n),h},zh=function(e,t){for(var n in t)e[n]=t[n];return e},VM=function(e,t,n){var i=zh({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[bt]=t,o=fa(n,1),Dr(n,bt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[bt],a[bt]=t,o=fa(n,1),a[bt]=c);for(l in wi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Qt(c),g=Qt(u),f=d!==g?Ji(n,l,c,g):parseFloat(c),h=parseFloat(u),e._pt=new Mn(e._pt,o,l,f,h-f,uc),e._pt.u=g||0,e._props.push(l));zh(o,i)};xn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});Co[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(g){return gi(o,g,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(g,_){return d[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(l,d,f)}});var Id={name:"css",register:fc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,g,_,p,m,T,x,b,P,w,E,L;Vc||fc(),this.styles=this.styles||wd(e),L=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(wn[_]&&_d(_,t,n,i,e,s)))){if(d=typeof u,g=Co[_],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=la(u)),g)g(this,e,_,u,n)&&(E=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=Qt(c),m=Qt(u)),m?p!==m&&(c=Ji(e,_,c,m)+m):p&&(u+=p),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),L.push(_,0,o[_]);else if(d!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Wt(c)&&~c.indexOf("random(")&&(c=la(c)),Qt(c+"")||c==="auto"||(c+=Dn.units[_]||Qt(gi(e,_))||""),(c+"").charAt(1)==="="&&(c=gi(e,_))):c=gi(e,_),h=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),_ in ri&&(_==="autoAlpha"&&(h===1&&gi(e,"visibility")==="hidden"&&f&&(h=0),L.push("visibility",0,o.visibility),Hi(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=ri[_],~_.indexOf(",")&&(_=_.split(",")[0]))),x=_ in wi,x){if(this.styles.save(_),b||(P=e._gsap,P.renderTransform&&!t.parseTransform||fa(e,t.parseTransform),w=t.smoothOrigin!==!1&&P.smooth,b=this._pt=new Mn(this._pt,o,bt,0,1,P.renderTransform,P,0,-1),b.dep=1),_==="scale")this._pt=new Mn(this._pt,P,"scaleY",P.scaleY,(T?fs(P.scaleY,T+f):f)-P.scaleY||0,uc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){L.push(Sn,0,o[Sn]),u=FM(u),P.svg?dc(e,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==P.zOrigin&&Hi(this,P,"zOrigin",P.zOrigin,m),Hi(this,o,_,Po(c),Po(u)));continue}else if(_==="svgOrigin"){dc(e,u,1,w,0,this);continue}else if(_ in Ld){HM(this,P,_,h,T?fs(h,T+u):u);continue}else if(_==="smoothOrigin"){Hi(this,P,"smooth",P.smooth,u);continue}else if(_==="force3D"){P[_]=u;continue}else if(_==="transform"){VM(this,u,e);continue}}else _ in o||(_=As(_)||_);if(x||(f||f===0)&&(h||h===0)&&!EM.test(u)&&_ in o)p=(c+"").substr((h+"").length),f||(f=0),m=Qt(u)||(_ in Dn.units?Dn.units[_]:p),p!==m&&(h=Ji(e,_,c,m)),this._pt=new Mn(this._pt,x?P:o,_,h,(T?fs(h,T+f):f)-h,!x&&(m==="px"||_==="zIndex")&&t.autoRound!==!1?AM:uc),this._pt.u=m||0,p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=bM);else if(_ in o)OM.call(this,e,_,c,T?T+u:u);else if(_ in e)this.add(e,_,c||e[_],T?T+u:u,i,s);else if(_!=="parseTransform"){Uc(_,u);continue}x||(_ in o?L.push(_,0,o[_]):L.push(_,1,c||e[_])),a.push(_)}}E&&yd(this)},render:function(e,t){if(t.tween._time||!Gc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:gi,aliases:ri,getSetter:function(e,t,n){var i=ri[t];return i&&i.indexOf(",")<0&&(t=i),t in wi&&t!==Sn&&(e._gsap.x||gi(e,"x"))?n&&Dh===n?t==="scale"?PM:CM:(Dh=n||{})&&(t==="scale"?LM:DM):e.style&&!Pc(e.style[t])?wM:~t.indexOf("-")?RM:kc(e,t)},core:{_removeProperty:Dr,_getMatrix:Xc}};yn.utils.checkPrefix=As;yn.core.getStyleSaver=wd;(function(r,e,t,n){var i=xn(r+","+e+","+t,function(s){wi[s]=1});xn(e,function(s){Dn.units[s]="deg",Ld[s]=1}),ri[i[13]]=r+","+e,xn(n,function(s){var a=s.split(":");ri[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Dn.units[r]="px"});yn.registerPlugin(Id);var Nd=yn.registerPlugin(Id)||yn;Nd.core.Tween;function kh(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function GM(r,e,t){return e&&kh(r.prototype,e),t&&kh(r,t),r}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Yt,uo,Cn,Vi,Gi,ms,Od,pr,Zs,Fd,yi,$n,Bd,zd=function(){return Yt||typeof window<"u"&&(Yt=window.gsap)&&Yt.registerPlugin&&Yt},kd=1,ls=[],Je=[],oi=[],js=Date.now,pc=function(e,t){return t},WM=function(){var e=Zs.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Je),i.push.apply(i,oi),Je=n,oi=i,pc=function(a,o){return t[a](o)}},Ki=function(e,t){return~oi.indexOf(e)&&oi[oi.indexOf(e)+1][t]},Js=function(e){return!!~Fd.indexOf(e)},rn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},nn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},$a="scrollLeft",Ka="scrollTop",mc=function(){return yi&&yi.isPressed||Je.cache++},Lo=function(e,t){var n=function i(s){if(s||s===0){kd&&(Cn.history.scrollRestoration="manual");var a=yi&&yi.isPressed;s=i.v=Math.round(s)||(yi&&yi.iOS?1:0),e(s),i.cacheID=Je.cache,a&&pc("ss",s)}else(t||Je.cache!==i.cacheID||pc("ref"))&&(i.cacheID=Je.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},un={s:$a,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Lo(function(r){return arguments.length?Cn.scrollTo(r,Ft.sc()):Cn.pageXOffset||Vi[$a]||Gi[$a]||ms[$a]||0})},Ft={s:Ka,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:un,sc:Lo(function(r){return arguments.length?Cn.scrollTo(un.sc(),r):Cn.pageYOffset||Vi[Ka]||Gi[Ka]||ms[Ka]||0})},pn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Yt.utils.toArray)(e)[0]||(typeof e=="string"&&Yt.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Qi=function(e,t){var n=t.s,i=t.sc;Js(e)&&(e=Vi.scrollingElement||Gi);var s=Je.indexOf(e),a=i===Ft.sc?1:2;!~s&&(s=Je.push(e)-1),Je[s+a]||rn(e,"scroll",mc);var o=Je[s+a],l=o||(Je[s+a]=Lo(Ki(e,n),!0)||(Js(e)?i:Lo(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Yt.getProperty(e,"scrollBehavior")==="smooth"),l},_c=function(e,t,n){var i=e,s=e,a=js(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var p=js();_||p-a>l?(s=i,i=g,o=a,a=p):n?i+=g:i=s+(g-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(g){var _=o,p=s,m=js();return(g||g===0)&&g!==i&&u(g),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-_)*1e3};return{update:u,reset:f,getVelocity:h}},Fs=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Hh=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Hd=function(){Zs=Yt.core.globals().ScrollTrigger,Zs&&Zs.core&&WM()},Vd=function(e){return Yt=e||zd(),!uo&&Yt&&typeof document<"u"&&document.body&&(Cn=window,Vi=document,Gi=Vi.documentElement,ms=Vi.body,Fd=[Cn,Vi,Gi,ms],Yt.utils.clamp,Bd=Yt.core.context||function(){},pr="onpointerenter"in ms?"pointer":"mouse",Od=Ct.isTouch=Cn.matchMedia&&Cn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Cn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,$n=Ct.eventTypes=("ontouchstart"in Gi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kd=0},500),Hd(),uo=1),uo};un.op=Ft;Je.cache=0;var Ct=function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){uo||Vd(Yt)||console.warn("Please gsap.registerPlugin(Observer)"),Zs||Hd();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,_=n.event,p=n.onDragStart,m=n.onDragEnd,T=n.onDrag,x=n.onPress,b=n.onRelease,P=n.onRight,w=n.onLeft,E=n.onUp,L=n.onDown,S=n.onChangeX,v=n.onChangeY,I=n.onChange,N=n.onToggleX,D=n.onToggleY,H=n.onHover,V=n.onHoverEnd,q=n.onMove,Y=n.ignoreCheck,B=n.isNormalizer,j=n.onGestureStart,R=n.onGestureEnd,se=n.onWheel,Ue=n.onEnable,Ye=n.onDisable,W=n.onClick,Q=n.scrollSpeed,le=n.capture,ne=n.allowClicks,Ee=n.lockAxis,be=n.onLockAxis;this.target=o=pn(o)||Gi,this.vars=n,d&&(d=Yt.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Q=Q||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Cn.getComputedStyle(ms).lineHeight)||22);var ze,O,Ne,ae,ke,Se,He,M=this,y=0,G=0,$=n.passive||!u,K=Qi(o,un),J=Qi(o,Ft),Ae=K(),te=J(),fe=~a.indexOf("touch")&&!~a.indexOf("pointer")&&$n[0]==="pointerdown",we=Js(o),ee=o.ownerDocument||Vi,ue=[0,0,0],Re=[0,0,0],de=0,ge=function(){return de=js()},Ce=function(Me,Xe){return(M.event=Me)&&d&&~d.indexOf(Me.target)||Xe&&fe&&Me.pointerType!=="touch"||Y&&Y(Me,Xe)},qe=function(){M._vx.reset(),M._vy.reset(),O.pause(),f&&f(M)},$e=function(){var Me=M.deltaX=Hh(ue),Xe=M.deltaY=Hh(Re),oe=Math.abs(Me)>=i,Fe=Math.abs(Xe)>=i;I&&(oe||Fe)&&I(M,Me,Xe,ue,Re),oe&&(P&&M.deltaX>0&&P(M),w&&M.deltaX<0&&w(M),S&&S(M),N&&M.deltaX<0!=y<0&&N(M),y=M.deltaX,ue[0]=ue[1]=ue[2]=0),Fe&&(L&&M.deltaY>0&&L(M),E&&M.deltaY<0&&E(M),v&&v(M),D&&M.deltaY<0!=G<0&&D(M),G=M.deltaY,Re[0]=Re[1]=Re[2]=0),(ae||Ne)&&(q&&q(M),Ne&&(T(M),Ne=!1),ae=!1),Se&&!(Se=!1)&&be&&be(M),ke&&(se(M),ke=!1),ze=0},je=function(Me,Xe,oe){ue[oe]+=Me,Re[oe]+=Xe,M._vx.update(Me),M._vy.update(Xe),c?ze||(ze=requestAnimationFrame($e)):$e()},rt=function(Me,Xe){Ee&&!He&&(M.axis=He=Math.abs(Me)>Math.abs(Xe)?"x":"y",Se=!0),He!=="y"&&(ue[2]+=Me,M._vx.update(Me,!0)),He!=="x"&&(Re[2]+=Xe,M._vy.update(Xe,!0)),c?ze||(ze=requestAnimationFrame($e)):$e()},_e=function(Me){if(!Ce(Me,1)){Me=Fs(Me,u);var Xe=Me.clientX,oe=Me.clientY,Fe=Xe-M.x,Le=oe-M.y,Oe=M.isDragging;M.x=Xe,M.y=oe,(Oe||Math.abs(M.startX-Xe)>=s||Math.abs(M.startY-oe)>=s)&&(T&&(Ne=!0),Oe||(M.isDragging=!0),rt(Fe,Le),Oe||p&&p(M))}},C=M.onPress=function(Pe){Ce(Pe,1)||Pe&&Pe.button||(M.axis=He=null,O.pause(),M.isPressed=!0,Pe=Fs(Pe),y=G=0,M.startX=M.x=Pe.clientX,M.startY=M.y=Pe.clientY,M._vx.reset(),M._vy.reset(),rn(B?o:ee,$n[1],_e,$,!0),M.deltaX=M.deltaY=0,x&&x(M))},Z=M.onRelease=function(Pe){if(!Ce(Pe,1)){nn(B?o:ee,$n[1],_e,!0);var Me=!isNaN(M.y-M.startY),Xe=M.isDragging,oe=Xe&&(Math.abs(M.x-M.startX)>3||Math.abs(M.y-M.startY)>3),Fe=Fs(Pe);!oe&&Me&&(M._vx.reset(),M._vy.reset(),u&&ne&&Yt.delayedCall(.08,function(){if(js()-de>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(ee.createEvent){var Le=ee.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,Cn,1,Fe.screenX,Fe.screenY,Fe.clientX,Fe.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(Le)}}})),M.isDragging=M.isGesturing=M.isPressed=!1,f&&Xe&&!B&&O.restart(!0),m&&Xe&&m(M),b&&b(M,oe)}},re=function(Me){return Me.touches&&Me.touches.length>1&&(M.isGesturing=!0)&&j(Me,M.isDragging)},pe=function(){return(M.isGesturing=!1)||R(M)},ve=function(Me){if(!Ce(Me)){var Xe=K(),oe=J();je((Xe-Ae)*Q,(oe-te)*Q,1),Ae=Xe,te=oe,f&&O.restart(!0)}},Ke=function(Me){if(!Ce(Me)){Me=Fs(Me,u),se&&(ke=!0);var Xe=(Me.deltaMode===1?l:Me.deltaMode===2?Cn.innerHeight:1)*g;je(Me.deltaX*Xe,Me.deltaY*Xe,0),f&&!B&&O.restart(!0)}},nt=function(Me){if(!Ce(Me)){var Xe=Me.clientX,oe=Me.clientY,Fe=Xe-M.x,Le=oe-M.y;M.x=Xe,M.y=oe,ae=!0,f&&O.restart(!0),(Fe||Le)&&rt(Fe,Le)}},ot=function(Me){M.event=Me,H(M)},ft=function(Me){M.event=Me,V(M)},st=function(Me){return Ce(Me)||Fs(Me,u)&&W(M)};O=M._dc=Yt.delayedCall(h||.25,qe).pause(),M.deltaX=M.deltaY=0,M._vx=_c(0,50,!0),M._vy=_c(0,50,!0),M.scrollX=K,M.scrollY=J,M.isDragging=M.isGesturing=M.isPressed=!1,Bd(this),M.enable=function(Pe){return M.isEnabled||(rn(we?ee:o,"scroll",mc),a.indexOf("scroll")>=0&&rn(we?ee:o,"scroll",ve,$,le),a.indexOf("wheel")>=0&&rn(o,"wheel",Ke,$,le),(a.indexOf("touch")>=0&&Od||a.indexOf("pointer")>=0)&&(rn(o,$n[0],C,$,le),rn(ee,$n[2],Z),rn(ee,$n[3],Z),ne&&rn(o,"click",ge,!0,!0),W&&rn(o,"click",st),j&&rn(ee,"gesturestart",re),R&&rn(ee,"gestureend",pe),H&&rn(o,pr+"enter",ot),V&&rn(o,pr+"leave",ft),q&&rn(o,pr+"move",nt)),M.isEnabled=!0,Pe&&Pe.type&&C(Pe),Ue&&Ue(M)),M},M.disable=function(){M.isEnabled&&(ls.filter(function(Pe){return Pe!==M&&Js(Pe.target)}).length||nn(we?ee:o,"scroll",mc),M.isPressed&&(M._vx.reset(),M._vy.reset(),nn(B?o:ee,$n[1],_e,!0)),nn(we?ee:o,"scroll",ve,le),nn(o,"wheel",Ke,le),nn(o,$n[0],C,le),nn(ee,$n[2],Z),nn(ee,$n[3],Z),nn(o,"click",ge,!0),nn(o,"click",st),nn(ee,"gesturestart",re),nn(ee,"gestureend",pe),nn(o,pr+"enter",ot),nn(o,pr+"leave",ft),nn(o,pr+"move",nt),M.isEnabled=M.isPressed=M.isDragging=!1,Ye&&Ye(M))},M.kill=M.revert=function(){M.disable();var Pe=ls.indexOf(M);Pe>=0&&ls.splice(Pe,1),yi===M&&(yi=0)},ls.push(M),B&&Js(o)&&(yi=M),M.enable(_)},GM(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ct.version="3.12.5";Ct.create=function(r){return new Ct(r)};Ct.register=Vd;Ct.getAll=function(){return ls.slice()};Ct.getById=function(r){return ls.filter(function(e){return e.vars.id===r})[0]};zd()&&Yt.registerPlugin(Ct);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var me,is,et,Et,Kn,gt,Gd,Do,da,Qs,Vs,Za,jt,Wo,gc,on,Vh,Gh,rs,Wd,Ol,Xd,an,vc,Yd,qd,Oi,xc,Yc,_s,qc,Uo,Mc,Fl,ja=1,Jt=Date.now,Bl=Jt(),Gn=0,Gs=0,Wh=function(e,t,n){var i=An(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Xh=function(e,t){return t&&(!An(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},XM=function r(){return Gs&&requestAnimationFrame(r)},Yh=function(){return Wo=1},qh=function(){return Wo=0},Qn=function(e){return e},Ws=function(e){return Math.round(e*1e5)/1e5||0},$d=function(){return typeof window<"u"},Kd=function(){return me||$d()&&(me=window.gsap)&&me.registerPlugin&&me},Ur=function(e){return!!~Gd.indexOf(e)},Zd=function(e){return(e==="Height"?qc:et["inner"+e])||Kn["client"+e]||gt["client"+e]},jd=function(e){return Ki(e,"getBoundingClientRect")||(Ur(e)?function(){return _o.width=et.innerWidth,_o.height=qc,_o}:function(){return xi(e)})},YM=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Ki(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Zd(s):e["client"+s])||0}},qM=function(e,t){return!t||~oi.indexOf(e)?jd(e):function(){return _o}},si=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Ki(e,n))?a()-jd(e)()[s]:Ur(e)?(Kn[n]||gt[n])-Zd(i):e[n]-e["offset"+i])},Ja=function(e,t){for(var n=0;n<rs.length;n+=3)(!t||~t.indexOf(rs[n+1]))&&e(rs[n],rs[n+1],rs[n+2])},An=function(e){return typeof e=="string"},hn=function(e){return typeof e=="function"},Xs=function(e){return typeof e=="number"},mr=function(e){return typeof e=="object"},Bs=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},zl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},ts=Math.abs,Jd="left",Qd="top",$c="right",Kc="bottom",wr="width",Rr="height",ea="Right",ta="Left",na="Top",ia="Bottom",Ut="padding",Bn="margin",ws="Width",Zc="Height",Ot="px",zn=function(e){return et.getComputedStyle(e)},$M=function(e){var t=zn(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},$h=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},xi=function(e,t){var n=t&&zn(e)[gc]!=="matrix(1, 0, 0, 1, 0, 0)"&&me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Io=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},ep=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},KM=function(e){return function(t){return me.utils.snap(ep(e),t)}},jc=function(e){var t=me.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},ZM=function(e){return function(t,n){return jc(ep(e))(t,n.direction)}},Qa=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},Vt=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Ht=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},eo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Kh={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},to={toggleActions:"play",anticipatePin:0},No={top:0,left:0,center:.5,bottom:1,right:1},ho=function(e,t){if(An(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in No?No[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},no=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,g=Et.createElement("div"),_=Ur(n)||Ki(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=_?gt:n,T=e.indexOf("start")!==-1,x=T?c:u,b="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return b+="position:"+((p||l)&&_?"fixed;":"absolute;"),(p||l||!_)&&(b+=(i===Ft?$c:Kc)+":"+(a+parseFloat(h))+"px;"),o&&(b+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=T,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=b,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],fo(g,0,i,T),g},fo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+ws]=1,s["border"+o+ws]=0,s[n.p]=t+"px",me.set(e,s)},Ze=[],Sc={},pa,Zh=function(){return Jt()-Gn>34&&(pa||(pa=requestAnimationFrame(Ei)))},ns=function(){(!an||!an.isPressed||an.startX>gt.clientWidth)&&(Je.cache++,an?pa||(pa=requestAnimationFrame(Ei)):Ei(),Gn||Nr("scrollStart"),Gn=Jt())},kl=function(){qd=et.innerWidth,Yd=et.innerHeight},Ys=function(){Je.cache++,!jt&&!Xd&&!Et.fullscreenElement&&!Et.webkitFullscreenElement&&(!vc||qd!==et.innerWidth||Math.abs(et.innerHeight-Yd)>et.innerHeight*.25)&&Do.restart(!0)},Ir={},jM=[],tp=function r(){return Ht(Qe,"scrollEnd",r)||Sr(!0)},Nr=function(e){return Ir[e]&&Ir[e].map(function(t){return t()})||jM},bn=[],np=function(e){for(var t=0;t<bn.length;t+=5)(!e||bn[t+4]&&bn[t+4].query===e)&&(bn[t].style.cssText=bn[t+1],bn[t].getBBox&&bn[t].setAttribute("transform",bn[t+2]||""),bn[t+3].uncache=1)},Jc=function(e,t){var n;for(on=0;on<Ze.length;on++)n=Ze[on],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Uo=!0,t&&np(t),t||Nr("revert")},ip=function(e,t){Je.cache++,(t||!ln)&&Je.forEach(function(n){return hn(n)&&n.cacheID++&&(n.rec=0)}),An(e)&&(et.history.scrollRestoration=Yc=e)},ln,Cr=0,jh,JM=function(){if(jh!==Cr){var e=jh=Cr;requestAnimationFrame(function(){return e===Cr&&Sr(!0)})}},rp=function(){gt.appendChild(_s),qc=!an&&_s.offsetHeight||et.innerHeight,gt.removeChild(_s)},Jh=function(e){return da(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Sr=function(e,t){if(Gn&&!e&&!Uo){Vt(Qe,"scrollEnd",tp);return}rp(),ln=Qe.isRefreshing=!0,Je.forEach(function(i){return hn(i)&&++i.cacheID&&(i.rec=i())});var n=Nr("refreshInit");Wd&&Qe.sort(),t||Jc(),Je.forEach(function(i){hn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Ze.slice(0).forEach(function(i){return i.refresh()}),Uo=!1,Ze.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Mc=1,Jh(!0),Ze.forEach(function(i){var s=si(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Jh(!1),Mc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Je.forEach(function(i){hn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ip(Yc,1),Do.pause(),Cr++,ln=2,Ei(2),Ze.forEach(function(i){return hn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),ln=Qe.isRefreshing=!1,Nr("refresh")},yc=0,po=1,ra,Ei=function(e){if(e===2||!ln&&!Uo){Qe.isUpdating=!0,ra&&ra.update(0);var t=Ze.length,n=Jt(),i=n-Bl>=50,s=t&&Ze[0].scroll();if(po=yc>s?-1:1,ln||(yc=s),i&&(Gn&&!Wo&&n-Gn>200&&(Gn=0,Nr("scrollEnd")),Vs=Bl,Bl=n),po<0){for(on=t;on-- >0;)Ze[on]&&Ze[on].update(0,i);po=1}else for(on=0;on<t;on++)Ze[on]&&Ze[on].update(0,i);Qe.isUpdating=!1}pa=0},Ec=[Jd,Qd,Kc,$c,Bn+ia,Bn+ea,Bn+na,Bn+ta,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],mo=Ec.concat([wr,Rr,"boxSizing","max"+ws,"max"+Zc,"position",Bn,Ut,Ut+na,Ut+ea,Ut+ia,Ut+ta]),QM=function(e,t,n){gs(n);var i=e._gsap;if(i.spacerIsNative)gs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Hl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Ec.length,a=t.style,o=e.style,l;s--;)l=Ec[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Kc]=o[$c]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[wr]=Io(e,un)+Ot,a[Rr]=Io(e,Ft)+Ot,a[Ut]=o[Bn]=o[Qd]=o[Jd]="0",gs(i),o[wr]=o["max"+ws]=n[wr],o[Rr]=o["max"+Zc]=n[Rr],o[Ut]=n[Ut],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},eS=/([A-Z])/g,gs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||me.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(eS,"-$1").toLowerCase())}},io=function(e){for(var t=mo.length,n=e.style,i=[],s=0;s<t;s++)i.push(mo[s],n[mo[s]]);return i.t=e,i},tS=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},_o={left:0,top:0},Qh=function(e,t,n,i,s,a,o,l,c,u,f,h,d,g){hn(e)&&(e=e(l)),An(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?ho("0"+e.substr(3),n):0));var _=d?d.time():0,p,m,T;if(d&&d.seek(0),isNaN(e)||(e=+e),Xs(e))d&&(e=me.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&fo(o,n,i,!0);else{hn(t)&&(t=t(l));var x=(e||"0").split(" "),b,P,w,E;T=pn(t,l)||gt,b=xi(T)||{},(!b||!b.left&&!b.top)&&zn(T).display==="none"&&(E=T.style.display,T.style.display="block",b=xi(T),E?T.style.display=E:T.style.removeProperty("display")),P=ho(x[0],b[i.d]),w=ho(x[1]||"0",n),e=b[i.p]-c[i.p]-u+P+s-w,o&&fo(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var L=e+n,S=a._isStart;p="scroll"+i.d2,fo(a,L,i,S&&L>20||!S&&(f?Math.max(gt[p],Kn[p]):a.parentNode[p])<=L+1),f&&(c=xi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+Ot))}return d&&T&&(p=xi(T),d.seek(h),m=xi(T),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*h),d&&d.seek(_),d?e:Math.round(e)},nS=/(webkit|moz|length|cssText|inset)/i,ef=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===gt){e._stOrig=s.cssText,o=zn(e);for(a in o)!+a&&!nS.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;me.core.getCache(e).uncache=1,t.appendChild(e)}},sp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=a,a}},ro=function(e,t,n){var i={};i[t.p]="+="+n,me.set(e,i)},tf=function(e,t){var n=Qi(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,g={};c=c||n();var _=sp(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){Je.cache++,a.tween&&Ei()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=me.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Vt(e,"wheel",n.wheelHandler),Qe.isTouch&&Vt(e,"touchmove",n.wheelHandler),s},Qe=function(){function r(t,n){is||r.register(me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),xc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Gs){this.update=this.refresh=this.kill=Qn;return}n=$h(An(n)||Xs(n)||n.nodeType?{trigger:n}:n,to);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,T=s.onSnapComplete,x=s.once,b=s.snap,P=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,L=s.fastScrollEnd,S=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?un:Ft,I=!f&&f!==0,N=pn(n.scroller||et),D=me.core.getCache(N),H=Ur(N),V=("pinType"in n?n.pinType:Ki(N,"pinType")||H&&"fixed")==="fixed",q=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Y=I&&n.toggleActions.split(" "),B="markers"in n?n.markers:to.markers,j=H?0:parseFloat(zn(N)["border"+v.p2+ws])||0,R=this,se=n.onRefreshInit&&function(){return n.onRefreshInit(R)},Ue=YM(N,H,v),Ye=qM(N,H),W=0,Q=0,le=0,ne=Qi(N,v),Ee,be,ze,O,Ne,ae,ke,Se,He,M,y,G,$,K,J,Ae,te,fe,we,ee,ue,Re,de,ge,Ce,qe,$e,je,rt,_e,C,Z,re,pe,ve,Ke,nt,ot,ft;if(R._startClamp=R._endClamp=!1,R._dir=v,p*=45,R.scroller=N,R.scroll=E?E.time.bind(E):ne,O=ne(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Wd=1,n.refreshPriority===-9999&&(ra=R)),D.tweenScroll=D.tweenScroll||{top:tf(N,Ft),left:tf(N,un)},R.tweenTo=Ee=D.tweenScroll[v.p],R.scrubDuration=function(oe){re=Xs(oe)&&oe,re?Z?Z.duration(oe):Z=me.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:re,paused:!0,onComplete:function(){return m&&m(R)}}):(Z&&Z.progress(1).kill(),Z=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),_e=0,l||(l=i.vars.id)),b&&((!mr(b)||b.push)&&(b={snapTo:b}),"scrollBehavior"in gt.style&&me.set(H?[gt,Kn]:N,{scrollBehavior:"auto"}),Je.forEach(function(oe){return hn(oe)&&oe.target===(H?Et.scrollingElement||Kn:N)&&(oe.smooth=!1)}),ze=hn(b.snapTo)?b.snapTo:b.snapTo==="labels"?KM(i):b.snapTo==="labelsDirectional"?ZM(i):b.directional!==!1?function(oe,Fe){return jc(b.snapTo)(oe,Jt()-Q<500?0:Fe.direction)}:me.utils.snap(b.snapTo),pe=b.duration||{min:.1,max:2},pe=mr(pe)?Qs(pe.min,pe.max):Qs(pe,pe),ve=me.delayedCall(b.delay||re/2||.1,function(){var oe=ne(),Fe=Jt()-Q<500,Le=Ee.tween;if((Fe||Math.abs(R.getVelocity())<10)&&!Le&&!Wo&&W!==oe){var Oe=(oe-ae)/K,wt=i&&!I?i.totalProgress():Oe,Ve=Fe?0:(wt-C)/(Jt()-Vs)*1e3||0,vt=me.utils.clamp(-Oe,1-Oe,ts(Ve/2)*Ve/.185),Nt=Oe+(b.inertia===!1?0:vt),xt,dt,lt=b,A=lt.onStart,U=lt.onInterrupt,z=lt.onComplete;if(xt=ze(Nt,R),Xs(xt)||(xt=Nt),dt=Math.round(ae+xt*K),oe<=ke&&oe>=ae&&dt!==oe){if(Le&&!Le._initted&&Le.data<=ts(dt-oe))return;b.inertia===!1&&(vt=xt-Oe),Ee(dt,{duration:pe(ts(Math.max(ts(Nt-wt),ts(xt-wt))*.185/Ve/.05||0)),ease:b.ease||"power3",data:ts(dt-oe),onInterrupt:function(){return ve.restart(!0)&&U&&U(R)},onComplete:function(){R.update(),W=ne(),i&&(Z?Z.resetTo("totalProgress",xt,i._tTime/i._tDur):i.progress(xt)),_e=C=i&&!I?i.totalProgress():R.progress,T&&T(R),z&&z(R)}},oe,vt*K,dt-oe-vt*K),A&&A(R,Ee.tween)}}else R.isActive&&W!==oe&&ve.restart(!0)}).pause()),l&&(Sc[l]=R),h=R.trigger=pn(h||d!==!0&&d),ft=h&&h._gsap&&h._gsap.stRevert,ft&&(ft=ft(R)),d=d===!0?h:pn(d),An(o)&&(o={targets:h,className:o}),d&&(g===!1||g===Bn||(g=!g&&d.parentNode&&d.parentNode.style&&zn(d.parentNode).display==="flex"?!1:Ut),R.pin=d,be=me.core.getCache(d),be.spacer?J=be.pinState:(w&&(w=pn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),be.spacerIsNative=!!w,w&&(be.spacerState=io(w))),be.spacer=fe=w||Et.createElement("div"),fe.classList.add("pin-spacer"),l&&fe.classList.add("pin-spacer-"+l),be.pinState=J=io(d)),n.force3D!==!1&&me.set(d,{force3D:!0}),R.spacer=fe=be.spacer,rt=zn(d),ge=rt[g+v.os2],ee=me.getProperty(d),ue=me.quickSetter(d,v.a,Ot),Hl(d,fe,rt),te=io(d)),B){G=mr(B)?$h(B,Kh):Kh,M=no("scroller-start",l,N,v,G,0),y=no("scroller-end",l,N,v,G,0,M),we=M["offset"+v.op.d2];var st=pn(Ki(N,"content")||N);Se=this.markerStart=no("start",l,st,v,G,we,0,E),He=this.markerEnd=no("end",l,st,v,G,we,0,E),E&&(ot=me.quickSetter([Se,He],v.a,Ot)),!V&&!(oi.length&&Ki(N,"fixedMarkers")===!0)&&($M(H?gt:N),me.set([M,y],{force3D:!0}),qe=me.quickSetter(M,v.a,Ot),je=me.quickSetter(y,v.a,Ot))}if(E){var Pe=E.vars.onUpdate,Me=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){R.update(0,0,1),Pe&&Pe.apply(E,Me||[])})}if(R.previous=function(){return Ze[Ze.indexOf(R)-1]},R.next=function(){return Ze[Ze.indexOf(R)+1]},R.revert=function(oe,Fe){if(!Fe)return R.kill(!0);var Le=oe!==!1||!R.enabled,Oe=jt;Le!==R.isReverted&&(Le&&(Ke=Math.max(ne(),R.scroll.rec||0),le=R.progress,nt=i&&i.progress()),Se&&[Se,He,M,y].forEach(function(wt){return wt.style.display=Le?"none":"block"}),Le&&(jt=R,R.update(Le)),d&&(!P||!R.isActive)&&(Le?QM(d,fe,J):Hl(d,fe,zn(d),Ce)),Le||R.update(Le),jt=Oe,R.isReverted=Le)},R.refresh=function(oe,Fe,Le,Oe){if(!((jt||!R.enabled)&&!Fe)){if(d&&oe&&Gn){Vt(r,"scrollEnd",tp);return}!ln&&se&&se(R),jt=R,Ee.tween&&!Le&&(Ee.tween.kill(),Ee.tween=0),Z&&Z.pause(),_&&i&&i.revert({kill:!1}).invalidate(),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var wt=Ue(),Ve=Ye(),vt=E?E.duration():si(N,v),Nt=K<=.01,xt=0,dt=Oe||0,lt=mr(Le)?Le.end:n.end,A=n.endTrigger||h,U=mr(Le)?Le.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),z=R.pinnedContainer=n.pinnedContainer&&pn(n.pinnedContainer,R),k=h&&Math.max(0,Ze.indexOf(R))||0,F=k,ie,he,Te,Ie,ye,xe,De,mt,qt,Mt,Lt,ct,Be;for(B&&mr(Le)&&(ct=me.getProperty(M,v.p),Be=me.getProperty(y,v.p));F--;)xe=Ze[F],xe.end||xe.refresh(0,1)||(jt=R),De=xe.pin,De&&(De===h||De===d||De===z)&&!xe.isReverted&&(Mt||(Mt=[]),Mt.unshift(xe),xe.revert(!0,!0)),xe!==Ze[F]&&(k--,F--);for(hn(U)&&(U=U(R)),U=Wh(U,"start",R),ae=Qh(U,h,wt,v,ne(),Se,M,R,Ve,j,V,vt,E,R._startClamp&&"_startClamp")||(d?-.001:0),hn(lt)&&(lt=lt(R)),An(lt)&&!lt.indexOf("+=")&&(~lt.indexOf(" ")?lt=(An(U)?U.split(" ")[0]:"")+lt:(xt=ho(lt.substr(2),wt),lt=An(U)?U:(E?me.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,ae):ae)+xt,A=h)),lt=Wh(lt,"end",R),ke=Math.max(ae,Qh(lt||(A?"100% 0":vt),A,wt,v,ne()+xt,He,y,R,Ve,j,V,vt,E,R._endClamp&&"_endClamp"))||-.001,xt=0,F=k;F--;)xe=Ze[F],De=xe.pin,De&&xe.start-xe._pinPush<=ae&&!E&&xe.end>0&&(ie=xe.end-(R._startClamp?Math.max(0,xe.start):xe.start),(De===h&&xe.start-xe._pinPush<ae||De===z)&&isNaN(U)&&(xt+=ie*(1-xe.progress)),De===d&&(dt+=ie));if(ae+=xt,ke+=xt,R._startClamp&&(R._startClamp+=xt),R._endClamp&&!ln&&(R._endClamp=ke||-.001,ke=Math.min(ke,si(N,v))),K=ke-ae||(ae-=.01)&&.001,Nt&&(le=me.utils.clamp(0,1,me.utils.normalize(ae,ke,Ke))),R._pinPush=dt,Se&&xt&&(ie={},ie[v.a]="+="+xt,z&&(ie[v.p]="-="+ne()),me.set([Se,He],ie)),d&&!(Mc&&R.end>=si(N,v)))ie=zn(d),Ie=v===Ft,Te=ne(),Re=parseFloat(ee(v.a))+dt,!vt&&ke>1&&(Lt=(H?Et.scrollingElement||Kn:N).style,Lt={style:Lt,value:Lt["overflow"+v.a.toUpperCase()]},H&&zn(gt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Lt.style["overflow"+v.a.toUpperCase()]="scroll")),Hl(d,fe,ie),te=io(d),he=xi(d,!0),mt=V&&Qi(N,Ie?un:Ft)(),g?(Ce=[g+v.os2,K+dt+Ot],Ce.t=fe,F=g===Ut?Io(d,v)+K+dt:0,F&&(Ce.push(v.d,F+Ot),fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=F+Ot)),gs(Ce),z&&Ze.forEach(function(ci){ci.pin===z&&ci.vars.pinSpacing!==!1&&(ci._subPinOffset=!0)}),V&&ne(Ke)):(F=Io(d,v),F&&fe.style.flexBasis!=="auto"&&(fe.style.flexBasis=F+Ot)),V&&(ye={top:he.top+(Ie?Te-ae:mt)+Ot,left:he.left+(Ie?mt:Te-ae)+Ot,boxSizing:"border-box",position:"fixed"},ye[wr]=ye["max"+ws]=Math.ceil(he.width)+Ot,ye[Rr]=ye["max"+Zc]=Math.ceil(he.height)+Ot,ye[Bn]=ye[Bn+na]=ye[Bn+ea]=ye[Bn+ia]=ye[Bn+ta]="0",ye[Ut]=ie[Ut],ye[Ut+na]=ie[Ut+na],ye[Ut+ea]=ie[Ut+ea],ye[Ut+ia]=ie[Ut+ia],ye[Ut+ta]=ie[Ut+ta],Ae=tS(J,ye,P),ln&&ne(0)),i?(qt=i._initted,Ol(1),i.render(i.duration(),!0,!0),de=ee(v.a)-Re+K+dt,$e=Math.abs(K-de)>1,V&&$e&&Ae.splice(Ae.length-2,2),i.render(0,!0,!0),qt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ol(0)):de=K,Lt&&(Lt.value?Lt.style["overflow"+v.a.toUpperCase()]=Lt.value:Lt.style.removeProperty("overflow-"+v.a));else if(h&&ne()&&!E)for(he=h.parentNode;he&&he!==gt;)he._pinOffset&&(ae-=he._pinOffset,ke-=he._pinOffset),he=he.parentNode;Mt&&Mt.forEach(function(ci){return ci.revert(!1,!0)}),R.start=ae,R.end=ke,O=Ne=ln?Ke:ne(),!E&&!ln&&(O<Ke&&ne(Ke),R.scroll.rec=0),R.revert(!1,!0),Q=Jt(),ve&&(W=-1,ve.restart(!0)),jt=0,i&&I&&(i._initted||nt)&&i.progress()!==nt&&i.progress(nt||0,!0).render(i.time(),!0,!0),(Nt||le!==R.progress||E||_)&&(i&&!I&&i.totalProgress(E&&ae<-.001&&!le?me.utils.normalize(ae,ke,0):le,!0),R.progress=Nt||(O-ae)/K===le?0:le),d&&g&&(fe._pinOffset=Math.round(R.progress*de)),Z&&Z.invalidate(),isNaN(ct)||(ct-=me.getProperty(M,v.p),Be-=me.getProperty(y,v.p),ro(M,v,ct),ro(Se,v,ct-(Oe||0)),ro(y,v,Be),ro(He,v,Be-(Oe||0))),Nt&&!ln&&R.update(),u&&!ln&&!$&&($=!0,u(R),$=!1)}},R.getVelocity=function(){return(ne()-Ne)/(Jt()-Vs)*1e3||0},R.endAnimation=function(){Bs(R.callbackAnimation),i&&(Z?Z.progress(1):i.paused()?I||Bs(i,R.direction<0,1):Bs(i,i.reversed()))},R.labelToScroll=function(oe){return i&&i.labels&&(ae||R.refresh()||ae)+i.labels[oe]/i.duration()*K||0},R.getTrailing=function(oe){var Fe=Ze.indexOf(R),Le=R.direction>0?Ze.slice(0,Fe).reverse():Ze.slice(Fe+1);return(An(oe)?Le.filter(function(Oe){return Oe.vars.preventOverlaps===oe}):Le).filter(function(Oe){return R.direction>0?Oe.end<=ae:Oe.start>=ke})},R.update=function(oe,Fe,Le){if(!(E&&!Le&&!oe)){var Oe=ln===!0?Ke:R.scroll(),wt=oe?0:(Oe-ae)/K,Ve=wt<0?0:wt>1?1:wt||0,vt=R.progress,Nt,xt,dt,lt,A,U,z,k;if(Fe&&(Ne=O,O=E?ne():Oe,b&&(C=_e,_e=i&&!I?i.totalProgress():Ve)),p&&d&&!jt&&!ja&&Gn&&(!Ve&&ae<Oe+(Oe-Ne)/(Jt()-Vs)*p?Ve=1e-4:Ve===1&&ke>Oe+(Oe-Ne)/(Jt()-Vs)*p&&(Ve=.9999)),Ve!==vt&&R.enabled){if(Nt=R.isActive=!!Ve&&Ve<1,xt=!!vt&&vt<1,U=Nt!==xt,A=U||!!Ve!=!!vt,R.direction=Ve>vt?1:-1,R.progress=Ve,A&&!jt&&(dt=Ve&&!vt?0:Ve===1?1:vt===1?2:3,I&&(lt=!U&&Y[dt+1]!=="none"&&Y[dt+1]||Y[dt],k=i&&(lt==="complete"||lt==="reset"||lt in i))),S&&(U||k)&&(k||f||!i)&&(hn(S)?S(R):R.getTrailing(S).forEach(function(Te){return Te.endAnimation()})),I||(Z&&!jt&&!ja?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",Ve,i._tTime/i._tDur):(Z.vars.totalProgress=Ve,Z.invalidate().restart())):i&&i.totalProgress(Ve,!!(jt&&(Q||oe)))),d){if(oe&&g&&(fe.style[g+v.os2]=ge),!V)ue(Ws(Re+de*Ve));else if(A){if(z=!oe&&Ve>vt&&ke+1>Oe&&Oe+1>=si(N,v),P)if(!oe&&(Nt||z)){var F=xi(d,!0),ie=Oe-ae;ef(d,gt,F.top+(v===Ft?ie:0)+Ot,F.left+(v===Ft?0:ie)+Ot)}else ef(d,fe);gs(Nt||z?Ae:te),$e&&Ve<1&&Nt||ue(Re+(Ve===1&&!z?de:0))}}b&&!Ee.tween&&!jt&&!ja&&ve.restart(!0),o&&(U||x&&Ve&&(Ve<1||!Fl))&&da(o.targets).forEach(function(Te){return Te.classList[Nt||x?"add":"remove"](o.className)}),a&&!I&&!oe&&a(R),A&&!jt?(I&&(k&&(lt==="complete"?i.pause().totalProgress(1):lt==="reset"?i.restart(!0).pause():lt==="restart"?i.restart(!0):i[lt]()),a&&a(R)),(U||!Fl)&&(c&&U&&zl(R,c),q[dt]&&zl(R,q[dt]),x&&(Ve===1?R.kill(!1,1):q[dt]=0),U||(dt=Ve===1?1:3,q[dt]&&zl(R,q[dt]))),L&&!Nt&&Math.abs(R.getVelocity())>(Xs(L)?L:2500)&&(Bs(R.callbackAnimation),Z?Z.progress(1):Bs(i,lt==="reverse"?1:!Ve,1))):I&&a&&!jt&&a(R)}if(je){var he=E?Oe/E.duration()*(E._caScrollDist||0):Oe;qe(he+(M._isFlipped?1:0)),je(he)}ot&&ot(-Oe/E.duration()*(E._caScrollDist||0))}},R.enable=function(oe,Fe){R.enabled||(R.enabled=!0,Vt(N,"resize",Ys),H||Vt(N,"scroll",ns),se&&Vt(r,"refreshInit",se),oe!==!1&&(R.progress=le=0,O=Ne=W=ne()),Fe!==!1&&R.refresh())},R.getTween=function(oe){return oe&&Ee?Ee.tween:Z},R.setPositions=function(oe,Fe,Le,Oe){if(E){var wt=E.scrollTrigger,Ve=E.duration(),vt=wt.end-wt.start;oe=wt.start+vt*oe/Ve,Fe=wt.start+vt*Fe/Ve}R.refresh(!1,!1,{start:Xh(oe,Le&&!!R._startClamp),end:Xh(Fe,Le&&!!R._endClamp)},Oe),R.update()},R.adjustPinSpacing=function(oe){if(Ce&&oe){var Fe=Ce.indexOf(v.d)+1;Ce[Fe]=parseFloat(Ce[Fe])+oe+Ot,Ce[1]=parseFloat(Ce[1])+oe+Ot,gs(Ce)}},R.disable=function(oe,Fe){if(R.enabled&&(oe!==!1&&R.revert(!0,!0),R.enabled=R.isActive=!1,Fe||Z&&Z.pause(),Ke=0,be&&(be.uncache=1),se&&Ht(r,"refreshInit",se),ve&&(ve.pause(),Ee.tween&&Ee.tween.kill()&&(Ee.tween=0)),!H)){for(var Le=Ze.length;Le--;)if(Ze[Le].scroller===N&&Ze[Le]!==R)return;Ht(N,"resize",Ys),H||Ht(N,"scroll",ns)}},R.kill=function(oe,Fe){R.disable(oe,Fe),Z&&!Fe&&Z.kill(),l&&delete Sc[l];var Le=Ze.indexOf(R);Le>=0&&Ze.splice(Le,1),Le===on&&po>0&&on--,Le=0,Ze.forEach(function(Oe){return Oe.scroller===R.scroller&&(Le=1)}),Le||ln||(R.scroll.rec=0),i&&(i.scrollTrigger=null,oe&&i.revert({kill:!1}),Fe||i.kill()),Se&&[Se,He,M,y].forEach(function(Oe){return Oe.parentNode&&Oe.parentNode.removeChild(Oe)}),ra===R&&(ra=0),d&&(be&&(be.uncache=1),Le=0,Ze.forEach(function(Oe){return Oe.pin===d&&Le++}),Le||(be.spacer=0)),n.onKill&&n.onKill(R)},Ze.push(R),R.enable(!1,!1),ft&&ft(R),i&&i.add&&!K){var Xe=R.update;R.update=function(){R.update=Xe,ae||ke||R.refresh()},me.delayedCall(.01,R.update),K=.01,ae=ke=0}else R.refresh();d&&JM()},r.register=function(n){return is||(me=n||Kd(),$d()&&window.document&&r.enable(),is=Gs),is},r.defaults=function(n){if(n)for(var i in n)to[i]=n[i];return to},r.disable=function(n,i){Gs=0,Ze.forEach(function(a){return a[i?"kill":"disable"](n)}),Ht(et,"wheel",ns),Ht(Et,"scroll",ns),clearInterval(Za),Ht(Et,"touchcancel",Qn),Ht(gt,"touchstart",Qn),Qa(Ht,Et,"pointerdown,touchstart,mousedown",Yh),Qa(Ht,Et,"pointerup,touchend,mouseup",qh),Do.kill(),Ja(Ht);for(var s=0;s<Je.length;s+=3)eo(Ht,Je[s],Je[s+1]),eo(Ht,Je[s],Je[s+2])},r.enable=function(){if(et=window,Et=document,Kn=Et.documentElement,gt=Et.body,me&&(da=me.utils.toArray,Qs=me.utils.clamp,xc=me.core.context||Qn,Ol=me.core.suppressOverwrites||Qn,Yc=et.history.scrollRestoration||"auto",yc=et.pageYOffset,me.core.globals("ScrollTrigger",r),gt)){Gs=1,_s=document.createElement("div"),_s.style.height="100vh",_s.style.position="absolute",rp(),XM(),Ct.register(me),r.isTouch=Ct.isTouch,Oi=Ct.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),vc=Ct.isTouch===1,Vt(et,"wheel",ns),Gd=[et,Et,Kn,gt],me.matchMedia?(r.matchMedia=function(l){var c=me.matchMedia(),u;for(u in l)c.add(u,l[u]);return c},me.addEventListener("matchMediaInit",function(){return Jc()}),me.addEventListener("matchMediaRevert",function(){return np()}),me.addEventListener("matchMedia",function(){Sr(0,1),Nr("matchMedia")}),me.matchMedia("(orientation: portrait)",function(){return kl(),kl})):console.warn("Requires GSAP 3.11.0 or later"),kl(),Vt(Et,"scroll",ns);var n=gt.style,i=n.borderTopStyle,s=me.core.Animation.prototype,a,o;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",a=xi(gt),Ft.m=Math.round(a.top+Ft.sc())||0,un.m=Math.round(a.left+un.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),Za=setInterval(Zh,250),me.delayedCall(.5,function(){return ja=0}),Vt(Et,"touchcancel",Qn),Vt(gt,"touchstart",Qn),Qa(Vt,Et,"pointerdown,touchstart,mousedown",Yh),Qa(Vt,Et,"pointerup,touchend,mouseup",qh),gc=me.utils.checkPrefix("transform"),mo.push(gc),is=Jt(),Do=me.delayedCall(.2,Sr).pause(),rs=[Et,"visibilitychange",function(){var l=et.innerWidth,c=et.innerHeight;Et.hidden?(Vh=l,Gh=c):(Vh!==l||Gh!==c)&&Ys()},Et,"DOMContentLoaded",Sr,et,"load",Sr,et,"resize",Ys],Ja(Vt),Ze.forEach(function(l){return l.enable(0,1)}),o=0;o<Je.length;o+=3)eo(Ht,Je[o],Je[o+1]),eo(Ht,Je[o],Je[o+2])}},r.config=function(n){"limitCallbacks"in n&&(Fl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Za)||(Za=i)&&setInterval(Zh,i),"ignoreMobileResize"in n&&(vc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Ja(Ht)||Ja(Vt,n.autoRefreshEvents||"none"),Xd=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=pn(n),a=Je.indexOf(s),o=Ur(s);~a&&Je.splice(a,o?6:2),i&&(o?oi.unshift(et,i,gt,i,Kn,i):oi.unshift(s,i))},r.clearMatchMedia=function(n){Ze.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(An(n)?pn(n):n).getBoundingClientRect(),o=a[s?wr:Rr]*i||0;return s?a.right-o>0&&a.left+o<et.innerWidth:a.bottom-o>0&&a.top+o<et.innerHeight},r.positionInViewport=function(n,i,s){An(n)&&(n=pn(n));var a=n.getBoundingClientRect(),o=a[s?wr:Rr],l=i==null?o/2:i in No?No[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/et.innerWidth:(a.top+l)/et.innerHeight},r.killAll=function(n){if(Ze.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ir.killAll||[];Ir={},i.forEach(function(s){return s()})}},r}();Qe.version="3.12.5";Qe.saveStyles=function(r){return r?da(r).forEach(function(e){if(e&&e.style){var t=bn.indexOf(e);t>=0&&bn.splice(t,5),bn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),me.core.getCache(e),xc())}}):bn};Qe.revert=function(r,e){return Jc(!r,e)};Qe.create=function(r,e){return new Qe(r,e)};Qe.refresh=function(r){return r?Ys():(is||Qe.register())&&Sr(!0)};Qe.update=function(r){return++Je.cache&&Ei(r===!0?2:0)};Qe.clearScrollMemory=ip;Qe.maxScroll=function(r,e){return si(r,e?un:Ft)};Qe.getScrollFunc=function(r,e){return Qi(pn(r),e?un:Ft)};Qe.getById=function(r){return Sc[r]};Qe.getAll=function(){return Ze.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qe.isScrolling=function(){return!!Gn};Qe.snapDirectional=jc;Qe.addEventListener=function(r,e){var t=Ir[r]||(Ir[r]=[]);~t.indexOf(e)||t.push(e)};Qe.removeEventListener=function(r,e){var t=Ir[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};Qe.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=me.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(g){f.length||d.restart(!0),f.push(g.trigger),h.push(g),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&hn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return hn(s)&&(s=s(),Vt(Qe,"refresh",function(){return s=e.batchMax()})),da(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(Qe.create(c))}),t};var nf=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Vl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Ct.isTouch?" pinch-zoom":""):"none",e===Kn&&r(gt,t)},so={auto:1,scroll:1},iS=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||me.core.getCache(s),o=Jt(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==gt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(so[(l=zn(s)).overflowY]||so[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Ur(s)&&(so[(l=zn(s)).overflowY]||so[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ap=function(e,t,n,i){return Ct.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&iS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Vt(Et,Ct.eventTypes[0],sf,!1,!0)},onDisable:function(){return Ht(Et,Ct.eventTypes[0],sf,!0)}})},rS=/(input|label|select|textarea)/i,rf,sf=function(e){var t=rS.test(e.target.tagName);(t||rf)&&(e._gsapAllow=!0,rf=t)},sS=function(e){mr(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=pn(e.target)||Kn,u=me.core.globals().ScrollSmoother,f=u&&u.get(),h=Oi&&(e.content&&pn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=Qi(c,Ft),g=Qi(c,un),_=1,p=(Ct.isTouch&&et.visualViewport?et.visualViewport.scale*et.visualViewport.width:et.outerWidth)/et.innerWidth,m=0,T=hn(i)?function(){return i(o)}:function(){return i||2.8},x,b,P=ap(c,e.type,!0,s),w=function(){return b=!1},E=Qn,L=Qn,S=function(){l=si(c,Ft),L=Qs(Oi?1:0,l),n&&(E=Qs(0,si(c,un))),x=Cr},v=function(){h._gsap.y=Ws(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},I=function(){if(b){requestAnimationFrame(w);var B=Ws(o.deltaY/2),j=L(d.v-B);if(h&&j!==d.v+d.offset){d.offset=j-d.v;var R=Ws((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",h._gsap.y=R+"px",d.cacheID=Je.cache,Ei()}return!0}d.offset&&v(),b=!0},N,D,H,V,q=function(){S(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return h&&me.set(h,{y:"+=0"}),e.ignoreCheck=function(Y){return Oi&&Y.type==="touchmove"&&I()||_>1.05&&Y.type!=="touchstart"||o.isGesturing||Y.touches&&Y.touches.length>1},e.onPress=function(){b=!1;var Y=_;_=Ws((et.visualViewport&&et.visualViewport.scale||1)/p),N.pause(),Y!==_&&Vl(c,_>1.01?!0:n?!1:"x"),D=g(),H=d(),S(),x=Cr},e.onRelease=e.onGestureStart=function(Y,B){if(d.offset&&v(),!B)V.restart(!0);else{Je.cache++;var j=T(),R,se;n&&(R=g(),se=R+j*.05*-Y.velocityX/.227,j*=nf(g,R,se,si(c,un)),N.vars.scrollX=E(se)),R=d(),se=R+j*.05*-Y.velocityY/.227,j*=nf(d,R,se,si(c,Ft)),N.vars.scrollY=L(se),N.invalidate().duration(j).play(.01),(Oi&&N.vars.scrollY>=l||R>=l-1)&&me.to({},{onUpdate:q,duration:j})}a&&a(Y)},e.onWheel=function(){N._ts&&N.pause(),Jt()-m>1e3&&(x=0,m=Jt())},e.onChange=function(Y,B,j,R,se){if(Cr!==x&&S(),B&&n&&g(E(R[2]===B?D+(Y.startX-Y.x):g()+B-R[1])),j){d.offset&&v();var Ue=se[2]===j,Ye=Ue?H+Y.startY-Y.y:d()+j-se[1],W=L(Ye);Ue&&Ye!==W&&(H+=W-Ye),d(W)}(j||B)&&Ei()},e.onEnable=function(){Vl(c,n?!1:"x"),Qe.addEventListener("refresh",q),Vt(et,"resize",q),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),P.enable()},e.onDisable=function(){Vl(c,!0),Ht(et,"resize",q),Qe.removeEventListener("refresh",q),P.kill()},e.lockAxis=e.lockAxis!==!1,o=new Ct(e),o.iOS=Oi,Oi&&!d()&&d(1),Oi&&me.ticker.add(Qn),V=o._dc,N=me.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sp(d,d(),function(){return N.pause()})},onUpdate:Ei,onComplete:V.vars.onComplete}),o};Qe.sort=function(r){return Ze.sort(r||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};Qe.observe=function(r){return new Ct(r)};Qe.normalizeScroll=function(r){if(typeof r>"u")return an;if(r===!0&&an)return an.enable();if(r===!1){an&&an.kill(),an=r;return}var e=r instanceof Ct?r:sS(r);return an&&an.target===e.target&&an.kill(),Ur(e.target)&&(an=e),e};Qe.core={_getVelocityProp:_c,_inputObserver:ap,_scrollers:Je,_proxies:oi,bridge:{ss:function(){Gn||Nr("scrollStart"),Gn=Jt()},ref:function(){return jt}}};Kd()&&me.registerPlugin(Qe);Nd.registerPlugin(Qe);document.addEventListener("DOMContentLoaded",()=>{const r=new bx,e=new Fn(75,window.innerWidth/window.innerHeight,.1,1e3);r.background=new at(396808);const t=document.querySelector(".hero_webgl-element"),n=new Tx({canvas:t});n.setSize(window.innerWidth,window.innerHeight),window.addEventListener("resize",()=>{e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)});const i=aS(128,"#6BE688"),s=oS(r,i);e.position.z=120;const a=new it,o=new Rx;document.addEventListener("mousemove",u=>{a.x=u.clientX/window.innerWidth*2-1,a.y=-(u.clientY/window.innerHeight)*2+1});var l=c();function c(){l=requestAnimationFrame(c),lS(s,o,a,e),n.render(r,e)}Qe.create({trigger:".section.is-collections-main",start:"bottom bottom",end:"bottom 80%",onLeave:()=>{l&&(cancelAnimationFrame(l),l=null),t.style.display="none"},onEnterBack:()=>{t.style.display="block",l||(l=c())}})});function aS(r,e){const t=r*2,n=document.createElement("canvas");n.width=t,n.height=t;const i=n.getContext("2d");i.beginPath(),i.arc(r,r,r,0,2*Math.PI,!1),i.fillStyle=e,i.fill();const s=new fn(n);return s.needsUpdate=!0,s}function oS(r,e){const i=new Ri,s=new Float32Array(300*300*3),a=new Float32Array(300*300),o=new Float32Array(300*300);for(let u=0;u<300;u++)for(let f=0;f<300;f++){let h=u*300+f;const d=(u-300/2)*2,g=(f-300/2)*2;s[h*3+0]=d,s[h*3+1]=g,s[h*3+2]=0,a[h]=1,o[h]=.5}i.setAttribute("position",new Ln(s,3)),i.setAttribute("scale",new Ln(a,1)),i.setAttribute("opacity",new Ln(o,1));const l=new bi({uniforms:{color:{value:new at(16777215)},pointTexture:{value:e}},vertexShader:cS(),fragmentShader:uS(),depthTest:!1,transparent:!0}),c=new wx(i,l);return r.add(c),c}function lS(r,e,t,n){const i=r.geometry.attributes.position.array,s=r.geometry.attributes.scale.array,a=r.geometry.attributes.opacity.array;e.setFromCamera(t,n);const o=e.intersectObject(r),l=Date.now()*.005;for(let c=0;c<i.length/3;c++){const u=c*3,f=i[u],h=i[u+1],d=10,_=l*.1+f*.07,p=30,T=l*.1+h*.01,x=7,P=l*.5+f*.01;i[u+2]=d*Math.sin(_)+p*Math.sin(T)+x*Math.cos(P);let w=1,E=.4;if(o.length>0){const L=Math.sqrt((f-o[0].point.x)**2+(h-o[0].point.y)**2);L<10&&(w=1+(10-L)/10*1.5,E=.8-L/10*.5)}s[c]=w,a[c]=E}r.geometry.attributes.position.needsUpdate=!0,r.geometry.attributes.scale.needsUpdate=!0,r.geometry.attributes.opacity.needsUpdate=!0}function cS(){return`
        attribute float scale;
        attribute float opacity;
        varying vec2 vUv;
        varying float vOpacity;
        void main() {
            vUv = uv;
            vOpacity = opacity;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = scale * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
        }
    `}function uS(){return`
        uniform vec3 color;
        uniform sampler2D pointTexture;
        varying vec2 vUv;
        varying float vOpacity;
        void main() {
            gl_FragColor = vec4(color, vOpacity) * texture2D(pointTexture, gl_PointCoord);
        }
    `}
