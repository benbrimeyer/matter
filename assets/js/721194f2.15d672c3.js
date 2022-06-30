"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[971],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={},i="Derived state",l={unversionedId:"BestPractices/DerivedState",id:"BestPractices/DerivedState",title:"Derived state",description:"Oftentimes, games will have state that needs to be affected by multiple, distinct gameplay systems.",source:"@site/docs/BestPractices/DerivedState.md",sourceDirName:"BestPractices",slug:"/BestPractices/DerivedState",permalink:"/matter/docs/BestPractices/DerivedState",draft:!1,editUrl:"https://github.com/evaera/matter/edit/main/docs/BestPractices/DerivedState.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"Reconciliation",permalink:"/matter/docs/BestPractices/Reconciliation"},next:{title:"State Machines",permalink:"/matter/docs/BestPractices/StateMachines"}},s={},d=[],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"derived-state"},"Derived state"),(0,r.kt)("p",null,"Oftentimes, games will have state that needs to be affected by multiple, distinct gameplay systems."),(0,r.kt)("p",null,"For example, imagine you had a game where equipping a heavy weapon lowered your walk speed. There might be other things that affect your walk speed too, like being Poisoned!"),(0,r.kt)("p",null,"So, let's say both equipping the heavy weapon and being poisoned both need to lower your player's walk speed."),(0,r.kt)("p",null,"Instead of directly controlling the walk speed in the weapon system and then again in the poison system, we should make a dedicated system to manage walk speed."),(0,r.kt)("p",null,"Let's say that whenever a player is poisoned or has a heavy weapon equipped, our game adds the ",(0,r.kt)("inlineCode",{parentName:"p"},"Poison")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"HeavyWeapon")," components to the player entity. For the sake of this example, we can imagine that each one lowers walk speed by half."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},"local affectsWalkSpeed = {Poison, HeavyWeapon}\n\nlocal function walkSpeed(world)\n    for id, player in world:query(Player) do\n\n        local results = {world:get(id, unpack(affectsWalkSpeed))}\n\n        -- NOTE: You can't be tricky by just checking the length of this table!\n        -- We MUST iterate over it because the Lua length operator does not work\n        -- as you might expect when a table has nil values in it.\n        -- See for yourself: Lua says #{nil,nil,nil,1,nil} is 0!\n\n        local modifier = 1\n\n        for _ in results do\n            -- For each result, reduce speed by half.\n            modifier *= 0.5\n        end\n\n        -- The default Roblox walk speed is 16\n        local speed = 16 * modifier\n\n        world:insert(id, WalkSpeed({\n            speed = speed,\n            modifier = modifier,\n        }))\n    end\nend\n\nreturn walkSpeed\n")),(0,r.kt)("p",null,"By listing out everything that can affect the walk speed in this system, we've created one source of truth for the player's walk speed. Any time there's a bug or something wrong with player movement, just check this one file. It's much easier to track down changes when everything that can affect something is in one place."),(0,r.kt)("p",null,"The value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"WalkSpeed")," component we use here is completely derived from the state of other components on the entity. This is ",(0,r.kt)("em",{parentName:"p"},"derived state"),"!"),(0,r.kt)("p",null,"Maybe in a separate system, we could update anything with a Model and a WalkSpeed component, perhaps:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'\n-- Update anything with WalkSpeed and Model (this could be a separate system)\nfor id, walkSpeed, model in world:query(WalkSpeed, Model) do\n    if model.model:FindFirstChild("Humanoid") then\n        model.model.Humanoid.WalkSpeed = walkSpeed.speed\n    end\nend\n')))}p.isMDXComponent=!0}}]);