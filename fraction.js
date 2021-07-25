"use strict";var Fraction=function(t,n){if(void 0!==t&&n)("number"==typeof t||t instanceof Number)&&("number"==typeof n||n instanceof Number)?(this.numerator=t,this.denominator=n):("string"==typeof t||t instanceof String)&&("string"==typeof n||n instanceof String)&&(this.numerator=parseFloat(t.replace(",",".")),this.denominator=parseFloat(n.replace(",",".")));else if(void 0===n){var r=t;if(r instanceof Fraction)this.numerator=r.numerator,this.denominator=r.denominator;else if("number"==typeof r||r instanceof Number)this.numerator=r,this.denominator=1;else if("string"==typeof r||r instanceof String){var o,e,i=r.split(" ");if(i[0]&&(o=i[0]),i[1]&&(e=i[1]),o%1==0&&e&&e.match("/"))return new Fraction(o).add(new Fraction(e));if(!o||e)return;if(("string"==typeof o||o instanceof String)&&o.match("/")){var a=o.split("/");this.numerator=a[0],this.denominator=a[1]}else{if(("string"==typeof o||o instanceof String)&&o.match("."))return new Fraction(parseFloat(o.replace(",",".")));this.numerator=parseInt(o),this.denominator=1}}}this.normalize()};Fraction.prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if(isNaN(this.denominator))return"NaN";var t="";this.numerator<0!=this.denominator<0&&(t="-");var n=Math.abs(this.numerator),r=Math.abs(this.denominator),o=Math.floor(n/r);return 0!=o&&(t+=o),0!=(n%=r)&&(0!=o&&(t+=" "),t+=n+"/"+r),t.length>0?t:"0"},Fraction.prototype.toTeX=function(t){if(isNaN(this.denominator))return"NaN";var n="";this.numerator<0!=this.denominator<0&&(n="-");var r=Math.abs(this.numerator),o=Math.abs(this.denominator);if(!t)return 1===o?n+r:n+"\\frac{"+r+"}{"+o+"}";var e=Math.floor(r/o);return 0!=e&&(n+=e),0!=(r%=o)&&(n+="\\frac{"+r+"}{"+o+"}"),n.length>0?n:"0"},Fraction.prototype.rescale=function(t){return this.numerator*=t,this.denominator*=t,this},Fraction.prototype.add=function(t){var n=this.clone();t=t instanceof Fraction?t.clone():new Fraction(t);var r=n.denominator;return n.rescale(t.denominator),n.numerator+=t.numerator*r,n.normalize()},Fraction.prototype.subtract=function(t){var n=this.clone();t=t instanceof Fraction?t.clone():new Fraction(t);var r=n.denominator;return n.rescale(t.denominator),n.numerator-=t.numerator*r,n.normalize()},Fraction.prototype.multiply=function(t){var n=this.clone();if(t instanceof Fraction)n.numerator*=t.numerator,n.denominator*=t.denominator;else{if("number"!=typeof t)return n.multiply(new Fraction(t));n.numerator*=t}return n.normalize()},Fraction.prototype.divide=function(t){var n=this.clone();if(t instanceof Fraction)n.numerator*=t.denominator,n.denominator*=t.numerator;else{if("number"!=typeof t)return n.divide(new Fraction(t));n.denominator*=t}return n.normalize()},Fraction.prototype.equals=function(t){t instanceof Fraction||(t=new Fraction(t));var n=this.clone().normalize();t=t.clone().normalize();return n.numerator===t.numerator&&n.denominator===t.denominator},Fraction.prototype.normalize=function(){var t=function(t){return"number"==typeof t&&(t>0&&t%1>0&&t%1<1||t<0&&t%-1<0&&t%-1>-1)},n=function(t,n){if(n){var r=Math.pow(10,n);return Math.round(t*r)/r}return Math.round(t)};return function(){if(t(this.denominator)){var r=n(this.denominator,9),o=Math.pow(10,r.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*o),this.numerator*=o}if(t(this.numerator)){r=n(this.numerator,9),o=Math.pow(10,r.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*o),this.denominator*=o}var e=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=e,this.denominator/=e,this.denominator<0&&(this.numerator*=-1,this.denominator*=-1),this}}(),Fraction.gcf=function(t,n){if(arguments.length<2)return t;var r;for(t=Math.abs(t),n=Math.abs(n);n;)r=t%n,t=n,n=r;return t},Fraction.primeFactors=function(t){for(var n=Math.abs(t),r=[],o=2;o*o<=n;)n%o==0?(r.push(o),n/=o):o++;return 1!=n&&r.push(n),r},Fraction.prototype.snap=function(t,n){n||(n=1e-4),t||(t=100);for(var r=this.numerator<0,o=this.numerator/this.denominator,e=Math.abs(o%1),i=r?Math.ceil(o):Math.floor(o),a=1;a<=t;++a)for(var s=0;s<=t;++s){var u=Math.abs(s/a);if(Math.abs(u-e)<n)return new Fraction(i*a+s*(r?-1:1),a)}return new Fraction(this.numerator,this.denominator)},"undefined"!=typeof module&&(module.exports.Fraction=Fraction);

// var x0 = new Fraction('2000000000/030500000');
// console.log(x0.numerator);

// var x1 = new Fraction(37.55);
// console.log(x1);
// console.log(x1.denominator);

// var x2 = (new Fraction(7,3)).multiply(new Fraction(1,2))
// console.log(x2);

// var x3 = (new Fraction(7,3)).divide(new Fraction(1,2))
// console.log(x3);

// var x4 = (new Fraction(3,10)).add(new Fraction(5,9))
// console.log(x4);

// var x5 = (new Fraction(0.25)).add(new Fraction(1,6))
// console.log(x5);

// var x6 = (new Fraction(0.35)).subtract(new Fraction(1,4))
// console.log(x6);

