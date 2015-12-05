(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject() {
		// podział arguments		
		var argsArray = Array.prototype.slice.call(arguments);
		var Constructor = argsArray.shift();
		var objectType = Object.create(Constructor.prototype);
		var result = Constructor.apply(objectType,argsArray);
		
		if (typeof(result) === 'object' && result !== null)
			return result;

		return objectType;
	};

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


