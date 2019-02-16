'use strict';

/**
 * Dependency injection container.
 * @class
 * @author Chistyakov Ilya <ichistyakovv@gmail.com>
 */
class Container {
    /**
     * Initializes the container with the definitions.
     * @param {object} definitions - The definitions for services.
     */
    constructor(definitions = {}) {
        this._definitions = definitions;
        this._results = {};
    }

    /**
     * Get a service.
     * @return {object} A service object.
     */
    get(id) {
        if (this._results[id])
            return this._results[id];

        const definition = this._definitions[id];

        if (!definition) {
            throw new Error(`Service ${id} not found`);
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
    set(id, definition) {
        if (this._results[id])
            delete this._results[id];

        this._definitions[id] = definition;
    }

    /**
     * Check if definition exists.
     * @param {string} id - The definition identifier.
     * @return {boolean} Whether definition exists or not.
     */
    has(id) {
        return this._definitions[id] ? true : false;
    }
}

export default Container;
