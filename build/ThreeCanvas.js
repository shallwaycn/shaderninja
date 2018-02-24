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
				this.dirLight.shadowCameraVisible = true;
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
				scope.currentObj().material.uniforms.iLightDirection.value = -this.dirLight.position;
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
                        value: new THREE.Vector3()
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
        this.renderer.shadowMapEnabled = true;
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.camera = new THREE.PerspectiveCamera(75, this.canvas.clientWidth / this.canvas.clientHeight, 0.1, 1000);
        this.camera.position.z = 2;
        this.camera.position.y = 2;
        this.camera.lookAt(0, 0, 0);
        this.controls = new _toolsOrbitControls.OrbitControls(this.camera, this.canvas);
        this.controls.enableKeys = false;

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
        key: 'loadFromJSON',
        value: function loadFromJSON(json, completeCallback) {
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
            this.controls.fromJSON(json.cameraController);
            this.controls.reset();

            this.updateData();
            this.inited = true;
            this.play();
        }
    }, {
        key: 'new',
        value: function _new(completeCallback) {
            this.frame = 0;
            this.rendererInited = false;
            this.player = new _Player.Player(this);
            this.player.newScene();
            this.completedCallback = completeCallback;
            this.data = new _TData.TData(this);

            //background
            this.data.renderPasses.push(new _RenderPass.RenderPass(this, this.renderer, 1, true, VIGNETTE_FRAG, DEFAULT_PASS_VERTEX, 0));
            //compose
            this.data.renderPasses.push(new _RenderPass.RenderPass(this, this.renderer, 1, true, COMPOSE_FRAG, DEFAULT_PASS_VERTEX, 1));

            this.data.renderPasses[0].passName = 'Background';
            this.data.renderPasses[1].passName = 'Compose';
            this.data.renderPasses[0].renderToScreen = false;

            this.updateData();
            this.inited = true;
            this.play();
        }
    }, {
        key: 'play',
        value: function play() {
            var sandbox = this;
            this.prevTime = performance.now();
            function RenderLoop() {
                if (sandbox.inited) {

                    //should not reset uniforms in every frame.
                    //sandbox.refreshUniforms();

                    sandbox.player.updateUniforms();
                    //render depth buffer
                    if (sandbox.player.envScene != null) {
                        sandbox.renderer.render(sandbox.player.envScene, sandbox.camera, sandbox.depthTarget, true);
                        sandbox.renderer.render(sandbox.player.scene, sandbox.camera, sandbox.depthTarget);
                    } else {
                        sandbox.renderer.render(sandbox.player.scene, sandbox.camera, sandbox.depthTarget, true);
                    }

                    //assign depth
                    sandbox.updateUniforms();
                    //render the main scene.
                    if (sandbox.data.renderPasses.length == 0) {
                        if (sandbox.player.envScene != null) {
                            sandbox.renderer.render(sandbox.player.envScene, sandbox.camera, null, true);
                            sandbox.renderer.render(sandbox.player.scene, sandbox.camera, null, false);
                        } else {
                            sandbox.renderer.render(sandbox.player.scene, sandbox.camera, null, true);
                        }
                    } else {
                        if (sandbox.player.envScene != null) {
                            sandbox.renderer.render(sandbox.player.envScene, sandbox.camera, sandbox.sceneTarget, true);
                            sandbox.renderer.render(sandbox.player.scene, sandbox.camera, sandbox.sceneTarget);
                        } else {
                            sandbox.renderer.render(sandbox.player.scene, sandbox.camera, sandbox.sceneTarget, true);
                        }
                    }

                    for (var i = 0; i < sandbox.data.renderPasses.length; i++) {
                        sandbox.data.renderPasses[i].material.uniforms.iSceneTexture.value = sandbox.sceneTarget;
                        if (i > 0) {
                            var property = 'iPass' + (i - 1);
                            sandbox.data.renderPasses[i].material.uniforms[property].value = sandbox.data.renderPasses[i - 1].renderTarget;
                        }
                        sandbox.data.renderPasses[i].render();
                    }

                    sandbox.frame++;
                    if (sandbox.frame > 1 && !sandbox.rendererInited) {
                        if (sandbox.completedCallback != null && sandbox.completedCallback != undefined) {
                            sandbox.completedCallback();
                        }
                        //sandbox.refreshUniforms();
                        sandbox.rendererInited = true;
                    }

                    if (sandbox.data.animateScale) {
                        var curTime = performance.now() / 1000.0;
                        var factor = Math.sin(curTime * 1.0) * 0.5 + 0.6;
                        sandbox.player.currentObj().scale.set(sandbox.data.objScale.x * factor, sandbox.data.objScale.y * factor, sandbox.data.objScale.z * factor);
                    }
                }
                sandbox.controls.update();
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
        key: 'resize',
        value: function resize(w, h) {
            this.canvas.style.width = w + 'px';
            this.canvas.style.height = h + 'px';

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
                if (scope.player.dirLight != null) {
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
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2Fzc2lnbi5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2NyZWF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3Qva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9iYWJlbC1ydW50aW1lL2NvcmUtanMvc2V0LmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwibm9kZV9tb2R1bGVzL2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanMiLCJub2RlX21vZHVsZXMvYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9mbi9nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydGllcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L2ZuL3NldC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jbGFzc29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuY29yZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmN0eC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmRlZmluZWQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmZhaWxzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZm9yLW9mLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGFzLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaGlkZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmlvYmplY3QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jYWxsLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5pdGVyLWRlZmluZS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQubGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLWFsbC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5zdHJpbmctYXQuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC50by1pbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLnVpZC5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLndrcy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwibm9kZV9tb2R1bGVzL2NvcmUtanMvbGlicmFyeS9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy9QbGF5ZXIuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy9SZW5kZXJQYXNzLmpzIiwiQzovVXNlcnMvc2hhbGwvRGVza3RvcC9zaGFkZXJuaW5qYS9zcmMvanMvVERhdGEuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy9UaHJlZUNhbnZhcy5qcyIsIkM6L1VzZXJzL3NoYWxsL0Rlc2t0b3Avc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL0xvYWRlci5qcyIsIkM6L1VzZXJzL3NoYWxsL0Rlc2t0b3Avc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL09yYml0Q29udHJvbHMuanMiLCJDOi9Vc2Vycy9zaGFsbC9EZXNrdG9wL3NoYWRlcm5pbmphL3NyYy9qcy90b29scy9UcmFuc2Zvcm1Db250cm9scy5qcyIsIkM6L1VzZXJzL3NoYWxsL0Rlc2t0b3Avc2hhZGVybmluamEvc3JjL2pzL3Rvb2xzL21peGluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBOztBQ0RBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBOztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdERBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pFQTtBQUNBO0FBQ0E7O0FDRkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtB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LFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUM7QUFDakcsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDdkYsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDckYsUUFBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUM7O0FBRXRHLFFBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDO0FBQy9ELFFBQUksUUFBUSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDckIsU0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuRztHQUNEOzs7UUE3UVcsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQ0xLLGVBQWU7Ozs7SUFLMUIsVUFBVTtBQUNYLFVBREMsVUFBVSxDQUNWLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUU7d0JBRDFFLFVBQVU7O0FBRXJCLE1BQUksQ0FBQyxXQUFXLEdB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LENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzlELGdCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUM5RCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUM7QUFDMUQsZ0JBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO0FBQzVELGdCQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztBQUMxRCxnQkFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDckcsZ0JBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBRSxDQUFDO0FBQ3BHLGdCQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMs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OztBQUVqQixRQUFLLEtBQUs7O0FBRVQsVUFBTSxDQUFDLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxVQUFXLEtBQUssRUFBRzs7QUFFbkQsU0FBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsU0FBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDOzs7QUFHakQsU0FBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBRS9CLEVBQUUsS0FBSyxDQUFFLENBQUM7QUFDWCxVQUFNLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQUM7O0FBRWpDLFVBQU07O0FBQUEsQUFFUCxRQUFLLEtBQUs7O0FBRVQsVUFBTSxDQUFDLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxVQUFXLEtBQUssRUFBRzs7QUFFbkQsU0FBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsU0FBSSxTQUFTLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDOzs7QUFHcEQsU0FBSSxRQUFRLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBRWxDLEVBQUUsS0FBSyxDQUFFLENBQUM7QUFDWCxVQUFNLENBQUMsaUJBQWlCLENBQUUsSUFBSSxDQUFFLENBQUM7O0FBRWpDLFVBQU07O0FBQUEsQUFFUCxRQUFLLEtBQUs7O0FBRVQsVUFBTSxDQUFDLGdCQUFnQixDQUFFLE1BQU0sRUFBRSxVQUFXLEtBQUssRUFBRzs7QUFFbkQsU0FBSSxNQUFNLEdBQUcsSUFBSSxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUM7QUFDbkMsU0FBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxDQUFDOzs7QUFHaEQsU0FBSSxVQUFVLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FB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LEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FDOUg7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDdkc7O0FBRUQsR0FBQyxFQUFFLENBQ0YsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDNUg7O0FBRUQsS0FBRyxFQUFFLENBQ0osQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxDQUFDLENBQ3RFOztBQUVELElBQUUsRUFBRSxDQUNILENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxjQUFjLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDeEY7O0FBRUQsSUFBRSxFQUFFLENBQ0gsQ0FBQyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLGNBQWMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUM3Rzs7QUFFRCxJQUFFLEVBQUUsQ0FDSCxDQUFDLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FDL0c7O0VBRUQsQ0FBQzs7QUFFRixLQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsSUFBSSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckMsS0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5HLE1BQUksSUFBSSxLQUFLLEdBQUcsRUFBRTs7QUFFakIsT0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDOztBQUVyQyxPQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztHQUU1RTs7QUFFRCxNQUFJLElBQUksS0FBSyxHQUFHLEVBQUU7O0FBRWpCLE9BQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzs7QUFFckMsT0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7R0FFNUU7O0FBRUQsTUFBSSxJQUFJLEtBQUssR0FBRyxFQUFFOztBQUVqQixPQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXJDLE9BQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBRTVFOztBQUVELE1BQUksSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7O0FBRTNELE1BQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXhELE1BQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7O0FBRXhELE1BQUksSUFBSSxLQUFLLElBQUksRUFBRSxJQUFJLENBQUMsV0FB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QUcsRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7RUFFdkQsQ0FBQzs7QUFFRixLQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsUUFBUSxFQUFFLElBQUksRUFBRTs7QUFFdkMsZ0JBQWMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7O0FBRXZELE1BQUksVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3JDLE1BQUksYUFBYSxHQUFHLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQzdDLE1BQUksY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzVDLE1BQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLE1BQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLE1BQUksS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ3ZDLE1BQUksV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pDLE1BQUksV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pDLE1BQUksV0FBVyxHQUFHLElBQUksS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3pDLE1BQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7QUFFdkIsZUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFD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RUFBRSxDQUFDLEVBQUUsQ0FBRSxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQzlIOztBQUVELEdBQUMsRUFBRSxDQUNGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQ3ZHOztBQUVELEdBQUMsRUFBRSxDQUNGLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUUsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQzVIOztBQUVELEtBQUcsRUFBRSxDQUNKLENBQUMsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FDNUU7O0VBRUQsQ0FBQzs7QUFFRixLQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsSUFBSSxFQUFFLEdBQUcsRUFBRTs7QUFFMUMsTUFBSSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDckMsS0FBRyxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7O0FBRW5HLE1BQUksSUFBSSxLQUFLLEdBQUcsRUFBRTs7QUFFakIsT0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLE9BQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBRTVFOztBQUVELE1BQUksSUFBSSxLQUFLLEdBQUcsRUFBRTs7QUFFakIsT0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLE9BQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBRTVFOztBQUVELE1BQUksSUFBSSxLQUFLLEdBQUcsRUFBRTs7QUFFakIsT0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3JDLE9BQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0dBRTVFOztBQUVELE1BQUksSUFBSSxLQUFLLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7RUFFM0QsQ0FBQzs7QUFFRixLQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FF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VSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7O0FBRXBFLFlBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RyxrQkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUzSSxpQkFBYSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUFDLENBQUM7O0FBRXZELFFBQUksS0FBSyxDQUFDLFlBQVksS0FBSyxJQUFJLEVBQUU7O0FBRWhDLGdCQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUEsR0FBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNILGdCQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUEsR0FBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNILGdCQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUEsR0FBSSxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO0tBRTNILE1BQU07O0FBRU4sZ0JBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsZ0JBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkUsZ0JBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FFbkU7O0FBRUQsUUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLEdBQUcsRUFBRSxhQUFhLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0FBQ3RGLFFBQUksS0FBSyxDQUFDLElBQUksS0FBSyxHQUFHLEVBQUUsYUFBYSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUN0RixRQUFJLEtBQUssQ0FBQyxJQUFJLEtBQUssR0FBRyxFQUFFLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7O0FBRXRGLFNBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUU1QyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7O0FBRW5DLFlBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUN2RyxrQkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztBQUUzSSxrQkFBYyxDQUFDLHFCQUFxQixDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDOztBQUVsRixRQUFJLEtBQUssQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFOztBQUVoQyxnQkFBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFBLEdBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMzSCxnQkFBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFBLEdBQUksS0FBSyxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUMzSCxnQkFBVyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFBLEdBQUksS0FB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LEtBQUssSUFBSSxFQUFFO0FBQ2QsNkNBQVMsVUFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3ZCLDJDQUFPO2lDQUNWOzZCQUNKOzs7Ozs7Ozs7Ozs7Ozs7cUJBQ0o7Ozs7Ozs7Ozs7Ozs7OzthQUNKO1NBQ0o7O0FBRUQsY0FBTSxFQUFDLGtCQUFHO0FBQ04scUJBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjs7QUFFRCxlQUFPLEVBQUMsaUJBQUMsS0FBSyxFQUFXOzs7Ozs7a0RBQU4sSUFBSTtBQUFKLHdCQUFJOzs7QUFDbkIsbURBQXFCLFNBQVMsaUhBQUU7d0JBQXZCLFFBQVE7O0FBQ2Isd0JBQUksT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssVUFBVSxFQUFFO0FBQ3ZDLGdDQUFRLENBQUMsS0FBSyxPQUFDLENBQWYsUUFBUSxFQUFXLElBQUksQ0FBQyxDQUFDO3FCQUM1QjtpQkFDSjs7Ozs7Ozs7Ozs7Ozs7O1NBQ0o7O0FBRUQseUJBQWlCLEVBQUMsNkJBQUc7Ozs7OztBQUNqQixtREFBaUIsU0FBUyxpSEFBRTt3QkFBbkIsSUFBSTs7QUFDVCwyQkFBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckI7Ozs7Ozs7Ozs7Ozs7OztTQUNKO0tBQ0osQ0FBQyxDQUFDO0NBQ04iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL2dldC1pdGVyYXRvclwiKSwgX19lc01vZHVsZTogdHJ1ZSB9OyIsIm1vZHVsZS5leHBvcnRzID0geyBcImRlZmF1bHRcIjogcmVxdWlyZShcImNvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvYXNzaWduXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9jcmVhdGVcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0aWVzXCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwibW9kdWxlLmV4cG9ydHMgPSB7IFwiZGVmYXVsdFwiOiByZXF1aXJlKFwiY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHlcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2tleXNcIiksIF9fZXNNb2R1bGU6IHRydWUgfTsiLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vc2V0XCIpLCBfX2VzTW9kdWxlOiB0cnVlIH07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfT2JqZWN0JGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9vYmplY3QvZGVmaW5lLXByb3BlcnR5XCIpW1wiZGVmYXVsdFwiXTtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcblxuICAgICAgX09iamVjdCRkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSkoKTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yJyk7IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQuY29yZScpLk9iamVjdC5hc3NpZ247IiwidmFyICQgPSByZXF1aXJlKCcuLi8uLi9tb2R1bGVzLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlKFAsIEQpe1xuICByZXR1cm4gJC5jcmVhdGUoUCwgRCk7XG59OyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoVCwgRCl7XG4gIHJldHVybiAkLnNldERlc2NzKFQsIEQpO1xufTsiLCJ2YXIgJCA9IHJlcXVpcmUoJy4uLy4uL21vZHVsZXMvJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBkZXNjKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhpdCwga2V5LCBkZXNjKTtcbn07IiwicmVxdWlyZSgnLi4vLi4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kLmNvcmUnKS5PYmplY3Qua2V5czsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzLyQuY29yZScpLlNldDsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTsiLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhpZGUgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBzdHJpY3ROZXcgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZGVmaW5lZCAgICAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIGZvck9mICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSUQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdpZCcpXG4gICwgJGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0U3BlY2llcyAgID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBTSVpFICAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSdcbiAgLCBpZCAgICAgICAgICAgPSAwO1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoISRoYXMoaXQsIElEKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcbiAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XG59O1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSAkLmNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBmb3JPZiAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHN0cmljdE5ldyAgICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgc3RyaWN0TmV3KHRhcmdldCwgQywgTkFNRSk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgICQuZWFjaC5jYWxsKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcycuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy5fYy5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59OyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKHBhcmFtKXtcbiAgICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBDID8gbmV3IEMocGFyYW0pIDogQyhwYXJhbSk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIGlmKElTX1BST1RPKShleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KSlba2V5XSA9IG91dDtcbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvcjtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59OyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHt9OyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59OyIsIm1vZHVsZS5leHBvcnRzID0gdHJ1ZTsiLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIGEgPSBPYmplY3QuYXNzaWduXG4gICAgLCBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldEtleXMgICAgPSAkLmdldEtleXNcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHNcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bTtcbiAgd2hpbGUoJCRsZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoJCRbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn0gOiBPYmplY3QuYXNzaWduOyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59OyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYyl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5oaWRlJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsICQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGNvcmVbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkkLnNldERlc2MoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTsiLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59OyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59OyIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGdldCAgICAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvciA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldChpdCk7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgcmV0dXJuIGFuT2JqZWN0KGl0ZXJGbi5jYWxsKGl0KSk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pOyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oJGtleXMpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTsiLG51bGwsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTZXQnLCB7dG9KU09OOiByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpfSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5JdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnMuSFRNTENvbGxlY3Rpb24gPSBJdGVyYXRvcnMuQXJyYXk7IiwiaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4vdG9vbHMvT3JiaXRDb250cm9scyc7XHJcbmltcG9ydCB7IFRyYW5zZm9ybUNvbnRyb2xzIH0gZnJvbSAnLi90b29scy9UcmFuc2Zvcm1Db250cm9scyc7XHJcbmltcG9ydCBUaHJlZUNhbnZhcyBmcm9tICcuL1RocmVlQ2FudmFzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcclxuXHRjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuXHRcdHRoaXMubG9hZGVyID0gbmV3IFRIUkVFLk9iamVjdExvYWRlcigpO1xyXG5cdFx0dGhpcy5zY2VuZSA9IG51bGw7XHJcblx0XHR0aGlzLmVudlNjZW5lID0gbnVsbDtcclxuXHRcdHRoaXMudGhyZWVDYW52YXMgPSBjYW52YXM7XHJcblx0XHR0aGlzLnByZXZUaW1lID0gMDtcclxuXHRcdHRoaXMuY3VyT2JqID0gbnVsbDtcclxuXHRcdHRoaXMuZGlyTGlnaHQgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0Y3VycmVudE9iaigpe1xyXG5cdFx0aWYgKHRoaXMuY3VyT2JqICE9IG51bGwpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5jdXJPYmo7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNjb3BlID0gdGhpcztcclxuXHRcdHRoaXMuc2NlbmUudHJhdmVyc2UgKGZ1bmN0aW9uIChvYmplY3QpXHJcblx0XHR7XHJcblx0XHRcdGlmIChvYmplY3QgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0c2NvcGUuY3VyT2JqID0gb2JqZWN0O1xyXG5cdFx0XHRcdHJldHVybiBzY29wZS5jdXJPYmo7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vc2hvdWxkIG5vdCBoYXBwZW4uXHJcblx0XHQvL3RoaXMuc2V0T2JqZWN0KDApO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmN1ck9iajtcclxuXHR9XHJcblxyXG5cdGN1ck1hdGVyaWFsKCl7XHJcblx0XHRpZiAodGhpcy5jdXJNYXQgIT0gbnVsbCl7XHJcblx0XHRcdHJldHVybiB0aGlzLmN1ck1hdDtcclxuXHRcdH1cclxuXHRcdHRoaXMuY3VyTWF0ID0gdGhpcy5jcmVhdGVTaGFkZXJNYXRlcmlhbCh0aGlzLnRocmVlQ2FudmFzLmdldElucHV0SGVhZGVyKCkgKyBUaHJlZUNhbnZhcy5FTVBUWV9GUkFHX1NIQURFUiwgdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dEhlYWRlcigpICsgVGhyZWVDYW52YXMuRU1QVFlfVkVSVEVYX1NIQURFUik7XHJcblx0XHRyZXR1cm4gdGhpcy5jdXJNYXQ7XHJcblx0fVxyXG5cclxuXHJcbiAgICBjdXJWZXJ0ZXhTaGFkZXIoKXtcclxuICAgICAgICByZXR1cm4gVGhyZWVDYW52YXMucmVtb3ZlU2hhZGVySGVhZGVyKHRoaXMuY3VycmVudE9iaigpLm1hdGVyaWFsLnZlcnRleFNoYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY3VyRnJhZ1NhaGRlcigpe1xyXG4gICAgICAgIHJldHVybiBUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIodGhpcy5jdXJyZW50T2JqKCkubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgfVxyXG5cclxuXHJcblx0dXBkYXRlQ3VyTWF0ZXJpYWwoZnJhZywgdmVydGV4KXtcclxuXHRcdHRoaXMuY3VyTWF0ZXJpYWwoKS52ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXg7XHJcblx0XHR0aGlzLmN1ck1hdGVyaWFsKCkuZnJhZ21lbnRTaGFkZXIgPSBmcmFnO1xyXG5cdFx0dGhpcy5jdXJNYXRlcmlhbCgpLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNoYWRlck1hdGVyaWFsKGZyYWcsdmVydGV4KXtcclxuXHRcdCAgcmV0dXJuIG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcblx0XHRcdHVuaWZvcm1zOiB0aGlzLnRocmVlQ2FudmFzLmdldElucHV0VW5pZm9ybXMoKSxcclxuXHRcdFx0dmVydGV4U2hhZGVyOiB2ZXJ0ZXgsXHJcblx0XHRcdGZyYWdtZW50U2hhZGVyOiBmcmFnXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0aWYgKHRoaXMuc2NlbmUgIT0gbnVsbCl7XHJcblx0XHRcdHdoaWxlKHRoaXMuc2NlbmUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7IFxyXG5cdFx0XHRcdHRoaXMuc2NlbmUucmVtb3ZlKHRoaXMuc2NlbmUuY2hpbGRyZW5bMF0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuZW52U2NlbmUgIT0gbnVsbCl7XHJcblx0XHRcdHdoaWxlKHRoaXMuZW52U2NlbmUuY2hpbGRyZW4ubGVuZ3RoID4gMCl7IFxyXG5cdFx0XHRcdHRoaXMuZW52U2NlbmUucmVtb3ZlKHRoaXMuZW52U2NlbmUuY2hpbGRyZW5bMF0pOyBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VyTWF0ID0gbnVsbDtcclxuXHRcdHRoaXMuY3VyT2JqID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZVNjZW5lT2JqZWN0KHR5cGUpe1xyXG5cdFx0dmFyIGdlb21ldHJ5ID0gbnVsbDtcclxuXHRcdHZhciBwb3NpdGlvbiA9IG51bGw7XHJcblx0XHR2YXIgcGxhbmUgPSAtMS4wO1xyXG5cdFx0dmFyIHBsYW5lUiA9IDE0LjA7XHJcblx0XHRpZiAodHlwZSA9PSAwKXtcclxuXHRcdFx0cG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgcGxhbmUsIDAgKTtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkocGxhbmVSLDAuMSxwbGFuZVIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZSA9PSAxKXtcclxuXHRcdFx0dmFyIGhlaWdodCA9IFRIUkVFLk1hdGgucmFuZEZsb2F0KDAuOCw4KTtcclxuXHRcdFx0cG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMyggVEhSRUUuTWF0aC5yYW5kRmxvYXQoLXBsYW5lUiowLjUscGxhbmVSKjAuNSksIGhlaWdodCAvIDIuMCArIHBsYW5lLCBUSFJFRS5NYXRoLnJhbmRGbG9hdCgtcGxhbmVSKjAuNSxwbGFuZVIqMC41KSApO1xyXG5cdFx0XHR2YXIgd2lkdGggPSBUSFJFRS5NYXRoLnJhbmRGbG9hdCgwLjgsMS42KVxyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggd2lkdGgsIGhlaWdodCwgd2lkdGggKTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcmNvbG9yID0gbmV3IFRIUkVFLkNvbG9yKCAweGZmZmZmZiApO1xyXG5cdFx0cmNvbG9yLnNldEhleCggVEhSRUUuTWF0aC5yYW5kRmxvYXQoMC41LDEuMCkgKiAweGZmZmZmZiApO1xyXG5cdFx0aWYgKHR5cGUgPT0gMCl7XHJcblx0XHRcdHJjb2xvci5zZXRIZXgoIDB4ODg4ODg4ICk7XHJcblx0XHR9XHJcblx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFBob25nTWF0ZXJpYWwoIHsgY29sb3I6IHJjb2xvciB9ICk7XHJcblx0XHR2YXIgb2JqZWN0ID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xyXG5cdFx0b2JqZWN0LmNhc3RTaGFkb3cgPSB0cnVlO1xyXG5cdFx0b2JqZWN0LnJlY2VpdmVTaGFkb3cgPSB0cnVlO1xyXG5cdFx0b2JqZWN0LnBvc2l0aW9uLnNldChwb3NpdGlvbi54LHBvc2l0aW9uLnkscG9zaXRpb24ueik7XHJcblx0XHR0aGlzLmVudlNjZW5lLmFkZCggb2JqZWN0ICk7XHJcblx0fVxyXG5cclxuXHR1c2VMaWdodChmbGFnKXtcclxuXHRcdGlmICh0aGlzLmVudlNjZW5lID09IG51bGwpe1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGxpZ2h0T2JqID0gdGhpcy5lbnZTY2VuZS5nZXRPYmplY3RCeU5hbWUoXCJkaXJMaWdodFwiKTtcclxuXHRcdHRoaXMuZW52U2NlbmUucmVtb3ZlKCBsaWdodE9iaiApO1xyXG5cdFx0aWYgKGZsYWcpe1xyXG5cdFx0XHR0aGlzLmRpckxpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoIDB4ZmZmZmZmLCAxLjAgKTtcclxuXHRcdFx0dGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXQoIDEwLCAxMCwgMTAgKTtcclxuXHRcdFx0dGhpcy5kaXJMaWdodC50YXJnZXQucG9zaXRpb24uc2V0KCAwLCAwLCAwICk7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQuc2hhZG93Q2FtZXJhVmlzaWJsZSA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQuY2FzdFNoYWRvdyA9IHRydWU7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQubmFtZSA9IFwiZGlyTGlnaHRcIjtcclxuXHRcdFx0dGhpcy5lbnZTY2VuZS5hZGQoIHRoaXMuZGlyTGlnaHQgKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZUVudlNjZW5lKCl7XHJcblx0XHRpZiAodGhpcy5lbnZTY2VuZSAhPSBudWxsKXtcclxuXHRcdFx0d2hpbGUodGhpcy5lbnZTY2VuZS5jaGlsZHJlbi5sZW5ndGggPiAwKXsgXHJcblx0XHRcdFx0dGhpcy5lbnZTY2VuZS5yZW1vdmUodGhpcy5lbnZTY2VuZS5jaGlsZHJlblswXSk7IFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMuZW52U2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHRcdHRoaXMuY3JlYXRlU2NlbmVPYmplY3QoMCk7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDE0OyBpKyspe1xyXG5cdFx0XHR0aGlzLmNyZWF0ZVNjZW5lT2JqZWN0KDEpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoIDB4NDA0MDQwICk7IC8vIHNvZnQgd2hpdGUgbGlnaHRcclxuXHRcdHRoaXMuZW52U2NlbmUuYWRkKCBsaWdodCApO1xyXG5cdH1cclxuXHJcblx0Y2xlYXJFbnZTY2VuZSgpe1xyXG5cdFx0dGhpcy5lbnZTY2VuZSA9IG51bGw7XHJcblx0XHR0aGlzLmRpckxpZ2h0ID0gbnVsbDtcclxuXHR9XHJcblx0XHJcblxyXG5cdHNldE9iamVjdCh0eXBlKXtcclxuXHRcdC8vY2xlYXIgbGFzdFxyXG5cdFx0Zm9yICggdmFyIGkgPSB0aGlzLnNjZW5lLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMCA7IGkgLS0gKSB7XHJcblx0XHRcdHZhciBvYmogPSB0aGlzLnNjZW5lLmNoaWxkcmVuWyBpIF07XHJcblx0XHRcdGlmIChvYmogaW5zdGFuY2VvZiBUSFJFRS5NZXNoKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0dGhpcy5zY2VuZS5yZW1vdmUob2JqKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBnZW9tZXRyeSA9IG51bGw7XHJcblx0XHRpZiAodHlwZSA9PSAwKXtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuU3BoZXJlR2VvbWV0cnkoIDEsIDUwLCA1MCApO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAodHlwZSA9PSAxKXtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDEsIDEgKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gMil7XHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLlRvcnVzS25vdEdlb21ldHJ5KCAxLCAwLjQsIDY0LCA4ICk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlID09IDMpe1xyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KDMsMyw0MCw0MCk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICh0eXBlID09IDQpe1xyXG5cdFx0XHRnZW9tZXRyeSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDEsMSwzLDUwKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKHR5cGUgPT0gNSl7XHJcblx0XHRcdGdlb21ldHJ5ID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYodHlwZSA9PSA2KXtcclxuXHRcdFx0Z2VvbWV0cnkgPSBuZXcgVEhSRUUuVG9ydXNHZW9tZXRyeSgxLDAuNCwxNiwxMDApO1xyXG5cdFx0fVxyXG5cclxuXHRcdHRoaXMuY3VyT2JqID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCB0aGlzLmN1ck1hdGVyaWFsKCkgKTtcclxuXHRcdHRoaXMuY3VyT2JqLm5hbWUgPSBcIk1lc2hPYmpcIjtcclxuXHRcdHRoaXMuY3VyT2JqLnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcclxuXHJcblx0XHRsZXQgc2NvcGUgPSB0aGlzO1xyXG5cdFx0Ly8gdGhpcy5jdXJPYmoub25CZWZvcmVSZW5kZXIgPSBmdW5jdGlvbiggcmVuZGVyZXIsIHNjZW5lLCBjYW1lcmEsIGdlb21ldHJ5LCBtYXRlcmlhbCwgZ3JvdXAgKSB7XHJcblx0XHQvLyBcdG1hdGVyaWFsLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLjA7IFxyXG5cdFx0Ly8gfTtcclxuXHRcdFxyXG5cdFx0dGhpcy5zY2VuZS5hZGQodGhpcy5jdXJPYmopO1xyXG5cdH1cclxuXHJcblx0bmV3U2NlbmUoKXtcclxuXHRcdHRoaXMuY2xlYXIoKTtcclxuXHRcdHRoaXMuc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuXHR9XHJcblxyXG5cdGxvYWQoanNvbiwgZGF0YSkge1xyXG5cdFx0dGhpcy5jbGVhcigpO1xyXG5cdFx0dGhpcy5zY2VuZSA9IHRoaXMubG9hZGVyLnBhcnNlKGpzb24uc2NlbmUpO1xyXG5cdFx0aWYgKGpzb24uZW52U2NlbmUgIT0gbnVsbCl7XHJcblx0XHRcdHRoaXMuZW52U2NlbmUgPSB0aGlzLmxvYWRlci5wYXJzZShqc29uLmVudlNjZW5lKTtcclxuXHRcdFx0dGhpcy5kaXJMaWdodCA9IHRoaXMuZW52U2NlbmUuZ2V0T2JqZWN0QnlOYW1lKCBcImRpckxpZ2h0XCIgKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuY3VyTWF0ID0gdGhpcy5jdXJNYXRlcmlhbCgpO1xyXG5cdFx0dGhpcy51cGRhdGVDdXJNYXRlcmlhbChqc29uLmZyYWcsIGpzb24udmVydCk7XHJcblx0XHR0aGlzLmN1ck1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblx0XHRcclxuXHRcdHRoaXMudXNlTGlnaHQoZGF0YS51c2VMaWdodCk7XHJcblx0fVxyXG5cclxuXHJcblx0dG9KU09OKCl7XHJcblx0XHRsZXQgc2NvcGUgPSB0aGlzO1xyXG5cdFx0dGhpcy5zY2VuZS50cmF2ZXJzZSAoZnVuY3Rpb24gKG9iamVjdClcclxuXHRcdHtcclxuXHRcdFx0aWYgKG9iamVjdCBpbnN0YW5jZW9mIFRIUkVFLk1lc2gpXHJcblx0XHRcdHtcclxuXHRcdFx0XHRpZiAob2JqZWN0Lm1hdGVyaWFsIGluc3RhbmNlb2YgVEhSRUUuU2hhZGVyTWF0ZXJpYWwpe1xyXG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzY29wZS50aHJlZUNhbnZhcy5kYXRhLnRleHR1cmVzLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0XHRcdFx0dmFyIHByb3BlcnR5ID0gJ2lUZXh0dXJlJyArIGk7XHJcblx0XHRcdFx0XHRcdG9iamVjdC5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0b2JqZWN0Lm1hdGVyaWFsLnVuaWZvcm1zLmlEZXB0aFRleHR1cmUudmFsdWUgPSBudWxsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0bWV0YWRhdGE6IHt9LFxyXG5cdFx0XHRzY2VuZTogdGhpcy5zY2VuZS50b0pTT04oKSxcclxuXHRcdFx0ZW52U2NlbmU6IHRoaXMuZW52U2NlbmUgIT0gbnVsbCA/IHRoaXMuZW52U2NlbmUudG9KU09OKCkgOiBudWxsLFxyXG5cdFx0XHRmcmFnOiB0aGlzLmN1ck1hdGVyaWFsKCkuZnJhZ21lbnRTaGFkZXIsXHJcblx0XHRcdHZlcnQ6IHRoaXMuY3VyTWF0ZXJpYWwoKS52ZXJ0ZXhTaGFkZXIsXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVW5pZm9ybXMoKXtcclxuXHRcdGxldCBzY29wZSA9IHRoaXM7XHJcblxyXG5cdFx0dmFyIGN1clRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAuMDtcclxuXHRcdGlmIChzY29wZS5kaXJMaWdodCAhPSBudWxsKXtcclxuXHRcdFx0dGhpcy5kaXJMaWdodC5wb3NpdGlvbi5zZXQoIDEwICogTWF0aC5zaW4oY3VyVGltZSksIDEwLCAxMCAqIE1hdGguY29zKGN1clRpbWUpICk7XHJcblx0XHRcdHRoaXMuZGlyTGlnaHQudGFyZ2V0LnBvc2l0aW9uLnNldCggMCwgMCwgMCApO1xyXG5cdFx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaUxpZ2h0RGlyZWN0aW9uLnZhbHVlID0gLXRoaXMuZGlyTGlnaHQucG9zaXRpb247XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gY3VyVGltZTtcclxuXHRcdC8vIHRoaXMuY3VyTWF0ZXJpYWwoKS51bmlmb3Jtcy5pUmVzb2x1dGlvbi52YWx1ZS54ID0gc2NvcGUudGhyZWVDYW52YXMuY2FudmFzLmNsaWVudFdpZHRoO1xyXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnkgPSBzY29wZS50aHJlZUNhbnZhcy5jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG5cdFx0Ly8gdGhpcy5jdXJNYXRlcmlhbCgpLnVuaWZvcm1zLmlDYW1lcmFOZWFyLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuY2FtZXJhLm5lYXI7XHJcblx0XHQvLyB0aGlzLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMuaUNhbWVyYUZhci52YWx1ZSA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbWVyYS5mYXI7XHJcblx0XHQvLyB0aGlzLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMuaURlcHRoVGV4dHVyZS52YWx1ZSA9IHNjb3BlLnRocmVlQ2FudmFzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZTtcclxuXHJcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaVRpbWUudmFsdWUgPSBjdXJUaW1lO1xyXG5cdFx0c2NvcGUuY3VycmVudE9iaigpLm1hdGVyaWFsLnVuaWZvcm1zLmlSZXNvbHV0aW9uLnZhbHVlLnggPSBzY29wZS50aHJlZUNhbnZhcy5jYW52YXMuY2xpZW50V2lkdGg7XHJcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueSA9IHNjb3BlLnRocmVlQ2FudmFzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcblx0XHRzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXMuaUNhbWVyYU5lYXIudmFsdWUgPSBzY29wZS50aHJlZUNhbnZhcy5jYW1lcmEubmVhcjtcclxuXHRcdHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtcy5pQ2FtZXJhRmFyLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuY2FtZXJhLmZhcjtcclxuXHRcdHNjb3BlLmN1cnJlbnRPYmooKS5tYXRlcmlhbC51bmlmb3Jtcy5pRGVwdGhUZXh0dXJlLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuZGVwdGhUYXJnZXQuZGVwdGhUZXh0dXJlO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2NvcGUudGhyZWVDYW52YXMuZGF0YS50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdHZhciBwcm9wZXJ0eSA9ICdpVGV4dHVyZScgKyBpO1xyXG4gICAgICAgICAgICBzY29wZS5jdXJyZW50T2JqKCkubWF0ZXJpYWwudW5pZm9ybXNbcHJvcGVydHldLnZhbHVlID0gc2NvcGUudGhyZWVDYW52YXMuZGF0YS50ZXh0dXJlc1tpXTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IFRocmVlQ2FudmFzIGZyb20gJy4vVGhyZWVDYW52YXMnO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlclBhc3Mge1xyXG5cdGNvbnN0cnVjdG9yKGNhbnZhcywgcmVuZGVyZXIsIGRvd25SZXMsIHJlbmRlclRvU2NyZWVuLCBmcmFnLCB2ZXJ0ZXgsIGluZGV4LCBwYXNzTmFtZSkge1xyXG5cdFx0dGhpcy50aHJlZUNhbnZhcyA9IGNhbnZhcztcclxuXHRcdHRoaXMud2lkdGggPSBjYW52YXMuY2FudmFzLmNsaWVudFdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBjYW52YXMuY2FudmFzLmNsaWVudEhlaWdodDtcclxuXHJcblx0XHR0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG5cdFx0aWYgKHBhc3NOYW1lID09IG51bGwgfHwgcGFzc05hbWUgPT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0dGhpcy5wYXNzTmFtZSA9ICdOYW1lJztcclxuXHRcdH1cclxuXHRcdGVsc2V7XHJcblx0XHRcdHRoaXMucGFzc05hbWUgPSBwYXNzTmFtZTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmNhbWVyYSA9IG5ldyBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEoIC0gMSwgMSwgMSwgLSAxLCAwLCAxICk7XHJcblx0XHR0aGlzLnNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XHJcblx0XHR0aGlzLnF1YWQgPSBuZXcgVEhSRUUuTWVzaCggbmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoIDIsIDIgKSwgbnVsbCApO1xyXG5cdFx0dGhpcy5xdWFkLmZydXN0dW1DdWxsZWQgPSBmYWxzZTsgLy8gQXZvaWQgZ2V0dGluZyBjbGlwcGVkXHJcblx0XHR0aGlzLnNjZW5lLmFkZCggdGhpcy5xdWFkICk7XHJcblxyXG5cdFx0Ly90aGlzLnVuaWZvcm1zID0gdGhpcy50aHJlZUNhbnZhcy5nZXRJbnB1dFVuaWZvcm1zKCk7XHJcblx0XHR0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XHJcblx0XHRcdHVuaWZvcm1zOiBudWxsLFxyXG5cdFx0XHR2ZXJ0ZXhTaGFkZXI6IHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRIZWFkZXIoKSArIHZlcnRleCxcclxuXHRcdFx0ZnJhZ21lbnRTaGFkZXI6IHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRIZWFkZXIoKSArIGZyYWdcclxuXHRcdH0gKTtcclxuXHJcblx0XHR0aGlzLnJlZnJlc2hVbmlmb3JtcygpO1xyXG5cclxuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcclxuXHRcdHRoaXMucmVuZGVyVG9TY3JlZW4gPSByZW5kZXJUb1NjcmVlbjtcclxuXHRcdHRoaXMuZG93blJlcyA9IGRvd25SZXM7XHJcblx0XHR0aGlzLnNldFRhcmdldFRleHR1cmUoZG93blJlcyk7XHJcblx0XHR0aGlzLnVwZGF0ZU1hdGVyaWFsKHRoaXMudGhyZWVDYW52YXMuZ2V0SW5wdXRIZWFkZXIoKSArIHZlcnRleCwgXHJcblx0XHR0aGlzLnRocmVlQ2FudmFzLmdldElucHV0SGVhZGVyKCkgKyBmcmFnKTtcclxuXHR9XHJcblxyXG5cdHNldFNpemUod2lkdGgsIGhlaWdodCkge1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHR0aGlzLnJlbmRlclRhcmdldC5zZXRTaXplKCB3aWR0aCAqIHRoaXMuZG93blJlcywgaGVpZ2h0ICogdGhpcy5kb3duUmVzICk7XHJcblx0fVxyXG5cclxuXHRzZXRSZXMocmVzKXtcclxuXHRcdHRoaXMuZG93blJlcyA9IHJlcztcclxuXHRcdHRoaXMuc2V0U2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblx0fVxyXG5cclxuXHR0b0pTT04oKXtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGRvd25SZXM6IHRoaXMuZG93blJlcyxcclxuXHRcdFx0cmVuZGVyVG9TY3JlZW46IHRoaXMucmVuZGVyVG9TY3JlZW4sXHJcblx0XHRcdGZyYWc6IHRoaXMubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIsXHJcblx0XHRcdHZlcnRleDogdGhpcy5tYXRlcmlhbC52ZXJ0ZXhTaGFkZXIsXHJcblx0XHRcdHBhc3NOYW1lOiB0aGlzLnBhc3NOYW1lLFxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyKCl7XHJcblx0XHR0aGlzLnF1YWQubWF0ZXJpYWwgPSB0aGlzLm1hdGVyaWFsO1xyXG5cdFx0aWYgKCB0aGlzLnJlbmRlclRvU2NyZWVuICkge1xyXG5cdFx0XHR0aGlzLnJlbmRlcmVyLnJlbmRlciggdGhpcy5zY2VuZSwgdGhpcy5jYW1lcmEpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5yZW5kZXJlci5yZW5kZXIoIHRoaXMuc2NlbmUsIHRoaXMuY2FtZXJhLCB0aGlzLnJlbmRlclRhcmdldCwgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZWZyZXNoVW5pZm9ybXMoKXtcclxuXHRcdHRoaXMudW5pZm9ybXMgPSB0aGlzLnRocmVlQ2FudmFzLmdldElucHV0VW5pZm9ybXMoKTtcclxuXHRcdHRoaXMubWF0ZXJpYWwudW5pZm9ybXMgPSB0aGlzLnVuaWZvcm1zO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlTWF0ZXJpYWwodmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcil7XHJcblx0XHR0aGlzLnJlZnJlc2hVbmlmb3JtcygpO1xyXG5cdFx0dGhpcy5tYXRlcmlhbC52ZXJ0ZXhTaGFkZXIgPSB2ZXJ0ZXhTaGFkZXI7XHJcblx0XHR0aGlzLm1hdGVyaWFsLmZyYWdtZW50U2hhZGVyID0gZnJhZ21lbnRTaGFkZXI7XHJcblx0XHR0aGlzLm1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHNldFRhcmdldFRleHR1cmUoZG93blJlcyl7XHJcblx0XHR2YXIgcGFyYW1ldGVycyA9IHtcclxuXHRcdFx0bWluRmlsdGVyOiBUSFJFRS5MaW5lYXJGaWx0ZXIsXHJcblx0XHRcdG1hZ0ZpbHRlcjogVEhSRUUuTGluZWFyRmlsdGVyLFxyXG5cdFx0XHRmb3JtYXQ6IFRIUkVFLlJHQkFGb3JtYXQsXHJcbiAgICAgICAgICAgIHN0ZW5jaWxCdWZmZXI6IGZhbHNlLFxyXG5cdFx0fTtcclxuXHRcdHZhciBzaXplID0gdGhpcy5yZW5kZXJlci5nZXREcmF3aW5nQnVmZmVyU2l6ZSgpO1xyXG5cdFx0dGhpcy5yZW5kZXJUYXJnZXQgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJUYXJnZXQoIHNpemUud2lkdGggKiBkb3duUmVzLCBzaXplLmhlaWdodCAqIGRvd25SZXMsIHBhcmFtZXRlcnMgKTtcclxuXHRcdC8vcmVuZGVyVGFyZ2V0LnRleHR1cmUubmFtZSA9ICdFZmZlY3RDb21wb3Nlci5ydDEnO1xyXG5cdH1cclxuXHJcblxyXG59XHJcbiIsImltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tICcuL1JlbmRlclBhc3MnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFREYXRhIHtcclxuXHRjb25zdHJ1Y3Rvcihvd25lcikge1xyXG5cdFx0dGhpcy5vd25lciA9IG93bmVyO1xyXG5cdFx0dGhpcy50ZXh0dXJlcyA9IG5ldyBBcnJheSgyKTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR0aGlzLmVkaXRNb2RlID0gMDtcclxuXHRcdHRoaXMuYmxlbmRpbmcgPSAwO1xyXG5cdFx0dGhpcy5zaWRlID0gMDtcclxuXHRcdHRoaXMudHJhbnNwYXJlbnQgPSBmYWxzZTtcclxuXHRcdHRoaXMub2JqU2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMyggMSwgMSwgMSApO1xyXG5cdFx0dGhpcy5vYmpQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMCApO1xyXG5cdFx0dGhpcy5vYmpSb3QgPSBuZXcgVEhSRUUuVmVjdG9yMyggMCwgMCwgMCApO1xyXG5cdFx0dGhpcy5vYmplY3RUeXBlID0gMDtcclxuXHRcdHRoaXMuZmxhdFNoYWRpbmcgPSBmYWxzZTtcclxuXHRcdHRoaXMud2lyZWZyYW1lID0gZmFsc2U7XHJcblx0XHR0aGlzLmRlcHRoV3JpdGUgPSB0cnVlO1xyXG5cdFx0dGhpcy5kZXB0aFRlc3QgPSB0cnVlO1xyXG5cdFx0dGhpcy5yZW5kZXJQYXNzZXMgPSBuZXcgQXJyYXkoKTtcclxuXHRcdHRoaXMucGFzc0RhdGFzID0gW107XHJcblx0XHR0aGlzLnNob3dTY2VuZSA9IGZhbHNlO1xyXG5cdFx0dGhpcy51c2VMaWdodCA9IGZhbHNlO1xyXG5cdFx0dGhpcy5hbmltYXRlU2NhbGUgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHRvSlNPTigpe1xyXG5cdFx0dmFyIHRleERhdGEgPSBbXTtcclxuXHRcdHRoaXMuaW1hZ2VzID0ge307XHJcblx0XHR2YXIgYmFja3VwID0gdGhpcy50ZXh0dXJlcy5zbGljZSgpO1xyXG5cdFx0dGhpcy50ZXh0dXJlcyA9IG5ldyBBcnJheSgyKTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYmFja3VwLmxlbmd0aDsgaSsrKXtcclxuXHRcdFx0aWYgKGJhY2t1cFtpXSA9PSBudWxsIHx8IGJhY2t1cFtpXS5pbWFnZSA9PSB1bmRlZmluZWQgfHwgYmFja3VwW2ldLmltYWdlID09IG51bGwpe1xyXG5cdFx0XHRcdHRleERhdGEucHVzaChudWxsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNle1xyXG5cdFx0XHRcdC8vTk9URSEhISBcclxuXHRcdFx0XHQvL3RvSlNPTih0aGlzKSB3aWxsIHNldCBpbWFnZXMgZGF0YSwgYW5kIHRleHR1cmVzISFcclxuXHRcdFx0XHR0ZXhEYXRhLnB1c2goYmFja3VwW2ldLnRvSlNPTih0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHRoaXMudGV4dHVyZXMgPSBiYWNrdXA7XHJcblxyXG5cdFx0dGhpcy5wYXNzRGF0YXMgPSBbXTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHR0aGlzLnBhc3NEYXRhcy5wdXNoKHRoaXMucmVuZGVyUGFzc2VzW2ldLnRvSlNPTigpKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4ge1xyXG5cdFx0XHR0ZXh0dXJlczogdGV4RGF0YSxcclxuXHRcdFx0aW1hZ2VzOiB0aGlzLmltYWdlcyxcclxuXHRcdFx0ZWRpdE1vZGU6IHRoaXMuZWRpdE1vZGUsXHJcblx0XHRcdGJsZW5kaW5nOiB0aGlzLmJsZW5kaW5nLFxyXG5cdFx0XHRzaWRlOiB0aGlzLnNpZGUsXHJcblx0XHRcdHRyYW5zcGFyZW50OiB0aGlzLnRyYW5zcGFyZW50LFxyXG5cdFx0XHRvYmpTY2FsZTogdGhpcy5vYmpTY2FsZSxcclxuXHRcdFx0b2JqUG9zOiB0aGlzLm9ialBvcyxcclxuXHRcdFx0b2JqUm90OiB0aGlzLm9ialJvdCxcclxuXHRcdFx0b2JqZWN0VHlwZTogdGhpcy5vYmplY3RUeXBlLFxyXG5cdFx0XHRmbGF0U2hhZGluZzp0aGlzLmZsYXRTaGFkaW5nLFxyXG5cdFx0XHR3aXJlZnJhbWU6dGhpcy53aXJlZnJhbWUsXHJcblx0XHRcdGRlcHRoV3JpdGU6dGhpcy5kZXB0aFdyaXRlLFxyXG5cdFx0XHRkZXB0aFRlc3Q6dGhpcy5kZXB0aFRlc3QsXHJcblx0XHRcdHBhc3NEYXRhczogdGhpcy5wYXNzRGF0YXMsXHJcblx0XHRcdHNob3dTY2VuZTogdGhpcy5zaG93U2NlbmUsXHJcblx0XHRcdHVzZUxpZ2h0OiB0aGlzLnVzZUxpZ2h0LFxyXG5cdFx0XHRhbmltYXRlU2NhbGU6dGhpcy5hbmltYXRlU2NhbGUsXHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRsb2FkRnJvbUpTT04oanNvbil7XHJcblxyXG5cdFx0dGhpcy50ZXh0dXJlcyA9IGpzb24udGV4dHVyZXM7XHJcblx0XHR0aGlzLmltYWdlcyA9IGpzb24uaW1hZ2VzO1xyXG5cdFx0dGhpcy5lZGl0TW9kZSA9IGpzb24uZWRpdE1vZGU7XHJcblx0XHR0aGlzLmJsZW5kaW5nID0ganNvbi5ibGVuZGluZyA9PSB1bmRlZmluZWQgPyAwOiBqc29uLmJsZW5kaW5nO1xyXG5cdFx0dGhpcy5zaWRlID0ganNvbi5zaWRlID09IHVuZGVmaW5lZCA/IDA6IGpzb24uc2lkZTtcclxuXHRcdHRoaXMudHJhbnNwYXJlbnQgPSBqc29uLnRyYW5zcGFyZW50ID09IHVuZGVmaW5lZCA/IHRydWU6IGpzb24udHJhbnNwYXJlbnQ7XHJcblx0XHRcclxuXHRcdHRoaXMub2JqU2NhbGU9anNvbi5vYmpTY2FsZSxcclxuXHRcdHRoaXMub2JqUG9zPSBqc29uLm9ialBvcyxcclxuXHRcdHRoaXMub2JqUm90PSBqc29uLm9ialJvdCxcclxuXHRcdHRoaXMub2JqZWN0VHlwZSA9IGpzb24ub2JqZWN0VHlwZSA9PSB1bmRlZmluZWQgPyAwOiBqc29uLm9iamVjdFR5cGU7XHJcblx0XHR0aGlzLmZsYXRTaGFkaW5nID0ganNvbi5mbGF0U2hhZGluZyA9PSB1bmRlZmluZWQgPyBmYWxzZToganNvbi5mbGF0U2hhZGluZztcclxuXHRcdHRoaXMud2lyZWZyYW1lID0ganNvbi53aXJlZnJhbWUgPT0gdW5kZWZpbmVkID8gZmFsc2U6IGpzb24ud2lyZWZyYW1lO1xyXG5cdFx0dGhpcy5kZXB0aFdyaXRlID0ganNvbi5kZXB0aFdyaXRlID09IHVuZGVmaW5lZCA/IGZhbHNlOiBqc29uLmRlcHRoV3JpdGU7XHJcblx0XHR0aGlzLmRlcHRoVGVzdCA9IGpzb24uZGVwdGhUZXN0ID09IHVuZGVmaW5lZCA/IGZhbHNlOiBqc29uLmRlcHRoVGVzdDtcclxuXHRcdHRoaXMucGFzc0RhdGFzID0ganNvbi5wYXNzRGF0YXM7XHJcblx0XHR0aGlzLnNob3dTY2VuZSA9IGpzb24uc2hvd1NjZW5lO1xyXG5cdFx0dGhpcy51c2VMaWdodCA9IGpzb24udXNlTGlnaHQ7XHJcblx0XHR0aGlzLmFuaW1hdGVTY2FsZSA9IGpzb24uYW5pbWF0ZVNjYWxlID09IHVuZGVmaW5lZCA/IGZhbHNlOiBqc29uLmFuaW1hdGVTY2FsZTtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy50ZXh0dXJlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHR1cmVzW2ldID09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy50ZXh0dXJlc1tpXSA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5PYmplY3RMb2FkZXIoKTtcclxuICAgICAgICB2YXIgaW1hZ2VEYXRhcyA9IFtdO1xyXG4gICAgICAgIGZvcih2YXIgZWxlIGluIHRoaXMuaW1hZ2VzKXtcclxuICAgICAgICAgICAgaW1hZ2VEYXRhcy5wdXNoKHRoaXMuaW1hZ2VzW2VsZV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGltYWdlRWxlbWVudHMgPSBsb2FkZXIucGFyc2VJbWFnZXMoaW1hZ2VEYXRhcyk7XHJcblxyXG4gICAgICAgIHZhciB0ZXhEYXRhcyA9IGxvYWRlci5wYXJzZVRleHR1cmVzKHRoaXMudGV4dHVyZXMsaW1hZ2VFbGVtZW50cyk7XHJcblx0XHQvL3RoaXMudGV4dHVyZXMgPSBbXTtcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMudGV4dHVyZXMubGVuZ3RoOyBpKyspe1xyXG5cdFx0XHRpZiAodGhpcy50ZXh0dXJlc1tpXS51dWlkID09IHVuZGVmaW5lZCl7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Zm9yKHZhciBlbGUgaW4gdGV4RGF0YXMpe1xyXG5cdFx0XHRcdGlmICh0aGlzLnRleHR1cmVzW2ldLnV1aWQgPT09IGVsZSl7XHJcblx0XHRcdFx0XHR0aGlzLnRleHR1cmVzW2ldID0gdGV4RGF0YXNbZWxlXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIiwiaW1wb3J0IHsgc3Vic2NyaWJlTWl4aW4gfSBmcm9tICcuL3Rvb2xzL21peGluJztcclxuaW1wb3J0IHsgT3JiaXRDb250cm9scyB9IGZyb20gJy4vdG9vbHMvT3JiaXRDb250cm9scyc7XHJcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4vdG9vbHMvTG9hZGVyJztcclxuaW1wb3J0IHsgVHJhbnNmb3JtQ29udHJvbHMgfSBmcm9tICcuL3Rvb2xzL1RyYW5zZm9ybUNvbnRyb2xzJztcclxuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSAnLi9QbGF5ZXInO1xyXG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSAnLi9SZW5kZXJQYXNzJztcclxuaW1wb3J0IHsgVERhdGEgfSBmcm9tICcuL1REYXRhJztcclxuLy9pbXBvcnQgeyBTaGFkZXJQYXNzLCBDbGVhclBhc3MsIFJlbmRlclBhc3MsIEVmZmVjdENvbXBvc2VyLENvcHlTaGFkZXIsRG90U2NyZWVuU2hhZGVyIH0gZnJvbSAnLi9FZmZlY3RDb21wb3Nlci5qcyc7XHJcblxyXG5jb25zdCBWRVJURVhfSEVBREVSX1RIUkVFID0gYFxyXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbi8vVGhyZWUuanMgQnVpbHQtaW4gdW5pZm9ybXMgYW5kIGF0dHJpYnV0ZXNcclxuLy9odHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xQcm9ncmFtXHJcbi8vID0gb2JqZWN0Lm1hdHJpeFdvcmxkXHJcbnVuaWZvcm0gbWF0NCBtb2RlbE1hdHJpeDtcclxuLy8gPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICogb2JqZWN0Lm1hdHJpeFdvcmxkXHJcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XHJcbi8vID0gY2FtZXJhLnByb2plY3Rpb25NYXRyaXhcclxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XHJcbi8vID0gY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZVxyXG51bmlmb3JtIG1hdDQgdmlld01hdHJpeDtcclxuLy8gPSBpbnZlcnNlIHRyYW5zcG9zZSBvZiBtb2RlbFZpZXdNYXRyaXhcclxudW5pZm9ybSBtYXQzIG5vcm1hbE1hdHJpeDtcclxuLy8gPSBjYW1lcmEgcG9zaXRpb24gaW4gd29ybGQgc3BhY2VcclxudW5pZm9ybSB2ZWMzIGNhbWVyYVBvc2l0aW9uO1xyXG5cclxuLy8gZGVmYXVsdCB2ZXJ0ZXggYXR0cmlidXRlcyBwcm92aWRlZCBieSBHZW9tZXRyeSBhbmQgQnVmZmVyR2VvbWV0cnlcclxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XHJcbmF0dHJpYnV0ZSB2ZWMzIG5vcm1hbDtcclxuYXR0cmlidXRlIHZlYzIgdXY7XHJcbmF0dHJpYnV0ZSB2ZWMyIHV2MjtcclxuYDtcclxuXHJcbmNvbnN0IEZSQUdfSEVBREVSX1RIUkVFID0gYFxyXG5wcmVjaXNpb24gaGlnaHAgZmxvYXQ7XHJcbi8vVGhyZWUuanMgQnVpbHQtaW4gdW5pZm9ybXMgYW5kIGF0dHJpYnV0ZXNcclxuLy9odHRwczovL3RocmVlanMub3JnL2RvY3MvI2FwaS9yZW5kZXJlcnMvd2ViZ2wvV2ViR0xQcm9ncmFtXHJcbi8vID0gb2JqZWN0Lm1hdHJpeFdvcmxkXHJcbnVuaWZvcm0gbWF0NCBtb2RlbE1hdHJpeDtcclxuLy8gPSBjYW1lcmEubWF0cml4V29ybGRJbnZlcnNlICogb2JqZWN0Lm1hdHJpeFdvcmxkXHJcbnVuaWZvcm0gbWF0NCBtb2RlbFZpZXdNYXRyaXg7XHJcbi8vID0gY2FtZXJhLnByb2plY3Rpb25NYXRyaXhcclxudW5pZm9ybSBtYXQ0IHByb2plY3Rpb25NYXRyaXg7XHJcbi8vID0gY2FtZXJhLm1hdHJpeFdvcmxkSW52ZXJzZVxyXG51bmlmb3JtIG1hdDQgdmlld01hdHJpeDtcclxuLy8gPSBpbnZlcnNlIHRyYW5zcG9zZSBvZiBtb2RlbFZpZXdNYXRyaXhcclxudW5pZm9ybSBtYXQzIG5vcm1hbE1hdHJpeDtcclxuLy8gPSBjYW1lcmEgcG9zaXRpb24gaW4gd29ybGQgc3BhY2VcclxudW5pZm9ybSB2ZWMzIGNhbWVyYVBvc2l0aW9uO1xyXG5gO1xyXG5cclxuY29uc3QgRU1QVFlfVkVSVEVYX1NIQURFUiA9IGBcclxudmFyeWluZyB2ZWMzIGZOb3JtYWw7XHJcbnZhcnlpbmcgdmVjMyBmUG9zaXRpb247XHJcbnZhcnlpbmcgdmVjMiBmVVY7XHJcblxyXG52b2lkIG1haW4oKVxyXG57XHJcbiAgICBmTm9ybWFsID0gbm9ybWFsO1xyXG4gICAgdmVjNCB3cG9zID0gbW9kZWxNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xyXG4gICAgZlBvc2l0aW9uID0gd3Bvcy54eXo7XHJcbiAgICBmVVYgPSB1djtcclxuICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG1vZGVsVmlld01hdHJpeCAqIHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcclxufVxyXG5gO1xyXG5cclxuY29uc3QgRU1QVFlfRlJBR19TSEFERVIgPSBgXHJcbnZhcnlpbmcgdmVjMyBmUG9zaXRpb247XHJcbnZhcnlpbmcgdmVjMyBmTm9ybWFsO1xyXG52YXJ5aW5nIHZlYzIgZlVWO1xyXG5cclxudmVjMyByaW0odmVjMyBjb2xvciwgZmxvYXQgc3RhcnQsIGZsb2F0IGVuZCwgZmxvYXQgY29lZilcclxue1xyXG4gIHZlYzMgbm9ybWFsID0gbm9ybWFsaXplKGZOb3JtYWwpO1xyXG4gIHZlYzMgZXllID0gbm9ybWFsaXplKGNhbWVyYVBvc2l0aW9uLSBmUG9zaXRpb24pO1xyXG4gIGZsb2F0IHJpbSA9IHNtb290aHN0ZXAoc3RhcnQsIGVuZCwgMS4wIC0gZG90KG5vcm1hbCwgZXllKSk7XHJcbiAgcmV0dXJuIGNsYW1wKHJpbSwgMC4wLCAxLjApICogY29lZiAqIGNvbG9yO1xyXG59XHJcblxyXG5cclxudm9pZCBtYWluKClcclxue1xyXG4gICAgdmVjMyByaW1Db2xvciA9IHJpbSh2ZWMzKDAuNzY0LDEuMDAwLDAuODU3KSwwLjM2MCwxLjE0NCwxLjgxNik7XHJcbiAgICB2ZWMzIGJhc2VDb2xvciA9IGZOb3JtYWwgKiBzaW4oaVRpbWUgKiAzLjApO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChyaW1Db2xvciArIGJhc2VDb2xvciwxLjApO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBWSUdORVRURV9WRVJURVggPSBgXHJcbnZhcnlpbmcgdmVjMiBmVVY7XHJcbnZvaWQgbWFpbigpIHtcclxuICAgIGZVViA9IHV2O1xyXG4gICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNCggcG9zaXRpb24sIDEuMCApO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBWSUdORVRURV9GUkFHID0gYFxyXG52YXJ5aW5nIHZlYzIgZlVWO1xyXG4vL0ZpbGwgdGhlIGlQYXNzMCB0ZXh0dXJlIHdpdGggVmlnbmV0dGUgc2hhZGVyLlxyXG52b2lkIG1haW4oKSB7XHJcbiAgICBmbG9hdCBvZmZzZXQgPSAxLjA7XHJcbiAgICBmbG9hdCBkYXJrbmVzcyA9IDEuMDtcclxuICAgIHZlYzQgYmFja0NvbG9yID0gdmVjNCgwLjIwMywwLjI5MywwLjQ4NSwxLjAwMCk7XHJcbiAgICB2ZWMyIHV2ID0gKCBmVVYgLSB2ZWMyKDAuNSwwLjUpICkgKiB2ZWMyKCBvZmZzZXQgKTtcclxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIG1peCggYmFja0NvbG9yLnJnYiwgdmVjMyggMS4wIC0gZGFya25lc3MgKSwgZG90KCB1diwgdXYgKSApLCBiYWNrQ29sb3IuYSApO1xyXG59XHJcbmA7XHJcblxyXG5jb25zdCBDT01QT1NFX0ZSQUcgPSBgXHJcbnZhcnlpbmcgdmVjMiBmVVY7XHJcbi8vaVBhc3MwIGlzIHJlbmRlcmVkIGJ5IGlQYXNzMCh0aGUgVmlnbmV0dGUgc2hhZGVyKVxyXG4vL2lTY2VuZVRleHR1cmUgaXMgcmVuZGVyZWQgYnkgdGhlIE9iamVjdCBzaGFkZXJcclxudm9pZCBtYWluKCkge1xyXG4gICAgdmVjNCBvYmplY3QgPSB0ZXh0dXJlMkQoIGlTY2VuZVRleHR1cmUsIGZVViApO1xyXG4gICAgdmVjNCBiYWNrZ3JvdW5kID0gdGV4dHVyZTJEKCBpUGFzczAsIGZVViApO1xyXG4gICAgZ2xfRnJhZ0NvbG9yID0gbWl4KGJhY2tncm91bmQsIG9iamVjdCwgb2JqZWN0LmEpO1xyXG59XHJcbmA7XHJcblxyXG5cclxuY29uc3QgREVGQVVMVF9QQVNTX1ZFUlRFWCA9IGBcclxudmFyeWluZyB2ZWMyIGZVVjtcclxudm9pZCBtYWluKCkge1xyXG4gICAgZlVWID0gdXY7XHJcbiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KCBwb3NpdGlvbiwgMS4wICk7XHJcbn1cclxuYDtcclxuXHJcbmNvbnN0IERFRkFVTFRfUEFTU19GUkFHID0gYFxyXG52YXJ5aW5nIHZlYzIgZlVWO1xyXG52b2lkIG1haW4oKSB7XHJcbiAgICB2ZWM0IHRleGVsID0gdGV4dHVyZTJEKCBpU2NlbmVUZXh0dXJlLCBmVVYgKTtcclxuICAgIGdsX0ZyYWdDb2xvciA9IHRleGVsO1xyXG59XHJcbmA7XHJcblxyXG5cclxuY29uc3QgVEhSRUVfUEFDS0lORyA9IFwidmVjMyBwYWNrTm9ybWFsVG9SR0IoIGNvbnN0IGluIHZlYzMgbm9ybWFsICkge3JldHVybiBub3JtYWxpemUoIG5vcm1hbCApICogMC41ICsgMC41O1xcclxcbn1cXHJcXG5cXHJcXG52ZWMzIHVucGFja1JHQlRvTm9ybWFsKCBjb25zdCBpbiB2ZWMzIHJnYiApIHtcXHJcXG5cXHRyZXR1cm4gMi4wICogcmdiLnh5eiAtIDEuMDtcXHJcXG59XFxyXFxuXFxyXFxuY29uc3QgZmxvYXQgUGFja1Vwc2NhbGUgPSAyNTYuIC8gMjU1LjsgLy8gZnJhY3Rpb24gLT4gMC4uMSAoaW5jbHVkaW5nIDEpXFxyXFxuY29uc3QgZmxvYXQgVW5wYWNrRG93bnNjYWxlID0gMjU1LiAvIDI1Ni47IC8vIDAuLjEgLT4gZnJhY3Rpb24gKGV4Y2x1ZGluZyAxKVxcclxcblxcclxcbmNvbnN0IHZlYzMgUGFja0ZhY3RvcnMgPSB2ZWMzKCAyNTYuICogMjU2LiAqIDI1Ni4sIDI1Ni4gKiAyNTYuLCAgMjU2LiApO1xcclxcbmNvbnN0IHZlYzQgVW5wYWNrRmFjdG9ycyA9IFVucGFja0Rvd25zY2FsZSAvIHZlYzQoIFBhY2tGYWN0b3JzLCAxLiApO1xcclxcblxcclxcbmNvbnN0IGZsb2F0IFNoaWZ0UmlnaHQ4ID0gMS4gLyAyNTYuO1xcclxcblxcclxcbnZlYzQgcGFja0RlcHRoVG9SR0JBKCBjb25zdCBpbiBmbG9hdCB2ICkge1xcclxcblxcdHZlYzQgciA9IHZlYzQoIGZyYWN0KCB2ICogUGFja0ZhY3RvcnMgKSwgdiApO1xcclxcblxcdHIueXp3IC09IHIueHl6ICogU2hpZnRSaWdodDg7IC8vIHRpZHkgb3ZlcmZsb3dcXHJcXG5cXHRyZXR1cm4gciAqIFBhY2tVcHNjYWxlO1xcclxcbn1cXHJcXG5cXHJcXG5mbG9hdCB1bnBhY2tSR0JBVG9EZXB0aCggY29uc3QgaW4gdmVjNCB2ICkge1xcclxcblxcdHJldHVybiBkb3QoIHYsIFVucGFja0ZhY3RvcnMgKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8gTk9URTogdmlld1ovZXllWiBpcyA8IDAgd2hlbiBpbiBmcm9udCBvZiB0aGUgY2FtZXJhIHBlciBPcGVuR0wgY29udmVudGlvbnNcXHJcXG5cXHJcXG5mbG9hdCB2aWV3WlRvT3J0aG9ncmFwaGljRGVwdGgoIGNvbnN0IGluIGZsb2F0IHZpZXdaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxyXFxuXFx0cmV0dXJuICggdmlld1ogKyBuZWFyICkgLyAoIG5lYXIgLSBmYXIgKTtcXHJcXG59XFxyXFxuZmxvYXQgb3J0aG9ncmFwaGljRGVwdGhUb1ZpZXdaKCBjb25zdCBpbiBmbG9hdCBsaW5lYXJDbGlwWiwgY29uc3QgaW4gZmxvYXQgbmVhciwgY29uc3QgaW4gZmxvYXQgZmFyICkge1xcclxcblxcdHJldHVybiBsaW5lYXJDbGlwWiAqICggbmVhciAtIGZhciApIC0gbmVhcjtcXHJcXG59XFxyXFxuXFxyXFxuZmxvYXQgdmlld1pUb1BlcnNwZWN0aXZlRGVwdGgoIGNvbnN0IGluIGZsb2F0IHZpZXdaLCBjb25zdCBpbiBmbG9hdCBuZWFyLCBjb25zdCBpbiBmbG9hdCBmYXIgKSB7XFxyXFxuXFx0cmV0dXJuICgoIG5lYXIgKyB2aWV3WiApICogZmFyICkgLyAoKCBmYXIgLSBuZWFyICkgKiB2aWV3WiApO1xcclxcbn1cXHJcXG5mbG9hdCBwZXJzcGVjdGl2ZURlcHRoVG9WaWV3WiggY29uc3QgaW4gZmxvYXQgaW52Q2xpcFosIGNvbnN0IGluIGZsb2F0IG5lYXIsIGNvbnN0IGluIGZsb2F0IGZhciApIHtcXHJcXG5cXHRyZXR1cm4gKCBuZWFyICogZmFyICkgLyAoICggZmFyIC0gbmVhciApICogaW52Q2xpcFogLSBmYXIgKTtcXHJcXG59XFxyXFxuXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaHJlZUNhbnZhcyB7XHJcblxyXG5cclxuICAgIGdldElucHV0SGVhZGVyKCkge1xyXG4gICAgICAgIHZhciBoZWFkZXIgPSAnLy9oZWFkZXItYmVnaW5cXHJcXG4nO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSAndW5pZm9ybSBmbG9hdCBpVGltZTtcXHJcXG51bmlmb3JtIHZlYzIgaVJlc29sdXRpb247XFxyXFxudW5pZm9ybSBzYW1wbGVyMkQgaURlcHRoVGV4dHVyZTtcXHJcXG51bmlmb3JtIHNhbXBsZXIyRCBpU2NlbmVUZXh0dXJlO1xcclxcbnVuaWZvcm0gZmxvYXQgaUNhbWVyYU5lYXI7XFxyXFxudW5pZm9ybSBmbG9hdCBpQ2FtZXJhRmFyO1xcclxcbic7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEudGV4dHVyZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBwYXJhbXMgKz0gJ3VuaWZvcm0gc2FtcGxlcjJEIGlUZXh0dXJlJyArIGkgKyAnO1xcclxcbic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIHBhcmFtcyArPSAndW5pZm9ybSBzYW1wbGVyMkQgaVBhc3MnICsgaSArICc7XFxyXFxuJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuc2hvd1NjZW5lICYmIHRoaXMuZGF0YS51c2VMaWdodCl7XHJcbiAgICAgICAgICAgIHBhcmFtcyArPSAndW5pZm9ybSB2ZWMzIGlMaWdodERpcmVjdGlvbjtcXHJcXG4nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVuZCA9ICcvL2hlYWRlci1lbmRcXHJcXG4nO1xyXG5cclxuICAgICAgICB2YXIgcmV0ID0gaGVhZGVyICsgcGFyYW1zICsgZW5kO1xyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHJldCk7XHJcbiAgICAgICAgcmV0dXJuIHJldDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgc3RhdGljIGdldCBFTVBUWV9WRVJURVhfU0hBREVSKCkge1xyXG4gICAgICAgIHJldHVybiBFTVBUWV9WRVJURVhfU0hBREVSO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgZ2V0IEVNUFRZX0ZSQUdfU0hBREVSKCkge1xyXG4gICAgICAgIHJldHVybiBFTVBUWV9GUkFHX1NIQURFUjtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IFZFUlRFWF9IRUFERVJfVEhSRUUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFZFUlRFWF9IRUFERVJfVEhSRUU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHN0YXRpYyBnZXQgRlJBR19IRUFERVJfVEhSRUUoKSB7XHJcbiAgICAgICAgcmV0dXJuIEZSQUdfSEVBREVSX1RIUkVFO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgVEhSRUVfUEFDS0lORygpIHtcclxuICAgICAgICByZXR1cm4gVEhSRUVfUEFDS0lORztcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0SW5wdXRVbmlmb3Jtcygpe1xyXG4gICAgICAgIGlmICh0aGlzLmlucHV0X3VuaWZvcm1zID09IG51bGwgfHwgdGhpcy5pbnB1dF91bmlmb3JtcyA9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0X3VuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICAgICAgaVRpbWU6IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMC4wXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaVJlc29sdXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIoKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlTY2VuZVRleHR1cmU6e1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaURlcHRoVGV4dHVyZTp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBpQ2FtZXJhTmVhcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6MC4wXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaUNhbWVyYUZhcjp7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6MC4wXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaUxpZ2h0RGlyZWN0aW9uOntcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEudGV4dHVyZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSAnaVRleHR1cmUnICsgaTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dF91bmlmb3Jtc1twcm9wZXJ0eV0gPSB7dmFsdWU6bnVsbH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB2YXIgcHJvcGVydHkgPSAnaVBhc3MnICsgaTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dF91bmlmb3Jtc1twcm9wZXJ0eV0gPSB7dmFsdWU6bnVsbH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dF91bmlmb3JtcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy90b2RvOiB1c2UgcmVnZXhwXHJcbiAgICBzdGF0aWMgcmVtb3ZlU2hhZGVySGVhZGVyKHNoYWRlcil7XHJcbiAgICAgICAgLy92YXIgcmVnZXggPSAvXlxcL1xcL2hlYWRlci1iZWdpbi4qXFwvXFwvaGVhZGVyLWVuZC9nbTtcclxuICAgICAgICAvL3ZhciByZWdleCA9IC9eaGVhZGVyLWJlZ2luKC4qKS9nO1xyXG4gICAgICAgIHZhciBiZWdpbiA9IHNoYWRlci5pbmRleE9mKFwiLy9oZWFkZXItYmVnaW5cIik7XHJcbiAgICAgICAgdmFyIGVuZCA9IHNoYWRlci5pbmRleE9mKFwiLy9oZWFkZXItZW5kXCIpO1xyXG4gICAgICAgIHZhciBzdWJzdHIgPSBzaGFkZXIuc3Vic3RyKGJlZ2luLCBlbmQgLSBiZWdpbisxMyk7XHJcblx0XHRzaGFkZXIgPSBzaGFkZXIucmVwbGFjZShzdWJzdHIsXCJcIik7XHJcblx0XHRpZiAoc2hhZGVyLnN0YXJ0c1dpdGgoXCJcXG5cIikpe1xyXG5cdFx0XHRzaGFkZXIgPSBzaGFkZXIuc3Vic3RyKDEsc2hhZGVyLmxlbmd0aCAtIDEpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHNoYWRlci5zdGFydHNXaXRoKFwiXFxuXCIpKXtcclxuXHRcdFx0c2hhZGVyID0gc2hhZGVyLnN1YnN0cigxLHNoYWRlci5sZW5ndGggLSAxKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBzaGFkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgc3Vic2NyaWJlTWl4aW4odGhpcyk7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5pbml0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVySW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDYWxsYmFjayA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLnRyYW5zZm9ybUNvbnRyb2xzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7XHJcblx0XHRcdGFudGlhbGlhczogdHJ1ZSxcclxuXHRcdFx0Y2FudmFzOiB0aGlzLmNhbnZhc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXV0b0NsZWFyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zaGFkb3dNYXBFbmFibGVkID0gdHJ1ZTtcclxuXHRcdHRoaXMucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwwKTtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFBpeGVsUmF0aW8od2luZG93LmRldmljZVBpeGVsUmF0aW8pO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKCA3NSwgdGhpcy5jYW52YXMuY2xpZW50V2lkdGggLyB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQsIDAuMSwgMTAwMCApO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnogPSAyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLnBvc2l0aW9uLnkgPSAyO1xyXG4gICAgICAgIHRoaXMuY2FtZXJhLmxvb2tBdCAoIDAsIDAsIDAgKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzID0gbmV3IE9yYml0Q29udHJvbHModGhpcy5jYW1lcmEsIHRoaXMuY2FudmFzKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLmVuYWJsZUtleXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy9zZXR1cERlcHRoUmVuZGVyZXJcclxuICAgICAgICB0aGlzLnNjZW5lVGFyZ2V0ID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyVGFyZ2V0KCB0aGlzLmNhbnZhcy5jbGllbnRXaWR0aCwgdGhpcy5jYW52YXMuY2xpZW50SGVpZ2h0ICk7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLmZvcm1hdCA9IFRIUkVFLlJHQkFGb3JtYXQ7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLm1pbkZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLm1hZ0ZpbHRlciA9IFRIUkVFLk5lYXJlc3RGaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5zY2VuZVRhcmdldC50ZXh0dXJlLmdlbmVyYXRlTWlwbWFwcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVUYXJnZXQuc3RlbmNpbEJ1ZmZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2NlbmVUYXJnZXQuZGVwdGhCdWZmZXIgPSB0cnVlO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5kZXB0aFRhcmdldCA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlclRhcmdldCggdGhpcy5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCApO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5mb3JtYXQgPSBUSFJFRS5SR0JBRm9ybWF0O1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5taW5GaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5tYWdGaWx0ZXIgPSBUSFJFRS5OZWFyZXN0RmlsdGVyO1xyXG4gICAgICAgIHRoaXMuZGVwdGhUYXJnZXQudGV4dHVyZS5nZW5lcmF0ZU1pcG1hcHMgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LnN0ZW5jaWxCdWZmZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoQnVmZmVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZSA9IG5ldyBUSFJFRS5EZXB0aFRleHR1cmUoKTtcclxuICAgICAgICB0aGlzLmRlcHRoVGFyZ2V0LmRlcHRoVGV4dHVyZS50eXBlID0gVEhSRUUuVW5zaWduZWRTaG9ydFR5cGU7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRDYW1lcmEoKXtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi56ID0gMjtcclxuICAgICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbi55ID0gMjtcclxuICAgICAgICB0aGlzLmNhbWVyYS5sb29rQXQgKCAwLCAwLCAwICk7XHJcbiAgICAgICAgdGhpcy5jb250cm9scy50YXJnZXQwID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLnBvc2l0aW9uMCA9IHRoaXMuY2FtZXJhLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMuem9vbTAgPSB0aGlzLmNhbWVyYS56b29tO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMucmVzZXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdQYXNzKGluZGV4KXtcclxuICAgICAgICByZXR1cm4gbmV3IFJlbmRlclBhc3ModGhpcyx0aGlzLnJlbmRlcmVyLDEsdHJ1ZSxERUZBVUxUX1BBU1NfRlJBRyxERUZBVUxUX1BBU1NfVkVSVEVYLGluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICB0b0pTT04oKXtcclxuXHRcdHJldHVybiB7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMuZGF0YS50b0pTT04oKSxcclxuICAgICAgICAgICAgcGxheWVyOiB0aGlzLnBsYXllci50b0pTT04oKSxcclxuICAgICAgICAgICAgY2FtZXJhUG9zOiB0aGlzLmNhbWVyYS5wb3NpdGlvbixcclxuICAgICAgICAgICAgY2FtZXJhUm90OiB0aGlzLmNhbWVyYS5yb3RhdGlvbi50b1ZlY3RvcjMoKSxcclxuICAgICAgICAgICAgY2FtZXJhQ29udHJvbGxlcjogdGhpcy5jb250cm9scy50b0pTT04oKSxcclxuXHRcdH07XHRcdFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICB1cGRhdGVEYXRhKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuc2V0T2JqZWN0KHRoaXMuZGF0YS5vYmplY3RUeXBlKTtcclxuICAgICAgICB0aGlzLnBsYXllci5jdXJNYXRlcmlhbCgpLmJsZW5kaW5nID0gdGhpcy5kYXRhLmJsZW5kaW5nO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkuc2lkZSA9IHRoaXMuZGF0YS5zaWRlO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkuZmxhdFNoYWRpbmcgPSB0aGlzLmRhdGEuZmxhdFNoYWRpbmc7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS50cmFuc3BhcmVudCA9IHRoaXMuZGF0YS50cmFuc3BhcmVudDtcclxuICAgICAgICB0aGlzLnBsYXllci5jdXJNYXRlcmlhbCgpLndpcmVmcmFtZSA9IHRoaXMuZGF0YS53aXJlZnJhbWU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5kZXB0aFdyaXRlID0gdGhpcy5kYXRhLmRlcHRoV3JpdGU7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VyTWF0ZXJpYWwoKS5kZXB0aFRlc3QgPSB0aGlzLmRhdGEuZGVwdGhUZXN0O1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1cnJlbnRPYmooKS5zY2FsZS5zZXQodGhpcy5kYXRhLm9ialNjYWxlLngsIHRoaXMuZGF0YS5vYmpTY2FsZS55LCB0aGlzLmRhdGEub2JqU2NhbGUueik7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudE9iaigpLnBvc2l0aW9uLnNldCggdGhpcy5kYXRhLm9ialBvcy54LCB0aGlzLmRhdGEub2JqUG9zLnksIHRoaXMuZGF0YS5vYmpQb3MueiApO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1cnJlbnRPYmooKS5yb3RhdGlvbi5zZXQoIHRoaXMuZGF0YS5vYmpSb3QueCwgdGhpcy5kYXRhLm9ialJvdC55LCB0aGlzLmRhdGEub2JqUm90LnogKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkRnJvbUpTT04oanNvbiwgY29tcGxldGVDYWxsYmFjayl7XHJcbiAgICAgICAgdGhpcy5kYXRhID0gbmV3IFREYXRhKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGF0YS5sb2FkRnJvbUpTT04oanNvbi5kYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmxvYWQoanNvbi5wbGF5ZXIsdGhpcy5kYXRhKTtcclxuICAgICAgICB0aGlzLmZyYW1lID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVySW5pdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb21wbGV0ZWRDYWxsYmFjayA9IGNvbXBsZXRlQ2FsbGJhY2s7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucGFzc0RhdGFzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdmFyIHBkYXRhID0gdGhpcy5kYXRhLnBhc3NEYXRhc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5wdXNoKG5ldyBSZW5kZXJQYXNzKHRoaXMsdGhpcy5yZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgLHBkYXRhLmRvd25SZXMscGRhdGEucmVuZGVyVG9TY3JlZW5cclxuICAgICAgICAgICAgICAgICxUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIocGRhdGEuZnJhZylcclxuICAgICAgICAgICAgICAgICxUaHJlZUNhbnZhcy5yZW1vdmVTaGFkZXJIZWFkZXIocGRhdGEudmVydGV4KSxpLHBkYXRhLnBhc3NOYW1lKSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24uc2V0KGpzb24uY2FtZXJhUG9zLngsanNvbi5jYW1lcmFQb3MueSxqc29uLmNhbWVyYVBvcy56KTtcclxuICAgICAgICB0aGlzLmNhbWVyYS5yb3RhdGlvbi5zZXQoanNvbi5jYW1lcmFSb3QueCxqc29uLmNhbWVyYVJvdC55LGpzb24uY2FtZXJhUm90LnopO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMuZnJvbUpTT04oanNvbi5jYW1lcmFDb250cm9sbGVyKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2xzLnJlc2V0KCk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xyXG4gICAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXcoY29tcGxldGVDYWxsYmFjayl7XHJcbiAgICAgICAgdGhpcy5mcmFtZSA9IDA7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlckluaXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllcih0aGlzKTtcclxuICAgICAgICB0aGlzLnBsYXllci5uZXdTY2VuZSgpO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVkQ2FsbGJhY2sgPSBjb21wbGV0ZUNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IG5ldyBURGF0YSh0aGlzKTtcclxuXHJcbiAgICAgICAgLy9iYWNrZ3JvdW5kXHJcbiAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5wdXNoKG5ldyBSZW5kZXJQYXNzKHRoaXMsdGhpcy5yZW5kZXJlciwxLHRydWUsVklHTkVUVEVfRlJBRyxERUZBVUxUX1BBU1NfVkVSVEVYLDApKTtcclxuICAgICAgICAvL2NvbXBvc2VcclxuICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLnB1c2gobmV3IFJlbmRlclBhc3ModGhpcyx0aGlzLnJlbmRlcmVyLDEsdHJ1ZSxDT01QT1NFX0ZSQUcsREVGQVVMVF9QQVNTX1ZFUlRFWCwxKSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbMF0ucGFzc05hbWUgPSAnQmFja2dyb3VuZCc7XHJcbiAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1sxXS5wYXNzTmFtZSA9ICdDb21wb3NlJztcclxuICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzWzBdLnJlbmRlclRvU2NyZWVuID0gZmFsc2U7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcclxuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheSgpIHtcclxuXHRcdGxldCBzYW5kYm94ID0gdGhpcztcclxuXHRcdHRoaXMucHJldlRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHRcdGZ1bmN0aW9uIFJlbmRlckxvb3AoKSB7XHJcbiAgICAgICAgICAgIGlmIChzYW5kYm94LmluaXRlZCl7XHJcblxyXG4gICAgICAgICAgICAgICAgLy9zaG91bGQgbm90IHJlc2V0IHVuaWZvcm1zIGluIGV2ZXJ5IGZyYW1lLlxyXG4gICAgICAgICAgICAgICAgLy9zYW5kYm94LnJlZnJlc2hVbmlmb3JtcygpOyBcclxuXHJcbiAgICAgICAgICAgICAgICBzYW5kYm94LnBsYXllci51cGRhdGVVbmlmb3JtcygpO1xyXG4gICAgICAgICAgICAgICAgLy9yZW5kZXIgZGVwdGggYnVmZmVyXHJcbiAgICAgICAgICAgICAgICBpZiAoc2FuZGJveC5wbGF5ZXIuZW52U2NlbmUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuZGJveC5yZW5kZXJlci5yZW5kZXIoIHNhbmRib3gucGxheWVyLmVudlNjZW5lLCBzYW5kYm94LmNhbWVyYSwgc2FuZGJveC5kZXB0aFRhcmdldCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuZGJveC5yZW5kZXJlci5yZW5kZXIoIHNhbmRib3gucGxheWVyLnNjZW5lLCBzYW5kYm94LmNhbWVyYSwgc2FuZGJveC5kZXB0aFRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbmRib3gucmVuZGVyZXIucmVuZGVyKCBzYW5kYm94LnBsYXllci5zY2VuZSwgc2FuZGJveC5jYW1lcmEsIHNhbmRib3guZGVwdGhUYXJnZXQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vYXNzaWduIGRlcHRoXHJcbiAgICAgICAgICAgICAgICBzYW5kYm94LnVwZGF0ZVVuaWZvcm1zKCk7XHJcbiAgICAgICAgICAgICAgICAvL3JlbmRlciB0aGUgbWFpbiBzY2VuZS5cclxuICAgICAgICAgICAgICAgIGlmIChzYW5kYm94LmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aCA9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2FuZGJveC5wbGF5ZXIuZW52U2NlbmUgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbmRib3gucmVuZGVyZXIucmVuZGVyKCBzYW5kYm94LnBsYXllci5lbnZTY2VuZSwgc2FuZGJveC5jYW1lcmEsbnVsbCx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveC5yZW5kZXJlci5yZW5kZXIoIHNhbmRib3gucGxheWVyLnNjZW5lLCBzYW5kYm94LmNhbWVyYSxudWxsLGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveC5yZW5kZXJlci5yZW5kZXIoIHNhbmRib3gucGxheWVyLnNjZW5lLCBzYW5kYm94LmNhbWVyYSxudWxsLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhbmRib3gucGxheWVyLmVudlNjZW5lICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94LnJlbmRlcmVyLnJlbmRlciggc2FuZGJveC5wbGF5ZXIuZW52U2NlbmUsIHNhbmRib3guY2FtZXJhLCBzYW5kYm94LnNjZW5lVGFyZ2V0LHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94LnJlbmRlcmVyLnJlbmRlciggc2FuZGJveC5wbGF5ZXIuc2NlbmUsIHNhbmRib3guY2FtZXJhLCBzYW5kYm94LnNjZW5lVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2FuZGJveC5yZW5kZXJlci5yZW5kZXIoIHNhbmRib3gucGxheWVyLnNjZW5lLCBzYW5kYm94LmNhbWVyYSwgc2FuZGJveC5zY2VuZVRhcmdldCx0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzYW5kYm94LmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBzYW5kYm94LmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlTY2VuZVRleHR1cmUudmFsdWUgPSBzYW5kYm94LnNjZW5lVGFyZ2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eSA9ICdpUGFzcycgKyAoaSAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94LmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zW3Byb3BlcnR5XS52YWx1ZSA9IHNhbmRib3guZGF0YS5yZW5kZXJQYXNzZXNbaSAtIDFdLnJlbmRlclRhcmdldDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgc2FuZGJveC5kYXRhLnJlbmRlclBhc3Nlc1tpXS5yZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBzYW5kYm94LmZyYW1lKys7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2FuZGJveC5mcmFtZSA+IDEgJiYgIXNhbmRib3gucmVuZGVyZXJJbml0ZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzYW5kYm94LmNvbXBsZXRlZENhbGxiYWNrICE9IG51bGwgJiYgc2FuZGJveC5jb21wbGV0ZWRDYWxsYmFjayAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzYW5kYm94LmNvbXBsZXRlZENhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vc2FuZGJveC5yZWZyZXNoVW5pZm9ybXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBzYW5kYm94LnJlbmRlcmVySW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc2FuZGJveC5kYXRhLmFuaW1hdGVTY2FsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGN1clRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKSAvIDEwMDAuMDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmFjdG9yID0gTWF0aC5zaW4oY3VyVGltZSAqIDEuMCkqMC41ICsgMC42O1xyXG4gICAgICAgICAgICAgICAgICAgIHNhbmRib3gucGxheWVyLmN1cnJlbnRPYmooKS5zY2FsZS5zZXQoc2FuZGJveC5kYXRhLm9ialNjYWxlLnggKiBmYWN0b3Isc2FuZGJveC5kYXRhLm9ialNjYWxlLnkgKiBmYWN0b3Isc2FuZGJveC5kYXRhLm9ialNjYWxlLnogKiBmYWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNhbmRib3guY29udHJvbHMudXBkYXRlKCk7XHJcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoUmVuZGVyTG9vcCk7XHJcbiAgICAgICAgfVxyXG5cdFx0UmVuZGVyTG9vcCgpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG5cclxuXHRjcmVhdGVHTFNoYWRlcihjYW52YXMsIHNvdXJjZSwgdHlwZSl7XHJcbiAgICAgICAgbGV0IGdsID0gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLCBzb3VyY2UpO1xyXG4gICAgICAgIGdsLmNvbXBpbGVTaGFkZXIoc2hhZGVyKTtcclxuICAgICAgICBsZXQgY29tcGlsZWQgPSBnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUyk7XHJcbiAgICAgICAgaWYgKCFjb21waWxlZCkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdEVycm9yID0gZ2wuZ2V0U2hhZGVySW5mb0xvZyhzaGFkZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCcqKiogRXJyb3IgY29tcGlsaW5nIHNoYWRlciAnICsgc2hhZGVyICsgJzonICsgbGFzdEVycm9yKTtcclxuICAgICAgICAgICAgbGV0IGhlYWRlckxpbmUgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gdGhpcy5nZXRDb250ZXh0KCkuVkVSVEVYX1NIQURFUil7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMudHJpZ2dlcigndmVydGV4X2Vycm9yJywgeyBzaGFkZXI6IHNoYWRlciwgc291cmNlOiBzb3VyY2UsIHR5cGU6IHR5cGUsIGVycm9yOiBsYXN0RXJyb3IsIGhlYWRlckxpbmU6IHRoaXMudmVydGV4SGVhZGVyTGluZSgpIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgICBjYW52YXMudHJpZ2dlcignZnJhZ19lcnJvcicsIHsgc2hhZGVyOiBzaGFkZXIsIHNvdXJjZTogc291cmNlLCB0eXBlOiB0eXBlLCBlcnJvcjogbGFzdEVycm9yLCBoZWFkZXJMaW5lOiB0aGlzLmZyYWdIZWFkZXJMaW5lKCkgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cdGdldENvbnRleHQoKXtcclxuXHRcdHJldHVybiB0aGlzLnJlbmRlcmVyLmdldENvbnRleHQoKTtcclxuXHR9XHJcblxyXG4gICAgcmVzaXplKHcsaCl7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3ICsncHgnO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLnN0eWxlLmhlaWdodCA9IGggKydweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jYW1lcmEuYXNwZWN0ID0gdGhpcy5jYW52YXMuY2xpZW50V2lkdGggLyB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFNpemUodGhpcy5jYW52YXMuY2xpZW50V2lkdGgsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgdmFyIGRwciA9IHRoaXMucmVuZGVyZXIuZ2V0UGl4ZWxSYXRpbygpO1xyXG5cclxuXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmRhdGEucmVuZGVyUGFzc2VzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5zZXRTaXplKHRoaXMuY2FudmFzLmNsaWVudFdpZHRoICogZHByLCB0aGlzLmNhbnZhcy5jbGllbnRIZWlnaHQgKiBkcHIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuXHRcdHRoaXMuc2NlbmVUYXJnZXQuc2V0U2l6ZSggdGhpcy5jYW52YXMuY2xpZW50V2lkdGggKiBkcHIsIHRoaXMuY2FudmFzLmNsaWVudEhlaWdodCAqIGRwciApO1xyXG4gICAgfVxyXG5cclxuICAgIGN1clZlcnRleFNoYWRlcigpe1xyXG4gICAgICAgIGlmICh0aGlzLmRhdGEuZWRpdE1vZGUgPT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXllci5jdXJWZXJ0ZXhTaGFkZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgcmV0dXJuIFRocmVlQ2FudmFzLnJlbW92ZVNoYWRlckhlYWRlcih0aGlzLmRhdGEucmVuZGVyUGFzc2VzW3RoaXMuZGF0YS5lZGl0TW9kZSAtIDFdLm1hdGVyaWFsLnZlcnRleFNoYWRlcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGN1ckZyYWdTYWhkZXIoKXtcclxuICAgICAgICBpZiAodGhpcy5kYXRhLmVkaXRNb2RlID09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VyRnJhZ1NhaGRlcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gVGhyZWVDYW52YXMucmVtb3ZlU2hhZGVySGVhZGVyKHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbdGhpcy5kYXRhLmVkaXRNb2RlIC0gMV0ubWF0ZXJpYWwuZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2ZXJ0ZXhIZWFkZXJMaW5lKCl7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmdldElucHV0SGVhZGVyKCkgKyBUaHJlZUNhbnZhcy5WRVJURVhfSEVBREVSX1RIUkVFKS5zcGxpdCgvXFxyXFxufFxccnxcXG4vKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgZnJhZ0hlYWRlckxpbmUoKXtcclxuICAgICAgICByZXR1cm4gKHRoaXMuZ2V0SW5wdXRIZWFkZXIoKSArIFRocmVlQ2FudmFzLkZSQUdfSEVBREVSX1RIUkVFKS5zcGxpdCgvXFxyXFxufFxccnxcXG4vKS5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlZnJlc2hVbmlmb3Jtcygpe1xyXG4gICAgICAgIHRoaXMucGxheWVyLmN1ck1hdGVyaWFsKCkudW5pZm9ybXMgPSB0aGlzLmdldElucHV0VW5pZm9ybXMoKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZGF0YS5yZW5kZXJQYXNzZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLnJlZnJlc2hVbmlmb3JtcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVSZW5kZXJQYXNzVW5pZm9ybXMoKXtcclxuICAgICAgICBsZXQgc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlUaW1lLnZhbHVlID0gcGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwLjA7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0ubWF0ZXJpYWwudW5pZm9ybXMuaVJlc29sdXRpb24udmFsdWUueCA9IHNjb3BlLmNhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pUmVzb2x1dGlvbi52YWx1ZS55ID0gc2NvcGUuY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pQ2FtZXJhTmVhci52YWx1ZSA9IHNjb3BlLmNhbWVyYS5uZWFyO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlDYW1lcmFGYXIudmFsdWUgPSBzY29wZS5jYW1lcmEuZmFyO1xyXG4gICAgICAgICAgICBpZiAoc2NvcGUucGxheWVyLmRpckxpZ2h0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pTGlnaHREaXJlY3Rpb24udmFsdWUgPSAtc2NvcGUucGxheWVyLmRpckxpZ2h0LnBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vc2V0IGlTY2VuZVRleHR1cmUgbGF0ZXIuXHJcbiAgICAgICAgICAgIC8vdGhpcy5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtcy5pU2NlbmVUZXh0dXJlLnZhbHVlID0gc2NvcGUuc2NlbmVUYXJnZXQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEucmVuZGVyUGFzc2VzW2ldLm1hdGVyaWFsLnVuaWZvcm1zLmlEZXB0aFRleHR1cmUudmFsdWUgPSBzY29wZS5kZXB0aFRhcmdldC5kZXB0aFRleHR1cmU7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IHNjb3BlLmRhdGEudGV4dHVyZXMubGVuZ3RoOyBrKyspe1xyXG4gICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5ID0gJ2lUZXh0dXJlJyArIGs7XHJcbiAgICAgICAgICAgICAgICBzY29wZS5kYXRhLnJlbmRlclBhc3Nlc1tpXS5tYXRlcmlhbC51bmlmb3Jtc1twcm9wZXJ0eV0udmFsdWUgPSBzY29wZS5kYXRhLnRleHR1cmVzW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVVuaWZvcm1zKCl7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlVW5pZm9ybXMoKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlbmRlclBhc3NVbmlmb3JtcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUN1ck1hdGVyaWFsKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpe1xyXG4gICAgICAgIGlmKHRoaXMuZGF0YS5lZGl0TW9kZSA9PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIudXBkYXRlQ3VyTWF0ZXJpYWwodGhpcy5nZXRJbnB1dEhlYWRlcigpICsgZnJhZ1N0cmluZywgdGhpcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5kYXRhLnJlbmRlclBhc3Nlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoKHRoaXMuZGF0YS5lZGl0TW9kZSAtIDEpID09IGkpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5yZW5kZXJQYXNzZXNbaV0udXBkYXRlTWF0ZXJpYWwodGhpcy5nZXRJbnB1dEhlYWRlcigpICsgdmVydFN0cmluZyx0aGlzLmdldElucHV0SGVhZGVyKCkgKyBmcmFnU3RyaW5nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0xvYWRFZGl0b3JTaGFkZXIoZnJhZ1N0cmluZywgdmVydFN0cmluZyl7XHJcbiAgICAgICAgbGV0IHZlcnRleFNoYWRlciA9IG51bGw7XHJcbiAgICAgICAgbGV0IGZyYWdtZW50U2hhZGVyID0gbnVsbDtcclxuXHJcbiAgICAgICAgdmVydGV4U2hhZGVyID0gdGhpcy5jcmVhdGVHTFNoYWRlcih0aGlzLCBUaHJlZUNhbnZhcy5WRVJURVhfSEVBREVSX1RIUkVFICt0aGlzLmdldElucHV0SGVhZGVyKCkgKyB2ZXJ0U3RyaW5nLCB0aGlzLmdldENvbnRleHQoKS5WRVJURVhfU0hBREVSKTtcclxuICAgICAgICBmcmFnbWVudFNoYWRlciA9IHRoaXMuY3JlYXRlR0xTaGFkZXIodGhpcywgVGhyZWVDYW52YXMuRlJBR19IRUFERVJfVEhSRUUgKyB0aGlzLmdldElucHV0SGVhZGVyKCkgKyBmcmFnU3RyaW5nLCB0aGlzLmdldENvbnRleHQoKS5GUkFHTUVOVF9TSEFERVIpO1xyXG5cclxuICAgICAgICBpZiAoIWZyYWdtZW50U2hhZGVyIHx8ICF2ZXJ0ZXhTaGFkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUN1ck1hdGVyaWFsKGZyYWdTdHJpbmcsIHZlcnRTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGdsID0gdGhpcy5nZXRDb250ZXh0KCk7XHJcbiAgICAgICAgaWYgKGZyYWdtZW50U2hhZGVyKXtcclxuICAgICAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKGZyYWdtZW50U2hhZGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZlcnRleFNoYWRlcil7XHJcbiAgICAgICAgICAgIGdsLmRlbGV0ZVNoYWRlcih2ZXJ0ZXhTaGFkZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIvKipcbiAqIEBhdXRob3IgbXJkb29iIC8gaHR0cDovL21yZG9vYi5jb20vXG4gKi9cbi8qKlxuICogbW9kaWZpZWQgYnkgc2hhbGx3YXlcbiAqIFRoaXMgY2xhc3Mgd2FzIGRlc2lnbmVkIHRvIGxvYWQgbG9jYWwgZmlsZXMgaW4gdGhlIHRocmVlanMgRWRpdG9yLCBpbiBvcmRlciB0byBsb2FkIHVybCBmaWxlcywgSSBtYWRlIHNvbWUgZml4ZXMuIFxuICogTWF5IG5vdCBjb21wYXRpYmxlIHdpdGggZnVydGhlciB0aHJlZWpzIHNjZW5lIGZpbGUgZm9ybWF0LlxuICogZml4ZWQ6XG4gKiAxLCBhZGRlZCBvbkFkZE9iaiwgb25BZGRTY2VuZSBjYWxsYmFja3MuXG4gKiAyLCBleHBvcnQgaGFuZGxlSlNPTiBmdW5jdGlvbiB0byBwYXJzZSBqc29uIGRhdGFzIGRpcmVjdGx5LlxuICovXG5cbi8vaW1wb3J0ICogYXMgVEhSRUUgZnJvbSAndGhyZWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gTG9hZGVyKCBvbkFkZE9iaiwgb25BZGRTY2VuZSApIHtcblxuXHR2YXIgc2NvcGUgPSB0aGlzO1xuXHQvL3ZhciBzaWduYWxzID0gZWRpdG9yLnNpZ25hbHM7XG5cblx0dGhpcy50ZXh0dXJlUGF0aCA9ICcnO1xuXG5cdHRoaXMubG9hZEZpbGUgPSBmdW5jdGlvbiAoIGZpbGUgKSB7XG5cblx0XHR2YXIgZmlsZW5hbWUgPSBmaWxlLm5hbWU7XG5cdFx0dmFyIGV4dGVuc2lvbiA9IGZpbGVuYW1lLnNwbGl0KCAnLicgKS5wb3AoKS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0dmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdwcm9ncmVzcycsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdHZhciBzaXplID0gJygnICsgTWF0aC5mbG9vciggZXZlbnQudG90YWwgLyAxMDAwICkgKyAnIEtCKSc7XG5cdFx0XHR2YXIgcHJvZ3Jlc3MgPSBNYXRoLmZsb29yKCAoIGV2ZW50LmxvYWRlZCAvIGV2ZW50LnRvdGFsICkgKiAxMDAgKSArICclJztcblx0XHRcdGNvbnNvbGUubG9nKCAnTG9hZGluZycsIGZpbGVuYW1lLCBzaXplLCBwcm9ncmVzcyApO1xuXG5cdFx0fSApO1xuXG5cdFx0c3dpdGNoICggZXh0ZW5zaW9uICkge1xuXG5cdFx0XHRjYXNlICczZHMnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLlREU0xvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBsb2FkZXIucGFyc2UoIGV2ZW50LnRhcmdldC5yZXN1bHQgKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoob2JqZWN0KTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYW1mJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5BTUZMb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgYW1mb2JqZWN0ID0gbG9hZGVyLnBhcnNlKCBldmVudC50YXJnZXQucmVzdWx0ICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggYW1mb2JqZWN0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKGFtZm9iamVjdCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2F3ZCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuQVdETG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIHNjZW5lID0gbG9hZGVyLnBhcnNlKCBldmVudC50YXJnZXQucmVzdWx0ICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgU2V0U2NlbmVDb21tYW5kKCBzY2VuZSApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkU2NlbmUpIG9uQWRkU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnYmFieWxvbic6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cdFx0XHRcdFx0dmFyIGpzb24gPSBKU09OLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5CYWJ5bG9uTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIHNjZW5lID0gbG9hZGVyLnBhcnNlKCBqc29uICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgU2V0U2NlbmVDb21tYW5kKCBzY2VuZSApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkU2NlbmUpIG9uQWRkU2NlbmUoc2NlbmUpO1xuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdiYWJ5bG9ubWVzaGRhdGEnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXHRcdFx0XHRcdHZhciBqc29uID0gSlNPTi5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuQmFieWxvbkxvYWRlcigpO1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbG9hZGVyLnBhcnNlR2VvbWV0cnkoIGpzb24gKTtcblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnY3RtJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgVWludDhBcnJheSggZXZlbnQudGFyZ2V0LnJlc3VsdCApO1xuXG5cdFx0XHRcdFx0dmFyIHN0cmVhbSA9IG5ldyBDVE0uU3RyZWFtKCBkYXRhICk7XG5cdFx0XHRcdFx0c3RyZWFtLm9mZnNldCA9IDA7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkNUTUxvYWRlcigpO1xuXHRcdFx0XHRcdGxvYWRlci5jcmVhdGVNb2RlbCggbmV3IENUTS5GaWxlKCBzdHJlYW0gKSwgZnVuY3Rpb24oIGdlb21ldHJ5ICkge1xuXG5cdFx0XHRcdFx0XHRnZW9tZXRyeS5zb3VyY2VUeXBlID0gXCJjdG1cIjtcblx0XHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cblx0XHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0XHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKCBnZW9tZXRyeSwgbWF0ZXJpYWwgKTtcblx0XHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdkYWUnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5Db2xsYWRhTG9hZGVyKCk7XG5cdFx0XHRcdFx0dmFyIGNvbGxhZGEgPSBsb2FkZXIucGFyc2UoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHRjb2xsYWRhLnNjZW5lLm5hbWUgPSBmaWxlbmFtZTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBjb2xsYWRhLnNjZW5lICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKGNvbGxhZGEuc2NlbmUpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2ZieCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgbG9hZGVyID0gbmV3IFRIUkVFLkZCWExvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBsb2FkZXIucGFyc2UoIGNvbnRlbnRzICk7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggb2JqZWN0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG9iamVjdCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2dsYic6XG5cdFx0XHRjYXNlICdnbHRmJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuR0xURkxvYWRlcigpO1xuXHRcdFx0XHRcdGxvYWRlci5wYXJzZSggY29udGVudHMsICcnLCBmdW5jdGlvbiAoIHJlc3VsdCApIHtcblxuXHRcdFx0XHRcdFx0cmVzdWx0LnNjZW5lLm5hbWUgPSBmaWxlbmFtZTtcblx0XHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCByZXN1bHQuc2NlbmUgKSApO1xuXHRcdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihyZXN1bHQuc2NlbmUpO1xuXG5cdFx0XHRcdFx0fSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdqcyc6XG5cdFx0XHRjYXNlICdqc29uJzpcblxuXHRcdFx0Y2FzZSAnM2dlbyc6XG5cdFx0XHRjYXNlICczbWF0Jzpcblx0XHRcdGNhc2UgJzNvYmonOlxuXHRcdFx0Y2FzZSAnM3Njbic6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHQvLyAyLjBcblxuXHRcdFx0XHRcdGlmICggY29udGVudHMuaW5kZXhPZiggJ3Bvc3RNZXNzYWdlJyApICE9PSAtIDEgKSB7XG5cblx0XHRcdFx0XHRcdHZhciBibG9iID0gbmV3IEJsb2IoIFsgY29udGVudHMgXSwgeyB0eXBlOiAndGV4dC9qYXZhc2NyaXB0JyB9ICk7XG5cdFx0XHRcdFx0XHR2YXIgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTCggYmxvYiApO1xuXG5cdFx0XHRcdFx0XHR2YXIgd29ya2VyID0gbmV3IFdvcmtlciggdXJsICk7XG5cblx0XHRcdFx0XHRcdHdvcmtlci5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdGV2ZW50LmRhdGEubWV0YWRhdGEgPSB7IHZlcnNpb246IDIgfTtcblx0XHRcdFx0XHRcdFx0aGFuZGxlSlNPTiggZXZlbnQuZGF0YSwgZmlsZSwgZmlsZW5hbWUgKTtcblxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKCBEYXRlLm5vdygpICk7XG5cblx0XHRcdFx0XHRcdHJldHVybjtcblxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vID49IDMuMFxuXG5cdFx0XHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdFx0XHR0cnkge1xuXG5cdFx0XHRcdFx0XHRkYXRhID0gSlNPTi5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdH0gY2F0Y2ggKCBlcnJvciApIHtcblxuXHRcdFx0XHRcdFx0YWxlcnQoIGVycm9yICk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRoYW5kbGVKU09OKCBkYXRhLCBmaWxlLCBmaWxlbmFtZSApO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblxuXHRcdFx0Y2FzZSAna216JzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5LTVpMb2FkZXIoKTtcblx0XHRcdFx0XHR2YXIgY29sbGFkYSA9IGxvYWRlci5wYXJzZSggZXZlbnQudGFyZ2V0LnJlc3VsdCApO1xuXG5cdFx0XHRcdFx0Y29sbGFkYS5zY2VuZS5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggY29sbGFkYS5zY2VuZSApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihjb2xsYWRhLnNjZW5lKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnbWQyJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5NRDJMb2FkZXIoKS5wYXJzZSggY29udGVudHMgKTtcblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoIHtcblx0XHRcdFx0XHRcdG1vcnBoVGFyZ2V0czogdHJ1ZSxcblx0XHRcdFx0XHRcdG1vcnBoTm9ybWFsczogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubWl4ZXIgPSBuZXcgVEhSRUUuQW5pbWF0aW9uTWl4ZXIoIG1lc2ggKTtcblx0XHRcdFx0XHRtZXNoLm5hbWUgPSBmaWxlbmFtZTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlciggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdvYmonOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIG9iamVjdCA9IG5ldyBUSFJFRS5PQkpMb2FkZXIoKS5wYXJzZSggY29udGVudHMgKTtcblx0XHRcdFx0XHRvYmplY3QubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG9iamVjdCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihvYmplY3QpO1xuXG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3BsYXljYW52YXMnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXHRcdFx0XHRcdHZhciBqc29uID0gSlNPTi5wYXJzZSggY29udGVudHMgKTtcblxuXHRcdFx0XHRcdHZhciBsb2FkZXIgPSBuZXcgVEhSRUUuUGxheUNhbnZhc0xvYWRlcigpO1xuXHRcdFx0XHRcdHZhciBvYmplY3QgPSBsb2FkZXIucGFyc2UoIGpzb24gKTtcblxuXHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoob2JqZWN0KTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzVGV4dCggZmlsZSApO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdwbHknOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlBMWUxvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcInBseVwiO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3N0bCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuU1RMTG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlVHlwZSA9IFwic3RsXCI7XG5cdFx0XHRcdFx0Z2VvbWV0cnkuc291cmNlRmlsZSA9IGZpbGUubmFtZTtcblxuXHRcdFx0XHRcdHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCgpO1xuXG5cdFx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cdFx0XHRcdFx0bWVzaC5uYW1lID0gZmlsZW5hbWU7XG5cblx0XHRcdFx0XHQvL2VkaXRvci5leGVjdXRlKCBuZXcgQWRkT2JqZWN0Q29tbWFuZCggbWVzaCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXG5cdFx0XHRcdGlmICggcmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdFx0cmVhZGVyLnJlYWRBc0JpbmFyeVN0cmluZyggZmlsZSApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRyZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoIGZpbGUgKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdC8qXG5cdFx0XHRjYXNlICd1dGY4JzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciBnZW9tZXRyeSA9IG5ldyBUSFJFRS5VVEY4TG9hZGVyKCkucGFyc2UoIGNvbnRlbnRzICk7XG5cdFx0XHRcdFx0dmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hMYW1iZXJ0TWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXG5cdFx0XHRcdFx0ZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHQqL1xuXG5cdFx0XHRjYXNlICd2dGsnOlxuXG5cdFx0XHRcdHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCAnbG9hZCcsIGZ1bmN0aW9uICggZXZlbnQgKSB7XG5cblx0XHRcdFx0XHR2YXIgY29udGVudHMgPSBldmVudC50YXJnZXQucmVzdWx0O1xuXG5cdFx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLlZUS0xvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcInZ0a1wiO1xuXHRcdFx0XHRcdGdlb21ldHJ5LnNvdXJjZUZpbGUgPSBmaWxlLm5hbWU7XG5cblx0XHRcdFx0XHR2YXIgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoKTtcblxuXHRcdFx0XHRcdHZhciBtZXNoID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRcdGlmIChvbkFkZE9iaikgb25BZGRPYmoobWVzaCk7XG5cblx0XHRcdFx0fSwgZmFsc2UgKTtcblx0XHRcdFx0cmVhZGVyLnJlYWRBc1RleHQoIGZpbGUgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdFx0Y2FzZSAnd3JsJzpcblxuXHRcdFx0XHRyZWFkZXIuYWRkRXZlbnRMaXN0ZW5lciggJ2xvYWQnLCBmdW5jdGlvbiAoIGV2ZW50ICkge1xuXG5cdFx0XHRcdFx0dmFyIGNvbnRlbnRzID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcblxuXHRcdFx0XHRcdHZhciByZXN1bHQgPSBuZXcgVEhSRUUuVlJNTExvYWRlcigpLnBhcnNlKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IFNldFNjZW5lQ29tbWFuZCggcmVzdWx0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRTY2VuZSkgb25BZGRTY2VuZShzY2VuZSk7XG5cdFx0XHRcdH0sIGZhbHNlICk7XG5cdFx0XHRcdHJlYWRlci5yZWFkQXNUZXh0KCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ3ppcCc6XG5cblx0XHRcdFx0cmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoICdsb2FkJywgZnVuY3Rpb24gKCBldmVudCApIHtcblxuXHRcdFx0XHRcdHZhciBjb250ZW50cyA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG5cblx0XHRcdFx0XHR2YXIgemlwID0gbmV3IEpTWmlwKCBjb250ZW50cyApO1xuXG5cdFx0XHRcdFx0Ly8gQkxPQ0tTXG5cblx0XHRcdFx0XHRpZiAoIHppcC5maWxlc1sgJ21vZGVsLm9iaicgXSAmJiB6aXAuZmlsZXNbICdtYXRlcmlhbHMubXRsJyBdICkge1xuXG5cdFx0XHRcdFx0XHR2YXIgbWF0ZXJpYWxzID0gbmV3IFRIUkVFLk1UTExvYWRlcigpLnBhcnNlKCB6aXAuZmlsZSggJ21hdGVyaWFscy5tdGwnICkuYXNUZXh0KCkgKTtcblx0XHRcdFx0XHRcdHZhciBvYmplY3QgPSBuZXcgVEhSRUUuT0JKTG9hZGVyKCkuc2V0TWF0ZXJpYWxzKCBtYXRlcmlhbHMgKS5wYXJzZSggemlwLmZpbGUoICdtb2RlbC5vYmonICkuYXNUZXh0KCkgKTtcblx0XHRcdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBvYmplY3QgKSApO1xuXHRcdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihvYmplY3QpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHR9LCBmYWxzZSApO1xuXHRcdFx0XHRyZWFkZXIucmVhZEFzQmluYXJ5U3RyaW5nKCBmaWxlICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGRlZmF1bHQ6XG5cblx0XHRcdFx0YWxlcnQoICdVbnN1cHBvcnRlZCBmaWxlIGZvcm1hdCAoJyArIGV4dGVuc2lvbiArICAnKS4nICk7XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHR9XG5cblx0fTtcblxuXHR0aGlzLmhhbmRsZUpTT04gPSBmdW5jdGlvbiAoIGRhdGEsIGZpbGUsIGZpbGVuYW1lICkge1xuXG5cdFx0aWYgKCBkYXRhLm1ldGFkYXRhID09PSB1bmRlZmluZWQgKSB7IC8vIDIuMFxuXG5cdFx0XHRkYXRhLm1ldGFkYXRhID0geyB0eXBlOiAnR2VvbWV0cnknIH07XG5cblx0XHR9XG5cblx0XHRpZiAoIGRhdGEubWV0YWRhdGEudHlwZSA9PT0gdW5kZWZpbmVkICkgeyAvLyAzLjBcblxuXHRcdFx0ZGF0YS5tZXRhZGF0YS50eXBlID0gJ0dlb21ldHJ5JztcblxuXHRcdH1cblxuXHRcdGlmICggZGF0YS5tZXRhZGF0YS5mb3JtYXRWZXJzaW9uICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGRhdGEubWV0YWRhdGEudmVyc2lvbiA9IGRhdGEubWV0YWRhdGEuZm9ybWF0VmVyc2lvbjtcblxuXHRcdH1cblxuXHRcdHN3aXRjaCAoIGRhdGEubWV0YWRhdGEudHlwZS50b0xvd2VyQ2FzZSgpICkge1xuXG5cdFx0XHRjYXNlICdidWZmZXJnZW9tZXRyeSc6XG5cblx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeUxvYWRlcigpO1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbG9hZGVyLnBhcnNlKCBkYXRhICk7XG5cblx0XHRcdFx0dmFyIG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggcmVzdWx0ICk7XG5cblx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIG1lc2ggKSApO1xuXHRcdFx0XHRpZiAob25BZGRPYmopIG9uQWRkT2JqKG1lc2gpO1xuXG5cdFx0XHRcdGJyZWFrO1xuXG5cdFx0XHRjYXNlICdnZW9tZXRyeSc6XG5cblx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5KU09OTG9hZGVyKCk7XG5cdFx0XHRcdGxvYWRlci5zZXRUZXh0dXJlUGF0aCggc2NvcGUudGV4dHVyZVBhdGggKTtcblxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gbG9hZGVyLnBhcnNlKCBkYXRhICk7XG5cblx0XHRcdFx0dmFyIGdlb21ldHJ5ID0gcmVzdWx0Lmdlb21ldHJ5O1xuXHRcdFx0XHR2YXIgbWF0ZXJpYWw7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQubWF0ZXJpYWxzICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0XHRpZiAoIHJlc3VsdC5tYXRlcmlhbHMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSBuZXcgVEhSRUUuTXVsdGlNYXRlcmlhbCggcmVzdWx0Lm1hdGVyaWFscyApO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0bWF0ZXJpYWwgPSByZXN1bHQubWF0ZXJpYWxzWyAwIF07XG5cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGdlb21ldHJ5LnNvdXJjZVR5cGUgPSBcImFzY2lpXCI7XG5cdFx0XHRcdGlmIChmaWxlKXtcblx0XHRcdFx0XHRnZW9tZXRyeS5zb3VyY2VGaWxlID0gZmlsZS5uYW1lO1xuXHRcdFx0XHR9XG5cblxuXHRcdFx0XHR2YXIgbWVzaDtcblxuXHRcdFx0XHRpZiAoIGdlb21ldHJ5LmFuaW1hdGlvbiAmJiBnZW9tZXRyeS5hbmltYXRpb24uaGllcmFyY2h5ICkge1xuXG5cdFx0XHRcdFx0bWVzaCA9IG5ldyBUSFJFRS5Ta2lubmVkTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoZmlsZW5hbWUpe1xuXHRcdFx0XHRcdG1lc2gubmFtZSA9IGZpbGVuYW1lO1xuXHRcdFx0XHR9XG5cdFx0XHRcdC8vZWRpdG9yLmV4ZWN1dGUoIG5ldyBBZGRPYmplY3RDb21tYW5kKCBtZXNoICkgKTtcblx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihtZXNoKTtcblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ29iamVjdCc6XG5cblx0XHRcdFx0dmFyIGxvYWRlciA9IG5ldyBUSFJFRS5PYmplY3RMb2FkZXIoKTtcblx0XHRcdFx0bG9hZGVyLnNldFRleHR1cmVQYXRoKCBzY29wZS50ZXh0dXJlUGF0aCApO1xuXG5cdFx0XHRcdHZhciByZXN1bHQgPSBsb2FkZXIucGFyc2UoIGRhdGEgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCBpbnN0YW5jZW9mIFRIUkVFLlNjZW5lICkge1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IFNldFNjZW5lQ29tbWFuZCggcmVzdWx0ICkgKTtcblx0XHRcdFx0XHRpZiAob25BZGRTY2VuZSkgb25BZGRTY2VuZShyZXN1bHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0Ly9lZGl0b3IuZXhlY3V0ZSggbmV3IEFkZE9iamVjdENvbW1hbmQoIHJlc3VsdCApICk7XG5cdFx0XHRcdFx0aWYgKG9uQWRkT2JqKSBvbkFkZE9iaihyZXN1bHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0YnJlYWs7XG5cblx0XHRcdGNhc2UgJ2FwcCc6XG5cblx0XHRcdFx0Ly9lZGl0b3IuZnJvbUpTT04oIGRhdGEgKTtcblxuXHRcdFx0XHRicmVhaztcblxuXHRcdH1cblxuXHR9XG5cbn07XG4iLCIvKipcclxuICogQGF1dGhvciBxaWFvIC8gaHR0cHM6Ly9naXRodWIuY29tL3FpYW9cclxuICogQGF1dGhvciBtcmRvb2IgLyBodHRwOi8vbXJkb29iLmNvbVxyXG4gKiBAYXV0aG9yIGFsdGVyZWRxIC8gaHR0cDovL2FsdGVyZWRxdWFsaWEuY29tL1xyXG4gKiBAYXV0aG9yIFdlc3RMYW5nbGV5IC8gaHR0cDovL2dpdGh1Yi5jb20vV2VzdExhbmdsZXlcclxuICogQGF1dGhvciBlcmljaDY2NiAvIGh0dHA6Ly9lcmljaGFpbmVzLmNvbVxyXG4gKi9cclxuXHJcbi8vIFRoaXMgc2V0IG9mIGNvbnRyb2xzIHBlcmZvcm1zIG9yYml0aW5nLCBkb2xseWluZyAoem9vbWluZyksIGFuZCBwYW5uaW5nLlxyXG4vLyBVbmxpa2UgVHJhY2tiYWxsQ29udHJvbHMsIGl0IG1haW50YWlucyB0aGUgXCJ1cFwiIGRpcmVjdGlvbiBvYmplY3QudXAgKCtZIGJ5IGRlZmF1bHQpLlxyXG4vL1xyXG4vLyAgICBPcmJpdCAtIGxlZnQgbW91c2UgLyB0b3VjaDogb25lIGZpbmdlciBtb3ZlXHJcbi8vICAgIFpvb20gLSBtaWRkbGUgbW91c2UsIG9yIG1vdXNld2hlZWwgLyB0b3VjaDogdHdvIGZpbmdlciBzcHJlYWQgb3Igc3F1aXNoXHJcbi8vICAgIFBhbiAtIHJpZ2h0IG1vdXNlLCBvciBhcnJvdyBrZXlzIC8gdG91Y2g6IHRocmVlIGZpbmdlciBzd2lwZVxyXG5cclxuLy9pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gT3JiaXRDb250cm9scyAob2JqZWN0LCBkb21FbGVtZW50KSB7XHJcblxyXG5cdHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG5cclxuXHR0aGlzLmRvbUVsZW1lbnQgPSAoZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcclxuXHJcblx0Ly8gU2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgdGhpcyBjb250cm9sXHJcblx0dGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuXHJcblx0Ly8gXCJ0YXJnZXRcIiBzZXRzIHRoZSBsb2NhdGlvbiBvZiBmb2N1cywgd2hlcmUgdGhlIG9iamVjdCBvcmJpdHMgYXJvdW5kXHJcblx0dGhpcy50YXJnZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cclxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gZG9sbHkgaW4gYW5kIG91dCAoIFBlcnNwZWN0aXZlQ2FtZXJhIG9ubHkgKVxyXG5cdHRoaXMubWluRGlzdGFuY2UgPSAwO1xyXG5cdHRoaXMubWF4RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcblx0Ly8gSG93IGZhciB5b3UgY2FuIHpvb20gaW4gYW5kIG91dCAoIE9ydGhvZ3JhcGhpY0NhbWVyYSBvbmx5IClcclxuXHR0aGlzLm1pblpvb20gPSAwO1xyXG5cdHRoaXMubWF4Wm9vbSA9IEluZmluaXR5O1xyXG5cclxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgdmVydGljYWxseSwgdXBwZXIgYW5kIGxvd2VyIGxpbWl0cy5cclxuXHQvLyBSYW5nZSBpcyAwIHRvIE1hdGguUEkgcmFkaWFucy5cclxuXHR0aGlzLm1pblBvbGFyQW5nbGUgPSAwOyAvLyByYWRpYW5zXHJcblx0dGhpcy5tYXhQb2xhckFuZ2xlID0gTWF0aC5QSTsgLy8gcmFkaWFuc1xyXG5cclxuXHQvLyBIb3cgZmFyIHlvdSBjYW4gb3JiaXQgaG9yaXpvbnRhbGx5LCB1cHBlciBhbmQgbG93ZXIgbGltaXRzLlxyXG5cdC8vIElmIHNldCwgbXVzdCBiZSBhIHN1Yi1pbnRlcnZhbCBvZiB0aGUgaW50ZXJ2YWwgWyAtIE1hdGguUEksIE1hdGguUEkgXS5cclxuXHR0aGlzLm1pbkF6aW11dGhBbmdsZSA9IC1JbmZpbml0eTsgLy8gcmFkaWFuc1xyXG5cdHRoaXMubWF4QXppbXV0aEFuZ2xlID0gSW5maW5pdHk7IC8vIHJhZGlhbnNcclxuXHJcblx0Ly8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIGRhbXBpbmcgKGluZXJ0aWEpXHJcblx0Ly8gSWYgZGFtcGluZyBpcyBlbmFibGVkLCB5b3UgbXVzdCBjYWxsIGNvbnRyb2xzLnVwZGF0ZSgpIGluIHlvdXIgYW5pbWF0aW9uIGxvb3BcclxuXHR0aGlzLmVuYWJsZURhbXBpbmcgPSBmYWxzZTtcclxuXHR0aGlzLmRhbXBpbmdGYWN0b3IgPSAwLjI1O1xyXG5cclxuXHQvLyBUaGlzIG9wdGlvbiBhY3R1YWxseSBlbmFibGVzIGRvbGx5aW5nIGluIGFuZCBvdXQ7IGxlZnQgYXMgXCJ6b29tXCIgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxyXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHpvb21pbmdcclxuXHR0aGlzLmVuYWJsZVpvb20gPSB0cnVlO1xyXG5cdHRoaXMuem9vbVNwZWVkID0gMS4wO1xyXG5cclxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSByb3RhdGluZ1xyXG5cdHRoaXMuZW5hYmxlUm90YXRlID0gdHJ1ZTtcclxuXHR0aGlzLnJvdGF0ZVNwZWVkID0gMS4wO1xyXG5cclxuXHQvLyBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBwYW5uaW5nXHJcblx0dGhpcy5lbmFibGVQYW4gPSB0cnVlO1xyXG5cdHRoaXMua2V5UGFuU3BlZWQgPSA3LjA7XHQvLyBwaXhlbHMgbW92ZWQgcGVyIGFycm93IGtleSBwdXNoXHJcblxyXG5cdC8vIFNldCB0byB0cnVlIHRvIGF1dG9tYXRpY2FsbHkgcm90YXRlIGFyb3VuZCB0aGUgdGFyZ2V0XHJcblx0Ly8gSWYgYXV0by1yb3RhdGUgaXMgZW5hYmxlZCwgeW91IG11c3QgY2FsbCBjb250cm9scy51cGRhdGUoKSBpbiB5b3VyIGFuaW1hdGlvbiBsb29wXHJcblx0dGhpcy5hdXRvUm90YXRlID0gZmFsc2U7XHJcblx0dGhpcy5hdXRvUm90YXRlU3BlZWQgPSAyLjA7IC8vIDMwIHNlY29uZHMgcGVyIHJvdW5kIHdoZW4gZnBzIGlzIDYwXHJcblxyXG5cdC8vIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHVzZSBvZiB0aGUga2V5c1xyXG5cdHRoaXMuZW5hYmxlS2V5cyA9IHRydWU7XHJcblxyXG5cdC8vIFRoZSBmb3VyIGFycm93IGtleXNcclxuXHR0aGlzLmtleXMgPSB7IExFRlQ6IDM3LCBVUDogMzgsIFJJR0hUOiAzOSwgQk9UVE9NOiA0MCB9O1xyXG5cclxuXHQvLyBNb3VzZSBidXR0b25zXHJcblx0dGhpcy5tb3VzZUJ1dHRvbnMgPSB7IE9SQklUOiBUSFJFRS5NT1VTRS5MRUZULCBaT09NOiBUSFJFRS5NT1VTRS5NSURETEUsIFBBTjogVEhSRUUuTU9VU0UuUklHSFQgfTtcclxuXHJcblx0Ly8gZm9yIHJlc2V0XHJcblx0dGhpcy50YXJnZXQwID0gdGhpcy50YXJnZXQuY2xvbmUoKTtcclxuXHR0aGlzLnBvc2l0aW9uMCA9IHRoaXMub2JqZWN0LnBvc2l0aW9uLmNsb25lKCk7XHJcblx0dGhpcy56b29tMCA9IHRoaXMub2JqZWN0Lnpvb207XHJcblxyXG5cdC8vXHJcblx0Ly8gcHVibGljIG1ldGhvZHNcclxuXHQvL1xyXG5cclxuXHR0aGlzLmdldFBvbGFyQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC5waGk7XHJcblxyXG5cdH07XHJcblxyXG5cdHRoaXMuZ2V0QXppbXV0aGFsQW5nbGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0cmV0dXJuIHNwaGVyaWNhbC50aGV0YTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhpcy5zYXZlU3RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0c2NvcGUudGFyZ2V0MC5jb3B5KHNjb3BlLnRhcmdldCk7XHJcblx0XHRzY29wZS5wb3NpdGlvbjAuY29weShzY29wZS5vYmplY3QucG9zaXRpb24pO1xyXG5cdFx0c2NvcGUuem9vbTAgPSBzY29wZS5vYmplY3Quem9vbTtcclxuXHJcblx0fTtcclxuXHJcblx0dGhpcy50b0pTT04gPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRyZXR1cm57XHJcblx0XHRcdHRhcmdldDogc2NvcGUudGFyZ2V0LFxyXG5cdFx0XHRwb3NpdGlvbjogc2NvcGUucG9zaXRpb24sXHJcblx0XHRcdHpvb206IHNjb3BlLnpvb20sXHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0dGhpcy5mcm9tSlNPTiA9IGZ1bmN0aW9uIChqc29uKSB7XHJcblx0XHRzY29wZS50YXJnZXQwID0ganNvbi50YXJnZXQ7XHJcblx0XHRzY29wZS5wb3NpdGlvbjAgPSBqc29uLnBvc2l0aW9uMDtcclxuXHRcdHNjb3BlLnpvb20wID0ganNvbi56b29tMDtcclxuXHR9O1xyXG5cclxuXHR0aGlzLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdGlmIChzY29wZS50YXJnZXQwICE9IHVuZGVmaW5lZCl7XHJcblx0XHRcdHNjb3BlLnRhcmdldC5jb3B5KHNjb3BlLnRhcmdldDApO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoc2NvcGUucG9zaXRpb24wICE9IHVuZGVmaW5lZCl7XHJcblx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5jb3B5KHNjb3BlLnBvc2l0aW9uMCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChzY29wZS5vYmplY3Quem9vbTAgIT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBzY29wZS56b29tMDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xyXG5cclxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcblx0fTtcclxuXHJcblx0Ly8gdGhpcyBtZXRob2QgaXMgZXhwb3NlZCwgYnV0IHBlcmhhcHMgaXQgd291bGQgYmUgYmV0dGVyIGlmIHdlIGNhbiBtYWtlIGl0IHByaXZhdGUuLi5cclxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgb2Zmc2V0ID0gbmV3IFRIUkVFLlZlY3RvcjMoKTtcclxuXHJcblx0XHQvLyBzbyBjYW1lcmEudXAgaXMgdGhlIG9yYml0IGF4aXNcclxuXHRcdHZhciBxdWF0ID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMob2JqZWN0LnVwLCBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSk7XHJcblx0XHR2YXIgcXVhdEludmVyc2UgPSBxdWF0LmNsb25lKCkuaW52ZXJzZSgpO1xyXG5cclxuXHRcdHZhciBsYXN0UG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xyXG5cdFx0dmFyIGxhc3RRdWF0ZXJuaW9uID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcclxuXHJcblx0XHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKCkge1xyXG5cclxuXHRcdFx0dmFyIHBvc2l0aW9uID0gc2NvcGUub2JqZWN0LnBvc2l0aW9uO1xyXG5cclxuXHRcdFx0b2Zmc2V0LmNvcHkocG9zaXRpb24pLnN1YihzY29wZS50YXJnZXQpO1xyXG5cclxuXHRcdFx0Ly8gcm90YXRlIG9mZnNldCB0byBcInktYXhpcy1pcy11cFwiIHNwYWNlXHJcblx0XHRcdG9mZnNldC5hcHBseVF1YXRlcm5pb24ocXVhdCk7XHJcblxyXG5cdFx0XHQvLyBhbmdsZSBmcm9tIHotYXhpcyBhcm91bmQgeS1heGlzXHJcblx0XHRcdHNwaGVyaWNhbC5zZXRGcm9tVmVjdG9yMyhvZmZzZXQpO1xyXG5cclxuXHRcdFx0aWYgKHNjb3BlLmF1dG9Sb3RhdGUgJiYgc3RhdGUgPT09IFNUQVRFLk5PTkUpIHtcclxuXHJcblx0XHRcdFx0cm90YXRlTGVmdChnZXRBdXRvUm90YXRpb25BbmdsZSgpKTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNwaGVyaWNhbC50aGV0YSArPSBzcGhlcmljYWxEZWx0YS50aGV0YTtcclxuXHRcdFx0c3BoZXJpY2FsLnBoaSArPSBzcGhlcmljYWxEZWx0YS5waGk7XHJcblxyXG5cdFx0XHQvLyByZXN0cmljdCB0aGV0YSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXHJcblx0XHRcdHNwaGVyaWNhbC50aGV0YSA9IE1hdGgubWF4KHNjb3BlLm1pbkF6aW11dGhBbmdsZSwgTWF0aC5taW4oc2NvcGUubWF4QXppbXV0aEFuZ2xlLCBzcGhlcmljYWwudGhldGEpKTtcclxuXHJcblx0XHRcdC8vIHJlc3RyaWN0IHBoaSB0byBiZSBiZXR3ZWVuIGRlc2lyZWQgbGltaXRzXHJcblx0XHRcdHNwaGVyaWNhbC5waGkgPSBNYXRoLm1heChzY29wZS5taW5Qb2xhckFuZ2xlLCBNYXRoLm1pbihzY29wZS5tYXhQb2xhckFuZ2xlLCBzcGhlcmljYWwucGhpKSk7XHJcblxyXG5cdFx0XHRzcGhlcmljYWwubWFrZVNhZmUoKTtcclxuXHJcblxyXG5cdFx0XHRzcGhlcmljYWwucmFkaXVzICo9IHNjYWxlO1xyXG5cclxuXHRcdFx0Ly8gcmVzdHJpY3QgcmFkaXVzIHRvIGJlIGJldHdlZW4gZGVzaXJlZCBsaW1pdHNcclxuXHRcdFx0c3BoZXJpY2FsLnJhZGl1cyA9IE1hdGgubWF4KHNjb3BlLm1pbkRpc3RhbmNlLCBNYXRoLm1pbihzY29wZS5tYXhEaXN0YW5jZSwgc3BoZXJpY2FsLnJhZGl1cykpO1xyXG5cclxuXHRcdFx0Ly8gbW92ZSB0YXJnZXQgdG8gcGFubmVkIGxvY2F0aW9uXHJcblx0XHRcdHNjb3BlLnRhcmdldC5hZGQocGFuT2Zmc2V0KTtcclxuXHJcblx0XHRcdG9mZnNldC5zZXRGcm9tU3BoZXJpY2FsKHNwaGVyaWNhbCk7XHJcblxyXG5cdFx0XHQvLyByb3RhdGUgb2Zmc2V0IGJhY2sgdG8gXCJjYW1lcmEtdXAtdmVjdG9yLWlzLXVwXCIgc3BhY2VcclxuXHRcdFx0b2Zmc2V0LmFwcGx5UXVhdGVybmlvbihxdWF0SW52ZXJzZSk7XHJcblxyXG5cdFx0XHRwb3NpdGlvbi5jb3B5KHNjb3BlLnRhcmdldCkuYWRkKG9mZnNldCk7XHJcblxyXG5cdFx0XHRzY29wZS5vYmplY3QubG9va0F0KHNjb3BlLnRhcmdldCk7XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUuZW5hYmxlRGFtcGluZyA9PT0gdHJ1ZSkge1xyXG5cclxuXHRcdFx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAqPSAoMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IpO1xyXG5cdFx0XHRcdHNwaGVyaWNhbERlbHRhLnBoaSAqPSAoMSAtIHNjb3BlLmRhbXBpbmdGYWN0b3IpO1xyXG5cclxuXHRcdFx0fSBlbHNlIHtcclxuXHJcblx0XHRcdFx0c3BoZXJpY2FsRGVsdGEuc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2NhbGUgPSAxO1xyXG5cdFx0XHRwYW5PZmZzZXQuc2V0KDAsIDAsIDApO1xyXG5cclxuXHRcdFx0Ly8gdXBkYXRlIGNvbmRpdGlvbiBpczpcclxuXHRcdFx0Ly8gbWluKGNhbWVyYSBkaXNwbGFjZW1lbnQsIGNhbWVyYSByb3RhdGlvbiBpbiByYWRpYW5zKV4yID4gRVBTXHJcblx0XHRcdC8vIHVzaW5nIHNtYWxsLWFuZ2xlIGFwcHJveGltYXRpb24gY29zKHgvMikgPSAxIC0geF4yIC8gOFxyXG5cclxuXHRcdFx0aWYgKHpvb21DaGFuZ2VkIHx8XHJcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmRpc3RhbmNlVG9TcXVhcmVkKHNjb3BlLm9iamVjdC5wb3NpdGlvbikgPiBFUFMgfHxcclxuXHRcdFx0XHQ4ICogKDEgLSBsYXN0UXVhdGVybmlvbi5kb3Qoc2NvcGUub2JqZWN0LnF1YXRlcm5pb24pKSA+IEVQUykge1xyXG5cclxuXHRcdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcclxuXHJcblx0XHRcdFx0bGFzdFBvc2l0aW9uLmNvcHkoc2NvcGUub2JqZWN0LnBvc2l0aW9uKTtcclxuXHRcdFx0XHRsYXN0UXVhdGVybmlvbi5jb3B5KHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uKTtcclxuXHRcdFx0XHR6b29tQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9KCk7XHJcblxyXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRzY29wZS5kb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UpO1xyXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBvbk1vdXNlRG93biwgZmFsc2UpO1xyXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UpO1xyXG5cclxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCwgZmFsc2UpO1xyXG5cdFx0c2NvcGUuZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uVG91Y2hFbmQsIGZhbHNlKTtcclxuXHRcdHNjb3BlLmRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcclxuXHJcblx0XHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSwgZmFsc2UpO1xyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCwgZmFsc2UpO1xyXG5cclxuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgb25LZXlEb3duLCBmYWxzZSk7XHJcblxyXG5cdFx0Ly9zY29wZS5kaXNwYXRjaEV2ZW50KCB7IHR5cGU6ICdkaXNwb3NlJyB9ICk7IC8vIHNob3VsZCB0aGlzIGJlIGFkZGVkIGhlcmU/XHJcblxyXG5cdH07XHJcblxyXG5cdC8vXHJcblx0Ly8gaW50ZXJuYWxzXHJcblx0Ly9cclxuXHJcblx0dmFyIHNjb3BlID0gdGhpcztcclxuXHJcblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiAnY2hhbmdlJyB9O1xyXG5cdHZhciBzdGFydEV2ZW50ID0geyB0eXBlOiAnc3RhcnQnIH07XHJcblx0dmFyIGVuZEV2ZW50ID0geyB0eXBlOiAnZW5kJyB9O1xyXG5cclxuXHR2YXIgU1RBVEUgPSB7IE5PTkU6IC0xLCBST1RBVEU6IDAsIERPTExZOiAxLCBQQU46IDIsIFRPVUNIX1JPVEFURTogMywgVE9VQ0hfRE9MTFk6IDQsIFRPVUNIX1BBTjogNSB9O1xyXG5cclxuXHR2YXIgc3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuXHR2YXIgRVBTID0gMC4wMDAwMDE7XHJcblxyXG5cdC8vIGN1cnJlbnQgcG9zaXRpb24gaW4gc3BoZXJpY2FsIGNvb3JkaW5hdGVzXHJcblx0dmFyIHNwaGVyaWNhbCA9IG5ldyBUSFJFRS5TcGhlcmljYWwoKTtcclxuXHR2YXIgc3BoZXJpY2FsRGVsdGEgPSBuZXcgVEhSRUUuU3BoZXJpY2FsKCk7XHJcblxyXG5cdHZhciBzY2FsZSA9IDE7XHJcblx0dmFyIHBhbk9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblx0dmFyIHpvb21DaGFuZ2VkID0gZmFsc2U7XHJcblxyXG5cdHZhciByb3RhdGVTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblx0dmFyIHJvdGF0ZUVuZCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblx0dmFyIHJvdGF0ZURlbHRhID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHJcblx0dmFyIHBhblN0YXJ0ID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgcGFuRW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgcGFuRGVsdGEgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xyXG5cclxuXHR2YXIgZG9sbHlTdGFydCA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblx0dmFyIGRvbGx5RW5kID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcclxuXHR2YXIgZG9sbHlEZWx0YSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG5cdGZ1bmN0aW9uIGdldEF1dG9Sb3RhdGlvbkFuZ2xlKCkge1xyXG5cclxuXHRcdHJldHVybiAyICogTWF0aC5QSSAvIDYwIC8gNjAgKiBzY29wZS5hdXRvUm90YXRlU3BlZWQ7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0Wm9vbVNjYWxlKCkge1xyXG5cclxuXHRcdHJldHVybiBNYXRoLnBvdygwLjk1LCBzY29wZS56b29tU3BlZWQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJvdGF0ZUxlZnQoYW5nbGUpIHtcclxuXHJcblx0XHRzcGhlcmljYWxEZWx0YS50aGV0YSAtPSBhbmdsZTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiByb3RhdGVVcChhbmdsZSkge1xyXG5cclxuXHRcdHNwaGVyaWNhbERlbHRhLnBoaSAtPSBhbmdsZTtcclxuXHJcblx0fVxyXG5cclxuXHR2YXIgcGFuTGVmdCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbkxlZnQoZGlzdGFuY2UsIG9iamVjdE1hdHJpeCkge1xyXG5cclxuXHRcdFx0di5zZXRGcm9tTWF0cml4Q29sdW1uKG9iamVjdE1hdHJpeCwgMCk7IC8vIGdldCBYIGNvbHVtbiBvZiBvYmplY3RNYXRyaXhcclxuXHRcdFx0di5tdWx0aXBseVNjYWxhcigtZGlzdGFuY2UpO1xyXG5cclxuXHRcdFx0cGFuT2Zmc2V0LmFkZCh2KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9KCk7XHJcblxyXG5cdHZhciBwYW5VcCA9IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHR2YXIgdiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhblVwKGRpc3RhbmNlLCBvYmplY3RNYXRyaXgpIHtcclxuXHJcblx0XHRcdHYuc2V0RnJvbU1hdHJpeENvbHVtbihvYmplY3RNYXRyaXgsIDEpOyAvLyBnZXQgWSBjb2x1bW4gb2Ygb2JqZWN0TWF0cml4XHJcblx0XHRcdHYubXVsdGlwbHlTY2FsYXIoZGlzdGFuY2UpO1xyXG5cclxuXHRcdFx0cGFuT2Zmc2V0LmFkZCh2KTtcclxuXHJcblx0XHR9O1xyXG5cclxuXHR9KCk7XHJcblxyXG5cdC8vIGRlbHRhWCBhbmQgZGVsdGFZIGFyZSBpbiBwaXhlbHM7IHJpZ2h0IGFuZCBkb3duIGFyZSBwb3NpdGl2ZVxyXG5cdHZhciBwYW4gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0dmFyIG9mZnNldCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcblxyXG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHBhbihkZWx0YVgsIGRlbHRhWSkge1xyXG5cclxuXHRcdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG5cdFx0XHRpZiAoc2NvcGUub2JqZWN0LmlzUGVyc3BlY3RpdmVDYW1lcmEpIHtcclxuXHJcblx0XHRcdFx0Ly8gcGVyc3BlY3RpdmVcclxuXHRcdFx0XHR2YXIgcG9zaXRpb24gPSBzY29wZS5vYmplY3QucG9zaXRpb247XHJcblx0XHRcdFx0b2Zmc2V0LmNvcHkocG9zaXRpb24pLnN1YihzY29wZS50YXJnZXQpO1xyXG5cdFx0XHRcdHZhciB0YXJnZXREaXN0YW5jZSA9IG9mZnNldC5sZW5ndGgoKTtcclxuXHJcblx0XHRcdFx0Ly8gaGFsZiBvZiB0aGUgZm92IGlzIGNlbnRlciB0byB0b3Agb2Ygc2NyZWVuXHJcblx0XHRcdFx0dGFyZ2V0RGlzdGFuY2UgKj0gTWF0aC50YW4oKHNjb3BlLm9iamVjdC5mb3YgLyAyKSAqIE1hdGguUEkgLyAxODAuMCk7XHJcblxyXG5cdFx0XHRcdC8vIHdlIGFjdHVhbGx5IGRvbid0IHVzZSBzY3JlZW5XaWR0aCwgc2luY2UgcGVyc3BlY3RpdmUgY2FtZXJhIGlzIGZpeGVkIHRvIHNjcmVlbiBoZWlnaHRcclxuXHRcdFx0XHRwYW5MZWZ0KDIgKiBkZWx0YVggKiB0YXJnZXREaXN0YW5jZSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4KTtcclxuXHRcdFx0XHRwYW5VcCgyICogZGVsdGFZICogdGFyZ2V0RGlzdGFuY2UgLyBlbGVtZW50LmNsaWVudEhlaWdodCwgc2NvcGUub2JqZWN0Lm1hdHJpeCk7XHJcblxyXG5cdFx0XHR9IGVsc2UgaWYgKHNjb3BlLm9iamVjdC5pc09ydGhvZ3JhcGhpY0NhbWVyYSkge1xyXG5cclxuXHRcdFx0XHQvLyBvcnRob2dyYXBoaWNcclxuXHRcdFx0XHRwYW5MZWZ0KGRlbHRhWCAqIChzY29wZS5vYmplY3QucmlnaHQgLSBzY29wZS5vYmplY3QubGVmdCkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50V2lkdGgsIHNjb3BlLm9iamVjdC5tYXRyaXgpO1xyXG5cdFx0XHRcdHBhblVwKGRlbHRhWSAqIChzY29wZS5vYmplY3QudG9wIC0gc2NvcGUub2JqZWN0LmJvdHRvbSkgLyBzY29wZS5vYmplY3Quem9vbSAvIGVsZW1lbnQuY2xpZW50SGVpZ2h0LCBzY29wZS5vYmplY3QubWF0cml4KTtcclxuXHJcblx0XHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRcdC8vIGNhbWVyYSBuZWl0aGVyIG9ydGhvZ3JhcGhpYyBub3IgcGVyc3BlY3RpdmVcclxuXHRcdFx0XHRjb25zb2xlLndhcm4oJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIHBhbiBkaXNhYmxlZC4nKTtcclxuXHRcdFx0XHRzY29wZS5lbmFibGVQYW4gPSBmYWxzZTtcclxuXHJcblx0XHRcdH1cclxuXHJcblx0XHR9O1xyXG5cclxuXHR9KCk7XHJcblxyXG5cdGZ1bmN0aW9uIGRvbGx5SW4oZG9sbHlTY2FsZSkge1xyXG5cclxuXHRcdGlmIChzY29wZS5vYmplY3QuaXNQZXJzcGVjdGl2ZUNhbWVyYSkge1xyXG5cclxuXHRcdFx0c2NhbGUgLz0gZG9sbHlTY2FsZTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHNjb3BlLm9iamVjdC5pc09ydGhvZ3JhcGhpY0NhbWVyYSkge1xyXG5cclxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heChzY29wZS5taW5ab29tLCBNYXRoLm1pbihzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAqIGRvbGx5U2NhbGUpKTtcclxuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyk7XHJcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZG9sbHlPdXQoZG9sbHlTY2FsZSkge1xyXG5cclxuXHRcdGlmIChzY29wZS5vYmplY3QuaXNQZXJzcGVjdGl2ZUNhbWVyYSkge1xyXG5cclxuXHRcdFx0c2NhbGUgKj0gZG9sbHlTY2FsZTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKHNjb3BlLm9iamVjdC5pc09ydGhvZ3JhcGhpY0NhbWVyYSkge1xyXG5cclxuXHRcdFx0c2NvcGUub2JqZWN0Lnpvb20gPSBNYXRoLm1heChzY29wZS5taW5ab29tLCBNYXRoLm1pbihzY29wZS5tYXhab29tLCBzY29wZS5vYmplY3Quem9vbSAvIGRvbGx5U2NhbGUpKTtcclxuXHRcdFx0c2NvcGUub2JqZWN0LnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHRcdFx0em9vbUNoYW5nZWQgPSB0cnVlO1xyXG5cclxuXHRcdH0gZWxzZSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1dBUk5JTkc6IE9yYml0Q29udHJvbHMuanMgZW5jb3VudGVyZWQgYW4gdW5rbm93biBjYW1lcmEgdHlwZSAtIGRvbGx5L3pvb20gZGlzYWJsZWQuJyk7XHJcblx0XHRcdHNjb3BlLmVuYWJsZVpvb20gPSBmYWxzZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0Ly9cclxuXHQvLyBldmVudCBjYWxsYmFja3MgLSB1cGRhdGUgdGhlIG9iamVjdCBzdGF0ZVxyXG5cdC8vXHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blJvdGF0ZShldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25Sb3RhdGUnICk7XHJcblxyXG5cdFx0cm90YXRlU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93bkRvbGx5KGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlRG93bkRvbGx5JyApO1xyXG5cclxuXHRcdGRvbGx5U3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlRG93blBhbihldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZURvd25QYW4nICk7XHJcblxyXG5cdFx0cGFuU3RhcnQuc2V0KGV2ZW50LmNsaWVudFgsIGV2ZW50LmNsaWVudFkpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZVJvdGF0ZShldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVNb3VzZU1vdmVSb3RhdGUnICk7XHJcblxyXG5cdFx0cm90YXRlRW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuXHRcdHJvdGF0ZURlbHRhLnN1YlZlY3RvcnMocm90YXRlRW5kLCByb3RhdGVTdGFydCk7XHJcblxyXG5cdFx0dmFyIGVsZW1lbnQgPSBzY29wZS5kb21FbGVtZW50ID09PSBkb2N1bWVudCA/IHNjb3BlLmRvbUVsZW1lbnQuYm9keSA6IHNjb3BlLmRvbUVsZW1lbnQ7XHJcblxyXG5cdFx0Ly8gcm90YXRpbmcgYWNyb3NzIHdob2xlIHNjcmVlbiBnb2VzIDM2MCBkZWdyZWVzIGFyb3VuZFxyXG5cdFx0cm90YXRlTGVmdCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnggLyBlbGVtZW50LmNsaWVudFdpZHRoICogc2NvcGUucm90YXRlU3BlZWQpO1xyXG5cclxuXHRcdC8vIHJvdGF0aW5nIHVwIGFuZCBkb3duIGFsb25nIHdob2xlIHNjcmVlbiBhdHRlbXB0cyB0byBnbyAzNjAsIGJ1dCBsaW1pdGVkIHRvIDE4MFxyXG5cdFx0cm90YXRlVXAoMiAqIE1hdGguUEkgKiByb3RhdGVEZWx0YS55IC8gZWxlbWVudC5jbGllbnRIZWlnaHQgKiBzY29wZS5yb3RhdGVTcGVlZCk7XHJcblxyXG5cdFx0cm90YXRlU3RhcnQuY29weShyb3RhdGVFbmQpO1xyXG5cclxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlTW92ZURvbGx5KGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlTW92ZURvbGx5JyApO1xyXG5cclxuXHRcdGRvbGx5RW5kLnNldChldmVudC5jbGllbnRYLCBldmVudC5jbGllbnRZKTtcclxuXHJcblx0XHRkb2xseURlbHRhLnN1YlZlY3RvcnMoZG9sbHlFbmQsIGRvbGx5U3RhcnQpO1xyXG5cclxuXHRcdGlmIChkb2xseURlbHRhLnkgPiAwKSB7XHJcblxyXG5cdFx0XHRkb2xseUluKGdldFpvb21TY2FsZSgpKTtcclxuXHJcblx0XHR9IGVsc2UgaWYgKGRvbGx5RGVsdGEueSA8IDApIHtcclxuXHJcblx0XHRcdGRvbGx5T3V0KGdldFpvb21TY2FsZSgpKTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0ZG9sbHlTdGFydC5jb3B5KGRvbGx5RW5kKTtcclxuXHJcblx0XHRzY29wZS51cGRhdGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVNb3VzZU1vdmVQYW4oZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VNb3ZlUGFuJyApO1xyXG5cclxuXHRcdHBhbkVuZC5zZXQoZXZlbnQuY2xpZW50WCwgZXZlbnQuY2xpZW50WSk7XHJcblxyXG5cdFx0cGFuRGVsdGEuc3ViVmVjdG9ycyhwYW5FbmQsIHBhblN0YXJ0KTtcclxuXHJcblx0XHRwYW4ocGFuRGVsdGEueCwgcGFuRGVsdGEueSk7XHJcblxyXG5cdFx0cGFuU3RhcnQuY29weShwYW5FbmQpO1xyXG5cclxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZU1vdXNlVXAoZXZlbnQpIHtcclxuXHJcblx0XHQvLyBjb25zb2xlLmxvZyggJ2hhbmRsZU1vdXNlVXAnICk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlTW91c2VXaGVlbChldmVudCkge1xyXG5cclxuXHRcdC8vIGNvbnNvbGUubG9nKCAnaGFuZGxlTW91c2VXaGVlbCcgKTtcclxuXHJcblx0XHRpZiAoZXZlbnQuZGVsdGFZIDwgMCkge1xyXG5cclxuXHRcdFx0ZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoZXZlbnQuZGVsdGFZID4gMCkge1xyXG5cclxuXHRcdFx0ZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlS2V5RG93bicgKTtcclxuXHJcblx0XHRzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5VUDpcclxuXHRcdFx0XHRwYW4oMCwgc2NvcGUua2V5UGFuU3BlZWQpO1xyXG5cdFx0XHRcdHNjb3BlLnVwZGF0ZSgpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSBzY29wZS5rZXlzLkJPVFRPTTpcclxuXHRcdFx0XHRwYW4oMCwgLXNjb3BlLmtleVBhblNwZWVkKTtcclxuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUua2V5cy5MRUZUOlxyXG5cdFx0XHRcdHBhbihzY29wZS5rZXlQYW5TcGVlZCwgMCk7XHJcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIHNjb3BlLmtleXMuUklHSFQ6XHJcblx0XHRcdFx0cGFuKC1zY29wZS5rZXlQYW5TcGVlZCwgMCk7XHJcblx0XHRcdFx0c2NvcGUudXBkYXRlKCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRSb3RhdGUoZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFJvdGF0ZScgKTtcclxuXHJcblx0XHRyb3RhdGVTdGFydC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hTdGFydERvbGx5KGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoU3RhcnREb2xseScgKTtcclxuXHJcblx0XHR2YXIgZHggPSBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWDtcclxuXHRcdHZhciBkeSA9IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkgLSBldmVudC50b3VjaGVzWzFdLnBhZ2VZO1xyXG5cclxuXHRcdHZhciBkaXN0YW5jZSA9IE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcblxyXG5cdFx0ZG9sbHlTdGFydC5zZXQoMCwgZGlzdGFuY2UpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGhhbmRsZVRvdWNoU3RhcnRQYW4oZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hTdGFydFBhbicgKTtcclxuXHJcblx0XHRwYW5TdGFydC5zZXQoZXZlbnQudG91Y2hlc1swXS5wYWdlWCwgZXZlbnQudG91Y2hlc1swXS5wYWdlWSk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUm90YXRlKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVJvdGF0ZScgKTtcclxuXHJcblx0XHRyb3RhdGVFbmQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xyXG5cdFx0cm90YXRlRGVsdGEuc3ViVmVjdG9ycyhyb3RhdGVFbmQsIHJvdGF0ZVN0YXJ0KTtcclxuXHJcblx0XHR2YXIgZWxlbWVudCA9IHNjb3BlLmRvbUVsZW1lbnQgPT09IGRvY3VtZW50ID8gc2NvcGUuZG9tRWxlbWVudC5ib2R5IDogc2NvcGUuZG9tRWxlbWVudDtcclxuXHJcblx0XHQvLyByb3RhdGluZyBhY3Jvc3Mgd2hvbGUgc2NyZWVuIGdvZXMgMzYwIGRlZ3JlZXMgYXJvdW5kXHJcblx0XHRyb3RhdGVMZWZ0KDIgKiBNYXRoLlBJICogcm90YXRlRGVsdGEueCAvIGVsZW1lbnQuY2xpZW50V2lkdGggKiBzY29wZS5yb3RhdGVTcGVlZCk7XHJcblxyXG5cdFx0Ly8gcm90YXRpbmcgdXAgYW5kIGRvd24gYWxvbmcgd2hvbGUgc2NyZWVuIGF0dGVtcHRzIHRvIGdvIDM2MCwgYnV0IGxpbWl0ZWQgdG8gMTgwXHJcblx0XHRyb3RhdGVVcCgyICogTWF0aC5QSSAqIHJvdGF0ZURlbHRhLnkgLyBlbGVtZW50LmNsaWVudEhlaWdodCAqIHNjb3BlLnJvdGF0ZVNwZWVkKTtcclxuXHJcblx0XHRyb3RhdGVTdGFydC5jb3B5KHJvdGF0ZUVuZCk7XHJcblxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlRG9sbHkoZXZlbnQpIHtcclxuXHJcblx0XHQvL2NvbnNvbGUubG9nKCAnaGFuZGxlVG91Y2hNb3ZlRG9sbHknICk7XHJcblxyXG5cdFx0dmFyIGR4ID0gZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIGV2ZW50LnRvdWNoZXNbMV0ucGFnZVg7XHJcblx0XHR2YXIgZHkgPSBldmVudC50b3VjaGVzWzBdLnBhZ2VZIC0gZXZlbnQudG91Y2hlc1sxXS5wYWdlWTtcclxuXHJcblx0XHR2YXIgZGlzdGFuY2UgPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkpO1xyXG5cclxuXHRcdGRvbGx5RW5kLnNldCgwLCBkaXN0YW5jZSk7XHJcblxyXG5cdFx0ZG9sbHlEZWx0YS5zdWJWZWN0b3JzKGRvbGx5RW5kLCBkb2xseVN0YXJ0KTtcclxuXHJcblx0XHRpZiAoZG9sbHlEZWx0YS55ID4gMCkge1xyXG5cclxuXHRcdFx0ZG9sbHlPdXQoZ2V0Wm9vbVNjYWxlKCkpO1xyXG5cclxuXHRcdH0gZWxzZSBpZiAoZG9sbHlEZWx0YS55IDwgMCkge1xyXG5cclxuXHRcdFx0ZG9sbHlJbihnZXRab29tU2NhbGUoKSk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGRvbGx5U3RhcnQuY29weShkb2xseUVuZCk7XHJcblxyXG5cdFx0c2NvcGUudXBkYXRlKCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gaGFuZGxlVG91Y2hNb3ZlUGFuKGV2ZW50KSB7XHJcblxyXG5cdFx0Ly9jb25zb2xlLmxvZyggJ2hhbmRsZVRvdWNoTW92ZVBhbicgKTtcclxuXHJcblx0XHRwYW5FbmQuc2V0KGV2ZW50LnRvdWNoZXNbMF0ucGFnZVgsIGV2ZW50LnRvdWNoZXNbMF0ucGFnZVkpO1xyXG5cclxuXHRcdHBhbkRlbHRhLnN1YlZlY3RvcnMocGFuRW5kLCBwYW5TdGFydCk7XHJcblxyXG5cdFx0cGFuKHBhbkRlbHRhLngsIHBhbkRlbHRhLnkpO1xyXG5cclxuXHRcdHBhblN0YXJ0LmNvcHkocGFuRW5kKTtcclxuXHJcblx0XHRzY29wZS51cGRhdGUoKTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBoYW5kbGVUb3VjaEVuZChldmVudCkge1xyXG5cclxuXHRcdC8vY29uc29sZS5sb2coICdoYW5kbGVUb3VjaEVuZCcgKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL1xyXG5cdC8vIGV2ZW50IGhhbmRsZXJzIC0gRlNNOiBsaXN0ZW4gZm9yIGV2ZW50cyBhbmQgcmVzZXQgc3RhdGVcclxuXHQvL1xyXG5cclxuXHRmdW5jdGlvbiBvbk1vdXNlRG93bihldmVudCkge1xyXG5cclxuXHRcdGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0c3dpdGNoIChldmVudC5idXR0b24pIHtcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUubW91c2VCdXR0b25zLk9SQklUOlxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVNb3VzZURvd25Sb3RhdGUoZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlJPVEFURTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIHNjb3BlLm1vdXNlQnV0dG9ucy5aT09NOlxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlTW91c2VEb3duRG9sbHkoZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLkRPTExZO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2Ugc2NvcGUubW91c2VCdXR0b25zLlBBTjpcclxuXHJcblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVBhbiA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlTW91c2VEb3duUGFuKGV2ZW50KTtcclxuXHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5QQU47XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3RhdGUgIT09IFNUQVRFLk5PTkUpIHtcclxuXHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlLCBmYWxzZSk7XHJcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcclxuXHJcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoc3RhcnRFdmVudCk7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRzd2l0Y2ggKHN0YXRlKSB7XHJcblxyXG5cdFx0XHRjYXNlIFNUQVRFLlJPVEFURTpcclxuXHJcblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlUm90YXRlKGV2ZW50KTtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRjYXNlIFNUQVRFLkRPTExZOlxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlTW91c2VNb3ZlRG9sbHkoZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgU1RBVEUuUEFOOlxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUGFuID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRoYW5kbGVNb3VzZU1vdmVQYW4oZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb3VzZVVwKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0aGFuZGxlTW91c2VVcChldmVudCk7XHJcblxyXG5cdFx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUsIGZhbHNlKTtcclxuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXAsIGZhbHNlKTtcclxuXHJcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGVuZEV2ZW50KTtcclxuXHJcblx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Nb3VzZVdoZWVsKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlIHx8IHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlIHx8IChzdGF0ZSAhPT0gU1RBVEUuTk9ORSAmJiBzdGF0ZSAhPT0gU1RBVEUuUk9UQVRFKSkgcmV0dXJuO1xyXG5cclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcblx0XHRoYW5kbGVNb3VzZVdoZWVsKGV2ZW50KTtcclxuXHJcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KHN0YXJ0RXZlbnQpOyAvLyBub3Qgc3VyZSB3aHkgdGhlc2UgYXJlIGhlcmUuLi5cclxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xyXG5cclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xyXG5cclxuXHRcdGlmIChzY29wZS5lbmFibGVkID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVLZXlzID09PSBmYWxzZSB8fCBzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0aGFuZGxlS2V5RG93bihldmVudCk7XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0c3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0Y2FzZSAxOlx0Ly8gb25lLWZpbmdlcmVkIHRvdWNoOiByb3RhdGVcclxuXHJcblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVJvdGF0ZSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRcdFx0aGFuZGxlVG91Y2hTdGFydFJvdGF0ZShldmVudCk7XHJcblxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfUk9UQVRFO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMjpcdC8vIHR3by1maW5nZXJlZCB0b3VjaDogZG9sbHlcclxuXHJcblx0XHRcdFx0aWYgKHNjb3BlLmVuYWJsZVpvb20gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnREb2xseShldmVudCk7XHJcblxyXG5cdFx0XHRcdHN0YXRlID0gU1RBVEUuVE9VQ0hfRE9MTFk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdGhhbmRsZVRvdWNoU3RhcnRQYW4oZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLlRPVUNIX1BBTjtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblxyXG5cdFx0XHRkZWZhdWx0OlxyXG5cclxuXHRcdFx0XHRzdGF0ZSA9IFNUQVRFLk5PTkU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGF0ZSAhPT0gU1RBVEUuTk9ORSkge1xyXG5cclxuXHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChzdGFydEV2ZW50KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuXHJcblx0XHRpZiAoc2NvcGUuZW5hYmxlZCA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG5cdFx0c3dpdGNoIChldmVudC50b3VjaGVzLmxlbmd0aCkge1xyXG5cclxuXHRcdFx0Y2FzZSAxOiAvLyBvbmUtZmluZ2VyZWQgdG91Y2g6IHJvdGF0ZVxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlUm90YXRlID09PSBmYWxzZSkgcmV0dXJuO1xyXG5cdFx0XHRcdGlmIChzdGF0ZSAhPT0gU1RBVEUuVE9VQ0hfUk9UQVRFKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxyXG5cclxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVSb3RhdGUoZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRicmVhaztcclxuXHJcblx0XHRcdGNhc2UgMjogLy8gdHdvLWZpbmdlcmVkIHRvdWNoOiBkb2xseVxyXG5cclxuXHRcdFx0XHRpZiAoc2NvcGUuZW5hYmxlWm9vbSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHRcdFx0XHRpZiAoc3RhdGUgIT09IFNUQVRFLlRPVUNIX0RPTExZKSByZXR1cm47IC8vIGlzIHRoaXMgbmVlZGVkPy4uLlxyXG5cclxuXHRcdFx0XHRoYW5kbGVUb3VjaE1vdmVEb2xseShldmVudCk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0Y2FzZSAzOiAvLyB0aHJlZS1maW5nZXJlZCB0b3VjaDogcGFuXHJcblxyXG5cdFx0XHRcdGlmIChzY29wZS5lbmFibGVQYW4gPT09IGZhbHNlKSByZXR1cm47XHJcblx0XHRcdFx0aWYgKHN0YXRlICE9PSBTVEFURS5UT1VDSF9QQU4pIHJldHVybjsgLy8gaXMgdGhpcyBuZWVkZWQ/Li4uXHJcblxyXG5cdFx0XHRcdGhhbmRsZVRvdWNoTW92ZVBhbihldmVudCk7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cclxuXHRcdFx0ZGVmYXVsdDpcclxuXHJcblx0XHRcdFx0c3RhdGUgPSBTVEFURS5OT05FO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvblRvdWNoRW5kKGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0aGFuZGxlVG91Y2hFbmQoZXZlbnQpO1xyXG5cclxuXHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoZW5kRXZlbnQpO1xyXG5cclxuXHRcdHN0YXRlID0gU1RBVEUuTk9ORTtcclxuXHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvbkNvbnRleHRNZW51KGV2ZW50KSB7XHJcblxyXG5cdFx0aWYgKHNjb3BlLmVuYWJsZWQgPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0fVxyXG5cclxuXHQvL1xyXG5cclxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51Jywgb25Db250ZXh0TWVudSwgZmFsc2UpO1xyXG5cclxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG9uTW91c2VEb3duLCBmYWxzZSk7XHJcblx0c2NvcGUuZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIG9uTW91c2VXaGVlbCwgZmFsc2UpO1xyXG5cclxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQsIGZhbHNlKTtcclxuXHRzY29wZS5kb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCwgZmFsc2UpO1xyXG5cdHNjb3BlLmRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUsIGZhbHNlKTtcclxuXHJcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBvbktleURvd24sIGZhbHNlKTtcclxuXHJcblx0Ly8gZm9yY2UgYW4gdXBkYXRlIGF0IHN0YXJ0XHJcblxyXG5cdHRoaXMudXBkYXRlKCk7XHJcblxyXG59O1xyXG5cclxuT3JiaXRDb250cm9scy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRIUkVFLkV2ZW50RGlzcGF0Y2hlci5wcm90b3R5cGUpO1xyXG5PcmJpdENvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IE9yYml0Q29udHJvbHM7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhPcmJpdENvbnRyb2xzLnByb3RvdHlwZSwge1xyXG5cclxuXHRjZW50ZXI6IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLmNlbnRlciBoYXMgYmVlbiByZW5hbWVkIHRvIC50YXJnZXQnKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudGFyZ2V0O1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0Ly8gYmFja3dhcmQgY29tcGF0aWJpbGl0eVxyXG5cclxuXHRub1pvb206IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vWm9vbSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVpvb20gaW5zdGVhZC4nKTtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmVuYWJsZVpvb207XHJcblxyXG5cdFx0fSxcclxuXHJcblx0XHRzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9ab29tIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlWm9vbSBpbnN0ZWFkLicpO1xyXG5cdFx0XHR0aGlzLmVuYWJsZVpvb20gPSAhdmFsdWU7XHJcblxyXG5cdFx0fVxyXG5cclxuXHR9LFxyXG5cclxuXHRub1JvdGF0ZToge1xyXG5cclxuXHRcdGdldDogZnVuY3Rpb24gKCkge1xyXG5cclxuXHRcdFx0Y29uc29sZS53YXJuKCdUSFJFRS5PcmJpdENvbnRyb2xzOiAubm9Sb3RhdGUgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVSb3RhdGUgaW5zdGVhZC4nKTtcclxuXHRcdFx0cmV0dXJuICF0aGlzLmVuYWJsZVJvdGF0ZTtcclxuXHJcblx0XHR9LFxyXG5cclxuXHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1JvdGF0ZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVJvdGF0ZSBpbnN0ZWFkLicpO1xyXG5cdFx0XHR0aGlzLmVuYWJsZVJvdGF0ZSA9ICF2YWx1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH0sXHJcblxyXG5cdG5vUGFuOiB7XHJcblxyXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub1BhbiBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZVBhbiBpbnN0ZWFkLicpO1xyXG5cdFx0XHRyZXR1cm4gIXRoaXMuZW5hYmxlUGFuO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vUGFuIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFVzZSAuZW5hYmxlUGFuIGluc3RlYWQuJyk7XHJcblx0XHRcdHRoaXMuZW5hYmxlUGFuID0gIXZhbHVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0bm9LZXlzOiB7XHJcblxyXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5ub0tleXMgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVLZXlzIGluc3RlYWQuJyk7XHJcblx0XHRcdHJldHVybiAhdGhpcy5lbmFibGVLZXlzO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLm5vS2V5cyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZUtleXMgaW5zdGVhZC4nKTtcclxuXHRcdFx0dGhpcy5lbmFibGVLZXlzID0gIXZhbHVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0c3RhdGljTW92aW5nOiB7XHJcblxyXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdFx0XHRjb25zb2xlLndhcm4oJ1RIUkVFLk9yYml0Q29udHJvbHM6IC5zdGF0aWNNb3ZpbmcgaGFzIGJlZW4gZGVwcmVjYXRlZC4gVXNlIC5lbmFibGVEYW1waW5nIGluc3RlYWQuJyk7XHJcblx0XHRcdHJldHVybiAhdGhpcy5lbmFibGVEYW1waW5nO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLnN0YXRpY01vdmluZyBoYXMgYmVlbiBkZXByZWNhdGVkLiBVc2UgLmVuYWJsZURhbXBpbmcgaW5zdGVhZC4nKTtcclxuXHRcdFx0dGhpcy5lbmFibGVEYW1waW5nID0gIXZhbHVlO1xyXG5cclxuXHRcdH1cclxuXHJcblx0fSxcclxuXHJcblx0ZHluYW1pY0RhbXBpbmdGYWN0b3I6IHtcclxuXHJcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5kYW1waW5nRmFjdG9yO1xyXG5cclxuXHRcdH0sXHJcblxyXG5cdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcclxuXHJcblx0XHRcdGNvbnNvbGUud2FybignVEhSRUUuT3JiaXRDb250cm9sczogLmR5bmFtaWNEYW1waW5nRmFjdG9yIGhhcyBiZWVuIHJlbmFtZWQuIFVzZSAuZGFtcGluZ0ZhY3RvciBpbnN0ZWFkLicpO1xyXG5cdFx0XHR0aGlzLmRhbXBpbmdGYWN0b3IgPSB2YWx1ZTtcclxuXHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHJcbn0pOyIsIi8qKlxuICogQGF1dGhvciBhcm9kaWMgLyBodHRwczovL2dpdGh1Yi5jb20vYXJvZGljXG4gKi9cblxuLy9pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbid1c2Ugc3RyaWN0JztcblxudmFyIEdpem1vTWF0ZXJpYWwgPSBmdW5jdGlvbiAocGFyYW1ldGVycykge1xuXG5cdFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsLmNhbGwodGhpcyk7XG5cblx0dGhpcy5kZXB0aFRlc3QgPSBmYWxzZTtcblx0dGhpcy5kZXB0aFdyaXRlID0gZmFsc2U7XG5cdHRoaXMuc2lkZSA9IFRIUkVFLkZyb250U2lkZTtcblx0dGhpcy50cmFuc3BhcmVudCA9IHRydWU7XG5cblx0dGhpcy5zZXRWYWx1ZXMocGFyYW1ldGVycyk7XG5cblx0dGhpcy5vbGRDb2xvciA9IHRoaXMuY29sb3IuY2xvbmUoKTtcblx0dGhpcy5vbGRPcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuXG5cdHRoaXMuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGhpZ2hsaWdodGVkKSB7XG5cblx0XHRpZiAoaGlnaGxpZ2h0ZWQpIHtcblxuXHRcdFx0dGhpcy5jb2xvci5zZXRSR0IoMSwgMSwgMCk7XG5cdFx0XHR0aGlzLm9wYWNpdHkgPSAxO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0dGhpcy5jb2xvci5jb3B5KHRoaXMub2xkQ29sb3IpO1xuXHRcdFx0dGhpcy5vcGFjaXR5ID0gdGhpcy5vbGRPcGFjaXR5O1xuXG5cdFx0fVxuXG5cdH07XG5cbn07XG5cbkdpem1vTWF0ZXJpYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbC5wcm90b3R5cGUpO1xuR2l6bW9NYXRlcmlhbC5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBHaXptb01hdGVyaWFsO1xuXG5cbnZhciBHaXptb0xpbmVNYXRlcmlhbCA9IGZ1bmN0aW9uIChwYXJhbWV0ZXJzKSB7XG5cblx0VEhSRUUuTGluZUJhc2ljTWF0ZXJpYWwuY2FsbCh0aGlzKTtcblxuXHR0aGlzLmRlcHRoVGVzdCA9IGZhbHNlO1xuXHR0aGlzLmRlcHRoV3JpdGUgPSBmYWxzZTtcblx0dGhpcy50cmFuc3BhcmVudCA9IHRydWU7XG5cdHRoaXMubGluZXdpZHRoID0gMTtcblxuXHR0aGlzLnNldFZhbHVlcyhwYXJhbWV0ZXJzKTtcblxuXHR0aGlzLm9sZENvbG9yID0gdGhpcy5jb2xvci5jbG9uZSgpO1xuXHR0aGlzLm9sZE9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XG5cblx0dGhpcy5oaWdobGlnaHQgPSBmdW5jdGlvbiAoaGlnaGxpZ2h0ZWQpIHtcblxuXHRcdGlmIChoaWdobGlnaHRlZCkge1xuXG5cdFx0XHR0aGlzLmNvbG9yLnNldFJHQigxLCAxLCAwKTtcblx0XHRcdHRoaXMub3BhY2l0eSA9IDE7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHR0aGlzLmNvbG9yLmNvcHkodGhpcy5vbGRDb2xvcik7XG5cdFx0XHR0aGlzLm9wYWNpdHkgPSB0aGlzLm9sZE9wYWNpdHk7XG5cblx0XHR9XG5cblx0fTtcblxufTtcblxuR2l6bW9MaW5lTWF0ZXJpYWwucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5MaW5lQmFzaWNNYXRlcmlhbC5wcm90b3R5cGUpO1xuR2l6bW9MaW5lTWF0ZXJpYWwucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2l6bW9MaW5lTWF0ZXJpYWw7XG5cblxudmFyIHBpY2tlck1hdGVyaWFsID0gbmV3IEdpem1vTWF0ZXJpYWwoeyB2aXNpYmxlOiBmYWxzZSwgdHJhbnNwYXJlbnQ6IGZhbHNlIH0pO1xuXG5cbnZhciBUcmFuc2Zvcm1HaXptbyA9IGZ1bmN0aW9uICgpIHtcblxuXHR0aGlzLmluaXQgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRUSFJFRS5PYmplY3QzRC5jYWxsKHRoaXMpO1xuXG5cdFx0dGhpcy5oYW5kbGVzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cdFx0dGhpcy5waWNrZXJzID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG5cdFx0dGhpcy5wbGFuZXMgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcblxuXHRcdHRoaXMuYWRkKHRoaXMuaGFuZGxlcyk7XG5cdFx0dGhpcy5hZGQodGhpcy5waWNrZXJzKTtcblx0XHR0aGlzLmFkZCh0aGlzLnBsYW5lcyk7XG5cblx0XHQvLy8vIFBMQU5FU1xuXG5cdFx0dmFyIHBsYW5lR2VvbWV0cnkgPSBuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSg1MCwgNTAsIDIsIDIpO1xuXHRcdHZhciBwbGFuZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgdmlzaWJsZTogZmFsc2UsIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUgfSk7XG5cblx0XHR2YXIgcGxhbmVzID0ge1xuXHRcdFx0XCJYWVwiOiBuZXcgVEhSRUUuTWVzaChwbGFuZUdlb21ldHJ5LCBwbGFuZU1hdGVyaWFsKSxcblx0XHRcdFwiWVpcIjogbmV3IFRIUkVFLk1lc2gocGxhbmVHZW9tZXRyeSwgcGxhbmVNYXRlcmlhbCksXG5cdFx0XHRcIlhaXCI6IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpLFxuXHRcdFx0XCJYWVpFXCI6IG5ldyBUSFJFRS5NZXNoKHBsYW5lR2VvbWV0cnksIHBsYW5lTWF0ZXJpYWwpXG5cdFx0fTtcblxuXHRcdHRoaXMuYWN0aXZlUGxhbmUgPSBwbGFuZXNbXCJYWVpFXCJdO1xuXG5cdFx0cGxhbmVzW1wiWVpcIl0ucm90YXRpb24uc2V0KDAsIE1hdGguUEkgLyAyLCAwKTtcblx0XHRwbGFuZXNbXCJYWlwiXS5yb3RhdGlvbi5zZXQoLSBNYXRoLlBJIC8gMiwgMCwgMCk7XG5cblx0XHRmb3IgKHZhciBpIGluIHBsYW5lcykge1xuXG5cdFx0XHRwbGFuZXNbaV0ubmFtZSA9IGk7XG5cdFx0XHR0aGlzLnBsYW5lcy5hZGQocGxhbmVzW2ldKTtcblx0XHRcdHRoaXMucGxhbmVzW2ldID0gcGxhbmVzW2ldO1xuXG5cdFx0fVxuXG5cdFx0Ly8vLyBIQU5ETEVTIEFORCBQSUNLRVJTXG5cblx0XHR2YXIgc2V0dXBHaXptb3MgPSBmdW5jdGlvbiAoZ2l6bW9NYXAsIHBhcmVudCkge1xuXG5cdFx0XHRmb3IgKHZhciBuYW1lIGluIGdpem1vTWFwKSB7XG5cblx0XHRcdFx0Zm9yIChpID0gZ2l6bW9NYXBbbmFtZV0ubGVuZ3RoOyBpLS07KSB7XG5cblx0XHRcdFx0XHR2YXIgb2JqZWN0ID0gZ2l6bW9NYXBbbmFtZV1baV1bMF07XG5cdFx0XHRcdFx0dmFyIHBvc2l0aW9uID0gZ2l6bW9NYXBbbmFtZV1baV1bMV07XG5cdFx0XHRcdFx0dmFyIHJvdGF0aW9uID0gZ2l6bW9NYXBbbmFtZV1baV1bMl07XG5cblx0XHRcdFx0XHRvYmplY3QubmFtZSA9IG5hbWU7XG5cblx0XHRcdFx0XHRpZiAocG9zaXRpb24pIG9iamVjdC5wb3NpdGlvbi5zZXQocG9zaXRpb25bMF0sIHBvc2l0aW9uWzFdLCBwb3NpdGlvblsyXSk7XG5cdFx0XHRcdFx0aWYgKHJvdGF0aW9uKSBvYmplY3Qucm90YXRpb24uc2V0KHJvdGF0aW9uWzBdLCByb3RhdGlvblsxXSwgcm90YXRpb25bMl0pO1xuXG5cdFx0XHRcdFx0cGFyZW50LmFkZChvYmplY3QpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fTtcblxuXHRcdHNldHVwR2l6bW9zKHRoaXMuaGFuZGxlR2l6bW9zLCB0aGlzLmhhbmRsZXMpO1xuXHRcdHNldHVwR2l6bW9zKHRoaXMucGlja2VyR2l6bW9zLCB0aGlzLnBpY2tlcnMpO1xuXG5cdFx0Ly8gcmVzZXQgVHJhbnNmb3JtYXRpb25zXG5cblx0XHR0aGlzLnRyYXZlcnNlKGZ1bmN0aW9uIChjaGlsZCkge1xuXG5cdFx0XHRpZiAoY2hpbGQgaW5zdGFuY2VvZiBUSFJFRS5NZXNoKSB7XG5cblx0XHRcdFx0Y2hpbGQudXBkYXRlTWF0cml4KCk7XG5cblx0XHRcdFx0dmFyIHRlbXBHZW9tZXRyeSA9IGNoaWxkLmdlb21ldHJ5LmNsb25lKCk7XG5cdFx0XHRcdHRlbXBHZW9tZXRyeS5hcHBseU1hdHJpeChjaGlsZC5tYXRyaXgpO1xuXHRcdFx0XHRjaGlsZC5nZW9tZXRyeSA9IHRlbXBHZW9tZXRyeTtcblxuXHRcdFx0XHRjaGlsZC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG5cdFx0XHRcdGNoaWxkLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcblx0XHRcdFx0Y2hpbGQuc2NhbGUuc2V0KDEsIDEsIDEpO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdHRoaXMuaGlnaGxpZ2h0ID0gZnVuY3Rpb24gKGF4aXMpIHtcblxuXHRcdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG5cblx0XHRcdGlmIChjaGlsZC5tYXRlcmlhbCAmJiBjaGlsZC5tYXRlcmlhbC5oaWdobGlnaHQpIHtcblxuXHRcdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gYXhpcykge1xuXG5cdFx0XHRcdFx0Y2hpbGQubWF0ZXJpYWwuaGlnaGxpZ2h0KHRydWUpO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRjaGlsZC5tYXRlcmlhbC5oaWdobGlnaHQoZmFsc2UpO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fTtcblxufTtcblxuVHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUSFJFRS5PYmplY3QzRC5wcm90b3R5cGUpO1xuVHJhbnNmb3JtR2l6bW8ucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHJhbnNmb3JtR2l6bW87XG5cblRyYW5zZm9ybUdpem1vLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAocm90YXRpb24sIGV5ZSkge1xuXG5cdHZhciB2ZWMxID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCk7XG5cdHZhciB2ZWMyID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG5cdHZhciBsb29rQXRNYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXG5cdHRoaXMudHJhdmVyc2UoZnVuY3Rpb24gKGNoaWxkKSB7XG5cblx0XHRpZiAoY2hpbGQubmFtZS5zZWFyY2goXCJFXCIpICE9PSAtIDEpIHtcblxuXHRcdFx0Y2hpbGQucXVhdGVybmlvbi5zZXRGcm9tUm90YXRpb25NYXRyaXgobG9va0F0TWF0cml4Lmxvb2tBdChleWUsIHZlYzEsIHZlYzIpKTtcblxuXHRcdH0gZWxzZSBpZiAoY2hpbGQubmFtZS5zZWFyY2goXCJYXCIpICE9PSAtIDEgfHwgY2hpbGQubmFtZS5zZWFyY2goXCJZXCIpICE9PSAtIDEgfHwgY2hpbGQubmFtZS5zZWFyY2goXCJaXCIpICE9PSAtIDEpIHtcblxuXHRcdFx0Y2hpbGQucXVhdGVybmlvbi5zZXRGcm9tRXVsZXIocm90YXRpb24pO1xuXG5cdFx0fVxuXG5cdH0pO1xuXG59O1xuXG52YXIgVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0VHJhbnNmb3JtR2l6bW8uY2FsbCh0aGlzKTtcblxuXHR2YXIgYXJyb3dHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KDAsIDAuMDUsIDAuMiwgMTIsIDEsIGZhbHNlKSk7XG5cdG1lc2gucG9zaXRpb24ueSA9IDAuNTtcblx0bWVzaC51cGRhdGVNYXRyaXgoKTtcblxuXHRhcnJvd0dlb21ldHJ5Lm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcblxuXHR2YXIgbGluZVhHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWEdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMSwgMCwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVlHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWUdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMSwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVpHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWkdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMCwgMV0sIDMpKTtcblxuXHR0aGlzLmhhbmRsZUdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSksIFswLjUsIDAsIDBdLCBbMCwgMCwgLSBNYXRoLlBJIC8gMl1dLFxuXHRcdFx0W25ldyBUSFJFRS5MaW5lKGxpbmVYR2VvbWV0cnksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSldXG5cdFx0XSxcblxuXHRcdFk6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwZmYwMCB9KSksIFswLCAwLjUsIDBdXSxcblx0XHRcdFtuZXcgVEhSRUUuTGluZShsaW5lWUdlb21ldHJ5LCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2goYXJyb3dHZW9tZXRyeSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSkpLCBbMCwgMCwgMC41XSwgW01hdGguUEkgLyAyLCAwLCAwXV0sXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobGluZVpHZW9tZXRyeSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pKV1cblx0XHRdLFxuXG5cdFx0WFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLk9jdGFoZWRyb25HZW9tZXRyeSgwLjEsIDApLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgb3BhY2l0eTogMC4yNSB9KSksIFswLCAwLCAwXSwgWzAsIDAsIDBdXVxuXHRcdF0sXG5cblx0XHRYWTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuMjksIDAuMjkpLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmYwMCwgb3BhY2l0eTogMC4yNSB9KSksIFswLjE1LCAwLjE1LCAwXV1cblx0XHRdLFxuXG5cdFx0WVo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSgwLjI5LCAwLjI5KSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmZmYsIG9wYWNpdHk6IDAuMjUgfSkpLCBbMCwgMC4xNSwgMC4xNV0sIFswLCBNYXRoLlBJIC8gMiwgMF1dXG5cdFx0XSxcblxuXHRcdFhaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLlBsYW5lQnVmZmVyR2VvbWV0cnkoMC4yOSwgMC4yOSksIG5ldyBHaXptb01hdGVyaWFsKHsgY29sb3I6IDB4ZmYwMGZmLCBvcGFjaXR5OiAwLjI1IH0pKSwgWzAuMTUsIDAsIDAuMTVdLCBbLSBNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5waWNrZXJHaXptb3MgPSB7XG5cblx0XHRYOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAuNiwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5DeWxpbmRlckJ1ZmZlckdlb21ldHJ5KDAuMiwgMCwgMSwgNCwgMSwgZmFsc2UpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLjYsIDBdXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAsIDAuNl0sIFtNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFhZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5PY3RhaGVkcm9uR2VvbWV0cnkoMC4yLCAwKSwgcGlja2VyTWF0ZXJpYWwpXVxuXHRcdF0sXG5cblx0XHRYWTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpLCBbMC4yLCAwLjIsIDBdXVxuXHRcdF0sXG5cblx0XHRZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMC4yLCAwLjJdLCBbMCwgTWF0aC5QSSAvIDIsIDBdXVxuXHRcdF0sXG5cblx0XHRYWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpLCBbMC4yLCAwLCAwLjJdLCBbLSBNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5zZXRBY3RpdmVQbGFuZSA9IGZ1bmN0aW9uIChheGlzLCBleWUpIHtcblxuXHRcdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0XHRleWUuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZSh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbih0aGlzLnBsYW5lc1tcIlhZXCJdLm1hdHJpeFdvcmxkKSkpO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFwiKSB7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXG5cdFx0XHRpZiAoTWF0aC5hYnMoZXllLnkpID4gTWF0aC5hYnMoZXllLnopKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWlwiXTtcblxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSBcIllcIikge1xuXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVwiXTtcblxuXHRcdFx0aWYgKE1hdGguYWJzKGV5ZS54KSA+IE1hdGguYWJzKGV5ZS56KSkgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWVpcIl07XG5cblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJaXCIpIHtcblxuXHRcdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0XHRcdGlmIChNYXRoLmFicyhleWUueCkgPiBNYXRoLmFicyhleWUueSkpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIllaXCJdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFlaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZWkVcIl07XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJYWVwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVwiXTtcblxuXHRcdGlmIChheGlzID09PSBcIllaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIllaXCJdO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFpcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0fTtcblxuXHR0aGlzLmluaXQoKTtcblxufTtcblxuVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUcmFuc2Zvcm1HaXptby5wcm90b3R5cGUpO1xuVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGUucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHJhbnNmb3JtR2l6bW9UcmFuc2xhdGU7XG5cbnZhciBUcmFuc2Zvcm1HaXptb1JvdGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRUcmFuc2Zvcm1HaXptby5jYWxsKHRoaXMpO1xuXG5cdHZhciBDaXJjbGVHZW9tZXRyeSA9IGZ1bmN0aW9uIChyYWRpdXMsIGZhY2luZywgYXJjKSB7XG5cblx0XHR2YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcblx0XHR2YXIgdmVydGljZXMgPSBbXTtcblx0XHRhcmMgPSBhcmMgPyBhcmMgOiAxO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPD0gNjQgKiBhcmM7ICsraSkge1xuXG5cdFx0XHRpZiAoZmFjaW5nID09PSAneCcpIHZlcnRpY2VzLnB1c2goMCwgTWF0aC5jb3MoaSAvIDMyICogTWF0aC5QSSkgKiByYWRpdXMsIE1hdGguc2luKGkgLyAzMiAqIE1hdGguUEkpICogcmFkaXVzKTtcblx0XHRcdGlmIChmYWNpbmcgPT09ICd5JykgdmVydGljZXMucHVzaChNYXRoLmNvcyhpIC8gMzIgKiBNYXRoLlBJKSAqIHJhZGl1cywgMCwgTWF0aC5zaW4oaSAvIDMyICogTWF0aC5QSSkgKiByYWRpdXMpO1xuXHRcdFx0aWYgKGZhY2luZyA9PT0gJ3onKSB2ZXJ0aWNlcy5wdXNoKE1hdGguc2luKGkgLyAzMiAqIE1hdGguUEkpICogcmFkaXVzLCBNYXRoLmNvcyhpIC8gMzIgKiBNYXRoLlBJKSAqIHJhZGl1cywgMCk7XG5cblx0XHR9XG5cblx0XHRnZW9tZXRyeS5hZGRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodmVydGljZXMsIDMpKTtcblx0XHRyZXR1cm4gZ2VvbWV0cnk7XG5cblx0fTtcblxuXHR0aGlzLmhhbmRsZUdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTGluZShuZXcgQ2lyY2xlR2VvbWV0cnkoMSwgJ3gnLCAwLjUpLCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHhmZjAwMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRZOiBbXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobmV3IENpcmNsZUdlb21ldHJ5KDEsICd5JywgMC41KSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDBmZjAwIH0pKV1cblx0XHRdLFxuXG5cdFx0WjogW1xuXHRcdFx0W25ldyBUSFJFRS5MaW5lKG5ldyBDaXJjbGVHZW9tZXRyeSgxLCAneicsIDAuNSksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweDAwMDBmZiB9KSldXG5cdFx0XSxcblxuXHRcdEU6IFtcblx0XHRcdFtuZXcgVEhSRUUuTGluZShuZXcgQ2lyY2xlR2VvbWV0cnkoMS4yNSwgJ3onLCAxKSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4Y2NjYzAwIH0pKV1cblx0XHRdLFxuXG5cdFx0WFlaRTogW1xuXHRcdFx0W25ldyBUSFJFRS5MaW5lKG5ldyBDaXJjbGVHZW9tZXRyeSgxLCAneicsIDEpLCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHg3ODc4NzggfSkpXVxuXHRcdF1cblxuXHR9O1xuXG5cdHRoaXMucGlja2VyR2l6bW9zID0ge1xuXG5cdFx0WDogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Ub3J1c0J1ZmZlckdlb21ldHJ5KDEsIDAuMTIsIDQsIDEyLCBNYXRoLlBJKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMF0sIFswLCAtIE1hdGguUEkgLyAyLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Ub3J1c0J1ZmZlckdlb21ldHJ5KDEsIDAuMTIsIDQsIDEyLCBNYXRoLlBJKSwgcGlja2VyTWF0ZXJpYWwpLCBbMCwgMCwgMF0sIFtNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFo6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuVG9ydXNCdWZmZXJHZW9tZXRyeSgxLCAwLjEyLCA0LCAxMiwgTWF0aC5QSSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAsIDBdLCBbMCwgMCwgLSBNYXRoLlBJIC8gMl1dXG5cdFx0XSxcblxuXHRcdEU6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuVG9ydXNCdWZmZXJHZW9tZXRyeSgxLjI1LCAwLjEyLCAyLCAyNCksIHBpY2tlck1hdGVyaWFsKV1cblx0XHRdLFxuXG5cdFx0WFlaRTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKCldLy8gVE9ET1xuXHRcdF1cblxuXHR9O1xuXG5cdHRoaXMuc2V0QWN0aXZlUGxhbmUgPSBmdW5jdGlvbiAoYXhpcykge1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiRVwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVpFXCJdO1xuXG5cdFx0aWYgKGF4aXMgPT09IFwiWFwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJZWlwiXTtcblxuXHRcdGlmIChheGlzID09PSBcIllcIikgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJaXCIpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXG5cdH07XG5cblx0dGhpcy51cGRhdGUgPSBmdW5jdGlvbiAocm90YXRpb24sIGV5ZTIpIHtcblxuXHRcdFRyYW5zZm9ybUdpem1vLnByb3RvdHlwZS51cGRhdGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblxuXHRcdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0XHR2YXIgd29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigwLCAwLCAxKTtcblx0XHR2YXIgdGVtcFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHZhciB1bml0WCA9IG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApO1xuXHRcdHZhciB1bml0WSA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApO1xuXHRcdHZhciB1bml0WiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpO1xuXHRcdHZhciBxdWF0ZXJuaW9uWCA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCk7XG5cdFx0dmFyIHF1YXRlcm5pb25ZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0XHR2YXIgcXVhdGVybmlvblogPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHRcdHZhciBleWUgPSBleWUyLmNsb25lKCk7XG5cblx0XHR3b3JsZFJvdGF0aW9uLmNvcHkodGhpcy5wbGFuZXNbXCJYWVwiXS5yb3RhdGlvbik7XG5cdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKHdvcmxkUm90YXRpb24pO1xuXG5cdFx0dGVtcE1hdHJpeC5tYWtlUm90YXRpb25Gcm9tUXVhdGVybmlvbih0ZW1wUXVhdGVybmlvbikuZ2V0SW52ZXJzZSh0ZW1wTWF0cml4KTtcblx0XHRleWUuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXgpO1xuXG5cdFx0dGhpcy50cmF2ZXJzZShmdW5jdGlvbiAoY2hpbGQpIHtcblxuXHRcdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbUV1bGVyKHdvcmxkUm90YXRpb24pO1xuXG5cdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gXCJYXCIpIHtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRYLCBNYXRoLmF0YW4yKC0gZXllLnksIGV5ZS56KSk7XG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YKTtcblx0XHRcdFx0Y2hpbGQucXVhdGVybmlvbi5jb3B5KHRlbXBRdWF0ZXJuaW9uKTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY2hpbGQubmFtZSA9PT0gXCJZXCIpIHtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uWS5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRZLCBNYXRoLmF0YW4yKGV5ZS54LCBleWUueikpO1xuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWSk7XG5cdFx0XHRcdGNoaWxkLnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH1cblxuXHRcdFx0aWYgKGNoaWxkLm5hbWUgPT09IFwiWlwiKSB7XG5cblx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0WiwgTWF0aC5hdGFuMihleWUueSwgZXllLngpKTtcblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblopO1xuXHRcdFx0XHRjaGlsZC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9O1xuXG5cdHRoaXMuaW5pdCgpO1xuXG59O1xuXG5UcmFuc2Zvcm1HaXptb1JvdGF0ZS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFRyYW5zZm9ybUdpem1vLnByb3RvdHlwZSk7XG5UcmFuc2Zvcm1HaXptb1JvdGF0ZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm1HaXptb1JvdGF0ZTtcblxudmFyIFRyYW5zZm9ybUdpem1vU2NhbGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0VHJhbnNmb3JtR2l6bW8uY2FsbCh0aGlzKTtcblxuXHR2YXIgYXJyb3dHZW9tZXRyeSA9IG5ldyBUSFJFRS5HZW9tZXRyeSgpO1xuXHR2YXIgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjEyNSwgMC4xMjUsIDAuMTI1KSk7XG5cdG1lc2gucG9zaXRpb24ueSA9IDAuNTtcblx0bWVzaC51cGRhdGVNYXRyaXgoKTtcblxuXHRhcnJvd0dlb21ldHJ5Lm1lcmdlKG1lc2guZ2VvbWV0cnksIG1lc2gubWF0cml4KTtcblxuXHR2YXIgbGluZVhHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWEdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMSwgMCwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVlHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWUdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMSwgMF0sIDMpKTtcblxuXHR2YXIgbGluZVpHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuXHRsaW5lWkdlb21ldHJ5LmFkZEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShbMCwgMCwgMCwgMCwgMCwgMV0sIDMpKTtcblxuXHR0aGlzLmhhbmRsZUdpem1vcyA9IHtcblxuXHRcdFg6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSksIFswLjUsIDAsIDBdLCBbMCwgMCwgLSBNYXRoLlBJIC8gMl1dLFxuXHRcdFx0W25ldyBUSFJFRS5MaW5lKGxpbmVYR2VvbWV0cnksIG5ldyBHaXptb0xpbmVNYXRlcmlhbCh7IGNvbG9yOiAweGZmMDAwMCB9KSldXG5cdFx0XSxcblxuXHRcdFk6IFtcblx0XHRcdFtuZXcgVEhSRUUuTWVzaChhcnJvd0dlb21ldHJ5LCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweDAwZmYwMCB9KSksIFswLCAwLjUsIDBdXSxcblx0XHRcdFtuZXcgVEhSRUUuTGluZShsaW5lWUdlb21ldHJ5LCBuZXcgR2l6bW9MaW5lTWF0ZXJpYWwoeyBjb2xvcjogMHgwMGZmMDAgfSkpXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2goYXJyb3dHZW9tZXRyeSwgbmV3IEdpem1vTWF0ZXJpYWwoeyBjb2xvcjogMHgwMDAwZmYgfSkpLCBbMCwgMCwgMC41XSwgW01hdGguUEkgLyAyLCAwLCAwXV0sXG5cdFx0XHRbbmV3IFRIUkVFLkxpbmUobGluZVpHZW9tZXRyeSwgbmV3IEdpem1vTGluZU1hdGVyaWFsKHsgY29sb3I6IDB4MDAwMGZmIH0pKV1cblx0XHRdLFxuXG5cdFx0WFlaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkJveEJ1ZmZlckdlb21ldHJ5KDAuMTI1LCAwLjEyNSwgMC4xMjUpLCBuZXcgR2l6bW9NYXRlcmlhbCh7IGNvbG9yOiAweGZmZmZmZiwgb3BhY2l0eTogMC4yNSB9KSldXG5cdFx0XVxuXG5cdH07XG5cblx0dGhpcy5waWNrZXJHaXptb3MgPSB7XG5cblx0XHRYOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAuNiwgMCwgMF0sIFswLCAwLCAtIE1hdGguUEkgLyAyXV1cblx0XHRdLFxuXG5cdFx0WTogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5DeWxpbmRlckJ1ZmZlckdlb21ldHJ5KDAuMiwgMCwgMSwgNCwgMSwgZmFsc2UpLCBwaWNrZXJNYXRlcmlhbCksIFswLCAwLjYsIDBdXVxuXHRcdF0sXG5cblx0XHRaOiBbXG5cdFx0XHRbbmV3IFRIUkVFLk1lc2gobmV3IFRIUkVFLkN5bGluZGVyQnVmZmVyR2VvbWV0cnkoMC4yLCAwLCAxLCA0LCAxLCBmYWxzZSksIHBpY2tlck1hdGVyaWFsKSwgWzAsIDAsIDAuNl0sIFtNYXRoLlBJIC8gMiwgMCwgMF1dXG5cdFx0XSxcblxuXHRcdFhZWjogW1xuXHRcdFx0W25ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5Cb3hCdWZmZXJHZW9tZXRyeSgwLjQsIDAuNCwgMC40KSwgcGlja2VyTWF0ZXJpYWwpXVxuXHRcdF1cblxuXHR9O1xuXG5cdHRoaXMuc2V0QWN0aXZlUGxhbmUgPSBmdW5jdGlvbiAoYXhpcywgZXllKSB7XG5cblx0XHR2YXIgdGVtcE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdFx0ZXllLmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2UodGVtcE1hdHJpeC5leHRyYWN0Um90YXRpb24odGhpcy5wbGFuZXNbXCJYWVwiXS5tYXRyaXhXb3JsZCkpKTtcblxuXHRcdGlmIChheGlzID09PSBcIlhcIikge1xuXG5cdFx0XHR0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVwiXTtcblx0XHRcdGlmIChNYXRoLmFicyhleWUueSkgPiBNYXRoLmFicyhleWUueikpIHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhaXCJdO1xuXG5cdFx0fVxuXG5cdFx0aWYgKGF4aXMgPT09IFwiWVwiKSB7XG5cblx0XHRcdHRoaXMuYWN0aXZlUGxhbmUgPSB0aGlzLnBsYW5lc1tcIlhZXCJdO1xuXHRcdFx0aWYgKE1hdGguYWJzKGV5ZS54KSA+IE1hdGguYWJzKGV5ZS56KSkgdGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWVpcIl07XG5cblx0XHR9XG5cblx0XHRpZiAoYXhpcyA9PT0gXCJaXCIpIHtcblxuXHRcdFx0dGhpcy5hY3RpdmVQbGFuZSA9IHRoaXMucGxhbmVzW1wiWFpcIl07XG5cdFx0XHRpZiAoTWF0aC5hYnMoZXllLngpID4gTWF0aC5hYnMoZXllLnkpKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJZWlwiXTtcblxuXHRcdH1cblxuXHRcdGlmIChheGlzID09PSBcIlhZWlwiKSB0aGlzLmFjdGl2ZVBsYW5lID0gdGhpcy5wbGFuZXNbXCJYWVpFXCJdO1xuXG5cdH07XG5cblx0dGhpcy5pbml0KCk7XG5cbn07XG5cblRyYW5zZm9ybUdpem1vU2NhbGUucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShUcmFuc2Zvcm1HaXptby5wcm90b3R5cGUpO1xuVHJhbnNmb3JtR2l6bW9TY2FsZS5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBUcmFuc2Zvcm1HaXptb1NjYWxlO1xuXG5leHBvcnQgZnVuY3Rpb24gVHJhbnNmb3JtQ29udHJvbHMoY2FtZXJhLCBkb21FbGVtZW50KSB7XG5cblx0Ly8gVE9ETzogTWFrZSBub24tdW5pZm9ybSBzY2FsZSBhbmQgcm90YXRlIHBsYXkgbmljZSBpbiBoaWVyYXJjaGllc1xuXHQvLyBUT0RPOiBBREQgUlhZWiBjb250b2xcblxuXHRUSFJFRS5PYmplY3QzRC5jYWxsKHRoaXMpO1xuXG5cdGRvbUVsZW1lbnQgPSAoZG9tRWxlbWVudCAhPT0gdW5kZWZpbmVkKSA/IGRvbUVsZW1lbnQgOiBkb2N1bWVudDtcblxuXHR0aGlzLm9iamVjdCA9IHVuZGVmaW5lZDtcblx0dGhpcy52aXNpYmxlID0gZmFsc2U7XG5cdHRoaXMudHJhbnNsYXRpb25TbmFwID0gbnVsbDtcblx0dGhpcy5yb3RhdGlvblNuYXAgPSBudWxsO1xuXHR0aGlzLnNwYWNlID0gXCJ3b3JsZFwiO1xuXHR0aGlzLnNpemUgPSAxO1xuXHR0aGlzLmF4aXMgPSBudWxsO1xuXG5cdHZhciBzY29wZSA9IHRoaXM7XG5cblx0dmFyIF9tb2RlID0gXCJ0cmFuc2xhdGVcIjtcblx0dmFyIF9kcmFnZ2luZyA9IGZhbHNlO1xuXHR2YXIgX2dpem1vID0ge1xuXG5cdFx0XCJ0cmFuc2xhdGVcIjogbmV3IFRyYW5zZm9ybUdpem1vVHJhbnNsYXRlKCksXG5cdFx0XCJyb3RhdGVcIjogbmV3IFRyYW5zZm9ybUdpem1vUm90YXRlKCksXG5cdFx0XCJzY2FsZVwiOiBuZXcgVHJhbnNmb3JtR2l6bW9TY2FsZSgpXG5cdH07XG5cblx0Zm9yICh2YXIgdHlwZSBpbiBfZ2l6bW8pIHtcblxuXHRcdHZhciBnaXptb09iaiA9IF9naXptb1t0eXBlXTtcblxuXHRcdGdpem1vT2JqLnZpc2libGUgPSAodHlwZSA9PT0gX21vZGUpO1xuXHRcdHRoaXMuYWRkKGdpem1vT2JqKTtcblxuXHR9XG5cblx0dmFyIGNoYW5nZUV2ZW50ID0geyB0eXBlOiBcImNoYW5nZVwiIH07XG5cdHZhciBtb3VzZURvd25FdmVudCA9IHsgdHlwZTogXCJtb3VzZURvd25cIiB9O1xuXHR2YXIgbW91c2VVcEV2ZW50ID0geyB0eXBlOiBcIm1vdXNlVXBcIiwgbW9kZTogX21vZGUgfTtcblx0dmFyIG9iamVjdENoYW5nZUV2ZW50ID0geyB0eXBlOiBcIm9iamVjdENoYW5nZVwiIH07XG5cblx0dmFyIHJheSA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcblx0dmFyIHBvaW50ZXJWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuXG5cdHZhciBwb2ludCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBvZmZzZXQgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdHZhciByb3RhdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBvZmZzZXRSb3RhdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBzY2FsZSA9IDE7XG5cblx0dmFyIGxvb2tBdE1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdHZhciBleWUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXG5cdHZhciB0ZW1wTWF0cml4ID0gbmV3IFRIUkVFLk1hdHJpeDQoKTtcblx0dmFyIHRlbXBWZWN0b3IgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgdGVtcFF1YXRlcm5pb24gPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuXHR2YXIgdW5pdFggPSBuZXcgVEhSRUUuVmVjdG9yMygxLCAwLCAwKTtcblx0dmFyIHVuaXRZID0gbmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCk7XG5cdHZhciB1bml0WiA9IG5ldyBUSFJFRS5WZWN0b3IzKDAsIDAsIDEpO1xuXG5cdHZhciBxdWF0ZXJuaW9uWFlaID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25YID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25ZID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25aID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblx0dmFyIHF1YXRlcm5pb25FID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKTtcblxuXHR2YXIgb2xkUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgb2xkU2NhbGUgPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgb2xkUm90YXRpb25NYXRyaXggPSBuZXcgVEhSRUUuTWF0cml4NCgpO1xuXG5cdHZhciBwYXJlbnRSb3RhdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdHZhciBwYXJlbnRTY2FsZSA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cblx0dmFyIHdvcmxkUG9zaXRpb24gPSBuZXcgVEhSRUUuVmVjdG9yMygpO1xuXHR2YXIgd29ybGRSb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXHR2YXIgd29ybGRSb3RhdGlvbk1hdHJpeCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG5cdHZhciBjYW1Qb3NpdGlvbiA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XG5cdHZhciBjYW1Sb3RhdGlvbiA9IG5ldyBUSFJFRS5FdWxlcigpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvblBvaW50ZXJEb3duLCBmYWxzZSk7XG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgb25Qb2ludGVyRG93biwgZmFsc2UpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvblBvaW50ZXJIb3ZlciwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Qb2ludGVySG92ZXIsIGZhbHNlKTtcblxuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuXHRkb21FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Qb2ludGVyTW92ZSwgZmFsc2UpO1xuXG5cdGRvbUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VvdXRcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgb25Qb2ludGVyVXAsIGZhbHNlKTtcblx0ZG9tRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hsZWF2ZVwiLCBvblBvaW50ZXJVcCwgZmFsc2UpO1xuXG5cdHRoaXMuZGlzcG9zZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvblBvaW50ZXJEb3duKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIG9uUG9pbnRlckRvd24pO1xuXG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uUG9pbnRlckhvdmVyKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgb25Qb2ludGVySG92ZXIpO1xuXG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG9uUG9pbnRlck1vdmUpO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBvblBvaW50ZXJNb3ZlKTtcblxuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Qb2ludGVyVXApO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3V0XCIsIG9uUG9pbnRlclVwKTtcblx0XHRkb21FbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCBvblBvaW50ZXJVcCk7XG5cdFx0ZG9tRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgb25Qb2ludGVyVXApO1xuXHRcdGRvbUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRvdWNobGVhdmVcIiwgb25Qb2ludGVyVXApO1xuXG5cdH07XG5cblx0dGhpcy5hdHRhY2ggPSBmdW5jdGlvbiAob2JqZWN0KSB7XG5cblx0XHR0aGlzLm9iamVjdCA9IG9iamVjdDtcblx0XHR0aGlzLnZpc2libGUgPSB0cnVlO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cblx0fTtcblxuXHR0aGlzLmRldGFjaCA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdHRoaXMub2JqZWN0ID0gdW5kZWZpbmVkO1xuXHRcdHRoaXMudmlzaWJsZSA9IGZhbHNlO1xuXHRcdHRoaXMuYXhpcyA9IG51bGw7XG5cblx0fTtcblxuXHR0aGlzLmdldE1vZGUgPSBmdW5jdGlvbiAoKSB7XG5cblx0XHRyZXR1cm4gX21vZGU7XG5cblx0fTtcblxuXHR0aGlzLnNldE1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xuXG5cdFx0X21vZGUgPSBtb2RlID8gbW9kZSA6IF9tb2RlO1xuXG5cdFx0aWYgKF9tb2RlID09PSBcInNjYWxlXCIpIHNjb3BlLnNwYWNlID0gXCJsb2NhbFwiO1xuXG5cdFx0Zm9yICh2YXIgdHlwZSBpbiBfZ2l6bW8pIF9naXptb1t0eXBlXS52aXNpYmxlID0gKHR5cGUgPT09IF9tb2RlKTtcblxuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0fTtcblxuXHR0aGlzLnNldFRyYW5zbGF0aW9uU25hcCA9IGZ1bmN0aW9uICh0cmFuc2xhdGlvblNuYXApIHtcblxuXHRcdHNjb3BlLnRyYW5zbGF0aW9uU25hcCA9IHRyYW5zbGF0aW9uU25hcDtcblxuXHR9O1xuXG5cdHRoaXMuc2V0Um90YXRpb25TbmFwID0gZnVuY3Rpb24gKHJvdGF0aW9uU25hcCkge1xuXG5cdFx0c2NvcGUucm90YXRpb25TbmFwID0gcm90YXRpb25TbmFwO1xuXG5cdH07XG5cblx0dGhpcy5zZXRTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcblxuXHRcdHNjb3BlLnNpemUgPSBzaXplO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0fTtcblxuXHR0aGlzLnNldFNwYWNlID0gZnVuY3Rpb24gKHNwYWNlKSB7XG5cblx0XHRzY29wZS5zcGFjZSA9IHNwYWNlO1xuXHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG5cblx0fTtcblxuXHR0aGlzLnVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcblxuXHRcdGlmIChzY29wZS5vYmplY3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuXG5cdFx0c2NvcGUub2JqZWN0LnVwZGF0ZU1hdHJpeFdvcmxkKCk7XG5cdFx0d29ybGRQb3NpdGlvbi5zZXRGcm9tTWF0cml4UG9zaXRpb24oc2NvcGUub2JqZWN0Lm1hdHJpeFdvcmxkKTtcblx0XHR3b3JsZFJvdGF0aW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbihzY29wZS5vYmplY3QubWF0cml4V29ybGQpKTtcblxuXHRcdGNhbWVyYS51cGRhdGVNYXRyaXhXb3JsZCgpO1xuXHRcdGNhbVBvc2l0aW9uLnNldEZyb21NYXRyaXhQb3NpdGlvbihjYW1lcmEubWF0cml4V29ybGQpO1xuXHRcdGNhbVJvdGF0aW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmV4dHJhY3RSb3RhdGlvbihjYW1lcmEubWF0cml4V29ybGQpKTtcblxuXHRcdHNjYWxlID0gd29ybGRQb3NpdGlvbi5kaXN0YW5jZVRvKGNhbVBvc2l0aW9uKSAvIDYgKiBzY29wZS5zaXplO1xuXHRcdHRoaXMucG9zaXRpb24uY29weSh3b3JsZFBvc2l0aW9uKTtcblx0XHR0aGlzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcblxuXHRcdGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSkge1xuXG5cdFx0XHRleWUuY29weShjYW1Qb3NpdGlvbikuc3ViKHdvcmxkUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuXG5cdFx0fSBlbHNlIGlmIChjYW1lcmEgaW5zdGFuY2VvZiBUSFJFRS5PcnRob2dyYXBoaWNDYW1lcmEpIHtcblxuXHRcdFx0ZXllLmNvcHkoY2FtUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuXG5cdFx0fVxuXG5cdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0X2dpem1vW19tb2RlXS51cGRhdGUod29ybGRSb3RhdGlvbiwgZXllKTtcblxuXHRcdH0gZWxzZSBpZiAoc2NvcGUuc3BhY2UgPT09IFwid29ybGRcIikge1xuXG5cdFx0XHRfZ2l6bW9bX21vZGVdLnVwZGF0ZShuZXcgVEhSRUUuRXVsZXIoKSwgZXllKTtcblxuXHRcdH1cblxuXHRcdF9naXptb1tfbW9kZV0uaGlnaGxpZ2h0KHNjb3BlLmF4aXMpO1xuXG5cdH07XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVySG92ZXIoZXZlbnQpIHtcblxuXHRcdGlmIChzY29wZS5vYmplY3QgPT09IHVuZGVmaW5lZCB8fCBfZHJhZ2dpbmcgPT09IHRydWUgfHwgKGV2ZW50LmJ1dHRvbiAhPT0gdW5kZWZpbmVkICYmIGV2ZW50LmJ1dHRvbiAhPT0gMCkpIHJldHVybjtcblxuXHRcdHZhciBwb2ludGVyID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG5cdFx0dmFyIGludGVyc2VjdCA9IGludGVyc2VjdE9iamVjdHMocG9pbnRlciwgX2dpem1vW19tb2RlXS5waWNrZXJzLmNoaWxkcmVuKTtcblxuXHRcdHZhciBheGlzID0gbnVsbDtcblxuXHRcdGlmIChpbnRlcnNlY3QpIHtcblxuXHRcdFx0YXhpcyA9IGludGVyc2VjdC5vYmplY3QubmFtZTtcblxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdH1cblxuXHRcdGlmIChzY29wZS5heGlzICE9PSBheGlzKSB7XG5cblx0XHRcdHNjb3BlLmF4aXMgPSBheGlzO1xuXHRcdFx0c2NvcGUudXBkYXRlKCk7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblxuXHRcdH1cblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVyRG93bihldmVudCkge1xuXG5cdFx0aWYgKHNjb3BlLm9iamVjdCA9PT0gdW5kZWZpbmVkIHx8IF9kcmFnZ2luZyA9PT0gdHJ1ZSB8fCAoZXZlbnQuYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgZXZlbnQuYnV0dG9uICE9PSAwKSkgcmV0dXJuO1xuXG5cdFx0dmFyIHBvaW50ZXIgPSBldmVudC5jaGFuZ2VkVG91Y2hlcyA/IGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdIDogZXZlbnQ7XG5cblx0XHRpZiAocG9pbnRlci5idXR0b24gPT09IDAgfHwgcG9pbnRlci5idXR0b24gPT09IHVuZGVmaW5lZCkge1xuXG5cdFx0XHR2YXIgaW50ZXJzZWN0ID0gaW50ZXJzZWN0T2JqZWN0cyhwb2ludGVyLCBfZ2l6bW9bX21vZGVdLnBpY2tlcnMuY2hpbGRyZW4pO1xuXG5cdFx0XHRpZiAoaW50ZXJzZWN0KSB7XG5cblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRcdFx0c2NvcGUuZGlzcGF0Y2hFdmVudChtb3VzZURvd25FdmVudCk7XG5cblx0XHRcdFx0c2NvcGUuYXhpcyA9IGludGVyc2VjdC5vYmplY3QubmFtZTtcblxuXHRcdFx0XHRzY29wZS51cGRhdGUoKTtcblxuXHRcdFx0XHRleWUuY29weShjYW1Qb3NpdGlvbikuc3ViKHdvcmxkUG9zaXRpb24pLm5vcm1hbGl6ZSgpO1xuXG5cdFx0XHRcdF9naXptb1tfbW9kZV0uc2V0QWN0aXZlUGxhbmUoc2NvcGUuYXhpcywgZXllKTtcblxuXHRcdFx0XHR2YXIgcGxhbmVJbnRlcnNlY3QgPSBpbnRlcnNlY3RPYmplY3RzKHBvaW50ZXIsIFtfZ2l6bW9bX21vZGVdLmFjdGl2ZVBsYW5lXSk7XG5cblx0XHRcdFx0aWYgKHBsYW5lSW50ZXJzZWN0KSB7XG5cblx0XHRcdFx0XHRvbGRQb3NpdGlvbi5jb3B5KHNjb3BlLm9iamVjdC5wb3NpdGlvbik7XG5cdFx0XHRcdFx0b2xkU2NhbGUuY29weShzY29wZS5vYmplY3Quc2NhbGUpO1xuXG5cdFx0XHRcdFx0b2xkUm90YXRpb25NYXRyaXguZXh0cmFjdFJvdGF0aW9uKHNjb3BlLm9iamVjdC5tYXRyaXgpO1xuXHRcdFx0XHRcdHdvcmxkUm90YXRpb25NYXRyaXguZXh0cmFjdFJvdGF0aW9uKHNjb3BlLm9iamVjdC5tYXRyaXhXb3JsZCk7XG5cblx0XHRcdFx0XHRwYXJlbnRSb3RhdGlvbk1hdHJpeC5leHRyYWN0Um90YXRpb24oc2NvcGUub2JqZWN0LnBhcmVudC5tYXRyaXhXb3JsZCk7XG5cdFx0XHRcdFx0cGFyZW50U2NhbGUuc2V0RnJvbU1hdHJpeFNjYWxlKHRlbXBNYXRyaXguZ2V0SW52ZXJzZShzY29wZS5vYmplY3QucGFyZW50Lm1hdHJpeFdvcmxkKSk7XG5cblx0XHRcdFx0XHRvZmZzZXQuY29weShwbGFuZUludGVyc2VjdC5wb2ludCk7XG5cblx0XHRcdFx0fVxuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRfZHJhZ2dpbmcgPSB0cnVlO1xuXG5cdH1cblxuXHRmdW5jdGlvbiBvblBvaW50ZXJNb3ZlKGV2ZW50KSB7XG5cblx0XHRpZiAoc2NvcGUub2JqZWN0ID09PSB1bmRlZmluZWQgfHwgc2NvcGUuYXhpcyA9PT0gbnVsbCB8fCBfZHJhZ2dpbmcgPT09IGZhbHNlIHx8IChldmVudC5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBldmVudC5idXR0b24gIT09IDApKSByZXR1cm47XG5cblx0XHR2YXIgcG9pbnRlciA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcblxuXHRcdHZhciBwbGFuZUludGVyc2VjdCA9IGludGVyc2VjdE9iamVjdHMocG9pbnRlciwgW19naXptb1tfbW9kZV0uYWN0aXZlUGxhbmVdKTtcblxuXHRcdGlmIChwbGFuZUludGVyc2VjdCA9PT0gZmFsc2UpIHJldHVybjtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cblx0XHRwb2ludC5jb3B5KHBsYW5lSW50ZXJzZWN0LnBvaW50KTtcblxuXHRcdGlmIChfbW9kZSA9PT0gXCJ0cmFuc2xhdGVcIikge1xuXG5cdFx0XHRwb2ludC5zdWIob2Zmc2V0KTtcblx0XHRcdHBvaW50Lm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblxuXHRcdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJYXCIpID09PSAtIDEpIHBvaW50LnggPSAwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJZXCIpID09PSAtIDEpIHBvaW50LnkgPSAwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJaXCIpID09PSAtIDEpIHBvaW50LnogPSAwO1xuXG5cdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NChvbGRSb3RhdGlvbk1hdHJpeCk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkob2xkUG9zaXRpb24pO1xuXHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uYWRkKHBvaW50KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwid29ybGRcIiB8fCBzY29wZS5heGlzLnNlYXJjaChcIlhZWlwiKSAhPT0gLSAxKSB7XG5cblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWFwiKSA9PT0gLSAxKSBwb2ludC54ID0gMDtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWVwiKSA9PT0gLSAxKSBwb2ludC55ID0gMDtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWlwiKSA9PT0gLSAxKSBwb2ludC56ID0gMDtcblxuXHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHBhcmVudFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmNvcHkob2xkUG9zaXRpb24pO1xuXHRcdFx0XHRzY29wZS5vYmplY3QucG9zaXRpb24uYWRkKHBvaW50KTtcblxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2NvcGUudHJhbnNsYXRpb25TbmFwICE9PSBudWxsKSB7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5wb3NpdGlvbi5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMuc2VhcmNoKFwiWFwiKSAhPT0gLSAxKSBzY29wZS5vYmplY3QucG9zaXRpb24ueCA9IE1hdGgucm91bmQoc2NvcGUub2JqZWN0LnBvc2l0aW9uLnggLyBzY29wZS50cmFuc2xhdGlvblNuYXApICogc2NvcGUudHJhbnNsYXRpb25TbmFwO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcy5zZWFyY2goXCJZXCIpICE9PSAtIDEpIHNjb3BlLm9iamVjdC5wb3NpdGlvbi55ID0gTWF0aC5yb3VuZChzY29wZS5vYmplY3QucG9zaXRpb24ueSAvIHNjb3BlLnRyYW5zbGF0aW9uU25hcCkgKiBzY29wZS50cmFuc2xhdGlvblNuYXA7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzLnNlYXJjaChcIlpcIikgIT09IC0gMSkgc2NvcGUub2JqZWN0LnBvc2l0aW9uLnogPSBNYXRoLnJvdW5kKHNjb3BlLm9iamVjdC5wb3NpdGlvbi56IC8gc2NvcGUudHJhbnNsYXRpb25TbmFwKSAqIHNjb3BlLnRyYW5zbGF0aW9uU25hcDtcblxuXHRcdFx0XHRpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdFx0c2NvcGUub2JqZWN0LnBvc2l0aW9uLmFwcGx5TWF0cml4NCh3b3JsZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdH1cblxuXHRcdH0gZWxzZSBpZiAoX21vZGUgPT09IFwic2NhbGVcIikge1xuXG5cdFx0XHRwb2ludC5zdWIob2Zmc2V0KTtcblx0XHRcdHBvaW50Lm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblxuXHRcdFx0aWYgKHNjb3BlLnNwYWNlID09PSBcImxvY2FsXCIpIHtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJYWVpcIikge1xuXG5cdFx0XHRcdFx0c2NhbGUgPSAxICsgKChwb2ludC55KSAvIE1hdGgubWF4KG9sZFNjYWxlLngsIG9sZFNjYWxlLnksIG9sZFNjYWxlLnopKTtcblxuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5zY2FsZS54ID0gb2xkU2NhbGUueCAqIHNjYWxlO1xuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5zY2FsZS55ID0gb2xkU2NhbGUueSAqIHNjYWxlO1xuXHRcdFx0XHRcdHNjb3BlLm9iamVjdC5zY2FsZS56ID0gb2xkU2NhbGUueiAqIHNjYWxlO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRwb2ludC5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHdvcmxkUm90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlhcIikgc2NvcGUub2JqZWN0LnNjYWxlLnggPSBvbGRTY2FsZS54ICogKDEgKyBwb2ludC54IC8gb2xkU2NhbGUueCk7XG5cdFx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWVwiKSBzY29wZS5vYmplY3Quc2NhbGUueSA9IG9sZFNjYWxlLnkgKiAoMSArIHBvaW50LnkgLyBvbGRTY2FsZS55KTtcblx0XHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJaXCIpIHNjb3BlLm9iamVjdC5zY2FsZS56ID0gb2xkU2NhbGUueiAqICgxICsgcG9pbnQueiAvIG9sZFNjYWxlLnopO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmIChfbW9kZSA9PT0gXCJyb3RhdGVcIikge1xuXG5cdFx0XHRwb2ludC5zdWIod29ybGRQb3NpdGlvbik7XG5cdFx0XHRwb2ludC5tdWx0aXBseShwYXJlbnRTY2FsZSk7XG5cdFx0XHR0ZW1wVmVjdG9yLmNvcHkob2Zmc2V0KS5zdWIod29ybGRQb3NpdGlvbik7XG5cdFx0XHR0ZW1wVmVjdG9yLm11bHRpcGx5KHBhcmVudFNjYWxlKTtcblxuXHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiRVwiKSB7XG5cblx0XHRcdFx0cG9pbnQuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZShsb29rQXRNYXRyaXgpKTtcblx0XHRcdFx0dGVtcFZlY3Rvci5hcHBseU1hdHJpeDQodGVtcE1hdHJpeC5nZXRJbnZlcnNlKGxvb2tBdE1hdHJpeCkpO1xuXG5cdFx0XHRcdHJvdGF0aW9uLnNldChNYXRoLmF0YW4yKHBvaW50LnosIHBvaW50LnkpLCBNYXRoLmF0YW4yKHBvaW50LngsIHBvaW50LnopLCBNYXRoLmF0YW4yKHBvaW50LnksIHBvaW50LngpKTtcblx0XHRcdFx0b2Zmc2V0Um90YXRpb24uc2V0KE1hdGguYXRhbjIodGVtcFZlY3Rvci56LCB0ZW1wVmVjdG9yLnkpLCBNYXRoLmF0YW4yKHRlbXBWZWN0b3IueCwgdGVtcFZlY3Rvci56KSwgTWF0aC5hdGFuMih0ZW1wVmVjdG9yLnksIHRlbXBWZWN0b3IueCkpO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh0ZW1wTWF0cml4LmdldEludmVyc2UocGFyZW50Um90YXRpb25NYXRyaXgpKTtcblxuXHRcdFx0XHRxdWF0ZXJuaW9uRS5zZXRGcm9tQXhpc0FuZ2xlKGV5ZSwgcm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopO1xuXHRcdFx0XHRxdWF0ZXJuaW9uWFlaLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh3b3JsZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uRSk7XG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YWVopO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9IGVsc2UgaWYgKHNjb3BlLmF4aXMgPT09IFwiWFlaRVwiKSB7XG5cblx0XHRcdFx0cXVhdGVybmlvbkUuc2V0RnJvbUV1bGVyKHBvaW50LmNsb25lKCkuY3Jvc3ModGVtcFZlY3Rvcikubm9ybWFsaXplKCkpOyAvLyByb3RhdGlvbiBheGlzXG5cblx0XHRcdFx0dGVtcFF1YXRlcm5pb24uc2V0RnJvbVJvdGF0aW9uTWF0cml4KHRlbXBNYXRyaXguZ2V0SW52ZXJzZShwYXJlbnRSb3RhdGlvbk1hdHJpeCkpO1xuXHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHF1YXRlcm5pb25FLCAtIHBvaW50LmNsb25lKCkuYW5nbGVUbyh0ZW1wVmVjdG9yKSk7XG5cdFx0XHRcdHF1YXRlcm5pb25YWVouc2V0RnJvbVJvdGF0aW9uTWF0cml4KHdvcmxkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YKTtcblx0XHRcdFx0dGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblhZWik7XG5cblx0XHRcdFx0c2NvcGUub2JqZWN0LnF1YXRlcm5pb24uY29weSh0ZW1wUXVhdGVybmlvbik7XG5cblx0XHRcdH0gZWxzZSBpZiAoc2NvcGUuc3BhY2UgPT09IFwibG9jYWxcIikge1xuXG5cdFx0XHRcdHBvaW50LmFwcGx5TWF0cml4NCh0ZW1wTWF0cml4LmdldEludmVyc2Uod29ybGRSb3RhdGlvbk1hdHJpeCkpO1xuXG5cdFx0XHRcdHRlbXBWZWN0b3IuYXBwbHlNYXRyaXg0KHRlbXBNYXRyaXguZ2V0SW52ZXJzZSh3b3JsZFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0cm90YXRpb24uc2V0KE1hdGguYXRhbjIocG9pbnQueiwgcG9pbnQueSksIE1hdGguYXRhbjIocG9pbnQueCwgcG9pbnQueiksIE1hdGguYXRhbjIocG9pbnQueSwgcG9pbnQueCkpO1xuXHRcdFx0XHRvZmZzZXRSb3RhdGlvbi5zZXQoTWF0aC5hdGFuMih0ZW1wVmVjdG9yLnosIHRlbXBWZWN0b3IueSksIE1hdGguYXRhbjIodGVtcFZlY3Rvci54LCB0ZW1wVmVjdG9yLnopLCBNYXRoLmF0YW4yKHRlbXBWZWN0b3IueSwgdGVtcFZlY3Rvci54KSk7XG5cblx0XHRcdFx0cXVhdGVybmlvblhZWi5zZXRGcm9tUm90YXRpb25NYXRyaXgob2xkUm90YXRpb25NYXRyaXgpO1xuXG5cdFx0XHRcdGlmIChzY29wZS5yb3RhdGlvblNuYXAgIT09IG51bGwpIHtcblxuXHRcdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUodW5pdFgsIE1hdGgucm91bmQoKHJvdGF0aW9uLnggLSBvZmZzZXRSb3RhdGlvbi54KSAvIHNjb3BlLnJvdGF0aW9uU25hcCkgKiBzY29wZS5yb3RhdGlvblNuYXApO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25ZLnNldEZyb21BeGlzQW5nbGUodW5pdFksIE1hdGgucm91bmQoKHJvdGF0aW9uLnkgLSBvZmZzZXRSb3RhdGlvbi55KSAvIHNjb3BlLnJvdGF0aW9uU25hcCkgKiBzY29wZS5yb3RhdGlvblNuYXApO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25aLnNldEZyb21BeGlzQW5nbGUodW5pdFosIE1hdGgucm91bmQoKHJvdGF0aW9uLnogLSBvZmZzZXRSb3RhdGlvbi56KSAvIHNjb3BlLnJvdGF0aW9uU25hcCkgKiBzY29wZS5yb3RhdGlvblNuYXApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRxdWF0ZXJuaW9uWC5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRYLCByb3RhdGlvbi54IC0gb2Zmc2V0Um90YXRpb24ueCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblkuc2V0RnJvbUF4aXNBbmdsZSh1bml0WSwgcm90YXRpb24ueSAtIG9mZnNldFJvdGF0aW9uLnkpO1xuXHRcdFx0XHRcdHF1YXRlcm5pb25aLnNldEZyb21BeGlzQW5nbGUodW5pdFosIHJvdGF0aW9uLnogLSBvZmZzZXRSb3RhdGlvbi56KTtcblxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWFwiKSBxdWF0ZXJuaW9uWFlaLm11bHRpcGx5UXVhdGVybmlvbnMocXVhdGVybmlvblhZWiwgcXVhdGVybmlvblgpO1xuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJZXCIpIHF1YXRlcm5pb25YWVoubXVsdGlwbHlRdWF0ZXJuaW9ucyhxdWF0ZXJuaW9uWFlaLCBxdWF0ZXJuaW9uWSk7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlpcIikgcXVhdGVybmlvblhZWi5tdWx0aXBseVF1YXRlcm5pb25zKHF1YXRlcm5pb25YWVosIHF1YXRlcm5pb25aKTtcblxuXHRcdFx0XHRzY29wZS5vYmplY3QucXVhdGVybmlvbi5jb3B5KHF1YXRlcm5pb25YWVopO1xuXG5cdFx0XHR9IGVsc2UgaWYgKHNjb3BlLnNwYWNlID09PSBcIndvcmxkXCIpIHtcblxuXHRcdFx0XHRyb3RhdGlvbi5zZXQoTWF0aC5hdGFuMihwb2ludC56LCBwb2ludC55KSwgTWF0aC5hdGFuMihwb2ludC54LCBwb2ludC56KSwgTWF0aC5hdGFuMihwb2ludC55LCBwb2ludC54KSk7XG5cdFx0XHRcdG9mZnNldFJvdGF0aW9uLnNldChNYXRoLmF0YW4yKHRlbXBWZWN0b3IueiwgdGVtcFZlY3Rvci55KSwgTWF0aC5hdGFuMih0ZW1wVmVjdG9yLngsIHRlbXBWZWN0b3IueiksIE1hdGguYXRhbjIodGVtcFZlY3Rvci55LCB0ZW1wVmVjdG9yLngpKTtcblxuXHRcdFx0XHR0ZW1wUXVhdGVybmlvbi5zZXRGcm9tUm90YXRpb25NYXRyaXgodGVtcE1hdHJpeC5nZXRJbnZlcnNlKHBhcmVudFJvdGF0aW9uTWF0cml4KSk7XG5cblx0XHRcdFx0aWYgKHNjb3BlLnJvdGF0aW9uU25hcCAhPT0gbnVsbCkge1xuXG5cdFx0XHRcdFx0cXVhdGVybmlvblguc2V0RnJvbUF4aXNBbmdsZSh1bml0WCwgTWF0aC5yb3VuZCgocm90YXRpb24ueCAtIG9mZnNldFJvdGF0aW9uLngpIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblkuc2V0RnJvbUF4aXNBbmdsZSh1bml0WSwgTWF0aC5yb3VuZCgocm90YXRpb24ueSAtIG9mZnNldFJvdGF0aW9uLnkpIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0WiwgTWF0aC5yb3VuZCgocm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopIC8gc2NvcGUucm90YXRpb25TbmFwKSAqIHNjb3BlLnJvdGF0aW9uU25hcCk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdHF1YXRlcm5pb25YLnNldEZyb21BeGlzQW5nbGUodW5pdFgsIHJvdGF0aW9uLnggLSBvZmZzZXRSb3RhdGlvbi54KTtcblx0XHRcdFx0XHRxdWF0ZXJuaW9uWS5zZXRGcm9tQXhpc0FuZ2xlKHVuaXRZLCByb3RhdGlvbi55IC0gb2Zmc2V0Um90YXRpb24ueSk7XG5cdFx0XHRcdFx0cXVhdGVybmlvblouc2V0RnJvbUF4aXNBbmdsZSh1bml0Wiwgcm90YXRpb24ueiAtIG9mZnNldFJvdGF0aW9uLnopO1xuXG5cdFx0XHRcdH1cblxuXHRcdFx0XHRxdWF0ZXJuaW9uWFlaLnNldEZyb21Sb3RhdGlvbk1hdHJpeCh3b3JsZFJvdGF0aW9uTWF0cml4KTtcblxuXHRcdFx0XHRpZiAoc2NvcGUuYXhpcyA9PT0gXCJYXCIpIHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YKTtcblx0XHRcdFx0aWYgKHNjb3BlLmF4aXMgPT09IFwiWVwiKSB0ZW1wUXVhdGVybmlvbi5tdWx0aXBseVF1YXRlcm5pb25zKHRlbXBRdWF0ZXJuaW9uLCBxdWF0ZXJuaW9uWSk7XG5cdFx0XHRcdGlmIChzY29wZS5heGlzID09PSBcIlpcIikgdGVtcFF1YXRlcm5pb24ubXVsdGlwbHlRdWF0ZXJuaW9ucyh0ZW1wUXVhdGVybmlvbiwgcXVhdGVybmlvblopO1xuXG5cdFx0XHRcdHRlbXBRdWF0ZXJuaW9uLm11bHRpcGx5UXVhdGVybmlvbnModGVtcFF1YXRlcm5pb24sIHF1YXRlcm5pb25YWVopO1xuXG5cdFx0XHRcdHNjb3BlLm9iamVjdC5xdWF0ZXJuaW9uLmNvcHkodGVtcFF1YXRlcm5pb24pO1xuXG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcblx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KG9iamVjdENoYW5nZUV2ZW50KTtcblxuXHR9XG5cblx0ZnVuY3Rpb24gb25Qb2ludGVyVXAoZXZlbnQpIHtcblxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgTW91c2VFdmVudCBvbiBtb2JpbGVcblxuXHRcdGlmIChldmVudC5idXR0b24gIT09IHVuZGVmaW5lZCAmJiBldmVudC5idXR0b24gIT09IDApIHJldHVybjtcblxuXHRcdGlmIChfZHJhZ2dpbmcgJiYgKHNjb3BlLmF4aXMgIT09IG51bGwpKSB7XG5cblx0XHRcdG1vdXNlVXBFdmVudC5tb2RlID0gX21vZGU7XG5cdFx0XHRzY29wZS5kaXNwYXRjaEV2ZW50KG1vdXNlVXBFdmVudCk7XG5cblx0XHR9XG5cblx0XHRfZHJhZ2dpbmcgPSBmYWxzZTtcblxuXHRcdGlmICgnVG91Y2hFdmVudCcgaW4gd2luZG93ICYmIGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xuXG5cdFx0XHQvLyBGb3JjZSBcInJvbGxvdmVyXCJcblxuXHRcdFx0c2NvcGUuYXhpcyA9IG51bGw7XG5cdFx0XHRzY29wZS51cGRhdGUoKTtcblx0XHRcdHNjb3BlLmRpc3BhdGNoRXZlbnQoY2hhbmdlRXZlbnQpO1xuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0b25Qb2ludGVySG92ZXIoZXZlbnQpO1xuXG5cdFx0fVxuXG5cdH1cblxuXHRmdW5jdGlvbiBpbnRlcnNlY3RPYmplY3RzKHBvaW50ZXIsIG9iamVjdHMpIHtcblxuXHRcdHZhciByZWN0ID0gZG9tRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgeCA9IChwb2ludGVyLmNsaWVudFggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aDtcblx0XHR2YXIgeSA9IChwb2ludGVyLmNsaWVudFkgLSByZWN0LnRvcCkgLyByZWN0LmhlaWdodDtcblxuXHRcdHBvaW50ZXJWZWN0b3Iuc2V0KCh4ICogMikgLSAxLCAtICh5ICogMikgKyAxKTtcblx0XHRyYXkuc2V0RnJvbUNhbWVyYShwb2ludGVyVmVjdG9yLCBjYW1lcmEpO1xuXG5cdFx0dmFyIGludGVyc2VjdGlvbnMgPSByYXkuaW50ZXJzZWN0T2JqZWN0cyhvYmplY3RzLCB0cnVlKTtcblx0XHRyZXR1cm4gaW50ZXJzZWN0aW9uc1swXSA/IGludGVyc2VjdGlvbnNbMF0gOiBmYWxzZTtcblxuXHR9XG5cbn07XG5cblRyYW5zZm9ybUNvbnRyb2xzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoVEhSRUUuT2JqZWN0M0QucHJvdG90eXBlKTtcblRyYW5zZm9ybUNvbnRyb2xzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRyYW5zZm9ybUNvbnRyb2xzO1xuXG4iLCIvKlxyXG5BZGQgZXZlbnRzIHRvIGEgY2xhc3Mgb3Igb2JqZWN0OlxyXG4gICAgY2xhc3MgTXlDbGFzcyB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1YnNjcmliZU1peGluKHRoaXMpOyAvLyBBZGQgdGhlIG1peGluZyBmdW5jdGlvbnMgdG8gdGhlIGNsYXNzXHJcbiAgICAgICAgICAgIC4uLlxyXG4gICAgICAgICAgICB0aGlzLnRyaWdnZXIoJ3NvbWV0aGluZycsIHsgb3duZXI6IHRoaXMsIGNvbnRlbnQ6ICd0aGF0J30pOyAvLyB0cmlnZ2VyIGFuIGV2ZW50IHBhc3Npbmcgc29tZSBhcmd1bWVudHNcclxuXHJcblN1YnNjcmliZSB0byBldmVudHMgYnkgZG9pbmc6XHJcbiAgICBteUNsYXNzLm9uKCdzb21ldGhpbmcnLCAoYXJncykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGFyZ3MpO1xyXG4gICAgfSk7XHJcblxyXG5VbnN1YnNjcmliZSB0byBldmVudHMgYnkgZG9pbmc6XHJcbiAgICBteUNsYXNzLm9mZignc29tZXRoaW5nJyk7XHJcblxyXG5vciBtb3JlIHByZXNpY2VsbHk6XHJcbiAgICBteUNsYXNzLm9mZignc29tZXRoaW5nJywgKGFyZ3MpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhcmdzKTtcclxuICAgIH0pO1xyXG5cclxuVW5zdWJzY3JpYmUgdG8gYWxsIGV2ZW50cyBieTpcclxuICAgIG15Q2xhc3Mub2ZmQWxsKCk7XHJcbiovXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3Vic2NyaWJlTWl4aW4gKHRhcmdldCkge1xyXG4gICAgdmFyIGxpc3RlbmVycyA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih0YXJnZXQsIHtcclxuXHJcbiAgICAgICAgb24gKHR5cGUsIGYpIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0ge307XHJcbiAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcclxuICAgICAgICAgICAgbGlzdGVuZXJzLmFkZChsaXN0ZW5lcik7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgb2ZmICh0eXBlLCBmKSB7XHJcbiAgICAgICAgICAgIGlmIChmKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdGVuZXIgPSB7fTtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyW3R5cGVdID0gZjtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBsaXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgT2JqZWN0LmtleXMoaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGtleSA9PT0gdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIG9mZkFsbCAoKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVycy5jbGVhcigpO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHRyaWdnZXIgKGV2ZW50LCAuLi5kYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGxpc3RlbmVyIG9mIGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcltldmVudF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcltldmVudF0oLi4uZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBsaXN0U3Vic2NyaXB0aW9ucyAoKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgbGlzdGVuZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbiJdfQ==
