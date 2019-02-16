'use strict';
/**
 * Dependency injection container.
 * @class
 * @author Chistyakov Ilya <ichistyakovv@gmail.com>
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Container =
/*#__PURE__*/
function () {
  /**
   * Initializes the container with the definitions.
   * @param {object} definitions - The definitions for services.
   */
  function Container() {
    var definitions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Container);

    this._definitions = definitions;
    this._results = {};
  }
  /**
   * Get a service.
   * @return {object} A service object.
   */


  _createClass(Container, [{
    key: "get",
    value: function get(id) {
      if (this._results[id]) return this._results[id];
      var definition = this._definitions[id];

      if (!definition) {
        throw new Error("Service ".concat(id, " not found"));
      }

      if (typeof definition === 'function') {
        this._results[id] = definition(this);
      } else {
        this._results[id] = definition;
      }

      return this._results[id];
    }
    /**
     * Set the definition.
     * @param {string} id - The definition identifier.
     * @param {object} definition - The definition.
     */

  }, {
    key: "set",
    value: function set(id, definition) {
      if (this._results[id]) delete this._results[id];
      this._definitions[id] = definition;
    }
    /**
     * Check if definition exists.
     * @param {string} id - The definition identifier.
     * @return {boolean} Whether definition exists or not.
     */

  }, {
    key: "has",
    value: function has(id) {
      return this._definitions[id] ? true : false;
    }
  }]);

  return Container;
}();

var _default = Container;
exports.default = _default;