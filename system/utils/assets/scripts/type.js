/** * @author  */String.map("Array Date RegExp", function(nativeType){	window[nativeType].prototype.xtype = nativeType.toLowerCase();});

/**
 * 返回一个变量的类型的字符串形式。
 * @param {Object} obj 变量。
 * @return {String} 所有可以返回的字符串： string number boolean undefined null
 *         array function element class date regexp object。
 * @example <code> 
 * Object.type(null); // "null"
 * Object.type(); // "undefined"
 * Object.type(new Function); // "function"
 * Object.type(+'a'); // "number"
 * Object.type(/a/); // "regexp"
 * Object.type([]); // "array"
 * </code>
 */
Object.type = function(obj) {

		// 获得类型 。
	var typeName = typeof obj;

	return typeName === "object" ?
		obj === null ? 
					"null" :
					obj.xtype || (
						typeof obj.nodeType === "number" ? "node" : 
						typeName
					)
		: typeName;
}