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
				geometry = new THREE.SphereGeometry(1, 50, 50);
			} else if (type == 1) {
				geometry = new THREE.BoxGeometry(1, 1, 1);
			} else if (type == 2) {
				geometry = new THREE.TorusKnotGeometry(1, 0.4, 64, 8);
			} else if (type == 3) {
				geometry = new THREE.PlaneGeometry(3, 3, 40, 40);
			} else if (type == 4) {
				geometry = new THREE.CylinderGeometry(1, 1, 3, 50);
			} else if (type == 5) {
				geometry = new THREE.IcosahedronGeometry();
			} else if (type == 6) {
				geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
			}

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

			for (var i = 0; i < scope.threeCanvas.data.textures.length; i++) {
				var property = 'iTexture' + i;
				scope.currentObj().material.uniforms[property].value = scope.threeCanvas.data.textures[i];
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCIvVXNlcnMvYjEwMTM4L3NoYWRlcm5pbmphL3NyYy9qcy9QbGF5ZXIuanMiLCIvVXNlcnMvYjEwMTM4L3NoYWRlcm5pbmphL3NyYy9qcy9SZW5kZXJQYXNzLmpzIiwiL1VzZXJzL2IxMDEzOC9zaGFkZXJuaW5qYS9zcmMvanMvVERhdGEuanMiLCIvVXNlcnMvYjEwMTM4L3NoYWRlcm5pbmphL3NyYy9qcy9UaHJlZUNhbnZhcy5qcyIsIi9Vc2Vycy9iMTAxMzgvc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL0xvYWRlci5qcyIsIi9Vc2Vycy9iMTAxMzgvc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL09yYml0Q29udHJvbHMuanMiLCIvVXNlcnMvYjEwMTM4L3NoYWRlcm5pbmphL3NyYy9qcy90b29scy9UcmFuc2Zvcm1Db250cm9scy5qcyIsIi9Vc2Vycy9iMTAxMzgvc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL21peGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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V0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDakcsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkYsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDckYsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7O0FBRXRHLFFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQy9ELFFBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsU0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRztHQUNEOzs7UUFqUlcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0xLLGVBQWU7Ozs7SUFLMUIsVUFBVTtBQUNYLFVBREMsVUFBVSxDQUNWLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7d0JBRDFFLFVBQVU7O0FBRXJCLE1BQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0FBQzFCLE1BQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1B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QUM7QUFDOUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzlELGdCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxRCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7QUFDNUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0FBQzFELGdCQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNyRyxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFFLENBQUM7QUFDcEcsZ0JBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSxDQUFDO1NBQ3ZHOzs7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QUFDLENBQUMsQ0FBQzs7QUFFL0MsT0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLEVBQUU7O0FBRXJCLFNBQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0FBQ25CLE9BQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzNCLE9BQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0dBRTNCOzs7O0FBSUQsTUFBSSxXQUFXLEdBQUcsU0FBZCxXQUFXLENBQWEsUUFBUSxFQUFFLE1BQU0sRUFBRTs7QUFFN0MsUUFBSyxJQUFJLElBQUksSUFBSSxRQUFRLEVBQUU7O0FBRTFCLFNBQUssQ0FBQyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUc7O0FBRXJDLFNBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQyxTQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDcEMsU0FBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVwQyxXQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQzs7QUFFbkIsU0FBSSxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN6RSxTQUFJLFFBQVEsRUFBRSxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FB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QUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUVoRyxLQUFJLGFBQWEsR0FBRyxJQUFJLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUMvQyxjQUFhLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxJQUFJLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7QUFFaEcsS0FBSSxDQUFDLFlBQVksR0FBRzs7QUFFbkIsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUMzRyxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDM0U7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksYUFBYSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFDcEYsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFF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QUFJLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRTFCLEtBQUksY0FBYyxHQUFHLFNBQWpCLGNBQWMsQ0FBYSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTs7QUFFbkQsTUFBSSxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7QUFDMUMsTUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDO0FBQ2xCLEtBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQzs7QUFFcEIsT0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUU7O0FBRW5DLE9BQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLE9BQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO0FBQy9HLE9BQUksTUFBTSxLQUFLLEdBQUcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDO0dBRS9HOztBQUVELFVBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pGLFNBQU8sUUFBUSxDQUFDO0VBRWhCLENBQUM7O0FBRUYsS0FBSSxDQUFDLFlBQVksR0FBRzs7QUFFbkIsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFjLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM3Rjs7QUFFRCxHQUFDLEVBQUUsQ0FDRixDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzdGOztBQUVELEdBQUMsRUFBRSxDQUNGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksY0FBYyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxpQkFBaUIsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDN0Y7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM5Rjs7QUFFRCxNQUFJLEVBQUUsQ0FDTCxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLGNBQWMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzNGOztFQUVELENBQUM7O0FBRUYsS0FBSSxDQUFDLFlBQVksR0FBRzs7QUFFbkIsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDdEk7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDeEg7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxD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L0MsY0FBYSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRWhHLEtBQUksQ0FBQyxZQUFZLEdBQUc7O0FBRW5CLEdBQUMsRUFBRSxDQUNGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFDM0csQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksaUJBQWlCLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzNFOztBQUVELEdBQUMsRUFBRSxDQUNGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLGFBQWEsQ0FBQyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ3BGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLGlCQUFpQixDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUMzRTs7QUFFRCxHQUFDLEVBQUUsQ0FDRixDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxF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RTt3QkFBdkIsUUFBUTs7QUFDYix3QkFBSSxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxVQUFVLEVBQUU7QUFDdkMsZ0NBQVEsQ0FBQyxLQUFLLE9BQUMsQ0FBZixRQUFRLEVBQVcsSUFBSSxDQUFDLENBQUM7cUJBQzVCO2lCQUNKOzs7Ozs7Ozs7Ozs7Ozs7U0FDSjs7QUFFRCx5QkFBaUIsRUFBQyw2QkFBRzs7Ozs7O0FBQ2pCLG1EQUFpQixTQUFTLGlIQUFFO3dCQUFuQixJQUFJOztBQUNULDJCQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNyQjs7Ozs7Ozs7Ozs7Ozs7O1NBQ0o7S0FDSixDQUFDLENBQUM7Q0FDTiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vZ2V0LWl0ZXJhdG9yXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ25cIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2NyZWF0ZVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnRpZXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3Qva2V5c1wiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9zZXRcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9PYmplY3QkZGVmaW5lUHJvcGVydHkgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIilbXCJkZWZhdWx0XCJdO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuXG4gICAgICBfT2JqZWN0JGRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KSgpO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3InKTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJC5jb3JlJykuT2JqZWN0LmFzc2lnbjsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGUoUCwgRCl7XG4gIHJldHVybiAkLmNyZWF0ZShQLCBEKTtcbn07IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhULCBEKXtcbiAgcmV0dXJuICQuc2V0RGVzY3MoVCwgRCk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTsiLCJyZXF1aXJlKCcuLi8uLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5rZXlzOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvJC5jb3JlJykuU2V0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgaGlkZSAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lQWxsICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIHN0cmljdE5ldyAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBkZWZpbmVkICAgICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJRCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ2lkJylcbiAgLCAkaGFzICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBpc09iamVjdCAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBzZXRTcGVjaWVzICAgPSByZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdFxuICAsIFNJWkUgICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJ1xuICAsIGlkICAgICAgICAgICA9IDA7XG5cbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighJGhhcyhpdCwgSUQpKXtcbiAgICAvLyBjYW4ndCBzZXQgaWQgdG8gZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgaWRcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3Npbmcgb2JqZWN0IGlkXG4gICAgaGlkZShpdCwgSUQsICsraWQpO1xuICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XG4gIH0gcmV0dXJuICdPJyArIGl0W0lEXTtcbn07XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgc3RyaWN0TmV3KHRoYXQsIEMsIE5BTUUpO1xuICAgICAgdGhhdC5faSA9ICQuY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGZvck9mICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yT2YodGhpcywgZmFsc2UsIGFyci5wdXNoLCBhcnIpO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc3RyaWN0TmV3ICAgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgaWYoIURFU0NSSVBUT1JTIHx8IHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBzdHJpY3ROZXcodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgIHRhcmdldC5fYyA9IG5ldyBCYXNlO1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRhcmdldFtBRERFUl0sIHRhcmdldCk7XG4gICAgfSk7XG4gICAgJC5lYWNoLmNhbGwoJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzJy5zcGxpdCgnLCcpLGZ1bmN0aW9uKEtFWSl7XG4gICAgICB2YXIgSVNfQURERVIgPSBLRVkgPT0gJ2FkZCcgfHwgS0VZID09ICdzZXQnO1xuICAgICAgaWYoS0VZIGluIHByb3RvICYmICEoSVNfV0VBSyAmJiBLRVkgPT0gJ2NsZWFyJykpaGlkZShDLnByb3RvdHlwZSwgS0VZLCBmdW5jdGlvbihhLCBiKXtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59OyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTsiLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgSVNfV1JBUCAgID0gdHlwZSAmICRleHBvcnQuV1xuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24ocGFyYW0pe1xuICAgICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEMgPyBuZXcgQyhwYXJhbSkgOiBDKHBhcmFtKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgaWYoSVNfUFJPVE8pKGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pKVtrZXldID0gb3V0O1xuICB9XG59O1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59OyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07IiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsIi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ25cbiAgICAsIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0S2V5cyAgICA9ICQuZ2V0S2V5c1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9sc1xuICAgICwgaXNFbnVtICAgICA9ICQuaXNFbnVtO1xuICB3aGlsZSgkJGxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdCgkJFtpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247IiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmhpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgY29yZSAgICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gY29yZVtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59OyIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBUeXBlRXJyb3IobmFtZSArIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgZ2V0ICAgICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXRlckZuID0gZ2V0KGl0KTtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICByZXR1cm4gYW5PYmplY3QoaXRlckZuLmNhbGwoaXQpKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpfSk7IiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigka2V5cyl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pOyIsbnVsbCwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTsiLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbkl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTsiLCJpbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAnLi90b29scy9PcmJpdENvbnRyb2xzJztcbmltcG9ydCB7IFRyYW5zZm9ybUNvbnRyb2xzIH0gZnJvbSAnLi90b29scy9UcmFuc2Zvcm1Db250cm9scyc7XG5pbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi9UaHJlZUNhbnZhcyc7XG5cblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG5cdGNvbnN0cnVjdG9yKGNhbnZhcykge1xuXHRcdHRoaXMubG9hZGVyID0gbmV3IFRIUkVFLk9iamVjdExvYWRlcigpO1xuXHRcdHRoaXMuc2NlbmUgPSBudWxsO1xuXHRcdHRoaXMuZW52U2NlbmUgPSBudWxsO1xuXHRcdHRoaXMudGhyZWVDYW52YXMgPSBjYW52YXM7XG5cdFx0dGhpcy5wcmV2VGltZSA9IDA7XG5cdFx0dGhpcy5jdXJPYmogPSBudWxsO1xuXHRcdHRoaXMuZGlyTGlnaHQgPSBudWxsO1xuXHR9XG5cblx0Y3VycmVudE9iaigpe1xuXHRcdGlmICh0aGlzLmN1ck9iaiAhPSBudWxsKXtcblx0XHRcdHJldHVybiB0aGlzLmN1ck9iajtcblx0XHR9XG5cblx0XHRsZXQgc2NvcGUgPSB0aGlzO1xuXHRcdHRoaXMuc2NlbmUudHJhdmVyc2UgKGZ1bmN0aW9uIChvYmplY3QpXG5cdFx0e1xuXHRcdFx0aWYgKG9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpXG5cdFx0XHR7XG5cdFx0XHRcdHNjb3BlLmN1ck9iaiA9IG9iamVjdDtcblx0XHRcdFx0cmV0dXJuIHNjb3BlLmN1ck9iajtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vc2hvdWxkIG5vdCBoYXBwZW4uXG5cdFx0Ly90aGlzLnNldE9iamVjdCgwKTtcblxuXHRcdHJldHVybiB0aGlzLmN1ck9iajtcblx0fVxuXG5cdGN1ck1hdGVyaWFsKCl7XG5cdFx0aWYgKHRoaXMuY3VyTWF0ICE9IG51bGwpe1xuXHRcdFx0cmV0dXJuIHRoaXMuY3VyTWF0O1xuXHRcdH1cblx0XHR0aGlzLmN1ck1hdCA9IHRoaXMuY3JlYXRlU2hhZGVyTWF0ZXJpYWwodGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgVGhyZWVDYW52YXMuRU1QVFlfRlJBR19TSEFERVIsIHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRIZWFkZXIoKSArIFRocmVlQ2FudmFzLkVNUFRZX1ZFUlRFWF9TSEFERVIpO1xuXHRcdHJldHVybiB0aGlzLmN1ck1hdDtcblx0fVxuXG5cbiAgICBjdXJWZXJ0ZXhTaGFkZXIoKXtcbiAgICAgICAgcmV0dXJuIFRocmVlQ2FudmFzLnJlbW92ZVNoYWRlckhlYWRlcih0aGlzLmN1cnJlbnRPYmooKS5tYXRlcmlhbC52ZXJ0ZXhTaGFkZXIpO1xuICAgIH1cblxuICAgIGN1ckZyYWdTYWhkZXIoKXtcbiAgICAgICAgcmV0dXJuIFRocmVlQ2FudmFzLnJlbW92ZVNoYWRlckhlYWRlcih0aGlzLmN1cnJlbnRPYmooKS5tYXRlcmlhbC5mcmFnbWVudFNoYWRlcik7XG4gICAgfVxuXG5cblx0dXBkYXRlQ3VyTWF0ZXJpYWwoZnJhZywgdmVydGV4KXtcblx0XHR0aGlzLmN1ck1hdGVyaWFsKCkudmVydGV4U2hhZGVyID0gdmVydGV4O1xuXHRcdHRoaXMuY3VyTWF0ZXJpYWwoKS5mcmFnbWVudFNoYWRlciA9IGZyYWc7XG5cdFx0dGhpcy5jdXJNYXRlcmlhbCgpLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0fVxuXG5cdGNyZWF0ZVNoYWRlck1hdGVyaWFsKGZyYWcsdmVydGV4KXtcblx0XHQgIHJldHVybiBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuXHRcdFx0dW5pZm9ybXM6IHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRVbmlmb3JtcygpLFxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogZnJhZ1xuXHRcdH0pO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0aWYgKHRoaXMuc2NlbmUgIT0gbnVsbCl7XG5cdFx0XHR3aGlsZSh0aGlzLnNjZW5lLmNoaWxkcmVuLmxlbmd0aCA+IDApeyBcblx0XHRcdFx0dGhpcy5zY2VuZS5yZW1vdmUodGhpcy5zY2VuZS5jaGlsZHJlblswXSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZW52U2NlbmUgIT0gbnVsbCl7XG5cdFx0XHR3aGlsZSh0aGlzLmVudlNjZW5lLmNoaWxkcmVuLmxlbmd0aCA+IDApeyBcblx0XHRcdFx0dGhpcy5lbnZTY2VuZS5yZW1vdmUodGhpcy5lbnZTY2VuZS5jaGlsZHJlblswXSk7IFxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHRoaXMuY3VyTWF0ID0gbnVsbDtcblx0XHR0aGlzLmN1ck9iaiA9IG51bGw7XG5cdH1cblxuXHRjcmVhdGVTY2VuZU9iamVjdCh0eXBlKXtcblx0XHR2YXIgZ2VvbWV0cnkgPSBudWxsO1xuXHRcdHZhciBwb3NpdGlvbiA9IG51bGw7XG5cdFx0dmFyIHBsYW5lID0gLTEuMDtcblx0XHR2YXIgcGxhbmVSID0gMTQuMDtcblx0XHRpZiAodHlwZSA9PSAwKXtcblx0XHRcdHBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoIDAsIHBsYW5lLCAwICk7XG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShwbGFuZVIsMC4xLHBsYW5lUik7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gMSl7XG5cdFx0XHR2YXIgaGVpZ2h0ID0gVEhSRUUuTWF0aC5yYW5kRmxvYXQoMC44LDgpO1xuXHRcdFx0cG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyggVEhSRUUuTWF0aC5yYW5kRmxvYXQoLXBsYW5lUiowLjUscGxhbmVSKjAuNSksIGhlaWdodCAvIDIuMCArIHBsYW5lLCBUSFJFRS5NYXRoLnJhbmRGbG9hdCgtcGxhbmVSKjAuNSxwbGFuZVIqMC41KSApO1xuXHRcdFx0dmFyIHdpZHRoID0gVEhSRUUuTWF0aC5yYW5kRmxvYXQoMC44LDEuNilcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCB3aWR0aCwgaGVpZ2h0LCB3aWR0aCApO1xuXHRcdH1cblxuXHRcdHZhciByY29sb3IgPSBuZXcgVEhSRUUuQ29sb3IoIDB4ZmZmZmZmICk7XG5cdFx0cmNvbG9yLnNldEhleCggVEhSRUUuTWF0aC5yYW5kRmxvYXQoMC41LDEuMCkgKiAweGZmZmZmZiApO1xuXHRcdGlmICh0eXBlID09IDApe1xuXHRcdFx0cmNvbG9yLnNldEhleCggMHg4ODg4ODggKTtcblx0XHR9XG5cdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hQaG9uZ01hdGVyaWFsKCB7IGNvbG9yOiByY29sb3IgfSApO1xuXHRcdHZhciBvYmplY3QgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0b2JqZWN0LmNhc3RTaGFkb3cgPSB0cnVlO1xuXHRcdG9iamVjdC5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcblx0XHRvYmplY3QucG9zaXRpb24uc2V0KHBvc2l0aW9uLngscG9zaXRpb24ueSxwb3NpdGlvbi56KTtcblx0XHR0aGlzLmVudlNjZW5lLmFkZCggb2JqZWN0ICk7XG5cdH1cblxuXHR1c2VMaWdodChmbGFnKXtcblx0XHRpZiAodGhpcy5lbnZTY2VuZSA9PSBudWxsKXtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgbGlnaHRPYmogPSB0aGlzLmVudlNjZW5lLmdldE9iamVjdEJ5TmFtZShcImRpckxpZ2h0XCIpO1xuXHRcdHRoaXMuZW52U2NlbmUucmVtb3ZlKCBsaWdodE9iaiApO1xuXHRcdGlmIChmbGFnKXtcblx0XHRcdHRoaXMuZGlyTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCggMHhmZmZmZmYsIDEuMCApO1xuXHRcdFx0dGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXQoIDEwLCAxMCwgMTAgKTtcblx0XHRcdHRoaXMuZGlyTGlnaHQudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xuXHRcdFx0Ly90aGlzLmRpckxpZ2h0LnNoYWRvd0NhbWVyYVZpc2libGUgPSB0cnVlO1xuXHRcdFx0dGhpcy5kaXJMaWdodC5jYXN0U2hhZG93ID0gdHJ1ZTtcblx0XHRcdHRoaXMuZGlyTGlnaHQubmFtZSA9IFwiZGlyTGlnaHRcIjtcblx0XHRcdHRoaXMuZW52U2NlbmUuYWRkKCB0aGlzLmRpckxpZ2h0ICk7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRW52U2NlbmUoKXtcblx0XHRpZiAodGhpcy5lbnZTY2VuZSAhPSBudWxsKXtcblx0XHRcdHdoaWxlKHRoaXMuZW52U2NlbmUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7IFxuXHRcdFx0XHR0aGlzLmVudlNjZW5lLnJlbW92ZSh0aGlzLmVudlNjZW5lLmNoaWxkcmVuWzBdKTsgXG5cdFx0XHR9XG5cdFx0fVxuXHRcdFxuXHRcdHRoaXMuZW52U2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblx0XHR0aGlzLmNyZWF0ZVNjZW5lT2JqZWN0KDApO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTQ7IGkrKyl7XG5cdFx0XHR0aGlzLmNyZWF0ZVNjZW5lT2JqZWN0KDEpO1xuXHRcdH1cblxuXHRcdHZhciBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4NDA0MDQwICk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcblx0XHR0aGlzLmVudlNjZW5lLmFkZCggbGlnaHQgKTtcblx0fVxuXG5cdGNsZWFyRW52U2NlbmUoKXtcblx0XHR0aGlzLmVudlNjZW5lID0gbnVsbDtcblx0XHR0aGlzLmRpckxpZ2h0ID0gbnVsbDtcblx0fVxuXHRcblxuXHRzZXRPYmplY3QodHlwZSl7XG5cdFx0Ly9jbGVhciBsYXN0XG5cdFx0Zm9yICggdmFyIGkgPSB0aGlzLnNjZW5lLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGkgLS0gKSB7XG5cdFx0XHR2YXIgb2JqID0gdGhpcy5zY2VuZS5jaGlsZHJlblsgaSBdO1xuXHRcdFx0aWYgKG9iaiBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpXG5cdFx0XHR7XG5cdFx0XHRcdHRoaXMuc2NlbmUucmVtb3ZlKG9iaik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0dmFyIGdlb21ldHJ5ID0gbnVsbDtcblx0XHRpZiAodHlwZSA9PSAwKXtcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KCAxLCA1MCwgNTAgKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAodHlwZSA9PSAxKXtcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KCAxLCAxLCAxICk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gMil7XG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Ub3J1c0tub3RHZW9tZXRyeSggMSwgMC40LCA2NCwgOCApO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlID09IDMpe1xuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeSgzLDMsNDAsNDApO1xuXHRcdH1cblx0XHRlbHNlIGlmICh0eXBlID09IDQpe1xuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSgxLDEsMyw1MCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gNSl7XG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KCk7XG5cdFx0fVxuXHRcdGVsc2UgaWYodHlwZSA9PSA2KXtcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzR2VvbWV0cnkoMSwwLjQsMTYsMTAwKTtcblx0XHR9XG5cblx0XHR0aGlzLmN1ck9iaiA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgdGhpcy5jdXJNYXRlcmlhbCgpICk7XG5cdFx0dGhpcy5jdXJPYmoubmFtZSA9IFwiTWVzaE9ialwiO1xuXHRcdHRoaXMuY3VyT2JqLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcblxuXHRcdGxldCBzY29wZSA9IHRoaXM7XG5cdFx0Ly8gdGhpcy5jdXJPYmoub25CZWZvcmVSZW5kZXIgPSBmdW5jdGlvbiggcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEsIGdlb21ldHJ5LCBtYXRlcmlhbCwgZ3JvdXAgKSB7XG5cdFx0Ly8gXHRtYXRlcmlhbC51bmlmb3Jtcy5pVGltZS52YWx1ZSA9IHBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMC4wOyBcblx0XHQvLyB9O1xuXHRcdFxuXHRcdHRoaXMuc2NlbmUuYWRkKHRoaXMuY3VyT2JqKTtcblx0fVxuXG5cdG5ld1NjZW5lKCl7XG5cdFx0dGhpcy5jbGVhcigpO1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblx0fVxuXG5cdGxvYWQoanNvbiwgZGF0YSkge1xuXHRcdHRoaXMuY2xlYXIoKTtcblx0XHR0aGlzLnNjZW5lID0gdGhpcy5sb2FkZXIucGFyc2UoanNvbi5zY2VuZSk7XG5cdFx0aWYgKGpzb24uZW52U2NlbmUgIT0gbnVsbCl7XG5cdFx0XHR0aGlzLmVudlNjZW5lID0gdGhpcy5sb2FkZXIucGFyc2UoanNvbi5lbnZTY2VuZSk7XG5cdFx0XHR0aGlzLmRpckxpZ2h0ID0gdGhpcy5lbnZTY2VuZS5nZXRPYmplY3RCeU5hbWUoIFwiZGlyTGlnaHRcIiApO1xuXHRcdH1cblx0XHR0aGlzLmN1ck1hdCA9IHRoaXMuY3VyTWF0ZXJpYWwoKTtcblx0XHR0aGlzLnVwZGF0ZUN1ck1hdGVyaWFsKGpzb24uZnJhZywganNvbi52ZXJ0KTtcblx0XHR0aGlzLmN1ck1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cdFx0XG5cdFx0dGhpcy51c2VMaWdodChkYXRhLnVzZUxpZ2h0KTtcblx0fVxuXG5cblx0dG9KU09OKCl7XG5cdFx0bGV0IHNjb3BlID0gdGhpcztcblx0XHR0aGlzLnNjZW5lLnRyYXZlcnNlIChmdW5jdGlvbiAob2JqZWN0KVxuXHRcdHtcblx0XHRcdGlmIChvYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAob2JqZWN0Lm1hdGVyaWFsIGluc3RhbmNlb2YgVEhSRUUuU2hhZGVyTWF0ZXJpYWwpe1xuXHRcdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NvcGUudGhyZWVDYW52YXMuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRcdFx0XHR2YXIgcHJvcGVydHkgPSAnaVRleHR1cmUnICsgaTtcblx0XHRcdFx0XHRcdG9iamVjdC5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRvYmplY3QubWF0ZXJpYWwudW5pZm9ybXMuaURlcHRoVGV4dHVyZS52YWx1ZSA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRtZXRhZGF0YToge30sXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZS50b0pTT04oKSxcblx0XHRcdGVudlNjZW5lOiB0aGlzLmVudlNjZW5lICE9IG51bGwgPyB0aGlzLmVudlNjZW5lLnRvSlNPTigpIDogbnVsbCxcblx0XHRcdGZyYWc6IHRoaXMuY3VyTWF0ZXJpYWwoKS5mcmFnbWVudFNoYWRlcixcblx0XHRcdHZlcnQ6IHRoaXMuY3VyTWF0ZXJpYWwoKS52ZXJ0ZXhTaGFkZXIsXG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZVVuaWZvcm1zKCl7XG5cdFx0bGV0IHNjb3BlID0gdGhpcztcblxuXHRcdHZhciBjdXJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLjA7XG5cdFx0aWYgKHNjb3BlLmRpckxpZ2h0ICE9IG51bGwpe1xuXHRcdFx0dGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXQoIDEwICogTWF0aC5zaW4oY3VyVGltZSksIDEwLCAxMCAqIE1hdGguY29zKGN1clRpbWUpICk7XG5cdFx0XHR0aGlzLmRpckxpZ2h0LnRhcmdldC5wb3NpdGlvbi5zZXQoIDAsIDAsIDAgKTtcblxuXHRcdFx0Ly9pZSBidWc/XG5cdFx0XHRpZiAoc2NvcGUuZGlyTGlnaHQucG9zaXRpb24ueCA8IDk5OTkpe1xuXHRcdFx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaUxpZ2h0RGlyZWN0aW9uLnZhbHVlID0gLXRoaXMuZGlyTGlnaHQucG9zaXRpb247XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gY3VyVGltZTtcblx0XHQvLyB0aGlzLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueCA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbnZhcy5jbGllbnRXaWR0aDtcblx0XHQvLyB0aGlzLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueSA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlDYW1lcmFOZWFyLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuY2FtZXJhLm5lYXI7XG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlDYW1lcmFGYXIudmFsdWUgPSBzY29wZS50aHJlZUNhbnZhcy5jYW1lcmEuZmFyO1xuXHRcdC8vIHRoaXMuY3VyTWF0ZXJpYWwoKS51bmlmb3Jtcy5pRGVwdGhUZXh0dXJlLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuZGVwdGhUYXJnZXQuZGVwdGhUZXh0dXJlO1xuXG5cdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gY3VyVGltZTtcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueCA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbnZhcy5jbGllbnRXaWR0aDtcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueSA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG5cdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlDYW1lcmFOZWFyLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuY2FtZXJhLm5lYXI7XG5cdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlDYW1lcmFGYXIudmFsdWUgPSBzY29wZS50aHJlZUNhbnZhcy5jYW1lcmEuZmFyO1xuXHRcdHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtcy5pRGVwdGhUZXh0dXJlLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuZGVwdGhUYXJnZXQuZGVwdGhUZXh0dXJlO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY29wZS50aHJlZUNhbnZhcy5kYXRhLnRleHR1cmVzLmxlbmd0aDsgaSsrKXtcblx0XHRcdHZhciBwcm9wZXJ0eSA9ICdpVGV4dHVyZScgKyBpO1xuICAgICAgICAgICAgc2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zW3Byb3BlcnR5XS52YWx1ZSA9IHNjb3BlLnRocmVlQ2FudmFzLmRhdGEudGV4dHVyZXNbaV07XG5cdFx0fVxuXHR9XG59XG4iLCJpbXBvcnQgVGhyZWVDYW52YXMgZnJvbSAnLi9UaHJlZUNhbnZhcyc7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJQYXNzIHtcblx0Y29uc3RydWN0b3IoY2FudmFzLCByZW5kZXJlciwgZG93blJlcywgcmVuZGVyVG9TY3JlZW4sIGZyYWcsIHZlcnRleCwgaW5kZXgsIHBhc3NOYW1lKSB7XG5cdFx0dGhpcy50aHJlZUNhbnZhcyA9IGNhbnZhcztcblx0XHR0aGlzLndpZHRoID0gY2FudmFzLmNhbnZhcy5jbGllbnRXaWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGNhbnZhcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xuXG5cdFx0dGhpcy5pbmRleCA9IGluZGV4O1xuXG5cdFx0aWYgKHBhc3NOYW1lID09IG51bGwgfHwgcGFzc05hbWUgPT0gdW5kZWZpbmVkKXtcblx0XHRcdHRoaXMucGFzc05hbWUgPSAnTmFtZSc7XG5cdFx0fVxuXHRcdGVsc2V7XG5cdFx0XHR0aGlzLnBhc3NOYW1lID0gcGFzc05hbWU7XG5cdFx0fVxuXG5cdFx0dGhpcy5jYW1lcmEgPSBuZXcgVEhSRUUuT3J0aG9ncmFwaGljQ2FtZXJhKCAtIDEsIDEsIDEsIC0gMSwgMCwgMSApO1xuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xuXHRcdHRoaXMucXVhZC5mcnVzdHVtQ3VsbGVkID0gZmFsc2U7IC8vIEF2b2lkIGdldHRpbmcgY2xpcHBlZFxuXHRcdHRoaXMuc2NlbmUuYWRkKCB0aGlzLnF1YWQgKTtcblxuXHRcdC8vdGhpcy51bmlmb3JtcyA9IHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRVbmlmb3JtcygpO1xuXHRcdHRoaXMubWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcblx0XHRcdHVuaWZvcm1zOiBudWxsLFxuXHRcdFx0dmVydGV4U2hhZGVyOiB0aGlzLnRocmVlQ2FudmFzLmdldElucHV0SGVhZGVyKCkgKyB2ZXJ0ZXgsXG5cdFx0XHRmcmFnbWVudFNoYWRlcjogdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgZnJhZ1xuXHRcdH0gKTtcblxuXHRcdHRoaXMucmVmcmVzaFVuaWZvcm1zKCk7XG5cblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XG5cdFx0dGhpcy5yZW5kZXJUb1NjcmVlbiA9IHJlbmRlclRvU2NyZWVuO1xuXHRcdHRoaXMuZG93blJlcyA9IGRvd25SZXM7XG5cdFx0dGhpcy5zZXRUYXJnZXRUZXh0dXJlKGRvd25SZXMpO1xuXHRcdHRoaXMudXBkYXRlTWF0ZXJpYWwodGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydGV4LCBcblx0XHR0aGlzLnRocmVlQ2FudmFzLmdldElucHV0SGVhZGVyKCkgKyBmcmFnKTtcblx0fVxuXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHR0aGlzLnJlbmRlclRhcmdldC5zZXRTaXplKCB3aWR0aCAqIHRoaXMuZG93blJlcywgaGVpZ2h0ICogdGhpcy5kb3duUmVzICk7XG5cdH1cblxuXHRzZXRSZXMocmVzKXtcblx0XHR0aGlzLmRvd25SZXMgPSByZXM7XG5cdFx0dGhpcy5zZXRTaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcblx0fVxuXG5cdHRvSlNPTigpe1xuXHRcdHJldHVybiB7XG5cdFx0XHRkb3duUmVzOiB0aGlzLmRvd25SZXMsXG5cdFx0XHRyZW5kZXJUb1NjcmVlbjogdGhpcy5yZW5kZXJUb1NjcmVlbixcblx0XHRcdGZyYWc6IHRoaXMubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIsXG5cdFx0XHR2ZXJ0ZXg6IHRoaXMubWF0ZXJpYWwudmVydGV4U2hhZGVyLFxuXHRcdFx0cGFzc05hbWU6IHRoaXMucGFzc05hbWUsXG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyKCl7XG5cdFx0dGhpcy5xdWFkLm1hdGVyaWFsID0gdGhpcy5tYXRlcmlhbDtcblx0XHRpZiAoIHRoaXMucmVuZGVyVG9TY3JlZW4gKSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEsIHRoaXMucmVuZGVyVGFyZ2V0LCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRyZWZyZXNoVW5pZm9ybXMoKXtcblx0XHR0aGlzLnVuaWZvcm1zID0gdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dFVuaWZvcm1zKCk7XG5cdFx0dGhpcy5tYXRlcmlhbC51bmlmb3JtcyA9IHRoaXMudW5pZm9ybXM7XG5cdH1cblxuXHR1cGRhdGVNYXRlcmlhbCh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKXtcblx0XHR0aGlzLnJlZnJlc2hVbmlmb3JtcygpO1xuXHRcdHRoaXMubWF0ZXJpYWwudmVydGV4U2hhZGVyID0gdmVydGV4U2hhZGVyO1xuXHRcdHRoaXMubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIgPSBmcmFnbWVudFNoYWRlcjtcblx0XHR0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcblx0fVxuXG5cdHNldFRhcmdldFRleHR1cmUoZG93blJlcyl7XG5cdFx0dmFyIHBhcmFtZXRlcnMgPSB7XG5cdFx0XHRtaW5GaWx0ZXI6IFRIUkVFLkxpbmVhckZpbHRlcixcblx0XHRcdG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxuXHRcdFx0Zm9ybWF0OiBUSFJFRS5SR0JBRm9ybWF0LFxuICAgICAgICAgICAgc3RlbmNpbEJ1ZmZlcjogZmFsc2UsXG5cdFx0fTtcblx0XHR2YXIgc2l6ZSA9IHRoaXMucmVuZGVyZXIuZ2V0RHJhd2luZ0J1ZmZlclNpemUoKTtcblx0XHR0aGlzLnJlbmRlclRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggc2l6ZS53aWR0aCAqIGRvd25SZXMsIHNpemUuaGVpZ2h0ICogZG93blJlcywgcGFyYW1ldGVycyApO1xuXHRcdC8vcmVuZGVyVGFyZ2V0LnRleHR1cmUubmFtZSA9ICdFZmZlY3RDb21wb3Nlci5ydDEnO1xuXHR9XG5cblxufVxuIiwiaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gJy4vUmVuZGVyUGFzcyc7XG5cbmV4cG9ydCBjbGFzcyBURGF0YSB7XG5cdGNvbnN0cnVjdG9yKG93bmVyKSB7XG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xuXHRcdHRoaXMudGV4dHVyZXMgPSBuZXcgQXJyYXkoMik7XG5cdFx0dGhpcy5pbWFnZXMgPSB7fTtcblx0XHR0aGlzLmVkaXRNb2RlID0gMDtcblx0XHR0aGlzLmJsZW5kaW5nID0gMDtcblx0XHR0aGlzLnNpZGUgPSAwO1xuXHRcdHRoaXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcblx0XHR0aGlzLm9ialNjYWxlID0gbmV3IFRIUkVFLlZlY3RvcjMoIDEsIDEsIDEgKTtcblx0XHR0aGlzLm9ialBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCAwLCAwLCAwICk7XG5cdFx0dGhpcy5vYmpSb3QgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMCApO1xuXHRcdHRoaXMub2JqZWN0VHlwZSA9IDA7XG5cdFx0dGhpcy5mbGF0U2hhZGluZyA9IGZhbHNlO1xuXHRcdHRoaXMud2lyZWZyYW1lID0gZmFsc2U7XG5cdFx0dGhpcy5kZXB0aFdyaXRlID0gdHJ1ZTtcblx0XHR0aGlzLmRlcHRoVGVzdCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXJQYXNzZXMgPSBuZXcgQXJyYXkoKTtcblx0XHR0aGlzLnBhc3NEYXRhcyA9IFtdO1xuXHRcdHRoaXMuc2hvd1NjZW5lID0gZmFsc2U7XG5cdFx0dGhpcy51c2VMaWdodCA9IGZhbHNlO1xuXHRcdHRoaXMuYW5pbWF0ZVNjYWxlID0gZmFsc2U7XG5cdH1cblxuXHR0b0pTT04oKXtcblx0XHR2YXIgdGV4RGF0YSA9IFtdO1xuXHRcdHRoaXMuaW1hZ2VzID0ge307XG5cdFx0dmFyIGJhY2t1cCA9IHRoaXMudGV4dHVyZXMuc2xpY2UoKTtcblx0XHR0aGlzLnRleHR1cmVzID0gbmV3IEFycmF5KDIpO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYmFja3VwLmxlbmd0aDsgaSsrKXtcblx0XHRcdGlmIChiYWNrdXBbaV0gPT0gbnVsbCB8fCBiYWNrdXBbaV0uaW1hZ2UgPT0gdW5kZWZpbmVkIHx8IGJhY2t1cFtpXS5pbWFnZSA9PSBudWxsKXtcblx0XHRcdFx0dGV4RGF0YS5wdXNoKG51bGwpO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZXtcblx0XHRcdFx0Ly9OT1RFISEhIFxuXHRcdFx0XHQvL3RvSlNPTih0aGlzKSB3aWxsIHNldCBpbWFnZXMgZGF0YSwgYW5kIHRleHR1cmVzISFcblx0XHRcdFx0dGV4RGF0YS5wdXNoKGJhY2t1cFtpXS50b0pTT04odGhpcykpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR0aGlzLnRleHR1cmVzID0gYmFja3VwO1xuXG5cdFx0dGhpcy5wYXNzRGF0YXMgPSBbXTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcblx0XHRcdHRoaXMucGFzc0RhdGFzLnB1c2godGhpcy5yZW5kZXJQYXNzZXNbaV0udG9KU09OKCkpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHR0ZXh0dXJlczogdGV4RGF0YSxcblx0XHRcdGltYWdlczogdGhpcy5pbWFnZXMsXG5cdFx0XHRlZGl0TW9kZTogdGhpcy5lZGl0TW9kZSxcblx0XHRcdGJsZW5kaW5nOiB0aGlzLmJsZW5kaW5nLFxuXHRcdFx0c2lkZTogdGhpcy5zaWRlLFxuXHRcdFx0dHJhbnNwYXJlbnQ6IHRoaXMudHJhbnNwYXJlbnQsXG5cdFx0XHRvYmpTY2FsZTogdGhpcy5vYmpTY2FsZSxcblx0XHRcdG9ialBvczogdGhpcy5vYmpQb3MsXG5cdFx0XHRvYmpSb3Q6IHRoaXMub2JqUm90LFxuXHRcdFx0b2JqZWN0VHlwZTogdGhpcy5vYmplY3RUeXBlLFxuXHRcdFx0ZmxhdFNoYWRpbmc6dGhpcy5mbGF0U2hhZGluZyxcblx0XHRcdHdpcmVmcmFtZTp0aGlzLndpcmVmcmFtZSxcblx0XHRcdGRlcHRoV3JpdGU6dGhpcy5kZXB0aFdyaXRlLFxuXHRcdFx0ZGVwdGhUZXN0OnRoaXMuZGVwdGhUZXN0LFxuXHRcdFx0cGFzc0RhdGFzOiB0aGlzLnBhc3NEYXRhcyxcblx0XHRcdHNob3dTY2VuZTogdGhpcy5zaG93U2NlbmUsXG5cdFx0XHR1c2VMaWdodDogdGhpcy51c2VMaWdodCxcblx0XHRcdGFuaW1hdGVTY2FsZTp0aGlzLmFuaW1hdGVTY2FsZSxcblx0XHR9XG5cdH1cblxuXHRsb2FkRnJvbUpTT04oanNvbil7XG5cblx0XHR0aGlzLnRleHR1cmVzID0ganNvbi50ZXh0dXJlcztcblx0XHR0aGlzLmltYWdlcyA9IGpzb24uaW1hZ2VzO1xuXHRcdHRoaXMuZWRpdE1vZGUgPSBqc29uLmVkaXRNb2RlO1xuXHRcdHRoaXMuYmxlbmRpbmcgPSBqc29uLmJsZW5kaW5nID09IHVuZGVmaW5lZCA/IDA6IGpzb24uYmxlbmRpbmc7XG5cdFx0dGhpcy5zaWRlID0ganNvbi5zaWRlID09IHVuZGVmaW5lZCA/IDA6IGpzb24uc2lkZTtcblx0XHR0aGlzLnRyYW5zcGFyZW50ID0ganNvbi50cmFuc3BhcmVudCA9PSB1bmRlZmluZWQgPyB0cnVlOiBqc29uLnRyYW5zcGFyZW50O1xuXHRcdFxuXHRcdHRoaXMub2JqU2NhbGU9anNvbi5vYmpTY2FsZSxcblx0XHR0aGlzLm9ialBvcz0ganNvbi5vYmpQb3MsXG5cdFx0dGhpcy5vYmpSb3Q9IGpzb24ub2JqUm90LFxuXHRcdHRoaXMub2JqZWN0VHlwZSA9IGpzb24ub2JqZWN0VHlwZSA9PSB1bmRlZmluZWQgPyAwOiBqc29uLm9iamVjdFR5cGU7XG5cdFx0dGhpcy5mbGF0U2hhZGluZyA9IGpzb24uZmxhdFNoYWRpbmcgPT0gdW5kZWZpbmVkID8gZmFsc2U6IGpzb24uZmxhdFNoYWRpbmc7XG5cdFx0dGhpcy53aXJlZnJhbWUgPSBqc29uLndpcmVmcmFtZSA9PSB1bmRlZmluZWQgPyBmYWxzZToganNvbi53aXJlZnJhbWU7XG5cdFx0dGhpcy5kZXB0aFdyaXRlID0ganNvbi5kZXB0aFdyaXRlID09IHVuZGVmaW5lZCA/IGZhbHNlOiBqc29uLmRlcHRoV3JpdGU7XG5cdFx0dGhpcy5kZXB0aFRlc3QgPSBqc29uLmRlcHRoVGVzdCA9PSB1bmRlZmluZWQgPyBmYWxzZToganNvbi5kZXB0aFRlc3Q7XG5cdFx0dGhpcy5wYXNzRGF0YXMgPSBqc29uLnBhc3NEYXRhcztcblx0XHR0aGlzLnNob3dTY2VuZSA9IGpzb24uc2hvd1NjZW5lO1xuXHRcdHRoaXMudXNlTGlnaHQgPSBqc29uLnVzZUxpZ2h0O1xuXHRcdHRoaXMuYW5pbWF0ZVNjYWxlID0ganNvbi5hbmltYXRlU2NhbGUgPT0gdW5kZWZpbmVkID8gZmFsc2U6IGpzb24uYW5pbWF0ZVNjYWxlO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0dXJlc1tpXSA9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLnRleHR1cmVzW2ldID0ge307XG4gICAgICAgICAgICB9XG5cdFx0fVxuXG5cdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5PYmplY3RMb2FkZXIoKTtcbiAgICAgICAgdmFyIGltYWdlRGF0YXMgPSBbXTtcbiAgICAgICAgZm9yKHZhciBlbGUgaW4gdGhpcy5pbWFnZXMpe1xuICAgICAgICAgICAgaW1hZ2VEYXRhcy5wdXNoKHRoaXMuaW1hZ2VzW2VsZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGltYWdlRWxlbWVudHMgPSBsb2FkZXIucGFyc2VJbWFnZXMoaW1hZ2VEYXRhcyk7XG5cbiAgICAgICAgdmFyIHRleERhdGFzID0gbG9hZGVyLnBhcnNlVGV4dHVyZXModGhpcy50ZXh0dXJlcyxpbWFnZUVsZW1lbnRzKTtcblx0XHQvL3RoaXMudGV4dHVyZXMgPSBbXTtcblx0XHRcblx0XHRcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dHVyZXMubGVuZ3RoOyBpKyspe1xuXHRcdFx0aWYgKHRoaXMudGV4dHVyZXNbaV0udXVpZCA9PSB1bmRlZmluZWQpe1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdGZvcih2YXIgZWxlIGluIHRleERhdGFzKXtcblx0XHRcdFx0aWYgKHRoaXMudGV4dHVyZXNbaV0udXVpZCA9PT0gZWxlKXtcblx0XHRcdFx0XHR0aGlzLnRleHR1cmVzW2ldID0gdGV4RGF0YXNbZWxlXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiaW1wb3J0IHsgc3Vic2NyaWJlTWl4aW4gfSBmcm9tICcuL3Rvb2xzL21peGluJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICcuL3Rvb2xzL09yYml0Q29udHJvbHMnO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi90b29scy9Mb2FkZXInO1xuaW1wb3J0IHsgVHJhbnNmb3JtQ29udHJvbHMgfSBmcm9tICcuL3Rvb2xzL1RyYW5zZm9ybUNvbnRyb2xzJztcbmltcG9ydCB7IFBsYXllciB9IGZyb20gJy4vUGxheWVyJztcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICcuL1JlbmRlclBhc3MnO1xuaW1wb3J0IHsgVERhdGEgfSBmcm9tICcuL1REYXRhJztcbi8vaW1wb3J0IHsgU2hhZGVyUGFzcywgQ2xlYXJQYXNzLCBSZW5kZXJQYXNzLCBFZmZlY3RDb21wb3NlcixDb3B5U2hhZGVyLERvdFNjcmVlblNoYWRlciB9IGZyb20gJy4vRWZmZWN0Q29tcG9zZXIuanMnO1xuXG5jb25zdCBWRVJURVhfSEVBREVSX1RIUkVFID0gYFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuLy9UaHJlZS5qcyBCdWlsdC1pbiB1bmlmb3JtcyBhbmQgYXR0cmlidXRlc1xuLy9odHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xQcm9ncmFtXG4vLyA9IG9iamVjdC5tYXRyaXhXb3JsZFxudW5pZm9ybSBtYXQ0IG1vZGVsTWF0cml4O1xuLy8gPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICogb2JqZWN0Lm1hdHJpeFdvcmxkXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuLy8gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XG4vLyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2VcbnVuaWZvcm0gbWF0NCB2aWV3TWF0cml4O1xuLy8gPSBpbnZlcnNlIHRyYW5zcG9zZSBvZiBtb2RlbFZpZXdNYXRyaXhcbnVuaWZvcm0gbWF0MyBub3JtYWxNYXRyaXg7XG4vLyA9IGNhbWVyYSBwb3NpdGlvbiBpbiB3b3JsZCBzcGFjZVxudW5pZm9ybSB2ZWMzIGNhbWVyYVBvc2l0aW9uO1xuXG4vLyBkZWZhdWx0IHZlcnRleCBhdHRyaWJ1dGVzIHByb3ZpZGVkIGJ5IEdlb21ldHJ5IGFuZCBCdWZmZXJHZW9tZXRyeVxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XG5hdHRyaWJ1dGUgdmVjMyBub3JtYWw7XG5hdHRyaWJ1dGUgdmVjMiB1djtcbmF0dHJpYnV0ZSB2ZWMyIHV2MjtcbmA7XG5cbmNvbnN0IEZSQUdfSEVBREVSX1RIUkVFID0gYFxucHJlY2lzaW9uIGhpZ2hwIGZsb2F0O1xuLy9UaHJlZS5qcyBCdWlsdC1pbiB1bmlmb3JtcyBhbmQgYXR0cmlidXRlc1xuLy9odHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xQcm9ncmFtXG4vLyA9IG9iamVjdC5tYXRyaXhXb3JsZFxudW5pZm9ybSBtYXQ0IG1vZGVsTWF0cml4O1xuLy8gPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICogb2JqZWN0Lm1hdHJpeFdvcmxkXG51bmlmb3JtIG1hdDQgbW9kZWxWaWV3TWF0cml4O1xuLy8gPSBjYW1lcmEucHJvamVjdGlvbk1hdHJpeFxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XG4vLyA9IGNhbWVyYS5tYXRyaXhXb3JsZEludmVyc2VcbnVuaWZvcm0gbWF0NCB2aWV3TWF0cml4O1xuLy8gPSBpbnZlcnNlIHRyYW5zcG9zZSBvZiBtb2RlbFZpZXdNYXRyaXhcbnVuaWZvcm0gbWF0MyBub3JtYWxNYXRyaXg7XG4vLyA9IGNhbWVyYSBwb3NpdGlvbiBpbiB3b3JsZCBzcGFjZVxudW5pZm9ybSB2ZWMzIGNhbWVyYVBvc2l0aW9uO1xuYDtcblxuY29uc3QgRU1QVFlfVkVSVEVYX1NIQURFUiA9IGBcbnZhcnlpbmcgdmVjMyBmTm9ybWFsO1xudmFyeWluZyB2ZWMzIGZQb3NpdGlvbjtcbnZhcnlpbmcgdmVjMiBmVVY7XG5cbnZvaWQgbWFpbigpXG57XG4gICAgZk5vcm1hbCA9IG5vcm1hbDtcbiAgICB2ZWM0IHdwb3MgPSBtb2RlbE1hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XG4gICAgZlBvc2l0aW9uID0gd3Bvcy54eXo7XG4gICAgZlVWID0gdXY7XG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xufVxuYDtcblxuY29uc3QgRU1QVFlfRlJBR19TSEFERVIgPSBgXG52YXJ5aW5nIHZlYzMgZlBvc2l0aW9uO1xudmFyeWluZyB2ZWMzIGZOb3JtYWw7XG52YXJ5aW5nIHZlYzIgZlVWO1xuXG52ZWMzIHJpbSh2ZWMzIGNvbG9yLCBmbG9hdCBzdGFydCwgZmxvYXQgZW5kLCBmbG9hdCBjb2VmKVxue1xuICB2ZWMzIG5vcm1hbCA9IG5vcm1hbGl6ZShmTm9ybWFsKTtcbiAgdmVjMyBleWUgPSBub3JtYWxpemUoY2FtZXJhUG9zaXRpb24tIGZQb3NpdGlvbik7XG4gIGZsb2F0IHJpbSA9IHNtb290aHN0ZXAoc3RhcnQsIGVuZCwgMS4wIC0gZG90KG5vcm1hbCwgZXllKSk7XG4gIHJldHVybiBjbGFtcChyaW0sIDAuMCwgMS4wKSAqIGNvZWYgKiBjb2xvcjtcbn1cblxuXG52b2lkIG1haW4oKVxue1xuICAgIHZlYzMgcmltQ29sb3IgPSByaW0odmVjMygwLjc2NCwxLjAwMCwwLjg1NyksMC4zNjAsMS4xNDQsMS44MTYpO1xuICAgIHZlYzMgYmFzZUNvbG9yID0gZk5vcm1hbCAqIHNpbihpVGltZSAqIDMuMCk7XG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChyaW1Db2xvciArIGJhc2VDb2xvciwxLjApO1xufVxuYDtcblxuY29uc3QgVklHTkVUVEVfVkVSVEVYID0gYFxudmFyeWluZyB2ZWMyIGZVVjtcbnZvaWQgbWFpbigpIHtcbiAgICBmVVYgPSB1djtcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XG59XG5gO1xuXG5jb25zdCBWSUdORVRURV9GUkFHID0gYFxudmFyeWluZyB2ZWMyIGZVVjtcbi8vRmlsbCB0aGUgaVBhc3MwIHRleHR1cmUgd2l0aCBWaWduZXR0ZSBzaGFkZXIuXG52b2lkIG1haW4oKSB7XG4gICAgZmxvYXQgb2Zmc2V0ID0gMS4wO1xuICAgIGZsb2F0IGRhcmtuZXNzID0gMS4wO1xuICAgIHZlYzQgYmFja0NvbG9yID0gdmVjNCgwLjIwMywwLjI5MywwLjQ4NSwxLjAwMCk7XG4gICAgdmVjMiB1diA9ICggZlVWIC0gdmVjMigwLjUsMC41KSApICogdmVjMiggb2Zmc2V0ICk7XG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggbWl4KCBiYWNrQ29sb3IucmdiLCB2ZWMzKCAxLjAgLSBkYXJrbmVzcyApLCBkb3QoIHV2LCB1diApICksIGJhY2tDb2xvci5hICk7XG59XG5gO1xuXG5jb25zdCBDT01QT1NFX0ZSQUcgPSBgXG52YXJ5aW5nIHZlYzIgZlVWO1xuLy9pUGFzczAgaXMgcmVuZGVyZWQgYnkgaVBhc3MwKHRoZSBWaWduZXR0ZSBzaGFkZXIpXG4vL2lTY2VuZVRleHR1cmUgaXMgcmVuZGVyZWQgYnkgdGhlIE9iamVjdCBzaGFkZXJcbnZvaWQgbWFpbigpIHtcbiAgICB2ZWM0IG9iamVjdCA9IHRleHR1cmUyRCggaVNjZW5lVGV4dHVyZSwgZlVWICk7XG4gICAgdmVjNCBiYWNrZ3JvdW5kID0gdGV4dHVyZTJEKCBpUGFzczAsIGZVViApO1xuICAgIGdsX0ZyYWdDb2xvciA9IG1peChiYWNrZ3JvdW5kLCBvYmplY3QsIG9iamVjdC5hKTtcbn1cbmA7XG5cblxuY29uc3QgREVGQVVMVF9QQVNTX1ZFUlRFWCA9IGBcbnZhcnlpbmcgdmVjMiBmVVY7XG52b2lkIG1haW4oKSB7XG4gICAgZlVWID0gdXY7XG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xufVxuYDtcblxuY29uc3QgREVGQVVMVF9QQVNTX0ZSQUcgPSBgXG52YXJ5aW5nIHZlYzIgZlVWO1xudm9pZCBtYWluKCkge1xuICAgIHZlYzQgdGV4ZWwgPSB0ZXh0dXJlMkQoIGlTY2VuZVRleHR1cmUsIGZVViApO1xuICAgIGdsX0ZyYWdDb2xvciA9IHRleGVsO1xufVxuYDtcblxuXG5jb25zdCBUSFJFRV9QQUNLSU5HID0gXCJ2ZWMzIHBhY2tOb3JtYWxUb1JHQiggY29uc3QgaW4gdmVjMyBub3JtYWwgKSB7cmV0dXJuIG5vcm1hbGl6ZSggbm9ybWFsICkgKiAwLjUgKyAwLjU7XFxyXFxufVxcclxcblxcclxcbnZlYzMgdW5wYWNrUkdCVG9Ob3JtYWwoIGNvbnN0IGluIHZlYzMgcmdiICkge1xcclxcblxcdHJldHVybiAyLjAgKiByZ2IueHl6IC0gMS4wO1xcclxcbn1cXHJcXG5cXHJcXG5jb25zdCBmbG9hdCBQYWNrVXBzY2FsZSA9IDI1Ni4gLyAyNTUuOyAvLyBmcmFjdGlvbiAtPiAwLi4xIChpbmNsdWRpbmcgMSlcXHJcXG5jb25zdCBmbG9hdCBVbnBhY2tEb3duc2NhbGUgPSAyNTUuIC8gMjU2LjsgLy8gMC4uMSAtPiBmcmFjdGlvbiAoZXhjbHVkaW5nIDEpXFxyXFxuXFxyXFxuY29uc3QgdmVjMyBQYWNrRmFjdG9ycyA9IHZlYzMoIDI1Ni4gKiAyNTYuICogMjU2LiwgMjU2LiAqIDI1Ni4sICAyNTYuICk7XFxyXFxuY29uc3QgdmVjNCBVbnBhY2tGYWN0b3JzID0gVW5wYWNrRG93bnNjYWxlIC8gdmVjNCggUGFja0ZhY3RvcnMsIDEuICk7XFxyXFxuXFxyXFxuY29uc3QgZmxvYXQgU2hpZnRSaWdodDggPSAxLiAvIDI1Ni47XFxyXFxuXFxyXFxudmVjNCBwYWNrRGVwdGhUb1JHQkEoIGNvbnN0IGluIGZsb2F0IHYgKSB7XFxyXFxuXFx0dmVjNCByID0gdmVjNCggZnJhY3QoIHYgKiBQYWNrRmFjdG9ycyApLCB2ICk7XFxyXFxuXFx0ci55encgLT0gci54eXogKiBTaGlmdFJpZ2h0ODsgLy8gdGlkeSBvdmVyZmxvd1xcclxcblxcdHJldHVybiByICogUGFja1Vwc2NhbGU7XFxyXFxufVxcclxcblxcclxcbmZsb2F0IHVucGFja1JHQkFUb0RlcHRoKCBjb25zdCBpbiB2ZWM0IHYgKSB7XFxyXFxuXFx0cmV0dXJuIGRvdCggdiwgVW5wYWNrRmFjdG9ycyApO1xcclxcbn1cXHJcXG5cXHJcXG4vLyBOT1RFOiB2aWV3Wi9leWVaIGlzIDwgMCB3aGVuIGluIGZyb250IG9mIHRoZSBjYW1lcmEgcGVyIE9wZW5HTCBjb252ZW50aW9uc1xcclxcblxcclxcbmZsb2F0IHZpZXdaVG9PcnRob2dyYXBoaWNEZXB0aCggY29uc3QgaW4gZmxvYXQgdmlld1osIGNvbnN0IGluIGZsb2F0IG5lYXIsIGNvbnN0IGluIGZsb2F0IGZhciApIHtcXHJcXG5cXHRyZXR1cm4gKCB2aWV3WiArIG5lYXIgKSAvICggbmVhciAtIGZhciApO1xcclxcbn1cXHJcXG5mbG9hdCBvcnRob2dyYXBoaWNEZXB0aFRvVmlld1ooIGNvbnN0IGluIGZsb2F0IGxpbmVhckNsaXBaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxyXFxuXFx0cmV0dXJuIGxpbmVhckNsaXBaICogKCBuZWFyIC0gZmFyICkgLSBuZWFyO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCB2aWV3WlRvUGVyc3BlY3RpdmVEZXB0aCggY29uc3QgaW4gZmxvYXQgdmlld1osIGNvbnN0IGluIGZsb2F0IG5lYXIsIGNvbnN0IGluIGZsb2F0IGZhciApIHtcXHJcXG5cXHRyZXR1cm4gKCggbmVhciArIHZpZXdaICkgKiBmYXIgKSAvICgoIGZhciAtIG5lYXIgKSAqIHZpZXdaICk7XFxyXFxufVxcclxcbmZsb2F0IHBlcnNwZWN0aXZlRGVwdGhUb1ZpZXdaKCBjb25zdCBpbiBmbG9hdCBpbnZDbGlwWiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcclxcblxcdHJldHVybiAoIG5lYXIgKiBmYXIgKSAvICggKCBmYXIgLSBuZWFyICkgKiBpbnZDbGlwWiAtIGZhciApO1xcclxcbn1cXHJcXG5cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhyZWVDYW52YXMge1xuXG5cbiAgICBnZXRJbnB1dEhlYWRlcigpIHtcbiAgICAgICAgdmFyIGhlYWRlciA9ICcvL2hlYWRlci1iZWdpblxcclxcbic7XG4gICAgICAgIHZhciBwYXJhbXMgPSAndW5pZm9ybSBmbG9hdCBpVGltZTtcXHJcXG51bmlmb3JtIHZlYzIgaVJlc29sdXRpb247XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgaURlcHRoVGV4dHVyZTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCBpU2NlbmVUZXh0dXJlO1xcclxcbnVuaWZvcm0gZmxvYXQgaUNhbWVyYU5lYXI7XFxyXFxudW5pZm9ybSBmbG9hdCBpQ2FtZXJhRmFyO1xcclxcbic7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnRleHR1cmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHBhcmFtcyArPSAndW5pZm9ybSBzYW1wbGVyMkQgaVRleHR1cmUnICsgaSArICc7XFxyXFxuJztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgcGFyYW1zICs9ICd1bmlmb3JtIHNhbXBsZXIyRCBpUGFzcycgKyBpICsgJztcXHJcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZGF0YS5zaG93U2NlbmUgJiYgdGhpcy5kYXRhLnVzZUxpZ2h0KXtcbiAgICAgICAgICAgIHBhcmFtcyArPSAndW5pZm9ybSB2ZWMzIGlMaWdodERpcmVjdGlvbjtcXHJcXG4nO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVuZCA9ICcvL2hlYWRlci1lbmRcXHJcXG4nO1xuXG4gICAgICAgIHZhciByZXQgPSBoZWFkZXIgKyBwYXJhbXMgKyBlbmQ7XG5cbiAgICAgICAgLy9jb25zb2xlLmxvZyhyZXQpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IEVNUFRZX1ZFUlRFWF9TSEFERVIoKSB7XG4gICAgICAgIHJldHVybiBFTVBUWV9WRVJURVhfU0hBREVSO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgZ2V0IEVNUFRZX0ZSQUdfU0hBREVSKCkge1xuICAgICAgICByZXR1cm4gRU1QVFlfRlJBR19TSEFERVI7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldCBWRVJURVhfSEVBREVSX1RIUkVFKCkge1xuICAgICAgICByZXR1cm4gVkVSVEVYX0hFQURFUl9USFJFRTtcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIGdldCBGUkFHX0hFQURFUl9USFJFRSgpIHtcbiAgICAgICAgcmV0dXJuIEZSQUdfSEVBREVSX1RIUkVFO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXQgVEhSRUVfUEFDS0lORygpIHtcbiAgICAgICAgcmV0dXJuIFRIUkVFX1BBQ0tJTkc7XG4gICAgfVxuICAgIFxuICAgIGdldElucHV0VW5pZm9ybXMoKXtcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRfdW5pZm9ybXMgPT0gbnVsbCB8fCB0aGlzLmlucHV0X3VuaWZvcm1zID09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICB0aGlzLmlucHV0X3VuaWZvcm1zID0ge1xuICAgICAgICAgICAgICAgIGlUaW1lOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwLjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlSZXNvbHV0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMigpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpU2NlbmVUZXh0dXJlOntcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlEZXB0aFRleHR1cmU6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaUNhbWVyYU5lYXI6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTowLjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlDYW1lcmFGYXI6e1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTowLjBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlMaWdodERpcmVjdGlvbjp7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVEhSRUUuVmVjdG9yMygwLDAsMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnRleHR1cmVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9ICdpVGV4dHVyZScgKyBpO1xuICAgICAgICAgICAgdGhpcy5pbnB1dF91bmlmb3Jtc1twcm9wZXJ0eV0gPSB7dmFsdWU6bnVsbH07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gJ2lQYXNzJyArIGk7XG4gICAgICAgICAgICB0aGlzLmlucHV0X3VuaWZvcm1zW3Byb3BlcnR5XSA9IHt2YWx1ZTpudWxsfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0X3VuaWZvcm1zO1xuICAgIH1cbiAgICBcbiAgICAvL3RvZG86IHVzZSByZWdleHBcbiAgICBzdGF0aWMgcmVtb3ZlU2hhZGVySGVhZGVyKHNoYWRlcil7XG4gICAgICAgIC8vdmFyIHJlZ2V4ID0gL15cXC9cXC9oZWFkZXItYmVnaW4uKlxcL1xcL2hlYWRlci1lbmQvZ207XG4gICAgICAgIC8vdmFyIHJlZ2V4ID0gL15oZWFkZXItYmVnaW4oLiopL2c7XG4gICAgICAgIHZhciBiZWdpbiA9IHNoYWRlci5pbmRleE9mKFwiLy9oZWFkZXItYmVnaW5cIik7XG4gICAgICAgIHZhciBlbmQgPSBzaGFkZXIuaW5kZXhPZihcIi8vaGVhZGVyLWVuZFwiKTtcbiAgICAgICAgdmFyIHN1YnN0ciA9IHNoYWRlci5zdWJzdHIoYmVnaW4sIGVuZCAtIGJlZ2luKzEzKTtcblx0XHRzaGFkZXIgPSBzaGFkZXIucmVwbGFjZShzdWJzdHIsXCJcIik7XG5cdFx0aWYgKHNoYWRlci5zdGFydHNXaXRoKFwiXFxuXCIpKXtcblx0XHRcdHNoYWRlciA9IHNoYWRlci5zdWJzdHIoMSxzaGFkZXIubGVuZ3RoIC0gMSk7XG5cdFx0fVxuXHRcdGlmIChzaGFkZXIuc3RhcnRzV2l0aChcIlxcblwiKSl7XG5cdFx0XHRzaGFkZXIgPSBzaGFkZXIuc3Vic3RyKDEsc2hhZGVyLmxlbmd0aCAtIDEpO1xuXHRcdH1cblx0XHRyZXR1cm4gc2hhZGVyO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xuICAgICAgICBzdWJzY3JpYmVNaXhpbih0aGlzKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVySW5pdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtQ29udHJvbHMgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoe1xuXHRcdFx0YW50aWFsaWFzOiB0cnVlLFxuXHRcdFx0Y2FudmFzOiB0aGlzLmNhbnZhc1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hdXRvQ2xlYXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3dNYXAuZW5hYmxlZCA9IHRydWU7XG5cdFx0dGhpcy5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwLDApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xuICAgICAgICB0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHRoaXMuY2FudmFzLmNsaWVudFdpZHRoIC8gdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0LCAwLjEsIDEwMDAgKTtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueiA9IDI7XG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAyO1xuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQgKCAwLCAwLCAwICk7XG5cbiAgICAgICAgdGhpcy5saW1pdEZyYW1lID0gLTE7XG4gICAgICAgIHRoaXMudXNlQ29udHJvbCA9IHRydWU7XG5cbiAgICAgICAgLy9zZXR1cERlcHRoUmVuZGVyZXJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCApO1xuICAgICAgICB0aGlzLnNjZW5lVGFyZ2V0LnRleHR1cmUuZm9ybWF0ID0gVEhSRUUuUkdCQUZvcm1hdDtcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XG4gICAgICAgIHRoaXMuc2NlbmVUYXJnZXQudGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgICB0aGlzLnNjZW5lVGFyZ2V0LnRleHR1cmUuZ2VuZXJhdGVNaXBtYXBzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2NlbmVUYXJnZXQuc3RlbmNpbEJ1ZmZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjZW5lVGFyZ2V0LmRlcHRoQnVmZmVyID0gdHJ1ZTtcblxuXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHRoaXMuY2FudmFzLmNsaWVudFdpZHRoLCB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKTtcbiAgICAgICAgdGhpcy5kZXB0aFRhcmdldC50ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkFGb3JtYXQ7XG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LnRleHR1cmUubWFnRmlsdGVyID0gVEhSRUUuTmVhcmVzdEZpbHRlcjtcbiAgICAgICAgdGhpcy5kZXB0aFRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LnN0ZW5jaWxCdWZmZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXB0aFRhcmdldC5kZXB0aEJ1ZmZlciA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQuZGVwdGhUZXh0dXJlID0gbmV3IFRIUkVFLkRlcHRoVGV4dHVyZSgpO1xuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZS50eXBlID0gVEhSRUUuVW5zaWduZWRTaG9ydFR5cGU7XG5cblxuXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICByZXNldENhbWVyYSgpe1xuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMjtcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24ueSA9IDI7XG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCAoIDAsIDAsIDAgKTtcbiAgICAgICAgdGhpcy5jb250cm9scy50YXJnZXQwID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcbiAgICAgICAgdGhpcy5jb250cm9scy5wb3NpdGlvbjAgPSB0aGlzLmNhbWVyYS5wb3NpdGlvbjtcbiAgICAgICAgdGhpcy5jb250cm9scy56b29tMCA9IHRoaXMuY2FtZXJhLnpvb207XG4gICAgICAgIHRoaXMuY29udHJvbHMucmVzZXQoKTtcbiAgICB9XG5cbiAgICBuZXdQYXNzKGluZGV4KXtcbiAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJQYXNzKHRoaXMsdGhpcy5yZW5kZXJlciwxLHRydWUsREVGQVVMVF9QQVNTX0ZSQUcsREVGQVVMVF9QQVNTX1ZFUlRFWCxpbmRleCk7XG4gICAgfVxuXG4gICAgdG9KU09OKCl7XG5cdFx0cmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS50b0pTT04oKSxcbiAgICAgICAgICAgIHBsYXllcjogdGhpcy5wbGF5ZXIudG9KU09OKCksXG4gICAgICAgICAgICBjYW1lcmFQb3M6IHRoaXMuY2FtZXJhLnBvc2l0aW9uLFxuICAgICAgICAgICAgY2FtZXJhUm90OiB0aGlzLmNhbWVyYS5yb3RhdGlvbi50b1ZlY3RvcjMoKSxcbiAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xsZXI6IHRoaXMuY29udHJvbHMudG9KU09OKCksXG5cdFx0fTtcdFx0XG4gICAgfVxuICAgIFxuICAgIHVwZGF0ZURhdGEoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T2JqZWN0KHRoaXMuZGF0YS5vYmplY3RUeXBlKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5ibGVuZGluZyA9IHRoaXMuZGF0YS5ibGVuZGluZztcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5zaWRlID0gdGhpcy5kYXRhLnNpZGU7XG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkuZmxhdFNoYWRpbmcgPSB0aGlzLmRhdGEuZmxhdFNoYWRpbmc7XG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkudHJhbnNwYXJlbnQgPSB0aGlzLmRhdGEudHJhbnNwYXJlbnQ7XG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkud2lyZWZyYW1lID0gdGhpcy5kYXRhLndpcmVmcmFtZTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5kZXB0aFdyaXRlID0gdGhpcy5kYXRhLmRlcHRoV3JpdGU7XG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkuZGVwdGhUZXN0ID0gdGhpcy5kYXRhLmRlcHRoVGVzdDtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudE9iaigpLnNjYWxlLnNldCh0aGlzLmRhdGEub2JqU2NhbGUueCwgdGhpcy5kYXRhLm9ialNjYWxlLnksIHRoaXMuZGF0YS5vYmpTY2FsZS56KTtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudE9iaigpLnBvc2l0aW9uLnNldCggdGhpcy5kYXRhLm9ialBvcy54LCB0aGlzLmRhdGEub2JqUG9zLnksIHRoaXMuZGF0YS5vYmpQb3MueiApO1xuICAgICAgICB0aGlzLnBsYXllci5jdXJyZW50T2JqKCkucm90YXRpb24uc2V0KCB0aGlzLmRhdGEub2JqUm90LngsIHRoaXMuZGF0YS5vYmpSb3QueSwgdGhpcy5kYXRhLm9ialJvdC56ICk7XG4gICAgfVxuXG4gICAgbG9hZChwYXRoLCBjb21wbGV0ZUNhbGxiYWNrKXtcbiAgICAgICAgbGV0IHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XG4gICAgICAgIHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuRmlsZUxvYWRlcigpO1xuICAgICAgICBsb2FkZXIubG9hZCggcGF0aCwgZnVuY3Rpb24gKCB0ZXh0ICkge1xuICAgICAgICAgICAgdmFyIGRhdGFKU09OID0gSlNPTi5wYXJzZSh0ZXh0KTtcbiAgICAgICAgICAgIHNjb3BlLmxvYWRGcm9tSlNPTihkYXRhSlNPTi50aHJlZUNhbnZhcyxzY29wZS5jb21wbGV0ZWRDYWxsYmFjayk7XG4gICAgICAgIH0gKTtcbiAgICB9XG5cbiAgICBsb2FkRnJvbUpTT04oanNvbiwgY29tcGxldGVDYWxsYmFjayl7XG5cbiAgICAgICAgaWYgKHRoaXMudXNlQ29udHJvbCl7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMuY2FudmFzKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZW5hYmxlS2V5cyA9IGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFREYXRhKHRoaXMpO1xuICAgICAgICB0aGlzLmRhdGEubG9hZEZyb21KU09OKGpzb24uZGF0YSk7XG5cbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xuICAgICAgICB0aGlzLnBsYXllci5sb2FkKGpzb24ucGxheWVyLHRoaXMuZGF0YSk7XG4gICAgICAgIHRoaXMuZnJhbWUgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcmVySW5pdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQ2FsbGJhY2sgPSBjb21wbGV0ZUNhbGxiYWNrO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5wYXNzRGF0YXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHBkYXRhID0gdGhpcy5kYXRhLnBhc3NEYXRhc1tpXTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMucHVzaChuZXcgUmVuZGVyUGFzcyh0aGlzLHRoaXMucmVuZGVyZXJcbiAgICAgICAgICAgICAgICAscGRhdGEuZG93blJlcyxwZGF0YS5yZW5kZXJUb1NjcmVlblxuICAgICAgICAgICAgICAgICxUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIocGRhdGEuZnJhZylcbiAgICAgICAgICAgICAgICAsVGhyZWVDYW52YXMucmVtb3ZlU2hhZGVySGVhZGVyKHBkYXRhLnZlcnRleCksaSxwZGF0YS5wYXNzTmFtZSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi5zZXQoanNvbi5jYW1lcmFQb3MueCxqc29uLmNhbWVyYVBvcy55LGpzb24uY2FtZXJhUG9zLnopO1xuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi5zZXQoanNvbi5jYW1lcmFSb3QueCxqc29uLmNhbWVyYVJvdC55LGpzb24uY2FtZXJhUm90LnopO1xuICAgICAgICBpZiAodGhpcy51c2VDb250cm9sKXtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMuZnJvbUpTT04oanNvbi5jYW1lcmFDb250cm9sbGVyKTtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMucmVzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIG5ldyhjb21wbGV0ZUNhbGxiYWNrKXtcblxuICAgICAgICBpZiAodGhpcy51c2VDb250cm9sKXtcbiAgICAgICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgT3JiaXRDb250cm9scyh0aGlzLmNhbWVyYSwgdGhpcy5jYW52YXMpO1xuICAgICAgICAgICAgdGhpcy5jb250cm9scy5lbmFibGVLZXlzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXJlckluaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyk7XG4gICAgICAgIHRoaXMucGxheWVyLm5ld1NjZW5lKCk7XG4gICAgICAgIHRoaXMuY29tcGxldGVkQ2FsbGJhY2sgPSBjb21wbGV0ZUNhbGxiYWNrO1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgVERhdGEodGhpcyk7XG5cbiAgICAgICAgLy8gLy9iYWNrZ3JvdW5kXG4gICAgICAgIC8vIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMucHVzaChuZXcgUmVuZGVyUGFzcyh0aGlzLHRoaXMucmVuZGVyZXIsMSx0cnVlLFZJR05FVFRFX0ZSQUcsREVGQVVMVF9QQVNTX1ZFUlRFWCwwKSk7XG4gICAgICAgIC8vIC8vY29tcG9zZVxuICAgICAgICAvLyB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLnB1c2gobmV3IFJlbmRlclBhc3ModGhpcyx0aGlzLnJlbmRlcmVyLDEsdHJ1ZSxDT01QT1NFX0ZSQUcsREVGQVVMVF9QQVNTX1ZFUlRFWCwxKSk7XG5cbiAgICAgICAgLy8gdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1swXS5wYXNzTmFtZSA9ICdCYWNrZ3JvdW5kJztcbiAgICAgICAgLy8gdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1sxXS5wYXNzTmFtZSA9ICdDb21wb3NlJztcbiAgICAgICAgLy8gdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1swXS5yZW5kZXJUb1NjcmVlbiA9IGZhbHNlO1xuXG5cbiAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgcGxheSgpIHtcblx0XHRsZXQgc2NvcGUgPSB0aGlzO1xuXHRcdHRoaXMucHJldlRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcblx0XHRmdW5jdGlvbiBSZW5kZXJMb29wKCkge1xuXG4gICAgICAgICAgICBpZiAoc2NvcGUucmVuZGVyZXJJbml0ZWQgJiYgc2NvcGUubGltaXRGcmFtZSA+IDApe1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5mcmFtZSAlIHNjb3BlLmxpbWl0RnJhbWUgIT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS51c2VDb250cm9sKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbnRyb2xzLnVwZGF0ZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShSZW5kZXJMb29wKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZnJhbWUrKztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHNjb3BlLmluaXRlZCl7XG5cbiAgICAgICAgICAgICAgICAvL3Nob3VsZCBub3QgcmVzZXQgdW5pZm9ybXMgaW4gZXZlcnkgZnJhbWUuXG4gICAgICAgICAgICAgICAgLy9zY29wZS5yZWZyZXNoVW5pZm9ybXMoKTsgXG5cbiAgICAgICAgICAgICAgICBzY29wZS5wbGF5ZXIudXBkYXRlVW5pZm9ybXMoKTtcbiAgICAgICAgICAgICAgICAvL3JlbmRlciBkZXB0aCBidWZmZXJcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUucGxheWVyLmVudlNjZW5lICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBzY29wZS5yZW5kZXJlci5yZW5kZXIoIHNjb3BlLnBsYXllci5lbnZTY2VuZSwgc2NvcGUuY2FtZXJhLCBzY29wZS5kZXB0aFRhcmdldCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnJlbmRlcmVyLnJlbmRlciggc2NvcGUucGxheWVyLnNjZW5lLCBzY29wZS5jYW1lcmEsIHNjb3BlLmRlcHRoVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSwgc2NvcGUuZGVwdGhUYXJnZXQsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vYXNzaWduIGRlcHRoXG4gICAgICAgICAgICAgICAgc2NvcGUudXBkYXRlVW5pZm9ybXMoKTtcbiAgICAgICAgICAgICAgICAvL3JlbmRlciB0aGUgbWFpbiBzY2VuZS5cbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoID09IDApe1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcGUucGxheWVyLmVudlNjZW5lICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuZW52U2NlbmUsIHNjb3BlLmNhbWVyYSxudWxsLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSxudWxsLGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSxudWxsLHRydWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29wZS5wbGF5ZXIuZW52U2NlbmUgIT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZS5yZW5kZXJlci5yZW5kZXIoIHNjb3BlLnBsYXllci5lbnZTY2VuZSwgc2NvcGUuY2FtZXJhLCBzY29wZS5zY2VuZVRhcmdldCx0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLnJlbmRlcmVyLnJlbmRlciggc2NvcGUucGxheWVyLnNjZW5lLCBzY29wZS5jYW1lcmEsIHNjb3BlLnNjZW5lVGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXIucmVuZGVyKCBzY29wZS5wbGF5ZXIuc2NlbmUsIHNjb3BlLmNhbWVyYSwgc2NvcGUuc2NlbmVUYXJnZXQsdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNjb3BlLmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaVNjZW5lVGV4dHVyZS52YWx1ZSA9IHNjb3BlLnNjZW5lVGFyZ2V0LnRleHR1cmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHkgPSAnaVBhc3MnICsgKGkgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zW3Byb3BlcnR5XS52YWx1ZSA9IHNjb3BlLmRhdGEucmVuZGVyUGFzc2VzW2kgLSAxXS5yZW5kZXJUYXJnZXQudGV4dHVyZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzY29wZS5kYXRhLnJlbmRlclBhc3Nlc1tpXS5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzY29wZS5mcmFtZSsrO1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5mcmFtZSA+IDEgJiYgIXNjb3BlLnJlbmRlcmVySW5pdGVkKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvbXBsZXRlZENhbGxiYWNrICE9IG51bGwgJiYgc2NvcGUuY29tcGxldGVkQ2FsbGJhY2sgIT0gdW5kZWZpbmVkKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlLmNvbXBsZXRlZENhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9zY29wZS5yZWZyZXNoVW5pZm9ybXMoKTtcbiAgICAgICAgICAgICAgICAgICAgc2NvcGUucmVuZGVyZXJJbml0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY29wZS5kYXRhLmFuaW1hdGVTY2FsZSl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJUaW1lID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLjA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBmYWN0b3IgPSBNYXRoLnNpbihjdXJUaW1lICogMS4wKSowLjUgKyAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHNjb3BlLnBsYXllci5jdXJyZW50T2JqKCkuc2NhbGUuc2V0KHNjb3BlLmRhdGEub2JqU2NhbGUueCAqIGZhY3RvcixzY29wZS5kYXRhLm9ialNjYWxlLnkgKiBmYWN0b3Isc2NvcGUuZGF0YS5vYmpTY2FsZS56ICogZmFjdG9yKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChzY29wZS51c2VDb250cm9sKXtcbiAgICAgICAgICAgICAgICBzY29wZS5jb250cm9scy51cGRhdGUoKTtcbiAgICAgICAgICAgIH1cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUmVuZGVyTG9vcCk7XG4gICAgICAgIH1cblx0XHRSZW5kZXJMb29wKCk7XG4gICAgfVxuICAgIFxuXG5cblx0Y3JlYXRlR0xTaGFkZXIoY2FudmFzLCBzb3VyY2UsIHR5cGUpe1xuICAgICAgICBsZXQgZ2wgPSB0aGlzLmdldENvbnRleHQoKTtcbiAgICAgICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcbiAgICAgICAgZ2wuc2hhZGVyU291cmNlKHNoYWRlciwgc291cmNlKTtcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xuICAgICAgICBsZXQgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XG4gICAgICAgIGlmICghY29tcGlsZWQpIHtcbiAgICAgICAgICAgIGxldCBsYXN0RXJyb3IgPSBnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCcqKiogRXJyb3IgY29tcGlsaW5nIHNoYWRlciAnICsgc2hhZGVyICsgJzonICsgbGFzdEVycm9yKTtcbiAgICAgICAgICAgIGxldCBoZWFkZXJMaW5lID0gMDtcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy5nZXRDb250ZXh0KCkuVkVSVEVYX1NIQURFUil7XG4gICAgICAgICAgICAgICAgY2FudmFzLnRyaWdnZXIoJ3ZlcnRleF9lcnJvcicsIHsgc2hhZGVyOiBzaGFkZXIsIHNvdXJjZTogc291cmNlLCB0eXBlOiB0eXBlLCBlcnJvcjogbGFzdEVycm9yLCBoZWFkZXJMaW5lOiB0aGlzLnZlcnRleEhlYWRlckxpbmUoKSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY2FudmFzLnRyaWdnZXIoJ2ZyYWdfZXJyb3InLCB7IHNoYWRlcjogc2hhZGVyLCBzb3VyY2U6IHNvdXJjZSwgdHlwZTogdHlwZSwgZXJyb3I6IGxhc3RFcnJvciwgaGVhZGVyTGluZTogdGhpcy5mcmFnSGVhZGVyTGluZSgpIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hhZGVyO1xuICAgIH1cblxuICAgIFxuXHRnZXRDb250ZXh0KCl7XG5cdFx0cmV0dXJuIHRoaXMucmVuZGVyZXIuZ2V0Q29udGV4dCgpO1xuICAgIH1cbiAgICBcbiAgICByZXNpemVVc2VDYW52YXMoKXtcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGggLyB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgICAgIHRoaXMuY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcblxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCk7XG4gICAgICAgIHZhciBkcHIgPSB0aGlzLnJlbmRlcmVyLmdldFBpeGVsUmF0aW8oKTtcblxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLnNldFNpemUodGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiBkcHIsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIGRwcilcbiAgICAgICAgfVxuXG4gICAgICAgIFxuXHRcdHRoaXMuc2NlbmVUYXJnZXQuc2V0U2l6ZSggdGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiBkcHIsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIGRwciApO1xuICAgIH1cblxuICAgIHJlc2l6ZSh3LGgpe1xuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHcgKydweCc7XG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKydweCc7XG5cbiAgICAgICAgdGhpcy5yZXNpemVVc2VDYW52YXMoKTtcbiAgICB9XG5cbiAgICBjdXJWZXJ0ZXhTaGFkZXIoKXtcbiAgICAgICAgaWYgKHRoaXMuZGF0YS5lZGl0TW9kZSA9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJWZXJ0ZXhTaGFkZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgcmV0dXJuIFRocmVlQ2FudmFzLnJlbW92ZVNoYWRlckhlYWRlcih0aGlzLmRhdGEucmVuZGVyUGFzc2VzW3RoaXMuZGF0YS5lZGl0TW9kZSAtIDFdLm1hdGVyaWFsLnZlcnRleFNoYWRlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjdXJGcmFnU2FoZGVyKCl7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuZWRpdE1vZGUgPT0gMCl7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VyRnJhZ1NhaGRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICByZXR1cm4gVGhyZWVDYW52YXMucmVtb3ZlU2hhZGVySGVhZGVyKHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbdGhpcy5kYXRhLmVkaXRNb2RlIC0gMV0ubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmVydGV4SGVhZGVyTGluZSgpe1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIFRocmVlQ2FudmFzLlZFUlRFWF9IRUFERVJfVEhSRUUpLnNwbGl0KC9cXHJcXG58XFxyfFxcbi8pLmxlbmd0aDtcbiAgICB9XG5cbiAgICBmcmFnSGVhZGVyTGluZSgpe1xuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIFRocmVlQ2FudmFzLkZSQUdfSEVBREVSX1RIUkVFKS5zcGxpdCgvXFxyXFxufFxccnxcXG4vKS5sZW5ndGg7XG4gICAgfVxuXG5cbiAgICByZWZyZXNoVW5pZm9ybXMoKXtcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS51bmlmb3JtcyA9IHRoaXMuZ2V0SW5wdXRVbmlmb3JtcygpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5yZWZyZXNoVW5pZm9ybXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVJlbmRlclBhc3NVbmlmb3Jtcygpe1xuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLjA7XG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnggPSBzY29wZS5jYW52YXMuY2xpZW50V2lkdGg7XG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnkgPSBzY29wZS5jYW52YXMuY2xpZW50SGVpZ2h0O1xuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pQ2FtZXJhTmVhci52YWx1ZSA9IHNjb3BlLmNhbWVyYS5uZWFyO1xuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pQ2FtZXJhRmFyLnZhbHVlID0gc2NvcGUuY2FtZXJhLmZhcjtcbiAgICAgICAgICAgIGlmIChzY29wZS5wbGF5ZXIuZGlyTGlnaHQgIT0gbnVsbCAmJiBzY29wZS5wbGF5ZXIuZGlyTGlnaHQucG9zaXRpb24ueCA8IDk5OTkpe1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaUxpZ2h0RGlyZWN0aW9uLnZhbHVlID0gLXNjb3BlLnBsYXllci5kaXJMaWdodC5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vc2V0IGlTY2VuZVRleHR1cmUgbGF0ZXIuXG4gICAgICAgICAgICAvL3RoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaVNjZW5lVGV4dHVyZS52YWx1ZSA9IHNjb3BlLnNjZW5lVGFyZ2V0O1xuXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlEZXB0aFRleHR1cmUudmFsdWUgPSBzY29wZS5kZXB0aFRhcmdldC5kZXB0aFRleHR1cmU7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgc2NvcGUuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGsrKyl7XG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gJ2lUZXh0dXJlJyArIGs7XG4gICAgICAgICAgICAgICAgc2NvcGUuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXNbcHJvcGVydHldLnZhbHVlID0gc2NvcGUuZGF0YS50ZXh0dXJlc1trXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVwZGF0ZVVuaWZvcm1zKCl7XG4gICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZVVuaWZvcm1zKCk7XG4gICAgICAgIHRoaXMudXBkYXRlUmVuZGVyUGFzc1VuaWZvcm1zKCk7XG4gICAgfVxuXG4gICAgdXBkYXRlQ3VyTWF0ZXJpYWwoZnJhZ1N0cmluZywgdmVydFN0cmluZyl7XG4gICAgICAgIGlmKHRoaXMuZGF0YS5lZGl0TW9kZSA9PSAwKXtcbiAgICAgICAgICAgIHRoaXMucGxheWVyLnVwZGF0ZUN1ck1hdGVyaWFsKHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIGZyYWdTdHJpbmcsIHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIHZlcnRTdHJpbmcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmICgodGhpcy5kYXRhLmVkaXRNb2RlIC0gMSkgPT0gaSl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0udXBkYXRlTWF0ZXJpYWwodGhpcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydFN0cmluZyx0aGlzLmdldElucHV0SGVhZGVyKCkgKyBmcmFnU3RyaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjaGVja0xvYWRFZGl0b3JTaGFkZXIoZnJhZ1N0cmluZywgdmVydFN0cmluZyl7XG4gICAgICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSBudWxsO1xuICAgICAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBudWxsO1xuXG4gICAgICAgIHZlcnRleFNoYWRlciA9IHRoaXMuY3JlYXRlR0xTaGFkZXIodGhpcywgVGhyZWVDYW52YXMuVkVSVEVYX0hFQURFUl9USFJFRSArdGhpcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydFN0cmluZywgdGhpcy5nZXRDb250ZXh0KCkuVkVSVEVYX1NIQURFUik7XG4gICAgICAgIGZyYWdtZW50U2hhZGVyID0gdGhpcy5jcmVhdGVHTFNoYWRlcih0aGlzLCBUaHJlZUNhbnZhcy5GUkFHX0hFQURFUl9USFJFRSArIHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIGZyYWdTdHJpbmcsIHRoaXMuZ2V0Q29udGV4dCgpLkZSQUdNRU5UX1NIQURFUik7XG5cbiAgICAgICAgaWYgKCFmcmFnbWVudFNoYWRlciB8fCAhdmVydGV4U2hhZGVyKSB7XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1ck1hdGVyaWFsKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdsID0gdGhpcy5nZXRDb250ZXh0KCk7XG4gICAgICAgIGlmIChmcmFnbWVudFNoYWRlcil7XG4gICAgICAgICAgICBnbC5kZWxldGVTaGFkZXIoZnJhZ21lbnRTaGFkZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2ZXJ0ZXhTaGFkZXIpe1xuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHZlcnRleFNoYWRlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKipcbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXG4gKi9cbi8qKlxuICogbW9kaWZpZWQgYnkgc2hhbGx3YXlcbiAqIFRoaXMgY2xhc3Mgd2FzIGRlc2lnbmVkIHRvIGxvYWQgbG9jYWwgZmlsZXMgaW4gdGhlIHRocmVlanMgRWRpdG9yLCBpbiBvcmRlciB0byBsb2FkIHVybCBmaWxlcywgSSBtYWRlIHNvbWUgZml4ZXMuIFxuICogTWF5IG5vdCBjb21wYXRpYmxlIHdpdGggZnVydGhlciB0aHJlZWpzIHNjZW5lIGZpbGUgZm9ybWF0LlxuICogZml4ZWQ6XG4gKiAxLCBhZGRlZCBvbkFkZE9iaiwgb25BZGRTY2VuZSBjYWxsYmFja3MuXG4gKiAyLCBleHBvcnQgaGFuZGxlSlNPTiBmdW5jdGlvbiB0byBwYXJzZSBqc29uIGRhdGFzIGRpcmVjdGx5LlxuICovXG5cbi8vaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZGVyKCBvbkFkZE9iaiwgb25BZGRTY2VuZSApIHtcblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXHQvL3ZhciBzaWduYWxzID0gZWRpdG9yLnNpZ25hbHM7XG5cblx0dGhpcy50ZXh0dXJlUGF0aCA9ICcnO1xuXG5cdHRoaXMubG9hZEZpbGUgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XG5cblx0XHR2YXIgZmlsZW5hbWUgPSBmaWxlLm5hbWU7XG5cdFx0dmFyIGV4dGVuc2lvbiA9IGZpbGVuYW1lLnNwbGl0KCAnLicgKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdwcm9ncmVzcycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdHZhciBzaXplID0gJygnICsgTWF0aC5mbG9vciggZXZlbnQudG90YWwgLyAxMDAwICkgKyAnIEtCKSc7XG5cdFx0XHR2YXIgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCAoIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICkgKiAxMDAgKSArICclJztcblx0XHRcdGNvbnNvbGUubG9nKCAnTG9hZGluZycsIGZpbGVuYW1lLCBzaXplLCBwcm9ncmVzcyApO1xuXG5cdFx0fSApO1xuXG5cdFx0c3dpdGNoICggZXh0ZW5zaW9uICkge1xuXG5cdFx0XHRjYXNlICczZHMnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLlREU0xvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBsb2FkZXIucGFyc2UoIGV2ZW50LnRhcmdldC5yZXN1bHQgKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoob2JqZWN0KTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYW1mJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5BTUZMb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgYW1mb2JqZWN0ID0gbG9hZGVyLnBhcnNlKCBldmVudC50YXJnZXQucmVzdWx0ICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggYW1mb2JqZWN0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKGFtZm9iamVjdCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2F3ZCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuQVdETG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIHNjZW5lID0gbG9hZGVyLnBhcnNlKCBldmVudC50YXJnZXQucmVzdWx0ICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgU2V0U2NlbmVDb21tYW5kKCBzY2VuZSApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkU2NlbmUpIG9uQWRkU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYmFieWxvbic6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0XHRcdFx0dmFyIGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5CYWJ5bG9uTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIHNjZW5lID0gbG9hZGVyLnBhcnNlKCBqc29uICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgU2V0U2NlbmVDb21tYW5kKCBzY2VuZSApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkU2NlbmUpIG9uQWRkU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdiYWJ5bG9ubWVzaGRhdGEnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXHRcdFx0XHRcdHZhciBqc29uID0gSlNPTi5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuQmFieWxvbkxvYWRlcigpO1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbG9hZGVyLnBhcnNlR2VvbWV0cnkoIGpzb24gKTtcblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnY3RtJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgVWludDhBcnJheSggZXZlbnQudGFyZ2V0LnJlc3VsdCApO1xuXG5cdFx0XHRcdFx0dmFyIHN0cmVhbSA9IG5ldyBDVE0uU3RyZWFtKCBkYXRhICk7XG5cdFx0XHRcdFx0c3RyZWFtLm9mZnNldCA9IDA7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkNUTUxvYWRlcigpO1xuXHRcdFx0XHRcdGxvYWRlci5jcmVhdGVNb2RlbCggbmV3IENUTS5GaWxlKCBzdHJlYW0gKSwgZnVuY3Rpb24oIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0XHRnZW9tZXRyeS5zb3VyY2VUeXBlID0gXCJjdG1cIjtcblx0XHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0XHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdkYWUnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5Db2xsYWRhTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIGNvbGxhZGEgPSBsb2FkZXIucGFyc2UoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHRjb2xsYWRhLnNjZW5lLm5hbWUgPSBmaWxlbmFtZTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBjb2xsYWRhLnNjZW5lICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKGNvbGxhZGEuc2NlbmUpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2ZieCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkZCWExvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBsb2FkZXIucGFyc2UoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggb2JqZWN0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG9iamVjdCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2dsYic6XG5cdFx0XHRjYXNlICdnbHRmJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuR0xURkxvYWRlcigpO1xuXHRcdFx0XHRcdGxvYWRlci5wYXJzZSggY29udGVudHMsICcnLCBmdW5jdGlvbiAoIHJlc3VsdCApIHtcblxuXHRcdFx0XHRcdFx0cmVzdWx0LnNjZW5lLm5hbWUgPSBmaWxlbmFtZTtcblx0XHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCByZXN1bHQuc2NlbmUgKSApO1xuXHRcdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihyZXN1bHQuc2NlbmUpO1xuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRjYXNlICdqc29uJzpcblxuXHRcdFx0Y2FzZSAnM2dlbyc6XG5cdFx0XHRjYXNlICczbWF0Jzpcblx0XHRcdGNhc2UgJzNvYmonOlxuXHRcdFx0Y2FzZSAnM3Njbic6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHQvLyAyLjBcblxuXHRcdFx0XHRcdGlmICggY29udGVudHMuaW5kZXhPZiggJ3Bvc3RNZXNzYWdlJyApICE9PSAtIDEgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBibG9iID0gbmV3IEJsb2IoIFsgY29udGVudHMgXSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9ICk7XG5cdFx0XHRcdFx0XHR2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXG5cdFx0XHRcdFx0XHR2YXIgd29ya2VyID0gbmV3IFdvcmtlciggdXJsICk7XG5cblx0XHRcdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdGV2ZW50LmRhdGEubWV0YWRhdGEgPSB7IHZlcnNpb246IDIgfTtcblx0XHRcdFx0XHRcdFx0aGFuZGxlSlNPTiggZXZlbnQuZGF0YSwgZmlsZSwgZmlsZW5hbWUgKTtcblxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKCBEYXRlLm5vdygpICk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vID49IDMuMFxuXG5cdFx0XHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0XHRkYXRhID0gSlNPTi5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblxuXHRcdFx0XHRcdFx0YWxlcnQoIGVycm9yICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYW5kbGVKU09OKCBkYXRhLCBmaWxlLCBmaWxlbmFtZSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblxuXHRcdFx0Y2FzZSAna216JzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5LTVpMb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgY29sbGFkYSA9IGxvYWRlci5wYXJzZSggZXZlbnQudGFyZ2V0LnJlc3VsdCApO1xuXG5cdFx0XHRcdFx0Y29sbGFkYS5zY2VuZS5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggY29sbGFkYS5zY2VuZSApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihjb2xsYWRhLnNjZW5lKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbWQyJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5NRDJMb2FkZXIoKS5wYXJzZSggY29udGVudHMgKTtcblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHtcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0czogdHJ1ZSxcblx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsczogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoIG1lc2ggKTtcblx0XHRcdFx0XHRtZXNoLm5hbWUgPSBmaWxlbmFtZTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdvYmonOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIG9iamVjdCA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKS5wYXJzZSggY29udGVudHMgKTtcblx0XHRcdFx0XHRvYmplY3QubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG9iamVjdCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihvYmplY3QpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3BsYXljYW52YXMnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXHRcdFx0XHRcdHZhciBqc29uID0gSlNPTi5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuUGxheUNhbnZhc0xvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBsb2FkZXIucGFyc2UoIGpzb24gKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoob2JqZWN0KTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdwbHknOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBMWUxvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcInBseVwiO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3N0bCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU1RMTG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlVHlwZSA9IFwic3RsXCI7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlRmlsZSA9IGZpbGUubmFtZTtcblxuXHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXG5cdFx0XHRcdGlmICggcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyggZmlsZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdC8qXG5cdFx0XHRjYXNlICd1dGY4JzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5VVEY4TG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cdFx0XHRcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdFx0ZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQqL1xuXG5cdFx0XHRjYXNlICd2dGsnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlZUS0xvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcInZ0a1wiO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnd3JsJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciByZXN1bHQgPSBuZXcgVEhSRUUuVlJNTExvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IFNldFNjZW5lQ29tbWFuZCggcmVzdWx0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRTY2VuZSkgb25BZGRTY2VuZShzY2VuZSk7XG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ppcCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgemlwID0gbmV3IEpTWmlwKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0Ly8gQkxPQ0tTXG5cblx0XHRcdFx0XHRpZiAoIHppcC5maWxlc1sgJ21vZGVsLm9iaicgXSAmJiB6aXAuZmlsZXNbICdtYXRlcmlhbHMubXRsJyBdICkge1xuXG5cdFx0XHRcdFx0XHR2YXIgbWF0ZXJpYWxzID0gbmV3IFRIUkVFLk1UTExvYWRlcigpLnBhcnNlKCB6aXAuZmlsZSggJ21hdGVyaWFscy5tdGwnICkuYXNUZXh0KCkgKTtcblx0XHRcdFx0XHRcdHZhciBvYmplY3QgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCkuc2V0TWF0ZXJpYWxzKCBtYXRlcmlhbHMgKS5wYXJzZSggemlwLmZpbGUoICdtb2RlbC5vYmonICkuYXNUZXh0KCkgKTtcblx0XHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihvYmplY3QpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0YWxlcnQoICdVbnN1cHBvcnRlZCBmaWxlIGZvcm1hdCAoJyArIGV4dGVuc2lvbiArICAnKS4nICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmhhbmRsZUpTT04gPSBmdW5jdGlvbiAoIGRhdGEsIGZpbGUsIGZpbGVuYW1lICkge1xuXG5cdFx0aWYgKCBkYXRhLm1ldGFkYXRhID09PSB1bmRlZmluZWQgKSB7IC8vIDIuMFxuXG5cdFx0XHRkYXRhLm1ldGFkYXRhID0geyB0eXBlOiAnR2VvbWV0cnknIH07XG5cblx0XHR9XG5cblx0XHRpZiAoIGRhdGEubWV0YWRhdGEudHlwZSA9PT0gdW5kZWZpbmVkICkgeyAvLyAzLjBcblxuXHRcdFx0ZGF0YS5tZXRhZGF0YS50eXBlID0gJ0dlb21ldHJ5JztcblxuXHRcdH1cblxuXHRcdGlmICggZGF0YS5tZXRhZGF0YS5mb3JtYXRWZXJzaW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGRhdGEubWV0YWRhdGEudmVyc2lvbiA9IGRhdGEubWV0YWRhdGEuZm9ybWF0VmVyc2lvbjtcblxuXHRcdH1cblxuXHRcdHN3aXRjaCAoIGRhdGEubWV0YWRhdGEudHlwZS50b0xvd2VyQ2FzZSgpICkge1xuXG5cdFx0XHRjYXNlICdidWZmZXJnZW9tZXRyeSc6XG5cblx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeUxvYWRlcigpO1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbG9hZGVyLnBhcnNlKCBkYXRhICk7XG5cblx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggcmVzdWx0ICk7XG5cblx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdnZW9tZXRyeSc6XG5cblx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5KU09OTG9hZGVyKCk7XG5cdFx0XHRcdGxvYWRlci5zZXRUZXh0dXJlUGF0aCggc2NvcGUudGV4dHVyZVBhdGggKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbG9hZGVyLnBhcnNlKCBkYXRhICk7XG5cblx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gcmVzdWx0Lmdlb21ldHJ5O1xuXHRcdFx0XHR2YXIgbWF0ZXJpYWw7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQubWF0ZXJpYWxzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRpZiAoIHJlc3VsdC5tYXRlcmlhbHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTXVsdGlNYXRlcmlhbCggcmVzdWx0Lm1hdGVyaWFscyApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSByZXN1bHQubWF0ZXJpYWxzWyAwIF07XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcImFzY2lpXCI7XG5cdFx0XHRcdGlmIChmaWxlKXtcblx0XHRcdFx0XHRnZW9tZXRyeS5zb3VyY2VGaWxlID0gZmlsZS5uYW1lO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHR2YXIgbWVzaDtcblxuXHRcdFx0XHRpZiAoIGdlb21ldHJ5LmFuaW1hdGlvbiAmJiBnZW9tZXRyeS5hbmltYXRpb24uaGllcmFyY2h5ICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBUSFJFRS5Ta2lubmVkTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmlsZW5hbWUpe1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cblx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5PYmplY3RMb2FkZXIoKTtcblx0XHRcdFx0bG9hZGVyLnNldFRleHR1cmVQYXRoKCBzY29wZS50ZXh0dXJlUGF0aCApO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBsb2FkZXIucGFyc2UoIGRhdGEgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCBpbnN0YW5jZW9mIFRIUkVFLlNjZW5lICkge1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IFNldFNjZW5lQ29tbWFuZCggcmVzdWx0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRTY2VuZSkgb25BZGRTY2VuZShyZXN1bHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIHJlc3VsdCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihyZXN1bHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2FwcCc6XG5cblx0XHRcdFx0Ly9lZGl0b3IuZnJvbUpTT04oIGRhdGEgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cbn07XG4iLCIvKipcbiAqIEBhdXRob3IgcWlhbyAvIGh0dHBzOi8vZ2l0aHViLmNvbS9xaWFvXG4gKiBAYXV0aG9yIG1yZG9vYiAvIGh0dHA6Ly9tcmRvb2IuY29tXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xuICogQGF1dGhvciBXZXN0TGFuZ2xleSAvIGh0dHA6Ly9naXRodWIuY29tL1dlc3RMYW5nbGV5XG4gKiBAYXV0aG9yIGVyaWNoNjY2IC8gaHR0cDovL2VyaWNoYWluZXMuY29tXG4gKi9cblxuLy8gVGhpcyBzZXQgb2YgY29udHJvbHMgcGVyZm9ybXMgb3JiaXRpbmcsIGRvbGx5aW5nICh6b29taW5nKSwgYW5kIHBhbm5pbmcuXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxuLy9cbi8vICAgIE9yYml0IC0gbGVmdCBtb3VzZSAvIHRvdWNoOiBvbmUgZmluZ2VyIG1vdmVcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXG4vLyAgICBQYW4gLSByaWdodCBtb3VzZSwgb3IgYXJyb3cga2V5cyAvIHRvdWNoOiB0aHJlZSBmaW5nZXIgc3dpcGVcblxuLy9pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBPcmJpdENvbnRyb2xzIChvYmplY3QsIGRvbUVsZW1lbnQpIHtcblxuXHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGlzIGNvbnRyb2xcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcblxuXHQvLyBcInRhcmdldFwiIHNldHMgdGhlIGxvY2F0aW9uIG9mIGZvY3VzLCB3aGVyZSB0aGUgb2JqZWN0IG9yYml0cyBhcm91bmRcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdC8vIEhvdyBmYXIgeW91IGNhbiBkb2xseSBpbiBhbmQgb3V0ICggUGVyc3BlY3RpdmVDYW1lcmEgb25seSApXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xuXHR0aGlzLm1heERpc3RhbmNlID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcblx0dGhpcy5taW5ab29tID0gMDtcblx0dGhpcy5tYXhab29tID0gSW5maW5pdHk7XG5cblx0Ly8gSG93IGZhciB5b3UgY2FuIG9yYml0IHZlcnRpY2FsbHksIHVwcGVyIGFuZCBsb3dlciBsaW1pdHMuXG5cdC8vIFJhbmdlIGlzIDAgdG8gTWF0aC5QSSByYWRpYW5zLlxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXG5cdHRoaXMubWF4UG9sYXJBbmdsZSA9IE1hdGguUEk7IC8vIHJhZGlhbnNcblxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxuXHQvLyBJZiBzZXQsIG11c3QgYmUgYSBzdWItaW50ZXJ2YWwgb2YgdGhlIGludGVydmFsIFsgLSBNYXRoLlBJLCBNYXRoLlBJIF0uXG5cdHRoaXMubWluQXppbXV0aEFuZ2xlID0gLUluZmluaXR5OyAvLyByYWRpYW5zXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcblxuXHQvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgZGFtcGluZyAoaW5lcnRpYSlcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3Bcblx0dGhpcy5lbmFibGVEYW1waW5nID0gZmFsc2U7XG5cdHRoaXMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG5cblx0Ly8gVGhpcyBvcHRpb24gYWN0dWFsbHkgZW5hYmxlcyBkb2xseWluZyBpbiBhbmQgb3V0OyBsZWZ0IGFzIFwiem9vbVwiIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgem9vbWluZ1xuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xuXHR0aGlzLnpvb21TcGVlZCA9IDEuMDtcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xuXHR0aGlzLmVuYWJsZVJvdGF0ZSA9IHRydWU7XG5cdHRoaXMucm90YXRlU3BlZWQgPSAxLjA7XG5cblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgcGFubmluZ1xuXHR0aGlzLmVuYWJsZVBhbiA9IHRydWU7XG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXG5cblx0Ly8gU2V0IHRvIHRydWUgdG8gYXV0b21hdGljYWxseSByb3RhdGUgYXJvdW5kIHRoZSB0YXJnZXRcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXG5cdHRoaXMuYXV0b1JvdGF0ZSA9IGZhbHNlO1xuXHR0aGlzLmF1dG9Sb3RhdGVTcGVlZCA9IDIuMDsgLy8gMzAgc2Vjb25kcyBwZXIgcm91bmQgd2hlbiBmcHMgaXMgNjBcblxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB1c2Ugb2YgdGhlIGtleXNcblx0dGhpcy5lbmFibGVLZXlzID0gdHJ1ZTtcblxuXHQvLyBUaGUgZm91ciBhcnJvdyBrZXlzXG5cdHRoaXMua2V5cyA9IHsgTEVGVDogMzcsIFVQOiAzOCwgUklHSFQ6IDM5LCBCT1RUT006IDQwIH07XG5cblx0Ly8gTW91c2UgYnV0dG9uc1xuXHR0aGlzLm1vdXNlQnV0dG9ucyA9IHsgT1JCSVQ6IFRIUkVFLk1PVVNFLkxFRlQsIFpPT006IFRIUkVFLk1PVVNFLk1JRERMRSwgUEFOOiBUSFJFRS5NT1VTRS5SSUdIVCB9O1xuXG5cdC8vIGZvciByZXNldFxuXHR0aGlzLnRhcmdldDAgPSB0aGlzLnRhcmdldC5jbG9uZSgpO1xuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XG5cdHRoaXMuem9vbTAgPSB0aGlzLm9iamVjdC56b29tO1xuXG5cdC8vXG5cdC8vIHB1YmxpYyBtZXRob2RzXG5cdC8vXG5cblx0dGhpcy5nZXRQb2xhckFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XG5cblx0fTtcblxuXHR0aGlzLmdldEF6aW11dGhhbEFuZ2xlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcblxuXHR9O1xuXG5cdHRoaXMuc2F2ZVN0YXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUudGFyZ2V0MC5jb3B5KHNjb3BlLnRhcmdldCk7XG5cdFx0c2NvcGUucG9zaXRpb24wLmNvcHkoc2NvcGUub2JqZWN0LnBvc2l0aW9uKTtcblx0XHRzY29wZS56b29tMCA9IHNjb3BlLm9iamVjdC56b29tO1xuXG5cdH07XG5cblx0dGhpcy50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJue1xuXHRcdFx0dGFyZ2V0OiBzY29wZS50YXJnZXQsXG5cdFx0XHRwb3NpdGlvbjogc2NvcGUucG9zaXRpb24sXG5cdFx0XHR6b29tOiBzY29wZS56b29tLFxuXHRcdH1cblx0fTtcblxuXHR0aGlzLmZyb21KU09OID0gZnVuY3Rpb24gKGpzb24pIHtcblx0XHRzY29wZS50YXJnZXQwID0ganNvbi50YXJnZXQ7XG5cdFx0c2NvcGUucG9zaXRpb24wID0ganNvbi5wb3NpdGlvbjA7XG5cdFx0c2NvcGUuem9vbTAgPSBqc29uLnpvb20wO1xuXHR9O1xuXG5cdHRoaXMucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRpZiAoc2NvcGUudGFyZ2V0MCAhPSB1bmRlZmluZWQpe1xuXHRcdFx0c2NvcGUudGFyZ2V0LmNvcHkoc2NvcGUudGFyZ2V0MCk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmIChzY29wZS5wb3NpdGlvbjAgIT0gdW5kZWZpbmVkKXtcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KHNjb3BlLnBvc2l0aW9uMCk7XG5cdFx0fVxuXHRcdFxuXHRcdGlmIChzY29wZS5vYmplY3Quem9vbTAgIT0gdW5kZWZpbmVkKXtcblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gc2NvcGUuem9vbTA7XG5cdFx0fVxuXHRcdFxuXHRcdHNjb3BlLm9iamVjdC51cGRhdGVQcm9qZWN0aW9uTWF0cml4KCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcblxuXHR9O1xuXG5cdC8vIHRoaXMgbWV0aG9kIGlzIGV4cG9zZWQsIGJ1dCBwZXJoYXBzIGl0IHdvdWxkIGJlIGJldHRlciBpZiB3ZSBjYW4gbWFrZSBpdCBwcml2YXRlLi4uXG5cdHRoaXMudXBkYXRlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcblx0XHR2YXIgcXVhdCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG9iamVjdC51cCwgbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCkpO1xuXHRcdHZhciBxdWF0SW52ZXJzZSA9IHF1YXQuY2xvbmUoKS5pbnZlcnNlKCk7XG5cblx0XHR2YXIgbGFzdFBvc2l0aW9uID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblx0XHR2YXIgbGFzdFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSgpIHtcblxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xuXG5cdFx0XHRvZmZzZXQuY29weShwb3NpdGlvbikuc3ViKHNjb3BlLnRhcmdldCk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgdG8gXCJ5LWF4aXMtaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbihxdWF0KTtcblxuXHRcdFx0Ly8gYW5nbGUgZnJvbSB6LWF4aXMgYXJvdW5kIHktYXhpc1xuXHRcdFx0c3BoZXJpY2FsLnNldEZyb21WZWN0b3IzKG9mZnNldCk7XG5cblx0XHRcdGlmIChzY29wZS5hdXRvUm90YXRlICYmIHN0YXRlID09PSBTVEFURS5OT05FKSB7XG5cblx0XHRcdFx0cm90YXRlTGVmdChnZXRBdXRvUm90YXRpb25BbmdsZSgpKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzcGhlcmljYWwudGhldGEgKz0gc3BoZXJpY2FsRGVsdGEudGhldGE7XG5cdFx0XHRzcGhlcmljYWwucGhpICs9IHNwaGVyaWNhbERlbHRhLnBoaTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgdGhldGEgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnRoZXRhID0gTWF0aC5tYXgoc2NvcGUubWluQXppbXV0aEFuZ2xlLCBNYXRoLm1pbihzY29wZS5tYXhBemltdXRoQW5nbGUsIHNwaGVyaWNhbC50aGV0YSkpO1xuXG5cdFx0XHQvLyByZXN0cmljdCBwaGkgdG8gYmUgYmV0d2VlbiBkZXNpcmVkIGxpbWl0c1xuXHRcdFx0c3BoZXJpY2FsLnBoaSA9IE1hdGgubWF4KHNjb3BlLm1pblBvbGFyQW5nbGUsIE1hdGgubWluKHNjb3BlLm1heFBvbGFyQW5nbGUsIHNwaGVyaWNhbC5waGkpKTtcblxuXHRcdFx0c3BoZXJpY2FsLm1ha2VTYWZlKCk7XG5cblxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyAqPSBzY2FsZTtcblxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcblx0XHRcdHNwaGVyaWNhbC5yYWRpdXMgPSBNYXRoLm1heChzY29wZS5taW5EaXN0YW5jZSwgTWF0aC5taW4oc2NvcGUubWF4RGlzdGFuY2UsIHNwaGVyaWNhbC5yYWRpdXMpKTtcblxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXG5cdFx0XHRzY29wZS50YXJnZXQuYWRkKHBhbk9mZnNldCk7XG5cblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKHNwaGVyaWNhbCk7XG5cblx0XHRcdC8vIHJvdGF0ZSBvZmZzZXQgYmFjayB0byBcImNhbWVyYS11cC12ZWN0b3ItaXMtdXBcIiBzcGFjZVxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbihxdWF0SW52ZXJzZSk7XG5cblx0XHRcdHBvc2l0aW9uLmNvcHkoc2NvcGUudGFyZ2V0KS5hZGQob2Zmc2V0KTtcblxuXHRcdFx0c2NvcGUub2JqZWN0Lmxvb2tBdChzY29wZS50YXJnZXQpO1xuXG5cdFx0XHRpZiAoc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSkge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhICo9ICgxIC0gc2NvcGUuZGFtcGluZ0ZhY3Rvcik7XG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IpO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnNldCgwLCAwLCAwKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRzY2FsZSA9IDE7XG5cdFx0XHRwYW5PZmZzZXQuc2V0KDAsIDAsIDApO1xuXG5cdFx0XHQvLyB1cGRhdGUgY29uZGl0aW9uIGlzOlxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXG5cdFx0XHQvLyB1c2luZyBzbWFsbC1hbmdsZSBhcHByb3hpbWF0aW9uIGNvcyh4LzIpID0gMSAtIHheMiAvIDhcblxuXHRcdFx0aWYgKHpvb21DaGFuZ2VkIHx8XG5cdFx0XHRcdGxhc3RQb3NpdGlvbi5kaXN0YW5jZVRvU3F1YXJlZChzY29wZS5vYmplY3QucG9zaXRpb24pID4gRVBTIHx8XG5cdFx0XHRcdDggKiAoMSAtIGxhc3RRdWF0ZXJuaW9uLmRvdChzY29wZS5vYmplY3QucXVhdGVybmlvbikpID4gRVBTKSB7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoc2NvcGUub2JqZWN0LnBvc2l0aW9uKTtcblx0XHRcdFx0bGFzdFF1YXRlcm5pb24uY29weShzY29wZS5vYmplY3QucXVhdGVybmlvbik7XG5cdFx0XHRcdHpvb21DaGFuZ2VkID0gZmFsc2U7XG5cblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0dGhpcy5kaXNwb3NlID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UpO1xuXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25Ub3VjaFN0YXJ0LCBmYWxzZSk7XG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlLCBmYWxzZSk7XG5cblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcblxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSk7XG5cblx0XHQvL3Njb3BlLmRpc3BhdGNoRXZlbnQoIHsgdHlwZTogJ2Rpc3Bvc2UnIH0gKTsgLy8gc2hvdWxkIHRoaXMgYmUgYWRkZWQgaGVyZT9cblxuXHR9O1xuXG5cdC8vXG5cdC8vIGludGVybmFsc1xuXHQvL1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xuXHR2YXIgc3RhcnRFdmVudCA9IHsgdHlwZTogJ3N0YXJ0JyB9O1xuXHR2YXIgZW5kRXZlbnQgPSB7IHR5cGU6ICdlbmQnIH07XG5cblx0dmFyIFNUQVRFID0geyBOT05FOiAtMSwgUk9UQVRFOiAwLCBET0xMWTogMSwgUEFOOiAyLCBUT1VDSF9ST1RBVEU6IDMsIFRPVUNIX0RPTExZOiA0LCBUT1VDSF9QQU46IDUgfTtcblxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdHZhciBFUFMgPSAwLjAwMDAwMTtcblxuXHQvLyBjdXJyZW50IHBvc2l0aW9uIGluIHNwaGVyaWNhbCBjb29yZGluYXRlc1xuXHR2YXIgc3BoZXJpY2FsID0gbmV3IFRIUkVFLlNwaGVyaWNhbCgpO1xuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XG5cblx0dmFyIHNjYWxlID0gMTtcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciB6b29tQ2hhbmdlZCA9IGZhbHNlO1xuXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciByb3RhdGVFbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcm90YXRlRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwYW5TdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XG5cdHZhciBwYW5FbmQgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBkb2xseVN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcblx0dmFyIGRvbGx5RGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xuXG5cdFx0cmV0dXJuIDIgKiBNYXRoLlBJIC8gNjAgLyA2MCAqIHNjb3BlLmF1dG9Sb3RhdGVTcGVlZDtcblxuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xuXG5cdFx0cmV0dXJuIE1hdGgucG93KDAuOTUsIHNjb3BlLnpvb21TcGVlZCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoYW5nbGUpIHtcblxuXHRcdHNwaGVyaWNhbERlbHRhLnRoZXRhIC09IGFuZ2xlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiByb3RhdGVVcChhbmdsZSkge1xuXG5cdFx0c3BoZXJpY2FsRGVsdGEucGhpIC09IGFuZ2xlO1xuXG5cdH1cblxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5MZWZ0KGRpc3RhbmNlLCBvYmplY3RNYXRyaXgpIHtcblxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKG9iamVjdE1hdHJpeCwgMCk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoLWRpc3RhbmNlKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCh2KTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHZhciB2ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcblxuXHRcdHJldHVybiBmdW5jdGlvbiBwYW5VcChkaXN0YW5jZSwgb2JqZWN0TWF0cml4KSB7XG5cblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbihvYmplY3RNYXRyaXgsIDEpOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XG5cdFx0XHR2Lm11bHRpcGx5U2NhbGFyKGRpc3RhbmNlKTtcblxuXHRcdFx0cGFuT2Zmc2V0LmFkZCh2KTtcblxuXHRcdH07XG5cblx0fSgpO1xuXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxuXHR2YXIgcGFuID0gZnVuY3Rpb24gKCkge1xuXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24gcGFuKGRlbHRhWCwgZGVsdGFZKSB7XG5cblx0XHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0XHRpZiAoc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEpIHtcblxuXHRcdFx0XHQvLyBwZXJzcGVjdGl2ZVxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XG5cdFx0XHRcdG9mZnNldC5jb3B5KHBvc2l0aW9uKS5zdWIoc2NvcGUudGFyZ2V0KTtcblx0XHRcdFx0dmFyIHRhcmdldERpc3RhbmNlID0gb2Zmc2V0Lmxlbmd0aCgpO1xuXG5cdFx0XHRcdC8vIGhhbGYgb2YgdGhlIGZvdiBpcyBjZW50ZXIgdG8gdG9wIG9mIHNjcmVlblxuXHRcdFx0XHR0YXJnZXREaXN0YW5jZSAqPSBNYXRoLnRhbigoc2NvcGUub2JqZWN0LmZvdiAvIDIpICogTWF0aC5QSSAvIDE4MC4wKTtcblxuXHRcdFx0XHQvLyB3ZSBhY3R1YWxseSBkb24ndCB1c2Ugc2NyZWVuV2lkdGgsIHNpbmNlIHBlcnNwZWN0aXZlIGNhbWVyYSBpcyBmaXhlZCB0byBzY3JlZW4gaGVpZ2h0XG5cdFx0XHRcdHBhbkxlZnQoMiAqIGRlbHRhWCAqIHRhcmdldERpc3RhbmNlIC8gZWxlbWVudC5jbGllbnRIZWlnaHQsIHNjb3BlLm9iamVjdC5tYXRyaXgpO1xuXHRcdFx0XHRwYW5VcCgyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCk7XG5cblx0XHRcdH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhKSB7XG5cblx0XHRcdFx0Ly8gb3J0aG9ncmFwaGljXG5cdFx0XHRcdHBhbkxlZnQoZGVsdGFYICogKHNjb3BlLm9iamVjdC5yaWdodCAtIHNjb3BlLm9iamVjdC5sZWZ0KSAvIHNjb3BlLm9iamVjdC56b29tIC8gZWxlbWVudC5jbGllbnRXaWR0aCwgc2NvcGUub2JqZWN0Lm1hdHJpeCk7XG5cdFx0XHRcdHBhblVwKGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4KTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBjYW1lcmEgbmVpdGhlciBvcnRob2dyYXBoaWMgbm9yIHBlcnNwZWN0aXZlXG5cdFx0XHRcdGNvbnNvbGUud2FybignV0FSTklORzogT3JiaXRDb250cm9scy5qcyBlbmNvdW50ZXJlZCBhbiB1bmtub3duIGNhbWVyYSB0eXBlIC0gcGFuIGRpc2FibGVkLicpO1xuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHR9KCk7XG5cblx0ZnVuY3Rpb24gZG9sbHlJbihkb2xseVNjYWxlKSB7XG5cblx0XHRpZiAoc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEpIHtcblxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoc2NvcGUubWluWm9vbSwgTWF0aC5taW4oc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gKiBkb2xseVNjYWxlKSk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicpO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBkb2xseU91dChkb2xseVNjYWxlKSB7XG5cblx0XHRpZiAoc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEpIHtcblxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcblxuXHRcdH0gZWxzZSBpZiAoc2NvcGUub2JqZWN0LmlzT3J0aG9ncmFwaGljQ2FtZXJhKSB7XG5cblx0XHRcdHNjb3BlLm9iamVjdC56b29tID0gTWF0aC5tYXgoc2NvcGUubWluWm9vbSwgTWF0aC5taW4oc2NvcGUubWF4Wm9vbSwgc2NvcGUub2JqZWN0Lnpvb20gLyBkb2xseVNjYWxlKSk7XG5cdFx0XHRzY29wZS5vYmplY3QudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdXQVJOSU5HOiBPcmJpdENvbnRyb2xzLmpzIGVuY291bnRlcmVkIGFuIHVua25vd24gY2FtZXJhIHR5cGUgLSBkb2xseS96b29tIGRpc2FibGVkLicpO1xuXHRcdFx0c2NvcGUuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG5cdFx0fVxuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxuXHQvL1xuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZShldmVudCkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93blJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VEb3duRG9sbHkoZXZlbnQpIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Eb2xseScgKTtcblxuXHRcdGRvbGx5U3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZURvd25QYW4oZXZlbnQpIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XG5cblx0XHRwYW5TdGFydC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZShldmVudCkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZVJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZUVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyhyb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0KTtcblxuXHRcdHZhciBlbGVtZW50ID0gc2NvcGUuZG9tRWxlbWVudCA9PT0gZG9jdW1lbnQgPyBzY29wZS5kb21FbGVtZW50LmJvZHkgOiBzY29wZS5kb21FbGVtZW50O1xuXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxuXHRcdHJvdGF0ZUxlZnQoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS54IC8gZWxlbWVudC5jbGllbnRXaWR0aCAqIHNjb3BlLnJvdGF0ZVNwZWVkKTtcblxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxuXHRcdHJvdGF0ZVVwKDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0ICogc2NvcGUucm90YXRlU3BlZWQpO1xuXG5cdFx0cm90YXRlU3RhcnQuY29weShyb3RhdGVFbmQpO1xuXG5cdFx0c2NvcGUudXBkYXRlKCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KGV2ZW50KSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlRG9sbHknICk7XG5cblx0XHRkb2xseUVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoZG9sbHlFbmQsIGRvbGx5U3RhcnQpO1xuXG5cdFx0aWYgKGRvbGx5RGVsdGEueSA+IDApIHtcblxuXHRcdFx0ZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XG5cblx0XHR9IGVsc2UgaWYgKGRvbGx5RGVsdGEueSA8IDApIHtcblxuXHRcdFx0ZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KGRvbGx5RW5kKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oZXZlbnQpIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcblxuXHRcdHBhbihwYW5EZWx0YS54LCBwYW5EZWx0YS55KTtcblxuXHRcdHBhblN0YXJ0LmNvcHkocGFuRW5kKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZVVwKGV2ZW50KSB7XG5cblx0XHQvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlV2hlZWwoZXZlbnQpIHtcblxuXHRcdC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcblxuXHRcdGlmIChldmVudC5kZWx0YVkgPCAwKSB7XG5cblx0XHRcdGRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcblxuXHRcdH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xuXG5cdFx0XHRkb2xseUluKGdldFpvb21TY2FsZSgpKTtcblxuXHRcdH1cblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlEb3duKGV2ZW50KSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcblxuXHRcdHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xuXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuVVA6XG5cdFx0XHRcdHBhbigwLCBzY29wZS5rZXlQYW5TcGVlZCk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcblx0XHRcdFx0cGFuKDAsIC1zY29wZS5rZXlQYW5TcGVlZCk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkxFRlQ6XG5cdFx0XHRcdHBhbihzY29wZS5rZXlQYW5TcGVlZCwgMCk7XG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLlJJR0hUOlxuXHRcdFx0XHRwYW4oLXNjb3BlLmtleVBhblNwZWVkLCAwKTtcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0Um90YXRlKGV2ZW50KSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcblxuXHRcdHJvdGF0ZVN0YXJ0LnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KGV2ZW50KSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydERvbGx5JyApO1xuXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVg7XG5cdFx0dmFyIGR5ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWSAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVk7XG5cblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xuXG5cdFx0ZG9sbHlTdGFydC5zZXQoMCwgZGlzdGFuY2UpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaFN0YXJ0UGFuKGV2ZW50KSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcblxuXHRcdHBhblN0YXJ0LnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKGV2ZW50KSB7XG5cblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlUm90YXRlJyApO1xuXG5cdFx0cm90YXRlRW5kLnNldChldmVudC50b3VjaGVzWzBdLnBhZ2VYLCBldmVudC50b3VjaGVzWzBdLnBhZ2VZKTtcblx0XHRyb3RhdGVEZWx0YS5zdWJWZWN0b3JzKHJvdGF0ZUVuZCwgcm90YXRlU3RhcnQpO1xuXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XG5cblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXG5cdFx0cm90YXRlTGVmdCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQpO1xuXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXG5cdFx0cm90YXRlVXAoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCk7XG5cblx0XHRyb3RhdGVTdGFydC5jb3B5KHJvdGF0ZUVuZCk7XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoZXZlbnQpIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVEb2xseScgKTtcblxuXHRcdHZhciBkeCA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBldmVudC50b3VjaGVzWzFdLnBhZ2VYO1xuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSBldmVudC50b3VjaGVzWzFdLnBhZ2VZO1xuXG5cdFx0dmFyIGRpc3RhbmNlID0gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcblxuXHRcdGRvbGx5RW5kLnNldCgwLCBkaXN0YW5jZSk7XG5cblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoZG9sbHlFbmQsIGRvbGx5U3RhcnQpO1xuXG5cdFx0aWYgKGRvbGx5RGVsdGEueSA+IDApIHtcblxuXHRcdFx0ZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xuXG5cdFx0fSBlbHNlIGlmIChkb2xseURlbHRhLnkgPCAwKSB7XG5cblx0XHRcdGRvbGx5SW4oZ2V0Wm9vbVNjYWxlKCkpO1xuXG5cdFx0fVxuXG5cdFx0ZG9sbHlTdGFydC5jb3B5KGRvbGx5RW5kKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaE1vdmVQYW4oZXZlbnQpIHtcblxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaE1vdmVQYW4nICk7XG5cblx0XHRwYW5FbmQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xuXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcblxuXHRcdHBhbihwYW5EZWx0YS54LCBwYW5EZWx0YS55KTtcblxuXHRcdHBhblN0YXJ0LmNvcHkocGFuRW5kKTtcblxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xuXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoRW5kJyApO1xuXG5cdH1cblxuXHQvL1xuXHQvLyBldmVudCBoYW5kbGVycyAtIEZTTTogbGlzdGVuIGZvciBldmVudHMgYW5kIHJlc2V0IHN0YXRlXG5cdC8vXG5cblx0ZnVuY3Rpb24gb25Nb3VzZURvd24oZXZlbnQpIHtcblxuXHRcdGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdHN3aXRjaCAoZXZlbnQuYnV0dG9uKSB7XG5cblx0XHRcdGNhc2Ugc2NvcGUubW91c2VCdXR0b25zLk9SQklUOlxuXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUm90YXRlKGV2ZW50KTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5tb3VzZUJ1dHRvbnMuWk9PTTpcblxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Eb2xseShldmVudCk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5ET0xMWTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSBzY29wZS5tb3VzZUJ1dHRvbnMuUEFOOlxuXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKGV2ZW50KTtcblxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlBBTjtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHRcdGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSkge1xuXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuXG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvbk1vdXNlTW92ZShldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0c3dpdGNoIChzdGF0ZSkge1xuXG5cdFx0XHRjYXNlIFNUQVRFLlJPVEFURTpcblxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVJvdGF0ZShldmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgU1RBVEUuRE9MTFk6XG5cblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoZXZlbnQpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIFNUQVRFLlBBTjpcblxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0XHRcdGhhbmRsZU1vdXNlTW92ZVBhbihldmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VVcChldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRoYW5kbGVNb3VzZVVwKGV2ZW50KTtcblxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XG5cblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uTW91c2VXaGVlbChldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8IChzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFKSkgcmV0dXJuO1xuXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuXHRcdGhhbmRsZU1vdXNlV2hlZWwoZXZlbnQpO1xuXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTsgLy8gbm90IHN1cmUgd2h5IHRoZXNlIGFyZSBoZXJlLi4uXG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChlbmRFdmVudCk7XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZUtleXMgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdGhhbmRsZUtleURvd24oZXZlbnQpO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoU3RhcnQoZXZlbnQpIHtcblxuXHRcdGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xuXG5cdFx0c3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xuXG5cdFx0XHRjYXNlIDE6XHQvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxuXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVSb3RhdGUgPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZShldmVudCk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9ST1RBVEU7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdFx0XHRoYW5kbGVUb3VjaFN0YXJ0RG9sbHkoZXZlbnQpO1xuXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XG5cblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFBhbihldmVudCk7XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5UT1VDSF9QQU47XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdFx0aWYgKHN0YXRlICE9PSBTVEFURS5OT05FKSB7XG5cblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoc3RhcnRFdmVudCk7XG5cblx0XHR9XG5cblx0fVxuXG5cdGZ1bmN0aW9uIG9uVG91Y2hNb3ZlKGV2ZW50KSB7XG5cblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRzd2l0Y2ggKGV2ZW50LnRvdWNoZXMubGVuZ3RoKSB7XG5cblx0XHRcdGNhc2UgMTogLy8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcblxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xuXHRcdFx0XHRpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX1JPVEFURSkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoZXZlbnQpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlIDI6IC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcblxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcblx0XHRcdFx0aWYgKHN0YXRlICE9PSBTVEFURS5UT1VDSF9ET0xMWSkgcmV0dXJuOyAvLyBpcyB0aGlzIG5lZWRlZD8uLi5cblxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseShldmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgMzogLy8gdGhyZWUtZmluZ2VyZWQgdG91Y2g6IHBhblxuXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XG5cdFx0XHRcdGlmIChzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUEFOKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxuXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbihldmVudCk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XG5cblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdGhhbmRsZVRvdWNoRW5kKGV2ZW50KTtcblxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xuXG5cdFx0c3RhdGUgPSBTVEFURS5OT05FO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KGV2ZW50KSB7XG5cblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0fVxuXG5cdC8vXG5cblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjb250ZXh0bWVudScsIG9uQ29udGV4dE1lbnUsIGZhbHNlKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBvbk1vdXNlV2hlZWwsIGZhbHNlKTtcblxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBvblRvdWNoTW92ZSwgZmFsc2UpO1xuXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSk7XG5cblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XG5cblx0dGhpcy51cGRhdGUoKTtcblxufTtcblxuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpO1xuT3JiaXRDb250cm9scy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBPcmJpdENvbnRyb2xzO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhPcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xuXG5cdGNlbnRlcjoge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnKTtcblx0XHRcdHJldHVybiB0aGlzLnRhcmdldDtcblxuXHRcdH1cblxuXHR9LFxuXG5cdC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHlcblxuXHRub1pvb206IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyk7XG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlWm9vbTtcblxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1pvb20gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVab29tIGluc3RlYWQuJyk7XG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhdmFsdWU7XG5cblx0XHR9XG5cblx0fSxcblxuXHRub1JvdGF0ZToge1xuXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyk7XG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlUm90YXRlO1xuXG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vUm90YXRlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUm90YXRlIGluc3RlYWQuJyk7XG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICF2YWx1ZTtcblxuXHRcdH1cblxuXHR9LFxuXG5cdG5vUGFuOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nKTtcblx0XHRcdHJldHVybiAhdGhpcy5lbmFibGVQYW47XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9QYW4gaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVQYW4gaW5zdGVhZC4nKTtcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gIXZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0bm9LZXlzOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicpO1xuXHRcdFx0cmV0dXJuICF0aGlzLmVuYWJsZUtleXM7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9LZXlzIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlS2V5cyBpbnN0ZWFkLicpO1xuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gIXZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0c3RhdGljTW92aW5nOiB7XG5cblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicpO1xuXHRcdFx0cmV0dXJuICF0aGlzLmVuYWJsZURhbXBpbmc7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuc3RhdGljTW92aW5nIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlRGFtcGluZyBpbnN0ZWFkLicpO1xuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gIXZhbHVlO1xuXG5cdFx0fVxuXG5cdH0sXG5cblx0ZHluYW1pY0RhbXBpbmdGYWN0b3I6IHtcblxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xuXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5keW5hbWljRGFtcGluZ0ZhY3RvciBoYXMgYmVlbiByZW5hbWVkLiBVc2UgLmRhbXBpbmdGYWN0b3IgaW5zdGVhZC4nKTtcblx0XHRcdHJldHVybiB0aGlzLmRhbXBpbmdGYWN0b3I7XG5cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAuZHluYW1pY0RhbXBpbmdGYWN0b3IgaGFzIGJlZW4gcmVuYW1lZC4gVXNlIC5kYW1waW5nRmFjdG9yIGluc3RlYWQuJyk7XG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcblxuXHRcdH1cblxuXHR9XG5cbn0pOyIsIi8qKlxuICogQGF1dGhvciBhcm9kaWMgLyBodHRwczovL2dpdGh1Yi5jb20vYXJvZGljXG4gKi9cblxuLy9pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEdpem1vTWF0ZXJpYWwgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuXG5cdFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsLmNhbGwodGhpcyk7XG5cblx0dGhpcy5kZXB0aFRlc3QgPSBmYWxzZTtcblx0dGhpcy5kZXB0aFdyaXRlID0gZmFsc2U7XG5cdHRoaXMuc2lkZSA9IFRIUkVFLkZyb250U2lkZTtcblx0dGhpcy50cmFuc3BhcmVudCA9IHRydWU7XG5cblx0dGhpcy5zZXRWYWx1ZXMocGFyYW1ldGVycyk7XG5cblx0dGhpcy5vbGRDb2xvciA9IHRoaXMuY29sb3IuY2xvbmUoKTtcblx0dGhpcy5vbGRPcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuXG5cdHRoaXMuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGhpZ2hsaWdodGVkKSB7XG5cblx0XHRpZiAoaGlnaGxpZ2h0ZWQpIHtcblxuXHRcdFx0dGhpcy5jb2xvci5zZXRSR0IoMSwgMSwgMCk7XG5cdFx0XHR0aGlzLm9wYWNpdHkgPSAxO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5jb2xvci5jb3B5KHRoaXMub2xkQ29sb3IpO1xuXHRcdFx0dGhpcy5vcGFjaXR5ID0gdGhpcy5vbGRPcGFjaXR5O1xuXG5cdFx0fVxuXG5cdH07XG5cbn07XG5cbkdpem1vTWF0ZXJpYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbC5wcm90b3R5cGUpO1xuR2l6bW9NYXRlcmlhbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHaXptb01hdGVyaWFsO1xuXG5cbnZhciBHaXptb0xpbmVNYXRlcmlhbCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG5cblx0VEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwuY2FsbCh0aGlzKTtcblxuXHR0aGlzLmRlcHRoVGVzdCA9IGZhbHNlO1xuXHR0aGlzLmRlcHRoV3JpdGUgPSBmYWxzZTtcblx0dGhpcy50cmFuc3BhcmVudCA9IHRydWU7XG5cdHRoaXMubGluZXdpZHRoID0gMTtcblxuXHR0aGlzLnNldFZhbHVlcyhwYXJhbWV0ZXJzKTtcblxuXHR0aGlzLm9sZENvbG9yID0gdGhpcy5jb2xvci5jbG9uZSgpO1xuXHR0aGlzLm9sZE9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG5cblx0dGhpcy5oaWdobGlnaHQgPSBmdW5jdGlvbiAoaGlnaGxpZ2h0ZWQpIHtcblxuXHRcdGlmIChoaWdobGlnaHRlZCkge1xuXG5cdFx0XHR0aGlzLmNvbG9yLnNldFJHQigxLCAxLCAwKTtcblx0XHRcdHRoaXMub3BhY2l0eSA9IDE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmNvbG9yLmNvcHkodGhpcy5vbGRDb2xvcik7XG5cdFx0XHR0aGlzLm9wYWNpdHkgPSB0aGlzLm9sZE9wYWNpdHk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuR2l6bW9MaW5lTWF0ZXJpYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbC5wcm90b3R5cGUpO1xuR2l6bW9MaW5lTWF0ZXJpYWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2l6bW9MaW5lTWF0ZXJpYWw7XG5cblxudmFyIHBpY2tlck1hdGVyaWFsID0gbmV3IEdpem1vTWF0ZXJpYWwoeyB2aXNpYmxlOiBmYWxzZSwgdHJhbnNwYXJlbnQ6IGZhbHNlIH0pO1xuXG5cbnZhciBUcmFuc2Zvcm1HaXptbyA9IGZ1bmN0aW9uICgpIHtcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRUSFJFRS5PYmplY3QzRC5jYWxsKHRoaXMpO1xuXG5cdFx0dGhpcy5oYW5kbGVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cdFx0dGhpcy5waWNrZXJzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cdFx0dGhpcy5wbGFuZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuXHRcdHRoaXMuYWRkKHRoaXMuaGFuZGxlcyk7XG5cdFx0dGhpcy5hZGQodGhpcy5waWNrZXJzKTtcblx0XHR0aGlzLmFkZCh0aGlzLnBsYW5lcyk7XG5cblx0XHQvLy8vIFBMQU5FU1xuXG5cdFx0dmFyIHBsYW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1MCwgNTAsIDIsIDIpO1xuXHRcdHZhciBwbGFuZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgdmlzaWJsZTogZmFsc2UsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7XG5cblx0XHR2YXIgcGxhbmVzID0ge1xuXHRcdFx0XCJYWVwiOiBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKSxcblx0XHRcdFwiWVpcIjogbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCksXG5cdFx0XHRcIlhaXCI6IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpLFxuXHRcdFx0XCJYWVpFXCI6IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpXG5cdFx0fTtcblxuXHRcdHRoaXMuYWN0aXZlUGxhbmUgPSBwbGFuZXNbXCJYWVpFXCJdO1xuXG5cdFx0cGxhbmVzW1wiWVpcIl0ucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcblx0XHRwbGFuZXNbXCJYWlwiXS5yb3RhdGlvbi5zZXQoLSBNYXRoLlBJIC8gMiwgMCwgMCk7XG5cblx0XHRmb3IgKHZhciBpIGluIHBsYW5lcykge1xuXG5cdFx0XHRwbGFuZXNbaV0ubmFtZSA9IGk7XG5cdFx0XHR0aGlzLnBsYW5lcy5hZGQocGxhbmVzW2ldKTtcblx0XHRcdHRoaXMucGxhbmVzW2ldID0gcGxhbmVzW2ldO1xuXG5cdFx0fVxuXG5cdFx0Ly8vLyBIQU5ETEVTIEFORCBQSUNLRVJTXG5cblx0XHR2YXIgc2V0dXBHaXptb3MgPSBmdW5jdGlvbiAoZ2l6bW9NYXAsIHBhcmVudCkge1xuXG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIGdpem1vTWFwKSB7XG5cblx0XHRcdFx0Zm9yIChpID0gZ2l6bW9NYXBbbmFtZV0ubGVuZ3RoOyBpLS07KSB7XG5cblx0XHRcdFx0XHR2YXIgb2JqZWN0ID0gZ2l6bW9NYXBbbmFtZV1baV1bMF07XG5cdFx0XHRcdFx0dmFyIHBvc2l0aW9uID0gZ2l6bW9NYXBbbmFtZV1baV1bMV07XG5cdFx0XHRcdFx0dmFyIHJvdGF0aW9uID0gZ2l6bW9NYXBbbmFtZV1baV1bMl07XG5cblx0XHRcdFx0XHRvYmplY3QubmFtZSA9IG5hbWU7XG5cblx0XHRcdFx0XHRpZiAocG9zaXRpb24pIG9iamVjdC5wb3NpdGlvbi5zZXQocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdLCBwb3NpdGlvblsyXSk7XG5cdFx0XHRcdFx0aWYgKHJvdGF0aW9uKSBvYmplY3Qucm90YXRpb24uc2V0KHJvdGF0aW9uWzBdLCByb3RhdGlvblsxXSwgcm90YXRpb25bMl0pO1xuXG5cdFx0XHRcdFx0cGFyZW50LmFkZChvYmplY3QpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHRcdHNldHVwR2l6bW9zKHRoaXMuaGFuZGxlR2l6bW9zLCB0aGlzLmhhbmRsZXMpO1xuXHRcdHNldHVwR2l6bW9zKHRoaXMucGlja2VyR2l6bW9zLCB0aGlzLnBpY2tlcnMpO1xuXG5cdFx0Ly8gcmVzZXQgVHJhbnNmb3JtYXRpb25zXG5cblx0XHR0aGlzLnRyYXZlcnNlKGZ1bmN0aW9uIChjaGlsZCkge1xuXG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG5cblx0XHRcdFx0Y2hpbGQudXBkYXRlTWF0cml4KCk7XG5cblx0XHRcdFx0dmFyIHRlbXBHZW9tZXRyeSA9IGNoaWxkLmdlb21ldHJ5LmNsb25lKCk7XG5cdFx0XHRcdHRlbXBHZW9tZXRyeS5hcHBseU1hdHJpeChjaGlsZC5tYXRyaXgpO1xuXHRcdFx0XHRjaGlsZC5nZW9tZXRyeSA9IHRlbXBHZW9tZXRyeTtcblxuXHRcdFx0XHRjaGlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG5cdFx0XHRcdGNoaWxkLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcblx0XHRcdFx0Y2hpbGQuc2NhbGUuc2V0KDEsIDEsIDEpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGF4aXMpIHtcblxuXHRcdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG5cblx0XHRcdGlmIChjaGlsZC5tYXRlcmlhbCAmJiBjaGlsZC5tYXRlcmlhbC5oaWdobGlnaHQpIHtcblxuXHRcdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gYXhpcykge1xuXG5cdFx0XHRcdFx0Y2hpbGQubWF0ZXJpYWwuaGlnaGxpZ2h0KHRydWUpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjaGlsZC5tYXRlcmlhbC5oaWdobGlnaHQoZmFsc2UpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fTtcblxufTtcblxuVHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUpO1xuVHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHJhbnNmb3JtR2l6bW87XG5cblRyYW5zZm9ybUdpem1vLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAocm90YXRpb24sIGV5ZSkge1xuXG5cdHZhciB2ZWMxID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XG5cdHZhciB2ZWMyID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG5cdHZhciBsb29rQXRNYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXG5cdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG5cblx0XHRpZiAoY2hpbGQubmFtZS5zZWFyY2goXCJFXCIpICE9PSAtIDEpIHtcblxuXHRcdFx0Y2hpbGQucXVhdGVybmlvbi5zZXRGcm9tUm90YXRpb25NYXRyaXgobG9va0F0TWF0cml4Lmxvb2tBdChleWUsIHZlYzEsIHZlYzIpKTtcblxuXHRcdH0gZWxzZSBpZiAoY2hpbGQubmFtZS5zZWFyY2goXCJYXCIpICE9PSAtIDEgfHwgY2hpbGQubmFtZS5zZWFyY2goXCJZXCIpICE9PSAtIDEgfHwgY2hpbGQubmFtZS5zZWFyY2goXCJaXCIpICE9PSAtIDEpIHtcblxuXHRcdFx0Y2hpbGQucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIocm90YXRpb24pO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG59O1xuXG52YXIgVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0VHJhbnNmb3JtR2l6bW8uY2FsbCh0aGlzKTtcblxuXHR2YXIgYXJyb3dHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAsIDAuMDUsIDAuMiwgMTIsIDEsIGZhbHNlKSk7XG5cdG1lc2gucG9zaXRpb24ueSA9IDAuNTtcblx0bWVzaC51cGRhdGVNYXRyaXgoKTtcblxuXHRhcnJvd0dlb21ldHJ5Lm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcblxuXHR2YXIgbGluZVhHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWEdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMSwgMCwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVlHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWUdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMSwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVpHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWkdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMCwgMV0sIDMpKTtcblxuXHR0aGlzLmhhbmRsZUdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSksIFswLjUsIDAsIDBdLCBbMCwgMCwgLSBNYXRoLlBJIC8gMl1dLFxuXHRcdFx0W25ldyBUSFJFRS5MaW5lKGxpbmVYR2VvbWV0cnksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSldXG5cdFx0XSxcblxuXHRcdFk6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwZmYwMCB9KSksIFswLCAwLjUsIDBdXSxcblx0XHRcdFtuZXcgVEhSRUUuTGluZShsaW5lWUdlb21ldHJ5LCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2goYXJyb3dHZW9tZXRyeSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSkpLCBbMCwgMCwgMC41XSwgW01hdGguUEkgLyAyLCAwLCAwXV0sXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobGluZVpHZW9tZXRyeSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pKV1cblx0XHRdLFxuXG5cdFx0WFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeSgwLjEsIDApLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgb3BhY2l0eTogMC4yNSB9KSksIFswLCAwLCAwXSwgWzAsIDAsIDBdXVxuXHRcdF0sXG5cblx0XHRYWTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuMjksIDAuMjkpLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmYwMCwgb3BhY2l0eTogMC4yNSB9KSksIFswLjE1LCAwLjE1LCAwXV1cblx0XHRdLFxuXG5cdFx0WVo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgwLjI5LCAwLjI5KSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmZmYsIG9wYWNpdHk6IDAuMjUgfSkpLCBbMCwgMC4xNSwgMC4xNV0sIFswLCBNYXRoLlBJIC8gMiwgMF1dXG5cdFx0XSxcblxuXHRcdFhaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMC4yOSwgMC4yOSksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMGZmLCBvcGFjaXR5OiAwLjI1IH0pKSwgWzAuMTUsIDAsIDAuMTVdLCBbLSBNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5waWNrZXJHaXptb3MgPSB7XG5cblx0XHRYOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAuNiwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5DeWxpbmRlckJ1ZmZlckdlb21ldHJ5KDAuMiwgMCwgMSwgNCwgMSwgZmFsc2UpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLjYsIDBdXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAsIDAuNl0sIFtNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFhZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5PY3RhaGVkcm9uR2VvbWV0cnkoMC4yLCAwKSwgcGlja2VyTWF0ZXJpYWwpXVxuXHRcdF0sXG5cblx0XHRYWTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpLCBbMC4yLCAwLjIsIDBdXVxuXHRcdF0sXG5cblx0XHRZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMC4yLCAwLjJdLCBbMCwgTWF0aC5QSSAvIDIsIDBdXVxuXHRcdF0sXG5cblx0XHRYWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpLCBbMC4yLCAwLCAwLjJdLCBbLSBNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5zZXRBY3RpdmVQbGFuZSA9IGZ1bmN0aW9uIChheGlzLCBleWUpIHtcblxuXHRcdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0XHRleWUuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZSh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbih0aGlzLnBsYW5lc1tcIlhZXCJdLm1hdHJpeFdvcmxkKSkpO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFwiKSB7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZXllLnkpID4gTWF0aC5hYnMoZXllLnopKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWlwiXTtcblxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSBcIllcIikge1xuXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVwiXTtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGV5ZS54KSA+IE1hdGguYWJzKGV5ZS56KSkgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWVpcIl07XG5cblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJaXCIpIHtcblxuXHRcdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0XHRcdGlmIChNYXRoLmFicyhleWUueCkgPiBNYXRoLmFicyhleWUueSkpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIllaXCJdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFlaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZWkVcIl07XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJYWVwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVwiXTtcblxuXHRcdGlmIChheGlzID09PSBcIllaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIllaXCJdO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFpcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0fTtcblxuXHR0aGlzLmluaXQoKTtcblxufTtcblxuVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUcmFuc2Zvcm1HaXptby5wcm90b3R5cGUpO1xuVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGU7XG5cbnZhciBUcmFuc2Zvcm1HaXptb1JvdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRUcmFuc2Zvcm1HaXptby5jYWxsKHRoaXMpO1xuXG5cdHZhciBDaXJjbGVHZW9tZXRyeSA9IGZ1bmN0aW9uIChyYWRpdXMsIGZhY2luZywgYXJjKSB7XG5cblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcblx0XHR2YXIgdmVydGljZXMgPSBbXTtcblx0XHRhcmMgPSBhcmMgPyBhcmMgOiAxO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gNjQgKiBhcmM7ICsraSkge1xuXG5cdFx0XHRpZiAoZmFjaW5nID09PSAneCcpIHZlcnRpY2VzLnB1c2goMCwgTWF0aC5jb3MoaSAvIDMyICogTWF0aC5QSSkgKiByYWRpdXMsIE1hdGguc2luKGkgLyAzMiAqIE1hdGguUEkpICogcmFkaXVzKTtcblx0XHRcdGlmIChmYWNpbmcgPT09ICd5JykgdmVydGljZXMucHVzaChNYXRoLmNvcyhpIC8gMzIgKiBNYXRoLlBJKSAqIHJhZGl1cywgMCwgTWF0aC5zaW4oaSAvIDMyICogTWF0aC5QSSkgKiByYWRpdXMpO1xuXHRcdFx0aWYgKGZhY2luZyA9PT0gJ3onKSB2ZXJ0aWNlcy5wdXNoKE1hdGguc2luKGkgLyAzMiAqIE1hdGguUEkpICogcmFkaXVzLCBNYXRoLmNvcyhpIC8gMzIgKiBNYXRoLlBJKSAqIHJhZGl1cywgMCk7XG5cblx0XHR9XG5cblx0XHRnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodmVydGljZXMsIDMpKTtcblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fTtcblxuXHR0aGlzLmhhbmRsZUdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTGluZShuZXcgQ2lyY2xlR2VvbWV0cnkoMSwgJ3gnLCAwLjUpLCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobmV3IENpcmNsZUdlb21ldHJ5KDEsICd5JywgMC41KSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDBmZjAwIH0pKV1cblx0XHRdLFxuXG5cdFx0WjogW1xuXHRcdFx0W25ldyBUSFJFRS5MaW5lKG5ldyBDaXJjbGVHZW9tZXRyeSgxLCAneicsIDAuNSksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KSldXG5cdFx0XSxcblxuXHRcdEU6IFtcblx0XHRcdFtuZXcgVEhSRUUuTGluZShuZXcgQ2lyY2xlR2VvbWV0cnkoMS4yNSwgJ3onLCAxKSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4Y2NjYzAwIH0pKV1cblx0XHRdLFxuXG5cdFx0WFlaRTogW1xuXHRcdFx0W25ldyBUSFJFRS5MaW5lKG5ldyBDaXJjbGVHZW9tZXRyeSgxLCAneicsIDEpLCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHg3ODc4NzggfSkpXVxuXHRcdF1cblxuXHR9O1xuXG5cdHRoaXMucGlja2VyR2l6bW9zID0ge1xuXG5cdFx0WDogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Ub3J1c0J1ZmZlckdlb21ldHJ5KDEsIDAuMTIsIDQsIDEyLCBNYXRoLlBJKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMF0sIFswLCAtIE1hdGguUEkgLyAyLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Ub3J1c0J1ZmZlckdlb21ldHJ5KDEsIDAuMTIsIDQsIDEyLCBNYXRoLlBJKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMF0sIFtNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuVG9ydXNCdWZmZXJHZW9tZXRyeSgxLCAwLjEyLCA0LCAxMiwgTWF0aC5QSSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAsIDBdLCBbMCwgMCwgLSBNYXRoLlBJIC8gMl1dXG5cdFx0XSxcblxuXHRcdEU6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuVG9ydXNCdWZmZXJHZW9tZXRyeSgxLjI1LCAwLjEyLCAyLCAyNCksIHBpY2tlck1hdGVyaWFsKV1cblx0XHRdLFxuXG5cdFx0WFlaRTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKCldLy8gVE9ET1xuXHRcdF1cblxuXHR9O1xuXG5cdHRoaXMuc2V0QWN0aXZlUGxhbmUgPSBmdW5jdGlvbiAoYXhpcykge1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiRVwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVpFXCJdO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJZWlwiXTtcblxuXHRcdGlmIChheGlzID09PSBcIllcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAocm90YXRpb24sIGV5ZTIpIHtcblxuXHRcdFRyYW5zZm9ybUdpem1vLnByb3RvdHlwZS51cGRhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuXHRcdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0XHR2YXIgd29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAxKTtcblx0XHR2YXIgdGVtcFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHZhciB1bml0WCA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApO1xuXHRcdHZhciB1bml0WSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuXHRcdHZhciB1bml0WiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpO1xuXHRcdHZhciBxdWF0ZXJuaW9uWCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cdFx0dmFyIHF1YXRlcm5pb25ZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0XHR2YXIgcXVhdGVybmlvblogPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHZhciBleWUgPSBleWUyLmNsb25lKCk7XG5cblx0XHR3b3JsZFJvdGF0aW9uLmNvcHkodGhpcy5wbGFuZXNbXCJYWVwiXS5yb3RhdGlvbik7XG5cdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKHdvcmxkUm90YXRpb24pO1xuXG5cdFx0dGVtcE1hdHJpeC5tYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbih0ZW1wUXVhdGVybmlvbikuZ2V0SW52ZXJzZSh0ZW1wTWF0cml4KTtcblx0XHRleWUuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXgpO1xuXG5cdFx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcblxuXHRcdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKHdvcmxkUm90YXRpb24pO1xuXG5cdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gXCJYXCIpIHtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRYLCBNYXRoLmF0YW4yKC0gZXllLnksIGV5ZS56KSk7XG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YKTtcblx0XHRcdFx0Y2hpbGQucXVhdGVybmlvbi5jb3B5KHRlbXBRdWF0ZXJuaW9uKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gXCJZXCIpIHtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uWS5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRZLCBNYXRoLmF0YW4yKGV5ZS54LCBleWUueikpO1xuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWSk7XG5cdFx0XHRcdGNoaWxkLnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKGNoaWxkLm5hbWUgPT09IFwiWlwiKSB7XG5cblx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0WiwgTWF0aC5hdGFuMihleWUueSwgZXllLngpKTtcblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblopO1xuXHRcdFx0XHRjaGlsZC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdHRoaXMuaW5pdCgpO1xuXG59O1xuXG5UcmFuc2Zvcm1HaXptb1JvdGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRyYW5zZm9ybUdpem1vLnByb3RvdHlwZSk7XG5UcmFuc2Zvcm1HaXptb1JvdGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm1HaXptb1JvdGF0ZTtcblxudmFyIFRyYW5zZm9ybUdpem1vU2NhbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0VHJhbnNmb3JtR2l6bW8uY2FsbCh0aGlzKTtcblxuXHR2YXIgYXJyb3dHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjEyNSwgMC4xMjUsIDAuMTI1KSk7XG5cdG1lc2gucG9zaXRpb24ueSA9IDAuNTtcblx0bWVzaC51cGRhdGVNYXRyaXgoKTtcblxuXHRhcnJvd0dlb21ldHJ5Lm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcblxuXHR2YXIgbGluZVhHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWEdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMSwgMCwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVlHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWUdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMSwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVpHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWkdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMCwgMV0sIDMpKTtcblxuXHR0aGlzLmhhbmRsZUdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSksIFswLjUsIDAsIDBdLCBbMCwgMCwgLSBNYXRoLlBJIC8gMl1dLFxuXHRcdFx0W25ldyBUSFJFRS5MaW5lKGxpbmVYR2VvbWV0cnksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSldXG5cdFx0XSxcblxuXHRcdFk6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwZmYwMCB9KSksIFswLCAwLjUsIDBdXSxcblx0XHRcdFtuZXcgVEhSRUUuTGluZShsaW5lWUdlb21ldHJ5LCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2goYXJyb3dHZW9tZXRyeSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSkpLCBbMCwgMCwgMC41XSwgW01hdGguUEkgLyAyLCAwLCAwXV0sXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobGluZVpHZW9tZXRyeSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pKV1cblx0XHRdLFxuXG5cdFx0WFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDAuMTI1LCAwLjEyNSwgMC4xMjUpLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgb3BhY2l0eTogMC4yNSB9KSldXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5waWNrZXJHaXptb3MgPSB7XG5cblx0XHRYOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAuNiwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5DeWxpbmRlckJ1ZmZlckdlb21ldHJ5KDAuMiwgMCwgMSwgNCwgMSwgZmFsc2UpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLjYsIDBdXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAsIDAuNl0sIFtNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFhZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgwLjQsIDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpXVxuXHRcdF1cblxuXHR9O1xuXG5cdHRoaXMuc2V0QWN0aXZlUGxhbmUgPSBmdW5jdGlvbiAoYXhpcywgZXllKSB7XG5cblx0XHR2YXIgdGVtcE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdFx0ZXllLmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2UodGVtcE1hdHJpeC5leHRyYWN0Um90YXRpb24odGhpcy5wbGFuZXNbXCJYWVwiXS5tYXRyaXhXb3JsZCkpKTtcblxuXHRcdGlmIChheGlzID09PSBcIlhcIikge1xuXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVwiXTtcblx0XHRcdGlmIChNYXRoLmFicyhleWUueSkgPiBNYXRoLmFicyhleWUueikpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhaXCJdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGF4aXMgPT09IFwiWVwiKSB7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXHRcdFx0aWYgKE1hdGguYWJzKGV5ZS54KSA+IE1hdGguYWJzKGV5ZS56KSkgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWVpcIl07XG5cblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJaXCIpIHtcblxuXHRcdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cdFx0XHRpZiAoTWF0aC5hYnMoZXllLngpID4gTWF0aC5hYnMoZXllLnkpKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJZWlwiXTtcblxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSBcIlhZWlwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVpFXCJdO1xuXG5cdH07XG5cblx0dGhpcy5pbml0KCk7XG5cbn07XG5cblRyYW5zZm9ybUdpem1vU2NhbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUcmFuc2Zvcm1HaXptby5wcm90b3R5cGUpO1xuVHJhbnNmb3JtR2l6bW9TY2FsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm1HaXptb1NjYWxlO1xuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtQ29udHJvbHMoY2FtZXJhLCBkb21FbGVtZW50KSB7XG5cblx0Ly8gVE9ETzogTWFrZSBub24tdW5pZm9ybSBzY2FsZSBhbmQgcm90YXRlIHBsYXkgbmljZSBpbiBoaWVyYXJjaGllc1xuXHQvLyBUT0RPOiBBREQgUlhZWiBjb250b2xcblxuXHRUSFJFRS5PYmplY3QzRC5jYWxsKHRoaXMpO1xuXG5cdGRvbUVsZW1lbnQgPSAoZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHR0aGlzLm9iamVjdCA9IHVuZGVmaW5lZDtcblx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdHRoaXMudHJhbnNsYXRpb25TbmFwID0gbnVsbDtcblx0dGhpcy5yb3RhdGlvblNuYXAgPSBudWxsO1xuXHR0aGlzLnNwYWNlID0gXCJ3b3JsZFwiO1xuXHR0aGlzLnNpemUgPSAxO1xuXHR0aGlzLmF4aXMgPSBudWxsO1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIF9tb2RlID0gXCJ0cmFuc2xhdGVcIjtcblx0dmFyIF9kcmFnZ2luZyA9IGZhbHNlO1xuXHR2YXIgX2dpem1vID0ge1xuXG5cdFx0XCJ0cmFuc2xhdGVcIjogbmV3IFRyYW5zZm9ybUdpem1vVHJhbnNsYXRlKCksXG5cdFx0XCJyb3RhdGVcIjogbmV3IFRyYW5zZm9ybUdpem1vUm90YXRlKCksXG5cdFx0XCJzY2FsZVwiOiBuZXcgVHJhbnNmb3JtR2l6bW9TY2FsZSgpXG5cdH07XG5cblx0Zm9yICh2YXIgdHlwZSBpbiBfZ2l6bW8pIHtcblxuXHRcdHZhciBnaXptb09iaiA9IF9naXptb1t0eXBlXTtcblxuXHRcdGdpem1vT2JqLnZpc2libGUgPSAodHlwZSA9PT0gX21vZGUpO1xuXHRcdHRoaXMuYWRkKGdpem1vT2JqKTtcblxuXHR9XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiBcImNoYW5nZVwiIH07XG5cdHZhciBtb3VzZURvd25FdmVudCA9IHsgdHlwZTogXCJtb3VzZURvd25cIiB9O1xuXHR2YXIgbW91c2VVcEV2ZW50ID0geyB0eXBlOiBcIm1vdXNlVXBcIiwgbW9kZTogX21vZGUgfTtcblx0dmFyIG9iamVjdENoYW5nZUV2ZW50ID0geyB0eXBlOiBcIm9iamVjdENoYW5nZVwiIH07XG5cblx0dmFyIHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcblx0dmFyIHBvaW50ZXJWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwb2ludCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdHZhciByb3RhdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBvZmZzZXRSb3RhdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBzY2FsZSA9IDE7XG5cblx0dmFyIGxvb2tBdE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdHZhciBleWUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0dmFyIHRlbXBWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgdGVtcFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHR2YXIgdW5pdFggPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKTtcblx0dmFyIHVuaXRZID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG5cdHZhciB1bml0WiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpO1xuXG5cdHZhciBxdWF0ZXJuaW9uWFlaID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25YID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25ZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25aID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25FID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHR2YXIgb2xkUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgb2xkU2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgb2xkUm90YXRpb25NYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXG5cdHZhciBwYXJlbnRSb3RhdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdHZhciBwYXJlbnRTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0dmFyIHdvcmxkUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgd29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXHR2YXIgd29ybGRSb3RhdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdHZhciBjYW1Qb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBjYW1Sb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvblBvaW50ZXJEb3duLCBmYWxzZSk7XG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Qb2ludGVyRG93biwgZmFsc2UpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvblBvaW50ZXJIb3ZlciwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Qb2ludGVySG92ZXIsIGZhbHNlKTtcblxuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hsZWF2ZVwiLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvblBvaW50ZXJEb3duKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG9uUG9pbnRlckRvd24pO1xuXG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uUG9pbnRlckhvdmVyKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Qb2ludGVySG92ZXIpO1xuXG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uUG9pbnRlck1vdmUpO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblBvaW50ZXJNb3ZlKTtcblxuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Qb2ludGVyVXApO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG9uUG9pbnRlclVwKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBvblBvaW50ZXJVcCk7XG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgb25Qb2ludGVyVXApO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobGVhdmVcIiwgb25Qb2ludGVyVXApO1xuXG5cdH07XG5cblx0dGhpcy5hdHRhY2ggPSBmdW5jdGlvbiAob2JqZWN0KSB7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fTtcblxuXHR0aGlzLmRldGFjaCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuYXhpcyA9IG51bGw7XG5cblx0fTtcblxuXHR0aGlzLmdldE1vZGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gX21vZGU7XG5cblx0fTtcblxuXHR0aGlzLnNldE1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xuXG5cdFx0X21vZGUgPSBtb2RlID8gbW9kZSA6IF9tb2RlO1xuXG5cdFx0aWYgKF9tb2RlID09PSBcInNjYWxlXCIpIHNjb3BlLnNwYWNlID0gXCJsb2NhbFwiO1xuXG5cdFx0Zm9yICh2YXIgdHlwZSBpbiBfZ2l6bW8pIF9naXptb1t0eXBlXS52aXNpYmxlID0gKHR5cGUgPT09IF9tb2RlKTtcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0fTtcblxuXHR0aGlzLnNldFRyYW5zbGF0aW9uU25hcCA9IGZ1bmN0aW9uICh0cmFuc2xhdGlvblNuYXApIHtcblxuXHRcdHNjb3BlLnRyYW5zbGF0aW9uU25hcCA9IHRyYW5zbGF0aW9uU25hcDtcblxuXHR9O1xuXG5cdHRoaXMuc2V0Um90YXRpb25TbmFwID0gZnVuY3Rpb24gKHJvdGF0aW9uU25hcCkge1xuXG5cdFx0c2NvcGUucm90YXRpb25TbmFwID0gcm90YXRpb25TbmFwO1xuXG5cdH07XG5cblx0dGhpcy5zZXRTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcblxuXHRcdHNjb3BlLnNpemUgPSBzaXplO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0fTtcblxuXHR0aGlzLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cblx0XHRzY29wZS5zcGFjZSA9IHNwYWNlO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmIChzY29wZS5vYmplY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG5cdFx0d29ybGRQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oc2NvcGUub2JqZWN0Lm1hdHJpeFdvcmxkKTtcblx0XHR3b3JsZFJvdGF0aW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbihzY29wZS5vYmplY3QubWF0cml4V29ybGQpKTtcblxuXHRcdGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXHRcdGNhbVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbihjYW1lcmEubWF0cml4V29ybGQpO1xuXHRcdGNhbVJvdGF0aW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbihjYW1lcmEubWF0cml4V29ybGQpKTtcblxuXHRcdHNjYWxlID0gd29ybGRQb3NpdGlvbi5kaXN0YW5jZVRvKGNhbVBvc2l0aW9uKSAvIDYgKiBzY29wZS5zaXplO1xuXHRcdHRoaXMucG9zaXRpb24uY29weSh3b3JsZFBvc2l0aW9uKTtcblx0XHR0aGlzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcblxuXHRcdGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSkge1xuXG5cdFx0XHRleWUuY29weShjYW1Qb3NpdGlvbikuc3ViKHdvcmxkUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuXG5cdFx0fSBlbHNlIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEpIHtcblxuXHRcdFx0ZXllLmNvcHkoY2FtUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0X2dpem1vW19tb2RlXS51cGRhdGUod29ybGRSb3RhdGlvbiwgZXllKTtcblxuXHRcdH0gZWxzZSBpZiAoc2NvcGUuc3BhY2UgPT09IFwid29ybGRcIikge1xuXG5cdFx0XHRfZ2l6bW9bX21vZGVdLnVwZGF0ZShuZXcgVEhSRUUuRXVsZXIoKSwgZXllKTtcblxuXHRcdH1cblxuXHRcdF9naXptb1tfbW9kZV0uaGlnaGxpZ2h0KHNjb3BlLmF4aXMpO1xuXG5cdH07XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVySG92ZXIoZXZlbnQpIHtcblxuXHRcdGlmIChzY29wZS5vYmplY3QgPT09IHVuZGVmaW5lZCB8fCBfZHJhZ2dpbmcgPT09IHRydWUgfHwgKGV2ZW50LmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkpIHJldHVybjtcblxuXHRcdHZhciBwb2ludGVyID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG5cdFx0dmFyIGludGVyc2VjdCA9IGludGVyc2VjdE9iamVjdHMocG9pbnRlciwgX2dpem1vW19tb2RlXS5waWNrZXJzLmNoaWxkcmVuKTtcblxuXHRcdHZhciBheGlzID0gbnVsbDtcblxuXHRcdGlmIChpbnRlcnNlY3QpIHtcblxuXHRcdFx0YXhpcyA9IGludGVyc2VjdC5vYmplY3QubmFtZTtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH1cblxuXHRcdGlmIChzY29wZS5heGlzICE9PSBheGlzKSB7XG5cblx0XHRcdHNjb3BlLmF4aXMgPSBheGlzO1xuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLm9iamVjdCA9PT0gdW5kZWZpbmVkIHx8IF9kcmFnZ2luZyA9PT0gdHJ1ZSB8fCAoZXZlbnQuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSkgcmV0dXJuO1xuXG5cdFx0dmFyIHBvaW50ZXIgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cblx0XHRpZiAocG9pbnRlci5idXR0b24gPT09IDAgfHwgcG9pbnRlci5idXR0b24gPT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR2YXIgaW50ZXJzZWN0ID0gaW50ZXJzZWN0T2JqZWN0cyhwb2ludGVyLCBfZ2l6bW9bX21vZGVdLnBpY2tlcnMuY2hpbGRyZW4pO1xuXG5cdFx0XHRpZiAoaW50ZXJzZWN0KSB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChtb3VzZURvd25FdmVudCk7XG5cblx0XHRcdFx0c2NvcGUuYXhpcyA9IGludGVyc2VjdC5vYmplY3QubmFtZTtcblxuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0XHRleWUuY29weShjYW1Qb3NpdGlvbikuc3ViKHdvcmxkUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuXG5cdFx0XHRcdF9naXptb1tfbW9kZV0uc2V0QWN0aXZlUGxhbmUoc2NvcGUuYXhpcywgZXllKTtcblxuXHRcdFx0XHR2YXIgcGxhbmVJbnRlcnNlY3QgPSBpbnRlcnNlY3RPYmplY3RzKHBvaW50ZXIsIFtfZ2l6bW9bX21vZGVdLmFjdGl2ZVBsYW5lXSk7XG5cblx0XHRcdFx0aWYgKHBsYW5lSW50ZXJzZWN0KSB7XG5cblx0XHRcdFx0XHRvbGRQb3NpdGlvbi5jb3B5KHNjb3BlLm9iamVjdC5wb3NpdGlvbik7XG5cdFx0XHRcdFx0b2xkU2NhbGUuY29weShzY29wZS5vYmplY3Quc2NhbGUpO1xuXG5cdFx0XHRcdFx0b2xkUm90YXRpb25NYXRyaXguZXh0cmFjdFJvdGF0aW9uKHNjb3BlLm9iamVjdC5tYXRyaXgpO1xuXHRcdFx0XHRcdHdvcmxkUm90YXRpb25NYXRyaXguZXh0cmFjdFJvdGF0aW9uKHNjb3BlLm9iamVjdC5tYXRyaXhXb3JsZCk7XG5cblx0XHRcdFx0XHRwYXJlbnRSb3RhdGlvbk1hdHJpeC5leHRyYWN0Um90YXRpb24oc2NvcGUub2JqZWN0LnBhcmVudC5tYXRyaXhXb3JsZCk7XG5cdFx0XHRcdFx0cGFyZW50U2NhbGUuc2V0RnJvbU1hdHJpeFNjYWxlKHRlbXBNYXRyaXguZ2V0SW52ZXJzZShzY29wZS5vYmplY3QucGFyZW50Lm1hdHJpeFdvcmxkKSk7XG5cblx0XHRcdFx0XHRvZmZzZXQuY29weShwbGFuZUludGVyc2VjdC5wb2ludCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRfZHJhZ2dpbmcgPSB0cnVlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGV2ZW50KSB7XG5cblx0XHRpZiAoc2NvcGUub2JqZWN0ID09PSB1bmRlZmluZWQgfHwgc2NvcGUuYXhpcyA9PT0gbnVsbCB8fCBfZHJhZ2dpbmcgPT09IGZhbHNlIHx8IChldmVudC5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBldmVudC5idXR0b24gIT09IDApKSByZXR1cm47XG5cblx0XHR2YXIgcG9pbnRlciA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuXHRcdHZhciBwbGFuZUludGVyc2VjdCA9IGludGVyc2VjdE9iamVjdHMocG9pbnRlciwgW19naXptb1tfbW9kZV0uYWN0aXZlUGxhbmVdKTtcblxuXHRcdGlmIChwbGFuZUludGVyc2VjdCA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRwb2ludC5jb3B5KHBsYW5lSW50ZXJzZWN0LnBvaW50KTtcblxuXHRcdGlmIChfbW9kZSA9PT0gXCJ0cmFuc2xhdGVcIikge1xuXG5cdFx0XHRwb2ludC5zdWIob2Zmc2V0KTtcblx0XHRcdHBvaW50Lm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblxuXHRcdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJYXCIpID09PSAtIDEpIHBvaW50LnggPSAwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJZXCIpID09PSAtIDEpIHBvaW50LnkgPSAwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJaXCIpID09PSAtIDEpIHBvaW50LnogPSAwO1xuXG5cdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NChvbGRSb3RhdGlvbk1hdHJpeCk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkob2xkUG9zaXRpb24pO1xuXHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uYWRkKHBvaW50KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwid29ybGRcIiB8fCBzY29wZS5heGlzLnNlYXJjaChcIlhZWlwiKSAhPT0gLSAxKSB7XG5cblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWFwiKSA9PT0gLSAxKSBwb2ludC54ID0gMDtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWVwiKSA9PT0gLSAxKSBwb2ludC55ID0gMDtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWlwiKSA9PT0gLSAxKSBwb2ludC56ID0gMDtcblxuXHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHBhcmVudFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkob2xkUG9zaXRpb24pO1xuXHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uYWRkKHBvaW50KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2NvcGUudHJhbnNsYXRpb25TbmFwICE9PSBudWxsKSB7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWFwiKSAhPT0gLSAxKSBzY29wZS5vYmplY3QucG9zaXRpb24ueCA9IE1hdGgucm91bmQoc2NvcGUub2JqZWN0LnBvc2l0aW9uLnggLyBzY29wZS50cmFuc2xhdGlvblNuYXApICogc2NvcGUudHJhbnNsYXRpb25TbmFwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJZXCIpICE9PSAtIDEpIHNjb3BlLm9iamVjdC5wb3NpdGlvbi55ID0gTWF0aC5yb3VuZChzY29wZS5vYmplY3QucG9zaXRpb24ueSAvIHNjb3BlLnRyYW5zbGF0aW9uU25hcCkgKiBzY29wZS50cmFuc2xhdGlvblNuYXA7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzLnNlYXJjaChcIlpcIikgIT09IC0gMSkgc2NvcGUub2JqZWN0LnBvc2l0aW9uLnogPSBNYXRoLnJvdW5kKHNjb3BlLm9iamVjdC5wb3NpdGlvbi56IC8gc2NvcGUudHJhbnNsYXRpb25TbmFwKSAqIHNjb3BlLnRyYW5zbGF0aW9uU25hcDtcblxuXHRcdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmFwcGx5TWF0cml4NCh3b3JsZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoX21vZGUgPT09IFwic2NhbGVcIikge1xuXG5cdFx0XHRwb2ludC5zdWIob2Zmc2V0KTtcblx0XHRcdHBvaW50Lm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblxuXHRcdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJYWVpcIikge1xuXG5cdFx0XHRcdFx0c2NhbGUgPSAxICsgKChwb2ludC55KSAvIE1hdGgubWF4KG9sZFNjYWxlLngsIG9sZFNjYWxlLnksIG9sZFNjYWxlLnopKTtcblxuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5zY2FsZS54ID0gb2xkU2NhbGUueCAqIHNjYWxlO1xuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5zY2FsZS55ID0gb2xkU2NhbGUueSAqIHNjYWxlO1xuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5zY2FsZS56ID0gb2xkU2NhbGUueiAqIHNjYWxlO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlhcIikgc2NvcGUub2JqZWN0LnNjYWxlLnggPSBvbGRTY2FsZS54ICogKDEgKyBwb2ludC54IC8gb2xkU2NhbGUueCk7XG5cdFx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWVwiKSBzY29wZS5vYmplY3Quc2NhbGUueSA9IG9sZFNjYWxlLnkgKiAoMSArIHBvaW50LnkgLyBvbGRTY2FsZS55KTtcblx0XHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJaXCIpIHNjb3BlLm9iamVjdC5zY2FsZS56ID0gb2xkU2NhbGUueiAqICgxICsgcG9pbnQueiAvIG9sZFNjYWxlLnopO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmIChfbW9kZSA9PT0gXCJyb3RhdGVcIikge1xuXG5cdFx0XHRwb2ludC5zdWIod29ybGRQb3NpdGlvbik7XG5cdFx0XHRwb2ludC5tdWx0aXBseShwYXJlbnRTY2FsZSk7XG5cdFx0XHR0ZW1wVmVjdG9yLmNvcHkob2Zmc2V0KS5zdWIod29ybGRQb3NpdGlvbik7XG5cdFx0XHR0ZW1wVmVjdG9yLm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblxuXHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiRVwiKSB7XG5cblx0XHRcdFx0cG9pbnQuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZShsb29rQXRNYXRyaXgpKTtcblx0XHRcdFx0dGVtcFZlY3Rvci5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKGxvb2tBdE1hdHJpeCkpO1xuXG5cdFx0XHRcdHJvdGF0aW9uLnNldChNYXRoLmF0YW4yKHBvaW50LnosIHBvaW50LnkpLCBNYXRoLmF0YW4yKHBvaW50LngsIHBvaW50LnopLCBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpKTtcblx0XHRcdFx0b2Zmc2V0Um90YXRpb24uc2V0KE1hdGguYXRhbjIodGVtcFZlY3Rvci56LCB0ZW1wVmVjdG9yLnkpLCBNYXRoLmF0YW4yKHRlbXBWZWN0b3IueCwgdGVtcFZlY3Rvci56KSwgTWF0aC5hdGFuMih0ZW1wVmVjdG9yLnksIHRlbXBWZWN0b3IueCkpO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmdldEludmVyc2UocGFyZW50Um90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uRS5zZXRGcm9tQXhpc0FuZ2xlKGV5ZSwgcm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopO1xuXHRcdFx0XHRxdWF0ZXJuaW9uWFlaLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh3b3JsZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uRSk7XG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YWVopO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9IGVsc2UgaWYgKHNjb3BlLmF4aXMgPT09IFwiWFlaRVwiKSB7XG5cblx0XHRcdFx0cXVhdGVybmlvbkUuc2V0RnJvbUV1bGVyKHBvaW50LmNsb25lKCkuY3Jvc3ModGVtcFZlY3Rvcikubm9ybWFsaXplKCkpOyAvLyByb3RhdGlvbiBheGlzXG5cblx0XHRcdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbVJvdGF0aW9uTWF0cml4KHRlbXBNYXRyaXguZ2V0SW52ZXJzZShwYXJlbnRSb3RhdGlvbk1hdHJpeCkpO1xuXHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHF1YXRlcm5pb25FLCAtIHBvaW50LmNsb25lKCkuYW5nbGVUbyh0ZW1wVmVjdG9yKSk7XG5cdFx0XHRcdHF1YXRlcm5pb25YWVouc2V0RnJvbVJvdGF0aW9uTWF0cml4KHdvcmxkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YKTtcblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblhZWik7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2Uod29ybGRSb3RhdGlvbk1hdHJpeCkpO1xuXG5cdFx0XHRcdHRlbXBWZWN0b3IuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZSh3b3JsZFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0cm90YXRpb24uc2V0KE1hdGguYXRhbjIocG9pbnQueiwgcG9pbnQueSksIE1hdGguYXRhbjIocG9pbnQueCwgcG9pbnQueiksIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCkpO1xuXHRcdFx0XHRvZmZzZXRSb3RhdGlvbi5zZXQoTWF0aC5hdGFuMih0ZW1wVmVjdG9yLnosIHRlbXBWZWN0b3IueSksIE1hdGguYXRhbjIodGVtcFZlY3Rvci54LCB0ZW1wVmVjdG9yLnopLCBNYXRoLmF0YW4yKHRlbXBWZWN0b3IueSwgdGVtcFZlY3Rvci54KSk7XG5cblx0XHRcdFx0cXVhdGVybmlvblhZWi5zZXRGcm9tUm90YXRpb25NYXRyaXgob2xkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdGlmIChzY29wZS5yb3RhdGlvblNuYXAgIT09IG51bGwpIHtcblxuXHRcdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUodW5pdFgsIE1hdGgucm91bmQoKHJvdGF0aW9uLnggLSBvZmZzZXRSb3RhdGlvbi54KSAvIHNjb3BlLnJvdGF0aW9uU25hcCkgKiBzY29wZS5yb3RhdGlvblNuYXApO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25ZLnNldEZyb21BeGlzQW5nbGUodW5pdFksIE1hdGgucm91bmQoKHJvdGF0aW9uLnkgLSBvZmZzZXRSb3RhdGlvbi55KSAvIHNjb3BlLnJvdGF0aW9uU25hcCkgKiBzY29wZS5yb3RhdGlvblNuYXApO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25aLnNldEZyb21BeGlzQW5nbGUodW5pdFosIE1hdGgucm91bmQoKHJvdGF0aW9uLnogLSBvZmZzZXRSb3RhdGlvbi56KSAvIHNjb3BlLnJvdGF0aW9uU25hcCkgKiBzY29wZS5yb3RhdGlvblNuYXApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRYLCByb3RhdGlvbi54IC0gb2Zmc2V0Um90YXRpb24ueCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblkuc2V0RnJvbUF4aXNBbmdsZSh1bml0WSwgcm90YXRpb24ueSAtIG9mZnNldFJvdGF0aW9uLnkpO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25aLnNldEZyb21BeGlzQW5nbGUodW5pdFosIHJvdGF0aW9uLnogLSBvZmZzZXRSb3RhdGlvbi56KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWFwiKSBxdWF0ZXJuaW9uWFlaLm11bHRpcGx5UXVhdGVybmlvbnMocXVhdGVybmlvblhZWiwgcXVhdGVybmlvblgpO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJZXCIpIHF1YXRlcm5pb25YWVoubXVsdGlwbHlRdWF0ZXJuaW9ucyhxdWF0ZXJuaW9uWFlaLCBxdWF0ZXJuaW9uWSk7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlpcIikgcXVhdGVybmlvblhZWi5tdWx0aXBseVF1YXRlcm5pb25zKHF1YXRlcm5pb25YWVosIHF1YXRlcm5pb25aKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QucXVhdGVybmlvbi5jb3B5KHF1YXRlcm5pb25YWVopO1xuXG5cdFx0XHR9IGVsc2UgaWYgKHNjb3BlLnNwYWNlID09PSBcIndvcmxkXCIpIHtcblxuXHRcdFx0XHRyb3RhdGlvbi5zZXQoTWF0aC5hdGFuMihwb2ludC56LCBwb2ludC55KSwgTWF0aC5hdGFuMihwb2ludC54LCBwb2ludC56KSwgTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KSk7XG5cdFx0XHRcdG9mZnNldFJvdGF0aW9uLnNldChNYXRoLmF0YW4yKHRlbXBWZWN0b3IueiwgdGVtcFZlY3Rvci55KSwgTWF0aC5hdGFuMih0ZW1wVmVjdG9yLngsIHRlbXBWZWN0b3IueiksIE1hdGguYXRhbjIodGVtcFZlY3Rvci55LCB0ZW1wVmVjdG9yLngpKTtcblxuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5zZXRGcm9tUm90YXRpb25NYXRyaXgodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHBhcmVudFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnJvdGF0aW9uU25hcCAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0cXVhdGVybmlvblguc2V0RnJvbUF4aXNBbmdsZSh1bml0WCwgTWF0aC5yb3VuZCgocm90YXRpb24ueCAtIG9mZnNldFJvdGF0aW9uLngpIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblkuc2V0RnJvbUF4aXNBbmdsZSh1bml0WSwgTWF0aC5yb3VuZCgocm90YXRpb24ueSAtIG9mZnNldFJvdGF0aW9uLnkpIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0WiwgTWF0aC5yb3VuZCgocm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUodW5pdFgsIHJvdGF0aW9uLnggLSBvZmZzZXRSb3RhdGlvbi54KTtcblx0XHRcdFx0XHRxdWF0ZXJuaW9uWS5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRZLCByb3RhdGlvbi55IC0gb2Zmc2V0Um90YXRpb24ueSk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0Wiwgcm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRxdWF0ZXJuaW9uWFlaLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh3b3JsZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJYXCIpIHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YKTtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWVwiKSB0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWSk7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlpcIikgdGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblopO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YWVopO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KG9iamVjdENoYW5nZUV2ZW50KTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVyVXAoZXZlbnQpIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgTW91c2VFdmVudCBvbiBtb2JpbGVcblxuXHRcdGlmIChldmVudC5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBldmVudC5idXR0b24gIT09IDApIHJldHVybjtcblxuXHRcdGlmIChfZHJhZ2dpbmcgJiYgKHNjb3BlLmF4aXMgIT09IG51bGwpKSB7XG5cblx0XHRcdG1vdXNlVXBFdmVudC5tb2RlID0gX21vZGU7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KG1vdXNlVXBFdmVudCk7XG5cblx0XHR9XG5cblx0XHRfZHJhZ2dpbmcgPSBmYWxzZTtcblxuXHRcdGlmICgnVG91Y2hFdmVudCcgaW4gd2luZG93ICYmIGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuXG5cdFx0XHQvLyBGb3JjZSBcInJvbGxvdmVyXCJcblxuXHRcdFx0c2NvcGUuYXhpcyA9IG51bGw7XG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0b25Qb2ludGVySG92ZXIoZXZlbnQpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBpbnRlcnNlY3RPYmplY3RzKHBvaW50ZXIsIG9iamVjdHMpIHtcblxuXHRcdHZhciByZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgeCA9IChwb2ludGVyLmNsaWVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aDtcblx0XHR2YXIgeSA9IChwb2ludGVyLmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodDtcblxuXHRcdHBvaW50ZXJWZWN0b3Iuc2V0KCh4ICogMikgLSAxLCAtICh5ICogMikgKyAxKTtcblx0XHRyYXkuc2V0RnJvbUNhbWVyYShwb2ludGVyVmVjdG9yLCBjYW1lcmEpO1xuXG5cdFx0dmFyIGludGVyc2VjdGlvbnMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhvYmplY3RzLCB0cnVlKTtcblx0XHRyZXR1cm4gaW50ZXJzZWN0aW9uc1swXSA/IGludGVyc2VjdGlvbnNbMF0gOiBmYWxzZTtcblxuXHR9XG5cbn07XG5cblRyYW5zZm9ybUNvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVEhSRUUuT2JqZWN0M0QucHJvdG90eXBlKTtcblRyYW5zZm9ybUNvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRyYW5zZm9ybUNvbnRyb2xzO1xuXG4iLCIvKlxuQWRkIGV2ZW50cyB0byBhIGNsYXNzIG9yIG9iamVjdDpcbiAgICBjbGFzcyBNeUNsYXNzIHtcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVNaXhpbih0aGlzKTsgLy8gQWRkIHRoZSBtaXhpbmcgZnVuY3Rpb25zIHRvIHRoZSBjbGFzc1xuICAgICAgICAgICAgLi4uXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NvbWV0aGluZycsIHsgb3duZXI6IHRoaXMsIGNvbnRlbnQ6ICd0aGF0J30pOyAvLyB0cmlnZ2VyIGFuIGV2ZW50IHBhc3Npbmcgc29tZSBhcmd1bWVudHNcblxuU3Vic2NyaWJlIHRvIGV2ZW50cyBieSBkb2luZzpcbiAgICBteUNsYXNzLm9uKCdzb21ldGhpbmcnLCAoYXJncykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcbiAgICB9KTtcblxuVW5zdWJzY3JpYmUgdG8gZXZlbnRzIGJ5IGRvaW5nOlxuICAgIG15Q2xhc3Mub2ZmKCdzb21ldGhpbmcnKTtcblxub3IgbW9yZSBwcmVzaWNlbGx5OlxuICAgIG15Q2xhc3Mub2ZmKCdzb21ldGhpbmcnLCAoYXJncykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcbiAgICB9KTtcblxuVW5zdWJzY3JpYmUgdG8gYWxsIGV2ZW50cyBieTpcbiAgICBteUNsYXNzLm9mZkFsbCgpO1xuKi9cblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZU1peGluICh0YXJnZXQpIHtcbiAgICB2YXIgbGlzdGVuZXJzID0gbmV3IFNldCgpO1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24odGFyZ2V0LCB7XG5cbiAgICAgICAgb24gKHR5cGUsIGYpIHtcbiAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgbGlzdGVuZXJbdHlwZV0gPSBmO1xuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgb2ZmICh0eXBlLCBmKSB7XG4gICAgICAgICAgICBpZiAoZikge1xuICAgICAgICAgICAgICAgIGxldCBsaXN0ZW5lciA9IHt9O1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGtleSBvZiBPYmplY3Qua2V5cyhpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG9mZkFsbCAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcnMuY2xlYXIoKTtcbiAgICAgICAgfSxcblxuICAgICAgICB0cmlnZ2VyIChldmVudCwgLi4uZGF0YSkge1xuICAgICAgICAgICAgZm9yICh2YXIgbGlzdGVuZXIgb2YgbGlzdGVuZXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJbZXZlbnRdKC4uLmRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsaXN0U3Vic2NyaXB0aW9ucyAoKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGxpc3RlbmVycykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4iXX0=
