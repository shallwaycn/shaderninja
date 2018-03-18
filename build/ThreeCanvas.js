(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.ThreeCanvas = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/get-iterator"), __esModule: true };
},{"core-js/library/fn/get-iterator":11}],2:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/assign"), __esModule: true };
},{"core-js/library/fn/object/assign":12}],3:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/create"), __esModule: true };
},{"core-js/library/fn/object/create":13}],4:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-properties"), __esModule: true };
},{"core-js/library/fn/object/define-properties":14}],5:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/define-property"), __esModule: true };
},{"core-js/library/fn/object/define-property":15}],6:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/object/keys"), __esModule: true };
},{"core-js/library/fn/object/keys":16}],7:[function(_dereq_,module,exports){
module.exports = { "default": _dereq_("core-js/library/fn/set"), __esModule: true };
},{"core-js/library/fn/set":17}],8:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

exports.__esModule = true;
},{}],9:[function(_dereq_,module,exports){
"use strict";

var _Object$defineProperty = _dereq_("babel-runtime/core-js/object/define-property")["default"];

exports["default"] = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;

      _Object$defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

exports.__esModule = true;
},{"babel-runtime/core-js/object/define-property":5}],10:[function(_dereq_,module,exports){
"use strict";

exports["default"] = function (obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
};

exports.__esModule = true;
},{}],11:[function(_dereq_,module,exports){
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.string.iterator');
module.exports = _dereq_('../modules/core.get-iterator');
},{"../modules/core.get-iterator":63,"../modules/es6.string.iterator":69,"../modules/web.dom.iterable":71}],12:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.assign');
module.exports = _dereq_('../../modules/$.core').Object.assign;
},{"../../modules/$.core":26,"../../modules/es6.object.assign":65}],13:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function create(P, D){
  return $.create(P, D);
};
},{"../../modules/$":44}],14:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function defineProperties(T, D){
  return $.setDescs(T, D);
};
},{"../../modules/$":44}],15:[function(_dereq_,module,exports){
var $ = _dereq_('../../modules/$');
module.exports = function defineProperty(it, key, desc){
  return $.setDesc(it, key, desc);
};
},{"../../modules/$":44}],16:[function(_dereq_,module,exports){
_dereq_('../../modules/es6.object.keys');
module.exports = _dereq_('../../modules/$.core').Object.keys;
},{"../../modules/$.core":26,"../../modules/es6.object.keys":66}],17:[function(_dereq_,module,exports){
_dereq_('../modules/es6.object.to-string');
_dereq_('../modules/es6.string.iterator');
_dereq_('../modules/web.dom.iterable');
_dereq_('../modules/es6.set');
_dereq_('../modules/es7.set.to-json');
module.exports = _dereq_('../modules/$.core').Set;
},{"../modules/$.core":26,"../modules/es6.object.to-string":67,"../modules/es6.set":68,"../modules/es6.string.iterator":69,"../modules/es7.set.to-json":70,"../modules/web.dom.iterable":71}],18:[function(_dereq_,module,exports){
module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};
},{}],19:[function(_dereq_,module,exports){
module.exports = function(){ /* empty */ };
},{}],20:[function(_dereq_,module,exports){
var isObject = _dereq_('./$.is-object');
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};
},{"./$.is-object":38}],21:[function(_dereq_,module,exports){
// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = _dereq_('./$.cof')
  , TAG = _dereq_('./$.wks')('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};
},{"./$.cof":22,"./$.wks":61}],22:[function(_dereq_,module,exports){
var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};
},{}],23:[function(_dereq_,module,exports){
'use strict';
var $            = _dereq_('./$')
  , hide         = _dereq_('./$.hide')
  , redefineAll  = _dereq_('./$.redefine-all')
  , ctx          = _dereq_('./$.ctx')
  , strictNew    = _dereq_('./$.strict-new')
  , defined      = _dereq_('./$.defined')
  , forOf        = _dereq_('./$.for-of')
  , $iterDefine  = _dereq_('./$.iter-define')
  , step         = _dereq_('./$.iter-step')
  , ID           = _dereq_('./$.uid')('id')
  , $has         = _dereq_('./$.has')
  , isObject     = _dereq_('./$.is-object')
  , setSpecies   = _dereq_('./$.set-species')
  , DESCRIPTORS  = _dereq_('./$.descriptors')
  , isExtensible = Object.isExtensible || isObject
  , SIZE         = DESCRIPTORS ? '_s' : 'size'
  , id           = 0;

var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!$has(it, ID)){
    // can't set id to frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add id
    if(!create)return 'E';
    // add missing object id
    hide(it, ID, ++id);
  // return object id with prefix
  } return 'O' + it[ID];
};

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

module.exports = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      strictNew(that, C, NAME);
      that._i = $.create(null); // index
      that._f = undefined;      // first entry
      that._l = undefined;      // last entry
      that[SIZE] = 0;           // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};
},{"./$":44,"./$.ctx":27,"./$.defined":28,"./$.descriptors":29,"./$.for-of":32,"./$.has":34,"./$.hide":35,"./$.is-object":38,"./$.iter-define":41,"./$.iter-step":42,"./$.redefine-all":49,"./$.set-species":51,"./$.strict-new":54,"./$.uid":60}],24:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var forOf   = _dereq_('./$.for-of')
  , classof = _dereq_('./$.classof');
module.exports = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    var arr = [];
    forOf(this, false, arr.push, arr);
    return arr;
  };
};
},{"./$.classof":21,"./$.for-of":32}],25:[function(_dereq_,module,exports){
'use strict';
var $              = _dereq_('./$')
  , global         = _dereq_('./$.global')
  , $export        = _dereq_('./$.export')
  , fails          = _dereq_('./$.fails')
  , hide           = _dereq_('./$.hide')
  , redefineAll    = _dereq_('./$.redefine-all')
  , forOf          = _dereq_('./$.for-of')
  , strictNew      = _dereq_('./$.strict-new')
  , isObject       = _dereq_('./$.is-object')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , DESCRIPTORS    = _dereq_('./$.descriptors');

module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  if(!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
  } else {
    C = wrapper(function(target, iterable){
      strictNew(target, C, NAME);
      target._c = new Base;
      if(iterable != undefined)forOf(iterable, IS_MAP, target[ADDER], target);
    });
    $.each.call('add,clear,delete,forEach,get,has,set,keys,values,entries'.split(','),function(KEY){
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if(KEY in proto && !(IS_WEAK && KEY == 'clear'))hide(C.prototype, KEY, function(a, b){
        if(!IS_ADDER && IS_WEAK && !isObject(a))return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    if('size' in proto)$.setDesc(C.prototype, 'size', {
      get: function(){
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};
},{"./$":44,"./$.descriptors":29,"./$.export":30,"./$.fails":31,"./$.for-of":32,"./$.global":33,"./$.hide":35,"./$.is-object":38,"./$.redefine-all":49,"./$.set-to-string-tag":52,"./$.strict-new":54}],26:[function(_dereq_,module,exports){
var core = module.exports = {version: '1.2.6'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
},{}],27:[function(_dereq_,module,exports){
// optional / simple context binding
var aFunction = _dereq_('./$.a-function');
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};
},{"./$.a-function":18}],28:[function(_dereq_,module,exports){
// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};
},{}],29:[function(_dereq_,module,exports){
// Thank's IE8 for his funny defineProperty
module.exports = !_dereq_('./$.fails')(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});
},{"./$.fails":31}],30:[function(_dereq_,module,exports){
var global    = _dereq_('./$.global')
  , core      = _dereq_('./$.core')
  , ctx       = _dereq_('./$.ctx')
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && key in target;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(param){
        return this instanceof C ? new C(param) : C(param);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    if(IS_PROTO)(exports[PROTOTYPE] || (exports[PROTOTYPE] = {}))[key] = out;
  }
};
// type bitmap
$export.F = 1;  // forced
$export.G = 2;  // global
$export.S = 4;  // static
$export.P = 8;  // proto
$export.B = 16; // bind
$export.W = 32; // wrap
module.exports = $export;
},{"./$.core":26,"./$.ctx":27,"./$.global":33}],31:[function(_dereq_,module,exports){
module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};
},{}],32:[function(_dereq_,module,exports){
var ctx         = _dereq_('./$.ctx')
  , call        = _dereq_('./$.iter-call')
  , isArrayIter = _dereq_('./$.is-array-iter')
  , anObject    = _dereq_('./$.an-object')
  , toLength    = _dereq_('./$.to-length')
  , getIterFn   = _dereq_('./core.get-iterator-method');
module.exports = function(iterable, entries, fn, that){
  var iterFn = getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    call(iterator, f, step.value, entries);
  }
};
},{"./$.an-object":20,"./$.ctx":27,"./$.is-array-iter":37,"./$.iter-call":39,"./$.to-length":58,"./core.get-iterator-method":62}],33:[function(_dereq_,module,exports){
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
},{}],34:[function(_dereq_,module,exports){
var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};
},{}],35:[function(_dereq_,module,exports){
var $          = _dereq_('./$')
  , createDesc = _dereq_('./$.property-desc');
module.exports = _dereq_('./$.descriptors') ? function(object, key, value){
  return $.setDesc(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};
},{"./$":44,"./$.descriptors":29,"./$.property-desc":48}],36:[function(_dereq_,module,exports){
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = _dereq_('./$.cof');
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};
},{"./$.cof":22}],37:[function(_dereq_,module,exports){
// check on default Array iterator
var Iterators  = _dereq_('./$.iterators')
  , ITERATOR   = _dereq_('./$.wks')('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};
},{"./$.iterators":43,"./$.wks":61}],38:[function(_dereq_,module,exports){
module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};
},{}],39:[function(_dereq_,module,exports){
// call something on iterator step with safe closing on error
var anObject = _dereq_('./$.an-object');
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};
},{"./$.an-object":20}],40:[function(_dereq_,module,exports){
'use strict';
var $              = _dereq_('./$')
  , descriptor     = _dereq_('./$.property-desc')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_dereq_('./$.hide')(IteratorPrototype, _dereq_('./$.wks')('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};
},{"./$":44,"./$.hide":35,"./$.property-desc":48,"./$.set-to-string-tag":52,"./$.wks":61}],41:[function(_dereq_,module,exports){
'use strict';
var LIBRARY        = _dereq_('./$.library')
  , $export        = _dereq_('./$.export')
  , redefine       = _dereq_('./$.redefine')
  , hide           = _dereq_('./$.hide')
  , has            = _dereq_('./$.has')
  , Iterators      = _dereq_('./$.iterators')
  , $iterCreate    = _dereq_('./$.iter-create')
  , setToStringTag = _dereq_('./$.set-to-string-tag')
  , getProto       = _dereq_('./$').getProto
  , ITERATOR       = _dereq_('./$.wks')('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , methods, key;
  // Fix native
  if($native){
    var IteratorPrototype = getProto($default.call(new Base));
    // Set @@toStringTag to native iterators
    setToStringTag(IteratorPrototype, TAG, true);
    // FF fix
    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    // fix Array#{values, @@iterator}.name in V8 / FF
    if(DEF_VALUES && $native.name !== VALUES){
      VALUES_BUG = true;
      $default = function values(){ return $native.call(this); };
    }
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES  ? $default : getMethod(VALUES),
      keys:    IS_SET      ? $default : getMethod(KEYS),
      entries: !DEF_VALUES ? $default : getMethod('entries')
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};
},{"./$":44,"./$.export":30,"./$.has":34,"./$.hide":35,"./$.iter-create":40,"./$.iterators":43,"./$.library":45,"./$.redefine":50,"./$.set-to-string-tag":52,"./$.wks":61}],42:[function(_dereq_,module,exports){
module.exports = function(done, value){
  return {value: value, done: !!done};
};
},{}],43:[function(_dereq_,module,exports){
module.exports = {};
},{}],44:[function(_dereq_,module,exports){
var $Object = Object;
module.exports = {
  create:     $Object.create,
  getProto:   $Object.getPrototypeOf,
  isEnum:     {}.propertyIsEnumerable,
  getDesc:    $Object.getOwnPropertyDescriptor,
  setDesc:    $Object.defineProperty,
  setDescs:   $Object.defineProperties,
  getKeys:    $Object.keys,
  getNames:   $Object.getOwnPropertyNames,
  getSymbols: $Object.getOwnPropertySymbols,
  each:       [].forEach
};
},{}],45:[function(_dereq_,module,exports){
module.exports = true;
},{}],46:[function(_dereq_,module,exports){
// 19.1.2.1 Object.assign(target, source, ...)
var $        = _dereq_('./$')
  , toObject = _dereq_('./$.to-object')
  , IObject  = _dereq_('./$.iobject');

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = _dereq_('./$.fails')(function(){
  var a = Object.assign
    , A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , $$    = arguments
    , $$len = $$.length
    , index = 1
    , getKeys    = $.getKeys
    , getSymbols = $.getSymbols
    , isEnum     = $.isEnum;
  while($$len > index){
    var S      = IObject($$[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  }
  return T;
} : Object.assign;
},{"./$":44,"./$.fails":31,"./$.iobject":36,"./$.to-object":59}],47:[function(_dereq_,module,exports){
// most Object methods by ES6 should accept primitives
var $export = _dereq_('./$.export')
  , core    = _dereq_('./$.core')
  , fails   = _dereq_('./$.fails');
module.exports = function(KEY, exec){
  var fn  = (core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
};
},{"./$.core":26,"./$.export":30,"./$.fails":31}],48:[function(_dereq_,module,exports){
module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};
},{}],49:[function(_dereq_,module,exports){
var redefine = _dereq_('./$.redefine');
module.exports = function(target, src){
  for(var key in src)redefine(target, key, src[key]);
  return target;
};
},{"./$.redefine":50}],50:[function(_dereq_,module,exports){
module.exports = _dereq_('./$.hide');
},{"./$.hide":35}],51:[function(_dereq_,module,exports){
'use strict';
var core        = _dereq_('./$.core')
  , $           = _dereq_('./$')
  , DESCRIPTORS = _dereq_('./$.descriptors')
  , SPECIES     = _dereq_('./$.wks')('species');

module.exports = function(KEY){
  var C = core[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};
},{"./$":44,"./$.core":26,"./$.descriptors":29,"./$.wks":61}],52:[function(_dereq_,module,exports){
var def = _dereq_('./$').setDesc
  , has = _dereq_('./$.has')
  , TAG = _dereq_('./$.wks')('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};
},{"./$":44,"./$.has":34,"./$.wks":61}],53:[function(_dereq_,module,exports){
var global = _dereq_('./$.global')
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};
},{"./$.global":33}],54:[function(_dereq_,module,exports){
module.exports = function(it, Constructor, name){
  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
  return it;
};
},{}],55:[function(_dereq_,module,exports){
var toInteger = _dereq_('./$.to-integer')
  , defined   = _dereq_('./$.defined');
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};
},{"./$.defined":28,"./$.to-integer":56}],56:[function(_dereq_,module,exports){
// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};
},{}],57:[function(_dereq_,module,exports){
// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = _dereq_('./$.iobject')
  , defined = _dereq_('./$.defined');
module.exports = function(it){
  return IObject(defined(it));
};
},{"./$.defined":28,"./$.iobject":36}],58:[function(_dereq_,module,exports){
// 7.1.15 ToLength
var toInteger = _dereq_('./$.to-integer')
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};
},{"./$.to-integer":56}],59:[function(_dereq_,module,exports){
// 7.1.13 ToObject(argument)
var defined = _dereq_('./$.defined');
module.exports = function(it){
  return Object(defined(it));
};
},{"./$.defined":28}],60:[function(_dereq_,module,exports){
var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};
},{}],61:[function(_dereq_,module,exports){
var store  = _dereq_('./$.shared')('wks')
  , uid    = _dereq_('./$.uid')
  , Symbol = _dereq_('./$.global').Symbol;
module.exports = function(name){
  return store[name] || (store[name] =
    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
};
},{"./$.global":33,"./$.shared":53,"./$.uid":60}],62:[function(_dereq_,module,exports){
var classof   = _dereq_('./$.classof')
  , ITERATOR  = _dereq_('./$.wks')('iterator')
  , Iterators = _dereq_('./$.iterators');
module.exports = _dereq_('./$.core').getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};
},{"./$.classof":21,"./$.core":26,"./$.iterators":43,"./$.wks":61}],63:[function(_dereq_,module,exports){
var anObject = _dereq_('./$.an-object')
  , get      = _dereq_('./core.get-iterator-method');
module.exports = _dereq_('./$.core').getIterator = function(it){
  var iterFn = get(it);
  if(typeof iterFn != 'function')throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};
},{"./$.an-object":20,"./$.core":26,"./core.get-iterator-method":62}],64:[function(_dereq_,module,exports){
'use strict';
var addToUnscopables = _dereq_('./$.add-to-unscopables')
  , step             = _dereq_('./$.iter-step')
  , Iterators        = _dereq_('./$.iterators')
  , toIObject        = _dereq_('./$.to-iobject');

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = _dereq_('./$.iter-define')(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');
},{"./$.add-to-unscopables":19,"./$.iter-define":41,"./$.iter-step":42,"./$.iterators":43,"./$.to-iobject":57}],65:[function(_dereq_,module,exports){
// 19.1.3.1 Object.assign(target, source)
var $export = _dereq_('./$.export');

$export($export.S + $export.F, 'Object', {assign: _dereq_('./$.object-assign')});
},{"./$.export":30,"./$.object-assign":46}],66:[function(_dereq_,module,exports){
// 19.1.2.14 Object.keys(O)
var toObject = _dereq_('./$.to-object');

_dereq_('./$.object-sap')('keys', function($keys){
  return function keys(it){
    return $keys(toObject(it));
  };
});
},{"./$.object-sap":47,"./$.to-object":59}],67:[function(_dereq_,module,exports){

},{}],68:[function(_dereq_,module,exports){
'use strict';
var strong = _dereq_('./$.collection-strong');

// 23.2 Set Objects
_dereq_('./$.collection')('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);
},{"./$.collection":25,"./$.collection-strong":23}],69:[function(_dereq_,module,exports){
'use strict';
var $at  = _dereq_('./$.string-at')(true);

// 21.1.3.27 String.prototype[@@iterator]()
_dereq_('./$.iter-define')(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});
},{"./$.iter-define":41,"./$.string-at":55}],70:[function(_dereq_,module,exports){
// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export  = _dereq_('./$.export');

$export($export.P, 'Set', {toJSON: _dereq_('./$.collection-to-json')('Set')});
},{"./$.collection-to-json":24,"./$.export":30}],71:[function(_dereq_,module,exports){
_dereq_('./es6.array.iterator');
var Iterators = _dereq_('./$.iterators');
Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
},{"./$.iterators":43,"./es6.array.iterator":64}],72:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _toolsOrbitControls = _dereq_('./tools/OrbitControls');

var _toolsTransformControls = _dereq_('./tools/TransformControls');

var _ThreeCanvas = _dereq_('./ThreeCanvas');

var _ThreeCanvas2 = _interopRequireDefault(_ThreeCanvas);

var Player = (function () {
	function Player(canvas) {
		_classCallCheck(this, Player);

		this.loader = new THREE.ObjectLoader();
		this.scene = null;
		this.envScene = null;
		this.threeCanvas = canvas;
		this.prevTime = 0;
		this.curObj = null;
		this.dirLight = null;
	}

	_createClass(Player, [{
		key: 'currentObj',
		value: function currentObj() {
			if (this.curObj != null) {
				return this.curObj;
			}

			var scope = this;
			this.scene.traverse(function (object) {
				if (object instanceof THREE.Mesh) {
					scope.curObj = object;
					return scope.curObj;
				}
			});

			//should not happen.
			//this.setObject(0);

			return this.curObj;
		}
	}, {
		key: 'curMaterial',
		value: function curMaterial() {
			if (this.curMat != null) {
				return this.curMat;
			}
			this.curMat = this.createShaderMaterial(this.threeCanvas.getInputHeader() + _ThreeCanvas2['default'].EMPTY_FRAG_SHADER, this.threeCanvas.getInputHeader() + _ThreeCanvas2['default'].EMPTY_VERTEX_SHADER);
			return this.curMat;
		}
	}, {
		key: 'curVertexShader',
		value: function curVertexShader() {
			return _ThreeCanvas2['default'].removeShaderHeader(this.currentObj().material.vertexShader);
		}
	}, {
		key: 'curFragSahder',
		value: function curFragSahder() {
			return _ThreeCanvas2['default'].removeShaderHeader(this.currentObj().material.fragmentShader);
		}
	}, {
		key: 'updateCurMaterial',
		value: function updateCurMaterial(frag, vertex) {
			this.curMaterial().vertexShader = vertex;
			this.curMaterial().fragmentShader = frag;
			this.curMaterial().needsUpdate = true;
			this.curMaterial().extensions.derivatives = true;
		}
	}, {
		key: 'createShaderMaterial',
		value: function createShaderMaterial(frag, vertex) {
			return new THREE.ShaderMaterial({
				uniforms: this.threeCanvas.getInputUniforms(),
				vertexShader: vertex,
				fragmentShader: frag
			});
		}
	}, {
		key: 'clear',
		value: function clear() {
			if (this.scene != null) {
				while (this.scene.children.length > 0) {
					this.scene.remove(this.scene.children[0]);
				}
			}

			if (this.envScene != null) {
				while (this.envScene.children.length > 0) {
					this.envScene.remove(this.envScene.children[0]);
				}
			}

			this.curMat = null;
			this.curObj = null;
		}
	}, {
		key: 'createSceneObject',
		value: function createSceneObject(type) {
			var geometry = null;
			var position = null;
			var plane = -1.0;
			var planeR = 14.0;
			if (type == 0) {
				position = new THREE.Vector3(0, plane, 0);
				geometry = new THREE.BoxGeometry(planeR, 0.1, planeR);
			} else if (type == 1) {
				var height = THREE.Math.randFloat(0.8, 8);
				position = new THREE.Vector3(THREE.Math.randFloat(-planeR * 0.5, planeR * 0.5), height / 2.0 + plane, THREE.Math.randFloat(-planeR * 0.5, planeR * 0.5));
				var width = THREE.Math.randFloat(0.8, 1.6);
				geometry = new THREE.BoxGeometry(width, height, width);
			}

			var rcolor = new THREE.Color(0xffffff);
			rcolor.setHex(THREE.Math.randFloat(0.5, 1.0) * 0xffffff);
			if (type == 0) {
				rcolor.setHex(0x888888);
			}
			var material = new THREE.MeshPhongMaterial({ color: rcolor });
			var object = new THREE.Mesh(geometry, material);
			object.castShadow = true;
			object.receiveShadow = true;
			object.position.set(position.x, position.y, position.z);
			this.envScene.add(object);
		}
	}, {
		key: 'useLight',
		value: function useLight(flag) {
			if (this.envScene == null) {
				return;
			}

			var lightObj = this.envScene.getObjectByName("dirLight");
			this.envScene.remove(lightObj);
			if (flag) {
				this.dirLight = new THREE.DirectionalLight(0xffffff, 1.0);
				this.dirLight.position.set(10, 10, 10);
				this.dirLight.target.position.set(0, 0, 0);
				//this.dirLight.shadowCameraVisible = true;
				this.dirLight.castShadow = true;
				this.dirLight.name = "dirLight";
				this.envScene.add(this.dirLight);
			}
		}
	}, {
		key: 'createEnvScene',
		value: function createEnvScene() {
			if (this.envScene != null) {
				while (this.envScene.children.length > 0) {
					this.envScene.remove(this.envScene.children[0]);
				}
			}

			this.envScene = new THREE.Scene();
			this.createSceneObject(0);
			for (var i = 0; i < 14; i++) {
				this.createSceneObject(1);
			}

			var light = new THREE.AmbientLight(0x404040); // soft white light
			this.envScene.add(light);
		}
	}, {
		key: 'clearEnvScene',
		value: function clearEnvScene() {
			this.envScene = null;
			this.dirLight = null;
		}
	}, {
		key: 'setObject',
		value: function setObject(type) {
			//clear last
			for (var i = this.scene.children.length - 1; i >= 0; i--) {
				var obj = this.scene.children[i];
				if (obj instanceof THREE.Mesh) {
					this.scene.remove(obj);
				}
			}

			var geometry = null;
			if (type == 0) {
				geometry = new THREE.SphereBufferGeometry(1, 50, 50);
			} else if (type == 1) {
				geometry = new THREE.BoxBufferGeometry(1, 1, 1);
			} else if (type == 2) {
				geometry = new THREE.TorusKnotBufferGeometry(1, 0.4, 64, 8);
			} else if (type == 3) {
				geometry = new THREE.PlaneBufferGeometry(3, 3, 40, 40);
			} else if (type == 4) {
				geometry = new THREE.CylinderBufferGeometry(1, 1, 3, 50);
			} else if (type == 5) {
				geometry = new THREE.IcosahedronBufferGeometry(1, 1);
			} else if (type == 6) {
				geometry = new THREE.TorusBufferGeometry(1, 0.4, 16, 100);
			}

			//THREE.BufferGeometryUtils.computeTangents( geometry );
			this.computeTangent(geometry);
			// geometry.verticesNeedUpdate = true;
			// geometry.normalsNeedUpdate = true;
			// geometry.uvsNeedUpdate = true;
			// //geometry.computeCentroids();
			// geometry.computeFaceNormals();
			// geometry.computeVertexNormals();
			// geometry.computeMorphNormals();
			// geometry.computeTangents();

			this.curObj = new THREE.Mesh(geometry, this.curMaterial());
			this.curObj.name = "MeshObj";
			this.curObj.position.set(0, 0, 0);

			var scope = this;
			// this.curObj.onBeforeRender = function( renderer, scene, camera, geometry, material, group ) {
			// 	material.uniforms.iTime.value = performance.now() / 1000.0;
			// };

			this.scene.add(this.curObj);
		}
	}, {
		key: 'computeTangent',
		value: function computeTangent(geometry) {

			var index = geometry.index;
			var attributes = geometry.attributes;

			if (attributes == undefined) {
				console.error('compute tangent function only support buffer geometry');
				return;
			}

			// based on http://www.terathon.com/code/tangent.html
			// (per vertex tangents)

			if (index === null || attributes.position === undefined || attributes.normal === undefined || attributes.uv === undefined) {

				console.warn('THREE.BufferGeometry: Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()');
				return;
			}

			var indices = index.array;
			var positions = attributes.position.array;
			var normals = attributes.normal.array;
			var uvs = attributes.uv.array;

			var nVertices = positions.length / 3;

			if (attributes.tangent === undefined) {

				geometry.addAttribute('tangent', new THREE.BufferAttribute(new Float32Array(4 * nVertices), 4));
			}

			var tangents = attributes.tangent.array;

			var tan1 = [],
			    tan2 = [];

			for (var k = 0; k < nVertices; k++) {

				tan1[k] = new THREE.Vector3();
				tan2[k] = new THREE.Vector3();
			}

			var vA = new THREE.Vector3(),
			    vB = new THREE.Vector3(),
			    vC = new THREE.Vector3(),
			    uvA = new THREE.Vector2(),
			    uvB = new THREE.Vector2(),
			    uvC = new THREE.Vector2(),
			    sdir = new THREE.Vector3(),
			    tdir = new THREE.Vector3();

			function handleTriangle(a, b, c) {

				vA.fromArray(positions, a * 3);
				vB.fromArray(positions, b * 3);
				vC.fromArray(positions, c * 3);

				uvA.fromArray(uvs, a * 2);
				uvB.fromArray(uvs, b * 2);
				uvC.fromArray(uvs, c * 2);

				var x1 = vB.x - vA.x;
				var x2 = vC.x - vA.x;

				var y1 = vB.y - vA.y;
				var y2 = vC.y - vA.y;

				var z1 = vB.z - vA.z;
				var z2 = vC.z - vA.z;

				var s1 = uvB.x - uvA.x;
				var s2 = uvC.x - uvA.x;

				var t1 = uvB.y - uvA.y;
				var t2 = uvC.y - uvA.y;

				var r = 1.0 / (s1 * t2 - s2 * t1);

				sdir.set((t2 * x1 - t1 * x2) * r, (t2 * y1 - t1 * y2) * r, (t2 * z1 - t1 * z2) * r);

				tdir.set((s1 * x2 - s2 * x1) * r, (s1 * y2 - s2 * y1) * r, (s1 * z2 - s2 * z1) * r);

				tan1[a].add(sdir);
				tan1[b].add(sdir);
				tan1[c].add(sdir);

				tan2[a].add(tdir);
				tan2[b].add(tdir);
				tan2[c].add(tdir);
			}

			var groups = geometry.groups;

			if (groups.length === 0) {

				groups = [{
					start: 0,
					count: indices.length
				}];
			}

			for (var j = 0, jl = groups.length; j < jl; ++j) {

				var group = groups[j];

				var start = group.start;
				var count = group.count;

				for (var i = start, il = start + count; i < il; i += 3) {

					handleTriangle(indices[i + 0], indices[i + 1], indices[i + 2]);
				}
			}

			var tmp = new THREE.Vector3(),
			    tmp2 = new THREE.Vector3();
			var n = new THREE.Vector3(),
			    n2 = new THREE.Vector3();
			var w, t, test;

			function handleVertex(v) {

				n.fromArray(normals, v * 3);
				n2.copy(n);

				t = tan1[v];

				// Gram-Schmidt orthogonalize

				tmp.copy(t);
				tmp.sub(n.multiplyScalar(n.dot(t))).normalize();

				// Calculate handedness

				tmp2.crossVectors(n2, t);
				test = tmp2.dot(tan2[v]);
				w = test < 0.0 ? -1.0 : 1.0;

				tangents[v * 4] = tmp.x;
				tangents[v * 4 + 1] = tmp.y;
				tangents[v * 4 + 2] = tmp.z;
				tangents[v * 4 + 3] = w;
			}

			for (var j = 0, jl = groups.length; j < jl; ++j) {

				var group = groups[j];

				var start = group.start;
				var count = group.count;

				for (var i = start, il = start + count; i < il; i += 3) {

					handleVertex(indices[i + 0]);
					handleVertex(indices[i + 1]);
					handleVertex(indices[i + 2]);
				}
			}
		}
	}, {
		key: 'newScene',
		value: function newScene() {
			this.clear();
			this.scene = new THREE.Scene();
		}
	}, {
		key: 'load',
		value: function load(json, data) {
			this.clear();
			this.scene = this.loader.parse(json.scene);
			if (json.envScene != null) {
				this.envScene = this.loader.parse(json.envScene);
				this.dirLight = this.envScene.getObjectByName("dirLight");
			}
			this.curMat = this.curMaterial();
			this.updateCurMaterial(json.frag, json.vert);
			this.curMat.needsUpdate = true;

			this.useLight(data.useLight);
		}
	}, {
		key: 'toJSON',
		value: function toJSON() {
			var scope = this;
			this.scene.traverse(function (object) {
				if (object instanceof THREE.Mesh) {
					if (object.material instanceof THREE.ShaderMaterial) {
						for (var i = 0; i < scope.threeCanvas.data.textures.length; i++) {
							var property = 'iTexture' + i;
							object.material.uniforms[property].value = null;
						}
						object.material.uniforms.iDepthTexture.value = null;
					}
				}
			});

			return {
				metadata: {},
				scene: this.scene.toJSON(),
				envScene: this.envScene != null ? this.envScene.toJSON() : null,
				frag: this.curMaterial().fragmentShader,
				vert: this.curMaterial().vertexShader
			};
		}
	}, {
		key: 'updateUniforms',
		value: function updateUniforms() {
			var scope = this;

			var curTime = performance.now() / 1000.0;
			if (scope.dirLight != null) {
				this.dirLight.position.set(10 * Math.sin(curTime), 10, 10 * Math.cos(curTime));
				this.dirLight.target.position.set(0, 0, 0);

				//ie bug?
				if (scope.dirLight.position.x < 9999) {
					scope.currentObj().material.uniforms.iLightDirection.value = -this.dirLight.position;
				}
			}

			// this.curMaterial().uniforms.iTime.value = curTime;
			// this.curMaterial().uniforms.iResolution.value.x = scope.threeCanvas.canvas.clientWidth;
			// this.curMaterial().uniforms.iResolution.value.y = scope.threeCanvas.canvas.clientHeight;
			// this.curMaterial().uniforms.iCameraNear.value = scope.threeCanvas.camera.near;
			// this.curMaterial().uniforms.iCameraFar.value = scope.threeCanvas.camera.far;
			// this.curMaterial().uniforms.iDepthTexture.value = scope.threeCanvas.depthTarget.depthTexture;

			scope.currentObj().material.uniforms.iTime.value = curTime;
			scope.currentObj().material.uniforms.iResolution.value.x = scope.threeCanvas.canvas.clientWidth;
			scope.currentObj().material.uniforms.iResolution.value.y = scope.threeCanvas.canvas.clientHeight;
			scope.currentObj().material.uniforms.iCameraNear.value = scope.threeCanvas.camera.near;
			scope.currentObj().material.uniforms.iCameraFar.value = scope.threeCanvas.camera.far;
			scope.currentObj().material.uniforms.iDepthTexture.value = scope.threeCanvas.depthTarget.depthTexture;
			scope.currentObj().matrixWorld.getInverse(scope.currentObj().material.uniforms.iWorld2ObjectMatrix.value);

			for (var i = 0; i < scope.threeCanvas.data.textures.length; i++) {
				var property = 'iTexture' + i;
				scope.currentObj().material.uniforms[property].value = scope.threeCanvas.data.textures[i];
				if (scope.currentObj().material.uniforms[property].value != null && scope.currentObj().material.uniforms[property].value != undefined) {
					scope.currentObj().material.uniforms[property].value.wrapS = scope.currentObj().material.uniforms[property].value.wrapT = THREE.RepeatWrapping;
				}
			}
		}
	}]);

	return Player;
})();

exports.Player = Player;

},{"./ThreeCanvas":75,"./tools/OrbitControls":77,"./tools/TransformControls":78,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9,"babel-runtime/helpers/interop-require-default":10}],73:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = _dereq_('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _ThreeCanvas = _dereq_('./ThreeCanvas');

var _ThreeCanvas2 = _interopRequireDefault(_ThreeCanvas);

var RenderPass = (function () {
	function RenderPass(canvas, renderer, downRes, renderToScreen, frag, vertex, index, passName) {
		_classCallCheck(this, RenderPass);

		this.threeCanvas = canvas;
		this.width = canvas.canvas.clientWidth;
		this.height = canvas.canvas.clientHeight;

		this.index = index;

		if (passName == null || passName == undefined) {
			this.passName = 'Name';
		} else {
			this.passName = passName;
		}

		this.camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
		this.scene = new THREE.Scene();
		this.quad = new THREE.Mesh(new THREE.PlaneBufferGeometry(2, 2), null);
		this.quad.frustumCulled = false; // Avoid getting clipped
		this.scene.add(this.quad);

		//this.uniforms = this.threeCanvas.getInputUniforms();
		this.material = new THREE.ShaderMaterial({
			uniforms: null,
			vertexShader: this.threeCanvas.getInputHeader() + vertex,
			fragmentShader: this.threeCanvas.getInputHeader() + frag
		});

		this.refreshUniforms();

		this.renderer = renderer;
		this.renderToScreen = renderToScreen;
		this.downRes = downRes;
		this.setTargetTexture(downRes);
		this.updateMaterial(this.threeCanvas.getInputHeader() + vertex, this.threeCanvas.getInputHeader() + frag);
	}

	_createClass(RenderPass, [{
		key: 'setSize',
		value: function setSize(width, height) {
			this.width = width;
			this.height = height;
			this.renderTarget.setSize(width * this.downRes, height * this.downRes);
		}
	}, {
		key: 'setRes',
		value: function setRes(res) {
			this.downRes = res;
			this.setSize(this.width, this.height);
		}
	}, {
		key: 'toJSON',
		value: function toJSON() {
			return {
				downRes: this.downRes,
				renderToScreen: this.renderToScreen,
				frag: this.material.fragmentShader,
				vertex: this.material.vertexShader,
				passName: this.passName
			};
		}
	}, {
		key: 'render',
		value: function render() {
			this.quad.material = this.material;
			if (this.renderToScreen) {
				this.renderer.render(this.scene, this.camera);
			} else {
				this.renderer.render(this.scene, this.camera, this.renderTarget, true);
			}
		}
	}, {
		key: 'refreshUniforms',
		value: function refreshUniforms() {
			this.uniforms = this.threeCanvas.getInputUniforms();
			this.material.uniforms = this.uniforms;
		}
	}, {
		key: 'updateMaterial',
		value: function updateMaterial(vertexShader, fragmentShader) {
			this.refreshUniforms();
			this.material.vertexShader = vertexShader;
			this.material.fragmentShader = fragmentShader;
			this.material.needsUpdate = true;
		}
	}, {
		key: 'setTargetTexture',
		value: function setTargetTexture(downRes) {
			var parameters = {
				minFilter: THREE.LinearFilter,
				magFilter: THREE.LinearFilter,
				format: THREE.RGBAFormat,
				stencilBuffer: false
			};
			var size = this.renderer.getDrawingBufferSize();
			this.renderTarget = new THREE.WebGLRenderTarget(size.width * downRes, size.height * downRes, parameters);
			//renderTarget.texture.name = 'EffectComposer.rt1';
		}
	}]);

	return RenderPass;
})();

exports.RenderPass = RenderPass;

},{"./ThreeCanvas":75,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9,"babel-runtime/helpers/interop-require-default":10}],74:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _RenderPass = _dereq_('./RenderPass');

var TData = (function () {
	function TData(owner) {
		_classCallCheck(this, TData);

		this.owner = owner;
		this.textures = new Array(2);
		this.images = {};
		this.editMode = 0;
		this.blending = 0;
		this.side = 0;
		this.transparent = false;
		this.objScale = new THREE.Vector3(1, 1, 1);
		this.objPos = new THREE.Vector3(0, 0, 0);
		this.objRot = new THREE.Vector3(0, 0, 0);
		this.objectType = 0;
		this.flatShading = false;
		this.wireframe = false;
		this.depthWrite = true;
		this.depthTest = true;
		this.renderPasses = new Array();
		this.passDatas = [];
		this.showScene = false;
		this.useLight = false;
		this.animateScale = false;
	}

	_createClass(TData, [{
		key: 'toJSON',
		value: function toJSON() {
			var texData = [];
			this.images = {};
			var backup = this.textures.slice();
			this.textures = new Array(2);
			for (var i = 0; i < backup.length; i++) {
				if (backup[i] == null || backup[i].image == undefined || backup[i].image == null) {
					texData.push(null);
				} else {
					//NOTE!!!
					//toJSON(this) will set images data, and textures!!
					texData.push(backup[i].toJSON(this));
				}
			}
			this.textures = backup;

			this.passDatas = [];
			for (var i = 0; i < this.renderPasses.length; i++) {
				this.passDatas.push(this.renderPasses[i].toJSON());
			}

			return {
				textures: texData,
				images: this.images,
				editMode: this.editMode,
				blending: this.blending,
				side: this.side,
				transparent: this.transparent,
				objScale: this.objScale,
				objPos: this.objPos,
				objRot: this.objRot,
				objectType: this.objectType,
				flatShading: this.flatShading,
				wireframe: this.wireframe,
				depthWrite: this.depthWrite,
				depthTest: this.depthTest,
				passDatas: this.passDatas,
				showScene: this.showScene,
				useLight: this.useLight,
				animateScale: this.animateScale
			};
		}
	}, {
		key: 'loadFromJSON',
		value: function loadFromJSON(json) {

			this.textures = json.textures;
			this.images = json.images;
			this.editMode = json.editMode;
			this.blending = json.blending == undefined ? 0 : json.blending;
			this.side = json.side == undefined ? 0 : json.side;
			this.transparent = json.transparent == undefined ? true : json.transparent;

			this.objScale = json.objScale, this.objPos = json.objPos, this.objRot = json.objRot, this.objectType = json.objectType == undefined ? 0 : json.objectType;
			this.flatShading = json.flatShading == undefined ? false : json.flatShading;
			this.wireframe = json.wireframe == undefined ? false : json.wireframe;
			this.depthWrite = json.depthWrite == undefined ? false : json.depthWrite;
			this.depthTest = json.depthTest == undefined ? false : json.depthTest;
			this.passDatas = json.passDatas;
			this.showScene = json.showScene;
			this.useLight = json.useLight;
			this.animateScale = json.animateScale == undefined ? false : json.animateScale;
			for (var i = 0; i < this.textures.length; i++) {
				if (this.textures[i] == null) {
					this.textures[i] = {};
				}
			}

			var loader = new THREE.ObjectLoader();
			var imageDatas = [];
			for (var ele in this.images) {
				imageDatas.push(this.images[ele]);
			}

			var imageElements = loader.parseImages(imageDatas);

			var texDatas = loader.parseTextures(this.textures, imageElements);
			//this.textures = [];

			for (var i = 0; i < this.textures.length; i++) {
				if (this.textures[i].uuid == undefined) {
					continue;
				}
				for (var ele in texDatas) {
					if (this.textures[i].uuid === ele) {
						this.textures[i] = texDatas[ele];
					}
				}
			}
		}
	}]);

	return TData;
})();

exports.TData = TData;

},{"./RenderPass":73,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9}],75:[function(_dereq_,module,exports){
'use strict';

var _createClass = _dereq_('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = _dereq_('babel-runtime/helpers/class-call-check')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _toolsMixin = _dereq_('./tools/mixin');

var _toolsOrbitControls = _dereq_('./tools/OrbitControls');

var _toolsLoader = _dereq_('./tools/Loader');

var _toolsTransformControls = _dereq_('./tools/TransformControls');

var _Player = _dereq_('./Player');

var _RenderPass = _dereq_('./RenderPass');

var _TData = _dereq_('./TData');

//import { ShaderPass, ClearPass, RenderPass, EffectComposer,CopyShader,DotScreenShader } from './EffectComposer.js';

var VERTEX_HEADER_THREE = '\nprecision highp float;\n//Three.js Built-in uniforms and attributes\n//https://threejs.org/docs/#api/renderers/webgl/WebGLProgram\n// = object.matrixWorld\nuniform mat4 modelMatrix;\n// = camera.matrixWorldInverse * object.matrixWorld\nuniform mat4 modelViewMatrix;\n// = camera.projectionMatrix\nuniform mat4 projectionMatrix;\n// = camera.matrixWorldInverse\nuniform mat4 viewMatrix;\n// = inverse transpose of modelViewMatrix\nuniform mat3 normalMatrix;\n// = camera position in world space\nuniform vec3 cameraPosition;\n\n// default vertex attributes provided by Geometry and BufferGeometry\nattribute vec3 position;\nattribute vec3 normal;\nattribute vec2 uv;\nattribute vec2 uv2;\n';

var FRAG_HEADER_THREE = '\nprecision highp float;\n//Three.js Built-in uniforms and attributes\n//https://threejs.org/docs/#api/renderers/webgl/WebGLProgram\n// = object.matrixWorld\nuniform mat4 modelMatrix;\n// = camera.matrixWorldInverse * object.matrixWorld\nuniform mat4 modelViewMatrix;\n// = camera.projectionMatrix\nuniform mat4 projectionMatrix;\n// = camera.matrixWorldInverse\nuniform mat4 viewMatrix;\n// = inverse transpose of modelViewMatrix\nuniform mat3 normalMatrix;\n// = camera position in world space\nuniform vec3 cameraPosition;\n';

var EMPTY_VERTEX_SHADER = '\nvarying vec3 fNormal;\nvarying vec3 fPosition;\nvarying vec2 fUV;\n\nvoid main()\n{\n    fNormal = normal;\n    vec4 wpos = modelMatrix * vec4(position, 1.0);\n    fPosition = wpos.xyz;\n    fUV = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n';

var EMPTY_FRAG_SHADER = '\nvarying vec3 fPosition;\nvarying vec3 fNormal;\nvarying vec2 fUV;\n\nvec3 rim(vec3 color, float start, float end, float coef)\n{\n  vec3 normal = normalize(fNormal);\n  vec3 eye = normalize(cameraPosition- fPosition);\n  float rim = smoothstep(start, end, 1.0 - dot(normal, eye));\n  return clamp(rim, 0.0, 1.0) * coef * color;\n}\n\n\nvoid main()\n{\n    vec3 rimColor = rim(vec3(0.764,1.000,0.857),0.360,1.144,1.816);\n    vec3 baseColor = fNormal * sin(iTime * 3.0);\n    gl_FragColor = vec4(rimColor + baseColor,1.0);\n}\n';

var VIGNETTE_VERTEX = '\nvarying vec2 fUV;\nvoid main() {\n    fUV = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n';

var VIGNETTE_FRAG = '\nvarying vec2 fUV;\n//Fill the iPass0 texture with Vignette shader.\nvoid main() {\n    float offset = 1.0;\n    float darkness = 1.0;\n    vec4 backColor = vec4(0.203,0.293,0.485,1.000);\n    vec2 uv = ( fUV - vec2(0.5,0.5) ) * vec2( offset );\n    gl_FragColor = vec4( mix( backColor.rgb, vec3( 1.0 - darkness ), dot( uv, uv ) ), backColor.a );\n}\n';

var COMPOSE_FRAG = '\nvarying vec2 fUV;\n//iPass0 is rendered by iPass0(the Vignette shader)\n//iSceneTexture is rendered by the Object shader\nvoid main() {\n    vec4 object = texture2D( iSceneTexture, fUV );\n    vec4 background = texture2D( iPass0, fUV );\n    gl_FragColor = mix(background, object, object.a);\n}\n';

var DEFAULT_PASS_VERTEX = '\nvarying vec2 fUV;\nvoid main() {\n    fUV = uv;\n    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}\n';

var DEFAULT_PASS_FRAG = '\nvarying vec2 fUV;\nvoid main() {\n    vec4 texel = texture2D( iSceneTexture, fUV );\n    gl_FragColor = texel;\n}\n';

var THREE_PACKING = "vec3 packNormalToRGB( const in vec3 normal ) {return normalize( normal ) * 0.5 + 0.5;\r\n}\r\n\r\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\r\n\treturn 2.0 * rgb.xyz - 1.0;\r\n}\r\n\r\nconst float PackUpscale = 256. / 255.; // fraction -> 0..1 (including 1)\r\nconst float UnpackDownscale = 255. / 256.; // 0..1 -> fraction (excluding 1)\r\n\r\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\r\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\r\n\r\nconst float ShiftRight8 = 1. / 256.;\r\n\r\nvec4 packDepthToRGBA( const in float v ) {\r\n\tvec4 r = vec4( fract( v * PackFactors ), v );\r\n\tr.yzw -= r.xyz * ShiftRight8; // tidy overflow\r\n\treturn r * PackUpscale;\r\n}\r\n\r\nfloat unpackRGBAToDepth( const in vec4 v ) {\r\n\treturn dot( v, UnpackFactors );\r\n}\r\n\r\n// NOTE: viewZ/eyeZ is < 0 when in front of the camera per OpenGL conventions\r\n\r\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\r\n\treturn ( viewZ + near ) / ( near - far );\r\n}\r\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\r\n\treturn linearClipZ * ( near - far ) - near;\r\n}\r\n\r\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\r\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\r\n}\r\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\r\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\r\n}\r\n";

var ThreeCanvas = (function () {
    _createClass(ThreeCanvas, [{
        key: 'getInputHeader',
        value: function getInputHeader() {
            var header = '//header-begin\r\n';
            var params = 'uniform float iTime;\r\nuniform vec2 iResolution;\r\nuniform sampler2D iDepthTexture;\r\nuniform sampler2D iSceneTexture;\r\nuniform float iCameraNear;\r\nuniform float iCameraFar;\r\n';
            for (var i = 0; i < this.data.textures.length; i++) {
                params += 'uniform sampler2D iTexture' + i + ';\r\n';
            }
            for (var i = 0; i < this.data.renderPasses.length; i++) {
                params += 'uniform sampler2D iPass' + i + ';\r\n';
            }

            if (this.data.showScene && this.data.useLight) {
                params += 'uniform vec3 iLightDirection;\r\n';
            }

            params += 'uniform mat4 iWorld2ObjectMatrix;\r\n';

            var end = '//header-end\r\n';

            var ret = header + params + end;

            //console.log(ret);
            return ret;
        }
    }, {
        key: 'getInputUniforms',
        value: function getInputUniforms() {
            if (this.input_uniforms == null || this.input_uniforms == undefined) {
                this.input_uniforms = {
                    iTime: {
                        value: 0.0
                    },
                    iResolution: {
                        value: new THREE.Vector2()
                    },
                    iSceneTexture: {
                        value: null
                    },
                    iDepthTexture: {
                        value: null
                    },
                    iCameraNear: {
                        value: 0.0
                    },
                    iCameraFar: {
                        value: 0.0
                    },
                    iLightDirection: {
                        value: new THREE.Vector3(0, 0, 0)
                    },
                    iWorld2ObjectMatrix: {
                        value: new THREE.Matrix4()
                    }
                };
            }

            for (var i = 0; i < this.data.textures.length; i++) {
                var property = 'iTexture' + i;
                this.input_uniforms[property] = { value: null };
            }

            for (var i = 0; i < this.data.renderPasses.length; i++) {
                var property = 'iPass' + i;
                this.input_uniforms[property] = { value: null };
            }

            return this.input_uniforms;
        }

        //todo: use regexp
    }], [{
        key: 'removeShaderHeader',
        value: function removeShaderHeader(shader) {
            //var regex = /^\/\/header-begin.*\/\/header-end/gm;
            //var regex = /^header-begin(.*)/g;
            var begin = shader.indexOf("//header-begin");
            var end = shader.indexOf("//header-end");
            var substr = shader.substr(begin, end - begin + 13);
            shader = shader.replace(substr, "");
            if (shader.startsWith("\n")) {
                shader = shader.substr(1, shader.length - 1);
            }
            if (shader.startsWith("\n")) {
                shader = shader.substr(1, shader.length - 1);
            }
            return shader;
        }
    }, {
        key: 'EMPTY_VERTEX_SHADER',
        get: function get() {
            return EMPTY_VERTEX_SHADER;
        }
    }, {
        key: 'EMPTY_FRAG_SHADER',
        get: function get() {
            return EMPTY_FRAG_SHADER;
        }
    }, {
        key: 'VERTEX_HEADER_THREE',
        get: function get() {
            return VERTEX_HEADER_THREE;
        }
    }, {
        key: 'FRAG_HEADER_THREE',
        get: function get() {
            return FRAG_HEADER_THREE;
        }
    }, {
        key: 'THREE_PACKING',
        get: function get() {
            return THREE_PACKING;
        }
    }]);

    function ThreeCanvas(canvas) {
        _classCallCheck(this, ThreeCanvas);

        (0, _toolsMixin.subscribeMixin)(this);
        this.player = undefined;
        this.inited = false;
        this.frame = 0;
        this.rendererInited = false;
        this.completedCallback = undefined;
        this.transformControls = undefined;
        this.canvas = canvas;
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            canvas: this.canvas
        });
        this.renderer.autoClear = false;
        this.renderer.shadowMap.enabled = true;
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
        this.camera.position.z = 2;
        this.camera.position.y = 2;
        this.camera.lookAt(0, 0, 0);

        this.limitFrame = -1;
        this.useControl = true;

        //setupDepthRenderer
        this.sceneTarget = new THREE.WebGLRenderTarget(this.canvas.clientWidth, this.canvas.clientHeight);
        this.sceneTarget.texture.format = THREE.RGBAFormat;
        this.sceneTarget.texture.minFilter = THREE.NearestFilter;
        this.sceneTarget.texture.magFilter = THREE.NearestFilter;
        this.sceneTarget.texture.generateMipmaps = false;
        this.sceneTarget.stencilBuffer = false;
        this.sceneTarget.depthBuffer = true;

        this.depthTarget = new THREE.WebGLRenderTarget(this.canvas.clientWidth, this.canvas.clientHeight);
        this.depthTarget.texture.format = THREE.RGBAFormat;
        this.depthTarget.texture.minFilter = THREE.NearestFilter;
        this.depthTarget.texture.magFilter = THREE.NearestFilter;
        this.depthTarget.texture.generateMipmaps = false;
        this.depthTarget.stencilBuffer = false;
        this.depthTarget.depthBuffer = true;
        this.depthTarget.depthTexture = new THREE.DepthTexture();
        this.depthTarget.depthTexture.type = THREE.UnsignedShortType;

        return this;
    }

    _createClass(ThreeCanvas, [{
        key: 'resetCamera',
        value: function resetCamera() {
            this.camera.position.z = 2;
            this.camera.position.y = 2;
            this.camera.lookAt(0, 0, 0);
            this.controls.target0 = new THREE.Vector3();
            this.controls.position0 = this.camera.position;
            this.controls.zoom0 = this.camera.zoom;
            this.controls.reset();
        }
    }, {
        key: 'newPass',
        value: function newPass(index) {
            return new _RenderPass.RenderPass(this, this.renderer, 1, true, DEFAULT_PASS_FRAG, DEFAULT_PASS_VERTEX, index);
        }
    }, {
        key: 'toJSON',
        value: function toJSON() {
            return {
                data: this.data.toJSON(),
                player: this.player.toJSON(),
                cameraPos: this.camera.position,
                cameraRot: this.camera.rotation.toVector3(),
                cameraController: this.controls.toJSON()
            };
        }
    }, {
        key: 'updateData',
        value: function updateData() {
            this.player.setObject(this.data.objectType);
            this.player.curMaterial().blending = this.data.blending;
            this.player.curMaterial().side = this.data.side;
            this.player.curMaterial().flatShading = this.data.flatShading;
            this.player.curMaterial().transparent = this.data.transparent;
            this.player.curMaterial().wireframe = this.data.wireframe;
            this.player.curMaterial().depthWrite = this.data.depthWrite;
            this.player.curMaterial().depthTest = this.data.depthTest;
            this.player.currentObj().scale.set(this.data.objScale.x, this.data.objScale.y, this.data.objScale.z);
            this.player.currentObj().position.set(this.data.objPos.x, this.data.objPos.y, this.data.objPos.z);
            this.player.currentObj().rotation.set(this.data.objRot.x, this.data.objRot.y, this.data.objRot.z);
        }
    }, {
        key: 'load',
        value: function load(path, completeCallback) {
            var scope = this;
            this.completedCallback = completeCallback;
            var loader = new THREE.FileLoader();
            loader.load(path, function (text) {
                var dataJSON = JSON.parse(text);
                scope.loadFromJSON(dataJSON.threeCanvas, scope.completedCallback);
            });
        }
    }, {
        key: 'loadFromJSON',
        value: function loadFromJSON(json, completeCallback) {

            if (this.useControl) {
                this.controls = new _toolsOrbitControls.OrbitControls(this.camera, this.canvas);
                this.controls.enableKeys = false;
            }

            this.data = new _TData.TData(this);
            this.data.loadFromJSON(json.data);

            this.player = new _Player.Player(this);
            this.player.load(json.player, this.data);
            this.frame = 0;
            this.rendererInited = false;
            this.completedCallback = completeCallback;
            for (var i = 0; i < this.data.passDatas.length; i++) {
                var pdata = this.data.passDatas[i];
                this.data.renderPasses.push(new _RenderPass.RenderPass(this, this.renderer, pdata.downRes, pdata.renderToScreen, ThreeCanvas.removeShaderHeader(pdata.frag), ThreeCanvas.removeShaderHeader(pdata.vertex), i, pdata.passName));
            }

            this.camera.position.set(json.cameraPos.x, json.cameraPos.y, json.cameraPos.z);
            this.camera.rotation.set(json.cameraRot.x, json.cameraRot.y, json.cameraRot.z);
            if (this.useControl) {
                this.controls.fromJSON(json.cameraController);
                this.controls.reset();
            }

            this.updateData();
            this.inited = true;
            this.play();
        }
    }, {
        key: 'new',
        value: function _new(completeCallback) {

            if (this.useControl) {
                this.controls = new _toolsOrbitControls.OrbitControls(this.camera, this.canvas);
                this.controls.enableKeys = false;
            }

            this.frame = 0;
            this.rendererInited = false;
            this.player = new _Player.Player(this);
            this.player.newScene();
            this.completedCallback = completeCallback;
            this.data = new _TData.TData(this);

            // //background
            // this.data.renderPasses.push(new RenderPass(this,this.renderer,1,true,VIGNETTE_FRAG,DEFAULT_PASS_VERTEX,0));
            // //compose
            // this.data.renderPasses.push(new RenderPass(this,this.renderer,1,true,COMPOSE_FRAG,DEFAULT_PASS_VERTEX,1));

            // this.data.renderPasses[0].passName = 'Background';
            // this.data.renderPasses[1].passName = 'Compose';
            // this.data.renderPasses[0].renderToScreen = false;

            this.updateData();
            this.inited = true;
            this.play();
        }
    }, {
        key: 'play',
        value: function play() {
            var scope = this;
            this.prevTime = performance.now();
            function RenderLoop() {

                if (scope.rendererInited && scope.limitFrame > 0) {
                    if (scope.frame % scope.limitFrame != 0) {
                        if (scope.useControl) {
                            scope.controls.update();
                        }

                        window.requestAnimationFrame(RenderLoop);
                        scope.frame++;
                        return;
                    }
                }

                if (scope.inited) {

                    //should not reset uniforms in every frame.
                    //scope.refreshUniforms();

                    scope.player.updateUniforms();
                    //render depth buffer
                    if (scope.player.envScene != null) {
                        scope.renderer.render(scope.player.envScene, scope.camera, scope.depthTarget, true);
                        scope.renderer.render(scope.player.scene, scope.camera, scope.depthTarget);
                    } else {
                        scope.renderer.render(scope.player.scene, scope.camera, scope.depthTarget, true);
                    }

                    //assign depth
                    scope.updateUniforms();
                    //render the main scene.
                    if (scope.data.renderPasses.length == 0) {
                        if (scope.player.envScene != null) {
                            scope.renderer.render(scope.player.envScene, scope.camera, null, true);
                            scope.renderer.render(scope.player.scene, scope.camera, null, false);
                        } else {
                            scope.renderer.render(scope.player.scene, scope.camera, null, true);
                        }
                    } else {
                        if (scope.player.envScene != null) {
                            scope.renderer.render(scope.player.envScene, scope.camera, scope.sceneTarget, true);
                            scope.renderer.render(scope.player.scene, scope.camera, scope.sceneTarget);
                        } else {
                            scope.renderer.render(scope.player.scene, scope.camera, scope.sceneTarget, true);
                        }
                    }

                    for (var i = 0; i < scope.data.renderPasses.length; i++) {
                        scope.data.renderPasses[i].material.uniforms.iSceneTexture.value = scope.sceneTarget.texture;
                        if (i > 0) {
                            var property = 'iPass' + (i - 1);
                            scope.data.renderPasses[i].material.uniforms[property].value = scope.data.renderPasses[i - 1].renderTarget.texture;
                        }
                        scope.data.renderPasses[i].render();
                    }

                    scope.frame++;
                    if (scope.frame > 1 && !scope.rendererInited) {
                        if (scope.completedCallback != null && scope.completedCallback != undefined) {
                            scope.completedCallback();
                        }
                        //scope.refreshUniforms();
                        scope.rendererInited = true;
                    }

                    if (scope.data.animateScale) {
                        var curTime = performance.now() / 1000.0;
                        var factor = Math.sin(curTime * 1.0) * 0.5 + 0.6;
                        scope.player.currentObj().scale.set(scope.data.objScale.x * factor, scope.data.objScale.y * factor, scope.data.objScale.z * factor);
                    }
                }

                if (scope.useControl) {
                    scope.controls.update();
                }
                window.requestAnimationFrame(RenderLoop);
            }
            RenderLoop();
        }
    }, {
        key: 'createGLShader',
        value: function createGLShader(canvas, source, type) {
            var gl = this.getContext();
            var shader = gl.createShader(type);
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            var compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
            if (!compiled) {
                var lastError = gl.getShaderInfoLog(shader);
                console.error('*** Error compiling shader ' + shader + ':' + lastError);
                var headerLine = 0;

                if (type == this.getContext().VERTEX_SHADER) {
                    canvas.trigger('vertex_error', { shader: shader, source: source, type: type, error: lastError, headerLine: this.vertexHeaderLine() });
                } else {
                    canvas.trigger('frag_error', { shader: shader, source: source, type: type, error: lastError, headerLine: this.fragHeaderLine() });
                }
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        }
    }, {
        key: 'getContext',
        value: function getContext() {
            return this.renderer.getContext();
        }
    }, {
        key: 'resizeUseCanvas',
        value: function resizeUseCanvas() {
            this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
            var dpr = this.renderer.getPixelRatio();

            for (var i = 0; i < this.data.renderPasses.length; i++) {
                this.data.renderPasses[i].setSize(this.canvas.clientWidth * dpr, this.canvas.clientHeight * dpr);
            }

            this.sceneTarget.setSize(this.canvas.clientWidth * dpr, this.canvas.clientHeight * dpr);
        }
    }, {
        key: 'resize',
        value: function resize(w, h) {
            this.canvas.style.width = w + 'px';
            this.canvas.style.height = h + 'px';

            this.resizeUseCanvas();
        }
    }, {
        key: 'curVertexShader',
        value: function curVertexShader() {
            if (this.data.editMode == 0) {
                return this.player.curVertexShader();
            } else {
                return ThreeCanvas.removeShaderHeader(this.data.renderPasses[this.data.editMode - 1].material.vertexShader);
            }
        }
    }, {
        key: 'curFragSahder',
        value: function curFragSahder() {
            if (this.data.editMode == 0) {
                return this.player.curFragSahder();
            } else {
                return ThreeCanvas.removeShaderHeader(this.data.renderPasses[this.data.editMode - 1].material.fragmentShader);
            }
        }
    }, {
        key: 'vertexHeaderLine',
        value: function vertexHeaderLine() {
            return (this.getInputHeader() + ThreeCanvas.VERTEX_HEADER_THREE).split(/\r\n|\r|\n/).length;
        }
    }, {
        key: 'fragHeaderLine',
        value: function fragHeaderLine() {
            return (this.getInputHeader() + ThreeCanvas.FRAG_HEADER_THREE).split(/\r\n|\r|\n/).length;
        }
    }, {
        key: 'refreshUniforms',
        value: function refreshUniforms() {
            this.player.curMaterial().uniforms = this.getInputUniforms();
            for (var i = 0; i < this.data.renderPasses.length; i++) {
                this.data.renderPasses[i].refreshUniforms();
            }
        }
    }, {
        key: 'updateRenderPassUniforms',
        value: function updateRenderPassUniforms() {
            var scope = this;
            for (var i = 0; i < this.data.renderPasses.length; i++) {

                this.data.renderPasses[i].material.uniforms.iTime.value = performance.now() / 1000.0;
                this.data.renderPasses[i].material.uniforms.iResolution.value.x = scope.canvas.clientWidth;
                this.data.renderPasses[i].material.uniforms.iResolution.value.y = scope.canvas.clientHeight;
                this.data.renderPasses[i].material.uniforms.iCameraNear.value = scope.camera.near;
                this.data.renderPasses[i].material.uniforms.iCameraFar.value = scope.camera.far;
                if (scope.player.dirLight != null && scope.player.dirLight.position.x < 9999) {
                    this.data.renderPasses[i].material.uniforms.iLightDirection.value = -scope.player.dirLight.position;
                }
                //set iSceneTexture later.
                //this.data.renderPasses[i].material.uniforms.iSceneTexture.value = scope.sceneTarget;

                this.data.renderPasses[i].material.uniforms.iDepthTexture.value = scope.depthTarget.depthTexture;

                for (var k = 0; k < scope.data.textures.length; k++) {
                    var property = 'iTexture' + k;
                    scope.data.renderPasses[i].material.uniforms[property].value = scope.data.textures[k];
                }
            }
        }
    }, {
        key: 'updateUniforms',
        value: function updateUniforms() {
            this.player.updateUniforms();
            this.updateRenderPassUniforms();
        }
    }, {
        key: 'updateCurMaterial',
        value: function updateCurMaterial(fragString, vertString) {
            if (this.data.editMode == 0) {
                this.player.updateCurMaterial(this.getInputHeader() + fragString, this.getInputHeader() + vertString);
            } else {
                for (var i = 0; i < this.data.renderPasses.length; i++) {
                    if (this.data.editMode - 1 == i) {
                        this.data.renderPasses[i].updateMaterial(this.getInputHeader() + vertString, this.getInputHeader() + fragString);
                    }
                }
            }
        }
    }, {
        key: 'checkLoadEditorShader',
        value: function checkLoadEditorShader(fragString, vertString) {
            var vertexShader = null;
            var fragmentShader = null;

            vertexShader = this.createGLShader(this, ThreeCanvas.VERTEX_HEADER_THREE + this.getInputHeader() + vertString, this.getContext().VERTEX_SHADER);
            fragmentShader = this.createGLShader(this, ThreeCanvas.FRAG_HEADER_THREE + this.getInputHeader() + fragString, this.getContext().FRAGMENT_SHADER);

            if (!fragmentShader || !vertexShader) {
                this.isValid = false;
            } else {
                this.isValid = true;
                this.updateCurMaterial(fragString, vertString);
            }

            var gl = this.getContext();
            if (fragmentShader) {
                gl.deleteShader(fragmentShader);
            }
            if (vertexShader) {
                gl.deleteShader(vertexShader);
            }
        }
    }]);

    return ThreeCanvas;
})();

exports['default'] = ThreeCanvas;
module.exports = exports['default'];

},{"./Player":72,"./RenderPass":73,"./TData":74,"./tools/Loader":76,"./tools/OrbitControls":77,"./tools/TransformControls":78,"./tools/mixin":79,"babel-runtime/helpers/class-call-check":8,"babel-runtime/helpers/create-class":9}],76:[function(_dereq_,module,exports){
/**
 * @author mrdoob / http://mrdoob.com/
 */
/**
 * modified by shallway
 * This class was designed to load local files in the threejs Editor, in order to load url files, I made some fixes. 
 * May not compatible with further threejs scene file format.
 * fixed:
 * 1, added onAddObj, onAddScene callbacks.
 * 2, export handleJSON function to parse json datas directly.
 */

//import * as THREE from 'three';

'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.Loader = Loader;

function Loader(onAddObj, onAddScene) {

	var scope = this;
	//var signals = editor.signals;

	this.texturePath = '';

	this.loadFile = function (file) {

		var filename = file.name;
		var extension = filename.split('.').pop().toLowerCase();

		var reader = new FileReader();
		reader.addEventListener('progress', function (event) {

			var size = '(' + Math.floor(event.total / 1000) + ' KB)';
			var progress = Math.floor(event.loaded / event.total * 100) + '%';
			console.log('Loading', filename, size, progress);
		});

		switch (extension) {

			case '3ds':

				reader.addEventListener('load', function (event) {

					var loader = new THREE.TDSLoader();
					var object = loader.parse(event.target.result);

					//editor.execute( new AddObjectCommand( object ) );
					if (onAddObj) onAddObj(object);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'amf':

				reader.addEventListener('load', function (event) {

					var loader = new THREE.AMFLoader();
					var amfobject = loader.parse(event.target.result);

					//editor.execute( new AddObjectCommand( amfobject ) );
					if (onAddObj) onAddObj(amfobject);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'awd':

				reader.addEventListener('load', function (event) {

					var loader = new THREE.AWDLoader();
					var scene = loader.parse(event.target.result);

					//editor.execute( new SetSceneCommand( scene ) );
					if (onAddScene) onAddScene(scene);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'babylon':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;
					var json = JSON.parse(contents);

					var loader = new THREE.BabylonLoader();
					var scene = loader.parse(json);

					//editor.execute( new SetSceneCommand( scene ) );
					if (onAddScene) onAddScene(scene);
				}, false);
				reader.readAsText(file);

				break;

			case 'babylonmeshdata':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;
					var json = JSON.parse(contents);

					var loader = new THREE.BabylonLoader();

					var geometry = loader.parseGeometry(json);
					var material = new THREE.MeshStandardMaterial();

					var mesh = new THREE.Mesh(geometry, material);
					mesh.name = filename;

					//editor.execute( new AddObjectCommand( mesh ) );
					if (onAddObj) onAddObj(mesh);
				}, false);
				reader.readAsText(file);

				break;

			case 'ctm':

				reader.addEventListener('load', function (event) {

					var data = new Uint8Array(event.target.result);

					var stream = new CTM.Stream(data);
					stream.offset = 0;

					var loader = new THREE.CTMLoader();
					loader.createModel(new CTM.File(stream), function (geometry) {

						geometry.sourceType = "ctm";
						geometry.sourceFile = file.name;

						var material = new THREE.MeshStandardMaterial();

						var mesh = new THREE.Mesh(geometry, material);
						mesh.name = filename;

						//editor.execute( new AddObjectCommand( mesh ) );
						if (onAddObj) onAddObj(mesh);
					});
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'dae':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var loader = new THREE.ColladaLoader();
					var collada = loader.parse(contents);

					collada.scene.name = filename;

					//editor.execute( new AddObjectCommand( collada.scene ) );
					if (onAddObj) onAddObj(collada.scene);
				}, false);
				reader.readAsText(file);

				break;

			case 'fbx':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var loader = new THREE.FBXLoader();
					var object = loader.parse(contents);

					//editor.execute( new AddObjectCommand( object ) );
					if (onAddObj) onAddObj(object);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'glb':
			case 'gltf':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var loader = new THREE.GLTFLoader();
					loader.parse(contents, '', function (result) {

						result.scene.name = filename;
						//editor.execute( new AddObjectCommand( result.scene ) );
						if (onAddObj) onAddObj(result.scene);
					});
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'js':
			case 'json':

			case '3geo':
			case '3mat':
			case '3obj':
			case '3scn':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					// 2.0

					if (contents.indexOf('postMessage') !== -1) {

						var blob = new Blob([contents], { type: 'text/javascript' });
						var url = URL.createObjectURL(blob);

						var worker = new Worker(url);

						worker.onmessage = function (event) {

							event.data.metadata = { version: 2 };
							handleJSON(event.data, file, filename);
						};

						worker.postMessage(Date.now());

						return;
					}

					// >= 3.0

					var data;

					try {

						data = JSON.parse(contents);
					} catch (error) {

						alert(error);
						return;
					}

					handleJSON(data, file, filename);
				}, false);
				reader.readAsText(file);

				break;

			case 'kmz':

				reader.addEventListener('load', function (event) {

					var loader = new THREE.KMZLoader();
					var collada = loader.parse(event.target.result);

					collada.scene.name = filename;

					//editor.execute( new AddObjectCommand( collada.scene ) );
					if (onAddObj) onAddObj(collada.scene);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'md2':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var geometry = new THREE.MD2Loader().parse(contents);
					var material = new THREE.MeshStandardMaterial({
						morphTargets: true,
						morphNormals: true
					});

					var mesh = new THREE.Mesh(geometry, material);
					mesh.mixer = new THREE.AnimationMixer(mesh);
					mesh.name = filename;

					//editor.execute( new AddObjectCommand( mesh ) );
					if (onAddObj) onAddObj(mesh);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'obj':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var object = new THREE.OBJLoader().parse(contents);
					object.name = filename;

					//editor.execute( new AddObjectCommand( object ) );
					if (onAddObj) onAddObj(object);
				}, false);
				reader.readAsText(file);

				break;

			case 'playcanvas':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;
					var json = JSON.parse(contents);

					var loader = new THREE.PlayCanvasLoader();
					var object = loader.parse(json);

					//editor.execute( new AddObjectCommand( object ) );
					if (onAddObj) onAddObj(object);
				}, false);
				reader.readAsText(file);

				break;

			case 'ply':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var geometry = new THREE.PLYLoader().parse(contents);
					geometry.sourceType = "ply";
					geometry.sourceFile = file.name;

					var material = new THREE.MeshStandardMaterial();

					var mesh = new THREE.Mesh(geometry, material);
					mesh.name = filename;

					//editor.execute( new AddObjectCommand( mesh ) );
					if (onAddObj) onAddObj(mesh);
				}, false);
				reader.readAsArrayBuffer(file);

				break;

			case 'stl':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var geometry = new THREE.STLLoader().parse(contents);
					geometry.sourceType = "stl";
					geometry.sourceFile = file.name;

					var material = new THREE.MeshStandardMaterial();

					var mesh = new THREE.Mesh(geometry, material);
					mesh.name = filename;

					//editor.execute( new AddObjectCommand( mesh ) );
					if (onAddObj) onAddObj(mesh);
				}, false);

				if (reader.readAsBinaryString !== undefined) {

					reader.readAsBinaryString(file);
				} else {

					reader.readAsArrayBuffer(file);
				}

				break;

			/*
   case 'utf8':
   		reader.addEventListener( 'load', function ( event ) {
   			var contents = event.target.result;
   			var geometry = new THREE.UTF8Loader().parse( contents );
   		var material = new THREE.MeshLambertMaterial();
   			var mesh = new THREE.Mesh( geometry, material );
   			editor.execute( new AddObjectCommand( mesh ) );
   		}, false );
   	reader.readAsBinaryString( file );
   		break;
   */

			case 'vtk':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var geometry = new THREE.VTKLoader().parse(contents);
					geometry.sourceType = "vtk";
					geometry.sourceFile = file.name;

					var material = new THREE.MeshStandardMaterial();

					var mesh = new THREE.Mesh(geometry, material);
					mesh.name = filename;

					//editor.execute( new AddObjectCommand( mesh ) );
					if (onAddObj) onAddObj(mesh);
				}, false);
				reader.readAsText(file);

				break;

			case 'wrl':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var result = new THREE.VRMLLoader().parse(contents);

					//editor.execute( new SetSceneCommand( result ) );
					if (onAddScene) onAddScene(scene);
				}, false);
				reader.readAsText(file);

				break;

			case 'zip':

				reader.addEventListener('load', function (event) {

					var contents = event.target.result;

					var zip = new JSZip(contents);

					// BLOCKS

					if (zip.files['model.obj'] && zip.files['materials.mtl']) {

						var materials = new THREE.MTLLoader().parse(zip.file('materials.mtl').asText());
						var object = new THREE.OBJLoader().setMaterials(materials).parse(zip.file('model.obj').asText());
						//editor.execute( new AddObjectCommand( object ) );
						if (onAddObj) onAddObj(object);
					}
				}, false);
				reader.readAsBinaryString(file);

				break;

			default:

				alert('Unsupported file format (' + extension + ').');

				break;

		}
	};

	this.handleJSON = function (data, file, filename) {

		if (data.metadata === undefined) {
			// 2.0

			data.metadata = { type: 'Geometry' };
		}

		if (data.metadata.type === undefined) {
			// 3.0

			data.metadata.type = 'Geometry';
		}

		if (data.metadata.formatVersion !== undefined) {

			data.metadata.version = data.metadata.formatVersion;
		}

		switch (data.metadata.type.toLowerCase()) {

			case 'buffergeometry':

				var loader = new THREE.BufferGeometryLoader();
				var result = loader.parse(data);

				var mesh = new THREE.Mesh(result);

				//editor.execute( new AddObjectCommand( mesh ) );
				if (onAddObj) onAddObj(mesh);

				break;

			case 'geometry':

				var loader = new THREE.JSONLoader();
				loader.setTexturePath(scope.texturePath);

				var result = loader.parse(data);

				var geometry = result.geometry;
				var material;

				if (result.materials !== undefined) {

					if (result.materials.length > 1) {

						material = new THREE.MultiMaterial(result.materials);
					} else {

						material = result.materials[0];
					}
				} else {

					material = new THREE.MeshStandardMaterial();
				}

				geometry.sourceType = "ascii";
				if (file) {
					geometry.sourceFile = file.name;
				}

				var mesh;

				if (geometry.animation && geometry.animation.hierarchy) {

					mesh = new THREE.SkinnedMesh(geometry, material);
				} else {

					mesh = new THREE.Mesh(geometry, material);
				}
				if (filename) {
					mesh.name = filename;
				}
				//editor.execute( new AddObjectCommand( mesh ) );
				if (onAddObj) onAddObj(mesh);
				break;

			case 'object':

				var loader = new THREE.ObjectLoader();
				loader.setTexturePath(scope.texturePath);

				var result = loader.parse(data);

				if (result instanceof THREE.Scene) {

					//editor.execute( new SetSceneCommand( result ) );
					if (onAddScene) onAddScene(result);
				} else {

					//editor.execute( new AddObjectCommand( result ) );
					if (onAddObj) onAddObj(result);
				}

				break;

			case 'app':

				//editor.fromJSON( data );

				break;

		}
	};
}

;

},{}],77:[function(_dereq_,module,exports){
/**
 * @author qiao / https://github.com/qiao
 * @author mrdoob / http://mrdoob.com
 * @author alteredq / http://alteredqualia.com/
 * @author WestLangley / http://github.com/WestLangley
 * @author erich666 / http://erichaines.com
 */

// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one finger move
//    Zoom - middle mouse, or mousewheel / touch: two finger spread or squish
//    Pan - right mouse, or arrow keys / touch: three finger swipe

//import * as THREE from 'three';

'use strict';

var _Object$create = _dereq_('babel-runtime/core-js/object/create')['default'];

var _Object$defineProperties = _dereq_('babel-runtime/core-js/object/define-properties')['default'];

Object.defineProperty(exports, '__esModule', {
		value: true
});
exports.OrbitControls = OrbitControls;

function OrbitControls(object, domElement) {

		this.object = object;

		this.domElement = domElement !== undefined ? domElement : document;

		// Set to false to disable this control
		this.enabled = true;

		// "target" sets the location of focus, where the object orbits around
		this.target = new THREE.Vector3();

		// How far you can dolly in and out ( PerspectiveCamera only )
		this.minDistance = 0;
		this.maxDistance = Infinity;

		// How far you can zoom in and out ( OrthographicCamera only )
		this.minZoom = 0;
		this.maxZoom = Infinity;

		// How far you can orbit vertically, upper and lower limits.
		// Range is 0 to Math.PI radians.
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		// How far you can orbit horizontally, upper and lower limits.
		// If set, must be a sub-interval of the interval [ - Math.PI, Math.PI ].
		this.minAzimuthAngle = -Infinity; // radians
		this.maxAzimuthAngle = Infinity; // radians

		// Set to true to enable damping (inertia)
		// If damping is enabled, you must call controls.update() in your animation loop
		this.enableDamping = false;
		this.dampingFactor = 0.25;

		// This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
		// Set to false to disable zooming
		this.enableZoom = true;
		this.zoomSpeed = 1.0;

		// Set to false to disable rotating
		this.enableRotate = true;
		this.rotateSpeed = 1.0;

		// Set to false to disable panning
		this.enablePan = true;
		this.keyPanSpeed = 7.0; // pixels moved per arrow key push

		// Set to true to automatically rotate around the target
		// If auto-rotate is enabled, you must call controls.update() in your animation loop
		this.autoRotate = false;
		this.autoRotateSpeed = 2.0; // 30 seconds per round when fps is 60

		// Set to false to disable use of the keys
		this.enableKeys = true;

		// The four arrow keys
		this.keys = { LEFT: 37, UP: 38, RIGHT: 39, BOTTOM: 40 };

		// Mouse buttons
		this.mouseButtons = { ORBIT: THREE.MOUSE.LEFT, ZOOM: THREE.MOUSE.MIDDLE, PAN: THREE.MOUSE.RIGHT };

		// for reset
		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.zoom0 = this.object.zoom;

		//
		// public methods
		//

		this.getPolarAngle = function () {

				return spherical.phi;
		};

		this.getAzimuthalAngle = function () {

				return spherical.theta;
		};

		this.saveState = function () {

				scope.target0.copy(scope.target);
				scope.position0.copy(scope.object.position);
				scope.zoom0 = scope.object.zoom;
		};

		this.toJSON = function () {
				return {
						target: scope.target,
						position: scope.position,
						zoom: scope.zoom
				};
		};

		this.fromJSON = function (json) {
				scope.target0 = json.target;
				scope.position0 = json.position0;
				scope.zoom0 = json.zoom0;
		};

		this.reset = function () {

				if (scope.target0 != undefined) {
						scope.target.copy(scope.target0);
				}

				if (scope.position0 != undefined) {
						scope.object.position.copy(scope.position0);
				}

				if (scope.object.zoom0 != undefined) {
						scope.object.zoom = scope.zoom0;
				}

				scope.object.updateProjectionMatrix();
				scope.dispatchEvent(changeEvent);

				scope.update();

				state = STATE.NONE;
		};

		// this method is exposed, but perhaps it would be better if we can make it private...
		this.update = (function () {

				var offset = new THREE.Vector3();

				// so camera.up is the orbit axis
				var quat = new THREE.Quaternion().setFromUnitVectors(object.up, new THREE.Vector3(0, 1, 0));
				var quatInverse = quat.clone().inverse();

				var lastPosition = new THREE.Vector3();
				var lastQuaternion = new THREE.Quaternion();

				return function update() {

						var position = scope.object.position;

						offset.copy(position).sub(scope.target);

						// rotate offset to "y-axis-is-up" space
						offset.applyQuaternion(quat);

						// angle from z-axis around y-axis
						spherical.setFromVector3(offset);

						if (scope.autoRotate && state === STATE.NONE) {

								rotateLeft(getAutoRotationAngle());
						}

						spherical.theta += sphericalDelta.theta;
						spherical.phi += sphericalDelta.phi;

						// restrict theta to be between desired limits
						spherical.theta = Math.max(scope.minAzimuthAngle, Math.min(scope.maxAzimuthAngle, spherical.theta));

						// restrict phi to be between desired limits
						spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));

						spherical.makeSafe();

						spherical.radius *= scale;

						// restrict radius to be between desired limits
						spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

						// move target to panned location
						scope.target.add(panOffset);

						offset.setFromSpherical(spherical);

						// rotate offset back to "camera-up-vector-is-up" space
						offset.applyQuaternion(quatInverse);

						position.copy(scope.target).add(offset);

						scope.object.lookAt(scope.target);

						if (scope.enableDamping === true) {

								sphericalDelta.theta *= 1 - scope.dampingFactor;
								sphericalDelta.phi *= 1 - scope.dampingFactor;
						} else {

								sphericalDelta.set(0, 0, 0);
						}

						scale = 1;
						panOffset.set(0, 0, 0);

						// update condition is:
						// min(camera displacement, camera rotation in radians)^2 > EPS
						// using small-angle approximation cos(x/2) = 1 - x^2 / 8

						if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {

								scope.dispatchEvent(changeEvent);

								lastPosition.copy(scope.object.position);
								lastQuaternion.copy(scope.object.quaternion);
								zoomChanged = false;

								return true;
						}

						return false;
				};
		})();

		this.dispose = function () {

				scope.domElement.removeEventListener('contextmenu', onContextMenu, false);
				scope.domElement.removeEventListener('mousedown', onMouseDown, false);
				scope.domElement.removeEventListener('wheel', onMouseWheel, false);

				scope.domElement.removeEventListener('touchstart', onTouchStart, false);
				scope.domElement.removeEventListener('touchend', onTouchEnd, false);
				scope.domElement.removeEventListener('touchmove', onTouchMove, false);

				document.removeEventListener('mousemove', onMouseMove, false);
				document.removeEventListener('mouseup', onMouseUp, false);

				window.removeEventListener('keydown', onKeyDown, false);

				//scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
		};

		//
		// internals
		//

		var scope = this;

		var changeEvent = { type: 'change' };
		var startEvent = { type: 'start' };
		var endEvent = { type: 'end' };

		var STATE = { NONE: -1, ROTATE: 0, DOLLY: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_DOLLY: 4, TOUCH_PAN: 5 };

		var state = STATE.NONE;

		var EPS = 0.000001;

		// current position in spherical coordinates
		var spherical = new THREE.Spherical();
		var sphericalDelta = new THREE.Spherical();

		var scale = 1;
		var panOffset = new THREE.Vector3();
		var zoomChanged = false;

		var rotateStart = new THREE.Vector2();
		var rotateEnd = new THREE.Vector2();
		var rotateDelta = new THREE.Vector2();

		var panStart = new THREE.Vector2();
		var panEnd = new THREE.Vector2();
		var panDelta = new THREE.Vector2();

		var dollyStart = new THREE.Vector2();
		var dollyEnd = new THREE.Vector2();
		var dollyDelta = new THREE.Vector2();

		function getAutoRotationAngle() {

				return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
		}

		function getZoomScale() {

				return Math.pow(0.95, scope.zoomSpeed);
		}

		function rotateLeft(angle) {

				sphericalDelta.theta -= angle;
		}

		function rotateUp(angle) {

				sphericalDelta.phi -= angle;
		}

		var panLeft = (function () {

				var v = new THREE.Vector3();

				return function panLeft(distance, objectMatrix) {

						v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
						v.multiplyScalar(-distance);

						panOffset.add(v);
				};
		})();

		var panUp = (function () {

				var v = new THREE.Vector3();

				return function panUp(distance, objectMatrix) {

						v.setFromMatrixColumn(objectMatrix, 1); // get Y column of objectMatrix
						v.multiplyScalar(distance);

						panOffset.add(v);
				};
		})();

		// deltaX and deltaY are in pixels; right and down are positive
		var pan = (function () {

				var offset = new THREE.Vector3();

				return function pan(deltaX, deltaY) {

						var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

						if (scope.object.isPerspectiveCamera) {

								// perspective
								var position = scope.object.position;
								offset.copy(position).sub(scope.target);
								var targetDistance = offset.length();

								// half of the fov is center to top of screen
								targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

								// we actually don't use screenWidth, since perspective camera is fixed to screen height
								panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
								panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
						} else if (scope.object.isOrthographicCamera) {

								// orthographic
								panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
								panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
						} else {

								// camera neither orthographic nor perspective
								console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
								scope.enablePan = false;
						}
				};
		})();

		function dollyIn(dollyScale) {

				if (scope.object.isPerspectiveCamera) {

						scale /= dollyScale;
				} else if (scope.object.isOrthographicCamera) {

						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
						scope.object.updateProjectionMatrix();
						zoomChanged = true;
				} else {

						console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
						scope.enableZoom = false;
				}
		}

		function dollyOut(dollyScale) {

				if (scope.object.isPerspectiveCamera) {

						scale *= dollyScale;
				} else if (scope.object.isOrthographicCamera) {

						scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
						scope.object.updateProjectionMatrix();
						zoomChanged = true;
				} else {

						console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
						scope.enableZoom = false;
				}
		}

		//
		// event callbacks - update the object state
		//

		function handleMouseDownRotate(event) {

				//console.log( 'handleMouseDownRotate' );

				rotateStart.set(event.clientX, event.clientY);
		}

		function handleMouseDownDolly(event) {

				//console.log( 'handleMouseDownDolly' );

				dollyStart.set(event.clientX, event.clientY);
		}

		function handleMouseDownPan(event) {

				//console.log( 'handleMouseDownPan' );

				panStart.set(event.clientX, event.clientY);
		}

		function handleMouseMoveRotate(event) {

				//console.log( 'handleMouseMoveRotate' );

				rotateEnd.set(event.clientX, event.clientY);
				rotateDelta.subVectors(rotateEnd, rotateStart);

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				// rotating across whole screen goes 360 degrees around
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

				// rotating up and down along whole screen attempts to go 360, but limited to 180
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

				rotateStart.copy(rotateEnd);

				scope.update();
		}

		function handleMouseMoveDolly(event) {

				//console.log( 'handleMouseMoveDolly' );

				dollyEnd.set(event.clientX, event.clientY);

				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

						dollyIn(getZoomScale());
				} else if (dollyDelta.y < 0) {

						dollyOut(getZoomScale());
				}

				dollyStart.copy(dollyEnd);

				scope.update();
		}

		function handleMouseMovePan(event) {

				//console.log( 'handleMouseMovePan' );

				panEnd.set(event.clientX, event.clientY);

				panDelta.subVectors(panEnd, panStart);

				pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);

				scope.update();
		}

		function handleMouseUp(event) {

				// console.log( 'handleMouseUp' );

		}

		function handleMouseWheel(event) {

				// console.log( 'handleMouseWheel' );

				if (event.deltaY < 0) {

						dollyOut(getZoomScale());
				} else if (event.deltaY > 0) {

						dollyIn(getZoomScale());
				}

				scope.update();
		}

		function handleKeyDown(event) {

				//console.log( 'handleKeyDown' );

				switch (event.keyCode) {

						case scope.keys.UP:
								pan(0, scope.keyPanSpeed);
								scope.update();
								break;

						case scope.keys.BOTTOM:
								pan(0, -scope.keyPanSpeed);
								scope.update();
								break;

						case scope.keys.LEFT:
								pan(scope.keyPanSpeed, 0);
								scope.update();
								break;

						case scope.keys.RIGHT:
								pan(-scope.keyPanSpeed, 0);
								scope.update();
								break;

				}
		}

		function handleTouchStartRotate(event) {

				//console.log( 'handleTouchStartRotate' );

				rotateStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}

		function handleTouchStartDolly(event) {

				//console.log( 'handleTouchStartDolly' );

				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;

				var distance = Math.sqrt(dx * dx + dy * dy);

				dollyStart.set(0, distance);
		}

		function handleTouchStartPan(event) {

				//console.log( 'handleTouchStartPan' );

				panStart.set(event.touches[0].pageX, event.touches[0].pageY);
		}

		function handleTouchMoveRotate(event) {

				//console.log( 'handleTouchMoveRotate' );

				rotateEnd.set(event.touches[0].pageX, event.touches[0].pageY);
				rotateDelta.subVectors(rotateEnd, rotateStart);

				var element = scope.domElement === document ? scope.domElement.body : scope.domElement;

				// rotating across whole screen goes 360 degrees around
				rotateLeft(2 * Math.PI * rotateDelta.x / element.clientWidth * scope.rotateSpeed);

				// rotating up and down along whole screen attempts to go 360, but limited to 180
				rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight * scope.rotateSpeed);

				rotateStart.copy(rotateEnd);

				scope.update();
		}

		function handleTouchMoveDolly(event) {

				//console.log( 'handleTouchMoveDolly' );

				var dx = event.touches[0].pageX - event.touches[1].pageX;
				var dy = event.touches[0].pageY - event.touches[1].pageY;

				var distance = Math.sqrt(dx * dx + dy * dy);

				dollyEnd.set(0, distance);

				dollyDelta.subVectors(dollyEnd, dollyStart);

				if (dollyDelta.y > 0) {

						dollyOut(getZoomScale());
				} else if (dollyDelta.y < 0) {

						dollyIn(getZoomScale());
				}

				dollyStart.copy(dollyEnd);

				scope.update();
		}

		function handleTouchMovePan(event) {

				//console.log( 'handleTouchMovePan' );

				panEnd.set(event.touches[0].pageX, event.touches[0].pageY);

				panDelta.subVectors(panEnd, panStart);

				pan(panDelta.x, panDelta.y);

				panStart.copy(panEnd);

				scope.update();
		}

		function handleTouchEnd(event) {}

		//console.log( 'handleTouchEnd' );

		//
		// event handlers - FSM: listen for events and reset state
		//

		function onMouseDown(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (event.button) {

						case scope.mouseButtons.ORBIT:

								if (scope.enableRotate === false) return;

								handleMouseDownRotate(event);

								state = STATE.ROTATE;

								break;

						case scope.mouseButtons.ZOOM:

								if (scope.enableZoom === false) return;

								handleMouseDownDolly(event);

								state = STATE.DOLLY;

								break;

						case scope.mouseButtons.PAN:

								if (scope.enablePan === false) return;

								handleMouseDownPan(event);

								state = STATE.PAN;

								break;

				}

				if (state !== STATE.NONE) {

						document.addEventListener('mousemove', onMouseMove, false);
						document.addEventListener('mouseup', onMouseUp, false);

						scope.dispatchEvent(startEvent);
				}
		}

		function onMouseMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();

				switch (state) {

						case STATE.ROTATE:

								if (scope.enableRotate === false) return;

								handleMouseMoveRotate(event);

								break;

						case STATE.DOLLY:

								if (scope.enableZoom === false) return;

								handleMouseMoveDolly(event);

								break;

						case STATE.PAN:

								if (scope.enablePan === false) return;

								handleMouseMovePan(event);

								break;

				}
		}

		function onMouseUp(event) {

				if (scope.enabled === false) return;

				handleMouseUp(event);

				document.removeEventListener('mousemove', onMouseMove, false);
				document.removeEventListener('mouseup', onMouseUp, false);

				scope.dispatchEvent(endEvent);

				state = STATE.NONE;
		}

		function onMouseWheel(event) {

				if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE && state !== STATE.ROTATE) return;

				event.preventDefault();
				event.stopPropagation();

				handleMouseWheel(event);

				scope.dispatchEvent(startEvent); // not sure why these are here...
				scope.dispatchEvent(endEvent);
		}

		function onKeyDown(event) {

				if (scope.enabled === false || scope.enableKeys === false || scope.enablePan === false) return;

				handleKeyDown(event);
		}

		function onTouchStart(event) {

				if (scope.enabled === false) return;

				switch (event.touches.length) {

						case 1:
								// one-fingered touch: rotate

								if (scope.enableRotate === false) return;

								handleTouchStartRotate(event);

								state = STATE.TOUCH_ROTATE;

								break;

						case 2:
								// two-fingered touch: dolly

								if (scope.enableZoom === false) return;

								handleTouchStartDolly(event);

								state = STATE.TOUCH_DOLLY;

								break;

						case 3:
								// three-fingered touch: pan

								if (scope.enablePan === false) return;

								handleTouchStartPan(event);

								state = STATE.TOUCH_PAN;

								break;

						default:

								state = STATE.NONE;

				}

				if (state !== STATE.NONE) {

						scope.dispatchEvent(startEvent);
				}
		}

		function onTouchMove(event) {

				if (scope.enabled === false) return;

				event.preventDefault();
				event.stopPropagation();

				switch (event.touches.length) {

						case 1:
								// one-fingered touch: rotate

								if (scope.enableRotate === false) return;
								if (state !== STATE.TOUCH_ROTATE) return; // is this needed?...

								handleTouchMoveRotate(event);

								break;

						case 2:
								// two-fingered touch: dolly

								if (scope.enableZoom === false) return;
								if (state !== STATE.TOUCH_DOLLY) return; // is this needed?...

								handleTouchMoveDolly(event);

								break;

						case 3:
								// three-fingered touch: pan

								if (scope.enablePan === false) return;
								if (state !== STATE.TOUCH_PAN) return; // is this needed?...

								handleTouchMovePan(event);

								break;

						default:

								state = STATE.NONE;

				}
		}

		function onTouchEnd(event) {

				if (scope.enabled === false) return;

				handleTouchEnd(event);

				scope.dispatchEvent(endEvent);

				state = STATE.NONE;
		}

		function onContextMenu(event) {

				if (scope.enabled === false) return;

				event.preventDefault();
		}

		//

		scope.domElement.addEventListener('contextmenu', onContextMenu, false);

		scope.domElement.addEventListener('mousedown', onMouseDown, false);
		scope.domElement.addEventListener('wheel', onMouseWheel, false);

		scope.domElement.addEventListener('touchstart', onTouchStart, false);
		scope.domElement.addEventListener('touchend', onTouchEnd, false);
		scope.domElement.addEventListener('touchmove', onTouchMove, false);

		window.addEventListener('keydown', onKeyDown, false);

		// force an update at start

		this.update();
}

;

OrbitControls.prototype = _Object$create(THREE.EventDispatcher.prototype);
OrbitControls.prototype.constructor = OrbitControls;

_Object$defineProperties(OrbitControls.prototype, {

		center: {

				get: function get() {

						console.warn('THREE.OrbitControls: .center has been renamed to .target');
						return this.target;
				}

		},

		// backward compatibility

		noZoom: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
						return !this.enableZoom;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead.');
						this.enableZoom = !value;
				}

		},

		noRotate: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
						return !this.enableRotate;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead.');
						this.enableRotate = !value;
				}

		},

		noPan: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
						return !this.enablePan;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead.');
						this.enablePan = !value;
				}

		},

		noKeys: {

				get: function get() {

						console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
						return !this.enableKeys;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead.');
						this.enableKeys = !value;
				}

		},

		staticMoving: {

				get: function get() {

						console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
						return !this.enableDamping;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead.');
						this.enableDamping = !value;
				}

		},

		dynamicDampingFactor: {

				get: function get() {

						console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
						return this.dampingFactor;
				},

				set: function set(value) {

						console.warn('THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead.');
						this.dampingFactor = value;
				}

		}

});

},{"babel-runtime/core-js/object/create":3,"babel-runtime/core-js/object/define-properties":4}],78:[function(_dereq_,module,exports){
/**
 * @author arodic / https://github.com/arodic
 */

//import * as THREE from 'three';

'use strict';

var _Object$create = _dereq_("babel-runtime/core-js/object/create")["default"];

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TransformControls = TransformControls;
var GizmoMaterial = function GizmoMaterial(parameters) {

	THREE.MeshBasicMaterial.call(this);

	this.depthTest = false;
	this.depthWrite = false;
	this.side = THREE.FrontSide;
	this.transparent = true;

	this.setValues(parameters);

	this.oldColor = this.color.clone();
	this.oldOpacity = this.opacity;

	this.highlight = function (highlighted) {

		if (highlighted) {

			this.color.setRGB(1, 1, 0);
			this.opacity = 1;
		} else {

			this.color.copy(this.oldColor);
			this.opacity = this.oldOpacity;
		}
	};
};

GizmoMaterial.prototype = _Object$create(THREE.MeshBasicMaterial.prototype);
GizmoMaterial.prototype.constructor = GizmoMaterial;

var GizmoLineMaterial = function GizmoLineMaterial(parameters) {

	THREE.LineBasicMaterial.call(this);

	this.depthTest = false;
	this.depthWrite = false;
	this.transparent = true;
	this.linewidth = 1;

	this.setValues(parameters);

	this.oldColor = this.color.clone();
	this.oldOpacity = this.opacity;

	this.highlight = function (highlighted) {

		if (highlighted) {

			this.color.setRGB(1, 1, 0);
			this.opacity = 1;
		} else {

			this.color.copy(this.oldColor);
			this.opacity = this.oldOpacity;
		}
	};
};

GizmoLineMaterial.prototype = _Object$create(THREE.LineBasicMaterial.prototype);
GizmoLineMaterial.prototype.constructor = GizmoLineMaterial;

var pickerMaterial = new GizmoMaterial({ visible: false, transparent: false });

var TransformGizmo = function TransformGizmo() {

	this.init = function () {

		THREE.Object3D.call(this);

		this.handles = new THREE.Object3D();
		this.pickers = new THREE.Object3D();
		this.planes = new THREE.Object3D();

		this.add(this.handles);
		this.add(this.pickers);
		this.add(this.planes);

		//// PLANES

		var planeGeometry = new THREE.PlaneBufferGeometry(50, 50, 2, 2);
		var planeMaterial = new THREE.MeshBasicMaterial({ visible: false, side: THREE.DoubleSide });

		var planes = {
			"XY": new THREE.Mesh(planeGeometry, planeMaterial),
			"YZ": new THREE.Mesh(planeGeometry, planeMaterial),
			"XZ": new THREE.Mesh(planeGeometry, planeMaterial),
			"XYZE": new THREE.Mesh(planeGeometry, planeMaterial)
		};

		this.activePlane = planes["XYZE"];

		planes["YZ"].rotation.set(0, Math.PI / 2, 0);
		planes["XZ"].rotation.set(-Math.PI / 2, 0, 0);

		for (var i in planes) {

			planes[i].name = i;
			this.planes.add(planes[i]);
			this.planes[i] = planes[i];
		}

		//// HANDLES AND PICKERS

		var setupGizmos = function setupGizmos(gizmoMap, parent) {

			for (var name in gizmoMap) {

				for (i = gizmoMap[name].length; i--;) {

					var object = gizmoMap[name][i][0];
					var position = gizmoMap[name][i][1];
					var rotation = gizmoMap[name][i][2];

					object.name = name;

					if (position) object.position.set(position[0], position[1], position[2]);
					if (rotation) object.rotation.set(rotation[0], rotation[1], rotation[2]);

					parent.add(object);
				}
			}
		};

		setupGizmos(this.handleGizmos, this.handles);
		setupGizmos(this.pickerGizmos, this.pickers);

		// reset Transformations

		this.traverse(function (child) {

			if (child instanceof THREE.Mesh) {

				child.updateMatrix();

				var tempGeometry = child.geometry.clone();
				tempGeometry.applyMatrix(child.matrix);
				child.geometry = tempGeometry;

				child.position.set(0, 0, 0);
				child.rotation.set(0, 0, 0);
				child.scale.set(1, 1, 1);
			}
		});
	};

	this.highlight = function (axis) {

		this.traverse(function (child) {

			if (child.material && child.material.highlight) {

				if (child.name === axis) {

					child.material.highlight(true);
				} else {

					child.material.highlight(false);
				}
			}
		});
	};
};

TransformGizmo.prototype = _Object$create(THREE.Object3D.prototype);
TransformGizmo.prototype.constructor = TransformGizmo;

TransformGizmo.prototype.update = function (rotation, eye) {

	var vec1 = new THREE.Vector3(0, 0, 0);
	var vec2 = new THREE.Vector3(0, 1, 0);
	var lookAtMatrix = new THREE.Matrix4();

	this.traverse(function (child) {

		if (child.name.search("E") !== -1) {

			child.quaternion.setFromRotationMatrix(lookAtMatrix.lookAt(eye, vec1, vec2));
		} else if (child.name.search("X") !== -1 || child.name.search("Y") !== -1 || child.name.search("Z") !== -1) {

			child.quaternion.setFromEuler(rotation);
		}
	});
};

var TransformGizmoTranslate = function TransformGizmoTranslate() {

	TransformGizmo.call(this);

	var arrowGeometry = new THREE.Geometry();
	var mesh = new THREE.Mesh(new THREE.CylinderGeometry(0, 0.05, 0.2, 12, 1, false));
	mesh.position.y = 0.5;
	mesh.updateMatrix();

	arrowGeometry.merge(mesh.geometry, mesh.matrix);

	var lineXGeometry = new THREE.BufferGeometry();
	lineXGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));

	var lineYGeometry = new THREE.BufferGeometry();
	lineYGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));

	var lineZGeometry = new THREE.BufferGeometry();
	lineZGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3));

	this.handleGizmos = {

		X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xff0000 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xff0000 }))]],

		Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x00ff00 })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x00ff00 }))]],

		Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x0000ff }))]],

		XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 })), [0, 0, 0], [0, 0, 0]]],

		XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xffff00, opacity: 0.25 })), [0.15, 0.15, 0]]],

		YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0x00ffff, opacity: 0.25 })), [0, 0.15, 0.15], [0, Math.PI / 2, 0]]],

		XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.29, 0.29), new GizmoMaterial({ color: 0xff00ff, opacity: 0.25 })), [0.15, 0, 0.15], [-Math.PI / 2, 0, 0]]]

	};

	this.pickerGizmos = {

		X: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],

		Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0.6, 0]]],

		Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],

		XYZ: [[new THREE.Mesh(new THREE.OctahedronGeometry(0.2, 0), pickerMaterial)]],

		XY: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), pickerMaterial), [0.2, 0.2, 0]]],

		YZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), pickerMaterial), [0, 0.2, 0.2], [0, Math.PI / 2, 0]]],

		XZ: [[new THREE.Mesh(new THREE.PlaneBufferGeometry(0.4, 0.4), pickerMaterial), [0.2, 0, 0.2], [-Math.PI / 2, 0, 0]]]

	};

	this.setActivePlane = function (axis, eye) {

		var tempMatrix = new THREE.Matrix4();
		eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

		if (axis === "X") {

			this.activePlane = this.planes["XY"];

			if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
		}

		if (axis === "Y") {

			this.activePlane = this.planes["XY"];

			if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
		}

		if (axis === "Z") {

			this.activePlane = this.planes["XZ"];

			if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
		}

		if (axis === "XYZ") this.activePlane = this.planes["XYZE"];

		if (axis === "XY") this.activePlane = this.planes["XY"];

		if (axis === "YZ") this.activePlane = this.planes["YZ"];

		if (axis === "XZ") this.activePlane = this.planes["XZ"];
	};

	this.init();
};

TransformGizmoTranslate.prototype = _Object$create(TransformGizmo.prototype);
TransformGizmoTranslate.prototype.constructor = TransformGizmoTranslate;

var TransformGizmoRotate = function TransformGizmoRotate() {

	TransformGizmo.call(this);

	var CircleGeometry = function CircleGeometry(radius, facing, arc) {

		var geometry = new THREE.BufferGeometry();
		var vertices = [];
		arc = arc ? arc : 1;

		for (var i = 0; i <= 64 * arc; ++i) {

			if (facing === 'x') vertices.push(0, Math.cos(i / 32 * Math.PI) * radius, Math.sin(i / 32 * Math.PI) * radius);
			if (facing === 'y') vertices.push(Math.cos(i / 32 * Math.PI) * radius, 0, Math.sin(i / 32 * Math.PI) * radius);
			if (facing === 'z') vertices.push(Math.sin(i / 32 * Math.PI) * radius, Math.cos(i / 32 * Math.PI) * radius, 0);
		}

		geometry.addAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
		return geometry;
	};

	this.handleGizmos = {

		X: [[new THREE.Line(new CircleGeometry(1, 'x', 0.5), new GizmoLineMaterial({ color: 0xff0000 }))]],

		Y: [[new THREE.Line(new CircleGeometry(1, 'y', 0.5), new GizmoLineMaterial({ color: 0x00ff00 }))]],

		Z: [[new THREE.Line(new CircleGeometry(1, 'z', 0.5), new GizmoLineMaterial({ color: 0x0000ff }))]],

		E: [[new THREE.Line(new CircleGeometry(1.25, 'z', 1), new GizmoLineMaterial({ color: 0xcccc00 }))]],

		XYZE: [[new THREE.Line(new CircleGeometry(1, 'z', 1), new GizmoLineMaterial({ color: 0x787878 }))]]

	};

	this.pickerGizmos = {

		X: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), pickerMaterial), [0, 0, 0], [0, -Math.PI / 2, -Math.PI / 2]]],

		Y: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), pickerMaterial), [0, 0, 0], [Math.PI / 2, 0, 0]]],

		Z: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1, 0.12, 4, 12, Math.PI), pickerMaterial), [0, 0, 0], [0, 0, -Math.PI / 2]]],

		E: [[new THREE.Mesh(new THREE.TorusBufferGeometry(1.25, 0.12, 2, 24), pickerMaterial)]],

		XYZE: [[new THREE.Mesh()] // TODO
		]

	};

	this.setActivePlane = function (axis) {

		if (axis === "E") this.activePlane = this.planes["XYZE"];

		if (axis === "X") this.activePlane = this.planes["YZ"];

		if (axis === "Y") this.activePlane = this.planes["XZ"];

		if (axis === "Z") this.activePlane = this.planes["XY"];
	};

	this.update = function (rotation, eye2) {

		TransformGizmo.prototype.update.apply(this, arguments);

		var tempMatrix = new THREE.Matrix4();
		var worldRotation = new THREE.Euler(0, 0, 1);
		var tempQuaternion = new THREE.Quaternion();
		var unitX = new THREE.Vector3(1, 0, 0);
		var unitY = new THREE.Vector3(0, 1, 0);
		var unitZ = new THREE.Vector3(0, 0, 1);
		var quaternionX = new THREE.Quaternion();
		var quaternionY = new THREE.Quaternion();
		var quaternionZ = new THREE.Quaternion();
		var eye = eye2.clone();

		worldRotation.copy(this.planes["XY"].rotation);
		tempQuaternion.setFromEuler(worldRotation);

		tempMatrix.makeRotationFromQuaternion(tempQuaternion).getInverse(tempMatrix);
		eye.applyMatrix4(tempMatrix);

		this.traverse(function (child) {

			tempQuaternion.setFromEuler(worldRotation);

			if (child.name === "X") {

				quaternionX.setFromAxisAngle(unitX, Math.atan2(-eye.y, eye.z));
				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
				child.quaternion.copy(tempQuaternion);
			}

			if (child.name === "Y") {

				quaternionY.setFromAxisAngle(unitY, Math.atan2(eye.x, eye.z));
				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
				child.quaternion.copy(tempQuaternion);
			}

			if (child.name === "Z") {

				quaternionZ.setFromAxisAngle(unitZ, Math.atan2(eye.y, eye.x));
				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);
				child.quaternion.copy(tempQuaternion);
			}
		});
	};

	this.init();
};

TransformGizmoRotate.prototype = _Object$create(TransformGizmo.prototype);
TransformGizmoRotate.prototype.constructor = TransformGizmoRotate;

var TransformGizmoScale = function TransformGizmoScale() {

	TransformGizmo.call(this);

	var arrowGeometry = new THREE.Geometry();
	var mesh = new THREE.Mesh(new THREE.BoxGeometry(0.125, 0.125, 0.125));
	mesh.position.y = 0.5;
	mesh.updateMatrix();

	arrowGeometry.merge(mesh.geometry, mesh.matrix);

	var lineXGeometry = new THREE.BufferGeometry();
	lineXGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));

	var lineYGeometry = new THREE.BufferGeometry();
	lineYGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));

	var lineZGeometry = new THREE.BufferGeometry();
	lineZGeometry.addAttribute('position', new THREE.Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3));

	this.handleGizmos = {

		X: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0xff0000 })), [0.5, 0, 0], [0, 0, -Math.PI / 2]], [new THREE.Line(lineXGeometry, new GizmoLineMaterial({ color: 0xff0000 }))]],

		Y: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x00ff00 })), [0, 0.5, 0]], [new THREE.Line(lineYGeometry, new GizmoLineMaterial({ color: 0x00ff00 }))]],

		Z: [[new THREE.Mesh(arrowGeometry, new GizmoMaterial({ color: 0x0000ff })), [0, 0, 0.5], [Math.PI / 2, 0, 0]], [new THREE.Line(lineZGeometry, new GizmoLineMaterial({ color: 0x0000ff }))]],

		XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(0.125, 0.125, 0.125), new GizmoMaterial({ color: 0xffffff, opacity: 0.25 }))]]

	};

	this.pickerGizmos = {

		X: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0.6, 0, 0], [0, 0, -Math.PI / 2]]],

		Y: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0.6, 0]]],

		Z: [[new THREE.Mesh(new THREE.CylinderBufferGeometry(0.2, 0, 1, 4, 1, false), pickerMaterial), [0, 0, 0.6], [Math.PI / 2, 0, 0]]],

		XYZ: [[new THREE.Mesh(new THREE.BoxBufferGeometry(0.4, 0.4, 0.4), pickerMaterial)]]

	};

	this.setActivePlane = function (axis, eye) {

		var tempMatrix = new THREE.Matrix4();
		eye.applyMatrix4(tempMatrix.getInverse(tempMatrix.extractRotation(this.planes["XY"].matrixWorld)));

		if (axis === "X") {

			this.activePlane = this.planes["XY"];
			if (Math.abs(eye.y) > Math.abs(eye.z)) this.activePlane = this.planes["XZ"];
		}

		if (axis === "Y") {

			this.activePlane = this.planes["XY"];
			if (Math.abs(eye.x) > Math.abs(eye.z)) this.activePlane = this.planes["YZ"];
		}

		if (axis === "Z") {

			this.activePlane = this.planes["XZ"];
			if (Math.abs(eye.x) > Math.abs(eye.y)) this.activePlane = this.planes["YZ"];
		}

		if (axis === "XYZ") this.activePlane = this.planes["XYZE"];
	};

	this.init();
};

TransformGizmoScale.prototype = _Object$create(TransformGizmo.prototype);
TransformGizmoScale.prototype.constructor = TransformGizmoScale;

function TransformControls(camera, domElement) {

	// TODO: Make non-uniform scale and rotate play nice in hierarchies
	// TODO: ADD RXYZ contol

	THREE.Object3D.call(this);

	domElement = domElement !== undefined ? domElement : document;

	this.object = undefined;
	this.visible = false;
	this.translationSnap = null;
	this.rotationSnap = null;
	this.space = "world";
	this.size = 1;
	this.axis = null;

	var scope = this;

	var _mode = "translate";
	var _dragging = false;
	var _gizmo = {

		"translate": new TransformGizmoTranslate(),
		"rotate": new TransformGizmoRotate(),
		"scale": new TransformGizmoScale()
	};

	for (var type in _gizmo) {

		var gizmoObj = _gizmo[type];

		gizmoObj.visible = type === _mode;
		this.add(gizmoObj);
	}

	var changeEvent = { type: "change" };
	var mouseDownEvent = { type: "mouseDown" };
	var mouseUpEvent = { type: "mouseUp", mode: _mode };
	var objectChangeEvent = { type: "objectChange" };

	var ray = new THREE.Raycaster();
	var pointerVector = new THREE.Vector2();

	var point = new THREE.Vector3();
	var offset = new THREE.Vector3();

	var rotation = new THREE.Vector3();
	var offsetRotation = new THREE.Vector3();
	var scale = 1;

	var lookAtMatrix = new THREE.Matrix4();
	var eye = new THREE.Vector3();

	var tempMatrix = new THREE.Matrix4();
	var tempVector = new THREE.Vector3();
	var tempQuaternion = new THREE.Quaternion();
	var unitX = new THREE.Vector3(1, 0, 0);
	var unitY = new THREE.Vector3(0, 1, 0);
	var unitZ = new THREE.Vector3(0, 0, 1);

	var quaternionXYZ = new THREE.Quaternion();
	var quaternionX = new THREE.Quaternion();
	var quaternionY = new THREE.Quaternion();
	var quaternionZ = new THREE.Quaternion();
	var quaternionE = new THREE.Quaternion();

	var oldPosition = new THREE.Vector3();
	var oldScale = new THREE.Vector3();
	var oldRotationMatrix = new THREE.Matrix4();

	var parentRotationMatrix = new THREE.Matrix4();
	var parentScale = new THREE.Vector3();

	var worldPosition = new THREE.Vector3();
	var worldRotation = new THREE.Euler();
	var worldRotationMatrix = new THREE.Matrix4();
	var camPosition = new THREE.Vector3();
	var camRotation = new THREE.Euler();

	domElement.addEventListener("mousedown", onPointerDown, false);
	domElement.addEventListener("touchstart", onPointerDown, false);

	domElement.addEventListener("mousemove", onPointerHover, false);
	domElement.addEventListener("touchmove", onPointerHover, false);

	domElement.addEventListener("mousemove", onPointerMove, false);
	domElement.addEventListener("touchmove", onPointerMove, false);

	domElement.addEventListener("mouseup", onPointerUp, false);
	domElement.addEventListener("mouseout", onPointerUp, false);
	domElement.addEventListener("touchend", onPointerUp, false);
	domElement.addEventListener("touchcancel", onPointerUp, false);
	domElement.addEventListener("touchleave", onPointerUp, false);

	this.dispose = function () {

		domElement.removeEventListener("mousedown", onPointerDown);
		domElement.removeEventListener("touchstart", onPointerDown);

		domElement.removeEventListener("mousemove", onPointerHover);
		domElement.removeEventListener("touchmove", onPointerHover);

		domElement.removeEventListener("mousemove", onPointerMove);
		domElement.removeEventListener("touchmove", onPointerMove);

		domElement.removeEventListener("mouseup", onPointerUp);
		domElement.removeEventListener("mouseout", onPointerUp);
		domElement.removeEventListener("touchend", onPointerUp);
		domElement.removeEventListener("touchcancel", onPointerUp);
		domElement.removeEventListener("touchleave", onPointerUp);
	};

	this.attach = function (object) {

		this.object = object;
		this.visible = true;
		this.update();
	};

	this.detach = function () {

		this.object = undefined;
		this.visible = false;
		this.axis = null;
	};

	this.getMode = function () {

		return _mode;
	};

	this.setMode = function (mode) {

		_mode = mode ? mode : _mode;

		if (_mode === "scale") scope.space = "local";

		for (var type in _gizmo) _gizmo[type].visible = type === _mode;

		this.update();
		scope.dispatchEvent(changeEvent);
	};

	this.setTranslationSnap = function (translationSnap) {

		scope.translationSnap = translationSnap;
	};

	this.setRotationSnap = function (rotationSnap) {

		scope.rotationSnap = rotationSnap;
	};

	this.setSize = function (size) {

		scope.size = size;
		this.update();
		scope.dispatchEvent(changeEvent);
	};

	this.setSpace = function (space) {

		scope.space = space;
		this.update();
		scope.dispatchEvent(changeEvent);
	};

	this.update = function () {

		if (scope.object === undefined) return;

		scope.object.updateMatrixWorld();
		worldPosition.setFromMatrixPosition(scope.object.matrixWorld);
		worldRotation.setFromRotationMatrix(tempMatrix.extractRotation(scope.object.matrixWorld));

		camera.updateMatrixWorld();
		camPosition.setFromMatrixPosition(camera.matrixWorld);
		camRotation.setFromRotationMatrix(tempMatrix.extractRotation(camera.matrixWorld));

		scale = worldPosition.distanceTo(camPosition) / 6 * scope.size;
		this.position.copy(worldPosition);
		this.scale.set(scale, scale, scale);

		if (camera instanceof THREE.PerspectiveCamera) {

			eye.copy(camPosition).sub(worldPosition).normalize();
		} else if (camera instanceof THREE.OrthographicCamera) {

			eye.copy(camPosition).normalize();
		}

		if (scope.space === "local") {

			_gizmo[_mode].update(worldRotation, eye);
		} else if (scope.space === "world") {

			_gizmo[_mode].update(new THREE.Euler(), eye);
		}

		_gizmo[_mode].highlight(scope.axis);
	};

	function onPointerHover(event) {

		if (scope.object === undefined || _dragging === true || event.button !== undefined && event.button !== 0) return;

		var pointer = event.changedTouches ? event.changedTouches[0] : event;

		var intersect = intersectObjects(pointer, _gizmo[_mode].pickers.children);

		var axis = null;

		if (intersect) {

			axis = intersect.object.name;

			event.preventDefault();
		}

		if (scope.axis !== axis) {

			scope.axis = axis;
			scope.update();
			scope.dispatchEvent(changeEvent);
		}
	}

	function onPointerDown(event) {

		if (scope.object === undefined || _dragging === true || event.button !== undefined && event.button !== 0) return;

		var pointer = event.changedTouches ? event.changedTouches[0] : event;

		if (pointer.button === 0 || pointer.button === undefined) {

			var intersect = intersectObjects(pointer, _gizmo[_mode].pickers.children);

			if (intersect) {

				event.preventDefault();
				event.stopPropagation();

				scope.dispatchEvent(mouseDownEvent);

				scope.axis = intersect.object.name;

				scope.update();

				eye.copy(camPosition).sub(worldPosition).normalize();

				_gizmo[_mode].setActivePlane(scope.axis, eye);

				var planeIntersect = intersectObjects(pointer, [_gizmo[_mode].activePlane]);

				if (planeIntersect) {

					oldPosition.copy(scope.object.position);
					oldScale.copy(scope.object.scale);

					oldRotationMatrix.extractRotation(scope.object.matrix);
					worldRotationMatrix.extractRotation(scope.object.matrixWorld);

					parentRotationMatrix.extractRotation(scope.object.parent.matrixWorld);
					parentScale.setFromMatrixScale(tempMatrix.getInverse(scope.object.parent.matrixWorld));

					offset.copy(planeIntersect.point);
				}
			}
		}

		_dragging = true;
	}

	function onPointerMove(event) {

		if (scope.object === undefined || scope.axis === null || _dragging === false || event.button !== undefined && event.button !== 0) return;

		var pointer = event.changedTouches ? event.changedTouches[0] : event;

		var planeIntersect = intersectObjects(pointer, [_gizmo[_mode].activePlane]);

		if (planeIntersect === false) return;

		event.preventDefault();
		event.stopPropagation();

		point.copy(planeIntersect.point);

		if (_mode === "translate") {

			point.sub(offset);
			point.multiply(parentScale);

			if (scope.space === "local") {

				point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

				if (scope.axis.search("X") === -1) point.x = 0;
				if (scope.axis.search("Y") === -1) point.y = 0;
				if (scope.axis.search("Z") === -1) point.z = 0;

				point.applyMatrix4(oldRotationMatrix);

				scope.object.position.copy(oldPosition);
				scope.object.position.add(point);
			}

			if (scope.space === "world" || scope.axis.search("XYZ") !== -1) {

				if (scope.axis.search("X") === -1) point.x = 0;
				if (scope.axis.search("Y") === -1) point.y = 0;
				if (scope.axis.search("Z") === -1) point.z = 0;

				point.applyMatrix4(tempMatrix.getInverse(parentRotationMatrix));

				scope.object.position.copy(oldPosition);
				scope.object.position.add(point);
			}

			if (scope.translationSnap !== null) {

				if (scope.space === "local") {

					scope.object.position.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));
				}

				if (scope.axis.search("X") !== -1) scope.object.position.x = Math.round(scope.object.position.x / scope.translationSnap) * scope.translationSnap;
				if (scope.axis.search("Y") !== -1) scope.object.position.y = Math.round(scope.object.position.y / scope.translationSnap) * scope.translationSnap;
				if (scope.axis.search("Z") !== -1) scope.object.position.z = Math.round(scope.object.position.z / scope.translationSnap) * scope.translationSnap;

				if (scope.space === "local") {

					scope.object.position.applyMatrix4(worldRotationMatrix);
				}
			}
		} else if (_mode === "scale") {

			point.sub(offset);
			point.multiply(parentScale);

			if (scope.space === "local") {

				if (scope.axis === "XYZ") {

					scale = 1 + point.y / Math.max(oldScale.x, oldScale.y, oldScale.z);

					scope.object.scale.x = oldScale.x * scale;
					scope.object.scale.y = oldScale.y * scale;
					scope.object.scale.z = oldScale.z * scale;
				} else {

					point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

					if (scope.axis === "X") scope.object.scale.x = oldScale.x * (1 + point.x / oldScale.x);
					if (scope.axis === "Y") scope.object.scale.y = oldScale.y * (1 + point.y / oldScale.y);
					if (scope.axis === "Z") scope.object.scale.z = oldScale.z * (1 + point.z / oldScale.z);
				}
			}
		} else if (_mode === "rotate") {

			point.sub(worldPosition);
			point.multiply(parentScale);
			tempVector.copy(offset).sub(worldPosition);
			tempVector.multiply(parentScale);

			if (scope.axis === "E") {

				point.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));
				tempVector.applyMatrix4(tempMatrix.getInverse(lookAtMatrix));

				rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
				offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

				tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

				quaternionE.setFromAxisAngle(eye, rotation.z - offsetRotation.z);
				quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionE);
				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

				scope.object.quaternion.copy(tempQuaternion);
			} else if (scope.axis === "XYZE") {

				quaternionE.setFromEuler(point.clone().cross(tempVector).normalize()); // rotation axis

				tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));
				quaternionX.setFromAxisAngle(quaternionE, -point.clone().angleTo(tempVector));
				quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

				scope.object.quaternion.copy(tempQuaternion);
			} else if (scope.space === "local") {

				point.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

				tempVector.applyMatrix4(tempMatrix.getInverse(worldRotationMatrix));

				rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
				offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

				quaternionXYZ.setFromRotationMatrix(oldRotationMatrix);

				if (scope.rotationSnap !== null) {

					quaternionX.setFromAxisAngle(unitX, Math.round((rotation.x - offsetRotation.x) / scope.rotationSnap) * scope.rotationSnap);
					quaternionY.setFromAxisAngle(unitY, Math.round((rotation.y - offsetRotation.y) / scope.rotationSnap) * scope.rotationSnap);
					quaternionZ.setFromAxisAngle(unitZ, Math.round((rotation.z - offsetRotation.z) / scope.rotationSnap) * scope.rotationSnap);
				} else {

					quaternionX.setFromAxisAngle(unitX, rotation.x - offsetRotation.x);
					quaternionY.setFromAxisAngle(unitY, rotation.y - offsetRotation.y);
					quaternionZ.setFromAxisAngle(unitZ, rotation.z - offsetRotation.z);
				}

				if (scope.axis === "X") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionX);
				if (scope.axis === "Y") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionY);
				if (scope.axis === "Z") quaternionXYZ.multiplyQuaternions(quaternionXYZ, quaternionZ);

				scope.object.quaternion.copy(quaternionXYZ);
			} else if (scope.space === "world") {

				rotation.set(Math.atan2(point.z, point.y), Math.atan2(point.x, point.z), Math.atan2(point.y, point.x));
				offsetRotation.set(Math.atan2(tempVector.z, tempVector.y), Math.atan2(tempVector.x, tempVector.z), Math.atan2(tempVector.y, tempVector.x));

				tempQuaternion.setFromRotationMatrix(tempMatrix.getInverse(parentRotationMatrix));

				if (scope.rotationSnap !== null) {

					quaternionX.setFromAxisAngle(unitX, Math.round((rotation.x - offsetRotation.x) / scope.rotationSnap) * scope.rotationSnap);
					quaternionY.setFromAxisAngle(unitY, Math.round((rotation.y - offsetRotation.y) / scope.rotationSnap) * scope.rotationSnap);
					quaternionZ.setFromAxisAngle(unitZ, Math.round((rotation.z - offsetRotation.z) / scope.rotationSnap) * scope.rotationSnap);
				} else {

					quaternionX.setFromAxisAngle(unitX, rotation.x - offsetRotation.x);
					quaternionY.setFromAxisAngle(unitY, rotation.y - offsetRotation.y);
					quaternionZ.setFromAxisAngle(unitZ, rotation.z - offsetRotation.z);
				}

				quaternionXYZ.setFromRotationMatrix(worldRotationMatrix);

				if (scope.axis === "X") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionX);
				if (scope.axis === "Y") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionY);
				if (scope.axis === "Z") tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionZ);

				tempQuaternion.multiplyQuaternions(tempQuaternion, quaternionXYZ);

				scope.object.quaternion.copy(tempQuaternion);
			}
		}

		scope.update();
		scope.dispatchEvent(changeEvent);
		scope.dispatchEvent(objectChangeEvent);
	}

	function onPointerUp(event) {

		event.preventDefault(); // Prevent MouseEvent on mobile

		if (event.button !== undefined && event.button !== 0) return;

		if (_dragging && scope.axis !== null) {

			mouseUpEvent.mode = _mode;
			scope.dispatchEvent(mouseUpEvent);
		}

		_dragging = false;

		if ('TouchEvent' in window && event instanceof TouchEvent) {

			// Force "rollover"

			scope.axis = null;
			scope.update();
			scope.dispatchEvent(changeEvent);
		} else {

			onPointerHover(event);
		}
	}

	function intersectObjects(pointer, objects) {

		var rect = domElement.getBoundingClientRect();
		var x = (pointer.clientX - rect.left) / rect.width;
		var y = (pointer.clientY - rect.top) / rect.height;

		pointerVector.set(x * 2 - 1, -(y * 2) + 1);
		ray.setFromCamera(pointerVector, camera);

		var intersections = ray.intersectObjects(objects, true);
		return intersections[0] ? intersections[0] : false;
	}
}

;

TransformControls.prototype = _Object$create(THREE.Object3D.prototype);
TransformControls.prototype.constructor = TransformControls;

},{"babel-runtime/core-js/object/create":3}],79:[function(_dereq_,module,exports){
/*
Add events to a class or object:
    class MyClass {
        constructor() {
            subscribeMixin(this); // Add the mixing functions to the class
            ...
            this.trigger('something', { owner: this, content: 'that'}); // trigger an event passing some arguments

Subscribe to events by doing:
    myClass.on('something', (args) => {
        console.log(args);
    });

Unsubscribe to events by doing:
    myClass.off('something');

or more presicelly:
    myClass.off('something', (args) => {
        console.log(args);
    });

Unsubscribe to all events by:
    myClass.offAll();
*/

'use strict';

var _Set = _dereq_('babel-runtime/core-js/set')['default'];

var _Object$assign = _dereq_('babel-runtime/core-js/object/assign')['default'];

var _getIterator = _dereq_('babel-runtime/core-js/get-iterator')['default'];

var _Object$keys = _dereq_('babel-runtime/core-js/object/keys')['default'];

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.subscribeMixin = subscribeMixin;

function subscribeMixin(target) {
    var listeners = new _Set();

    return _Object$assign(target, {

        on: function on(type, f) {
            var listener = {};
            listener[type] = f;
            listeners.add(listener);
        },

        off: function off(type, f) {
            if (f) {
                var listener = {};
                listener[type] = f;
                listeners['delete'](listener);
            } else {
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = _getIterator(listeners), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var item = _step.value;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = _getIterator(_Object$keys(item)), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var key = _step2.value;

                                if (key === type) {
                                    listeners['delete'](item);
                                    return;
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2['return']) {
                                    _iterator2['return']();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator['return']) {
                            _iterator['return']();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }
            }
        },

        offAll: function offAll() {
            listeners.clear();
        },

        trigger: function trigger(event) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _len = arguments.length, data = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    data[_key - 1] = arguments[_key];
                }

                for (var _iterator3 = _getIterator(listeners), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var listener = _step3.value;

                    if (typeof listener[event] === 'function') {
                        listener[event].apply(listener, data);
                    }
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3['return']) {
                        _iterator3['return']();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }
        },

        listSubscriptions: function listSubscriptions() {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
                for (var _iterator4 = _getIterator(listeners), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var item = _step4.value;

                    console.log(item);
                }
            } catch (err) {
                _didIteratorError4 = true;
                _iteratorError4 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion4 && _iterator4['return']) {
                        _iterator4['return']();
                    }
                } finally {
                    if (_didIteratorError4) {
                        throw _iteratorError4;
                    }
                }
            }
        }
    });
}

},{"babel-runtime/core-js/get-iterator":1,"babel-runtime/core-js/object/assign":2,"babel-runtime/core-js/object/keys":6,"babel-runtime/core-js/set":7}]},{},[75])(75)
});
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy9QbGF5ZXIuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy9SZW5kZXJQYXNzLmpzIiwiQzovVXNlcnMvc2hhbGwvRGVza3RvcC9zaGFkZXJuaW5qYS9zcmMvanMvVERhdGEuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy9UaHJlZUNhbnZhcy5qcyIsIkM6L1VzZXJzL3NoYWxsL0Rlc2t0b3Avc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL0xvYWRlci5qcyIsIkM6L1VzZXJzL3NoYWxsL0Rlc2t0b3Avc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL09yYml0Q29udHJvbHMuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy90b29scy9UcmFuc2Zvcm1Db250cm9scy5qcyIsIkM6L1VzZXJzL3NoYWxsL0Rlc2t0b3Avc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL21peGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtB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QUMsQ0FBQzs7QUFFckIsUUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3JCLFFBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQzs7QUFFckIsUUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLFFBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFdkIsUUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3ZCLFFBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQzs7QUFFdkIsUUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQSxBQUFFLENBQUM7O0FBRXBDLFFBQUksQ0FBQyxHQUFHLENBQ1AsQ0FBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUEsR0FBSyxDQUFDLEVBQ3pCLENBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFBLEdBQUssQ0FBQyxFQUN6QixDQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQSxHQUFLLENBQUMsQ0FDekIsQ0FBQzs7QUFFRixRQUFJLENBQUMsR0FBRyxDQUNQLENBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFBLEdBQUssQ0FBQyxFQUN6QixDQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQSxHQUFLLENBQUMsRUFDekIsQ0FBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUEsR0FBSyxDQUFDLENBQ3pCLENBQUM7O0FBRUYsUUFBSSxD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LENBQUMsUUFBUSxDQUFDO0tBQ3JGO0lBQ0Q7Ozs7Ozs7OztBQVNELFFBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzNELFFBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQztBQUNoRyxRQUFLLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDakcsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkYsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDckYsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7QUFDdEcsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUM7O0FBRTFHLFFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMs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LFdBQVcsQ0FBQztBQUM5RCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7QUFDOUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFELGdCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztBQUM1RCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3JHLGdCQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUUsQ0FBQztBQUNwRyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUM7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LENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDM0Y7O0VBRUQsQ0FBQzs7QUFFRixLQUFJLENBQUMsWUFBWSxHQUFHOztBQUVuQixHQUFDLEVBQUUsQ0FDRixDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUN0STs7QUFFRCxHQUFDLEVBQUUsQ0FDRixDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUN4SDs7QUFFRCxHQUFDLEVBQUUsQ0FDRixDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLENB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LEVBQUUsQ0FBQztBQUMvQyxjQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEcsS0FBSSxDQUFDLFlBQVksR0FBRzs7QUFFbkIsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMzRyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDM0U7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDcEYsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzNFOztBQUVELEdBQUMsRUFBRSxDQUNGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVB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QUFxQixTQUFTLGlIQUFFO3dCQUF2QixRQUFROztBQUNiLHdCQUFJLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLFVBQVUsRUFBRTtBQUN2QyxnQ0FBUSxDQUFDLEtBQUssT0FBQyxDQUFmLFFBQVEsRUFBVyxJQUFJLENBQUMsQ0FBQztxQkFDNUI7aUJBQ0o7Ozs7Ozs7Ozs7Ozs7OztTQUNKOztBQUVELHlCQUFpQixFQUFDLDZCQUFHOzs7Ozs7QUFDakIsbURBQWlCLFNBQVMsaUhBQUU7d0JBQW5CLElBQUk7O0FBQ1QsMkJBQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCOzs7Ozs7Ozs7Ozs7Ozs7U0FDSjtLQUNKLENBQUMsQ0FBQztDQUNOIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3JcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2Fzc2lnblwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvY3JlYXRlXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllc1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9rZXlzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL3NldFwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKVtcImRlZmF1bHRcIl07XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gKGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG5cbiAgICAgIF9PYmplY3QkZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvcicpOyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3QuYXNzaWduOyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZShQLCBEKXtcbiAgcmV0dXJuICQuY3JlYXRlKFAsIEQpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKFQsIEQpe1xuICByZXR1cm4gJC5zZXREZXNjcyhULCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgZGVzYyl7XG4gIHJldHVybiAkLnNldERlc2MoaXQsIGtleSwgZGVzYyk7XG59OyIsInJlcXVpcmUoJy4uLy4uL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmtleXM7IiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy8kLmNvcmUnKS5TZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBoaWRlICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgc3RyaWN0TmV3ICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGRlZmluZWQgICAgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSAgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIElEICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnaWQnKVxuICAsICRoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFNwZWNpZXMgICA9IHJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgU0laRSAgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnXG4gICwgaWQgICAgICAgICAgID0gMDtcblxudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCEkaGFzKGl0LCBJRCkpe1xuICAgIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBpZFxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcbiAgICBoaWRlKGl0LCBJRCwgKytpZCk7XG4gIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcbiAgfSByZXR1cm4gJ08nICsgaXRbSURdO1xufTtcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gJC5jcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgZm9yT2YgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3JPZih0aGlzLCBmYWxzZSwgYXJyLnB1c2gsIGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzdHJpY3ROZXcgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgfSBlbHNlIHtcbiAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICAkLmVhY2guY2FsbCgnYWRkLGNsZWFyLGRlbGV0ZSxmb3JFYWNoLGdldCxoYXMsc2V0LGtleXMsdmFsdWVzLGVudHJpZXMnLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBpZighSVNfQURERVIgJiYgSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkpcmV0dXJuIEtFWSA9PSAnZ2V0JyA/IHVuZGVmaW5lZCA6IGZhbHNlO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5fY1tLRVldKGEgPT09IDAgPyAwIDogYSwgYik7XG4gICAgICAgIHJldHVybiBJU19BRERFUiA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZignc2l6ZScgaW4gcHJvdG8pJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwga2V5LCBvd24sIG91dDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIGlmKG93biAmJiBrZXkgaW4gZXhwb3J0cyljb250aW51ZTtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IG93biA/IHRhcmdldFtrZXldIDogc291cmNlW2tleV07XG4gICAgLy8gcHJldmVudCBnbG9iYWwgcG9sbHV0aW9uIGZvciBuYW1lc3BhY2VzXG4gICAgZXhwb3J0c1trZXldID0gSVNfR0xPQkFMICYmIHR5cGVvZiB0YXJnZXRba2V5XSAhPSAnZnVuY3Rpb24nID8gc291cmNlW2tleV1cbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIDogSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpXG4gICAgLy8gd3JhcCBnbG9iYWwgY29uc3RydWN0b3JzIGZvciBwcmV2ZW50IGNoYW5nZSB0aGVtIGluIGxpYnJhcnlcbiAgICA6IElTX1dSQVAgJiYgdGFyZ2V0W2tleV0gPT0gb3V0ID8gKGZ1bmN0aW9uKEMpe1xuICAgICAgdmFyIEYgPSBmdW5jdGlvbihwYXJhbSl7XG4gICAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgQyA/IG5ldyBDKHBhcmFtKSA6IEMocGFyYW0pO1xuICAgICAgfTtcbiAgICAgIEZbUFJPVE9UWVBFXSA9IENbUFJPVE9UWVBFXTtcbiAgICAgIHJldHVybiBGO1xuICAgIC8vIG1ha2Ugc3RhdGljIHZlcnNpb25zIGZvciBwcm90b3R5cGUgbWV0aG9kc1xuICAgIH0pKG91dCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICBpZihJU19QUk9UTykoZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSkpW2tleV0gPSBvdXQ7XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTsiLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XG4gIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3I7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgfVxufTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07IiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG8gICAgICAgPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90b1xuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRuYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvKCRkZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgLy8gRkYgZml4XG4gICAgaWYoIUxJQlJBUlkgJiYgaGFzKHByb3RvLCBGRl9JVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgICB9XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnblxuICAgICwgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiBhKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKGEoe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRLZXlzICAgID0gJC5nZXRLZXlzXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzXG4gICAgLCBpc0VudW0gICAgID0gJC5pc0VudW07XG4gIHdoaWxlKCQkbGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KCQkW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjsiLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaGlkZScpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBjb3JlW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pJC5zZXREZXNjKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07IiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59OyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07IiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59OyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBnZXQgICAgICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3IgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpdGVyRm4gPSBnZXQoaXQpO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIHJldHVybiBhbk9iamVjdChpdGVyRm4uY2FsbChpdCkpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7IiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5vYmplY3QtYXNzaWduJyl9KTsiLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7IixudWxsLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTsiLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKX0pOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xuSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5OyIsImltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuL3Rvb2xzL09yYml0Q29udHJvbHMnO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Db250cm9scyB9IGZyb20gJy4vdG9vbHMvVHJhbnNmb3JtQ29udHJvbHMnO1xyXG5pbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi9UaHJlZUNhbnZhcyc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcblx0Y29uc3RydWN0b3IoY2FudmFzKSB7XHJcblx0XHR0aGlzLmxvYWRlciA9IG5ldyBUSFJFRS5PYmplY3RMb2FkZXIoKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBudWxsO1xyXG5cdFx0dGhpcy5lbnZTY2VuZSA9IG51bGw7XHJcblx0XHR0aGlzLnRocmVlQ2FudmFzID0gY2FudmFzO1xyXG5cdFx0dGhpcy5wcmV2VGltZSA9IDA7XHJcblx0XHR0aGlzLmN1ck9iaiA9IG51bGw7XHJcblx0XHR0aGlzLmRpckxpZ2h0ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGN1cnJlbnRPYmooKXtcclxuXHRcdGlmICh0aGlzLmN1ck9iaiAhPSBudWxsKXtcclxuXHRcdFx0cmV0dXJuIHRoaXMuY3VyT2JqO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBzY29wZSA9IHRoaXM7XHJcblx0XHR0aGlzLnNjZW5lLnRyYXZlcnNlIChmdW5jdGlvbiAob2JqZWN0KVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAob2JqZWN0IGluc3RhbmNlb2YgVEhSRUUuTWVzaClcclxuXHRcdFx0e1xyXG5cdFx0XHRcdHNjb3BlLmN1ck9iaiA9IG9iamVjdDtcclxuXHRcdFx0XHRyZXR1cm4gc2NvcGUuY3VyT2JqO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL3Nob3VsZCBub3QgaGFwcGVuLlxyXG5cdFx0Ly90aGlzLnNldE9iamVjdCgwKTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5jdXJPYmo7XHJcblx0fVxyXG5cclxuXHRjdXJNYXRlcmlhbCgpe1xyXG5cdFx0aWYgKHRoaXMuY3VyTWF0ICE9IG51bGwpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJNYXQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLmN1ck1hdCA9IHRoaXMuY3JlYXRlU2hhZGVyTWF0ZXJpYWwodGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgVGhyZWVDYW52YXMuRU1QVFlfRlJBR19TSEFERVIsIHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRIZWFkZXIoKSArIFRocmVlQ2FudmFzLkVNUFRZX1ZFUlRFWF9TSEFERVIpO1xyXG5cdFx0cmV0dXJuIHRoaXMuY3VyTWF0O1xyXG5cdH1cclxuXHJcblxyXG4gICAgY3VyVmVydGV4U2hhZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIFRocmVlQ2FudmFzLnJlbW92ZVNoYWRlckhlYWRlcih0aGlzLmN1cnJlbnRPYmooKS5tYXRlcmlhbC52ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGN1ckZyYWdTYWhkZXIoKXtcclxuICAgICAgICByZXR1cm4gVGhyZWVDYW52YXMucmVtb3ZlU2hhZGVySGVhZGVyKHRoaXMuY3VycmVudE9iaigpLm1hdGVyaWFsLmZyYWdtZW50U2hhZGVyKTtcclxuICAgIH1cclxuXHJcblxyXG5cdHVwZGF0ZUN1ck1hdGVyaWFsKGZyYWcsIHZlcnRleCl7XHJcblx0XHR0aGlzLmN1ck1hdGVyaWFsKCkudmVydGV4U2hhZGVyID0gdmVydGV4O1xyXG5cdFx0dGhpcy5jdXJNYXRlcmlhbCgpLmZyYWdtZW50U2hhZGVyID0gZnJhZztcclxuXHRcdHRoaXMuY3VyTWF0ZXJpYWwoKS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHR0aGlzLmN1ck1hdGVyaWFsKCkuZXh0ZW5zaW9ucy5kZXJpdmF0aXZlcyA9IHRydWU7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTaGFkZXJNYXRlcmlhbChmcmFnLHZlcnRleCl7XHJcblx0XHQgIHJldHVybiBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xyXG5cdFx0XHR1bmlmb3JtczogdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dFVuaWZvcm1zKCksXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdmVydGV4LFxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdGlmICh0aGlzLnNjZW5lICE9IG51bGwpe1xyXG5cdFx0XHR3aGlsZSh0aGlzLnNjZW5lLmNoaWxkcmVuLmxlbmd0aCA+IDApeyBcclxuXHRcdFx0XHR0aGlzLnNjZW5lLnJlbW92ZSh0aGlzLnNjZW5lLmNoaWxkcmVuWzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmVudlNjZW5lICE9IG51bGwpe1xyXG5cdFx0XHR3aGlsZSh0aGlzLmVudlNjZW5lLmNoaWxkcmVuLmxlbmd0aCA+IDApeyBcclxuXHRcdFx0XHR0aGlzLmVudlNjZW5lLnJlbW92ZSh0aGlzLmVudlNjZW5lLmNoaWxkcmVuWzBdKTsgXHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmN1ck1hdCA9IG51bGw7XHJcblx0XHR0aGlzLmN1ck9iaiA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVTY2VuZU9iamVjdCh0eXBlKXtcclxuXHRcdHZhciBnZW9tZXRyeSA9IG51bGw7XHJcblx0XHR2YXIgcG9zaXRpb24gPSBudWxsO1xyXG5cdFx0dmFyIHBsYW5lID0gLTEuMDtcclxuXHRcdHZhciBwbGFuZVIgPSAxNC4wO1xyXG5cdFx0aWYgKHR5cGUgPT0gMCl7XHJcblx0XHRcdHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIHBsYW5lLCAwICk7XHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHBsYW5lUiwwLjEscGxhbmVSKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gMSl7XHJcblx0XHRcdHZhciBoZWlnaHQgPSBUSFJFRS5NYXRoLnJhbmRGbG9hdCgwLjgsOCk7XHJcblx0XHRcdHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoIFRIUkVFLk1hdGgucmFuZEZsb2F0KC1wbGFuZVIqMC41LHBsYW5lUiowLjUpLCBoZWlnaHQgLyAyLjAgKyBwbGFuZSwgVEhSRUUuTWF0aC5yYW5kRmxvYXQoLXBsYW5lUiowLjUscGxhbmVSKjAuNSkgKTtcclxuXHRcdFx0dmFyIHdpZHRoID0gVEhSRUUuTWF0aC5yYW5kRmxvYXQoMC44LDEuNilcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIHdpZHRoLCBoZWlnaHQsIHdpZHRoICk7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHJjb2xvciA9IG5ldyBUSFJFRS5Db2xvciggMHhmZmZmZmYgKTtcclxuXHRcdHJjb2xvci5zZXRIZXgoIFRIUkVFLk1hdGgucmFuZEZsb2F0KDAuNSwxLjApICogMHhmZmZmZmYgKTtcclxuXHRcdGlmICh0eXBlID09IDApe1xyXG5cdFx0XHRyY29sb3Iuc2V0SGV4KCAweDg4ODg4OCApO1xyXG5cdFx0fVxyXG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCB7IGNvbG9yOiByY29sb3IgfSApO1xyXG5cdFx0dmFyIG9iamVjdCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcclxuXHRcdG9iamVjdC5jYXN0U2hhZG93ID0gdHJ1ZTtcclxuXHRcdG9iamVjdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuXHRcdG9iamVjdC5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCxwb3NpdGlvbi55LHBvc2l0aW9uLnopO1xyXG5cdFx0dGhpcy5lbnZTY2VuZS5hZGQoIG9iamVjdCApO1xyXG5cdH1cclxuXHJcblx0dXNlTGlnaHQoZmxhZyl7XHJcblx0XHRpZiAodGhpcy5lbnZTY2VuZSA9PSBudWxsKXtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBsaWdodE9iaiA9IHRoaXMuZW52U2NlbmUuZ2V0T2JqZWN0QnlOYW1lKFwiZGlyTGlnaHRcIik7XHJcblx0XHR0aGlzLmVudlNjZW5lLnJlbW92ZSggbGlnaHRPYmogKTtcclxuXHRcdGlmIChmbGFnKXtcclxuXHRcdFx0dGhpcy5kaXJMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KCAweGZmZmZmZiwgMS4wICk7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQucG9zaXRpb24uc2V0KCAxMCwgMTAsIDEwICk7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xyXG5cdFx0XHQvL3RoaXMuZGlyTGlnaHQuc2hhZG93Q2FtZXJhVmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQubmFtZSA9IFwiZGlyTGlnaHRcIjtcclxuXHRcdFx0dGhpcy5lbnZTY2VuZS5hZGQoIHRoaXMuZGlyTGlnaHQgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUVudlNjZW5lKCl7XHJcblx0XHRpZiAodGhpcy5lbnZTY2VuZSAhPSBudWxsKXtcclxuXHRcdFx0d2hpbGUodGhpcy5lbnZTY2VuZS5jaGlsZHJlbi5sZW5ndGggPiAwKXsgXHJcblx0XHRcdFx0dGhpcy5lbnZTY2VuZS5yZW1vdmUodGhpcy5lbnZTY2VuZS5jaGlsZHJlblswXSk7IFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuZW52U2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMuY3JlYXRlU2NlbmVPYmplY3QoMCk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDE0OyBpKyspe1xyXG5cdFx0XHR0aGlzLmNyZWF0ZVNjZW5lT2JqZWN0KDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4NDA0MDQwICk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcclxuXHRcdHRoaXMuZW52U2NlbmUuYWRkKCBsaWdodCApO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJFbnZTY2VuZSgpe1xyXG5cdFx0dGhpcy5lbnZTY2VuZSA9IG51bGw7XHJcblx0XHR0aGlzLmRpckxpZ2h0ID0gbnVsbDtcclxuXHR9XHJcblx0XHJcblxyXG5cdHNldE9iamVjdCh0eXBlKXtcclxuXHRcdC8vY2xlYXIgbGFzdFxyXG5cdFx0Zm9yICggdmFyIGkgPSB0aGlzLnNjZW5lLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGkgLS0gKSB7XHJcblx0XHRcdHZhciBvYmogPSB0aGlzLnNjZW5lLmNoaWxkcmVuWyBpIF07XHJcblx0XHRcdGlmIChvYmogaW5zdGFuY2VvZiBUSFJFRS5NZXNoKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5yZW1vdmUob2JqKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBnZW9tZXRyeSA9IG51bGw7XHJcblx0XHRpZiAodHlwZSA9PSAwKXtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlQnVmZmVyR2VvbWV0cnkoIDEsIDUwLCA1MCApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZSA9PSAxKXtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gMil7XHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzS25vdEJ1ZmZlckdlb21ldHJ5KCAxLCAwLjQsIDY0LCA4ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlID09IDMpe1xyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDMsMyw0MCw0MCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlID09IDQpe1xyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckJ1ZmZlckdlb21ldHJ5KDEsMSwzLDUwKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gNSl7XHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uQnVmZmVyR2VvbWV0cnkoIDEsIDEgKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodHlwZSA9PSA2KXtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuVG9ydXNCdWZmZXJHZW9tZXRyeSgxLDAuNCwxNiwxMDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vVEhSRUUuQnVmZmVyR2VvbWV0cnlVdGlscy5jb21wdXRlVGFuZ2VudHMoIGdlb21ldHJ5ICk7XHJcblx0XHR0aGlzLmNvbXB1dGVUYW5nZW50KGdlb21ldHJ5KTtcclxuXHRcdC8vIGdlb21ldHJ5LnZlcnRpY2VzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblx0XHQvLyBnZW9tZXRyeS5ub3JtYWxzTmVlZFVwZGF0ZSA9IHRydWU7XHJcblx0XHQvLyBnZW9tZXRyeS51dnNOZWVkVXBkYXRlID0gdHJ1ZTtcclxuXHRcdC8vIC8vZ2VvbWV0cnkuY29tcHV0ZUNlbnRyb2lkcygpO1xyXG5cdFx0Ly8gZ2VvbWV0cnkuY29tcHV0ZUZhY2VOb3JtYWxzKCk7XHJcblx0XHQvLyBnZW9tZXRyeS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xyXG5cdFx0Ly8gZ2VvbWV0cnkuY29tcHV0ZU1vcnBoTm9ybWFscygpO1xyXG5cdFx0Ly8gZ2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKCk7XHJcblxyXG5cdFx0dGhpcy5jdXJPYmogPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIHRoaXMuY3VyTWF0ZXJpYWwoKSApO1xyXG5cdFx0dGhpcy5jdXJPYmoubmFtZSA9IFwiTWVzaE9ialwiO1xyXG5cdFx0dGhpcy5jdXJPYmoucG9zaXRpb24uc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdGxldCBzY29wZSA9IHRoaXM7XHJcblx0XHQvLyB0aGlzLmN1ck9iai5vbkJlZm9yZVJlbmRlciA9IGZ1bmN0aW9uKCByZW5kZXJlciwgc2NlbmUsIGNhbWVyYSwgZ2VvbWV0cnksIG1hdGVyaWFsLCBncm91cCApIHtcclxuXHRcdC8vIFx0bWF0ZXJpYWwudW5pZm9ybXMuaVRpbWUudmFsdWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAuMDsgXHJcblx0XHQvLyB9O1xyXG5cdFx0XHJcblx0XHR0aGlzLnNjZW5lLmFkZCh0aGlzLmN1ck9iaik7XHJcblx0fVxyXG5cclxuXHRjb21wdXRlVGFuZ2VudCAoIGdlb21ldHJ5ICkge1xyXG5cclxuXHRcdHZhciBpbmRleCA9IGdlb21ldHJ5LmluZGV4O1xyXG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBnZW9tZXRyeS5hdHRyaWJ1dGVzO1xyXG5cclxuXHRcdGlmIChhdHRyaWJ1dGVzID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ2NvbXB1dGUgdGFuZ2VudCBmdW5jdGlvbiBvbmx5IHN1cHBvcnQgYnVmZmVyIGdlb21ldHJ5Jyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBiYXNlZCBvbiBodHRwOi8vd3d3LnRlcmF0aG9uLmNvbS9jb2RlL3RhbmdlbnQuaHRtbFxyXG5cdFx0Ly8gKHBlciB2ZXJ0ZXggdGFuZ2VudHMpXHJcblxyXG5cdFx0aWYgKCBpbmRleCA9PT0gbnVsbCB8fFxyXG5cdFx0XHQgYXR0cmlidXRlcy5wb3NpdGlvbiA9PT0gdW5kZWZpbmVkIHx8XHJcblx0XHRcdCBhdHRyaWJ1dGVzLm5vcm1hbCA9PT0gdW5kZWZpbmVkIHx8XHJcblx0XHRcdCBhdHRyaWJ1dGVzLnV2ID09PSB1bmRlZmluZWQgKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oICdUSFJFRS5CdWZmZXJHZW9tZXRyeTogTWlzc2luZyByZXF1aXJlZCBhdHRyaWJ1dGVzIChpbmRleCwgcG9zaXRpb24sIG5vcm1hbCBvciB1dikgaW4gQnVmZmVyR2VvbWV0cnkuY29tcHV0ZVRhbmdlbnRzKCknICk7XHJcblx0XHRcdHJldHVybjtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGluZGljZXMgPSBpbmRleC5hcnJheTtcclxuXHRcdHZhciBwb3NpdGlvbnMgPSBhdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG5cdFx0dmFyIG5vcm1hbHMgPSBhdHRyaWJ1dGVzLm5vcm1hbC5hcnJheTtcclxuXHRcdHZhciB1dnMgPSBhdHRyaWJ1dGVzLnV2LmFycmF5O1xyXG5cclxuXHRcdHZhciBuVmVydGljZXMgPSBwb3NpdGlvbnMubGVuZ3RoIC8gMztcclxuXHJcblx0XHRpZiAoIGF0dHJpYnV0ZXMudGFuZ2VudCA9PT0gdW5kZWZpbmVkICkge1xyXG5cclxuXHRcdFx0Z2VvbWV0cnkuYWRkQXR0cmlidXRlKCAndGFuZ2VudCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoIG5ldyBGbG9hdDMyQXJyYXkoIDQgKiBuVmVydGljZXMgKSwgNCApICk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0YW5nZW50cyA9IGF0dHJpYnV0ZXMudGFuZ2VudC5hcnJheTtcclxuXHJcblx0XHR2YXIgdGFuMSA9IFtdLCB0YW4yID0gW107XHJcblxyXG5cdFx0Zm9yICggdmFyIGsgPSAwOyBrIDwgblZlcnRpY2VzOyBrICsrICkge1xyXG5cclxuXHRcdFx0dGFuMVsgayBdID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdFx0dGFuMlsgayBdID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHZBID0gbmV3IFRIUkVFLlZlY3RvcjMoKSxcclxuXHRcdFx0dkIgPSBuZXcgVEhSRUUuVmVjdG9yMygpLFxyXG5cdFx0XHR2QyA9IG5ldyBUSFJFRS5WZWN0b3IzKCksXHJcblxyXG5cdFx0XHR1dkEgPSBuZXcgVEhSRUUuVmVjdG9yMigpLFxyXG5cdFx0XHR1dkIgPSBuZXcgVEhSRUUuVmVjdG9yMigpLFxyXG5cdFx0XHR1dkMgPSBuZXcgVEhSRUUuVmVjdG9yMigpLFxyXG5cclxuXHRcdFx0c2RpciA9IG5ldyBUSFJFRS5WZWN0b3IzKCksXHJcblx0XHRcdHRkaXIgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGhhbmRsZVRyaWFuZ2xlKCBhLCBiLCBjICkge1xyXG5cclxuXHRcdFx0dkEuZnJvbUFycmF5KCBwb3NpdGlvbnMsIGEgKiAzICk7XHJcblx0XHRcdHZCLmZyb21BcnJheSggcG9zaXRpb25zLCBiICogMyApO1xyXG5cdFx0XHR2Qy5mcm9tQXJyYXkoIHBvc2l0aW9ucywgYyAqIDMgKTtcclxuXHJcblx0XHRcdHV2QS5mcm9tQXJyYXkoIHV2cywgYSAqIDIgKTtcclxuXHRcdFx0dXZCLmZyb21BcnJheSggdXZzLCBiICogMiApO1xyXG5cdFx0XHR1dkMuZnJvbUFycmF5KCB1dnMsIGMgKiAyICk7XHJcblxyXG5cdFx0XHR2YXIgeDEgPSB2Qi54IC0gdkEueDtcclxuXHRcdFx0dmFyIHgyID0gdkMueCAtIHZBLng7XHJcblxyXG5cdFx0XHR2YXIgeTEgPSB2Qi55IC0gdkEueTtcclxuXHRcdFx0dmFyIHkyID0gdkMueSAtIHZBLnk7XHJcblxyXG5cdFx0XHR2YXIgejEgPSB2Qi56IC0gdkEuejtcclxuXHRcdFx0dmFyIHoyID0gdkMueiAtIHZBLno7XHJcblxyXG5cdFx0XHR2YXIgczEgPSB1dkIueCAtIHV2QS54O1xyXG5cdFx0XHR2YXIgczIgPSB1dkMueCAtIHV2QS54O1xyXG5cclxuXHRcdFx0dmFyIHQxID0gdXZCLnkgLSB1dkEueTtcclxuXHRcdFx0dmFyIHQyID0gdXZDLnkgLSB1dkEueTtcclxuXHJcblx0XHRcdHZhciByID0gMS4wIC8gKCBzMSAqIHQyIC0gczIgKiB0MSApO1xyXG5cclxuXHRcdFx0c2Rpci5zZXQoXHJcblx0XHRcdFx0KCB0MiAqIHgxIC0gdDEgKiB4MiApICogcixcclxuXHRcdFx0XHQoIHQyICogeTEgLSB0MSAqIHkyICkgKiByLFxyXG5cdFx0XHRcdCggdDIgKiB6MSAtIHQxICogejIgKSAqIHJcclxuXHRcdFx0KTtcclxuXHJcblx0XHRcdHRkaXIuc2V0KFxyXG5cdFx0XHRcdCggczEgKiB4MiAtIHMyICogeDEgKSAqIHIsXHJcblx0XHRcdFx0KCBzMSAqIHkyIC0gczIgKiB5MSApICogcixcclxuXHRcdFx0XHQoIHMxICogejIgLSBzMiAqIHoxICkgKiByXHJcblx0XHRcdCk7XHJcblxyXG5cdFx0XHR0YW4xWyBhIF0uYWRkKCBzZGlyICk7XHJcblx0XHRcdHRhbjFbIGIgXS5hZGQoIHNkaXIgKTtcclxuXHRcdFx0dGFuMVsgYyBdLmFkZCggc2RpciApO1xyXG5cclxuXHRcdFx0dGFuMlsgYSBdLmFkZCggdGRpciApO1xyXG5cdFx0XHR0YW4yWyBiIF0uYWRkKCB0ZGlyICk7XHJcblx0XHRcdHRhbjJbIGMgXS5hZGQoIHRkaXIgKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGdyb3VwcyA9IGdlb21ldHJ5Lmdyb3VwcztcclxuXHJcblx0XHRpZiAoIGdyb3Vwcy5sZW5ndGggPT09IDAgKSB7XHJcblxyXG5cdFx0XHRncm91cHMgPSBbIHtcclxuXHRcdFx0XHRzdGFydDogMCxcclxuXHRcdFx0XHRjb3VudDogaW5kaWNlcy5sZW5ndGhcclxuXHRcdFx0fSBdO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaiA9IDAsIGpsID0gZ3JvdXBzLmxlbmd0aDsgaiA8IGpsOyArKyBqICkge1xyXG5cclxuXHRcdFx0dmFyIGdyb3VwID0gZ3JvdXBzWyBqIF07XHJcblxyXG5cdFx0XHR2YXIgc3RhcnQgPSBncm91cC5zdGFydDtcclxuXHRcdFx0dmFyIGNvdW50ID0gZ3JvdXAuY291bnQ7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IHN0YXJ0LCBpbCA9IHN0YXJ0ICsgY291bnQ7IGkgPCBpbDsgaSArPSAzICkge1xyXG5cclxuXHRcdFx0XHRoYW5kbGVUcmlhbmdsZShcclxuXHRcdFx0XHRcdGluZGljZXNbIGkgKyAwIF0sXHJcblx0XHRcdFx0XHRpbmRpY2VzWyBpICsgMSBdLFxyXG5cdFx0XHRcdFx0aW5kaWNlc1sgaSArIDIgXVxyXG5cdFx0XHRcdCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB0bXAgPSBuZXcgVEhSRUUuVmVjdG9yMygpLCB0bXAyID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHRcdHZhciBuID0gbmV3IFRIUkVFLlZlY3RvcjMoKSwgbjIgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0dmFyIHcsIHQsIHRlc3Q7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaGFuZGxlVmVydGV4KCB2ICkge1xyXG5cclxuXHRcdFx0bi5mcm9tQXJyYXkoIG5vcm1hbHMsIHYgKiAzICk7XHJcblx0XHRcdG4yLmNvcHkoIG4gKTtcclxuXHJcblx0XHRcdHQgPSB0YW4xWyB2IF07XHJcblxyXG5cdFx0XHQvLyBHcmFtLVNjaG1pZHQgb3J0aG9nb25hbGl6ZVxyXG5cclxuXHRcdFx0dG1wLmNvcHkoIHQgKTtcclxuXHRcdFx0dG1wLnN1Yiggbi5tdWx0aXBseVNjYWxhciggbi5kb3QoIHQgKSApICkubm9ybWFsaXplKCk7XHJcblxyXG5cdFx0XHQvLyBDYWxjdWxhdGUgaGFuZGVkbmVzc1xyXG5cclxuXHRcdFx0dG1wMi5jcm9zc1ZlY3RvcnMoIG4yLCB0ICk7XHJcblx0XHRcdHRlc3QgPSB0bXAyLmRvdCggdGFuMlsgdiBdICk7XHJcblx0XHRcdHcgPSAoIHRlc3QgPCAwLjAgKSA/IC0gMS4wIDogMS4wO1xyXG5cclxuXHRcdFx0dGFuZ2VudHNbIHYgKiA0IF0gPSB0bXAueDtcclxuXHRcdFx0dGFuZ2VudHNbIHYgKiA0ICsgMSBdID0gdG1wLnk7XHJcblx0XHRcdHRhbmdlbnRzWyB2ICogNCArIDIgXSA9IHRtcC56O1xyXG5cdFx0XHR0YW5nZW50c1sgdiAqIDQgKyAzIF0gPSB3O1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRmb3IgKCB2YXIgaiA9IDAsIGpsID0gZ3JvdXBzLmxlbmd0aDsgaiA8IGpsOyArKyBqICkge1xyXG5cclxuXHRcdFx0dmFyIGdyb3VwID0gZ3JvdXBzWyBqIF07XHJcblxyXG5cdFx0XHR2YXIgc3RhcnQgPSBncm91cC5zdGFydDtcclxuXHRcdFx0dmFyIGNvdW50ID0gZ3JvdXAuY291bnQ7XHJcblxyXG5cdFx0XHRmb3IgKCB2YXIgaSA9IHN0YXJ0LCBpbCA9IHN0YXJ0ICsgY291bnQ7IGkgPCBpbDsgaSArPSAzICkge1xyXG5cclxuXHRcdFx0XHRoYW5kbGVWZXJ0ZXgoIGluZGljZXNbIGkgKyAwIF0gKTtcclxuXHRcdFx0XHRoYW5kbGVWZXJ0ZXgoIGluZGljZXNbIGkgKyAxIF0gKTtcclxuXHRcdFx0XHRoYW5kbGVWZXJ0ZXgoIGluZGljZXNbIGkgKyAyIF0gKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0bmV3U2NlbmUoKXtcclxuXHRcdHRoaXMuY2xlYXIoKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHR9XHJcblxyXG5cdGxvYWQoanNvbiwgZGF0YSkge1xyXG5cdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0dGhpcy5zY2VuZSA9IHRoaXMubG9hZGVyLnBhcnNlKGpzb24uc2NlbmUpO1xyXG5cdFx0aWYgKGpzb24uZW52U2NlbmUgIT0gbnVsbCl7XHJcblx0XHRcdHRoaXMuZW52U2NlbmUgPSB0aGlzLmxvYWRlci5wYXJzZShqc29uLmVudlNjZW5lKTtcclxuXHRcdFx0dGhpcy5kaXJMaWdodCA9IHRoaXMuZW52U2NlbmUuZ2V0T2JqZWN0QnlOYW1lKCBcImRpckxpZ2h0XCIgKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY3VyTWF0ID0gdGhpcy5jdXJNYXRlcmlhbCgpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXJNYXRlcmlhbChqc29uLmZyYWcsIGpzb24udmVydCk7XHJcblx0XHR0aGlzLmN1ck1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcclxuXHRcdHRoaXMudXNlTGlnaHQoZGF0YS51c2VMaWdodCk7XHJcblx0fVxyXG5cclxuXHJcblx0dG9KU09OKCl7XHJcblx0XHRsZXQgc2NvcGUgPSB0aGlzO1xyXG5cdFx0dGhpcy5zY2VuZS50cmF2ZXJzZSAoZnVuY3Rpb24gKG9iamVjdClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2JqZWN0Lm1hdGVyaWFsIGluc3RhbmNlb2YgVEhSRUUuU2hhZGVyTWF0ZXJpYWwpe1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY29wZS50aHJlZUNhbnZhcy5kYXRhLnRleHR1cmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gJ2lUZXh0dXJlJyArIGk7XHJcblx0XHRcdFx0XHRcdG9iamVjdC5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0b2JqZWN0Lm1hdGVyaWFsLnVuaWZvcm1zLmlEZXB0aFRleHR1cmUudmFsdWUgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWV0YWRhdGE6IHt9LFxyXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZS50b0pTT04oKSxcclxuXHRcdFx0ZW52U2NlbmU6IHRoaXMuZW52U2NlbmUgIT0gbnVsbCA/IHRoaXMuZW52U2NlbmUudG9KU09OKCkgOiBudWxsLFxyXG5cdFx0XHRmcmFnOiB0aGlzLmN1ck1hdGVyaWFsKCkuZnJhZ21lbnRTaGFkZXIsXHJcblx0XHRcdHZlcnQ6IHRoaXMuY3VyTWF0ZXJpYWwoKS52ZXJ0ZXhTaGFkZXIsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVW5pZm9ybXMoKXtcclxuXHRcdGxldCBzY29wZSA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIGN1clRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAuMDtcclxuXHRcdGlmIChzY29wZS5kaXJMaWdodCAhPSBudWxsKXtcclxuXHRcdFx0dGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXQoIDEwICogTWF0aC5zaW4oY3VyVGltZSksIDEwLCAxMCAqIE1hdGguY29zKGN1clRpbWUpICk7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xyXG5cclxuXHRcdFx0Ly9pZSBidWc/XHJcblx0XHRcdGlmIChzY29wZS5kaXJMaWdodC5wb3NpdGlvbi54IDwgOTk5OSl7XHJcblx0XHRcdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlMaWdodERpcmVjdGlvbi52YWx1ZSA9IC10aGlzLmRpckxpZ2h0LnBvc2l0aW9uO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gY3VyVGltZTtcclxuXHRcdC8vIHRoaXMuY3VyTWF0ZXJpYWwoKS51bmlmb3Jtcy5pUmVzb2x1dGlvbi52YWx1ZS54ID0gc2NvcGUudGhyZWVDYW52YXMuY2FudmFzLmNsaWVudFdpZHRoO1xyXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnkgPSBzY29wZS50aHJlZUNhbnZhcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlDYW1lcmFOZWFyLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuY2FtZXJhLm5lYXI7XHJcblx0XHQvLyB0aGlzLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMuaUNhbWVyYUZhci52YWx1ZSA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbWVyYS5mYXI7XHJcblx0XHQvLyB0aGlzLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMuaURlcHRoVGV4dHVyZS52YWx1ZSA9IHNjb3BlLnRocmVlQ2FudmFzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZTtcclxuXHJcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaVRpbWUudmFsdWUgPSBjdXJUaW1lO1xyXG5cdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnggPSBzY29wZS50aHJlZUNhbnZhcy5jYW52YXMuY2xpZW50V2lkdGg7XHJcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueSA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaUNhbWVyYU5lYXIudmFsdWUgPSBzY29wZS50aHJlZUNhbnZhcy5jYW1lcmEubmVhcjtcclxuXHRcdHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtcy5pQ2FtZXJhRmFyLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuY2FtZXJhLmZhcjtcclxuXHRcdHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtcy5pRGVwdGhUZXh0dXJlLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuZGVwdGhUYXJnZXQuZGVwdGhUZXh0dXJlO1xyXG5cdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdHJpeFdvcmxkLmdldEludmVyc2Uoc2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlXb3JsZDJPYmplY3RNYXRyaXgudmFsdWUpO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NvcGUudGhyZWVDYW52YXMuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdHZhciBwcm9wZXJ0eSA9ICdpVGV4dHVyZScgKyBpO1xyXG5cdFx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXNbcHJvcGVydHldLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuZGF0YS50ZXh0dXJlc1tpXTtcclxuXHRcdFx0aWYgKHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUgIT0gbnVsbCAmJiBzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXNbcHJvcGVydHldLnZhbHVlICE9IHVuZGVmaW5lZCl7XHJcblx0XHRcdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zW3Byb3BlcnR5XS52YWx1ZS53cmFwUyA9IHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi9UaHJlZUNhbnZhcyc7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyUGFzcyB7XHJcblx0Y29uc3RydWN0b3IoY2FudmFzLCByZW5kZXJlciwgZG93blJlcywgcmVuZGVyVG9TY3JlZW4sIGZyYWcsIHZlcnRleCwgaW5kZXgsIHBhc3NOYW1lKSB7XHJcblx0XHR0aGlzLnRocmVlQ2FudmFzID0gY2FudmFzO1xyXG5cdFx0dGhpcy53aWR0aCA9IGNhbnZhcy5jYW52YXMuY2xpZW50V2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGNhbnZhcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cclxuXHRcdHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcblx0XHRpZiAocGFzc05hbWUgPT0gbnVsbCB8fCBwYXNzTmFtZSA9PSB1bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnBhc3NOYW1lID0gJ05hbWUnO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZXtcclxuXHRcdFx0dGhpcy5wYXNzTmFtZSA9IHBhc3NOYW1lO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSggLSAxLCAxLCAxLCAtIDEsIDAsIDEgKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMucXVhZCA9IG5ldyBUSFJFRS5NZXNoKCBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMiwgMiApLCBudWxsICk7XHJcblx0XHR0aGlzLnF1YWQuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlOyAvLyBBdm9pZCBnZXR0aW5nIGNsaXBwZWRcclxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcclxuXHJcblx0XHQvL3RoaXMudW5pZm9ybXMgPSB0aGlzLnRocmVlQ2FudmFzLmdldElucHV0VW5pZm9ybXMoKTtcclxuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcclxuXHRcdFx0dW5pZm9ybXM6IG51bGwsXHJcblx0XHRcdHZlcnRleFNoYWRlcjogdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydGV4LFxyXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgZnJhZ1xyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMucmVmcmVzaFVuaWZvcm1zKCk7XHJcblxyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cdFx0dGhpcy5yZW5kZXJUb1NjcmVlbiA9IHJlbmRlclRvU2NyZWVuO1xyXG5cdFx0dGhpcy5kb3duUmVzID0gZG93blJlcztcclxuXHRcdHRoaXMuc2V0VGFyZ2V0VGV4dHVyZShkb3duUmVzKTtcclxuXHRcdHRoaXMudXBkYXRlTWF0ZXJpYWwodGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydGV4LCBcclxuXHRcdHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRIZWFkZXIoKSArIGZyYWcpO1xyXG5cdH1cclxuXHJcblx0c2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHRcdHRoaXMucmVuZGVyVGFyZ2V0LnNldFNpemUoIHdpZHRoICogdGhpcy5kb3duUmVzLCBoZWlnaHQgKiB0aGlzLmRvd25SZXMgKTtcclxuXHR9XHJcblxyXG5cdHNldFJlcyhyZXMpe1xyXG5cdFx0dGhpcy5kb3duUmVzID0gcmVzO1xyXG5cdFx0dGhpcy5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuXHR9XHJcblxyXG5cdHRvSlNPTigpe1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0ZG93blJlczogdGhpcy5kb3duUmVzLFxyXG5cdFx0XHRyZW5kZXJUb1NjcmVlbjogdGhpcy5yZW5kZXJUb1NjcmVlbixcclxuXHRcdFx0ZnJhZzogdGhpcy5tYXRlcmlhbC5mcmFnbWVudFNoYWRlcixcclxuXHRcdFx0dmVydGV4OiB0aGlzLm1hdGVyaWFsLnZlcnRleFNoYWRlcixcclxuXHRcdFx0cGFzc05hbWU6IHRoaXMucGFzc05hbWUsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKXtcclxuXHRcdHRoaXMucXVhZC5tYXRlcmlhbCA9IHRoaXMubWF0ZXJpYWw7XHJcblx0XHRpZiAoIHRoaXMucmVuZGVyVG9TY3JlZW4gKSB7XHJcblx0XHRcdHRoaXMucmVuZGVyZXIucmVuZGVyKCB0aGlzLnNjZW5lLCB0aGlzLmNhbWVyYSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVGFyZ2V0LCB0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlZnJlc2hVbmlmb3Jtcygpe1xyXG5cdFx0dGhpcy51bmlmb3JtcyA9IHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRVbmlmb3JtcygpO1xyXG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3JtcyA9IHRoaXMudW5pZm9ybXM7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVNYXRlcmlhbCh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKXtcclxuXHRcdHRoaXMucmVmcmVzaFVuaWZvcm1zKCk7XHJcblx0XHR0aGlzLm1hdGVyaWFsLnZlcnRleFNoYWRlciA9IHZlcnRleFNoYWRlcjtcclxuXHRcdHRoaXMubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudFNoYWRlcjtcclxuXHRcdHRoaXMubWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0c2V0VGFyZ2V0VGV4dHVyZShkb3duUmVzKXtcclxuXHRcdHZhciBwYXJhbWV0ZXJzID0ge1xyXG5cdFx0XHRtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcclxuXHRcdFx0bWFnRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcblx0XHRcdGZvcm1hdDogVEhSRUUuUkdCQUZvcm1hdCxcclxuICAgICAgICAgICAgc3RlbmNpbEJ1ZmZlcjogZmFsc2UsXHJcblx0XHR9O1xyXG5cdFx0dmFyIHNpemUgPSB0aGlzLnJlbmRlcmVyLmdldERyYXdpbmdCdWZmZXJTaXplKCk7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggc2l6ZS53aWR0aCAqIGRvd25SZXMsIHNpemUuaGVpZ2h0ICogZG93blJlcywgcGFyYW1ldGVycyApO1xyXG5cdFx0Ly9yZW5kZXJUYXJnZXQudGV4dHVyZS5uYW1lID0gJ0VmZmVjdENvbXBvc2VyLnJ0MSc7XHJcblx0fVxyXG5cclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gJy4vUmVuZGVyUGFzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVERhdGEge1xyXG5cdGNvbnN0cnVjdG9yKG93bmVyKSB7XHJcblx0XHR0aGlzLm93bmVyID0gb3duZXI7XHJcblx0XHR0aGlzLnRleHR1cmVzID0gbmV3IEFycmF5KDIpO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHRoaXMuZWRpdE1vZGUgPSAwO1xyXG5cdFx0dGhpcy5ibGVuZGluZyA9IDA7XHJcblx0XHR0aGlzLnNpZGUgPSAwO1xyXG5cdFx0dGhpcy50cmFuc3BhcmVudCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5vYmpTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCAxLCAxLCAxICk7XHJcblx0XHR0aGlzLm9ialBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAwICk7XHJcblx0XHR0aGlzLm9ialJvdCA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAwICk7XHJcblx0XHR0aGlzLm9iamVjdFR5cGUgPSAwO1xyXG5cdFx0dGhpcy5mbGF0U2hhZGluZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy53aXJlZnJhbWUgPSBmYWxzZTtcclxuXHRcdHRoaXMuZGVwdGhXcml0ZSA9IHRydWU7XHJcblx0XHR0aGlzLmRlcHRoVGVzdCA9IHRydWU7XHJcblx0XHR0aGlzLnJlbmRlclBhc3NlcyA9IG5ldyBBcnJheSgpO1xyXG5cdFx0dGhpcy5wYXNzRGF0YXMgPSBbXTtcclxuXHRcdHRoaXMuc2hvd1NjZW5lID0gZmFsc2U7XHJcblx0XHR0aGlzLnVzZUxpZ2h0ID0gZmFsc2U7XHJcblx0XHR0aGlzLmFuaW1hdGVTY2FsZSA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0dG9KU09OKCl7XHJcblx0XHR2YXIgdGV4RGF0YSA9IFtdO1xyXG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcclxuXHRcdHZhciBiYWNrdXAgPSB0aGlzLnRleHR1cmVzLnNsaWNlKCk7XHJcblx0XHR0aGlzLnRleHR1cmVzID0gbmV3IEFycmF5KDIpO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBiYWNrdXAubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRpZiAoYmFja3VwW2ldID09IG51bGwgfHwgYmFja3VwW2ldLmltYWdlID09IHVuZGVmaW5lZCB8fCBiYWNrdXBbaV0uaW1hZ2UgPT0gbnVsbCl7XHJcblx0XHRcdFx0dGV4RGF0YS5wdXNoKG51bGwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2V7XHJcblx0XHRcdFx0Ly9OT1RFISEhIFxyXG5cdFx0XHRcdC8vdG9KU09OKHRoaXMpIHdpbGwgc2V0IGltYWdlcyBkYXRhLCBhbmQgdGV4dHVyZXMhIVxyXG5cdFx0XHRcdHRleERhdGEucHVzaChiYWNrdXBbaV0udG9KU09OKHRoaXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy50ZXh0dXJlcyA9IGJhY2t1cDtcclxuXHJcblx0XHR0aGlzLnBhc3NEYXRhcyA9IFtdO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdHRoaXMucGFzc0RhdGFzLnB1c2godGhpcy5yZW5kZXJQYXNzZXNbaV0udG9KU09OKCkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiB7XHJcblx0XHRcdHRleHR1cmVzOiB0ZXhEYXRhLFxyXG5cdFx0XHRpbWFnZXM6IHRoaXMuaW1hZ2VzLFxyXG5cdFx0XHRlZGl0TW9kZTogdGhpcy5lZGl0TW9kZSxcclxuXHRcdFx0YmxlbmRpbmc6IHRoaXMuYmxlbmRpbmcsXHJcblx0XHRcdHNpZGU6IHRoaXMuc2lkZSxcclxuXHRcdFx0dHJhbnNwYXJlbnQ6IHRoaXMudHJhbnNwYXJlbnQsXHJcblx0XHRcdG9ialNjYWxlOiB0aGlzLm9ialNjYWxlLFxyXG5cdFx0XHRvYmpQb3M6IHRoaXMub2JqUG9zLFxyXG5cdFx0XHRvYmpSb3Q6IHRoaXMub2JqUm90LFxyXG5cdFx0XHRvYmplY3RUeXBlOiB0aGlzLm9iamVjdFR5cGUsXHJcblx0XHRcdGZsYXRTaGFkaW5nOnRoaXMuZmxhdFNoYWRpbmcsXHJcblx0XHRcdHdpcmVmcmFtZTp0aGlzLndpcmVmcmFtZSxcclxuXHRcdFx0ZGVwdGhXcml0ZTp0aGlzLmRlcHRoV3JpdGUsXHJcblx0XHRcdGRlcHRoVGVzdDp0aGlzLmRlcHRoVGVzdCxcclxuXHRcdFx0cGFzc0RhdGFzOiB0aGlzLnBhc3NEYXRhcyxcclxuXHRcdFx0c2hvd1NjZW5lOiB0aGlzLnNob3dTY2VuZSxcclxuXHRcdFx0dXNlTGlnaHQ6IHRoaXMudXNlTGlnaHQsXHJcblx0XHRcdGFuaW1hdGVTY2FsZTp0aGlzLmFuaW1hdGVTY2FsZSxcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGxvYWRGcm9tSlNPTihqc29uKXtcclxuXHJcblx0XHR0aGlzLnRleHR1cmVzID0ganNvbi50ZXh0dXJlcztcclxuXHRcdHRoaXMuaW1hZ2VzID0ganNvbi5pbWFnZXM7XHJcblx0XHR0aGlzLmVkaXRNb2RlID0ganNvbi5lZGl0TW9kZTtcclxuXHRcdHRoaXMuYmxlbmRpbmcgPSBqc29uLmJsZW5kaW5nID09IHVuZGVmaW5lZCA/IDA6IGpzb24uYmxlbmRpbmc7XHJcblx0XHR0aGlzLnNpZGUgPSBqc29uLnNpZGUgPT0gdW5kZWZpbmVkID8gMDoganNvbi5zaWRlO1xyXG5cdFx0dGhpcy50cmFuc3BhcmVudCA9IGpzb24udHJhbnNwYXJlbnQgPT0gdW5kZWZpbmVkID8gdHJ1ZToganNvbi50cmFuc3BhcmVudDtcclxuXHRcdFxyXG5cdFx0dGhpcy5vYmpTY2FsZT1qc29uLm9ialNjYWxlLFxyXG5cdFx0dGhpcy5vYmpQb3M9IGpzb24ub2JqUG9zLFxyXG5cdFx0dGhpcy5vYmpSb3Q9IGpzb24ub2JqUm90LFxyXG5cdFx0dGhpcy5vYmplY3RUeXBlID0ganNvbi5vYmplY3RUeXBlID09IHVuZGVmaW5lZCA/IDA6IGpzb24ub2JqZWN0VHlwZTtcclxuXHRcdHRoaXMuZmxhdFNoYWRpbmcgPSBqc29uLmZsYXRTaGFkaW5nID09IHVuZGVmaW5lZCA/IGZhbHNlOiBqc29uLmZsYXRTaGFkaW5nO1xyXG5cdFx0dGhpcy53aXJlZnJhbWUgPSBqc29uLndpcmVmcmFtZSA9PSB1bmRlZmluZWQgPyBmYWxzZToganNvbi53aXJlZnJhbWU7XHJcblx0XHR0aGlzLmRlcHRoV3JpdGUgPSBqc29uLmRlcHRoV3JpdGUgPT0gdW5kZWZpbmVkID8gZmFsc2U6IGpzb24uZGVwdGhXcml0ZTtcclxuXHRcdHRoaXMuZGVwdGhUZXN0ID0ganNvbi5kZXB0aFRlc3QgPT0gdW5kZWZpbmVkID8gZmFsc2U6IGpzb24uZGVwdGhUZXN0O1xyXG5cdFx0dGhpcy5wYXNzRGF0YXMgPSBqc29uLnBhc3NEYXRhcztcclxuXHRcdHRoaXMuc2hvd1NjZW5lID0ganNvbi5zaG93U2NlbmU7XHJcblx0XHR0aGlzLnVzZUxpZ2h0ID0ganNvbi51c2VMaWdodDtcclxuXHRcdHRoaXMuYW5pbWF0ZVNjYWxlID0ganNvbi5hbmltYXRlU2NhbGUgPT0gdW5kZWZpbmVkID8gZmFsc2U6IGpzb24uYW5pbWF0ZVNjYWxlO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnRleHR1cmVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dHVyZXNbaV0gPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW2ldID0ge307XHJcbiAgICAgICAgICAgIH1cclxuXHRcdH1cclxuXHJcblx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLk9iamVjdExvYWRlcigpO1xyXG4gICAgICAgIHZhciBpbWFnZURhdGFzID0gW107XHJcbiAgICAgICAgZm9yKHZhciBlbGUgaW4gdGhpcy5pbWFnZXMpe1xyXG4gICAgICAgICAgICBpbWFnZURhdGFzLnB1c2godGhpcy5pbWFnZXNbZWxlXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgaW1hZ2VFbGVtZW50cyA9IGxvYWRlci5wYXJzZUltYWdlcyhpbWFnZURhdGFzKTtcclxuXHJcbiAgICAgICAgdmFyIHRleERhdGFzID0gbG9hZGVyLnBhcnNlVGV4dHVyZXModGhpcy50ZXh0dXJlcyxpbWFnZUVsZW1lbnRzKTtcclxuXHRcdC8vdGhpcy50ZXh0dXJlcyA9IFtdO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdGlmICh0aGlzLnRleHR1cmVzW2ldLnV1aWQgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IodmFyIGVsZSBpbiB0ZXhEYXRhcyl7XHJcblx0XHRcdFx0aWYgKHRoaXMudGV4dHVyZXNbaV0udXVpZCA9PT0gZWxlKXtcclxuXHRcdFx0XHRcdHRoaXMudGV4dHVyZXNbaV0gPSB0ZXhEYXRhc1tlbGVdO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgeyBzdWJzY3JpYmVNaXhpbiB9IGZyb20gJy4vdG9vbHMvbWl4aW4nO1xyXG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnLi90b29scy9PcmJpdENvbnRyb2xzJztcclxuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi90b29scy9Mb2FkZXInO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm1Db250cm9scyB9IGZyb20gJy4vdG9vbHMvVHJhbnNmb3JtQ29udHJvbHMnO1xyXG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tICcuL1BsYXllcic7XHJcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICcuL1JlbmRlclBhc3MnO1xyXG5pbXBvcnQgeyBURGF0YSB9IGZyb20gJy4vVERhdGEnO1xyXG4vL2ltcG9ydCB7IFNoYWRlclBhc3MsIENsZWFyUGFzcywgUmVuZGVyUGFzcywgRWZmZWN0Q29tcG9zZXIsQ29weVNoYWRlcixEb3RTY3JlZW5TaGFkZXIgfSBmcm9tICcuL0VmZmVjdENvbXBvc2VyLmpzJztcclxuXHJcbmNvbnN0IFZFUlRFWF9IRUFERVJfVEhSRUUgPSBgXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuLy9UaHJlZS5qcyBCdWlsdC1pbiB1bmlmb3JtcyBhbmQgYXR0cmlidXRlc1xyXG4vL2h0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL3JlbmRlcmVycy93ZWJnbC9XZWJHTFByb2dyYW1cclxuLy8gPSBvYmplY3QubWF0cml4V29ybGRcclxudW5pZm9ybSBtYXQ0IG1vZGVsTWF0cml4O1xyXG4vLyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKiBvYmplY3QubWF0cml4V29ybGRcclxudW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcclxuLy8gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeFxyXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcclxuLy8gPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlXHJcbnVuaWZvcm0gbWF0NCB2aWV3TWF0cml4O1xyXG4vLyA9IGludmVyc2UgdHJhbnNwb3NlIG9mIG1vZGVsVmlld01hdHJpeFxyXG51bmlmb3JtIG1hdDMgbm9ybWFsTWF0cml4O1xyXG4vLyA9IGNhbWVyYSBwb3NpdGlvbiBpbiB3b3JsZCBzcGFjZVxyXG51bmlmb3JtIHZlYzMgY2FtZXJhUG9zaXRpb247XHJcblxyXG4vLyBkZWZhdWx0IHZlcnRleCBhdHRyaWJ1dGVzIHByb3ZpZGVkIGJ5IEdlb21ldHJ5IGFuZCBCdWZmZXJHZW9tZXRyeVxyXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcclxuYXR0cmlidXRlIHZlYzMgbm9ybWFsO1xyXG5hdHRyaWJ1dGUgdmVjMiB1djtcclxuYXR0cmlidXRlIHZlYzIgdXYyO1xyXG5gO1xyXG5cclxuY29uc3QgRlJBR19IRUFERVJfVEhSRUUgPSBgXHJcbnByZWNpc2lvbiBoaWdocCBmbG9hdDtcclxuLy9UaHJlZS5qcyBCdWlsdC1pbiB1bmlmb3JtcyBhbmQgYXR0cmlidXRlc1xyXG4vL2h0dHBzOi8vdGhyZWVqcy5vcmcvZG9jcy8jYXBpL3JlbmRlcmVycy93ZWJnbC9XZWJHTFByb2dyYW1cclxuLy8gPSBvYmplY3QubWF0cml4V29ybGRcclxudW5pZm9ybSBtYXQ0IG1vZGVsTWF0cml4O1xyXG4vLyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2UgKiBvYmplY3QubWF0cml4V29ybGRcclxudW5pZm9ybSBtYXQ0IG1vZGVsVmlld01hdHJpeDtcclxuLy8gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeFxyXG51bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDtcclxuLy8gPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlXHJcbnVuaWZvcm0gbWF0NCB2aWV3TWF0cml4O1xyXG4vLyA9IGludmVyc2UgdHJhbnNwb3NlIG9mIG1vZGVsVmlld01hdHJpeFxyXG51bmlmb3JtIG1hdDMgbm9ybWFsTWF0cml4O1xyXG4vLyA9IGNhbWVyYSBwb3NpdGlvbiBpbiB3b3JsZCBzcGFjZVxyXG51bmlmb3JtIHZlYzMgY2FtZXJhUG9zaXRpb247XHJcbmA7XHJcblxyXG5jb25zdCBFTVBUWV9WRVJURVhfU0hBREVSID0gYFxyXG52YXJ5aW5nIHZlYzMgZk5vcm1hbDtcclxudmFyeWluZyB2ZWMzIGZQb3NpdGlvbjtcclxudmFyeWluZyB2ZWMyIGZVVjtcclxuXHJcbnZvaWQgbWFpbigpXHJcbntcclxuICAgIGZOb3JtYWwgPSBub3JtYWw7XHJcbiAgICB2ZWM0IHdwb3MgPSBtb2RlbE1hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XHJcbiAgICBmUG9zaXRpb24gPSB3cG9zLnh5ejtcclxuICAgIGZVViA9IHV2O1xyXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBFTVBUWV9GUkFHX1NIQURFUiA9IGBcclxudmFyeWluZyB2ZWMzIGZQb3NpdGlvbjtcclxudmFyeWluZyB2ZWMzIGZOb3JtYWw7XHJcbnZhcnlpbmcgdmVjMiBmVVY7XHJcblxyXG52ZWMzIHJpbSh2ZWMzIGNvbG9yLCBmbG9hdCBzdGFydCwgZmxvYXQgZW5kLCBmbG9hdCBjb2VmKVxyXG57XHJcbiAgdmVjMyBub3JtYWwgPSBub3JtYWxpemUoZk5vcm1hbCk7XHJcbiAgdmVjMyBleWUgPSBub3JtYWxpemUoY2FtZXJhUG9zaXRpb24tIGZQb3NpdGlvbik7XHJcbiAgZmxvYXQgcmltID0gc21vb3Roc3RlcChzdGFydCwgZW5kLCAxLjAgLSBkb3Qobm9ybWFsLCBleWUpKTtcclxuICByZXR1cm4gY2xhbXAocmltLCAwLjAsIDEuMCkgKiBjb2VmICogY29sb3I7XHJcbn1cclxuXHJcblxyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICB2ZWMzIHJpbUNvbG9yID0gcmltKHZlYzMoMC43NjQsMS4wMDAsMC44NTcpLDAuMzYwLDEuMTQ0LDEuODE2KTtcclxuICAgIHZlYzMgYmFzZUNvbG9yID0gZk5vcm1hbCAqIHNpbihpVGltZSAqIDMuMCk7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHJpbUNvbG9yICsgYmFzZUNvbG9yLDEuMCk7XHJcbn1cclxuYDtcclxuXHJcbmNvbnN0IFZJR05FVFRFX1ZFUlRFWCA9IGBcclxudmFyeWluZyB2ZWMyIGZVVjtcclxudm9pZCBtYWluKCkge1xyXG4gICAgZlVWID0gdXY7XHJcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XHJcbn1cclxuYDtcclxuXHJcbmNvbnN0IFZJR05FVFRFX0ZSQUcgPSBgXHJcbnZhcnlpbmcgdmVjMiBmVVY7XHJcbi8vRmlsbCB0aGUgaVBhc3MwIHRleHR1cmUgd2l0aCBWaWduZXR0ZSBzaGFkZXIuXHJcbnZvaWQgbWFpbigpIHtcclxuICAgIGZsb2F0IG9mZnNldCA9IDEuMDtcclxuICAgIGZsb2F0IGRhcmtuZXNzID0gMS4wO1xyXG4gICAgdmVjNCBiYWNrQ29sb3IgPSB2ZWM0KDAuMjAzLDAuMjkzLDAuNDg1LDEuMDAwKTtcclxuICAgIHZlYzIgdXYgPSAoIGZVViAtIHZlYzIoMC41LDAuNSkgKSAqIHZlYzIoIG9mZnNldCApO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggbWl4KCBiYWNrQ29sb3IucmdiLCB2ZWMzKCAxLjAgLSBkYXJrbmVzcyApLCBkb3QoIHV2LCB1diApICksIGJhY2tDb2xvci5hICk7XHJcbn1cclxuYDtcclxuXHJcbmNvbnN0IENPTVBPU0VfRlJBRyA9IGBcclxudmFyeWluZyB2ZWMyIGZVVjtcclxuLy9pUGFzczAgaXMgcmVuZGVyZWQgYnkgaVBhc3MwKHRoZSBWaWduZXR0ZSBzaGFkZXIpXHJcbi8vaVNjZW5lVGV4dHVyZSBpcyByZW5kZXJlZCBieSB0aGUgT2JqZWN0IHNoYWRlclxyXG52b2lkIG1haW4oKSB7XHJcbiAgICB2ZWM0IG9iamVjdCA9IHRleHR1cmUyRCggaVNjZW5lVGV4dHVyZSwgZlVWICk7XHJcbiAgICB2ZWM0IGJhY2tncm91bmQgPSB0ZXh0dXJlMkQoIGlQYXNzMCwgZlVWICk7XHJcbiAgICBnbF9GcmFnQ29sb3IgPSBtaXgoYmFja2dyb3VuZCwgb2JqZWN0LCBvYmplY3QuYSk7XHJcbn1cclxuYDtcclxuXHJcblxyXG5jb25zdCBERUZBVUxUX1BBU1NfVkVSVEVYID0gYFxyXG52YXJ5aW5nIHZlYzIgZlVWO1xyXG52b2lkIG1haW4oKSB7XHJcbiAgICBmVVYgPSB1djtcclxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcclxufVxyXG5gO1xyXG5cclxuY29uc3QgREVGQVVMVF9QQVNTX0ZSQUcgPSBgXHJcbnZhcnlpbmcgdmVjMiBmVVY7XHJcbnZvaWQgbWFpbigpIHtcclxuICAgIHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQoIGlTY2VuZVRleHR1cmUsIGZVViApO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4ZWw7XHJcbn1cclxuYDtcclxuXHJcblxyXG5jb25zdCBUSFJFRV9QQUNLSU5HID0gXCJ2ZWMzIHBhY2tOb3JtYWxUb1JHQiggY29uc3QgaW4gdmVjMyBub3JtYWwgKSB7cmV0dXJuIG5vcm1hbGl6ZSggbm9ybWFsICkgKiAwLjUgKyAwLjU7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5wYWNrUkdCVG9Ob3JtYWwoIGNvbnN0IGluIHZlYzMgcmdiICkge1xcclxcblxcdHJldHVybiAyLjAgKiByZ2IueHl6IC0gMS4wO1xcclxcbn1cXHJcXG5cXHJcXG5jb25zdCBmbG9hdCBQYWNrVXBzY2FsZSA9IDI1Ni4gLyAyNTUuOyAvLyBmcmFjdGlvbiAtPiAwLi4xIChpbmNsdWRpbmcgMSlcXHJcXG5jb25zdCBmbG9hdCBVbnBhY2tEb3duc2NhbGUgPSAyNTUuIC8gMjU2LjsgLy8gMC4uMSAtPiBmcmFjdGlvbiAoZXhjbHVkaW5nIDEpXFxyXFxuXFxyXFxuY29uc3QgdmVjMyBQYWNrRmFjdG9ycyA9IHZlYzMoIDI1Ni4gKiAyNTYuICogMjU2LiwgMjU2LiAqIDI1Ni4sICAyNTYuICk7XFxyXFxuY29uc3QgdmVjNCBVbnBhY2tGYWN0b3JzID0gVW5wYWNrRG93bnNjYWxlIC8gdmVjNCggUGFja0ZhY3RvcnMsIDEuICk7XFxyXFxuXFxyXFxuY29uc3QgZmxvYXQgU2hpZnRSaWdodDggPSAxLiAvIDI1Ni47XFxyXFxuXFxyXFxudmVjNCBwYWNrRGVwdGhUb1JHQkEoIGNvbnN0IGluIGZsb2F0IHYgKSB7XFxyXFxuXFx0dmVjNCByID0gdmVjNCggZnJhY3QoIHYgKiBQYWNrRmFjdG9ycyApLCB2ICk7XFxyXFxuXFx0ci55encgLT0gci54eXogKiBTaGlmdFJpZ2h0ODsgLy8gdGlkeSBvdmVyZmxvd1xcclxcblxcdHJldHVybiByICogUGFja1Vwc2NhbGU7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHVucGFja1JHQkFUb0RlcHRoKCBjb25zdCBpbiB2ZWM0IHYgKSB7XFxyXFxuXFx0cmV0dXJuIGRvdCggdiwgVW5wYWNrRmFjdG9ycyApO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBOT1RFOiB2aWV3Wi9leWVaIGlzIDwgMCB3aGVuIGluIGZyb250IG9mIHRoZSBjYW1lcmEgcGVyIE9wZW5HTCBjb252ZW50aW9uc1xcclxcblxcclxcbmZsb2F0IHZpZXdaVG9PcnRob2dyYXBoaWNEZXB0aCggY29uc3QgaW4gZmxvYXQgdmlld1osIGNvbnN0IGluIGZsb2F0IG5lYXIsIGNvbnN0IGluIGZsb2F0IGZhciApIHtcXHJcXG5cXHRyZXR1cm4gKCB2aWV3WiArIG5lYXIgKSAvICggbmVhciAtIGZhciApO1xcclxcbn1cXHJcXG5mbG9hdCBvcnRob2dyYXBoaWNEZXB0aFRvVmlld1ooIGNvbnN0IGluIGZsb2F0IGxpbmVhckNsaXBaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxyXFxuXFx0cmV0dXJuIGxpbmVhckNsaXBaICogKCBuZWFyIC0gZmFyICkgLSBuZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCB2aWV3WlRvUGVyc3BlY3RpdmVEZXB0aCggY29uc3QgaW4gZmxvYXQgdmlld1osIGNvbnN0IGluIGZsb2F0IG5lYXIsIGNvbnN0IGluIGZsb2F0IGZhciApIHtcXHJcXG5cXHRyZXR1cm4gKCggbmVhciArIHZpZXdaICkgKiBmYXIgKSAvICgoIGZhciAtIG5lYXIgKSAqIHZpZXdaICk7XFxyXFxufVxcclxcbmZsb2F0IHBlcnNwZWN0aXZlRGVwdGhUb1ZpZXdaKCBjb25zdCBpbiBmbG9hdCBpbnZDbGlwWiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcclxcblxcdHJldHVybiAoIG5lYXIgKiBmYXIgKSAvICggKCBmYXIgLSBuZWFyICkgKiBpbnZDbGlwWiAtIGZhciApO1xcclxcbn1cXHJcXG5cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRocmVlQ2FudmFzIHtcclxuXHJcblxyXG4gICAgZ2V0SW5wdXRIZWFkZXIoKSB7XHJcbiAgICAgICAgdmFyIGhlYWRlciA9ICcvL2hlYWRlci1iZWdpblxcclxcbic7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9ICd1bmlmb3JtIGZsb2F0IGlUaW1lO1xcclxcbnVuaWZvcm0gdmVjMiBpUmVzb2x1dGlvbjtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCBpRGVwdGhUZXh0dXJlO1xcclxcbnVuaWZvcm0gc2FtcGxlcjJEIGlTY2VuZVRleHR1cmU7XFxyXFxudW5pZm9ybSBmbG9hdCBpQ2FtZXJhTmVhcjtcXHJcXG51bmlmb3JtIGZsb2F0IGlDYW1lcmFGYXI7XFxyXFxuJztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHBhcmFtcyArPSAndW5pZm9ybSBzYW1wbGVyMkQgaVRleHR1cmUnICsgaSArICc7XFxyXFxuJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgcGFyYW1zICs9ICd1bmlmb3JtIHNhbXBsZXIyRCBpUGFzcycgKyBpICsgJztcXHJcXG4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93U2NlbmUgJiYgdGhpcy5kYXRhLnVzZUxpZ2h0KXtcclxuICAgICAgICAgICAgcGFyYW1zICs9ICd1bmlmb3JtIHZlYzMgaUxpZ2h0RGlyZWN0aW9uO1xcclxcbic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwYXJhbXMgKz0gJ3VuaWZvcm0gbWF0NCBpV29ybGQyT2JqZWN0TWF0cml4O1xcclxcbic7XHJcblxyXG4gICAgICAgIHZhciBlbmQgPSAnLy9oZWFkZXItZW5kXFxyXFxuJztcclxuXHJcbiAgICAgICAgdmFyIHJldCA9IGhlYWRlciArIHBhcmFtcyArIGVuZDtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXQpO1xyXG4gICAgICAgIHJldHVybiByZXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgRU1QVFlfVkVSVEVYX1NIQURFUigpIHtcclxuICAgICAgICByZXR1cm4gRU1QVFlfVkVSVEVYX1NIQURFUjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBFTVBUWV9GUkFHX1NIQURFUigpIHtcclxuICAgICAgICByZXR1cm4gRU1QVFlfRlJBR19TSEFERVI7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBWRVJURVhfSEVBREVSX1RIUkVFKCkge1xyXG4gICAgICAgIHJldHVybiBWRVJURVhfSEVBREVSX1RIUkVFO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0IEZSQUdfSEVBREVSX1RIUkVFKCkge1xyXG4gICAgICAgIHJldHVybiBGUkFHX0hFQURFUl9USFJFRTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFRIUkVFX1BBQ0tJTkcoKSB7XHJcbiAgICAgICAgcmV0dXJuIFRIUkVFX1BBQ0tJTkc7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldElucHV0VW5pZm9ybXMoKXtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dF91bmlmb3JtcyA9PSBudWxsIHx8IHRoaXMuaW5wdXRfdW5pZm9ybXMgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dF91bmlmb3JtcyA9IHtcclxuICAgICAgICAgICAgICAgIGlUaW1lOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlSZXNvbHV0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IyKClcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpU2NlbmVUZXh0dXJlOntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlEZXB0aFRleHR1cmU6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaUNhbWVyYU5lYXI6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOjAuMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlDYW1lcmFGYXI6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOjAuMFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlMaWdodERpcmVjdGlvbjp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBUSFJFRS5WZWN0b3IzKDAsMCwwKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlXb3JsZDJPYmplY3RNYXRyaXg6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuTWF0cml4NCgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9ICdpVGV4dHVyZScgKyBpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0X3VuaWZvcm1zW3Byb3BlcnR5XSA9IHt2YWx1ZTpudWxsfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9ICdpUGFzcycgKyBpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0X3VuaWZvcm1zW3Byb3BlcnR5XSA9IHt2YWx1ZTpudWxsfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0X3VuaWZvcm1zO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3RvZG86IHVzZSByZWdleHBcclxuICAgIHN0YXRpYyByZW1vdmVTaGFkZXJIZWFkZXIoc2hhZGVyKXtcclxuICAgICAgICAvL3ZhciByZWdleCA9IC9eXFwvXFwvaGVhZGVyLWJlZ2luLipcXC9cXC9oZWFkZXItZW5kL2dtO1xyXG4gICAgICAgIC8vdmFyIHJlZ2V4ID0gL15oZWFkZXItYmVnaW4oLiopL2c7XHJcbiAgICAgICAgdmFyIGJlZ2luID0gc2hhZGVyLmluZGV4T2YoXCIvL2hlYWRlci1iZWdpblwiKTtcclxuICAgICAgICB2YXIgZW5kID0gc2hhZGVyLmluZGV4T2YoXCIvL2hlYWRlci1lbmRcIik7XHJcbiAgICAgICAgdmFyIHN1YnN0ciA9IHNoYWRlci5zdWJzdHIoYmVnaW4sIGVuZCAtIGJlZ2luKzEzKTtcclxuXHRcdHNoYWRlciA9IHNoYWRlci5yZXBsYWNlKHN1YnN0cixcIlwiKTtcclxuXHRcdGlmIChzaGFkZXIuc3RhcnRzV2l0aChcIlxcblwiKSl7XHJcblx0XHRcdHNoYWRlciA9IHNoYWRlci5zdWJzdHIoMSxzaGFkZXIubGVuZ3RoIC0gMSk7XHJcblx0XHR9XHJcblx0XHRpZiAoc2hhZGVyLnN0YXJ0c1dpdGgoXCJcXG5cIikpe1xyXG5cdFx0XHRzaGFkZXIgPSBzaGFkZXIuc3Vic3RyKDEsc2hhZGVyLmxlbmd0aCAtIDEpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHNoYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICBzdWJzY3JpYmVNaXhpbih0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllciA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXJJbml0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbXBsZXRlZENhbGxiYWNrID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ29udHJvbHMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHtcclxuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxyXG5cdFx0XHRjYW52YXM6IHRoaXMuY2FudmFzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNoYWRvd01hcC5lbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgdGhpcy5jYW52YXMuY2xpZW50V2lkdGggLyB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQsIDAuMSwgMTAwMCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCAoIDAsIDAsIDAgKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW1pdEZyYW1lID0gLTE7XHJcbiAgICAgICAgdGhpcy51c2VDb250cm9sID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy9zZXR1cERlcHRoUmVuZGVyZXJcclxuICAgICAgICB0aGlzLnNjZW5lVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCwgdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkFGb3JtYXQ7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVUYXJnZXQuc3RlbmNpbEJ1ZmZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVUYXJnZXQuZGVwdGhCdWZmZXIgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCApO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JBRm9ybWF0O1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LnN0ZW5jaWxCdWZmZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoQnVmZmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZSA9IG5ldyBUSFJFRS5EZXB0aFRleHR1cmUoKTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZS50eXBlID0gVEhSRUUuVW5zaWduZWRTaG9ydFR5cGU7XHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDYW1lcmEoKXtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMjtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMjtcclxuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQgKCAwLCAwLCAwICk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy50YXJnZXQwID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLnBvc2l0aW9uMCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMuem9vbTAgPSB0aGlzLmNhbWVyYS56b29tO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdQYXNzKGluZGV4KXtcclxuICAgICAgICByZXR1cm4gbmV3IFJlbmRlclBhc3ModGhpcyx0aGlzLnJlbmRlcmVyLDEsdHJ1ZSxERUZBVUxUX1BBU1NfRlJBRyxERUZBVUxUX1BBU1NfVkVSVEVYLGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKXtcclxuXHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS50b0pTT04oKSxcclxuICAgICAgICAgICAgcGxheWVyOiB0aGlzLnBsYXllci50b0pTT04oKSxcclxuICAgICAgICAgICAgY2FtZXJhUG9zOiB0aGlzLmNhbWVyYS5wb3NpdGlvbixcclxuICAgICAgICAgICAgY2FtZXJhUm90OiB0aGlzLmNhbWVyYS5yb3RhdGlvbi50b1ZlY3RvcjMoKSxcclxuICAgICAgICAgICAgY2FtZXJhQ29udHJvbGxlcjogdGhpcy5jb250cm9scy50b0pTT04oKSxcclxuXHRcdH07XHRcdFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVEYXRhKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T2JqZWN0KHRoaXMuZGF0YS5vYmplY3RUeXBlKTtcclxuICAgICAgICB0aGlzLnBsYXllci5jdXJNYXRlcmlhbCgpLmJsZW5kaW5nID0gdGhpcy5kYXRhLmJsZW5kaW5nO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkuc2lkZSA9IHRoaXMuZGF0YS5zaWRlO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkuZmxhdFNoYWRpbmcgPSB0aGlzLmRhdGEuZmxhdFNoYWRpbmc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS50cmFuc3BhcmVudCA9IHRoaXMuZGF0YS50cmFuc3BhcmVudDtcclxuICAgICAgICB0aGlzLnBsYXllci5jdXJNYXRlcmlhbCgpLndpcmVmcmFtZSA9IHRoaXMuZGF0YS53aXJlZnJhbWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5kZXB0aFdyaXRlID0gdGhpcy5kYXRhLmRlcHRoV3JpdGU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5kZXB0aFRlc3QgPSB0aGlzLmRhdGEuZGVwdGhUZXN0O1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1cnJlbnRPYmooKS5zY2FsZS5zZXQodGhpcy5kYXRhLm9ialNjYWxlLngsIHRoaXMuZGF0YS5vYmpTY2FsZS55LCB0aGlzLmRhdGEub2JqU2NhbGUueik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudE9iaigpLnBvc2l0aW9uLnNldCggdGhpcy5kYXRhLm9ialBvcy54LCB0aGlzLmRhdGEub2JqUG9zLnksIHRoaXMuZGF0YS5vYmpQb3MueiApO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1cnJlbnRPYmooKS5yb3RhdGlvbi5zZXQoIHRoaXMuZGF0YS5vYmpSb3QueCwgdGhpcy5kYXRhLm9ialJvdC55LCB0aGlzLmRhdGEub2JqUm90LnogKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkKHBhdGgsIGNvbXBsZXRlQ2FsbGJhY2spe1xyXG4gICAgICAgIGxldCBzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgdmFyIGxvYWRlciA9IG5ldyBUSFJFRS5GaWxlTG9hZGVyKCk7XHJcbiAgICAgICAgbG9hZGVyLmxvYWQoIHBhdGgsIGZ1bmN0aW9uICggdGV4dCApIHtcclxuICAgICAgICAgICAgdmFyIGRhdGFKU09OID0gSlNPTi5wYXJzZSh0ZXh0KTtcclxuICAgICAgICAgICAgc2NvcGUubG9hZEZyb21KU09OKGRhdGFKU09OLnRocmVlQ2FudmFzLHNjb3BlLmNvbXBsZXRlZENhbGxiYWNrKTtcclxuICAgICAgICB9ICk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZEZyb21KU09OKGpzb24sIGNvbXBsZXRlQ2FsbGJhY2spe1xyXG5cclxuICAgICAgICBpZiAodGhpcy51c2VDb250cm9sKXtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBPcmJpdENvbnRyb2xzKHRoaXMuY2FtZXJhLCB0aGlzLmNhbnZhcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlS2V5cyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFREYXRhKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5sb2FkRnJvbUpTT04oanNvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmxvYWQoanNvbi5wbGF5ZXIsdGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVySW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucGFzc0RhdGFzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHBkYXRhID0gdGhpcy5kYXRhLnBhc3NEYXRhc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5wdXNoKG5ldyBSZW5kZXJQYXNzKHRoaXMsdGhpcy5yZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgLHBkYXRhLmRvd25SZXMscGRhdGEucmVuZGVyVG9TY3JlZW5cclxuICAgICAgICAgICAgICAgICxUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIocGRhdGEuZnJhZylcclxuICAgICAgICAgICAgICAgICxUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIocGRhdGEudmVydGV4KSxpLHBkYXRhLnBhc3NOYW1lKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KGpzb24uY2FtZXJhUG9zLngsanNvbi5jYW1lcmFQb3MueSxqc29uLmNhbWVyYVBvcy56KTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi5zZXQoanNvbi5jYW1lcmFSb3QueCxqc29uLmNhbWVyYVJvdC55LGpzb24uY2FtZXJhUm90LnopO1xyXG4gICAgICAgIGlmICh0aGlzLnVzZUNvbnRyb2wpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzLmZyb21KU09OKGpzb24uY2FtZXJhQ29udHJvbGxlcik7XHJcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucmVzZXQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcoY29tcGxldGVDYWxsYmFjayl7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnVzZUNvbnRyb2wpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMuY2FudmFzKTtcclxuICAgICAgICAgICAgdGhpcy5jb250cm9scy5lbmFibGVLZXlzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVySW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLm5ld1NjZW5lKCk7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFREYXRhKHRoaXMpO1xyXG5cclxuICAgICAgICAvLyAvL2JhY2tncm91bmRcclxuICAgICAgICAvLyB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLnB1c2gobmV3IFJlbmRlclBhc3ModGhpcyx0aGlzLnJlbmRlcmVyLDEsdHJ1ZSxWSUdORVRURV9GUkFHLERFRkFVTFRfUEFTU19WRVJURVgsMCkpO1xyXG4gICAgICAgIC8vIC8vY29tcG9zZVxyXG4gICAgICAgIC8vIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMucHVzaChuZXcgUmVuZGVyUGFzcyh0aGlzLHRoaXMucmVuZGVyZXIsMSx0cnVlLENPTVBPU0VfRlJBRyxERUZBVUxUX1BBU1NfVkVSVEVYLDEpKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1swXS5wYXNzTmFtZSA9ICdCYWNrZ3JvdW5kJztcclxuICAgICAgICAvLyB0aGlzLmRhdGEucmVuZGVyUGFzc2VzWzFdLnBhc3NOYW1lID0gJ0NvbXBvc2UnO1xyXG4gICAgICAgIC8vIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbMF0ucmVuZGVyVG9TY3JlZW4gPSBmYWxzZTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5KCkge1xyXG5cdFx0bGV0IHNjb3BlID0gdGhpcztcclxuXHRcdHRoaXMucHJldlRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHRcdGZ1bmN0aW9uIFJlbmRlckxvb3AoKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAoc2NvcGUucmVuZGVyZXJJbml0ZWQgJiYgc2NvcGUubGltaXRGcmFtZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmZyYW1lICUgc2NvcGUubGltaXRGcmFtZSAhPSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUudXNlQ29udHJvbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2xzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXJMb29wKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5mcmFtZSsrO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNjb3BlLmluaXRlZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zaG91bGQgbm90IHJlc2V0IHVuaWZvcm1zIGluIGV2ZXJ5IGZyYW1lLlxyXG4gICAgICAgICAgICAgICAgLy9zY29wZS5yZWZyZXNoVW5pZm9ybXMoKTsgXHJcblxyXG4gICAgICAgICAgICAgICAgc2NvcGUucGxheWVyLnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbmRlciBkZXB0aCBidWZmZXJcclxuICAgICAgICAgICAgICAgIGlmIChzY29wZS5wbGF5ZXIuZW52U2NlbmUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuZW52U2NlbmUsIHNjb3BlLmNhbWVyYSwgc2NvcGUuZGVwdGhUYXJnZXQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJlbmRlcmVyLnJlbmRlciggc2NvcGUucGxheWVyLnNjZW5lLCBzY29wZS5jYW1lcmEsIHNjb3BlLmRlcHRoVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSwgc2NvcGUuZGVwdGhUYXJnZXQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYXNzaWduIGRlcHRoXHJcbiAgICAgICAgICAgICAgICBzY29wZS51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICAgICAgLy9yZW5kZXIgdGhlIG1haW4gc2NlbmUuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5wbGF5ZXIuZW52U2NlbmUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnJlbmRlcmVyLnJlbmRlciggc2NvcGUucGxheWVyLmVudlNjZW5lLCBzY29wZS5jYW1lcmEsbnVsbCx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSxudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSxudWxsLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLnBsYXllci5lbnZTY2VuZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuZW52U2NlbmUsIHNjb3BlLmNhbWVyYSwgc2NvcGUuc2NlbmVUYXJnZXQsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnJlbmRlcmVyLnJlbmRlciggc2NvcGUucGxheWVyLnNjZW5lLCBzY29wZS5jYW1lcmEsIHNjb3BlLnNjZW5lVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSwgc2NvcGUuc2NlbmVUYXJnZXQsdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2NvcGUuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlTY2VuZVRleHR1cmUudmFsdWUgPSBzY29wZS5zY2VuZVRhcmdldC50ZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9ICdpUGFzcycgKyAoaSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUgPSBzY29wZS5kYXRhLnJlbmRlclBhc3Nlc1tpIC0gMV0ucmVuZGVyVGFyZ2V0LnRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEucmVuZGVyUGFzc2VzW2ldLnJlbmRlcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHNjb3BlLmZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZnJhbWUgPiAxICYmICFzY29wZS5yZW5kZXJlckluaXRlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvbXBsZXRlZENhbGxiYWNrICE9IG51bGwgJiYgc2NvcGUuY29tcGxldGVkQ2FsbGJhY2sgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUuY29tcGxldGVkQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy9zY29wZS5yZWZyZXNoVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzY29wZS5yZW5kZXJlckluaXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmRhdGEuYW5pbWF0ZVNjYWxlKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY3VyVGltZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMC4wO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmYWN0b3IgPSBNYXRoLnNpbihjdXJUaW1lICogMS4wKSowLjUgKyAwLjY7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucGxheWVyLmN1cnJlbnRPYmooKS5zY2FsZS5zZXQoc2NvcGUuZGF0YS5vYmpTY2FsZS54ICogZmFjdG9yLHNjb3BlLmRhdGEub2JqU2NhbGUueSAqIGZhY3RvcixzY29wZS5kYXRhLm9ialNjYWxlLnogKiBmYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoc2NvcGUudXNlQ29udHJvbCl7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9scy51cGRhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0XHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKFJlbmRlckxvb3ApO1xyXG4gICAgICAgIH1cclxuXHRcdFJlbmRlckxvb3AoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuXHJcblx0Y3JlYXRlR0xTaGFkZXIoY2FudmFzLCBzb3VyY2UsIHR5cGUpe1xyXG4gICAgICAgIGxldCBnbCA9IHRoaXMuZ2V0Q29udGV4dCgpO1xyXG4gICAgICAgIGxldCBzaGFkZXIgPSBnbC5jcmVhdGVTaGFkZXIodHlwZSk7XHJcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcclxuICAgICAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgICAgbGV0IGNvbXBpbGVkID0gZ2wuZ2V0U2hhZGVyUGFyYW1ldGVyKHNoYWRlciwgZ2wuQ09NUElMRV9TVEFUVVMpO1xyXG4gICAgICAgIGlmICghY29tcGlsZWQpIHtcclxuICAgICAgICAgICAgbGV0IGxhc3RFcnJvciA9IGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKTtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignKioqIEVycm9yIGNvbXBpbGluZyBzaGFkZXIgJyArIHNoYWRlciArICc6JyArIGxhc3RFcnJvcik7XHJcbiAgICAgICAgICAgIGxldCBoZWFkZXJMaW5lID0gMDtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlID09IHRoaXMuZ2V0Q29udGV4dCgpLlZFUlRFWF9TSEFERVIpe1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLnRyaWdnZXIoJ3ZlcnRleF9lcnJvcicsIHsgc2hhZGVyOiBzaGFkZXIsIHNvdXJjZTogc291cmNlLCB0eXBlOiB0eXBlLCBlcnJvcjogbGFzdEVycm9yLCBoZWFkZXJMaW5lOiB0aGlzLnZlcnRleEhlYWRlckxpbmUoKSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgY2FudmFzLnRyaWdnZXIoJ2ZyYWdfZXJyb3InLCB7IHNoYWRlcjogc2hhZGVyLCBzb3VyY2U6IHNvdXJjZSwgdHlwZTogdHlwZSwgZXJyb3I6IGxhc3RFcnJvciwgaGVhZGVyTGluZTogdGhpcy5mcmFnSGVhZGVyTGluZSgpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcihzaGFkZXIpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHRnZXRDb250ZXh0KCl7XHJcblx0XHRyZXR1cm4gdGhpcy5yZW5kZXJlci5nZXRDb250ZXh0KCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlc2l6ZVVzZUNhbnZhcygpe1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmFzcGVjdCA9IHRoaXMuY2FudmFzLmNsaWVudFdpZHRoIC8gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTaXplKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoLCB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQpO1xyXG4gICAgICAgIHZhciBkcHIgPSB0aGlzLnJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKTtcclxuXHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0uc2V0U2l6ZSh0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCAqIGRwciwgdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICogZHByKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcblx0XHR0aGlzLnNjZW5lVGFyZ2V0LnNldFNpemUoIHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogZHByLCB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiBkcHIgKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNpemUodyxoKXtcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKydweCc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaCArJ3B4JztcclxuXHJcbiAgICAgICAgdGhpcy5yZXNpemVVc2VDYW52YXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJWZXJ0ZXhTaGFkZXIoKXtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmVkaXRNb2RlID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VyVmVydGV4U2hhZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIodGhpcy5kYXRhLnJlbmRlclBhc3Nlc1t0aGlzLmRhdGEuZWRpdE1vZGUgLSAxXS5tYXRlcmlhbC52ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjdXJGcmFnU2FoZGVyKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5lZGl0TW9kZSA9PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheWVyLmN1ckZyYWdTYWhkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFRocmVlQ2FudmFzLnJlbW92ZVNoYWRlckhlYWRlcih0aGlzLmRhdGEucmVuZGVyUGFzc2VzW3RoaXMuZGF0YS5lZGl0TW9kZSAtIDFdLm1hdGVyaWFsLmZyYWdtZW50U2hhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmVydGV4SGVhZGVyTGluZSgpe1xyXG4gICAgICAgIHJldHVybiAodGhpcy5nZXRJbnB1dEhlYWRlcigpICsgVGhyZWVDYW52YXMuVkVSVEVYX0hFQURFUl9USFJFRSkuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLykubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGZyYWdIZWFkZXJMaW5lKCl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldElucHV0SGVhZGVyKCkgKyBUaHJlZUNhbnZhcy5GUkFHX0hFQURFUl9USFJFRSkuc3BsaXQoL1xcclxcbnxcXHJ8XFxuLykubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZWZyZXNoVW5pZm9ybXMoKXtcclxuICAgICAgICB0aGlzLnBsYXllci5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zID0gdGhpcy5nZXRJbnB1dFVuaWZvcm1zKCk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5yZWZyZXNoVW5pZm9ybXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUmVuZGVyUGFzc1VuaWZvcm1zKCl7XHJcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pVGltZS52YWx1ZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMC4wO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnggPSBzY29wZS5jYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueSA9IHNjb3BlLmNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaUNhbWVyYU5lYXIudmFsdWUgPSBzY29wZS5jYW1lcmEubmVhcjtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pQ2FtZXJhRmFyLnZhbHVlID0gc2NvcGUuY2FtZXJhLmZhcjtcclxuICAgICAgICAgICAgaWYgKHNjb3BlLnBsYXllci5kaXJMaWdodCAhPSBudWxsICYmIHNjb3BlLnBsYXllci5kaXJMaWdodC5wb3NpdGlvbi54IDwgOTk5OSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlMaWdodERpcmVjdGlvbi52YWx1ZSA9IC1zY29wZS5wbGF5ZXIuZGlyTGlnaHQucG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9zZXQgaVNjZW5lVGV4dHVyZSBsYXRlci5cclxuICAgICAgICAgICAgLy90aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlTY2VuZVRleHR1cmUudmFsdWUgPSBzY29wZS5zY2VuZVRhcmdldDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaURlcHRoVGV4dHVyZS52YWx1ZSA9IHNjb3BlLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgc2NvcGUuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGsrKyl7XHJcbiAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSAnaVRleHR1cmUnICsgaztcclxuICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zW3Byb3BlcnR5XS52YWx1ZSA9IHNjb3BlLmRhdGEudGV4dHVyZXNba107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVW5pZm9ybXMoKXtcclxuICAgICAgICB0aGlzLnBsYXllci51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyUGFzc1VuaWZvcm1zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ3VyTWF0ZXJpYWwoZnJhZ1N0cmluZywgdmVydFN0cmluZyl7XHJcbiAgICAgICAgaWYodGhpcy5kYXRhLmVkaXRNb2RlID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci51cGRhdGVDdXJNYXRlcmlhbCh0aGlzLmdldElucHV0SGVhZGVyKCkgKyBmcmFnU3RyaW5nLCB0aGlzLmdldElucHV0SGVhZGVyKCkgKyB2ZXJ0U3RyaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5kYXRhLmVkaXRNb2RlIC0gMSkgPT0gaSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS51cGRhdGVNYXRlcmlhbCh0aGlzLmdldElucHV0SGVhZGVyKCkgKyB2ZXJ0U3RyaW5nLHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIGZyYWdTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrTG9hZEVkaXRvclNoYWRlcihmcmFnU3RyaW5nLCB2ZXJ0U3RyaW5nKXtcclxuICAgICAgICBsZXQgdmVydGV4U2hhZGVyID0gbnVsbDtcclxuICAgICAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xyXG5cclxuICAgICAgICB2ZXJ0ZXhTaGFkZXIgPSB0aGlzLmNyZWF0ZUdMU2hhZGVyKHRoaXMsIFRocmVlQ2FudmFzLlZFUlRFWF9IRUFERVJfVEhSRUUgK3RoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIHZlcnRTdHJpbmcsIHRoaXMuZ2V0Q29udGV4dCgpLlZFUlRFWF9TSEFERVIpO1xyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVHTFNoYWRlcih0aGlzLCBUaHJlZUNhbnZhcy5GUkFHX0hFQURFUl9USFJFRSArIHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIGZyYWdTdHJpbmcsIHRoaXMuZ2V0Q29udGV4dCgpLkZSQUdNRU5UX1NIQURFUik7XHJcblxyXG4gICAgICAgIGlmICghZnJhZ21lbnRTaGFkZXIgfHwgIXZlcnRleFNoYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ3VyTWF0ZXJpYWwoZnJhZ1N0cmluZywgdmVydFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZ2wgPSB0aGlzLmdldENvbnRleHQoKTtcclxuICAgICAgICBpZiAoZnJhZ21lbnRTaGFkZXIpe1xyXG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmVydGV4U2hhZGVyKXtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbS9cbiAqL1xuLyoqXG4gKiBtb2RpZmllZCBieSBzaGFsbHdheVxuICogVGhpcyBjbGFzcyB3YXMgZGVzaWduZWQgdG8gbG9hZCBsb2NhbCBmaWxlcyBpbiB0aGUgdGhyZWVqcyBFZGl0b3IsIGluIG9yZGVyIHRvIGxvYWQgdXJsIGZpbGVzLCBJIG1hZGUgc29tZSBmaXhlcy4gXG4gKiBNYXkgbm90IGNvbXBhdGlibGUgd2l0aCBmdXJ0aGVyIHRocmVlanMgc2NlbmUgZmlsZSBmb3JtYXQuXG4gKiBmaXhlZDpcbiAqIDEsIGFkZGVkIG9uQWRkT2JqLCBvbkFkZFNjZW5lIGNhbGxiYWNrcy5cbiAqIDIsIGV4cG9ydCBoYW5kbGVKU09OIGZ1bmN0aW9uIHRvIHBhcnNlIGpzb24gZGF0YXMgZGlyZWN0bHkuXG4gKi9cblxuLy9pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBMb2FkZXIoIG9uQWRkT2JqLCBvbkFkZFNjZW5lICkge1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cdC8vdmFyIHNpZ25hbHMgPSBlZGl0b3Iuc2lnbmFscztcblxuXHR0aGlzLnRleHR1cmVQYXRoID0gJyc7XG5cblx0dGhpcy5sb2FkRmlsZSA9IGZ1bmN0aW9uICggZmlsZSApIHtcblxuXHRcdHZhciBmaWxlbmFtZSA9IGZpbGUubmFtZTtcblx0XHR2YXIgZXh0ZW5zaW9uID0gZmlsZW5hbWUuc3BsaXQoICcuJyApLnBvcCgpLnRvTG93ZXJDYXNlKCk7XG5cblx0XHR2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcblx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ3Byb2dyZXNzJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0dmFyIHNpemUgPSAnKCcgKyBNYXRoLmZsb29yKCBldmVudC50b3RhbCAvIDEwMDAgKSArICcgS0IpJztcblx0XHRcdHZhciBwcm9ncmVzcyA9IE1hdGguZmxvb3IoICggZXZlbnQubG9hZGVkIC8gZXZlbnQudG90YWwgKSAqIDEwMCApICsgJyUnO1xuXHRcdFx0Y29uc29sZS5sb2coICdMb2FkaW5nJywgZmlsZW5hbWUsIHNpemUsIHByb2dyZXNzICk7XG5cblx0XHR9ICk7XG5cblx0XHRzd2l0Y2ggKCBleHRlbnNpb24gKSB7XG5cblx0XHRcdGNhc2UgJzNkcyc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuVERTTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIG9iamVjdCA9IGxvYWRlci5wYXJzZSggZXZlbnQudGFyZ2V0LnJlc3VsdCApO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG9iamVjdCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihvYmplY3QpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdhbWYnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkFNRkxvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBhbWZvYmplY3QgPSBsb2FkZXIucGFyc2UoIGV2ZW50LnRhcmdldC5yZXN1bHQgKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBhbWZvYmplY3QgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmooYW1mb2JqZWN0KTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYXdkJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5BV0RMb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgc2NlbmUgPSBsb2FkZXIucGFyc2UoIGV2ZW50LnRhcmdldC5yZXN1bHQgKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBTZXRTY2VuZUNvbW1hbmQoIHNjZW5lICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRTY2VuZSkgb25BZGRTY2VuZShzY2VuZSk7XG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdiYWJ5bG9uJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblx0XHRcdFx0XHR2YXIganNvbiA9IEpTT04ucGFyc2UoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkJhYnlsb25Mb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgc2NlbmUgPSBsb2FkZXIucGFyc2UoIGpzb24gKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBTZXRTY2VuZUNvbW1hbmQoIHNjZW5lICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRTY2VuZSkgb25BZGRTY2VuZShzY2VuZSk7XG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2JhYnlsb25tZXNoZGF0YSc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0XHRcdFx0dmFyIGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5CYWJ5bG9uTG9hZGVyKCk7XG5cblx0XHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBsb2FkZXIucGFyc2VHZW9tZXRyeSgganNvbiApO1xuXHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdjdG0nOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBVaW50OEFycmF5KCBldmVudC50YXJnZXQucmVzdWx0ICk7XG5cblx0XHRcdFx0XHR2YXIgc3RyZWFtID0gbmV3IENUTS5TdHJlYW0oIGRhdGEgKTtcblx0XHRcdFx0XHRzdHJlYW0ub2Zmc2V0ID0gMDtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuQ1RNTG9hZGVyKCk7XG5cdFx0XHRcdFx0bG9hZGVyLmNyZWF0ZU1vZGVsKCBuZXcgQ1RNLkZpbGUoIHN0cmVhbSApLCBmdW5jdGlvbiggZ2VvbWV0cnkgKSB7XG5cblx0XHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcImN0bVwiO1xuXHRcdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlRmlsZSA9IGZpbGUubmFtZTtcblxuXHRcdFx0XHRcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCk7XG5cblx0XHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblx0XHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2RhZSc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkNvbGxhZGFMb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgY29sbGFkYSA9IGxvYWRlci5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdGNvbGxhZGEuc2NlbmUubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIGNvbGxhZGEuc2NlbmUgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmooY29sbGFkYS5zY2VuZSk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnZmJ4JzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuRkJYTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIG9iamVjdCA9IGxvYWRlci5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoob2JqZWN0KTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnZ2xiJzpcblx0XHRcdGNhc2UgJ2dsdGYnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5HTFRGTG9hZGVyKCk7XG5cdFx0XHRcdFx0bG9hZGVyLnBhcnNlKCBjb250ZW50cywgJycsIGZ1bmN0aW9uICggcmVzdWx0ICkge1xuXG5cdFx0XHRcdFx0XHRyZXN1bHQuc2NlbmUubmFtZSA9IGZpbGVuYW1lO1xuXHRcdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIHJlc3VsdC5zY2VuZSApICk7XG5cdFx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKHJlc3VsdC5zY2VuZSk7XG5cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2pzJzpcblx0XHRcdGNhc2UgJ2pzb24nOlxuXG5cdFx0XHRjYXNlICczZ2VvJzpcblx0XHRcdGNhc2UgJzNtYXQnOlxuXHRcdFx0Y2FzZSAnM29iaic6XG5cdFx0XHRjYXNlICczc2NuJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdC8vIDIuMFxuXG5cdFx0XHRcdFx0aWYgKCBjb250ZW50cy5pbmRleE9mKCAncG9zdE1lc3NhZ2UnICkgIT09IC0gMSApIHtcblxuXHRcdFx0XHRcdFx0dmFyIGJsb2IgPSBuZXcgQmxvYiggWyBjb250ZW50cyBdLCB7IHR5cGU6ICd0ZXh0L2phdmFzY3JpcHQnIH0gKTtcblx0XHRcdFx0XHRcdHZhciB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKCBibG9iICk7XG5cblx0XHRcdFx0XHRcdHZhciB3b3JrZXIgPSBuZXcgV29ya2VyKCB1cmwgKTtcblxuXHRcdFx0XHRcdFx0d29ya2VyLm9ubWVzc2FnZSA9IGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHRcdFx0ZXZlbnQuZGF0YS5tZXRhZGF0YSA9IHsgdmVyc2lvbjogMiB9O1xuXHRcdFx0XHRcdFx0XHRoYW5kbGVKU09OKCBldmVudC5kYXRhLCBmaWxlLCBmaWxlbmFtZSApO1xuXG5cdFx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0XHR3b3JrZXIucG9zdE1lc3NhZ2UoIERhdGUubm93KCkgKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuO1xuXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gPj0gMy4wXG5cblx0XHRcdFx0XHR2YXIgZGF0YTtcblxuXHRcdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHRcdGRhdGEgPSBKU09OLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0fSBjYXRjaCAoIGVycm9yICkge1xuXG5cdFx0XHRcdFx0XHRhbGVydCggZXJyb3IgKTtcblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGhhbmRsZUpTT04oIGRhdGEsIGZpbGUsIGZpbGVuYW1lICk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXG5cdFx0XHRjYXNlICdrbXonOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLktNWkxvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBjb2xsYWRhID0gbG9hZGVyLnBhcnNlKCBldmVudC50YXJnZXQucmVzdWx0ICk7XG5cblx0XHRcdFx0XHRjb2xsYWRhLnNjZW5lLm5hbWUgPSBmaWxlbmFtZTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBjb2xsYWRhLnNjZW5lICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKGNvbGxhZGEuc2NlbmUpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdtZDInOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLk1EMkxvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgge1xuXHRcdFx0XHRcdFx0bW9ycGhUYXJnZXRzOiB0cnVlLFxuXHRcdFx0XHRcdFx0bW9ycGhOb3JtYWxzOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0bWVzaC5taXhlciA9IG5ldyBUSFJFRS5BbmltYXRpb25NaXhlciggbWVzaCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ29iaic6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgb2JqZWN0ID0gbmV3IFRIUkVFLk9CSkxvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXHRcdFx0XHRcdG9iamVjdC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggb2JqZWN0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG9iamVjdCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAncGxheWNhbnZhcyc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0XHRcdFx0dmFyIGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5QbGF5Q2FudmFzTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIG9iamVjdCA9IGxvYWRlci5wYXJzZSgganNvbiApO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG9iamVjdCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihvYmplY3QpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3BseSc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuUExZTG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlVHlwZSA9IFwicGx5XCI7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlRmlsZSA9IGZpbGUubmFtZTtcblxuXHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnc3RsJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5TVExMb2FkZXIoKS5wYXJzZSggY29udGVudHMgKTtcblx0XHRcdFx0XHRnZW9tZXRyeS5zb3VyY2VUeXBlID0gXCJzdGxcIjtcblx0XHRcdFx0XHRnZW9tZXRyeS5zb3VyY2VGaWxlID0gZmlsZS5uYW1lO1xuXG5cdFx0XHRcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCk7XG5cblx0XHRcdFx0XHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0XHRtZXNoLm5hbWUgPSBmaWxlbmFtZTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cblx0XHRcdFx0aWYgKCByZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRyZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKCBmaWxlICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Lypcblx0XHRcdGNhc2UgJ3V0ZjgnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlVURjhMb2FkZXIoKS5wYXJzZSggY29udGVudHMgKTtcblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaExhbWJlcnRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0XHRlZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdCovXG5cblx0XHRcdGNhc2UgJ3Z0ayc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuVlRLTG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlVHlwZSA9IFwidnRrXCI7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlRmlsZSA9IGZpbGUubmFtZTtcblxuXHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICd3cmwnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIHJlc3VsdCA9IG5ldyBUSFJFRS5WUk1MTG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgU2V0U2NlbmVDb21tYW5kKCByZXN1bHQgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZFNjZW5lKSBvbkFkZFNjZW5lKHNjZW5lKTtcblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnemlwJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciB6aXAgPSBuZXcgSlNaaXAoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHQvLyBCTE9DS1NcblxuXHRcdFx0XHRcdGlmICggemlwLmZpbGVzWyAnbW9kZWwub2JqJyBdICYmIHppcC5maWxlc1sgJ21hdGVyaWFscy5tdGwnIF0gKSB7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRlcmlhbHMgPSBuZXcgVEhSRUUuTVRMTG9hZGVyKCkucGFyc2UoIHppcC5maWxlKCAnbWF0ZXJpYWxzLm10bCcgKS5hc1RleHQoKSApO1xuXHRcdFx0XHRcdFx0dmFyIG9iamVjdCA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKS5zZXRNYXRlcmlhbHMoIG1hdGVyaWFscyApLnBhcnNlKCB6aXAuZmlsZSggJ21vZGVsLm9iaicgKS5hc1RleHQoKSApO1xuXHRcdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG9iamVjdCApICk7XG5cdFx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG9iamVjdCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNCaW5hcnlTdHJpbmcoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0ZGVmYXVsdDpcblxuXHRcdFx0XHRhbGVydCggJ1Vuc3VwcG9ydGVkIGZpbGUgZm9ybWF0ICgnICsgZXh0ZW5zaW9uICsgICcpLicgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9O1xuXG5cdHRoaXMuaGFuZGxlSlNPTiA9IGZ1bmN0aW9uICggZGF0YSwgZmlsZSwgZmlsZW5hbWUgKSB7XG5cblx0XHRpZiAoIGRhdGEubWV0YWRhdGEgPT09IHVuZGVmaW5lZCApIHsgLy8gMi4wXG5cblx0XHRcdGRhdGEubWV0YWRhdGEgPSB7IHR5cGU6ICdHZW9tZXRyeScgfTtcblxuXHRcdH1cblxuXHRcdGlmICggZGF0YS5tZXRhZGF0YS50eXBlID09PSB1bmRlZmluZWQgKSB7IC8vIDMuMFxuXG5cdFx0XHRkYXRhLm1ldGFkYXRhLnR5cGUgPSAnR2VvbWV0cnknO1xuXG5cdFx0fVxuXG5cdFx0aWYgKCBkYXRhLm1ldGFkYXRhLmZvcm1hdFZlcnNpb24gIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0ZGF0YS5tZXRhZGF0YS52ZXJzaW9uID0gZGF0YS5tZXRhZGF0YS5mb3JtYXRWZXJzaW9uO1xuXG5cdFx0fVxuXG5cdFx0c3dpdGNoICggZGF0YS5tZXRhZGF0YS50eXBlLnRvTG93ZXJDYXNlKCkgKSB7XG5cblx0XHRcdGNhc2UgJ2J1ZmZlcmdlb21ldHJ5JzpcblxuXHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5TG9hZGVyKCk7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBsb2FkZXIucGFyc2UoIGRhdGEgKTtcblxuXHRcdFx0XHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCByZXN1bHQgKTtcblxuXHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2dlb21ldHJ5JzpcblxuXHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcblx0XHRcdFx0bG9hZGVyLnNldFRleHR1cmVQYXRoKCBzY29wZS50ZXh0dXJlUGF0aCApO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBsb2FkZXIucGFyc2UoIGRhdGEgKTtcblxuXHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSByZXN1bHQuZ2VvbWV0cnk7XG5cdFx0XHRcdHZhciBtYXRlcmlhbDtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdC5tYXRlcmlhbHMgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRcdGlmICggcmVzdWx0Lm1hdGVyaWFscy5sZW5ndGggPiAxICkge1xuXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCA9IG5ldyBUSFJFRS5NdWx0aU1hdGVyaWFsKCByZXN1bHQubWF0ZXJpYWxzICk7XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRtYXRlcmlhbCA9IHJlc3VsdC5tYXRlcmlhbHNbIDAgXTtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Z2VvbWV0cnkuc291cmNlVHlwZSA9IFwiYXNjaWlcIjtcblx0XHRcdFx0aWYgKGZpbGUpe1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cdFx0XHRcdH1cblxuXG5cdFx0XHRcdHZhciBtZXNoO1xuXG5cdFx0XHRcdGlmICggZ2VvbWV0cnkuYW5pbWF0aW9uICYmIGdlb21ldHJ5LmFuaW1hdGlvbi5oaWVyYXJjaHkgKSB7XG5cblx0XHRcdFx0XHRtZXNoID0gbmV3IFRIUkVFLlNraW5uZWRNZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChmaWxlbmFtZSl7XG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnb2JqZWN0JzpcblxuXHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLk9iamVjdExvYWRlcigpO1xuXHRcdFx0XHRsb2FkZXIuc2V0VGV4dHVyZVBhdGgoIHNjb3BlLnRleHR1cmVQYXRoICk7XG5cblx0XHRcdFx0dmFyIHJlc3VsdCA9IGxvYWRlci5wYXJzZSggZGF0YSApO1xuXG5cdFx0XHRcdGlmICggcmVzdWx0IGluc3RhbmNlb2YgVEhSRUUuU2NlbmUgKSB7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgU2V0U2NlbmVDb21tYW5kKCByZXN1bHQgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZFNjZW5lKSBvbkFkZFNjZW5lKHJlc3VsdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggcmVzdWx0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKHJlc3VsdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYXBwJzpcblxuXHRcdFx0XHQvL2VkaXRvci5mcm9tSlNPTiggZGF0YSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxufTtcbiIsIi8qKlxyXG4gKiBAYXV0aG9yIHFpYW8gLyBodHRwczovL2dpdGh1Yi5jb20vcWlhb1xyXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXHJcbiAqIEBhdXRob3IgYWx0ZXJlZHEgLyBodHRwOi8vYWx0ZXJlZHF1YWxpYS5jb20vXHJcbiAqIEBhdXRob3IgV2VzdExhbmdsZXkgLyBodHRwOi8vZ2l0aHViLmNvbS9XZXN0TGFuZ2xleVxyXG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXHJcbiAqL1xyXG5cclxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXHJcbi8vIFVubGlrZSBUcmFja2JhbGxDb250cm9scywgaXQgbWFpbnRhaW5zIHRoZSBcInVwXCIgZGlyZWN0aW9uIG9iamVjdC51cCAoK1kgYnkgZGVmYXVsdCkuXHJcbi8vXHJcbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcclxuLy8gICAgWm9vbSAtIG1pZGRsZSBtb3VzZSwgb3IgbW91c2V3aGVlbCAvIHRvdWNoOiB0d28gZmluZ2VyIHNwcmVhZCBvciBzcXVpc2hcclxuLy8gICAgUGFuIC0gcmlnaHQgbW91c2UsIG9yIGFycm93IGtleXMgLyB0b3VjaDogdGhyZWUgZmluZ2VyIHN3aXBlXHJcblxyXG4vL2ltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBPcmJpdENvbnRyb2xzIChvYmplY3QsIGRvbUVsZW1lbnQpIHtcclxuXHJcblx0dGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcblxyXG5cdHRoaXMuZG9tRWxlbWVudCA9IChkb21FbGVtZW50ICE9PSB1bmRlZmluZWQpID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xyXG5cclxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcclxuXHR0aGlzLmVuYWJsZWQgPSB0cnVlO1xyXG5cclxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcclxuXHR0aGlzLnRhcmdldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXHJcblx0dGhpcy5taW5EaXN0YW5jZSA9IDA7XHJcblx0dGhpcy5tYXhEaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gem9vbSBpbiBhbmQgb3V0ICggT3J0aG9ncmFwaGljQ2FtZXJhIG9ubHkgKVxyXG5cdHRoaXMubWluWm9vbSA9IDA7XHJcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XHJcblxyXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCB2ZXJ0aWNhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxyXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxyXG5cdHRoaXMubWluUG9sYXJBbmdsZSA9IDA7IC8vIHJhZGlhbnNcclxuXHR0aGlzLm1heFBvbGFyQW5nbGUgPSBNYXRoLlBJOyAvLyByYWRpYW5zXHJcblxyXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBvcmJpdCBob3Jpem9udGFsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXHJcblx0Ly8gSWYgc2V0LCBtdXN0IGJlIGEgc3ViLWludGVydmFsIG9mIHRoZSBpbnRlcnZhbCBbIC0gTWF0aC5QSSwgTWF0aC5QSSBdLlxyXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLUluZmluaXR5OyAvLyByYWRpYW5zXHJcblx0dGhpcy5tYXhBemltdXRoQW5nbGUgPSBJbmZpbml0eTsgLy8gcmFkaWFuc1xyXG5cclxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcclxuXHQvLyBJZiBkYW1waW5nIGlzIGVuYWJsZWQsIHlvdSBtdXN0IGNhbGwgY29udHJvbHMudXBkYXRlKCkgaW4geW91ciBhbmltYXRpb24gbG9vcFxyXG5cdHRoaXMuZW5hYmxlRGFtcGluZyA9IGZhbHNlO1xyXG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XHJcblxyXG5cdC8vIFRoaXMgb3B0aW9uIGFjdHVhbGx5IGVuYWJsZXMgZG9sbHlpbmcgaW4gYW5kIG91dDsgbGVmdCBhcyBcInpvb21cIiBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXHJcblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xyXG5cdHRoaXMuZW5hYmxlWm9vbSA9IHRydWU7XHJcblx0dGhpcy56b29tU3BlZWQgPSAxLjA7XHJcblxyXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHJvdGF0aW5nXHJcblx0dGhpcy5lbmFibGVSb3RhdGUgPSB0cnVlO1xyXG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XHJcblxyXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHBhbm5pbmdcclxuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XHJcblx0dGhpcy5rZXlQYW5TcGVlZCA9IDcuMDtcdC8vIHBpeGVscyBtb3ZlZCBwZXIgYXJyb3cga2V5IHB1c2hcclxuXHJcblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcclxuXHQvLyBJZiBhdXRvLXJvdGF0ZSBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3BcclxuXHR0aGlzLmF1dG9Sb3RhdGUgPSBmYWxzZTtcclxuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcclxuXHJcblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdXNlIG9mIHRoZSBrZXlzXHJcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcclxuXHJcblx0Ly8gVGhlIGZvdXIgYXJyb3cga2V5c1xyXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XHJcblxyXG5cdC8vIE1vdXNlIGJ1dHRvbnNcclxuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xyXG5cclxuXHQvLyBmb3IgcmVzZXRcclxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xyXG5cdHRoaXMucG9zaXRpb24wID0gdGhpcy5vYmplY3QucG9zaXRpb24uY2xvbmUoKTtcclxuXHR0aGlzLnpvb20wID0gdGhpcy5vYmplY3Quem9vbTtcclxuXHJcblx0Ly9cclxuXHQvLyBwdWJsaWMgbWV0aG9kc1xyXG5cdC8vXHJcblxyXG5cdHRoaXMuZ2V0UG9sYXJBbmdsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRyZXR1cm4gc3BoZXJpY2FsLnBoaTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhpcy5nZXRBemltdXRoYWxBbmdsZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRyZXR1cm4gc3BoZXJpY2FsLnRoZXRhO1xyXG5cclxuXHR9O1xyXG5cclxuXHR0aGlzLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRzY29wZS50YXJnZXQwLmNvcHkoc2NvcGUudGFyZ2V0KTtcclxuXHRcdHNjb3BlLnBvc2l0aW9uMC5jb3B5KHNjb3BlLm9iamVjdC5wb3NpdGlvbik7XHJcblx0XHRzY29wZS56b29tMCA9IHNjb3BlLm9iamVjdC56b29tO1xyXG5cclxuXHR9O1xyXG5cclxuXHR0aGlzLnRvSlNPTiA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHJldHVybntcclxuXHRcdFx0dGFyZ2V0OiBzY29wZS50YXJnZXQsXHJcblx0XHRcdHBvc2l0aW9uOiBzY29wZS5wb3NpdGlvbixcclxuXHRcdFx0em9vbTogc2NvcGUuem9vbSxcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHR0aGlzLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcclxuXHRcdHNjb3BlLnRhcmdldDAgPSBqc29uLnRhcmdldDtcclxuXHRcdHNjb3BlLnBvc2l0aW9uMCA9IGpzb24ucG9zaXRpb24wO1xyXG5cdFx0c2NvcGUuem9vbTAgPSBqc29uLnpvb20wO1xyXG5cdH07XHJcblxyXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLnRhcmdldDAgIT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoc2NvcGUudGFyZ2V0MCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChzY29wZS5wb3NpdGlvbjAgIT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkoc2NvcGUucG9zaXRpb24wKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKHNjb3BlLm9iamVjdC56b29tMCAhPSB1bmRlZmluZWQpe1xyXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IHNjb3BlLnpvb20wO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XHJcblxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuXHR9O1xyXG5cclxuXHQvLyB0aGlzIG1ldGhvZCBpcyBleHBvc2VkLCBidXQgcGVyaGFwcyBpdCB3b3VsZCBiZSBiZXR0ZXIgaWYgd2UgY2FuIG1ha2UgaXQgcHJpdmF0ZS4uLlxyXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuXHRcdC8vIHNvIGNhbWVyYS51cCBpcyB0aGUgb3JiaXQgYXhpc1xyXG5cdFx0dmFyIHF1YXQgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhvYmplY3QudXAsIG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApKTtcclxuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XHJcblxyXG5cdFx0dmFyIGxhc3RQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xyXG5cclxuXHRcdHJldHVybiBmdW5jdGlvbiB1cGRhdGUoKSB7XHJcblxyXG5cdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XHJcblxyXG5cdFx0XHRvZmZzZXQuY29weShwb3NpdGlvbikuc3ViKHNjb3BlLnRhcmdldCk7XHJcblxyXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IHRvIFwieS1heGlzLWlzLXVwXCIgc3BhY2VcclxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbihxdWF0KTtcclxuXHJcblx0XHRcdC8vIGFuZ2xlIGZyb20gei1heGlzIGFyb3VuZCB5LWF4aXNcclxuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKG9mZnNldCk7XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUuYXV0b1JvdGF0ZSAmJiBzdGF0ZSA9PT0gU1RBVEUuTk9ORSkge1xyXG5cclxuXHRcdFx0XHRyb3RhdGVMZWZ0KGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkpO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhICs9IHNwaGVyaWNhbERlbHRhLnRoZXRhO1xyXG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcclxuXHJcblx0XHRcdC8vIHJlc3RyaWN0IHRoZXRhIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbihzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSkpO1xyXG5cclxuXHRcdFx0Ly8gcmVzdHJpY3QgcGhpIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkpKTtcclxuXHJcblx0XHRcdHNwaGVyaWNhbC5tYWtlU2FmZSgpO1xyXG5cclxuXHJcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgKj0gc2NhbGU7XHJcblxyXG5cdFx0XHQvLyByZXN0cmljdCByYWRpdXMgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xyXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzID0gTWF0aC5tYXgoc2NvcGUubWluRGlzdGFuY2UsIE1hdGgubWluKHNjb3BlLm1heERpc3RhbmNlLCBzcGhlcmljYWwucmFkaXVzKSk7XHJcblxyXG5cdFx0XHQvLyBtb3ZlIHRhcmdldCB0byBwYW5uZWQgbG9jYXRpb25cclxuXHRcdFx0c2NvcGUudGFyZ2V0LmFkZChwYW5PZmZzZXQpO1xyXG5cclxuXHRcdFx0b2Zmc2V0LnNldEZyb21TcGhlcmljYWwoc3BoZXJpY2FsKTtcclxuXHJcblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxyXG5cdFx0XHRvZmZzZXQuYXBwbHlRdWF0ZXJuaW9uKHF1YXRJbnZlcnNlKTtcclxuXHJcblx0XHRcdHBvc2l0aW9uLmNvcHkoc2NvcGUudGFyZ2V0KS5hZGQob2Zmc2V0KTtcclxuXHJcblx0XHRcdHNjb3BlLm9iamVjdC5sb29rQXQoc2NvcGUudGFyZ2V0KTtcclxuXHJcblx0XHRcdGlmIChzY29wZS5lbmFibGVEYW1waW5nID09PSB0cnVlKSB7XHJcblxyXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICgxIC0gc2NvcGUuZGFtcGluZ0ZhY3Rvcik7XHJcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEucGhpICo9ICgxIC0gc2NvcGUuZGFtcGluZ0ZhY3Rvcik7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cclxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS5zZXQoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRzY2FsZSA9IDE7XHJcblx0XHRcdHBhbk9mZnNldC5zZXQoMCwgMCwgMCk7XHJcblxyXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxyXG5cdFx0XHQvLyBtaW4oY2FtZXJhIGRpc3BsYWNlbWVudCwgY2FtZXJhIHJvdGF0aW9uIGluIHJhZGlhbnMpXjIgPiBFUFNcclxuXHRcdFx0Ly8gdXNpbmcgc21hbGwtYW5nbGUgYXBwcm94aW1hdGlvbiBjb3MoeC8yKSA9IDEgLSB4XjIgLyA4XHJcblxyXG5cdFx0XHRpZiAoem9vbUNoYW5nZWQgfHxcclxuXHRcdFx0XHRsYXN0UG9zaXRpb24uZGlzdGFuY2VUb1NxdWFyZWQoc2NvcGUub2JqZWN0LnBvc2l0aW9uKSA+IEVQUyB8fFxyXG5cdFx0XHRcdDggKiAoMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdChzY29wZS5vYmplY3QucXVhdGVybmlvbikpID4gRVBTKSB7XHJcblxyXG5cdFx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xyXG5cclxuXHRcdFx0XHRsYXN0UG9zaXRpb24uY29weShzY29wZS5vYmplY3QucG9zaXRpb24pO1xyXG5cdFx0XHRcdGxhc3RRdWF0ZXJuaW9uLmNvcHkoc2NvcGUub2JqZWN0LnF1YXRlcm5pb24pO1xyXG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdH0oKTtcclxuXHJcblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSk7XHJcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XHJcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSk7XHJcblxyXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XHJcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xyXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xyXG5cclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwLCBmYWxzZSk7XHJcblxyXG5cdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlKTtcclxuXHJcblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cclxuXHJcblx0fTtcclxuXHJcblx0Ly9cclxuXHQvLyBpbnRlcm5hbHNcclxuXHQvL1xyXG5cclxuXHR2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6ICdjaGFuZ2UnIH07XHJcblx0dmFyIHN0YXJ0RXZlbnQgPSB7IHR5cGU6ICdzdGFydCcgfTtcclxuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XHJcblxyXG5cdHZhciBTVEFURSA9IHsgTk9ORTogLTEsIFJPVEFURTogMCwgRE9MTFk6IDEsIFBBTjogMiwgVE9VQ0hfUk9UQVRFOiAzLCBUT1VDSF9ET0xMWTogNCwgVE9VQ0hfUEFOOiA1IH07XHJcblxyXG5cdHZhciBzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcclxuXHJcblx0Ly8gY3VycmVudCBwb3NpdGlvbiBpbiBzcGhlcmljYWwgY29vcmRpbmF0ZXNcclxuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xyXG5cdHZhciBzcGhlcmljYWxEZWx0YSA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcclxuXHJcblx0dmFyIHNjYWxlID0gMTtcclxuXHR2YXIgcGFuT2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHR2YXIgem9vbUNoYW5nZWQgPSBmYWxzZTtcclxuXHJcblx0dmFyIHJvdGF0ZVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgcm90YXRlRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuXHR2YXIgcGFuU3RhcnQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cdHZhciBwYW5EZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgZG9sbHlFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cdHZhciBkb2xseURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcblx0ZnVuY3Rpb24gZ2V0QXV0b1JvdGF0aW9uQW5nbGUoKSB7XHJcblxyXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRab29tU2NhbGUoKSB7XHJcblxyXG5cdFx0cmV0dXJuIE1hdGgucG93KDAuOTUsIHNjb3BlLnpvb21TcGVlZCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcm90YXRlTGVmdChhbmdsZSkge1xyXG5cclxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJvdGF0ZVVwKGFuZ2xlKSB7XHJcblxyXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xyXG5cclxuXHR9XHJcblxyXG5cdHZhciBwYW5MZWZ0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuTGVmdChkaXN0YW5jZSwgb2JqZWN0TWF0cml4KSB7XHJcblxyXG5cdFx0XHR2LnNldEZyb21NYXRyaXhDb2x1bW4ob2JqZWN0TWF0cml4LCAwKTsgLy8gZ2V0IFggY29sdW1uIG9mIG9iamVjdE1hdHJpeFxyXG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKC1kaXN0YW5jZSk7XHJcblxyXG5cdFx0XHRwYW5PZmZzZXQuYWRkKHYpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdH0oKTtcclxuXHJcblx0dmFyIHBhblVwID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuVXAoZGlzdGFuY2UsIG9iamVjdE1hdHJpeCkge1xyXG5cclxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKG9iamVjdE1hdHJpeCwgMSk7IC8vIGdldCBZIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcclxuXHRcdFx0di5tdWx0aXBseVNjYWxhcihkaXN0YW5jZSk7XHJcblxyXG5cdFx0XHRwYW5PZmZzZXQuYWRkKHYpO1xyXG5cclxuXHRcdH07XHJcblxyXG5cdH0oKTtcclxuXHJcblx0Ly8gZGVsdGFYIGFuZCBkZWx0YVkgYXJlIGluIHBpeGVsczsgcmlnaHQgYW5kIGRvd24gYXJlIHBvc2l0aXZlXHJcblx0dmFyIHBhbiA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuKGRlbHRhWCwgZGVsdGFZKSB7XHJcblxyXG5cdFx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcblx0XHRcdGlmIChzY29wZS5vYmplY3QuaXNQZXJzcGVjdGl2ZUNhbWVyYSkge1xyXG5cclxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxyXG5cdFx0XHRcdHZhciBwb3NpdGlvbiA9IHNjb3BlLm9iamVjdC5wb3NpdGlvbjtcclxuXHRcdFx0XHRvZmZzZXQuY29weShwb3NpdGlvbikuc3ViKHNjb3BlLnRhcmdldCk7XHJcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xyXG5cclxuXHRcdFx0XHQvLyBoYWxmIG9mIHRoZSBmb3YgaXMgY2VudGVyIHRvIHRvcCBvZiBzY3JlZW5cclxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbigoc2NvcGUub2JqZWN0LmZvdiAvIDIpICogTWF0aC5QSSAvIDE4MC4wKTtcclxuXHJcblx0XHRcdFx0Ly8gd2UgYWN0dWFsbHkgZG9uJ3QgdXNlIHNjcmVlbldpZHRoLCBzaW5jZSBwZXJzcGVjdGl2ZSBjYW1lcmEgaXMgZml4ZWQgdG8gc2NyZWVuIGhlaWdodFxyXG5cdFx0XHRcdHBhbkxlZnQoMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXgpO1xyXG5cdFx0XHRcdHBhblVwKDIgKiBkZWx0YVkgKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4KTtcclxuXHJcblx0XHRcdH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcblxyXG5cdFx0XHRcdC8vIG9ydGhvZ3JhcGhpY1xyXG5cdFx0XHRcdHBhbkxlZnQoZGVsdGFYICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCk7XHJcblx0XHRcdFx0cGFuVXAoZGVsdGFZICogKHNjb3BlLm9iamVjdC50b3AgLSBzY29wZS5vYmplY3QuYm90dG9tKSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXgpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0Ly8gY2FtZXJhIG5laXRoZXIgb3J0aG9ncmFwaGljIG5vciBwZXJzcGVjdGl2ZVxyXG5cdFx0XHRcdGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicpO1xyXG5cdFx0XHRcdHNjb3BlLmVuYWJsZVBhbiA9IGZhbHNlO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdH07XHJcblxyXG5cdH0oKTtcclxuXHJcblx0ZnVuY3Rpb24gZG9sbHlJbihkb2xseVNjYWxlKSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLm9iamVjdC5pc1BlcnNwZWN0aXZlQ2FtZXJhKSB7XHJcblxyXG5cdFx0XHRzY2FsZSAvPSBkb2xseVNjYWxlO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcblxyXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KHNjb3BlLm1pblpvb20sIE1hdGgubWluKHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tICogZG9sbHlTY2FsZSkpO1xyXG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nKTtcclxuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkb2xseU91dChkb2xseVNjYWxlKSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLm9iamVjdC5pc1BlcnNwZWN0aXZlQ2FtZXJhKSB7XHJcblxyXG5cdFx0XHRzY2FsZSAqPSBkb2xseVNjYWxlO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhKSB7XHJcblxyXG5cdFx0XHRzY29wZS5vYmplY3Quem9vbSA9IE1hdGgubWF4KHNjb3BlLm1pblpvb20sIE1hdGgubWluKHNjb3BlLm1heFpvb20sIHNjb3BlLm9iamVjdC56b29tIC8gZG9sbHlTY2FsZSkpO1xyXG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cdFx0XHR6b29tQ2hhbmdlZCA9IHRydWU7XHJcblxyXG5cdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gZG9sbHkvem9vbSBkaXNhYmxlZC4nKTtcclxuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHQvL1xyXG5cdC8vIGV2ZW50IGNhbGxiYWNrcyAtIHVwZGF0ZSB0aGUgb2JqZWN0IHN0YXRlXHJcblx0Ly9cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUm90YXRlKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcclxuXHJcblx0XHRyb3RhdGVTdGFydC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VEb3duRG9sbHknICk7XHJcblxyXG5cdFx0ZG9sbHlTdGFydC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duUGFuKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blBhbicgKTtcclxuXHJcblx0XHRwYW5TdGFydC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlUm90YXRlKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcclxuXHJcblx0XHRyb3RhdGVFbmQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyhyb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0KTtcclxuXHJcblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXHJcblx0XHRyb3RhdGVMZWZ0KDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCk7XHJcblxyXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcblx0XHRyb3RhdGVVcCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkKTtcclxuXHJcblx0XHRyb3RhdGVTdGFydC5jb3B5KHJvdGF0ZUVuZCk7XHJcblxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VNb3ZlRG9sbHkoZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XHJcblxyXG5cdFx0ZG9sbHlFbmQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG5cclxuXHRcdGRvbGx5RGVsdGEuc3ViVmVjdG9ycyhkb2xseUVuZCwgZG9sbHlTdGFydCk7XHJcblxyXG5cdFx0aWYgKGRvbGx5RGVsdGEueSA+IDApIHtcclxuXHJcblx0XHRcdGRvbGx5SW4oZ2V0Wm9vbVNjYWxlKCkpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoZG9sbHlEZWx0YS55IDwgMCkge1xyXG5cclxuXHRcdFx0ZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRkb2xseVN0YXJ0LmNvcHkoZG9sbHlFbmQpO1xyXG5cclxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVBhbihldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XHJcblxyXG5cdFx0cGFuRW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuXHJcblx0XHRwYW5EZWx0YS5zdWJWZWN0b3JzKHBhbkVuZCwgcGFuU3RhcnQpO1xyXG5cclxuXHRcdHBhbihwYW5EZWx0YS54LCBwYW5EZWx0YS55KTtcclxuXHJcblx0XHRwYW5TdGFydC5jb3B5KHBhbkVuZCk7XHJcblxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VVcChldmVudCkge1xyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VVcCcgKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVdoZWVsKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly8gY29uc29sZS5sb2coICdoYW5kbGVNb3VzZVdoZWVsJyApO1xyXG5cclxuXHRcdGlmIChldmVudC5kZWx0YVkgPCAwKSB7XHJcblxyXG5cdFx0XHRkb2xseU91dChnZXRab29tU2NhbGUoKSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChldmVudC5kZWx0YVkgPiAwKSB7XHJcblxyXG5cdFx0XHRkb2xseUluKGdldFpvb21TY2FsZSgpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlS2V5RG93bihldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVLZXlEb3duJyApO1xyXG5cclxuXHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG5cclxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlVQOlxyXG5cdFx0XHRcdHBhbigwLCBzY29wZS5rZXlQYW5TcGVlZCk7XHJcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuQk9UVE9NOlxyXG5cdFx0XHRcdHBhbigwLCAtc2NvcGUua2V5UGFuU3BlZWQpO1xyXG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XHJcblx0XHRcdFx0cGFuKHNjb3BlLmtleVBhblNwZWVkLCAwKTtcclxuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5SSUdIVDpcclxuXHRcdFx0XHRwYW4oLXNjb3BlLmtleVBhblNwZWVkLCAwKTtcclxuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFJvdGF0ZShldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0Um90YXRlJyApO1xyXG5cclxuXHRcdHJvdGF0ZVN0YXJ0LnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xyXG5cclxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50b3VjaGVzWzFdLnBhZ2VYO1xyXG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVk7XHJcblxyXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuXHJcblx0XHRkb2xseVN0YXJ0LnNldCgwLCBkaXN0YW5jZSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydFBhbihldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaFN0YXJ0UGFuJyApO1xyXG5cclxuXHRcdHBhblN0YXJ0LnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVSb3RhdGUoZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xyXG5cclxuXHRcdHJvdGF0ZUVuZC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XHJcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQpO1xyXG5cclxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xyXG5cclxuXHRcdC8vIHJvdGF0aW5nIGFjcm9zcyB3aG9sZSBzY3JlZW4gZ29lcyAzNjAgZGVncmVlcyBhcm91bmRcclxuXHRcdHJvdGF0ZUxlZnQoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkKTtcclxuXHJcblx0XHQvLyByb3RhdGluZyB1cCBhbmQgZG93biBhbG9uZyB3aG9sZSBzY3JlZW4gYXR0ZW1wdHMgdG8gZ28gMzYwLCBidXQgbGltaXRlZCB0byAxODBcclxuXHRcdHJvdGF0ZVVwKDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQpO1xyXG5cclxuXHRcdHJvdGF0ZVN0YXJ0LmNvcHkocm90YXRlRW5kKTtcclxuXHJcblx0XHRzY29wZS51cGRhdGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVEb2xseShldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcclxuXHJcblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWDtcclxuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSBldmVudC50b3VjaGVzWzFdLnBhZ2VZO1xyXG5cclxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG5cdFx0ZG9sbHlFbmQuc2V0KDAsIGRpc3RhbmNlKTtcclxuXHJcblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoZG9sbHlFbmQsIGRvbGx5U3RhcnQpO1xyXG5cclxuXHRcdGlmIChkb2xseURlbHRhLnkgPiAwKSB7XHJcblxyXG5cdFx0XHRkb2xseU91dChnZXRab29tU2NhbGUoKSk7XHJcblxyXG5cdFx0fSBlbHNlIGlmIChkb2xseURlbHRhLnkgPCAwKSB7XHJcblxyXG5cdFx0XHRkb2xseUluKGdldFpvb21TY2FsZSgpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZG9sbHlTdGFydC5jb3B5KGRvbGx5RW5kKTtcclxuXHJcblx0XHRzY29wZS51cGRhdGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUGFuJyApO1xyXG5cclxuXHRcdHBhbkVuZC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XHJcblxyXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcclxuXHJcblx0XHRwYW4ocGFuRGVsdGEueCwgcGFuRGVsdGEueSk7XHJcblxyXG5cdFx0cGFuU3RhcnQuY29weShwYW5FbmQpO1xyXG5cclxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoRW5kKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vXHJcblx0Ly8gZXZlbnQgaGFuZGxlcnMgLSBGU006IGxpc3RlbiBmb3IgZXZlbnRzIGFuZCByZXNldCBzdGF0ZVxyXG5cdC8vXHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VEb3duKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzd2l0Y2ggKGV2ZW50LmJ1dHRvbikge1xyXG5cclxuXHRcdFx0Y2FzZSBzY29wZS5tb3VzZUJ1dHRvbnMuT1JCSVQ6XHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdGhhbmRsZU1vdXNlRG93blJvdGF0ZShldmVudCk7XHJcblxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuUk9UQVRFO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUubW91c2VCdXR0b25zLlpPT006XHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseShldmVudCk7XHJcblxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuRE9MTFk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOOlxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25QYW4oZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSkge1xyXG5cclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlKTtcclxuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdHN3aXRjaCAoc3RhdGUpIHtcclxuXHJcblx0XHRcdGNhc2UgU1RBVEUuUk9UQVRFOlxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVSb3RhdGUoZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgU1RBVEUuRE9MTFk6XHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVEb2xseShldmVudCk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBTVEFURS5QQU46XHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbihldmVudCk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlVXAoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRoYW5kbGVNb3VzZVVwKGV2ZW50KTtcclxuXHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xyXG5cclxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xyXG5cclxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UgfHwgc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UgfHwgKHN0YXRlICE9PSBTVEFURS5OT05FICYmIHN0YXRlICE9PSBTVEFURS5ST1RBVEUpKSByZXR1cm47XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoZXZlbnQpO1xyXG5cclxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoc3RhcnRFdmVudCk7IC8vIG5vdCBzdXJlIHdoeSB0aGVzZSBhcmUgaGVyZS4uLlxyXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25LZXlEb3duKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRoYW5kbGVLZXlEb3duKGV2ZW50KTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRzd2l0Y2ggKGV2ZW50LnRvdWNoZXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKGV2ZW50KTtcclxuXHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAyOlx0Ly8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydERvbGx5KGV2ZW50KTtcclxuXHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ET0xMWTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cclxuXHJcblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbihldmVudCk7XHJcblxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUEFOO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGRlZmF1bHQ6XHJcblxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHN0YXRlICE9PSBTVEFURS5OT05FKSB7XHJcblxyXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvblRvdWNoTW92ZShldmVudCkge1xyXG5cclxuXHRcdGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRzd2l0Y2ggKGV2ZW50LnRvdWNoZXMubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRjYXNlIDE6IC8vIG9uZS1maW5nZXJlZCB0b3VjaDogcm90YXRlXHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XHJcblx0XHRcdFx0aWYgKHN0YXRlICE9PSBTVEFURS5UT1VDSF9ST1RBVEUpIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXHJcblxyXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVJvdGF0ZShldmVudCk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAyOiAvLyB0d28tZmluZ2VyZWQgdG91Y2g6IGRvbGx5XHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVab29tID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cdFx0XHRcdGlmIChzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfRE9MTFkpIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXHJcblxyXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZURvbGx5KGV2ZW50KTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIDM6IC8vIHRocmVlLWZpbmdlcmVkIHRvdWNoOiBwYW5cclxuXHJcblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcclxuXHRcdFx0XHRpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX1BBTikgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cclxuXHJcblx0XHRcdFx0aGFuZGxlVG91Y2hNb3ZlUGFuKGV2ZW50KTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uVG91Y2hFbmQoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRoYW5kbGVUb3VjaEVuZChldmVudCk7XHJcblxyXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XHJcblxyXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uQ29udGV4dE1lbnUoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHR9XHJcblxyXG5cdC8vXHJcblxyXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY29udGV4dG1lbnUnLCBvbkNvbnRleHRNZW51LCBmYWxzZSk7XHJcblxyXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgb25Nb3VzZURvd24sIGZhbHNlKTtcclxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3doZWVsJywgb25Nb3VzZVdoZWVsLCBmYWxzZSk7XHJcblxyXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UpO1xyXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBvblRvdWNoRW5kLCBmYWxzZSk7XHJcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xyXG5cclxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5RG93biwgZmFsc2UpO1xyXG5cclxuXHQvLyBmb3JjZSBhbiB1cGRhdGUgYXQgc3RhcnRcclxuXHJcblx0dGhpcy51cGRhdGUoKTtcclxuXHJcbn07XHJcblxyXG5PcmJpdENvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVEhSRUUuRXZlbnREaXNwYXRjaGVyLnByb3RvdHlwZSk7XHJcbk9yYml0Q29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gT3JiaXRDb250cm9scztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE9yYml0Q29udHJvbHMucHJvdG90eXBlLCB7XHJcblxyXG5cdGNlbnRlcjoge1xyXG5cclxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuY2VudGVyIGhhcyBiZWVuIHJlbmFtZWQgdG8gLnRhcmdldCcpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy50YXJnZXQ7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHQvLyBiYWNrd2FyZCBjb21wYXRpYmlsaXR5XHJcblxyXG5cdG5vWm9vbToge1xyXG5cclxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicpO1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlWm9vbTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyk7XHJcblx0XHRcdHRoaXMuZW5hYmxlWm9vbSA9ICF2YWx1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblxyXG5cdG5vUm90YXRlOiB7XHJcblxyXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicpO1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlUm90YXRlO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyk7XHJcblx0XHRcdHRoaXMuZW5hYmxlUm90YXRlID0gIXZhbHVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0bm9QYW46IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyk7XHJcblx0XHRcdHJldHVybiAhdGhpcy5lbmFibGVQYW47XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nKTtcclxuXHRcdFx0dGhpcy5lbmFibGVQYW4gPSAhdmFsdWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHRub0tleXM6IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nKTtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmVuYWJsZUtleXM7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicpO1xyXG5cdFx0XHR0aGlzLmVuYWJsZUtleXMgPSAhdmFsdWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHRzdGF0aWNNb3Zpbmc6IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nKTtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmVuYWJsZURhbXBpbmc7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicpO1xyXG5cdFx0XHR0aGlzLmVuYWJsZURhbXBpbmcgPSAhdmFsdWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHRkeW5hbWljRGFtcGluZ0ZhY3Rvcjoge1xyXG5cclxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyk7XHJcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyk7XHJcblx0XHRcdHRoaXMuZGFtcGluZ0ZhY3RvciA9IHZhbHVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxufSk7IiwiLyoqXG4gKiBAYXV0aG9yIGFyb2RpYyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9hcm9kaWNcbiAqL1xuXG4vL2ltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcblxuJ3VzZSBzdHJpY3QnO1xuXG52YXIgR2l6bW9NYXRlcmlhbCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG5cblx0VEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwuY2FsbCh0aGlzKTtcblxuXHR0aGlzLmRlcHRoVGVzdCA9IGZhbHNlO1xuXHR0aGlzLmRlcHRoV3JpdGUgPSBmYWxzZTtcblx0dGhpcy5zaWRlID0gVEhSRUUuRnJvbnRTaWRlO1xuXHR0aGlzLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblxuXHR0aGlzLnNldFZhbHVlcyhwYXJhbWV0ZXJzKTtcblxuXHR0aGlzLm9sZENvbG9yID0gdGhpcy5jb2xvci5jbG9uZSgpO1xuXHR0aGlzLm9sZE9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG5cblx0dGhpcy5oaWdobGlnaHQgPSBmdW5jdGlvbiAoaGlnaGxpZ2h0ZWQpIHtcblxuXHRcdGlmIChoaWdobGlnaHRlZCkge1xuXG5cdFx0XHR0aGlzLmNvbG9yLnNldFJHQigxLCAxLCAwKTtcblx0XHRcdHRoaXMub3BhY2l0eSA9IDE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmNvbG9yLmNvcHkodGhpcy5vbGRDb2xvcik7XG5cdFx0XHR0aGlzLm9wYWNpdHkgPSB0aGlzLm9sZE9wYWNpdHk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuR2l6bW9NYXRlcmlhbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsLnByb3RvdHlwZSk7XG5HaXptb01hdGVyaWFsLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdpem1vTWF0ZXJpYWw7XG5cblxudmFyIEdpem1vTGluZU1hdGVyaWFsID0gZnVuY3Rpb24gKHBhcmFtZXRlcnMpIHtcblxuXHRUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbC5jYWxsKHRoaXMpO1xuXG5cdHRoaXMuZGVwdGhUZXN0ID0gZmFsc2U7XG5cdHRoaXMuZGVwdGhXcml0ZSA9IGZhbHNlO1xuXHR0aGlzLnRyYW5zcGFyZW50ID0gdHJ1ZTtcblx0dGhpcy5saW5ld2lkdGggPSAxO1xuXG5cdHRoaXMuc2V0VmFsdWVzKHBhcmFtZXRlcnMpO1xuXG5cdHRoaXMub2xkQ29sb3IgPSB0aGlzLmNvbG9yLmNsb25lKCk7XG5cdHRoaXMub2xkT3BhY2l0eSA9IHRoaXMub3BhY2l0eTtcblxuXHR0aGlzLmhpZ2hsaWdodCA9IGZ1bmN0aW9uIChoaWdobGlnaHRlZCkge1xuXG5cdFx0aWYgKGhpZ2hsaWdodGVkKSB7XG5cblx0XHRcdHRoaXMuY29sb3Iuc2V0UkdCKDEsIDEsIDApO1xuXHRcdFx0dGhpcy5vcGFjaXR5ID0gMTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdHRoaXMuY29sb3IuY29weSh0aGlzLm9sZENvbG9yKTtcblx0XHRcdHRoaXMub3BhY2l0eSA9IHRoaXMub2xkT3BhY2l0eTtcblxuXHRcdH1cblxuXHR9O1xuXG59O1xuXG5HaXptb0xpbmVNYXRlcmlhbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRIUkVFLkxpbmVCYXNpY01hdGVyaWFsLnByb3RvdHlwZSk7XG5HaXptb0xpbmVNYXRlcmlhbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHaXptb0xpbmVNYXRlcmlhbDtcblxuXG52YXIgcGlja2VyTWF0ZXJpYWwgPSBuZXcgR2l6bW9NYXRlcmlhbCh7IHZpc2libGU6IGZhbHNlLCB0cmFuc3BhcmVudDogZmFsc2UgfSk7XG5cblxudmFyIFRyYW5zZm9ybUdpem1vID0gZnVuY3Rpb24gKCkge1xuXG5cdHRoaXMuaW5pdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdFRIUkVFLk9iamVjdDNELmNhbGwodGhpcyk7XG5cblx0XHR0aGlzLmhhbmRsZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblx0XHR0aGlzLnBpY2tlcnMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblx0XHR0aGlzLnBsYW5lcyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuXG5cdFx0dGhpcy5hZGQodGhpcy5oYW5kbGVzKTtcblx0XHR0aGlzLmFkZCh0aGlzLnBpY2tlcnMpO1xuXHRcdHRoaXMuYWRkKHRoaXMucGxhbmVzKTtcblxuXHRcdC8vLy8gUExBTkVTXG5cblx0XHR2YXIgcGxhbmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDUwLCA1MCwgMiwgMik7XG5cdFx0dmFyIHBsYW5lTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyB2aXNpYmxlOiBmYWxzZSwgc2lkZTogVEhSRUUuRG91YmxlU2lkZSB9KTtcblxuXHRcdHZhciBwbGFuZXMgPSB7XG5cdFx0XHRcIlhZXCI6IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpLFxuXHRcdFx0XCJZWlwiOiBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKSxcblx0XHRcdFwiWFpcIjogbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCksXG5cdFx0XHRcIlhZWkVcIjogbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbClcblx0XHR9O1xuXG5cdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHBsYW5lc1tcIlhZWkVcIl07XG5cblx0XHRwbGFuZXNbXCJZWlwiXS5yb3RhdGlvbi5zZXQoMCwgTWF0aC5QSSAvIDIsIDApO1xuXHRcdHBsYW5lc1tcIlhaXCJdLnJvdGF0aW9uLnNldCgtIE1hdGguUEkgLyAyLCAwLCAwKTtcblxuXHRcdGZvciAodmFyIGkgaW4gcGxhbmVzKSB7XG5cblx0XHRcdHBsYW5lc1tpXS5uYW1lID0gaTtcblx0XHRcdHRoaXMucGxhbmVzLmFkZChwbGFuZXNbaV0pO1xuXHRcdFx0dGhpcy5wbGFuZXNbaV0gPSBwbGFuZXNbaV07XG5cblx0XHR9XG5cblx0XHQvLy8vIEhBTkRMRVMgQU5EIFBJQ0tFUlNcblxuXHRcdHZhciBzZXR1cEdpem1vcyA9IGZ1bmN0aW9uIChnaXptb01hcCwgcGFyZW50KSB7XG5cblx0XHRcdGZvciAodmFyIG5hbWUgaW4gZ2l6bW9NYXApIHtcblxuXHRcdFx0XHRmb3IgKGkgPSBnaXptb01hcFtuYW1lXS5sZW5ndGg7IGktLTspIHtcblxuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBnaXptb01hcFtuYW1lXVtpXVswXTtcblx0XHRcdFx0XHR2YXIgcG9zaXRpb24gPSBnaXptb01hcFtuYW1lXVtpXVsxXTtcblx0XHRcdFx0XHR2YXIgcm90YXRpb24gPSBnaXptb01hcFtuYW1lXVtpXVsyXTtcblxuXHRcdFx0XHRcdG9iamVjdC5uYW1lID0gbmFtZTtcblxuXHRcdFx0XHRcdGlmIChwb3NpdGlvbikgb2JqZWN0LnBvc2l0aW9uLnNldChwb3NpdGlvblswXSwgcG9zaXRpb25bMV0sIHBvc2l0aW9uWzJdKTtcblx0XHRcdFx0XHRpZiAocm90YXRpb24pIG9iamVjdC5yb3RhdGlvbi5zZXQocm90YXRpb25bMF0sIHJvdGF0aW9uWzFdLCByb3RhdGlvblsyXSk7XG5cblx0XHRcdFx0XHRwYXJlbnQuYWRkKG9iamVjdCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9O1xuXG5cdFx0c2V0dXBHaXptb3ModGhpcy5oYW5kbGVHaXptb3MsIHRoaXMuaGFuZGxlcyk7XG5cdFx0c2V0dXBHaXptb3ModGhpcy5waWNrZXJHaXptb3MsIHRoaXMucGlja2Vycyk7XG5cblx0XHQvLyByZXNldCBUcmFuc2Zvcm1hdGlvbnNcblxuXHRcdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG5cblx0XHRcdGlmIChjaGlsZCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpIHtcblxuXHRcdFx0XHRjaGlsZC51cGRhdGVNYXRyaXgoKTtcblxuXHRcdFx0XHR2YXIgdGVtcEdlb21ldHJ5ID0gY2hpbGQuZ2VvbWV0cnkuY2xvbmUoKTtcblx0XHRcdFx0dGVtcEdlb21ldHJ5LmFwcGx5TWF0cml4KGNoaWxkLm1hdHJpeCk7XG5cdFx0XHRcdGNoaWxkLmdlb21ldHJ5ID0gdGVtcEdlb21ldHJ5O1xuXG5cdFx0XHRcdGNoaWxkLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcblx0XHRcdFx0Y2hpbGQucm90YXRpb24uc2V0KDAsIDAsIDApO1xuXHRcdFx0XHRjaGlsZC5zY2FsZS5zZXQoMSwgMSwgMSk7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH07XG5cblx0dGhpcy5oaWdobGlnaHQgPSBmdW5jdGlvbiAoYXhpcykge1xuXG5cdFx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcblxuXHRcdFx0aWYgKGNoaWxkLm1hdGVyaWFsICYmIGNoaWxkLm1hdGVyaWFsLmhpZ2hsaWdodCkge1xuXG5cdFx0XHRcdGlmIChjaGlsZC5uYW1lID09PSBheGlzKSB7XG5cblx0XHRcdFx0XHRjaGlsZC5tYXRlcmlhbC5oaWdobGlnaHQodHJ1ZSk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdGNoaWxkLm1hdGVyaWFsLmhpZ2hsaWdodChmYWxzZSk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9O1xuXG59O1xuXG5UcmFuc2Zvcm1HaXptby5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRIUkVFLk9iamVjdDNELnByb3RvdHlwZSk7XG5UcmFuc2Zvcm1HaXptby5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm1HaXptbztcblxuVHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChyb3RhdGlvbiwgZXllKSB7XG5cblx0dmFyIHZlYzEgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAwLCAwKTtcblx0dmFyIHZlYzIgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcblx0dmFyIGxvb2tBdE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cblx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcblxuXHRcdGlmIChjaGlsZC5uYW1lLnNlYXJjaChcIkVcIikgIT09IC0gMSkge1xuXG5cdFx0XHRjaGlsZC5xdWF0ZXJuaW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeChsb29rQXRNYXRyaXgubG9va0F0KGV5ZSwgdmVjMSwgdmVjMikpO1xuXG5cdFx0fSBlbHNlIGlmIChjaGlsZC5uYW1lLnNlYXJjaChcIlhcIikgIT09IC0gMSB8fCBjaGlsZC5uYW1lLnNlYXJjaChcIllcIikgIT09IC0gMSB8fCBjaGlsZC5uYW1lLnNlYXJjaChcIlpcIikgIT09IC0gMSkge1xuXG5cdFx0XHRjaGlsZC5xdWF0ZXJuaW9uLnNldEZyb21FdWxlcihyb3RhdGlvbik7XG5cblx0XHR9XG5cblx0fSk7XG5cbn07XG5cbnZhciBUcmFuc2Zvcm1HaXptb1RyYW5zbGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRUcmFuc2Zvcm1HaXptby5jYWxsKHRoaXMpO1xuXG5cdHZhciBhcnJvd0dlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoMCwgMC4wNSwgMC4yLCAxMiwgMSwgZmFsc2UpKTtcblx0bWVzaC5wb3NpdGlvbi55ID0gMC41O1xuXHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xuXG5cdGFycm93R2VvbWV0cnkubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xuXG5cdHZhciBsaW5lWEdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cdGxpbmVYR2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKFswLCAwLCAwLCAxLCAwLCAwXSwgMykpO1xuXG5cdHZhciBsaW5lWUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cdGxpbmVZR2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKFswLCAwLCAwLCAwLCAxLCAwXSwgMykpO1xuXG5cdHZhciBsaW5lWkdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cdGxpbmVaR2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKFswLCAwLCAwLCAwLCAwLCAxXSwgMykpO1xuXG5cdHRoaXMuaGFuZGxlR2l6bW9zID0ge1xuXG5cdFx0WDogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKGFycm93R2VvbWV0cnksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pKSwgWzAuNSwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV0sXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobGluZVhHZW9tZXRyeSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pKV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKGFycm93R2VvbWV0cnksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4MDBmZjAwIH0pKSwgWzAsIDAuNSwgMF1dLFxuXHRcdFx0W25ldyBUSFJFRS5MaW5lKGxpbmVZR2VvbWV0cnksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweDAwZmYwMCB9KSldXG5cdFx0XSxcblxuXHRcdFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KSksIFswLCAwLCAwLjVdLCBbTWF0aC5QSSAvIDIsIDAsIDBdXSxcblx0XHRcdFtuZXcgVEhSRUUuTGluZShsaW5lWkdlb21ldHJ5LCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSkpXVxuXHRcdF0sXG5cblx0XHRYWVo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuT2N0YWhlZHJvbkdlb21ldHJ5KDAuMSwgMCksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCBvcGFjaXR5OiAwLjI1IH0pKSwgWzAsIDAsIDBdLCBbMCwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFhZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMC4yOSwgMC4yOSksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZjAwLCBvcGFjaXR5OiAwLjI1IH0pKSwgWzAuMTUsIDAuMTUsIDBdXVxuXHRcdF0sXG5cblx0XHRZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuMjksIDAuMjkpLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwZmZmZiwgb3BhY2l0eTogMC4yNSB9KSksIFswLCAwLjE1LCAwLjE1XSwgWzAsIE1hdGguUEkgLyAyLCAwXV1cblx0XHRdLFxuXG5cdFx0WFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgwLjI5LCAwLjI5KSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwZmYsIG9wYWNpdHk6IDAuMjUgfSkpLCBbMC4xNSwgMCwgMC4xNV0sIFstIE1hdGguUEkgLyAyLCAwLCAwXV1cblx0XHRdXG5cblx0fTtcblxuXHR0aGlzLnBpY2tlckdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSgwLjIsIDAsIDEsIDQsIDEsIGZhbHNlKSwgcGlja2VyTWF0ZXJpYWwpLCBbMC42LCAwLCAwXSwgWzAsIDAsIC0gTWF0aC5QSSAvIDJdXVxuXHRcdF0sXG5cblx0XHRZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAuNiwgMF1dXG5cdFx0XSxcblxuXHRcdFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSgwLjIsIDAsIDEsIDQsIDEsIGZhbHNlKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMC42XSwgW01hdGguUEkgLyAyLCAwLCAwXV1cblx0XHRdLFxuXG5cdFx0WFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeSgwLjIsIDApLCBwaWNrZXJNYXRlcmlhbCldXG5cdFx0XSxcblxuXHRcdFhZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMC40LCAwLjQpLCBwaWNrZXJNYXRlcmlhbCksIFswLjIsIDAuMiwgMF1dXG5cdFx0XSxcblxuXHRcdFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMC40LCAwLjQpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLjIsIDAuMl0sIFswLCBNYXRoLlBJIC8gMiwgMF1dXG5cdFx0XSxcblxuXHRcdFhaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMC40LCAwLjQpLCBwaWNrZXJNYXRlcmlhbCksIFswLjIsIDAsIDAuMl0sIFstIE1hdGguUEkgLyAyLCAwLCAwXV1cblx0XHRdXG5cblx0fTtcblxuXHR0aGlzLnNldEFjdGl2ZVBsYW5lID0gZnVuY3Rpb24gKGF4aXMsIGV5ZSkge1xuXG5cdFx0dmFyIHRlbXBNYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXHRcdGV5ZS5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHRlbXBNYXRyaXguZXh0cmFjdFJvdGF0aW9uKHRoaXMucGxhbmVzW1wiWFlcIl0ubWF0cml4V29ybGQpKSk7XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJYXCIpIHtcblxuXHRcdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFlcIl07XG5cblx0XHRcdGlmIChNYXRoLmFicyhleWUueSkgPiBNYXRoLmFicyhleWUueikpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhaXCJdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGF4aXMgPT09IFwiWVwiKSB7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZXllLngpID4gTWF0aC5hYnMoZXllLnopKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJZWlwiXTtcblxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSBcIlpcIikge1xuXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWlwiXTtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGV5ZS54KSA+IE1hdGguYWJzKGV5ZS55KSkgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWVpcIl07XG5cblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJYWVpcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFlaRVwiXTtcblxuXHRcdGlmIChheGlzID09PSBcIlhZXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWVpcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWVpcIl07XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJYWlwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWlwiXTtcblxuXHR9O1xuXG5cdHRoaXMuaW5pdCgpO1xuXG59O1xuXG5UcmFuc2Zvcm1HaXptb1RyYW5zbGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRyYW5zZm9ybUdpem1vLnByb3RvdHlwZSk7XG5UcmFuc2Zvcm1HaXptb1RyYW5zbGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm1HaXptb1RyYW5zbGF0ZTtcblxudmFyIFRyYW5zZm9ybUdpem1vUm90YXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFRyYW5zZm9ybUdpem1vLmNhbGwodGhpcyk7XG5cblx0dmFyIENpcmNsZUdlb21ldHJ5ID0gZnVuY3Rpb24gKHJhZGl1cywgZmFjaW5nLCBhcmMpIHtcblxuXHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRcdHZhciB2ZXJ0aWNlcyA9IFtdO1xuXHRcdGFyYyA9IGFyYyA/IGFyYyA6IDE7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8PSA2NCAqIGFyYzsgKytpKSB7XG5cblx0XHRcdGlmIChmYWNpbmcgPT09ICd4JykgdmVydGljZXMucHVzaCgwLCBNYXRoLmNvcyhpIC8gMzIgKiBNYXRoLlBJKSAqIHJhZGl1cywgTWF0aC5zaW4oaSAvIDMyICogTWF0aC5QSSkgKiByYWRpdXMpO1xuXHRcdFx0aWYgKGZhY2luZyA9PT0gJ3knKSB2ZXJ0aWNlcy5wdXNoKE1hdGguY29zKGkgLyAzMiAqIE1hdGguUEkpICogcmFkaXVzLCAwLCBNYXRoLnNpbihpIC8gMzIgKiBNYXRoLlBJKSAqIHJhZGl1cyk7XG5cdFx0XHRpZiAoZmFjaW5nID09PSAneicpIHZlcnRpY2VzLnB1c2goTWF0aC5zaW4oaSAvIDMyICogTWF0aC5QSSkgKiByYWRpdXMsIE1hdGguY29zKGkgLyAzMiAqIE1hdGguUEkpICogcmFkaXVzLCAwKTtcblxuXHRcdH1cblxuXHRcdGdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xuXHRcdHJldHVybiBnZW9tZXRyeTtcblxuXHR9O1xuXG5cdHRoaXMuaGFuZGxlR2l6bW9zID0ge1xuXG5cdFx0WDogW1xuXHRcdFx0W25ldyBUSFJFRS5MaW5lKG5ldyBDaXJjbGVHZW9tZXRyeSgxLCAneCcsIDAuNSksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSldXG5cdFx0XSxcblxuXHRcdFk6IFtcblx0XHRcdFtuZXcgVEhSRUUuTGluZShuZXcgQ2lyY2xlR2VvbWV0cnkoMSwgJ3knLCAwLjUpLCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobmV3IENpcmNsZUdlb21ldHJ5KDEsICd6JywgMC41KSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pKV1cblx0XHRdLFxuXG5cdFx0RTogW1xuXHRcdFx0W25ldyBUSFJFRS5MaW5lKG5ldyBDaXJjbGVHZW9tZXRyeSgxLjI1LCAneicsIDEpLCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHhjY2NjMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRYWVpFOiBbXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobmV3IENpcmNsZUdlb21ldHJ5KDEsICd6JywgMSksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweDc4Nzg3OCB9KSldXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5waWNrZXJHaXptb3MgPSB7XG5cblx0XHRYOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlRvcnVzQnVmZmVyR2VvbWV0cnkoMSwgMC4xMiwgNCwgMTIsIE1hdGguUEkpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLCAwXSwgWzAsIC0gTWF0aC5QSSAvIDIsIC0gTWF0aC5QSSAvIDJdXVxuXHRcdF0sXG5cblx0XHRZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlRvcnVzQnVmZmVyR2VvbWV0cnkoMSwgMC4xMiwgNCwgMTIsIE1hdGguUEkpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLCAwXSwgW01hdGguUEkgLyAyLCAwLCAwXV1cblx0XHRdLFxuXG5cdFx0WjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Ub3J1c0J1ZmZlckdlb21ldHJ5KDEsIDAuMTIsIDQsIDEyLCBNYXRoLlBJKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0RTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Ub3J1c0J1ZmZlckdlb21ldHJ5KDEuMjUsIDAuMTIsIDIsIDI0KSwgcGlja2VyTWF0ZXJpYWwpXVxuXHRcdF0sXG5cblx0XHRYWVpFOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2goKV0vLyBUT0RPXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5zZXRBY3RpdmVQbGFuZSA9IGZ1bmN0aW9uIChheGlzKSB7XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJFXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZWkVcIl07XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJYXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIllaXCJdO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWVwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWlwiXTtcblxuXHRcdGlmIChheGlzID09PSBcIlpcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFlcIl07XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uIChyb3RhdGlvbiwgZXllMikge1xuXG5cdFx0VHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlLnVwZGF0ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG5cdFx0dmFyIHRlbXBNYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXHRcdHZhciB3b3JsZFJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKDAsIDAsIDEpO1xuXHRcdHZhciB0ZW1wUXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cdFx0dmFyIHVuaXRYID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCk7XG5cdFx0dmFyIHVuaXRZID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG5cdFx0dmFyIHVuaXRaID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSk7XG5cdFx0dmFyIHF1YXRlcm5pb25YID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0XHR2YXIgcXVhdGVybmlvblkgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHZhciBxdWF0ZXJuaW9uWiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cdFx0dmFyIGV5ZSA9IGV5ZTIuY2xvbmUoKTtcblxuXHRcdHdvcmxkUm90YXRpb24uY29weSh0aGlzLnBsYW5lc1tcIlhZXCJdLnJvdGF0aW9uKTtcblx0XHR0ZW1wUXVhdGVybmlvbi5zZXRGcm9tRXVsZXIod29ybGRSb3RhdGlvbik7XG5cblx0XHR0ZW1wTWF0cml4Lm1ha2VSb3RhdGlvbkZyb21RdWF0ZXJuaW9uKHRlbXBRdWF0ZXJuaW9uKS5nZXRJbnZlcnNlKHRlbXBNYXRyaXgpO1xuXHRcdGV5ZS5hcHBseU1hdHJpeDQodGVtcE1hdHJpeCk7XG5cblx0XHR0aGlzLnRyYXZlcnNlKGZ1bmN0aW9uIChjaGlsZCkge1xuXG5cdFx0XHR0ZW1wUXVhdGVybmlvbi5zZXRGcm9tRXVsZXIod29ybGRSb3RhdGlvbik7XG5cblx0XHRcdGlmIChjaGlsZC5uYW1lID09PSBcIlhcIikge1xuXG5cdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUodW5pdFgsIE1hdGguYXRhbjIoLSBleWUueSwgZXllLnopKTtcblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblgpO1xuXHRcdFx0XHRjaGlsZC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChjaGlsZC5uYW1lID09PSBcIllcIikge1xuXG5cdFx0XHRcdHF1YXRlcm5pb25ZLnNldEZyb21BeGlzQW5nbGUodW5pdFksIE1hdGguYXRhbjIoZXllLngsIGV5ZS56KSk7XG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25ZKTtcblx0XHRcdFx0Y2hpbGQucXVhdGVybmlvbi5jb3B5KHRlbXBRdWF0ZXJuaW9uKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gXCJaXCIpIHtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uWi5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRaLCBNYXRoLmF0YW4yKGV5ZS55LCBleWUueCkpO1xuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWik7XG5cdFx0XHRcdGNoaWxkLnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH1cblxuXHRcdH0pO1xuXG5cdH07XG5cblx0dGhpcy5pbml0KCk7XG5cbn07XG5cblRyYW5zZm9ybUdpem1vUm90YXRlLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlKTtcblRyYW5zZm9ybUdpem1vUm90YXRlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRyYW5zZm9ybUdpem1vUm90YXRlO1xuXG52YXIgVHJhbnNmb3JtR2l6bW9TY2FsZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRUcmFuc2Zvcm1HaXptby5jYWxsKHRoaXMpO1xuXG5cdHZhciBhcnJvd0dlb21ldHJ5ID0gbmV3IFRIUkVFLkdlb21ldHJ5KCk7XG5cdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMTI1LCAwLjEyNSwgMC4xMjUpKTtcblx0bWVzaC5wb3NpdGlvbi55ID0gMC41O1xuXHRtZXNoLnVwZGF0ZU1hdHJpeCgpO1xuXG5cdGFycm93R2VvbWV0cnkubWVyZ2UobWVzaC5nZW9tZXRyeSwgbWVzaC5tYXRyaXgpO1xuXG5cdHZhciBsaW5lWEdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cdGxpbmVYR2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKFswLCAwLCAwLCAxLCAwLCAwXSwgMykpO1xuXG5cdHZhciBsaW5lWUdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cdGxpbmVZR2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKFswLCAwLCAwLCAwLCAxLCAwXSwgMykpO1xuXG5cdHZhciBsaW5lWkdlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG5cdGxpbmVaR2VvbWV0cnkuYWRkQXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKFswLCAwLCAwLCAwLCAwLCAxXSwgMykpO1xuXG5cdHRoaXMuaGFuZGxlR2l6bW9zID0ge1xuXG5cdFx0WDogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKGFycm93R2VvbWV0cnksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pKSwgWzAuNSwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV0sXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobGluZVhHZW9tZXRyeSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMDAwIH0pKV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKGFycm93R2VvbWV0cnksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4MDBmZjAwIH0pKSwgWzAsIDAuNSwgMF1dLFxuXHRcdFx0W25ldyBUSFJFRS5MaW5lKGxpbmVZR2VvbWV0cnksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweDAwZmYwMCB9KSldXG5cdFx0XSxcblxuXHRcdFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KSksIFswLCAwLCAwLjVdLCBbTWF0aC5QSSAvIDIsIDAsIDBdXSxcblx0XHRcdFtuZXcgVEhSRUUuTGluZShsaW5lWkdlb21ldHJ5LCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSkpXVxuXHRcdF0sXG5cblx0XHRYWVo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQm94QnVmZmVyR2VvbWV0cnkoMC4xMjUsIDAuMTI1LCAwLjEyNSksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZmZmLCBvcGFjaXR5OiAwLjI1IH0pKV1cblx0XHRdXG5cblx0fTtcblxuXHR0aGlzLnBpY2tlckdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSgwLjIsIDAsIDEsIDQsIDEsIGZhbHNlKSwgcGlja2VyTWF0ZXJpYWwpLCBbMC42LCAwLCAwXSwgWzAsIDAsIC0gTWF0aC5QSSAvIDJdXVxuXHRcdF0sXG5cblx0XHRZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAuNiwgMF1dXG5cdFx0XSxcblxuXHRcdFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuQ3lsaW5kZXJCdWZmZXJHZW9tZXRyeSgwLjIsIDAsIDEsIDQsIDEsIGZhbHNlKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMC42XSwgW01hdGguUEkgLyAyLCAwLCAwXV1cblx0XHRdLFxuXG5cdFx0WFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40LCAwLjQpLCBwaWNrZXJNYXRlcmlhbCldXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5zZXRBY3RpdmVQbGFuZSA9IGZ1bmN0aW9uIChheGlzLCBleWUpIHtcblxuXHRcdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0XHRleWUuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZSh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbih0aGlzLnBsYW5lc1tcIlhZXCJdLm1hdHJpeFdvcmxkKSkpO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFwiKSB7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXHRcdFx0aWYgKE1hdGguYWJzKGV5ZS55KSA+IE1hdGguYWJzKGV5ZS56KSkgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJZXCIpIHtcblxuXHRcdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFlcIl07XG5cdFx0XHRpZiAoTWF0aC5hYnMoZXllLngpID4gTWF0aC5hYnMoZXllLnopKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJZWlwiXTtcblxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSBcIlpcIikge1xuXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWlwiXTtcblx0XHRcdGlmIChNYXRoLmFicyhleWUueCkgPiBNYXRoLmFicyhleWUueSkpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIllaXCJdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFlaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZWkVcIl07XG5cblx0fTtcblxuXHR0aGlzLmluaXQoKTtcblxufTtcblxuVHJhbnNmb3JtR2l6bW9TY2FsZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRyYW5zZm9ybUdpem1vLnByb3RvdHlwZSk7XG5UcmFuc2Zvcm1HaXptb1NjYWxlLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRyYW5zZm9ybUdpem1vU2NhbGU7XG5cbmV4cG9ydCBmdW5jdGlvbiBUcmFuc2Zvcm1Db250cm9scyhjYW1lcmEsIGRvbUVsZW1lbnQpIHtcblxuXHQvLyBUT0RPOiBNYWtlIG5vbi11bmlmb3JtIHNjYWxlIGFuZCByb3RhdGUgcGxheSBuaWNlIGluIGhpZXJhcmNoaWVzXG5cdC8vIFRPRE86IEFERCBSWFlaIGNvbnRvbFxuXG5cdFRIUkVFLk9iamVjdDNELmNhbGwodGhpcyk7XG5cblx0ZG9tRWxlbWVudCA9IChkb21FbGVtZW50ICE9PSB1bmRlZmluZWQpID8gZG9tRWxlbWVudCA6IGRvY3VtZW50O1xuXG5cdHRoaXMub2JqZWN0ID0gdW5kZWZpbmVkO1xuXHR0aGlzLnZpc2libGUgPSBmYWxzZTtcblx0dGhpcy50cmFuc2xhdGlvblNuYXAgPSBudWxsO1xuXHR0aGlzLnJvdGF0aW9uU25hcCA9IG51bGw7XG5cdHRoaXMuc3BhY2UgPSBcIndvcmxkXCI7XG5cdHRoaXMuc2l6ZSA9IDE7XG5cdHRoaXMuYXhpcyA9IG51bGw7XG5cblx0dmFyIHNjb3BlID0gdGhpcztcblxuXHR2YXIgX21vZGUgPSBcInRyYW5zbGF0ZVwiO1xuXHR2YXIgX2RyYWdnaW5nID0gZmFsc2U7XG5cdHZhciBfZ2l6bW8gPSB7XG5cblx0XHRcInRyYW5zbGF0ZVwiOiBuZXcgVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUoKSxcblx0XHRcInJvdGF0ZVwiOiBuZXcgVHJhbnNmb3JtR2l6bW9Sb3RhdGUoKSxcblx0XHRcInNjYWxlXCI6IG5ldyBUcmFuc2Zvcm1HaXptb1NjYWxlKClcblx0fTtcblxuXHRmb3IgKHZhciB0eXBlIGluIF9naXptbykge1xuXG5cdFx0dmFyIGdpem1vT2JqID0gX2dpem1vW3R5cGVdO1xuXG5cdFx0Z2l6bW9PYmoudmlzaWJsZSA9ICh0eXBlID09PSBfbW9kZSk7XG5cdFx0dGhpcy5hZGQoZ2l6bW9PYmopO1xuXG5cdH1cblxuXHR2YXIgY2hhbmdlRXZlbnQgPSB7IHR5cGU6IFwiY2hhbmdlXCIgfTtcblx0dmFyIG1vdXNlRG93bkV2ZW50ID0geyB0eXBlOiBcIm1vdXNlRG93blwiIH07XG5cdHZhciBtb3VzZVVwRXZlbnQgPSB7IHR5cGU6IFwibW91c2VVcFwiLCBtb2RlOiBfbW9kZSB9O1xuXHR2YXIgb2JqZWN0Q2hhbmdlRXZlbnQgPSB7IHR5cGU6IFwib2JqZWN0Q2hhbmdlXCIgfTtcblxuXHR2YXIgcmF5ID0gbmV3IFRIUkVFLlJheWNhc3RlcigpO1xuXHR2YXIgcG9pbnRlclZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cblx0dmFyIHBvaW50ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0dmFyIHJvdGF0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIG9mZnNldFJvdGF0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIHNjYWxlID0gMTtcblxuXHR2YXIgbG9va0F0TWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0dmFyIGV5ZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0dmFyIHRlbXBNYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXHR2YXIgdGVtcFZlY3RvciA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB0ZW1wUXVhdGVybmlvbiA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cdHZhciB1bml0WCA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApO1xuXHR2YXIgdW5pdFkgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcblx0dmFyIHVuaXRaID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMSk7XG5cblx0dmFyIHF1YXRlcm5pb25YWVogPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHR2YXIgcXVhdGVybmlvblggPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHR2YXIgcXVhdGVybmlvblkgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHR2YXIgcXVhdGVybmlvblogPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHR2YXIgcXVhdGVybmlvbkUgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdHZhciBvbGRQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBvbGRTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBvbGRSb3RhdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cblx0dmFyIHBhcmVudFJvdGF0aW9uTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0dmFyIHBhcmVudFNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHR2YXIgd29ybGRQb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB3b3JsZFJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKCk7XG5cdHZhciB3b3JsZFJvdGF0aW9uTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0dmFyIGNhbVBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0dmFyIGNhbVJvdGF0aW9uID0gbmV3IFRIUkVFLkV1bGVyKCk7XG5cblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG9uUG9pbnRlckRvd24sIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBvblBvaW50ZXJEb3duLCBmYWxzZSk7XG5cblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uUG9pbnRlckhvdmVyLCBmYWxzZSk7XG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblBvaW50ZXJIb3ZlciwgZmFsc2UpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSk7XG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblBvaW50ZXJNb3ZlLCBmYWxzZSk7XG5cblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGxlYXZlXCIsIG9uUG9pbnRlclVwLCBmYWxzZSk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIG9uUG9pbnRlckRvd24pO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Qb2ludGVyRG93bik7XG5cblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Qb2ludGVySG92ZXIpO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblBvaW50ZXJIb3Zlcik7XG5cblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Qb2ludGVyTW92ZSk7XG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG9uUG9pbnRlck1vdmUpO1xuXG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBvblBvaW50ZXJVcCk7XG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgb25Qb2ludGVyVXApO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIG9uUG9pbnRlclVwKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCBvblBvaW50ZXJVcCk7XG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hsZWF2ZVwiLCBvblBvaW50ZXJVcCk7XG5cblx0fTtcblxuXHR0aGlzLmF0dGFjaCA9IGZ1bmN0aW9uIChvYmplY3QpIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuXHRcdHRoaXMudmlzaWJsZSA9IHRydWU7XG5cdFx0dGhpcy51cGRhdGUoKTtcblxuXHR9O1xuXG5cdHRoaXMuZGV0YWNoID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dGhpcy5vYmplY3QgPSB1bmRlZmluZWQ7XG5cdFx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdFx0dGhpcy5heGlzID0gbnVsbDtcblxuXHR9O1xuXG5cdHRoaXMuZ2V0TW9kZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHJldHVybiBfbW9kZTtcblxuXHR9O1xuXG5cdHRoaXMuc2V0TW9kZSA9IGZ1bmN0aW9uIChtb2RlKSB7XG5cblx0XHRfbW9kZSA9IG1vZGUgPyBtb2RlIDogX21vZGU7XG5cblx0XHRpZiAoX21vZGUgPT09IFwic2NhbGVcIikgc2NvcGUuc3BhY2UgPSBcImxvY2FsXCI7XG5cblx0XHRmb3IgKHZhciB0eXBlIGluIF9naXptbykgX2dpem1vW3R5cGVdLnZpc2libGUgPSAodHlwZSA9PT0gX21vZGUpO1xuXG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuXHR9O1xuXG5cdHRoaXMuc2V0VHJhbnNsYXRpb25TbmFwID0gZnVuY3Rpb24gKHRyYW5zbGF0aW9uU25hcCkge1xuXG5cdFx0c2NvcGUudHJhbnNsYXRpb25TbmFwID0gdHJhbnNsYXRpb25TbmFwO1xuXG5cdH07XG5cblx0dGhpcy5zZXRSb3RhdGlvblNuYXAgPSBmdW5jdGlvbiAocm90YXRpb25TbmFwKSB7XG5cblx0XHRzY29wZS5yb3RhdGlvblNuYXAgPSByb3RhdGlvblNuYXA7XG5cblx0fTtcblxuXHR0aGlzLnNldFNpemUgPSBmdW5jdGlvbiAoc2l6ZSkge1xuXG5cdFx0c2NvcGUuc2l6ZSA9IHNpemU7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuXHR9O1xuXG5cdHRoaXMuc2V0U3BhY2UgPSBmdW5jdGlvbiAoc3BhY2UpIHtcblxuXHRcdHNjb3BlLnNwYWNlID0gc3BhY2U7XG5cdFx0dGhpcy51cGRhdGUoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuXHR9O1xuXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0aWYgKHNjb3BlLm9iamVjdCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG5cblx0XHRzY29wZS5vYmplY3QudXBkYXRlTWF0cml4V29ybGQoKTtcblx0XHR3b3JsZFBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbihzY29wZS5vYmplY3QubWF0cml4V29ybGQpO1xuXHRcdHdvcmxkUm90YXRpb24uc2V0RnJvbVJvdGF0aW9uTWF0cml4KHRlbXBNYXRyaXguZXh0cmFjdFJvdGF0aW9uKHNjb3BlLm9iamVjdC5tYXRyaXhXb3JsZCkpO1xuXG5cdFx0Y2FtZXJhLnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG5cdFx0Y2FtUG9zaXRpb24uc2V0RnJvbU1hdHJpeFBvc2l0aW9uKGNhbWVyYS5tYXRyaXhXb3JsZCk7XG5cdFx0Y2FtUm90YXRpb24uc2V0RnJvbVJvdGF0aW9uTWF0cml4KHRlbXBNYXRyaXguZXh0cmFjdFJvdGF0aW9uKGNhbWVyYS5tYXRyaXhXb3JsZCkpO1xuXG5cdFx0c2NhbGUgPSB3b3JsZFBvc2l0aW9uLmRpc3RhbmNlVG8oY2FtUG9zaXRpb24pIC8gNiAqIHNjb3BlLnNpemU7XG5cdFx0dGhpcy5wb3NpdGlvbi5jb3B5KHdvcmxkUG9zaXRpb24pO1xuXHRcdHRoaXMuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xuXG5cdFx0aWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKSB7XG5cblx0XHRcdGV5ZS5jb3B5KGNhbVBvc2l0aW9uKS5zdWIod29ybGRQb3NpdGlvbikubm9ybWFsaXplKCk7XG5cblx0XHR9IGVsc2UgaWYgKGNhbWVyYSBpbnN0YW5jZW9mIFRIUkVFLk9ydGhvZ3JhcGhpY0NhbWVyYSkge1xuXG5cdFx0XHRleWUuY29weShjYW1Qb3NpdGlvbikubm9ybWFsaXplKCk7XG5cblx0XHR9XG5cblx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRfZ2l6bW9bX21vZGVdLnVwZGF0ZSh3b3JsZFJvdGF0aW9uLCBleWUpO1xuXG5cdFx0fSBlbHNlIGlmIChzY29wZS5zcGFjZSA9PT0gXCJ3b3JsZFwiKSB7XG5cblx0XHRcdF9naXptb1tfbW9kZV0udXBkYXRlKG5ldyBUSFJFRS5FdWxlcigpLCBleWUpO1xuXG5cdFx0fVxuXG5cdFx0X2dpem1vW19tb2RlXS5oaWdobGlnaHQoc2NvcGUuYXhpcyk7XG5cblx0fTtcblxuXHRmdW5jdGlvbiBvblBvaW50ZXJIb3ZlcihldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLm9iamVjdCA9PT0gdW5kZWZpbmVkIHx8IF9kcmFnZ2luZyA9PT0gdHJ1ZSB8fCAoZXZlbnQuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSkgcmV0dXJuO1xuXG5cdFx0dmFyIHBvaW50ZXIgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cblx0XHR2YXIgaW50ZXJzZWN0ID0gaW50ZXJzZWN0T2JqZWN0cyhwb2ludGVyLCBfZ2l6bW9bX21vZGVdLnBpY2tlcnMuY2hpbGRyZW4pO1xuXG5cdFx0dmFyIGF4aXMgPSBudWxsO1xuXG5cdFx0aWYgKGludGVyc2VjdCkge1xuXG5cdFx0XHRheGlzID0gaW50ZXJzZWN0Lm9iamVjdC5uYW1lO1xuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLmF4aXMgIT09IGF4aXMpIHtcblxuXHRcdFx0c2NvcGUuYXhpcyA9IGF4aXM7XG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblBvaW50ZXJEb3duKGV2ZW50KSB7XG5cblx0XHRpZiAoc2NvcGUub2JqZWN0ID09PSB1bmRlZmluZWQgfHwgX2RyYWdnaW5nID09PSB0cnVlIHx8IChldmVudC5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBldmVudC5idXR0b24gIT09IDApKSByZXR1cm47XG5cblx0XHR2YXIgcG9pbnRlciA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuXHRcdGlmIChwb2ludGVyLmJ1dHRvbiA9PT0gMCB8fCBwb2ludGVyLmJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG5cblx0XHRcdHZhciBpbnRlcnNlY3QgPSBpbnRlcnNlY3RPYmplY3RzKHBvaW50ZXIsIF9naXptb1tfbW9kZV0ucGlja2Vycy5jaGlsZHJlbik7XG5cblx0XHRcdGlmIChpbnRlcnNlY3QpIHtcblxuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KG1vdXNlRG93bkV2ZW50KTtcblxuXHRcdFx0XHRzY29wZS5heGlzID0gaW50ZXJzZWN0Lm9iamVjdC5uYW1lO1xuXG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdFx0XHRcdGV5ZS5jb3B5KGNhbVBvc2l0aW9uKS5zdWIod29ybGRQb3NpdGlvbikubm9ybWFsaXplKCk7XG5cblx0XHRcdFx0X2dpem1vW19tb2RlXS5zZXRBY3RpdmVQbGFuZShzY29wZS5heGlzLCBleWUpO1xuXG5cdFx0XHRcdHZhciBwbGFuZUludGVyc2VjdCA9IGludGVyc2VjdE9iamVjdHMocG9pbnRlciwgW19naXptb1tfbW9kZV0uYWN0aXZlUGxhbmVdKTtcblxuXHRcdFx0XHRpZiAocGxhbmVJbnRlcnNlY3QpIHtcblxuXHRcdFx0XHRcdG9sZFBvc2l0aW9uLmNvcHkoc2NvcGUub2JqZWN0LnBvc2l0aW9uKTtcblx0XHRcdFx0XHRvbGRTY2FsZS5jb3B5KHNjb3BlLm9iamVjdC5zY2FsZSk7XG5cblx0XHRcdFx0XHRvbGRSb3RhdGlvbk1hdHJpeC5leHRyYWN0Um90YXRpb24oc2NvcGUub2JqZWN0Lm1hdHJpeCk7XG5cdFx0XHRcdFx0d29ybGRSb3RhdGlvbk1hdHJpeC5leHRyYWN0Um90YXRpb24oc2NvcGUub2JqZWN0Lm1hdHJpeFdvcmxkKTtcblxuXHRcdFx0XHRcdHBhcmVudFJvdGF0aW9uTWF0cml4LmV4dHJhY3RSb3RhdGlvbihzY29wZS5vYmplY3QucGFyZW50Lm1hdHJpeFdvcmxkKTtcblx0XHRcdFx0XHRwYXJlbnRTY2FsZS5zZXRGcm9tTWF0cml4U2NhbGUodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHNjb3BlLm9iamVjdC5wYXJlbnQubWF0cml4V29ybGQpKTtcblxuXHRcdFx0XHRcdG9mZnNldC5jb3B5KHBsYW5lSW50ZXJzZWN0LnBvaW50KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdF9kcmFnZ2luZyA9IHRydWU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uUG9pbnRlck1vdmUoZXZlbnQpIHtcblxuXHRcdGlmIChzY29wZS5vYmplY3QgPT09IHVuZGVmaW5lZCB8fCBzY29wZS5heGlzID09PSBudWxsIHx8IF9kcmFnZ2luZyA9PT0gZmFsc2UgfHwgKGV2ZW50LmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkpIHJldHVybjtcblxuXHRcdHZhciBwb2ludGVyID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG5cdFx0dmFyIHBsYW5lSW50ZXJzZWN0ID0gaW50ZXJzZWN0T2JqZWN0cyhwb2ludGVyLCBbX2dpem1vW19tb2RlXS5hY3RpdmVQbGFuZV0pO1xuXG5cdFx0aWYgKHBsYW5lSW50ZXJzZWN0ID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdHBvaW50LmNvcHkocGxhbmVJbnRlcnNlY3QucG9pbnQpO1xuXG5cdFx0aWYgKF9tb2RlID09PSBcInRyYW5zbGF0ZVwiKSB7XG5cblx0XHRcdHBvaW50LnN1YihvZmZzZXQpO1xuXHRcdFx0cG9pbnQubXVsdGlwbHkocGFyZW50U2NhbGUpO1xuXG5cdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2Uod29ybGRSb3RhdGlvbk1hdHJpeCkpO1xuXG5cdFx0XHRcdGlmIChzY29wZS5heGlzLnNlYXJjaChcIlhcIikgPT09IC0gMSkgcG9pbnQueCA9IDA7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzLnNlYXJjaChcIllcIikgPT09IC0gMSkgcG9pbnQueSA9IDA7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzLnNlYXJjaChcIlpcIikgPT09IC0gMSkgcG9pbnQueiA9IDA7XG5cblx0XHRcdFx0cG9pbnQuYXBwbHlNYXRyaXg0KG9sZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weShvbGRQb3NpdGlvbik7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5hZGQocG9pbnQpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChzY29wZS5zcGFjZSA9PT0gXCJ3b3JsZFwiIHx8IHNjb3BlLmF4aXMuc2VhcmNoKFwiWFlaXCIpICE9PSAtIDEpIHtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJYXCIpID09PSAtIDEpIHBvaW50LnggPSAwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJZXCIpID09PSAtIDEpIHBvaW50LnkgPSAwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJaXCIpID09PSAtIDEpIHBvaW50LnogPSAwO1xuXG5cdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2UocGFyZW50Um90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uY29weShvbGRQb3NpdGlvbik7XG5cdFx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5hZGQocG9pbnQpO1xuXG5cdFx0XHR9XG5cblx0XHRcdGlmIChzY29wZS50cmFuc2xhdGlvblNuYXAgIT09IG51bGwpIHtcblxuXHRcdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2Uod29ybGRSb3RhdGlvbk1hdHJpeCkpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJYXCIpICE9PSAtIDEpIHNjb3BlLm9iamVjdC5wb3NpdGlvbi54ID0gTWF0aC5yb3VuZChzY29wZS5vYmplY3QucG9zaXRpb24ueCAvIHNjb3BlLnRyYW5zbGF0aW9uU25hcCkgKiBzY29wZS50cmFuc2xhdGlvblNuYXA7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzLnNlYXJjaChcIllcIikgIT09IC0gMSkgc2NvcGUub2JqZWN0LnBvc2l0aW9uLnkgPSBNYXRoLnJvdW5kKHNjb3BlLm9iamVjdC5wb3NpdGlvbi55IC8gc2NvcGUudHJhbnNsYXRpb25TbmFwKSAqIHNjb3BlLnRyYW5zbGF0aW9uU25hcDtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWlwiKSAhPT0gLSAxKSBzY29wZS5vYmplY3QucG9zaXRpb24ueiA9IE1hdGgucm91bmQoc2NvcGUub2JqZWN0LnBvc2l0aW9uLnogLyBzY29wZS50cmFuc2xhdGlvblNuYXApICogc2NvcGUudHJhbnNsYXRpb25TbmFwO1xuXG5cdFx0XHRcdGlmIChzY29wZS5zcGFjZSA9PT0gXCJsb2NhbFwiKSB7XG5cblx0XHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uYXBwbHlNYXRyaXg0KHdvcmxkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmIChfbW9kZSA9PT0gXCJzY2FsZVwiKSB7XG5cblx0XHRcdHBvaW50LnN1YihvZmZzZXQpO1xuXHRcdFx0cG9pbnQubXVsdGlwbHkocGFyZW50U2NhbGUpO1xuXG5cdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlhZWlwiKSB7XG5cblx0XHRcdFx0XHRzY2FsZSA9IDEgKyAoKHBvaW50LnkpIC8gTWF0aC5tYXgob2xkU2NhbGUueCwgb2xkU2NhbGUueSwgb2xkU2NhbGUueikpO1xuXG5cdFx0XHRcdFx0c2NvcGUub2JqZWN0LnNjYWxlLnggPSBvbGRTY2FsZS54ICogc2NhbGU7XG5cdFx0XHRcdFx0c2NvcGUub2JqZWN0LnNjYWxlLnkgPSBvbGRTY2FsZS55ICogc2NhbGU7XG5cdFx0XHRcdFx0c2NvcGUub2JqZWN0LnNjYWxlLnogPSBvbGRTY2FsZS56ICogc2NhbGU7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2Uod29ybGRSb3RhdGlvbk1hdHJpeCkpO1xuXG5cdFx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWFwiKSBzY29wZS5vYmplY3Quc2NhbGUueCA9IG9sZFNjYWxlLnggKiAoMSArIHBvaW50LnggLyBvbGRTY2FsZS54KTtcblx0XHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJZXCIpIHNjb3BlLm9iamVjdC5zY2FsZS55ID0gb2xkU2NhbGUueSAqICgxICsgcG9pbnQueSAvIG9sZFNjYWxlLnkpO1xuXHRcdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlpcIikgc2NvcGUub2JqZWN0LnNjYWxlLnogPSBvbGRTY2FsZS56ICogKDEgKyBwb2ludC56IC8gb2xkU2NhbGUueik7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKF9tb2RlID09PSBcInJvdGF0ZVwiKSB7XG5cblx0XHRcdHBvaW50LnN1Yih3b3JsZFBvc2l0aW9uKTtcblx0XHRcdHBvaW50Lm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblx0XHRcdHRlbXBWZWN0b3IuY29weShvZmZzZXQpLnN1Yih3b3JsZFBvc2l0aW9uKTtcblx0XHRcdHRlbXBWZWN0b3IubXVsdGlwbHkocGFyZW50U2NhbGUpO1xuXG5cdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJFXCIpIHtcblxuXHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKGxvb2tBdE1hdHJpeCkpO1xuXHRcdFx0XHR0ZW1wVmVjdG9yLmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2UobG9va0F0TWF0cml4KSk7XG5cblx0XHRcdFx0cm90YXRpb24uc2V0KE1hdGguYXRhbjIocG9pbnQueiwgcG9pbnQueSksIE1hdGguYXRhbjIocG9pbnQueCwgcG9pbnQueiksIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCkpO1xuXHRcdFx0XHRvZmZzZXRSb3RhdGlvbi5zZXQoTWF0aC5hdGFuMih0ZW1wVmVjdG9yLnosIHRlbXBWZWN0b3IueSksIE1hdGguYXRhbjIodGVtcFZlY3Rvci54LCB0ZW1wVmVjdG9yLnopLCBNYXRoLmF0YW4yKHRlbXBWZWN0b3IueSwgdGVtcFZlY3Rvci54KSk7XG5cblx0XHRcdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbVJvdGF0aW9uTWF0cml4KHRlbXBNYXRyaXguZ2V0SW52ZXJzZShwYXJlbnRSb3RhdGlvbk1hdHJpeCkpO1xuXG5cdFx0XHRcdHF1YXRlcm5pb25FLnNldEZyb21BeGlzQW5nbGUoZXllLCByb3RhdGlvbi56IC0gb2Zmc2V0Um90YXRpb24ueik7XG5cdFx0XHRcdHF1YXRlcm5pb25YWVouc2V0RnJvbVJvdGF0aW9uTWF0cml4KHdvcmxkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25FKTtcblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblhZWik7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuYXhpcyA9PT0gXCJYWVpFXCIpIHtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uRS5zZXRGcm9tRXVsZXIocG9pbnQuY2xvbmUoKS5jcm9zcyh0ZW1wVmVjdG9yKS5ub3JtYWxpemUoKSk7IC8vIHJvdGF0aW9uIGF4aXNcblxuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5zZXRGcm9tUm90YXRpb25NYXRyaXgodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHBhcmVudFJvdGF0aW9uTWF0cml4KSk7XG5cdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUocXVhdGVybmlvbkUsIC0gcG9pbnQuY2xvbmUoKS5hbmdsZVRvKHRlbXBWZWN0b3IpKTtcblx0XHRcdFx0cXVhdGVybmlvblhZWi5zZXRGcm9tUm90YXRpb25NYXRyaXgod29ybGRSb3RhdGlvbk1hdHJpeCk7XG5cblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblgpO1xuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWFlaKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QucXVhdGVybmlvbi5jb3B5KHRlbXBRdWF0ZXJuaW9uKTtcblxuXHRcdFx0fSBlbHNlIGlmIChzY29wZS5zcGFjZSA9PT0gXCJsb2NhbFwiKSB7XG5cblx0XHRcdFx0cG9pbnQuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZSh3b3JsZFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0dGVtcFZlY3Rvci5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRyb3RhdGlvbi5zZXQoTWF0aC5hdGFuMihwb2ludC56LCBwb2ludC55KSwgTWF0aC5hdGFuMihwb2ludC54LCBwb2ludC56KSwgTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KSk7XG5cdFx0XHRcdG9mZnNldFJvdGF0aW9uLnNldChNYXRoLmF0YW4yKHRlbXBWZWN0b3IueiwgdGVtcFZlY3Rvci55KSwgTWF0aC5hdGFuMih0ZW1wVmVjdG9yLngsIHRlbXBWZWN0b3IueiksIE1hdGguYXRhbjIodGVtcFZlY3Rvci55LCB0ZW1wVmVjdG9yLngpKTtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uWFlaLnNldEZyb21Sb3RhdGlvbk1hdHJpeChvbGRSb3RhdGlvbk1hdHJpeCk7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnJvdGF0aW9uU25hcCAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0cXVhdGVybmlvblguc2V0RnJvbUF4aXNBbmdsZSh1bml0WCwgTWF0aC5yb3VuZCgocm90YXRpb24ueCAtIG9mZnNldFJvdGF0aW9uLngpIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblkuc2V0RnJvbUF4aXNBbmdsZSh1bml0WSwgTWF0aC5yb3VuZCgocm90YXRpb24ueSAtIG9mZnNldFJvdGF0aW9uLnkpIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0WiwgTWF0aC5yb3VuZCgocm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUodW5pdFgsIHJvdGF0aW9uLnggLSBvZmZzZXRSb3RhdGlvbi54KTtcblx0XHRcdFx0XHRxdWF0ZXJuaW9uWS5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRZLCByb3RhdGlvbi55IC0gb2Zmc2V0Um90YXRpb24ueSk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0Wiwgcm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJYXCIpIHF1YXRlcm5pb25YWVoubXVsdGlwbHlRdWF0ZXJuaW9ucyhxdWF0ZXJuaW9uWFlaLCBxdWF0ZXJuaW9uWCk7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIllcIikgcXVhdGVybmlvblhZWi5tdWx0aXBseVF1YXRlcm5pb25zKHF1YXRlcm5pb25YWVosIHF1YXRlcm5pb25ZKTtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWlwiKSBxdWF0ZXJuaW9uWFlaLm11bHRpcGx5UXVhdGVybmlvbnMocXVhdGVybmlvblhZWiwgcXVhdGVybmlvblopO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkocXVhdGVybmlvblhZWik7XG5cblx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuc3BhY2UgPT09IFwid29ybGRcIikge1xuXG5cdFx0XHRcdHJvdGF0aW9uLnNldChNYXRoLmF0YW4yKHBvaW50LnosIHBvaW50LnkpLCBNYXRoLmF0YW4yKHBvaW50LngsIHBvaW50LnopLCBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpKTtcblx0XHRcdFx0b2Zmc2V0Um90YXRpb24uc2V0KE1hdGguYXRhbjIodGVtcFZlY3Rvci56LCB0ZW1wVmVjdG9yLnkpLCBNYXRoLmF0YW4yKHRlbXBWZWN0b3IueCwgdGVtcFZlY3Rvci56KSwgTWF0aC5hdGFuMih0ZW1wVmVjdG9yLnksIHRlbXBWZWN0b3IueCkpO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmdldEludmVyc2UocGFyZW50Um90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRpZiAoc2NvcGUucm90YXRpb25TbmFwICE9PSBudWxsKSB7XG5cblx0XHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRYLCBNYXRoLnJvdW5kKChyb3RhdGlvbi54IC0gb2Zmc2V0Um90YXRpb24ueCkgLyBzY29wZS5yb3RhdGlvblNuYXApICogc2NvcGUucm90YXRpb25TbmFwKTtcblx0XHRcdFx0XHRxdWF0ZXJuaW9uWS5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRZLCBNYXRoLnJvdW5kKChyb3RhdGlvbi55IC0gb2Zmc2V0Um90YXRpb24ueSkgLyBzY29wZS5yb3RhdGlvblNuYXApICogc2NvcGUucm90YXRpb25TbmFwKTtcblx0XHRcdFx0XHRxdWF0ZXJuaW9uWi5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRaLCBNYXRoLnJvdW5kKChyb3RhdGlvbi56IC0gb2Zmc2V0Um90YXRpb24ueikgLyBzY29wZS5yb3RhdGlvblNuYXApICogc2NvcGUucm90YXRpb25TbmFwKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0cXVhdGVybmlvblguc2V0RnJvbUF4aXNBbmdsZSh1bml0WCwgcm90YXRpb24ueCAtIG9mZnNldFJvdGF0aW9uLngpO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25ZLnNldEZyb21BeGlzQW5nbGUodW5pdFksIHJvdGF0aW9uLnkgLSBvZmZzZXRSb3RhdGlvbi55KTtcblx0XHRcdFx0XHRxdWF0ZXJuaW9uWi5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRaLCByb3RhdGlvbi56IC0gb2Zmc2V0Um90YXRpb24ueik7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHF1YXRlcm5pb25YWVouc2V0RnJvbVJvdGF0aW9uTWF0cml4KHdvcmxkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlhcIikgdGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblgpO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJZXCIpIHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25ZKTtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWlwiKSB0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWik7XG5cblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblhZWik7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQob2JqZWN0Q2hhbmdlRXZlbnQpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblBvaW50ZXJVcChldmVudCkge1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBNb3VzZUV2ZW50IG9uIG1vYmlsZVxuXG5cdFx0aWYgKGV2ZW50LmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXG5cdFx0aWYgKF9kcmFnZ2luZyAmJiAoc2NvcGUuYXhpcyAhPT0gbnVsbCkpIHtcblxuXHRcdFx0bW91c2VVcEV2ZW50Lm1vZGUgPSBfbW9kZTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQobW91c2VVcEV2ZW50KTtcblxuXHRcdH1cblxuXHRcdF9kcmFnZ2luZyA9IGZhbHNlO1xuXG5cdFx0aWYgKCdUb3VjaEV2ZW50JyBpbiB3aW5kb3cgJiYgZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XG5cblx0XHRcdC8vIEZvcmNlIFwicm9sbG92ZXJcIlxuXG5cdFx0XHRzY29wZS5heGlzID0gbnVsbDtcblx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHRvblBvaW50ZXJIb3ZlcihldmVudCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGludGVyc2VjdE9iamVjdHMocG9pbnRlciwgb2JqZWN0cykge1xuXG5cdFx0dmFyIHJlY3QgPSBkb21FbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHZhciB4ID0gKHBvaW50ZXIuY2xpZW50WCAtIHJlY3QubGVmdCkgLyByZWN0LndpZHRoO1xuXHRcdHZhciB5ID0gKHBvaW50ZXIuY2xpZW50WSAtIHJlY3QudG9wKSAvIHJlY3QuaGVpZ2h0O1xuXG5cdFx0cG9pbnRlclZlY3Rvci5zZXQoKHggKiAyKSAtIDEsIC0gKHkgKiAyKSArIDEpO1xuXHRcdHJheS5zZXRGcm9tQ2FtZXJhKHBvaW50ZXJWZWN0b3IsIGNhbWVyYSk7XG5cblx0XHR2YXIgaW50ZXJzZWN0aW9ucyA9IHJheS5pbnRlcnNlY3RPYmplY3RzKG9iamVjdHMsIHRydWUpO1xuXHRcdHJldHVybiBpbnRlcnNlY3Rpb25zWzBdID8gaW50ZXJzZWN0aW9uc1swXSA6IGZhbHNlO1xuXG5cdH1cblxufTtcblxuVHJhbnNmb3JtQ29udHJvbHMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUpO1xuVHJhbnNmb3JtQ29udHJvbHMucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHJhbnNmb3JtQ29udHJvbHM7XG5cbiIsIi8qXHJcbkFkZCBldmVudHMgdG8gYSBjbGFzcyBvciBvYmplY3Q6XHJcbiAgICBjbGFzcyBNeUNsYXNzIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3Vic2NyaWJlTWl4aW4odGhpcyk7IC8vIEFkZCB0aGUgbWl4aW5nIGZ1bmN0aW9ucyB0byB0aGUgY2xhc3NcclxuICAgICAgICAgICAgLi4uXHJcbiAgICAgICAgICAgIHRoaXMudHJpZ2dlcignc29tZXRoaW5nJywgeyBvd25lcjogdGhpcywgY29udGVudDogJ3RoYXQnfSk7IC8vIHRyaWdnZXIgYW4gZXZlbnQgcGFzc2luZyBzb21lIGFyZ3VtZW50c1xyXG5cclxuU3Vic2NyaWJlIHRvIGV2ZW50cyBieSBkb2luZzpcclxuICAgIG15Q2xhc3Mub24oJ3NvbWV0aGluZycsIChhcmdzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coYXJncyk7XHJcbiAgICB9KTtcclxuXHJcblVuc3Vic2NyaWJlIHRvIGV2ZW50cyBieSBkb2luZzpcclxuICAgIG15Q2xhc3Mub2ZmKCdzb21ldGhpbmcnKTtcclxuXHJcbm9yIG1vcmUgcHJlc2ljZWxseTpcclxuICAgIG15Q2xhc3Mub2ZmKCdzb21ldGhpbmcnLCAoYXJncykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG4gICAgfSk7XHJcblxyXG5VbnN1YnNjcmliZSB0byBhbGwgZXZlbnRzIGJ5OlxyXG4gICAgbXlDbGFzcy5vZmZBbGwoKTtcclxuKi9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWJzY3JpYmVNaXhpbiAodGFyZ2V0KSB7XHJcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xyXG5cclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKHRhcmdldCwge1xyXG5cclxuICAgICAgICBvbiAodHlwZSwgZikge1xyXG4gICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB7fTtcclxuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xyXG4gICAgICAgICAgICBsaXN0ZW5lcnMuYWRkKGxpc3RlbmVyKTtcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBvZmYgKHR5cGUsIGYpIHtcclxuICAgICAgICAgICAgaWYgKGYpIHtcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShsaXN0ZW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSB0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb2ZmQWxsICgpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLmNsZWFyKCk7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgdHJpZ2dlciAoZXZlbnQsIC4uLmRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyW2V2ZW50XSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyW2V2ZW50XSguLi5kYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGxpc3RTdWJzY3JpcHRpb25zICgpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl19
