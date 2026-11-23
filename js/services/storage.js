
window.NFStore={
 get(k){const raw=localStorage.getItem("nf_"+k);if(raw)return JSON.parse(raw);const initial=window.NF_DEMO[k]||[];localStorage.setItem("nf_"+k,JSON.stringify(initial));return structuredClone(initial)},
 set(k,v){localStorage.setItem("nf_"+k,JSON.stringify(v));return v},
 add(k,obj){const a=this.get(k);obj.id=Math.max(0,...a.map(x=>Number(x.id)||0))+1;a.unshift(obj);this.set(k,a);return obj},
 update(k,id,patch){const a=this.get(k).map(x=>x.id==id?{...x,...patch}:x);this.set(k,a)},
 remove(k,id){this.set(k,this.get(k).filter(x=>x.id!=id))}
};
