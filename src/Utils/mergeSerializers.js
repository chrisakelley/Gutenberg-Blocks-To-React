import merge from 'lodash.merge';

const mergeSerializers = (defaultSerializer, customSerializers) => {
	return Array.isArray(customSerializers)
		? merge({}, defaultSerializer, ...customSerializers)
		: merge({}, defaultSerializer, customSerializers);
};

export default mergeSerializers;
