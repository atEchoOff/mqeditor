/***************************
 * Commands and Operators.
 **************************/
var SVG_SYMBOLS = {
  'sqrt': {
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 32 54">' +
        '<path d="M0 33 L7 27 L12.5 47 L13 47 L30 0 L32 0 L13 54 L11 54 L4.5 31 L0 33" />' +
      '</svg>'
  },
  '|': {
    width: '.4em',
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 10 54">' +
        '<path d="M4.4 0 L4.4 54 L5.6 54 L5.6 0" />' +
      '</svg>'
  },
  '[': {
    width: '.55em',
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 11 24">' +
        '<path d="M8 0 L3 0 L3 24 L8 24 L8 23 L4 23 L4 1 L8 1" />' +
      '</svg>'
  },
  ']': {
    width: '.55em',
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 11 24">' +
        '<path d="M3 0 L8 0 L8 24 L3 24 L3 23 L7 23 L7 1 L3 1" />' +
      '</svg>'
  },
  '(': {
    width: '.55em',
    html:
      '<svg preserveAspectRatio="none" viewBox="3 0 106 186">' +
        '<path d="M85 0 A61 101 0 0 0 85 186 L75 186 A75 101 0 0 1 75 0" />' +
      '</svg>'
  },
  ')': {
    width: '.55em',
    html:
      '<svg preserveAspectRatio="none" viewBox="3 0 106 186">' +
        '<path d="M24 0 A61 101 0 0 1 24 186 L34 186 A75 101 0 0 0 34 0" />' +
      '</svg>'
  },
  '{': {
    width: '.7em',
    html:
      '<svg preserveAspectRatio="none" viewBox="10 0 210 350">' +
        '<path d="M170 0 L170 6 A47 52 0 0 0 123 60 L123 127 A35 48 0 0 1 88 175 A35 48 0 0 1 123 223 L123 290 A47 52 0 0 0 170 344 L170 350 L160 350 A58 49 0 0 1 102 301 L103 220 A45 40 0 0 0 58 180 L58 170 A45 40 0 0 0 103 130 L103 49 A58 49 0 0 1 161 0" />' +
      '</svg>'
  },
  '}': {
    width: '.7em',
    html:
      '<svg preserveAspectRatio="none" viewBox="10 0 210 350">' +
        '<path d="M60 0 L60 6 A47 52 0 0 1 107 60 L107 127 A35 48 0 0 0 142 175 A35 48 0 0 0 107 223 L107 290 A47 52 0 0 1 60 344 L60 350 L70 350 A58 49 0 0 0 128 301 L127 220 A45 40 0 0 1 172 180 L172 170 A45 40 0 0 1 127 130 L127 49 A58 49 0 0 0 70 0" />' +
      '</svg>'
  },
  '&#8741;': {
    width: '.7em',
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 10 54">' +
        '<path d="M3.2 0 L3.2 54 L4 54 L4 0 M6.8 0 L6.8 54 L6 54 L6 0" />' +
      '</svg>'
  },
  '&lang;': {
    width: '.55em',
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 10 54">' +
        '<path d="M6.8 0 L3.2 27 L6.8 54 L7.8 54 L4.2 27 L7.8 0" />' +
      '</svg>'
  },
  '&rang;': {
    width: '.55em',
    html:
      '<svg preserveAspectRatio="none" viewBox="0 0 10 54">' +
        '<path d="M3.2 0 L6.8 27 L3.2 54 L2.2 54 L5.8 27 L2.2 0" />' +
      '</svg>'
  },
  '&#10627;': {
    width: '.55em',
    html:
    '<svg preserveAspectRatio="none" viewBox="-50 -350 1027 1864"><path d="M100 582Q100 601 133 605Q395 633 395 859V1172Q395 1514 786 1514Q827 1514 827 1492Q827 1472 809.5 1469.0Q792 1466 765 1463V-299Q792 -302 809.5 -305.0Q827 -308 827 -328Q827 -350 786 -350Q395 -350 395 -8V305Q395 531 133 559Q100 563 100 582ZM290 582Q394 552 438 483Q477 421 477 309V32Q477 -228 683 -286V1450Q477 1392 477 1132V855Q477 743 438 681Q394 612 290 582Z" /></svg>'
  },
  '&#10628;': {
    width: '.55em',
    html:
    '<svg preserveAspectRatio="none" viewBox="6 -350 1027 1864"><path d="M156 -328Q156 -308 173.5 -305.0Q191 -302 218 -299V1463Q191 1466 173.5 1469.0Q156 1472 156 1492Q156 1514 197 1514Q588 1514 588 1172V859Q588 633 850 605Q883 601 883 582Q883 563 850 559Q588 531 588 305V-8Q588 -350 197 -350Q156 -350 156 -328ZM300 -286Q506 -228 506 32V309Q506 421 545 483Q589 552 693 582Q589 612 545 681Q506 743 506 855V1132Q506 1392 300 1450Z" /></svg>'
  },
  '&#12314;': {
    width: '.55em',
    html:
    '<svg preserveAspectRatio="none" viewBox="-38 -350 759 1864"><path d="M112 -350V1514H503Q571 1514 571 1474Q571 1433 503 1433H394V-268H503Q571 -268 571 -309Q571 -350 503 -350ZM193 -268H313V1433H193Z" /></svg>'
  },
  '&#12315;': {
    width: '.55em',
    html:
    '<svg preserveAspectRatio="none" viewBox="-39 -350 759 1864"><path d="M111 -309Q111 -268 179 -268H288V1433H179Q111 1433 111 1474Q111 1514 179 1514H570V-350H179Q111 -350 111 -309ZM369 -268H489V1433H369Z" /></svg>'
  },
  '&#65080;': {
    html:
    '<svg preserveAspectRatio="none" viewBox="92 -241 1864 727"><path d="M1956 -200Q1956 -241 1934 -241Q1915 -241 1911 -223Q1902 -69 1817 14Q1774 56 1703 68Q1669 73 1574 73H1297Q1208 73 1165 94Q1069 141 1024 296Q979 141 883 94Q841 73 752 73H475Q380 73 346 68Q275 56 232 14Q147 -69 138 -223Q134 -241 115 -241Q92 -241 92 -200Q92 -26 170 85Q221 158 286 178Q328 191 435 191H748Q865 191 932 266Q993 335 1002 453Q1004 486 1024 486Q1042 486 1045.0 468.0Q1048 450 1049 433Q1080 191 1301 191H1614Q1721 191 1763 178Q1828 158 1879 85Q1956 -24 1956 -200Z" /></svg>'
  }
};

// Please see the jaltekruse fork of mathquill, the lrn/matrix branch has matrix support!
// https://github.com/jaltekruse/mathquill/blob/lrn/matrix/src/commands/math/commands.js
// Thank you to laughinghan (Han Seoul-Oh) for writing this :)
var scale, // = function(jQ, x, y) { ... }
//will use a CSS 2D transform to scale the jQuery-wrapped HTML elements,
//or the filter matrix transform fallback for IE 5.5-8, or gracefully degrade to
//increasing the fontSize to match the vertical Y scaling factor.

//ideas from http://github.com/louisremi/jquery.transform.js
//see also http://msdn.microsoft.com/en-us/library/ms533014(v=vs.85).aspx

  forceIERedraw = noop,
  div = document.createElement('div'),
  div_style = div.style,
  transformPropNames = {
    transform:1,
    WebkitTransform:1,
    MozTransform:1,
    OTransform:1,
    msTransform:1
  },
  transformPropName;

for (var prop in transformPropNames) {
  if (prop in div_style) {
    transformPropName = prop;
    break;
  }
}

if (transformPropName) {
  scale = function(jQ, x, y) {
    jQ.css(transformPropName, 'scale('+x+','+y+')');
  };
}
else if ('filter' in div_style) { //IE 6, 7, & 8 fallback, see https://github.com/laughinghan/mathquill/wiki/Transforms
  forceIERedraw = function(el){ el.className = el.className; };
  scale = function(jQ, x, y) { //NOTE: assumes y > x
    x /= (1+(y-1)/2);
    jQ.css('fontSize', y + 'em');
    if (!jQ.hasClass('mq-matrixed-container')) {
      jQ.addClass('mq-matrixed-container')
      .wrapInner('<span class="mq-matrixed"></span>');
    }
    var innerjQ = jQ.children()
    .css('filter', 'progid:DXImageTransform.Microsoft'
        + '.Matrix(M11=' + x + ",SizingMethod='auto expand')"
    );
    function calculateMarginRight() {
      jQ.css('marginRight', (innerjQ.width()-1)*(x-1)/x + 'px');
    }
    calculateMarginRight();
    var intervalId = setInterval(calculateMarginRight);
    $(window).load(function() {
      clearTimeout(intervalId);
      calculateMarginRight();
    });
  };
}
else {
  scale = function(jQ, x, y) {
    jQ.css('fontSize', y + 'em');
  };
}

var Style = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, tagName, attrs, ariaLabel, opts) {
    super_.init.call(this, ctrlSeq, '<'+tagName+' '+attrs+'>&0</'+tagName+'>');
    _.ariaLabel = ariaLabel || ctrlSeq.replace(/^\\/, '');
    _.mathspeakTemplate = ['Start' + _.ariaLabel + ',', 'End' + _.ariaLabel];
    // In most cases, mathspeak should announce the start and end of style blocks.
    // There is one exception currently (mathrm).
    _.shouldNotSpeakDelimiters = opts && opts.shouldNotSpeakDelimiters;
  };
  _.mathspeak = function(opts) {
    if (
      !this.shouldNotSpeakDelimiters ||
      (opts && opts.ignoreShorthand)
    ) {
      return super_.mathspeak.call(this);
    }
    return this.foldChildren('', function(speech, block) {
      return speech + ' ' + block.mathspeak(opts);
    }).trim();
  };
});

//fonts
LatexCmds.mathrm = P(Style, function(_, super_) {
  _.init = function() {
    super_.init.call(this, '\\mathrm', 'span', 'class="mq-roman mq-font"', 'Roman Font', { shouldNotSpeakDelimiters: true });
  };
  _.isTextBlock = function() {
    return true;
  };
});

LatexCmds.aligned = bind(Style, '\\aligned', 'span', 'class="mq-aligned"', '');
LatexCmds.var = LatexCmds.let = bind(Style, '\\var', 'span', 'class="mq-sympy-variable"', '');

LatexCmds.fnt = LatexCmds.vect = bind(Style, '\\fnt', 'span', 'class="mq-bold mq-font"', 'Vector');
LatexCmds.vecf = bind(Style, '\\vecf', 'span', 'class="mq-bold mq-italic mq-font"', 'Vector');
LatexCmds.mathit = bind(Style, '\\mathit', 'i', 'class="mq-font"', 'Italic Font');
LatexCmds.mathbf = bind(Style, '\\mathbf', 'b', 'class="mq-font"', 'Bold Font');
LatexCmds.mathsf = bind(Style, '\\mathsf', 'span', 'class="mq-sans-serif mq-font"', 'Serif Font');
LatexCmds.mathtt = bind(Style, '\\mathtt', 'span', 'class="mq-monospace mq-font"', 'Math Text');

LatexCmds.tag = bind(Style, '\\tag', 'span', 'class="mq-tag"', '');
//text-decoration
LatexCmds.underline = bind(Style, '\\underline', 'span', 'class="mq-non-leaf mq-underline"', 'Underline');
LatexCmds.overline = LatexCmds.bar = bind(Style, '\\overline', 'span', 'class="mq-non-leaf mq-overline"', 'Overline');
LatexCmds.overrightarrow = bind(Style, '\\overrightarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-right"', 'Over Right Arrow');
LatexCmds.overleftarrow = bind(Style, '\\overleftarrow', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-left"', 'Over Left Arrow');
LatexCmds.overleftrightarrow = bind(Style, '\\overleftrightarrow ', 'span', 'class="mq-non-leaf mq-overarrow mq-arrow-leftright"', 'Over Left and Right Arrow');
LatexCmds.overarc = bind(Style, '\\overarc', 'span', 'class="mq-non-leaf mq-overarc"', 'Over Arc');
LatexCmds.dot = P(MathCommand, function(_, super_) {
    _.init = function() {
        super_.init.call(this, '\\dot', '<span class="mq-non-leaf"><span class="mq-dot-recurring-inner">'
            + '<span class="mq-dot-recurring">&#x2d9;</span>'
            + '<span class="mq-empty-box">&0</span>'
            + '</span></span>'
        );
    };
});

// `\textcolor{color}{math}` will apply a color to the given math content, where
// `color` is any valid CSS Color Value (see [SitePoint docs][] (recommended),
// [Mozilla docs][], or [W3C spec][]).
//
// [SitePoint docs]: http://reference.sitepoint.com/css/colorvalues
// [Mozilla docs]: https://developer.mozilla.org/en-US/docs/CSS/color_value#Values
// [W3C spec]: http://dev.w3.org/csswg/css3-color/#colorunits
var TextColor = LatexCmds.textcolor = P(MathCommand, function(_, super_) {
  _.setColor = function(color) {
    this.color = color;
    this.htmlTemplate =
      '<span class="mq-textcolor" style="color:' + color + '">&0</span>';
    _.ariaLabel = color.replace(/^\\/, '');
    _.mathspeakTemplate = ['Start ' + _.ariaLabel + ',', 'End ' + _.ariaLabel];
  };
  _.latex = function() {
    return '\\textcolor{' + this.color + '}{' + this.blocks[0].latex() + '}';
  };
  _.parser = function() {
    var self = this;
    var optWhitespace = Parser.optWhitespace;
    var string = Parser.string;
    var regex = Parser.regex;

    return optWhitespace
      .then(string('{'))
      .then(regex(/^[#\w\s.,()%-]*/))
      .skip(string('}'))
      .then(function(color) {
        self.setColor(color);
        return super_.parser.call(self);
      })
    ;
  };
  _.isStyleBlock = function() {
    return true;
  };
});

// Very similar to the \textcolor command, but will add the given CSS class.
// Usage: \class{classname}{math}
// Note regex that whitelists valid CSS classname characters:
// https://github.com/mathquill/mathquill/pull/191#discussion_r4327442
var Class = LatexCmds['class'] = P(MathCommand, function(_, super_) {
  _.parser = function() {
    var self = this, string = Parser.string, regex = Parser.regex;
    return Parser.optWhitespace
      .then(string('{'))
      .then(regex(/^[-\w\s\\\xA0-\xFF]*/))
      .skip(string('}'))
      .then(function(cls) {
        self.cls = cls || '';
        self.htmlTemplate = '<span class="mq-class '+cls+'">&0</span>';
        self.ariaLabel = cls + ' class';
        self.mathspeakTemplate = ['Start ' + self.ariaLabel + ',', 'End ' + self.ariaLabel];
        return super_.parser.call(self);
      })
    ;
  };
  _.latex = function() {
    return '\\class{' + this.cls + '}{' + this.blocks[0].latex() + '}';
  };
  _.isStyleBlock = function() {
    return true;
  };
});

// This test is used to determine whether an item may be treated as a whole number
// for shortening the verbalized (mathspeak) forms of some fractions and superscripts.
var intRgx = /^[\+\-]?[\d]+$/;

// Traverses the top level of the passed block's children and returns the concatenation of their ctrlSeq properties.
// Used in shortened mathspeak computations as a block's .text() method can be potentially expensive.
//
function getCtrlSeqsFromBlock(block) {
  if (
    typeof(block) !== 'object' ||
    typeof(block.children) !== 'function'
  )
    return block;
  var children = block.children();
  if (!children || !children.ends[L]) return block;
  var chars = '';
  for (var sibling = children.ends[L]; sibling[R] !== undefined; sibling = sibling[R]) {
    if (sibling.ctrlSeq !== undefined) chars += sibling.ctrlSeq;
  }
  return chars;
}

var SupSub = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '_{...}^{...}';
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment && !cursor[L] && cursor.options.supSubsRequireOperand) return;
    return super_.createLeftOf.apply(this, arguments);
  };
  _.contactWeld = function(cursor) {
    // Look on either side for a SupSub, if one is found compare my
    // .sub, .sup with its .sub, .sup. If I have one that it doesn't,
    // then call .addBlock() on it with my block; if I have one that
    // it also has, then insert my block's children into its block,
    // unless my block has none, in which case insert the cursor into
    // its block (and not mine, I'm about to remove myself) in the case
    // I was just typed.
    // TODO: simplify

    // equiv. to [L, R].forEach(function(dir) { ... });
    for (var dir = L; dir; dir = (dir === L ? R : false)) {
      if (this[dir] instanceof SupSub) {
        // equiv. to 'sub sup'.split(' ').forEach(function(supsub) { ... });
        for (var supsub = 'sub'; supsub; supsub = (supsub === 'sub' ? 'sup' : false)) {
          var src = this[supsub], dest = this[dir][supsub];
          if (!src) continue;
          if (!dest) this[dir].addBlock(src.disown());
          else if (!src.isEmpty()) { // ins src children at -dir end of dest
            src.jQ.children().insAtDirEnd(-dir, dest.jQ);
            var children = src.children().disown();
            var pt = Point(dest, children.ends[R], dest.ends[L]);
            if (dir === L) children.adopt(dest, dest.ends[R], 0);
            else children.adopt(dest, 0, dest.ends[L]);
          }
          else var pt = Point(dest, 0, dest.ends[L]);
          this.placeCursor = (function(dest, src) { // TODO: don't monkey-patch
            return function(cursor) { cursor.insAtDirEnd(-dir, dest || src); };
          }(dest, src));
        }
        this.remove();
        if (cursor && cursor[L] === this) {
          if (dir === R && pt) {
            pt[L] ? cursor.insRightOf(pt[L]) : cursor.insAtLeftEnd(pt.parent);
          }
          else cursor.insRightOf(this[dir]);
        }
        break;
      }
    }
  };
  Options.p.charsThatBreakOutOfSupSub = '';
  _.finalizeTree = function() {
    this.ends[L].write = function(cursor, ch) {
      if (cursor.options.autoSubscriptNumerals && this === this.parent.sub) {
        if (ch === '_') return;
        var cmd = this.chToCmd(ch, cursor.options);
        if (cmd instanceof Symbol) cursor.deleteSelection();
        else cursor.clearSelection().insRightOf(this.parent);
        cmd.createLeftOf(cursor.show());
        aria.queue('Baseline').alert(cmd.mathspeak({ createdLeftOf: cursor }));
        return;
      }
      if (cursor[L] && !cursor[R] && !cursor.selection
          && cursor.options.charsThatBreakOutOfSupSub.indexOf(ch) > -1) {
        cursor.insRightOf(this.parent);
        aria.queue('Baseline');
      }
      MathBlock.p.write.apply(this, arguments);
    };
  };
  _.moveTowards = function(dir, cursor, updown) {
    if (cursor.options.autoSubscriptNumerals && !this.sup) {
      cursor.insDirOf(dir, this);
    }
    else super_.moveTowards.apply(this, arguments);
  };
  _.deleteTowards = function(dir, cursor) {
    if (cursor.options.autoSubscriptNumerals && this.sub) {
      var cmd = this.sub.ends[-dir];
      if (cmd instanceof Symbol) cmd.remove();
      else if (cmd) cmd.deleteTowards(dir, cursor.insAtDirEnd(-dir, this.sub));

      // TODO: factor out a .removeBlock() or something
      if (this.sub.isEmpty()) {
        this.sub.deleteOutOf(L, cursor.insAtLeftEnd(this.sub));
        if (this.sup) cursor.insDirOf(-dir, this);
        // Note `-dir` because in e.g. x_1^2| want backspacing (leftward)
        // to delete the 1 but to end up rightward of x^2; with non-negated
        // `dir` (try it), the cursor appears to have gone "through" the ^2.
      }
    }
    else super_.deleteTowards.apply(this, arguments);
  };
  _.latex = function() {
    function latex(prefix, block) {
      var l = block && block.latex();
      return block ? prefix + '{' + (l || ' ') + '}' : '';
    }
    return latex('_', this.sub) + latex('^', this.sup);
  };
  _.text = function() {
    function text(prefix, block) {
      var l = block && block.text();
      return block ? prefix + (l.length === 1 ? l : '(' + (l || ' ') + ')') : '';
    }
    return text('_', this.sub) + text('^', this.sup);
  };
  _.addBlock = function(block) {
    if (this.supsub === 'sub') {
      this.sup = this.upInto = this.sub.upOutOf = block;
      block.adopt(this, this.sub, 0).downOutOf = this.sub;
      block.jQ = $('<span class="mq-sup"/>').append(block.jQ.children()).prependTo(this.jQ);
      Node.linkElementByBlockNode(block.jQ[0], block);
    }
    else {
      this.sub = this.downInto = this.sup.downOutOf = block;
      block.adopt(this, 0, this.sup).upOutOf = this.sup;
      block.jQ = $('<span class="mq-sub"></span>').append(block.jQ.children())
        .appendTo(this.jQ.removeClass('mq-sup-only'));
      Node.linkElementByBlockNode(block.jQ[0], block);
      this.jQ.append('<span style="display:inline-block;width:0">&#8203;</span>');
    }


    // like 'sub sup'.split(' ').forEach(function(supsub) { ... });
    for (var i = 0; i < 2; i += 1) (function(cmd, supsub, oppositeSupsub, updown) {
      cmd[supsub].deleteOutOf = function(dir, cursor) {
        cursor.insDirOf((this[dir] ? -dir : dir), this.parent);
        if (!this.isEmpty()) {
          var end = this.ends[dir];
          this.children().disown()
            .withDirAdopt(dir, cursor.parent, cursor[dir], cursor[-dir])
            .jQ.insDirOf(-dir, cursor.jQ);
          cursor[-dir] = end;
        }
        cmd.supsub = oppositeSupsub;
        delete cmd[supsub];
        delete cmd[updown+'Into'];
        cmd[oppositeSupsub][updown+'OutOf'] = insLeftOfMeUnlessAtEnd;
        delete cmd[oppositeSupsub].deleteOutOf;
        if (supsub === 'sub') $(cmd.jQ.addClass('mq-sup-only')[0].lastChild).remove();
        this.remove();
      };
    }(this, 'sub sup'.split(' ')[i], 'sup sub'.split(' ')[i], 'down up'.split(' ')[i]));
  };
});

function insLeftOfMeUnlessAtEnd(cursor) {
  // cursor.insLeftOf(cmd), unless cursor at the end of block, and every
  // ancestor cmd is at the end of every ancestor block
  var cmd = this.parent, ancestorCmd = cursor;
  do {
    if (ancestorCmd[R]) return cursor.insLeftOf(cmd);
    ancestorCmd = ancestorCmd.parent.parent;
  } while (ancestorCmd !== cmd);
  cursor.insRightOf(cmd);
}

LatexCmds.subscript =
LatexCmds._ = P(SupSub, function(_, super_) {
  _.supsub = 'sub';
  _.htmlTemplate =
      '<span class="mq-supsub mq-non-leaf">'
    +   '<span class="mq-sub">&0</span>'
    +   '<span style="display:inline-block;width:0">&#8203;</span>'
    + '</span>'
  ;
  _.textTemplate = [ '_' ];
  _.mathspeakTemplate = [ 'Subscript,', ', Baseline'];
  _.ariaLabel = 'subscript';
  _.finalizeTree = function() {
    this.downInto = this.sub = this.ends[L];
    this.sub.upOutOf = insLeftOfMeUnlessAtEnd;
    super_.finalizeTree.call(this);
  };
});

LatexCmds.superscript =
LatexCmds.supscript =
LatexCmds['^'] = P(SupSub, function(_, super_) {
  _.supsub = 'sup';
  _.htmlTemplate =
      '<span class="mq-supsub mq-non-leaf mq-sup-only">'
    +   '<span class="mq-sup">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['^(', ')'];
  _.mathspeak = function(opts) {
    // Simplify basic exponent speech for common whole numbers.
    var child = this.upInto;
    if (child !== undefined) {
      // Calculate this item's inner text to determine whether to shorten the returned speech.
      // Do not calculate its inner mathspeak now until we know that the speech is to be truncated.
      // Since the mathspeak computation is recursive, we want to call it only once in this function to avoid performance bottlenecks.
      var innerText = getCtrlSeqsFromBlock(child);
      // If the superscript is a whole number, shorten the speech that is returned.
      if (
        (!opts || !opts.ignoreShorthand) &&
        intRgx.test(innerText)
      ) {
        // Simple cases
        if (innerText === '0') {
          return 'to the 0 power';
        } else if (innerText === '2') {
          return 'squared';
        } else if (innerText === '3') {
          return 'cubed';
        }

        // More complex cases.
        var suffix = '';
        // Limit suffix addition to exponents < 1000.
        if (/^[+-]?\d{1,3}$/.test(innerText)) {
          if (/(11|12|13|4|5|6|7|8|9|0)$/.test(innerText)) {
            suffix = 'th';
          } else if (/1$/.test(innerText)) {
            suffix = 'st';
          } else if (/2$/.test(innerText)) {
            suffix = 'nd';
          } else if (/3$/.test(innerText)) {
            suffix = 'rd';
          }
        }
        var innerMathspeak = typeof(child) === 'object'
          ? child.mathspeak()
          : innerText;
        return 'to the ' + innerMathspeak + suffix + ' power';
      }
    }
    return super_.mathspeak.call(this);
  };

  _.ariaLabel = 'superscript';
  _.mathspeakTemplate = [ 'Superscript,', ', Baseline'];
  _.finalizeTree = function() {
    this.upInto = this.sup = this.ends[R];
    this.sup.downOutOf = insLeftOfMeUnlessAtEnd;
    super_.finalizeTree.call(this);
  };
});

var SummationNotation = P(MathCommand, function(_, super_) {
  _.init = function(ch, html, ariaLabel) {
    _.ariaLabel = ariaLabel || ctrlSeq.replace(/^\\/, '');
    var htmlTemplate =
      '<span class="mq-large-operator mq-non-leaf">'
    +   '<span class="mq-to"><span>&1</span></span>'
    +   '<big>'+html+'</big>'
    +   '<span class="mq-from"><span>&0</span></span>'
    + '</span>'
    ;
    Symbol.prototype.init.call(this, ch, htmlTemplate);
  };
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.apply(this, arguments);
    if (cursor.options.sumStartsWithNEquals) {
      Letter('n').createLeftOf(cursor);
      Equality().createLeftOf(cursor);
    }
  };
  _.latex = function() {
    function simplify(latex) {
      return '{' + (latex || ' ') + '}';
    }
    return this.ctrlSeq + '_' + simplify(this.ends[L].latex()) +
      '^' + simplify(this.ends[R].latex());
  };
  _.mathspeak = function() {
    return 'Start ' + this.ariaLabel + ' from ' + this.ends[L].mathspeak() +
      ' to ' + this.ends[R].mathspeak() + ', end ' + this.ariaLabel + ', ';
  };
  _.parser = function() {
    var string = Parser.string;
    var optWhitespace = Parser.optWhitespace;
    var succeed = Parser.succeed;
    var block = latexMathParser.block;

    var self = this;
    var blocks = self.blocks = [ MathBlock(), MathBlock() ];
    for (var i = 0; i < blocks.length; i += 1) {
      blocks[i].adopt(self, self.ends[R], 0);
    }

    return optWhitespace.then(string('_').or(string('^'))).then(function(supOrSub) {
      var child = blocks[supOrSub === '_' ? 0 : 1];
      return block.then(function(block) {
        block.children().adopt(child, child.ends[R], 0);
        return succeed(self);
      });
    }).many().result(self);
  };
  _.finalizeTree = function() {
    this.ends[L].ariaLabel = 'lower bound';
    this.ends[R].ariaLabel = 'upper bound';
    this.downInto = this.ends[L];
    this.upInto = this.ends[R];
    this.ends[L].upOutOf = this.ends[R];
    this.ends[R].downOutOf = this.ends[L];
  };
});

LatexCmds['∑'] =
LatexCmds.sum =
LatexCmds.summation = bind(SummationNotation,'\\sum ','&sum;', 'sum');

LatexCmds['∏'] =
LatexCmds.prod =
LatexCmds.product = bind(SummationNotation,'\\prod ','&prod;', 'product');

LatexCmds.coprod =
LatexCmds.coproduct = bind(SummationNotation,'\\coprod ','&#8720;', 'co product');

LatexCmds.bigcup = LatexCmds.bigunion = bind(SummationNotation,'\\bigcup ','&xcup;', 'big union');
LatexCmds.bigcap = LatexCmds.bigintersect = LatexCmds.bigintersection =
  bind(SummationNotation,'\\bigcap ','&xcap;', 'big intersect');

LatexCmds['∫'] =
LatexCmds['int'] =
LatexCmds.integral = P(SummationNotation, function(_, super_) {
  _.init = function() {
    _.ariaLabel = 'integral';
    var htmlTemplate =
      '<span class="mq-int mq-non-leaf">'
    +   '<big>&int;</big>'
    +   '<span class="mq-supsub mq-non-leaf">'
    +     '<span class="mq-sup"><span class="mq-sup-inner">&1</span></span>'
    +     '<span class="mq-sub">&0</span>'
    +     '<span style="display:inline-block;width:0">&#8203</span>'
    +   '</span>'
    + '</span>'
    ;
    Symbol.prototype.init.call(this, '\\int ', htmlTemplate, 'integral');
  };
  // FIXME: refactor rather than overriding
  _.createLeftOf = MathCommand.p.createLeftOf;
});
var Fraction =
LatexCmds.frac =
LatexCmds.dfrac =
LatexCmds.cfrac =
LatexCmds.fraction = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\frac';
  _.htmlTemplate =
      '<span class="mq-fraction mq-non-leaf">'
    +   '<span class="mq-numerator">&0</span>'
    +   '<span class="mq-denominator">&1</span>'
    +   '<span style="display:inline-block;width:0">&#8203;</span>'
    + '</span>'
  ;
  _.textTemplate = ['(', ')/(', ')'];
  _.finalizeTree = function() {
    this.upInto = this.ends[R].upOutOf = this.ends[L];
    this.downInto = this.ends[L].downOutOf = this.ends[R];
    this.ends[L].ariaLabel = 'numerator';
    this.ends[R].ariaLabel = 'denominator';
    if(this.getFracDepth() > 1) {
      this.mathspeakTemplate = ['StartNestedFraction,', 'NestedOver', ', EndNestedFraction'];
    } else {
      this.mathspeakTemplate = ['StartFraction,', 'Over', ', EndFraction'];
    }
  };

  _.mathspeak = function(opts) {
    if (opts && opts.createdLeftOf) {
      var cursor = opts.createdLeftOf;
      return cursor.parent.mathspeak();
    }

    var numText = getCtrlSeqsFromBlock(this.ends[L]);
    var denText = getCtrlSeqsFromBlock(this.ends[R]);

    // Shorten mathspeak value for whole number fractions whose denominator is less than 10.
    if (
      (!opts || !opts.ignoreShorthand) &&
      intRgx.test(numText) && intRgx.test(denText)
    ) {
      var isSingular = numText === '1' || numText === '-1';
      var newDenSpeech = '';
      if (denText === '2') {
        newDenSpeech = isSingular
          ? 'half'
          : 'halves';
      } else if (denText === '3') {
        newDenSpeech = isSingular
          ? 'third'
          : 'thirds';
      } else if (denText === '4') {
        newDenSpeech = isSingular
          ? 'quarter'
          : 'quarters';
      } else if (denText === '5') {
        newDenSpeech = isSingular
          ? 'fifth'
          : 'fifths';
      } else if (denText === '6') {
        newDenSpeech = isSingular
          ? 'sixth'
          : 'sixths';
      } else if (denText === '7') {
        newDenSpeech = isSingular
          ? 'seventh'
          : 'sevenths';
      } else if (denText === '8') {
        newDenSpeech = isSingular
          ? 'eighth'
          : 'eighths';
      } else if (denText === '9') {
        newDenSpeech = isSingular
          ? 'ninth'
          : 'ninths';
      }
      if (newDenSpeech !== '') {
        var output = '';
        // Handle the case of an integer followed by a simplified fraction such as 1\frac{1}{2}.
        // Such combinations should be spoken aloud as "1 and 1 half."
        // Start at the left sibling of the fraction and continue leftward until something other than a digit or whitespace is found.
        var precededByInteger = false;
        for (var sibling = this[L]; sibling[L] !== undefined; sibling = sibling[L]) {
          // Ignore whitespace
          if (sibling.ctrlSeq === '\\ ') {
            continue;
          } else if (intRgx.test(sibling.ctrlSeq)) {
            precededByInteger = true;
          } else {
            precededByInteger = false;
            break;
          }
        }
        if (precededByInteger) {
          output += 'and ';
        }
        output += this.ends[L].mathspeak() + ' ' + newDenSpeech;
        return output;
      }
    }

    return super_.mathspeak.apply(this, arguments);
  };

  _.getFracDepth = function() {
    var level = 0;
    var walkUp = function(item, level) {
      if(item instanceof Node && item.ctrlSeq && item.ctrlSeq.toLowerCase().search('frac') >= 0) level += 1;
      if(item.parent) return walkUp(item.parent, level);
      else return level;
    };
    return walkUp(this, level);
  };
});

var Underbrace =
    LatexCmds.underbrace =
    LatexCmds.ub = P(MathCommand, function(_, super_) {
      _.ctrlSeq = '\\ub';
      _.htmlTemplate =
          '<span class="mq-fraction mq-non-leaf">'
        +   '<span class="mq-numerator mq-ub-numerator">&0'
        +     '<span class="underbrace">'
        +       SVG_SYMBOLS['&#65080;'].html
        +     '</span>'
        +   '</span>'
        +   '<span class="mq-denominator mq-ub-denominator">&1</span>'
        + '</span>'
      ;
      _.textTemplate = ['(', ')/(', ')'];
      _.finalizeTree = function() {
        this.upInto = this.ends[R].upOutOf = this.ends[L];
        this.downInto = this.ends[L].downOutOf = this.ends[R];
      };
    });

var LiveFraction =
LatexCmds.over =
CharCmds['/'] = P(Fraction, function(_, super_) {
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment) {
      var leftward = cursor[L];

      if (!cursor.options.typingSlashCreatesNewFraction) {
        while (leftward &&
          !(
            leftward instanceof BinaryOperator ||
            leftward instanceof (LatexCmds.text || noop) ||
            leftward instanceof SummationNotation ||
            leftward.ctrlSeq === '\\ ' ||
            /^[,;:]$/.test(leftward.ctrlSeq)
          ) //lookbehind for operator
        ) leftward = leftward[L];
      }
      if (leftward instanceof SummationNotation && leftward[R] instanceof SupSub) {
        leftward = leftward[R];
        if (leftward[R] instanceof SupSub && leftward[R].ctrlSeq != leftward.ctrlSeq)
          leftward = leftward[R];
      }

      if (leftward !== cursor[L] && !cursor.isTooDeep(1)) {
        this.replaces(Fragment(leftward[R] || cursor.parent.ends[L], cursor[L]));
        cursor[L] = leftward;
      }
    }
    super_.createLeftOf.call(this, cursor);
  };
});

LatexCmds.ans = P(Symbol, function(_, super_) {
  _.init = function(ch) {
    super_.init.call(this,
      '\\operatorname{ans}',
      '<span class="mq-ans">ans</span>',
      'ans'
    );
  };
});

LatexCmds.percent =
LatexCmds.percentof = P(Symbol, function (_, super_) {
  _.init = function () {
    super_.init.call(
      this,
      '\\%\\operatorname{of}',
      '<span class="mq-nonSymbola mq-operator-name">% of </span>',
      'percent of'
    )
  };
});

var SquareRoot =
LatexCmds.sqrt = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\sqrt';
  _.htmlTemplate =
      '<span class="mq-non-leaf mq-sqrt-container">'
    +   '<span class="mq-scaled mq-sqrt-prefix">'
    +     SVG_SYMBOLS.sqrt.html
    +   '</span>'
    +   '<span class="mq-non-leaf mq-sqrt-stem">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['sqrt(', ')'];
  _.mathspeakTemplate = ['StartRoot,', ', EndRoot'];
  _.ariaLabel = 'root';
  _.parser = function() {
    return latexMathParser.optBlock.then(function(optBlock) {
      return latexMathParser.block.map(function(block) {
        var nthroot = NthRoot();
        nthroot.blocks = [ optBlock, block ];
        optBlock.adopt(nthroot, 0, 0);
        block.adopt(nthroot, optBlock, 0);
        return nthroot;
      });
    }).or(super_.parser.call(this));
  };
});

var Hat = LatexCmds.hat = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\hat';
  _.htmlTemplate =
      '<span class="mq-non-leaf">'
    +   '<span class="mq-hat-prefix">^</span>'
    +   '<span class="mq-hat-stem">&0</span>'
    + '</span>'
  ;
  _.textTemplate = ['hat(', ')'];
});

var NthRoot =
LatexCmds.nthroot = P(SquareRoot, function(_, super_) {
  _.htmlTemplate =
      '<span class="mq-nthroot-container mq-non-leaf">'
    +   '<sup class="mq-nthroot mq-non-leaf">&0</sup>'
    +   '<span class="mq-scaled mq-sqrt-container">'
    +     '<span class="mq-sqrt-prefix mq-scaled">'
    +       SVG_SYMBOLS.sqrt.html
    +     '</span>'
    +     '<span class="mq-sqrt-stem mq-non-leaf">&1</span>'
    +   '</span>'
    + '</span>'
  ;
  _.textTemplate = ['sqrt[', '](', ')'];
  _.latex = function() {
    return '\\sqrt['+this.ends[L].latex()+']{'+this.ends[R].latex()+'}';
  };
  _.mathspeak = function() {
    var indexMathspeak = this.ends[L].mathspeak();
    var radicandMathspeak = this.ends[R].mathspeak();
    this.ends[L].ariaLabel = 'Index';
    this.ends[R].ariaLabel = 'Radicand';
    if (indexMathspeak === '3') { // cube root
      return 'Start Cube Root, '+radicandMathspeak+', End Cube Root';
    } else {
      return 'Root Index '+indexMathspeak+', Start Root, '+radicandMathspeak+', End Root';
    }
  };
});

var CubeRoot =
LatexCmds.cbrt = P(NthRoot, function(_, super_) {
  _.createLeftOf = function(cursor) {
    super_.createLeftOf.apply(this, arguments);
    Digit('3').createLeftOf(cursor);
    cursor.controller.moveRight();
  };
});

var DiacriticAbove = P(MathCommand, function(_, super_) {
  _.init = function(ctrlSeq, symbol, textTemplate) {
    var htmlTemplate =
      '<span class="mq-non-leaf">'
      +   '<span class="mq-diacritic-above">'+symbol+'</span>'
      +   '<span class="mq-diacritic-stem">&0</span>'
      + '</span>'
    ;

    super_.init.call(this, ctrlSeq, htmlTemplate, textTemplate);
  };
});
LatexCmds.vec = bind(DiacriticAbove, '\\vec', '&rarr;', ['vec(', ')']);
LatexCmds.tilde = bind(DiacriticAbove, '\\tilde', '~', ['tilde(', ')']);

function DelimsMixin(_, super_) {
  _.jQadd = function() {
    super_.jQadd.apply(this, arguments);
    this.delimjQs = this.jQ.children(':first').add(this.jQ.children(':last'));
    this.contentjQ = this.jQ.children(':eq(1)');
  };
}

// Round/Square/Curly/Angle Brackets (aka Parens/Brackets/Braces)
//   first typed as one-sided bracket with matching "ghost" bracket at
//   far end of current block, until you type an opposing one
var Bracket = P(P(MathCommand, DelimsMixin), function(_, super_) {
  _.init = function(side, open, close, ctrlSeq, end) {
    super_.init.call(this, '\\left'+ctrlSeq, undefined, [open, close]);
    this.side = side;
    this.sides = {};
    this.sides[L] = { ch: open, ctrlSeq: ctrlSeq };
    this.sides[R] = { ch: close, ctrlSeq: end };
  };
  _.numBlocks = function() { return 1; };
  _.html = function() {
    var leftSymbol = this.getSymbol(L);
    var rightSymbol = this.getSymbol(R);

                        // wait until now so that .side may
    this.htmlTemplate = // be set by createLeftOf or parser
        '<span class="mq-non-leaf mq-bracket-container">'
      +   '<span style="width:'+ leftSymbol.width +'" class="mq-scaled mq-bracket-l mq-paren'+(this.side === R ? ' mq-ghost' : '')+'">'
      +     leftSymbol.html
      +   '</span>'
      +   '<span style="margin-left:'+ leftSymbol.width +';margin-right:'+ rightSymbol.width +'" class="mq-bracket-middle mq-non-leaf">&0</span>'
      +   '<span style="width:'+ rightSymbol.width +'" class="mq-scaled mq-bracket-r mq-paren'+(this.side === L ? ' mq-ghost' : '')+'">'
      +     rightSymbol.html
      +   '</span>'
      + '</span>'
    ;
    return super_.html.call(this);
  };
  _.getSymbol = function (side) {
    return SVG_SYMBOLS[this.sides[side || R].ch] || {width: '0', html: ''};
  };
  _.latex = function() {
    return '\\left'+this.sides[L].ctrlSeq+this.ends[L].latex()+'\\right'+this.sides[R].ctrlSeq;
  };
  _.mathspeak = function(opts) {
    var open = this.sides[L].ch, close = this.sides[R].ch;
    if (open === '|' && close === '|') {
      this.mathspeakTemplate = ['StartAbsoluteValue,', ', EndAbsoluteValue'];
      this.ariaLabel = 'absolute value';
    }
    else if (opts && opts.createdLeftOf && this.side) {
      var ch = '';
      if (this.side === L) ch = this.textTemplate[0];
      else if (this.side === R) ch = this.textTemplate[1];
      return (this.side === L ? 'left ' : 'right ') + BRACKET_NAMES[ch];
    }
    else {
      this.mathspeakTemplate = ['left ' + BRACKET_NAMES[open]+',', ', right ' + BRACKET_NAMES[close]];
      this.ariaLabel = BRACKET_NAMES[open]+' block';
    }
    return super_.mathspeak.call(this);
  };
  _.matchBrack = function(opts, expectedSide, node) {
    // return node iff it's a matching 1-sided bracket of expected side (if any)
    return node instanceof Bracket && node.side && node.side !== -expectedSide
      && (!opts.restrictMismatchedBrackets
        || OPP_BRACKS[this.sides[this.side].ch] === node.sides[node.side].ch
        || { '(': ']', '[': ')' }[this.sides[L].ch] === node.sides[R].ch) && node;
  };
  _.closeOpposing = function(brack) {
    brack.side = 0;
    brack.sides[this.side] = this.sides[this.side]; // copy over my info (may be
    var $brack = brack.delimjQs.eq(this.side === L ? 0 : 1) // mismatched, like [a, b))
      .removeClass('mq-ghost');
    this.replaceBracket($brack, this.side);
  };
  _.createLeftOf = function(cursor) {
    if (!this.replacedFragment) { // unless wrapping seln in brackets,
        // check if next to or inside an opposing one-sided bracket
      var opts = cursor.options;
      if (this.sides[L].ch === '|') { // check both sides if I'm a pipe
        var brack = this.matchBrack(opts, R, cursor[R])
                 || this.matchBrack(opts, L, cursor[L])
                 || this.matchBrack(opts, 0, cursor.parent.parent);
      }
      else {
        var brack = this.matchBrack(opts, -this.side, cursor[-this.side])
                 || this.matchBrack(opts, -this.side, cursor.parent.parent);
      }
    }
    if (brack) {
      var side = this.side = -brack.side; // may be pipe with .side not yet set
      this.closeOpposing(brack);
      if (brack === cursor.parent.parent && cursor[side]) { // move the stuff between
        Fragment(cursor[side], cursor.parent.ends[side], -side) // me and ghost outside
          .disown().withDirAdopt(-side, brack.parent, brack, brack[side])
          .jQ.insDirOf(side, brack.jQ);
      }
      brack.bubble(function (node) { node.reflow(); });
    }
    else {
      brack = this, side = brack.side;
      if (brack.replacedFragment) brack.side = 0; // wrapping seln, don't be one-sided
      else if (cursor[-side]) { // elsewise, auto-expand so ghost is at far end
        brack.replaces(Fragment(cursor[-side], cursor.parent.ends[-side], side));
        cursor[-side] = 0;
      }
      super_.createLeftOf.call(brack, cursor);
    }
    if (side === L) cursor.insAtLeftEnd(brack.ends[L]);
    else cursor.insRightOf(brack);
  };
  _.placeCursor = noop;
  _.unwrap = function() {
    this.ends[L].children().disown().adopt(this.parent, this, this[R])
      .jQ.insertAfter(this.jQ);
    this.remove();
  };
  _.deleteSide = function(side, outward, cursor) {
    var parent = this.parent, sib = this[side], farEnd = parent.ends[side];

    if (side === this.side) { // deleting non-ghost of one-sided bracket, unwrap
      this.unwrap();
      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
      return;
    }

    var opts = cursor.options, wasSolid = !this.side;
    this.side = -side;
    // if deleting like, outer close-brace of [(1+2)+3} where inner open-paren
    if (this.matchBrack(opts, side, this.ends[L].ends[this.side])) { // is ghost,
      this.closeOpposing(this.ends[L].ends[this.side]); // then become [1+2)+3
      var origEnd = this.ends[L].ends[side];
      this.unwrap();
      if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
      sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
    }
    else { // if deleting like, inner close-brace of ([1+2}+3) where outer
      if (this.matchBrack(opts, side, this.parent.parent)) { // open-paren is
        this.parent.parent.closeOpposing(this); // ghost, then become [1+2+3)
        this.parent.parent.unwrap();
      } // else if deleting outward from a solid pair, unwrap
      else if (outward && wasSolid) {
        this.unwrap();
        sib ? cursor.insDirOf(-side, sib) : cursor.insAtDirEnd(side, parent);
        return;
      }
      else { // else deleting just one of a pair of brackets, become one-sided
        this.sides[side] = { ch: OPP_BRACKS[this.sides[this.side].ch],
                             ctrlSeq: OPP_BRACKS[this.sides[this.side].ctrlSeq] };
        var $brack = this.delimjQs.removeClass('mq-ghost')
          .eq(side === L ? 0 : 1).addClass('mq-ghost');
        this.replaceBracket($brack, side);
      }
      if (sib) { // auto-expand so ghost is at far end
        var origEnd = this.ends[L].ends[side];
        Fragment(sib, farEnd, -side).disown()
          .withDirAdopt(-side, this.ends[L], origEnd, 0)
          .jQ.insAtDirEnd(side, this.ends[L].jQ.removeClass('mq-empty'));
        if (origEnd.siblingCreated) origEnd.siblingCreated(cursor.options, side);
        cursor.insDirOf(-side, sib);
      } // didn't auto-expand, cursor goes just outside or just inside parens
      else (outward ? cursor.insDirOf(side, this)
                    : cursor.insAtDirEnd(side, this.ends[L]));
    }
  };
  _.replaceBracket = function ($brack, side) {
    var symbol = this.getSymbol(side);
    $brack.html(symbol.html).css('width', symbol.width);

    if (side === L) {
      $brack.next().css('margin-left', symbol.width);
    } else {
      $brack.prev().css('margin-right', symbol.width);
    }
  };
  _.deleteTowards = function(dir, cursor) {
    this.deleteSide(-dir, false, cursor);
  };
  _.finalizeTree = function() {
    this.ends[L].deleteOutOf = function(dir, cursor) {
      this.parent.deleteSide(dir, true, cursor);
    };
    // FIXME HACK: after initial creation/insertion, finalizeTree would only be
    // called if the paren is selected and replaced, e.g. by LiveFraction
    this.finalizeTree = this.intentionalBlur = function() {
      this.delimjQs.eq(this.side === L ? 1 : 0).removeClass('mq-ghost');
      this.side = 0;
    };
  };
  _.siblingCreated = function(opts, dir) { // if something typed between ghost and far
    if (dir === -this.side) this.finalizeTree(); // end of its block, solidify
  };
});

var OPP_BRACKS = {
  '(': ')',
  ')': '(',
  '[': ']',
  ']': '[',
  '{': '}',
  '}': '{',
  '\\{': '\\}',
  '\\}': '\\{',
  '&lang;': '&rang;',
  '&rang;': '&lang;',
  '\\langle ': '\\rangle ',
  '\\rangle ': '\\langle ',
  '|': '|',
  '\\lVert ' : '\\rVert ',
  '\\rVert ' : '\\lVert ',
  '\\lavg ' : '\\ravg ',
  '\\ravg ' : '\\lavg ',
  '\\ljump ' : '\\rjump ',
  '\\rjump ' : '\\ljump '
};

var BRACKET_NAMES = {
  '&lang;': 'angle-bracket',
  '&rang;': 'angle-bracket',
  '|': 'pipe'
};

function bindCharBracketPair(open, ctrlSeq, name) {
  var ctrlSeq = ctrlSeq || open, close = OPP_BRACKS[open], end = OPP_BRACKS[ctrlSeq];
  CharCmds[open] = bind(Bracket, L, open, close, ctrlSeq, end);
  CharCmds[close] = bind(Bracket, R, open, close, ctrlSeq, end);
  BRACKET_NAMES[open] = BRACKET_NAMES[close] = name;
}
bindCharBracketPair('(', null, 'parenthesis');
bindCharBracketPair('[', null, 'bracket');
bindCharBracketPair('{', '\\{', 'brace');
LatexCmds.angle = LatexCmds.langle = bind(Bracket, L, '&lang;', '&rang;', '\\langle ', '\\rangle ');
LatexCmds.rangle = bind(Bracket, R, '&lang;', '&rang;', '\\langle ', '\\rangle ');
CharCmds['|'] = bind(Bracket, L, '|', '|', '|', '|');
LatexCmds.norm = LatexCmds.lVert = bind(Bracket, L, '&#8741;', '&#8741;', '\\lVert ', '\\rVert ');
LatexCmds.rVert = bind(Bracket, R, '&#8741;', '&#8741;', '\\lVert ', '\\rVert ');

LatexCmds.avg = LatexCmds.lavg = bind(Bracket, L, '&#10627;', '&#10628;', '\\lavg ', '\\ravg ');
LatexCmds.ravg = bind(Bracket, R, '&#10627;', '&#10628;', '\\lavg ', '\\ravg ');
LatexCmds.jump = LatexCmds.ljump = bind(Bracket, L, '&#12314;', '&#12315;', '\\ljump ', '\\rjump ');
LatexCmds.rjump = bind(Bracket, R, '&#12314;', '&#12315;', '\\ljump ', '\\rjump ');

LatexCmds.left = P(MathCommand, function(_) {
  _.parser = function() {
    var regex = Parser.regex;
    var string = Parser.string;
    var succeed = Parser.succeed;
    var optWhitespace = Parser.optWhitespace;

    return optWhitespace.then(regex(/^(?:[([|]|\\\{|\\langle(?![a-zA-Z])|\\lVert(?![a-zA-Z])|\\lavg(?![a-zA-Z])|\\ljump(?![a-zA-Z]))/))
      .then(function(ctrlSeq) {
        var open = ctrlSeq.replace(/^\\/, '');
	if (ctrlSeq=="\\langle") { open = '&lang;'; ctrlSeq = ctrlSeq + ' '; }
	if (ctrlSeq=="\\lVert") { open = '&#8741;'; ctrlSeq = ctrlSeq + ' '; }
  if (ctrlSeq=="\\lavg") { open = '&#10627;'; ctrlSeq = ctrlSeq + ' '; }
  if (ctrlSeq=="\\ljump") { open = '&#12314;'; ctrlSeq = ctrlSeq + ' '; }
        return latexMathParser.then(function (block) {
          return string('\\right').skip(optWhitespace)
            .then(regex(/^(?:[\])|]|\\\}|\\rangle(?![a-zA-Z])|\\rVert(?![a-zA-Z])|\\ravg(?![a-zA-Z])|\\rjump(?![a-zA-Z]))/)).map(function(end) {
              var close = end.replace(/^\\/, '');
	      if (end=="\\rangle") { close = '&rang;'; end = end + ' '; }
	      if (end=="\\rVert") { close = '&#8741;'; end = end + ' '; }
        if (end=="\\ravg") { close = '&#10628;'; end = end + ' '; }
        if (end=="\\rjump") { close = '&#12315;'; end = end + ' '; }
              var cmd = Bracket(0, open, close, ctrlSeq, end);
              cmd.blocks = [ block ];
              block.adopt(cmd, 0, 0);
              return cmd;
            })
          ;
        });
      })
    ;
  };
});

LatexCmds.right = P(MathCommand, function(_) {
  _.parser = function() {
    return Parser.fail('unmatched \\right');
  };
});

var Binomial =
LatexCmds.binom =
LatexCmds.binomial = P(P(MathCommand, DelimsMixin), function(_, super_) {
  var leftSymbol = SVG_SYMBOLS['('];
  var rightSymbol = SVG_SYMBOLS[')'];

  _.ctrlSeq = '\\binom';
  _.htmlTemplate =
      '<span class="mq-non-leaf mq-bracket-container">'
    +   '<span style="width:'+ leftSymbol.width +'" class="mq-paren mq-bracket-l mq-scaled">'
    +     leftSymbol.html
    +   '</span>'
    +   '<span style="margin-left:'+ leftSymbol.width +'; margin-right:'+ rightSymbol.width +';" class="mq-non-leaf mq-bracket-middle">'
    +     '<span class="mq-array mq-non-leaf">'
    +       '<span>&0</span>'
    +       '<span>&1</span>'
    +     '</span>'
    +   '</span>'
    +   '<span style="width:'+ rightSymbol.width +'" class="mq-paren mq-bracket-r mq-scaled">'
    +     rightSymbol.html
    +   '</span>'
    + '</span>'
  ;
  _.textTemplate = ['choose(',',',')'];
  _.mathspeakTemplate = ['StartBinomial,', 'Choose', ', EndBinomial'];
  _.ariaLabel = 'binomial';
});

var Choose =
LatexCmds.choose = P(Binomial, function(_) {
  _.createLeftOf = LiveFraction.prototype.createLeftOf;
});

LatexCmds.editable = // backcompat with before cfd3620 on #233
LatexCmds.MathQuillMathField = P(MathCommand, function(_, super_) {
  _.ctrlSeq = '\\MathQuillMathField';
  _.htmlTemplate =
      '<span class="mq-editable-field">'
    +   '<span class="mq-root-block">&0</span>'
    + '</span>'
  ;
  _.parser = function() {
    var self = this,
      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
    return string('[').then(regex(/^[a-z][a-z0-9]*/i)).skip(string(']'))
      .map(function(name) { self.name = name; }).or(succeed())
      .then(super_.parser.call(self));
  };
  _.finalizeTree = function(options) {
    var ctrlr = Controller(this.ends[L], this.jQ, options);
    ctrlr.KIND_OF_MQ = 'MathField';
    ctrlr.editable = true;
    ctrlr.createTextarea();
    ctrlr.editablesTextareaEvents();
    ctrlr.cursor.insAtRightEnd(ctrlr.root);
    RootBlockMixin(ctrlr.root);
  };
  _.registerInnerField = function(innerFields, MathField) {
    innerFields.push(innerFields[this.name] = MathField(this.ends[L].controller));
  };
  _.latex = function(){ return this.ends[L].latex(); };
  _.text = function(){ return this.ends[L].text(); };
});

// Embed arbitrary things
// Probably the closest DOM analogue would be an iframe?
// From MathQuill's perspective, it's a Symbol, it can be
// anywhere and the cursor can go around it but never in it.
// Create by calling public API method .dropEmbedded(),
// or by calling the global public API method .registerEmbed()
// and rendering LaTeX like \embed{registeredName} (see test).
var Embed = LatexCmds.embed = P(Symbol, function(_, super_) {
  _.setOptions = function(options) {
    function noop () { return ""; }
    this.text = options.text || noop;
    this.htmlTemplate = options.htmlString || "";
    this.latex = options.latex || noop;
    return this;
  };
  _.parser = function() {
    var self = this,
      string = Parser.string, regex = Parser.regex, succeed = Parser.succeed;
    return string('{').then(regex(/^[a-z][a-z0-9]*/i)).skip(string('}'))
      .then(function(name) {
        // the chars allowed in the optional data block are arbitrary other than
        // excluding curly braces and square brackets (which'd be too confusing)
        return string('[').then(regex(/^[-\w\s]*/)).skip(string(']'))
          .or(succeed()).map(function(data) {
            return self.setOptions(EMBEDS[name](data));
          })
        ;
      })
    ;
  };
});

// Please see the jaltekruse fork of mathquill, the lrn/matrix branch has matrix support!
// https://github.com/jaltekruse/mathquill/blob/lrn/matrix/src/commands/math/commands.js
// Thank you to eoghanmcilwaine (Eoghan McIlwaine) for writing this :)
// The code is slightly modified to work with newer version of mathquill
var Environments = {};

LatexCmds.begin = P(MathCommand, function(_, super_) {
  _.parser = function() {
    var string = Parser.string;
    var regex = Parser.regex;
    var optWhitespace = Parser.optWhitespace;
    return string('{')
      .then(regex(/^[a-zA-Z]*/))
      .skip(string('}'))
      .then(function (env) {
          return (Environments[env] ?
            Environments[env]().parser() :
            Parser.fail('unknown environment type: '+env)
          ).skip(string('\\end{'+env+'}'));
      })
    ;
  };
});

var Environment = P(MathCommand, function(_, super_) {
  _.template = [['\\begin{', '}'], ['\\end{', '}']];
  _.wrappers = function () {
    return [
      _.template[0].join(this.envType),
      _.template[1].join(this.envType)
    ];
  };
});

var Matrix =
Environments.matrix = P(Environment, function(_, super_) {

  var delimiters = {
    column: '&',
    row: '\\\\'
  };
  _.parentheses = {
    left: null,
    right: null
  };
  _.envType = 'matrix';

  _.createBlocks = function() {
    var cmd = this,
      blocks = cmd.blocks = [],
      prevRow, i = 0;

    this.htmlTemplate.replace(/&\d+/g, function (match, index) {
      var row = cmd.htmlTemplate.substring(0, index).match(/<tr[^>]*>/ig).length - 1;
      blocks[i] = MatrixCell(row);
      blocks[i].adopt(cmd, cmd.ends[R], 0);
      prevRow = row;
      i++;
    });
  };
  _.reflow = function() {
    setTimeout(() => {
      var blockjQ = this.jQ.children('table');

      var height = blockjQ.outerHeight()/+blockjQ.css('fontSize').slice(0,-2);
      var parens = this.jQ.children('.mq-paren');
      if (parens.length) {
        scale(parens, min(1 + .2*(height - 1), 1.2), 1.05*height);
      }

      if (this.extraClass === "mq-align") {
        this.align();
      }
    }, 0);
  };

  // Align "mq-aligned" elements vertically
  _.align = function() {
    table = this.jQ.children('table')[0];
    let maxCols = 0;
    for (const row of table.rows) {
      maxCols = Math.max(maxCols, row.cells.length);
    }

    if (maxCols === 0) {
      return; // Skip empty tables
    }

    // Loop through cols
    for (let colIndex = 0; colIndex < maxCols; colIndex++) {
      let maxOffset = 0;
      const cellsInColumn = [];

      // Only store elements with an mq-aligned
      for (const row of table.rows) {
        const cell = row.cells[colIndex];
        if (cell) {
          const operatorSpan = cell.querySelector('span.mq-aligned');
          if (operatorSpan) {
            cellsInColumn.push({
              cell: cell,
              operatorSpan: operatorSpan
            });
          }
        }
      }

      // Get maximum offset, that one gets no padding
      cellsInColumn.forEach(item => {
        let paddingLeft = parseInt(item.cell.style.paddingLeft, 10);
        if (paddingLeft !== paddingLeft) { // isnt that wack?
          // Its NaN, set to 0
          paddingLeft = 0;
        }
        // Offset from "0" (left if there were no padding)
        const currentOffset = item.operatorSpan.offsetLeft - paddingLeft;
        item.offset = currentOffset;
        maxOffset = Math.max(maxOffset, currentOffset);
      });

      // Align!
      cellsInColumn.forEach(item => {
        const requiredMargin = maxOffset - item.offset;
        item.cell.style.paddingLeft = Math.max(0, requiredMargin) + 'px';
      });
    }
  }


  _.latex = function() {
    var latex = '';
    var row;

    this.eachChild(function (cell) {
      if (typeof row !== 'undefined') {
        latex += (row !== cell.row) ?
          delimiters.row :
          delimiters.column;
      }
      row = cell.row;
      latex += cell.latex();
    });

    return this.wrappers().join(latex);
  };
  _.html = function() {
    var cells = [], trs = '', i=0, row;

    function parenHtml(paren) {
      return (paren) ?
          '<span class="mq-scaled mq-paren">'
        +   paren
        + '</span>' : '';
    }

    // Build <tr><td>.. structure from cells
    this.eachChild(function (cell) {
      if (row !== cell.row) {
        row = cell.row;
        trs += '<tr>$tds</tr>';
        cells[row] = [];
      }
      cells[row].push('<td>&'+(i++)+'</td>');
    });

    this.htmlTemplate =
        '<span class="mq-matrix ' + this.extraClass + ' mq-non-leaf">'
      +   parenHtml(this.parentheses.left)
      +   '<table class="mq-non-leaf">'
      +     trs.replace(/\$tds/g, function () {
              return cells.shift().join('');
            })
      +   '</table>'
      +   parenHtml(this.parentheses.right)
      + '</span>'
    ;

    return super_.html.call(this);
  };

  _.createLeftOf = function(cursor) {
    this.cursor = cursor;

    var rows = 1;
    var columns = 1;

    this.defaultHtmlTemplate = this.defaultHtmlTemplate || this.generateHtmlTemplate(rows, columns);
    _.htmlTemplate = this.defaultHtmlTemplate;
    super_.createLeftOf.call(this, cursor);
  };
  // Return string name of this matrix type - e.g. matrix, Bmatrix, pmatrix
  _.getMatrixName = function () {
    return this.ctrlSeq.replace('\\', '');
  }
  _.generateHtmlTemplate = function(numRows, numColumns) {
    var matrix = '<span class="mq-matrix ' + this.extraClass + ' mq-non-leaf">' + parenTemplate(this.parentheses.left);
    matrix += '<table class="mq-non-leaf">';

    numRows = 1;
    numColumns = 1;

    var count = 0;
    for(var row = 0; row < numRows; row++) {
      matrix += '<tr>';
      for(var col = 0; col < numColumns; col++) {
        matrix += '<td>&' + count + '</td>';
        count++;
      }
      matrix += '</tr>';
    }
    matrix += '</table>';
    matrix += parenTemplate(this.parentheses.right) + '</span>';
    return matrix;

    function parenTemplate(paren) {
      return paren ? '<span class="mq-paren mq-scaled">' + paren + '</span>' : '';
    }
  };
  _.htmlTemplate = _.generateHtmlTemplate(1,1);
  _.parser = function() {
    var self = this;
    var optWhitespace = Parser.optWhitespace;
    var string = Parser.string;

    return optWhitespace
    .then(string(delimiters.column)
      .or(string(delimiters.row))
      .or(latexMathParser.block))
    .many()
    .skip(optWhitespace)
    .then(function(items) {
      var blocks = [];
      var row = 0;
      self.blocks = [];

      function addCell() {
        self.blocks.push(MatrixCell(row, self, blocks));
        blocks = [];
      }

      for (var i=0; i<items.length; i+=1) {
        if (items[i] instanceof MathBlock) {
          blocks.push(items[i]);
        } else {
          addCell();
          if (items[i] === delimiters.row) row+=1;
        }
      }
      addCell();
      return Parser.succeed(self);
    });
  };
  // Relink all the cells after parsing
  _.finalizeTree = function() {
    var table = this.jQ.find('table');
    table.toggleClass('mq-rows-1', table.find('tr').length === 1);
    this.relink();
  };
  // Set up directional pointers between cells
  _.relink = function() {
    var blocks = this.blocks;
    var rows = [];
    var row, column, cell;

    // Use a for loop rather than eachChild
    // as we're still making sure children()
    // is set up properly
    for (var i=0; i<blocks.length; i+=1) {
      cell = blocks[i];
      if (row !== cell.row) {
        row = cell.row;
        rows[row] = [];
        column = 0;
      }
      rows[row][column] = cell;

      // Set up horizontal linkage
      cell[R] = blocks[i+1];
      cell[L] = blocks[i-1];

      // Set up vertical linkage
      if (rows[row-1] && rows[row-1][column]) {
        cell.upOutOf = rows[row-1][column];
        rows[row-1][column].downOutOf = cell;
      }

      column+=1;
    }

    // set start and end blocks of matrix
    this.ends[L] = blocks[0];
    this.ends[R] = blocks[blocks.length-1];
  };
  // Deleting a cell will also delete the current row and
  // column if they are empty, and relink the matrix.
  _.deleteCell = function(currentCell) {
    var rows = [], columns = [], myRow = [], myColumn = [];
    var blocks = this.blocks, row, column;

    // Create arrays for cells in the current row / column
    this.eachChild(function (cell) {
      if (row !== cell.row) {
        row = cell.row;
        rows[row] = [];
        column = 0;
      }
      columns[column] = columns[column] || [];
      columns[column].push(cell);
      rows[row].push(cell);

      if (cell === currentCell) {
        myRow = rows[row];
        myColumn = columns[column];
      }

      column+=1;
    });

    function isEmpty(cells) {
      var empties = [];
      for (var i=0; i<cells.length; i+=1) {
        if (cells[i].isEmpty()) empties.push(cells[i]);
      }
      return empties.length === cells.length;
    }

    function remove(cells) {
      for (var i=0; i<cells.length; i+=1) {
        if (blocks.indexOf(cells[i]) > -1) {
          cells[i].remove();
          blocks.splice(blocks.indexOf(cells[i]), 1);
        }
      }
    }

    if (isEmpty(myRow) && myColumn.length > 1) {
      row = rows.indexOf(myRow);
      // Decrease all following row numbers
      this.eachChild(function (cell) {
        if (cell.row > row) cell.row-=1;
      });
      // Dispose of cells and remove <tr>
      remove(myRow);
      this.jQ.find('tr').eq(row).remove();
    }
    if (isEmpty(myColumn) && myRow.length > 1) {
      remove(myColumn);
    }
    this.finalizeTree();
  };
  _.addRow = function(afterCell) {
    var previous = [], newCells = [], next = [];
    var newRow = $('<tr></tr>'), row = afterCell.row;
    var columns = 0, block, column;

    this.eachChild(function (cell) {
      // Cache previous rows
      if (cell.row <= row) {
        previous.push(cell);
      }
      // Work out how many columns
      if (cell.row === row) {
        if (cell === afterCell) column = columns;
        columns+=1;
      }
      // Cache cells after new row
      if (cell.row > row) {
        cell.row+=1;
        next.push(cell);
      }
    });

    // Add new cells, one for each column
    for (var i=0; i<columns; i+=1) {
      block = MatrixCell(row+1);
      block.parent = this;
      newCells.push(block);

      // Create cell <td>s and add to new row
      block.jQ = $('<td class="mq-empty">')
        .attr(mqBlockId, block.id)
        .appendTo(newRow);
    }

    // Insert the new row
    this.jQ.find('tr').eq(row).after(newRow);
    this.blocks = previous.concat(newCells, next);
    return newCells[column];
  };
  _.addColumn = function(afterCell) {
    var rows = [], newCells = [];
    var column, block;

    // Build rows array and find new column index
    this.eachChild(function (cell) {
      rows[cell.row] = rows[cell.row] || [];
      rows[cell.row].push(cell);
      if (cell === afterCell) column = rows[cell.row].length;
    });

    // Add new cells, one for each row
    for (var i=0; i<rows.length; i+=1) {
      block = MatrixCell(i);
      block.parent = this;
      newCells.push(block);
      rows[i].splice(column, 0, block);

      block.jQ = $('<td class="mq-empty">')
        .attr(mqBlockId, block.id);
    }

    // Add cell <td> elements in correct positions
    this.jQ.find('tr').each(function (i) {
      $(this).find('td').eq(column-1).after(rows[i][column].jQ);
    });

    // Flatten the rows array-of-arrays
    this.blocks = [].concat.apply([], rows);
    return newCells[afterCell.row];
  };
  _.insert = function(method, afterCell, ctrlr) {
    var cellToFocus = this[method](afterCell);
    this.cursor = ctrlr.cursor;
    this.finalizeTree();
    this.bubble(function (node) { node.reflow(); });
    this.cursor.insAtRightEnd(cellToFocus);
  };
  _.backspace = function(cell, dir, cursor, finalDeleteCallback) {
    var dirwards = cell[dir];
    if (cell.isEmpty()) {
      this.deleteCell(cell);
      while (dirwards &&
        dirwards[dir] &&
        this.blocks.indexOf(dirwards) === -1) {
          dirwards = dirwards[dir];
      }
      if (dirwards) {
        cursor.insAtDirEnd(-dir, dirwards);
      }
      if (this.blocks.length === 1 && this.blocks[0].isEmpty()) {
        finalDeleteCallback();
        this.finalizeTree();
      }
      this.bubble(function (node) { node.reflow(); });
    }
  };
});

Environments.align = P(Matrix, function(_, super_) {
  _.envType = 'align';
  _.extraClass = 'mq-align';

  _.parentheses = {
    left: '',
    right: ''
  };
});

Environments.table = P(Matrix, function(_, super_) {
  _.envType = 'table';
  _.extraClass = 'mq-table';

  _.parentheses = {
    left: '',
    right: ''
  };
});

Environments.pmatrix = P(Matrix, function(_, super_) {
  _.envType = 'pmatrix';
  _.extraClass = '';

  _.parentheses = {
    left: '(',
    right: ')'
  };
});

Environments.cases = P(Matrix, function(_, super_) {
  _.envType = 'cases';
  _.extraClass = '';

  _.parentheses = {
    left: '{',
    right: ''
  };
});

Environments.bmatrix = P(Matrix, function(_, super_) {
  _.envType = 'bmatrix';
  _.extraClass = '';

  _.parentheses = {
    left: '[',
    right: ']'
  };
});

Environments.Bmatrix = P(Matrix, function(_, super_) {
  _.envType = 'Bmatrix';
  _.extraClass = '';

  _.parentheses = {
    left: '{',
    right: '}'
  };
});

Environments.vmatrix = P(Matrix, function(_, super_) {
  _.envType = 'vmatrix';
  _.extraClass = '';

  _.parentheses = {
    left: '|',
    right: '|'
  };
});

Environments.Vmatrix = P(Matrix, function(_, super_) {
  _.envType = 'Vmatrix';
  _.extraClass = '';

  _.parentheses = {
    left: '&#8214;',
    right: '&#8214;'
  };
});

// Replacement for mathblocks inside matrix cells
// Adds matrix-specific keyboard commands
var MatrixCell = P(MathBlock, function(_, super_) {
  _.init = function(row, parent, replaces) {
    super_.init.call(this);
    this.row = row;
    if (parent) {
      this.adopt(parent, parent.ends[R], 0);
    }
    if (replaces) {
      for (var i=0; i<replaces.length; i++) {
        replaces[i].children().adopt(this, this.ends[R], 0);
      }
    }
  };
  _.keystroke = function(key, e, ctrlr) {
    switch (key) {
    case 'Shift-Right':
      e.preventDefault();
      return this.parent.insert('addColumn', this, ctrlr);
      break;
    case 'Shift-Down':
      return this.parent.insert('addRow', this, ctrlr);
      break;
    }
    return super_.keystroke.apply(this, arguments);
  };

  _.deleteOutOf = function(dir, cursor) {
    var self = this, args = arguments;
    this.parent.backspace(this, dir, cursor, function () {
      // called when last cell gets deleted
      return super_.deleteOutOf.apply(self, args);
    });
  }
});